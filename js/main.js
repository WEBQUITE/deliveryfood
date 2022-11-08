const btnCart = document.getElementById('cart');
const modal = document.querySelector('modal');
const btnClose = document.querySelector('.btn-close');

const modal0pen = () => {
modal.classList.toggle ('modal--close');
}

button--secondary.addEventListener ('click', modal0pen);
but_close.addEventListener('click', modal0pen);

modal.addEventListener('click', (event) => {
    if (event.target == modal){
        console.log("модуль");  
    } else if (event.target.classList.contains("modal-window")){
        console.log('модальное окно');
    } else {
        console.log('нет')
    }
})