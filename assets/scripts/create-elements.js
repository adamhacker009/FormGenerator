import createFields from "./create-fields.js";
import createReferences from "./create-references.js";
import createButtons from "./create-buttons.js";

export default function (elements) {
    const form = document.createElement('form');
    const formHead = document.createElement('h3');
    form.classList.add('container-lg');
    formHead.classList.add('h3')
    formHead.append(document.createTextNode(elements.name));

    form.appendChild(formHead)

    elements.fields.forEach((field, id) => {
        form.appendChild(createFields(field, id));
    })

    const formRow = document.createElement('div');
    formRow.classList.toggle('form-group');

    if(elements.references){
        elements.references.forEach((reference, id) => {
            const referenceWrapper = document.createElement('div');

            referenceWrapper.append(createReferences(reference, id));
            formRow.appendChild(referenceWrapper);
        })
    }

    if(elements.buttons){
        elements.buttons.forEach((button, id) => {
            const buttonWrapper = document.createElement('div');

            buttonWrapper.append(createButtons(button, id));
            formRow.appendChild(buttonWrapper);
        })
    }

    form.appendChild(formRow);

    document.querySelector('main').replaceChild(form, document.querySelector('form'));
}