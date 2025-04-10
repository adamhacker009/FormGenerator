export default function (buttonInfo, id) {
    const button = document.createElement("button");
    button.className = "btn btn-primary btn-block w-100 me-2"
    button.innerHTML = buttonInfo.text;

    return button;
}