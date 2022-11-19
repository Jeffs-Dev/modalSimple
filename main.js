
/*  Abrindo um modal */
const btnModal = document.getElementById('btnModal');


function openModal(){
    const modal = document.querySelector('.modal')
    modal.classList.add('show');
}



btnModal.addEventListener('click', openModal);


/* Fechando o modal */

function closeModal() {
    
    const closeModalBtn = document.querySelector('.modal');
    closeModalBtn.classList.remove('show');
}

const btnCloseModal = document.querySelector('.btnCloseModal');

btnCloseModal.addEventListener('click', closeModal)








