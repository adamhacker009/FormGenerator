export default function (field, id){

    const div = document.createElement('div');
    div.classList.toggle('form-group')
    div.classList.toggle('mb-2')

    const fieldLabel = document.createElement('label')
    if (field.label) fieldLabel.innerHTML = field.label;

    const input = document.createElement('input');

    input.type = field.input.type;
    input.id = 'field-' + id;


    if(input.type !== "checkbox")input.classList.add('form-control');
    else input.classList.add('form-check-input')

    if(field.input.type === "color") {
        const colorList = document.createElement("datalist")
        colorList.id = 'colorList-'+id;

        field.input.colors.forEach(function(color){
            const option = document.createElement("option");
            option.value = color;

            colorList.appendChild(option);
        })

        fieldLabel.appendChild(colorList);
        input.setAttribute('list', colorList.id)
    }

    if(field.input.required) input.required = true;
    if(field.input.checked) input.checked = false;
    if(field.input.placeholder) input.placeholder = field.input.placeholder;
    if(field.input.mask) input.placeholder = field.input.mask;

    fieldLabel.appendChild(input);
    div.appendChild(fieldLabel);

    return div;
}