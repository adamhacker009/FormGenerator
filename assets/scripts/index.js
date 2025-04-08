import createElements from './create-elements.js';

const getFile = document.querySelector('#file');
const formClearButton = document.querySelector('#form-clear');

getFile.addEventListener('change', handleFileSelection);
formClearButton.addEventListener('click', removeForm);

function handleFileSelection(e) {

    const fr = new FileReader();

    fr.readAsText(getFile.files[0])

    fr.addEventListener('load', ()=>{
        createElements(JSON.parse(fr.result));
    });
}

function removeForm(e) {
    document.querySelector("#form").innerHTML = '';
    document.querySelector('#file').value = '';
}