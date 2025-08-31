const openModel =document.querySelector('.openModel');
const modelBackGround=document.querySelector('.model-background');
const closeicon=document.querySelector('.close-icon');
const closeBtn=document.querySelector('.close');

openModel.addEventListener('click', ()=>{
  modelBackGround.style.display="block";
})
closeicon.addEventListener('click', ()=>{
  modelBackGround.style.display="none";
})
closeBtn.addEventListener('click', ()=>{
  modelBackGround.style.display="none";
})
window.addEventListener('click',(event)=>{

  if(event.target===modelBackGround){
    modelBackGround.style.display="none"
  }
})