const change = document.getElementById('text');
const button = document.getElementById('btn');


setTimeout(() =>{
    button.addEventListener('click', () =>{
    change.textContent ='ボタンがクリックされました';
    });
}, 2000);