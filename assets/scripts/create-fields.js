export default function (field, id){

    const div = document.createElement('div');
    div.className = 'width-1 mb-2'

    const fieldLabel = document.createElement('label')
    fieldLabel.classList.add('w-100')
    if(field.label) fieldLabel.innerText = field.label;

    let input;
    if(field.input.type === "textarea"){
        input = document.createElement('textarea');
    }else if(field.input.type === "technology"){
        input = document.createElement('select')
        field.input.technologies.forEach((item, id) => {
            const technology = document.createElement('option');
            technology.value = item
            technology.innerHTML = item;
            input.appendChild(technology);
        })
    }
    else{
        input = document.createElement('input');
        input.type = field.input.type;
    }

    input.id = 'field-' + id;
    fieldLabel.setAttribute('for', input.id);

    if(input.type === "checkbox") {
        input.classList.add('form-check-input')
    } else {
        input.className = 'form-control w-100'
    }

    if(field.input.type === "color") {
        const colorList = document.createElement("datalist")
        colorList.id = 'colorList-'+id;

        field.input.colors.forEach(function(color){
            const option = document.createElement("option");
            option.value = color;

            colorList.appendChild(option);
        })

        div.appendChild(colorList);
        input.setAttribute('list', colorList.id)
    }

    Object.entries(field.input).forEach(([key, value]) => {
        if (key !== 'colors'
            && key !== 'technologies'
            && key !== 'filetype'
            && value !== 'technology'
        ) {
            input.setAttribute(key, value);
            console.log(`${key}: ${value}`);
        }
    })

    field.input.filetype?.forEach((item, id) => {
        if(field.input.filetype.length > id + 1) {
            input.accept = input.accept + '.' + item + ',';
        } else {
            input.accept = input.accept + '.' + item;
        }
    })


    div.appendChild(fieldLabel);
    div.appendChild(input);

    return div;
}