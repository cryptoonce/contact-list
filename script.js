let contactos = [
    { nombre: 'Luis Moguea', celular: '3203972107', ubicacion: 'Ciudad Bogotá' },
    { nombre: 'Brenda Manrique', celular: '3209963660', ubicacion: 'Ciudad Bogotá' },
    { nombre: 'Nicol Daniela', celular: '3238078443', ubicacion: 'Ciudad Bogotá' }
];

function mostrarContactos() {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = '';

    contactos.forEach((contacto, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'contact-list-item';

        const nombreElement = document.createElement('h3');
        nombreElement.textContent = contacto.nombre;

        const celularElement = document.createElement('p');
        celularElement.textContent = 'Número de celular: ' + contacto.celular;

        const ubicacionElement = document.createElement('p');
        ubicacionElement.textContent = 'Ubicación: ' + contacto.ubicacion;

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.className = 'edit-btn';
        editButton.addEventListener('click', () => editarContacto(index));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.className = 'delete-btn';
        deleteButton.addEventListener('click', () => eliminarContacto(index));

        listItem.appendChild(nombreElement);
        listItem.appendChild(celularElement);
        listItem.appendChild(ubicacionElement);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        contactList.appendChild(listItem);
    });
}

function agregarContacto(event) {
    event.preventDefault();

    const nameInput = document.getElementById('nameInput');
    const phoneInput = document.getElementById('phoneInput');
    const locationInput = document.getElementById('locationInput');

    const nuevoContacto = {
        nombre: nameInput.value,
        celular: phoneInput.value,
        ubicacion: locationInput.value
    };

    contactos.push(nuevoContacto);
    mostrarContactos();

    nameInput.value = '';
    phoneInput.value = '';
    locationInput.value = '';
}

function editarContacto(index) {
    const nameInput = document.getElementById('nameInput');
    const phoneInput = document.getElementById('phoneInput');
    const locationInput = document.getElementById('locationInput');

    const contacto = contactos[index];
    nameInput.value = contacto.nombre;
    phoneInput.value = contacto.celular;
    locationInput.value = contacto.ubicacion;

    contactos.splice(index, 1);
    mostrarContactos();
}

function eliminarContacto(index) {
    contactos.splice(index, 1);
    mostrarContactos();
}

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', agregarContacto);

mostrarContactos();
