const infoInputs = document.getElementsByClassName('text-input');
const loginInput = document.getElementById('Login-button');
const redHex = document.getElementById('red-hexagon-background')
const greenHex = document.getElementById('green-hexagon-background')
const correctPassword = 'pik@chU';

function infoInputText(event) {
    const el = event.target;
    const val = el.value; 

    if (el.id === 'email-input') {
        console.log('Email typed: ', val);
    }

    if (el.id === 'password-input') {
        console.log('Password typed: ', val);

        if (val != correctPassword) {
            el.classList.add('red-hexagon-background');
        } else {
            el.classList.remove('red-hexagon-background');
        }
        if (val === correctPassword) {
            el.classList.add('green-hexagon-background');
        } else {
            el.classList.remove('green-hexagon-background');
        }

        if (val === '') {
            el.classList.remove('red-hexagon-background');
            el.classList.remove('green-hexagon-background');
        } 
    }
    
}

function loginButtonClick() {
    console.log('Button was Clicked...');

}

loginInput.addEventListener('click', loginButtonClick);

//infoInput.addEventListener('input', infoInputText);

for(let i=0; i<infoInputs.length; i++) {
    var infoInput = infoInputs.item(i);
    infoInput.addEventListener('change', infoInputText);  
    
}

//infoInput.addEventListener('change', infoInputText) 
