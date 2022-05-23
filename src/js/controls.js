const sections = document.querySelectorAll('section');
const ctrlBtns = document.querySelectorAll('.control-btn');


let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');


const pageControls = () => {
    //Button Click active class/section
    for(let i = 0; i < ctrlBtns.length; i++){
        ctrlBtns[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-control');
            let currentSec = document.querySelectorAll('.active-section');
            currentBtn[0].className = currentBtn[0].className.replace(' active-control', '');
            currentSec[0].className = currentSec[0].className.replace(' active-section', '');
            this.className += ' active-control';
            sections[i].className += ' active-section';
        })
    }

    // Toggle Dark/light Theme
    const themeBtn = document.querySelector('.btn-toggle-theme');

    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')
    })

    // ContactForm submit btn
    const contactBtn = document.querySelector('.submit-btn > .main-btn');

    
    contactBtn.addEventListener('click', (e) => {
        e.preventDefault();
        contactBtn.classList.toggle('loading');
    
        let formData = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value
        }
        
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.onload = function () {
            console.log(xhr.responseText);
            if(xhr.responseText == 'success') {
                contactBtn.classList.toggle('loading');
                alert('Email sent');
                name.value = '';
                email.value = '';
                subject.value = '';
                message.value = '';
            } else {
                contactBtn.classList.toggle('loading');
                alert('Email could not be sent!')
            }
        }

        xhr.send(JSON.stringify(formData));
    })
}

export {pageControls};