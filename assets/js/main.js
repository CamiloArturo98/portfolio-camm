let navBar = document.querySelector('#nav');
navBar.addEventListener('mouseover', () => {
    navBar.style.transform = 'scale(1.1)';
    navBar.style.transition = 'transform 0.3s ease';
});

navBar.addEventListener('mouseout', () => {
    navBar.style.transform = 'scale(1)';
});

let main = document.querySelectorAll('a');

for (let i = 0; i < main.length; i++) {
    main[i].addEventListener('click', (event) => {
        let href = event.target.getAttribute('href');
        let elementSelected = document.querySelector(href);

        elementSelected.style.transform = 'scale(1.1)';
        elementSelected.style.transition = 'transform 0.3s ease';

        setTimeout(() => {
            elementSelected.style.transform = 'scale(1)';
        }, 300);
    });
}

let burguerBtn = document.querySelector('.menu-toggle'),
    listNav = document.querySelector('#nav-list');

burguerBtn.addEventListener('click', (event) => {
    listNav.style.display = listNav.style.display === 'flex' ? 'none' : 'flex';
    event.preventDefault();
});

let a = document.querySelectorAll('a');

for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('click', (event) => {
        let href = event.target.getAttribute('href');
        let element = document.querySelector(href);

        if (window.innerWidth <= 768) {
            listNav.style.display = 'none';
        }
    });
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        listNav.style.display = 'flex';
    }
});


let form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let message = document.querySelector('#msm').value;
    if (!name.trim() || !email.trim() || !message.trim()) {
        alert('Por favor, completa todos los campos.');
        return;
    }


    let confirmation = document.createElement('p');
    confirmation.textContent = `Gracias ${name}, hemos recibido tu mensaje: "${message}". Responderemos a tu correo: ${email}.`;
    confirmation.style.color = 'green';

    form.parentElement.appendChild(confirmation);

    form.reset();


    setTimeout(() => {
        confirmation.remove();
    }, 5000);
});


let addFieldButton = document.createElement('button');
addFieldButton.textContent = 'Agregar campo extra';
addFieldButton.type = 'button';
addFieldButton.style.marginTop = '10px';

form.appendChild(addFieldButton);

addFieldButton.addEventListener('click', () => {
    let newFieldLabel = document.createElement('label');
    newFieldLabel.textContent = 'Campo extra';
    let newFieldInput = document.createElement('input');
    newFieldInput.type = 'text';
    newFieldInput.required = true;

    form.insertBefore(newFieldLabel, addFieldButton);
    form.insertBefore(newFieldInput, addFieldButton);
});


