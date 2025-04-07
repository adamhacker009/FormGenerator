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

    const referencesLabel = document.createElement('label');

    if(elements.references){
        elements.references.forEach((reference, id) => {

            referencesLabel.appendChild(createReferences(reference, id));
        })
    }

    form.appendChild(referencesLabel);

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