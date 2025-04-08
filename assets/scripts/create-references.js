export default function (reference, id) {
    if (reference.input) {const input = document.createElement("input");
        input.type = reference.input.type;
        input.checked = false
        input.classList.add('me-1');
        if (reference.required) input.required = true;
        return input;
    } else {
        if(reference["text without ref"] && reference.text){
            const plainText = document.createElement("span")
            const anchor = document.createElement("a");

            plainText.appendChild(document.createTextNode(reference["text without ref"]))

            anchor.href = reference.ref;
            anchor.appendChild(document.createTextNode(reference.text))
            plainText.appendChild(document.createTextNode(' '));
            plainText.appendChild(anchor);
            plainText.classList.add('me-2');
            return plainText;
        }
        else if(reference["text without ref"]){
            const plainText = document.createElement("span")
            plainText.appendChild(document.createTextNode(reference["text without ref"]))
            plainText.classList.add('me-2');
            return plainText;
        } else if(reference.text) {
            const anchor = document.createElement("a");
            anchor.href = reference.ref;
            anchor.classList.add('me-2');
            anchor.appendChild(document.createTextNode(reference.text))
            return anchor;
        }
    }
}