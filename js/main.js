(function () {
    const header=document.querySelector('.header')
    window.onscroll=()=>{
        if(window.pageYOffset>50) {
            header.classList.add('header_active')
        } else {
            header.classList.remove('header_active')
         }
    }
}())

(function () {
const burgerMenu=document.querySelector('.burger')
const nawItem= document.querySelector('.header_nav')
const closeItem=document.querySelector('.header_close')
burgerMenu.addEventListener('click', ()=>{
    nawItem.classList.add('header_nav_active')
})
closeItem.addEventListener('click', ()=>{
    nawItem.classList.remove('header_nav_active')
})

}())