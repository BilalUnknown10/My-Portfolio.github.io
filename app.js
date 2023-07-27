const menu = document.getElementById('menu');
const nav = document.getElementById('navbar');




let check = true
menu.addEventListener('click', () => {

    if(check === true){
        check = false;
         nav.classList.add('navbar2');
         console.log(check)
    }else{
        check = true;
        nav.classList.remove('navbar2');
        console.log(check)
    }
   
});