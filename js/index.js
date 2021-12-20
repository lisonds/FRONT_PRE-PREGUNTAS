//para el Menu

const menuitems=document.querySelectorAll('.menu-item');
// eliminamos la clase activa del menu
const changeActiveItem=()=>{
    menuitems.forEach(item=>{
        item.classList.remove('active');
    })
}
// activamos la clase activa del menu
menuitems.forEach(item=>{
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');
    })
})

menuitems.forEach(item=>{
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id !='notifications'){
            document.querySelector('.notification-popup')
            .style.display='none';
        }else{
            document.querySelector('.notification-popup')
            .style.display='block';
            document.querySelector('#notifications .notification-count')
            .style.display='none'
        }
      
        
    })
})

menuitems.forEach(item=>{
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');
      
        if(item.id !='notifications2'){
            document.querySelector('.notification-popup1')
            .style.display='none';
        }else{
            document.querySelector('.notification-popup1')
            .style.display='block';
            document.querySelector('#notifications .notification-count')
            .style.display='none'
        }
        
    })
})
menuitems.forEach(item=>{
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');
      
        if(item.id !='notifications3'){
            document.querySelector('.notification-popup2')
            .style.display='none';
        }else{
            document.querySelector('.notification-popup2')
            .style.display='block';
            document.querySelector('#notifications .notification-count')
            .style.display='none'
        }
    })
})

//Publicar post id theme
const theme=document.querySelector('#theme');
const themeModal=document.querySelector('.customize-theme');

//THEME DISPLAY
//abrir modal
const openThemeModal=()=>{
    themeModal.style.display='grid';
}
//cerrar modal
const closeTheModal=(e)=>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display='none';
    }
}

themeModal.addEventListener('click',closeTheModal)
theme.addEventListener('click',openThemeModal)

const themep=document.querySelector('#themep');
const openThemeModal2=()=>{
    themeModal.style.display='grid';
}
themep.addEventListener('click',openThemeModal2)



//Comentarios post id theme
const coment=document.querySelector('#coment');
const comentModal=document.querySelector('.customize-coment');


//THEME DISPLAY
//abrir modal
const openThemeModal3=()=>{
    comentModal.style.display='grid';
}

//cerrar modal
const closeTheModal3=(e)=>{
    if(e.target.classList.contains('customize-coment')){
        comentModal.style.display='none';
    }
}

comentModal.addEventListener('click',closeTheModal3)
coment.addEventListener('click',openThemeModal3)




