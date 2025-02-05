
const modal = document.querySelector(".modal");
const maskModal = document.querySelector(".modal-mask")

function clickOnBtn() {
  modal.style.left = '50%';
  maskModal.style.visibility = 'visible';
}

function toHideAdress() {
  modal.style.left = '-30%';
  maskModal.style.visibility = 'hidden'
}

