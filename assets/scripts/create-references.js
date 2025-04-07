export default function (reference, id) {
    if (reference.input) {
        const wrapper = document.createElement('div');
        const input = document.createElement("input");
        input.type = reference.input.type;
        input.checked = false
        if (reference.required) input.required = true;
        wrapper.append(input);
        return wrapper;
    } else {
        const wrapper = document.createElement("div");

        if(reference["text without ref"] && reference.text){
            const plainText = document.createElement("p")
            const anchor = document.createElement("a");

            plainText.appendChild(document.createTextNode(reference["text without ref"]))

            anchor.href = reference.ref;
            anchor.appendChild(document.createTextNode(reference.text))
            plainText.appendChild(document.createTextNode(' '));
            plainText.appendChild(anchor);
            wrapper.append(plainText);
        }
        else if(reference["text without ref"]){
            const plainText = document.createElement("p")
            plainText.appendChild(document.createTextNode(reference["text without ref"]))
            wrapper.appendChild(plainText);
        } else if(reference.text) {
            const anchor = document.createElement("a");
            anchor.href = reference.ref;
            anchor.appendChild(document.createTextNode(reference.text))
            wrapper.appendChild(anchor);
        }
        return wrapper;
    }
}