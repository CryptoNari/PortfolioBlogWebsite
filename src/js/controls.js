const sections = document.querySelectorAll('section');
const ctrlBtns = document.querySelectorAll('.control-btn');

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

   /*  // Toggle Dark/light Theme
    const themeBtn = document.querySelector('.btn-toggle-theme');

    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')
    })
 */
}



export {pageControls};