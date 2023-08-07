
var dragging;
var dragover;
var active = document.getElementById('Active');
var all = document.getElementById('all');
var buttom_control = document.querySelector('#task');
var check = document.querySelectorAll('.check');
var cross = document.querySelectorAll('.cross');    
var Switch = document.querySelector('.switch');
var bodyColor = document.querySelector('body');
var item = document.querySelectorAll('.item');
var task = document.querySelectorAll('#task');
var count = document.querySelector('#count');
var itemlist = document.querySelector('#TodoContainer');
var canceltext  = document.querySelectorAll('.text');
var background = document.querySelector('.background');
var textValue = document.getElementById('textValue');
var clearCompleted = document.querySelector('.last');
var inputSection = document.querySelector('.inputSection');
//------------------------------------------ Creating New Node --------------------------------------------------------------------------------
var newText = document.createElement('div');
var innerImage1 = document.createElement('img');
var innerImage2 = document.createElement('img');
var Span = document.createElement('span');
        // image1
        innerImage1.classList.add('check');
        innerImage1.src='./images/icon-check.svg';
        innerImage1.addEventListener('click',()=>{innerImage1.style='background:linear-gradient(180deg,hsl(192,100%,67%),hsl(280,87%,65%))'})
        // text
        Span.classList.add('text');
        Span.innerText = textValue.ariaValueNow;
        //image2
        innerImage2.classList.add('cross');
        innerImage2.src='./images/icon-cross.svg';
        innerImage2.addEventListener('click',()=>{
            newText.remove();
            count.innerText= itemlist.childElementCount - 1;
        })
        // newChildNode
        newText.classList.add('item');
        newText.appendChild(innerImage1);
        newText.appendChild(Span);
        newText.appendChild(innerImage2);
//---------------------------------------------------------------------------------------------------------------------------------------------

    Switch.addEventListener('click',toggleLight);
    
    // textValue.addEventListener('click',()=>{
    //     return itemlist.append(newText);
    //     // count.innerText= itemlist.childElementCount - 1;
    // });
    
    count.innerText= itemlist.childElementCount - 1;
    
    check.forEach((a,b) =>{a.addEventListener('click',()=>{
        item[b].setAttribute('aria-label','active');
        return a.classList.toggle('checkIn');
    })});

    canceltext.forEach(i =>{i.addEventListener('click', ()=>{
        return i.classList.toggle('cancelText'),count.innerText = itemlist.childElementCount-1;
    })});
   
    cross.forEach((x,y) =>{x.addEventListener('click', ()=>{
       item[y].remove();
       count.innerText= itemlist.childElementCount - 1;
    })});

             
   
    function toggleLight(){
        
        if(Switch.getAttribute('src')==`./images/icon-moon.svg`){
            Switch.setAttribute('src','./images/icon-sun.svg');
            inputSection.style='background-color:hsl(235, 24%, 19%); color: white';
            buttom_control.style='background-color:hsl(235, 24%, 19%);';
            //  buttom_control.className('last')
            for(var j =0; j<item.length;j++){
                item[j].style='background-color:hsl(235, 24%, 19%); color: white';
            }
        }else{
            Switch.setAttribute('src', './images/icon-moon.svg');
            inputSection.style='background-color:white; color: black';
            buttom_control.style='background-color:white; ';
            for(var j =0; j<item.length;j++){
                item[j].style='background-color:white; color:black';
            }
            }
        return background.classList.toggle('backgroundImage'),
            bodyColor.classList.toggle('body_Darktheme');
        }
        
    