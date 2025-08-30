const changeTempButton=document.querySelector('.Change-Temp');
const body=document.querySelector('body');


// changeTempButton.addEventListener('click',()=>{
//   if(body.classList.contains('light')){
//     body.classList.remove('light')
//     body.classList.add('dark')
//   }else{
//     body.classList.add('light')
//     body.classList.remove('dark')
//   }

//   if(changeTempButton.classList.contains('light')){
//     changeTempButton.classList.remove('light')
//     changeTempButton.classList.add('dark')
//   }else{
//     changeTempButton.classList.add('light')
//     changeTempButton.classList.remove('dark')
//   }
// })


changeTempButton.addEventListener('click',()=>{

  if(body.getAttribute('data-theme')==='dark'){
    body.setAttribute('data-theme','blue')
    // changeTempButton.setAttribute('data-theme','blue')
  }else{
    body.setAttribute('data-theme','dark')
    // changeTempButton.setAttribute('data-theme','dark')
  }
})