let randomWord=document.getElementById('randomWord');
const button=document.querySelector('button')
let alphabet='АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';

button.addEventListener('click', () => {
    let randomNumber1=Math.floor(Math.random()*alphabet.length);
    let randomNumber2=Math.floor(Math.random()*alphabet.length);
    let randomNumber3=Math.floor(Math.random()*alphabet.length);
    let randomNumber4=Math.floor(Math.random()*alphabet.length);
    let result=alphabet[randomNumber1]+alphabet[randomNumber2]+alphabet[randomNumber3]+alphabet[randomNumber4];
    randomWord.textContent=result;
});