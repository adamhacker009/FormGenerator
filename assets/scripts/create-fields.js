export default function (field, id){

    const div = document.createElement('div');
    div.classList.toggle('width-1')
    div.classList.toggle('mb-2')

    const fieldLabel = document.createElement('label')
    fieldLabel.classList.add('w-100')
    if (field.label) fieldLabel.innerHTML = field.label;

    let input;
    if(field.input.type === "textarea"){
        input = document.createElement('textarea');
    }else if(field.input.type === "technology"){
        input = document.createElement('select')
    }
    else{
        input = document.createElement('input');
        input.type = field.input.type;
    }


    input.id = 'field-' + id;

    if(field.input.type === "technology"){
        field.input.technologies.forEach((item, id) => {
            const technology = document.createElement('option');
            technology.value = item
            technology.appendChild(document.createTextNode(item));
            input.appendChild(technology);
        })
    }

    if(input.type !== "checkbox") {
        input.classList.add('form-control');
        input.classList.add('w-100')
    } else input.classList.add('form-check-input')

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
    if(field.input.multiple) input.multiple = true;
    if(field.input.filetype) {
        field.input.filetype.forEach((item, id) => {
            if(field.input.filetype.length > id + 1) {
                input.accept = input.accept + '.' + item + ',';
            } else {
                input.accept = input.accept + '.' + item;
            }
        })
    }

    fieldLabel.appendChild(input);
    div.appendChild(fieldLabel);

    return div;
}