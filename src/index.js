import _ from 'lodash';
import './styles/main.scss';
import printMe from './js/print.js';

//import './logoipsum-logo-50.svg';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;



    // Add the image to our existing div.
    /* const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon); */

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());