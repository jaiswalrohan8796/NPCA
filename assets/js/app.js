
const cardBtn = document.getElementsByClassName('card-wrapper');
const popCardModal = document.getElementById("pop-card-modal")
const cancelBtn = document.getElementById('pop-card-cancel');
function showCardModal() {
    popCardModal.style.display = 'flex';
    popCardModal.style.animation = 'pop-card 0.5s ease-out forwards';
}
function hideCardModal() {
    popCardModal.style.display ='none';
}


    