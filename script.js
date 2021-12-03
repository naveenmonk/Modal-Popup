const openBtn = document.querySelector('.open')
const closeBtn = document.querySelector('.close')
const modal = document.querySelector('.modal')
const modalPop = document.querySelector('.modal-popup')

const modalOpen = () => {
    modal.style.display = 'block'
    modalPop.style.display = 'none'
}

openBtn.addEventListener('click', modalOpen)

closeBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    modal.style.display = 'none'
    modalPop.style.display = 'block'
})
document.addEventListener("keyup", (event) => {
    if (event.code === "Space") {
     modalOpen();
    }
  });