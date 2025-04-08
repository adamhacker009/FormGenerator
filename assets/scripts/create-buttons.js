export default function (buttonInfo, id) {
    const button = document.createElement("button");
    button.classList.toggle('btn');
    button.classList.toggle('btn-primary');
    button.classList.toggle('btn-block');
    button.classList.toggle('w-100')

    const buttonText = document.createTextNode(buttonInfo.text);
    button.appendChild(buttonText);

    return button;
}