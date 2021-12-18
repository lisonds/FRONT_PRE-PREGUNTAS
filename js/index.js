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

