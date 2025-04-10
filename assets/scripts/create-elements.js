import createFields from "./create-fields.js";
import createReferences from "./create-references.js";
import createButtons from "./create-buttons.js";

export default function (elements) {
    const form = document.querySelector('form');
    const formHead = document.createElement('h3');
    const formFields = document.createElement('div');
    const formButtons = document.createElement('div');

    let formReferences;

    form.innerHTML = '';

    formHead.className = 'h3 width-1'
    formHead.innerHTML = elements.name;

    form.appendChild(formHead)

    formFields.className = 'width-1'

    elements.fields.forEach((field, id) => {
        formFields.appendChild(createFields(field, id));
    })

    form.appendChild(formFields);

    formButtons.className = 'd-flex width-1 mt-2'


    if(elements.references){
        formReferences = document.createElement('div');

        elements.references.forEach((reference, id) => {

            formReferences.appendChild(createReferences(reference, id));
        })
    }

    form.appendChild(formReferences);

    if(elements.buttons){
        elements.buttons.forEach((button, id) => {
            formButtons.appendChild(createButtons(button, id));
        })
    }

    form.appendChild(formButtons);

    document.querySelector('main').replaceChild(form, document.querySelector('form'));
}