const menubtn=document.querySelector('.menu-btn');
const menu=document.querySelector('.menu');
const menubranding=document.querySelector('.menu-branding');
const menunav=document.querySelector('.menu-nav');
const navitem=document.querySelectorAll('.nav-item');
// set initial state of menu;
let showmenu=false;
menubtn.addEventListener('click',togglemenu);
function togglemenu(){
    if(!showmenu){
menubtn.classList.add('close');
menu.classList.add('show');
menubranding.classList.add('show');
menunav.classList.add('show');
navitem.forEach(item => item.classList.add('show'));
showmenu=true;

    }
    else{
        menubtn.classList.remove('close');
menu.classList.remove('show');
menubranding.classList.remove('show');
menunav.classList.remove('show');
navitem.forEach(item => item.classList.remove('show'));
showmenu=false;

    }

}