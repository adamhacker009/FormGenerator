export default function (reference, id) {
    if (reference.input) {const input = document.createElement("input");
        input.type = reference.input.type;
        input.checked = false
        input.classList.add('me-1');
        if (reference.required) input.required = true;
        return input;
    } else if(reference["text without ref"] && reference.text){
            const plainText = document.createElement("span")
            const anchor = document.createElement("a");

            plainText.innerHTML = reference["text without ref"]

            anchor.href = reference.ref;
            anchor.innerHTML = reference.text
            plainText.appendChild(anchor);
            plainText.classList.add('me-2');
            return plainText;

    } else if(reference["text without ref"]){
            const plainText = document.createElement("span")
            plainText.innerHTML = reference["text without ref"]
            plainText.classList.add('me-2');
            return plainText;

    } else if(reference.text) {
            const anchor = document.createElement("a");
            anchor.href = reference.ref;
            anchor.classList.add('me-2');
            anchor.innerHTML = reference.text
            return anchor;
    }
}