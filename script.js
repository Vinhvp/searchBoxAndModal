let activeSearch = document.querySelector('.searchBox-btn');
let searchBox = document.querySelector('.searchBox')
let modalButton = document.querySelector('.modal-btn');
let modalPopup = document.querySelector('.modal-bg');
let modalClose = document.querySelector('.modal-footer-btn');
// activeSearch.classList.remove('active');
// activeSearch.addEventListener('click',function(){
//     activeSearch.classList.add('active');
// })
// activeSearch.addEventListener('mouseover',function(){
//     activeSearch.classList.remove('active');
// })
activeSearch.addEventListener('click',function(){
    // this ở đây là phần click, và phải để function bth
    // console.log(this.parentElement) => ra được class parent của searchBox-btn là searchBox active
    this.parentElement.classList.toggle('active') //toggle là bật tắt
    this.previousElementSibling.focus() //tự động focus vào ô input 
})

modalButton.addEventListener('click',function(){
    this.nextElementSibling.classList.remove('hide');
    searchBox.style.opacity = 0;
})
modalClose.addEventListener('click',function(){
    modalPopup.classList.add('hide')
    searchBox.style.opacity = 1;
})
document.addEventListener('keydown',function(e){
    if(e.keyCode == 27){
        modalPopup.classList.add('hide')
        searchBox.style.opacity = 1;
    }
})