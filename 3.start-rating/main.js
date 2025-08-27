const stars = document.querySelectorAll('.fa-star-o');
const selectedRatingValueText =  document.querySelector('.Selected-rating-value');


let currentSlectedStart=-1;

stars.forEach((starItem,index)=>{
    starItem.dataset.rating=index+1;
    starItem.addEventListener('mouseover',handleMouseOver);
    starItem.addEventListener('click',handleOnClick);
    starItem.addEventListener('mouseleave',handleMouseLeave);
})


function handleUpadteRatingState(getCurrValue){
  for(let i=0; i<5; i++){
    if(i<getCurrValue){
      stars[i].classList.replace('fa-star-o', 'fa-star');
    }else{
      stars[i].classList.replace( 'fa-star','fa-star-o');
    }
  }
}


function handleMouseOver(event) {
    const currentRatingValue = parseInt(event.target.dataset.rating);
    
    if (!currentRatingValue) return;
    handleUpadteRatingState(currentRatingValue);
}

function handleOnClick(event) {
    const currentRatingValue = parseInt(event.target.dataset.rating);
    currentSlectedStart = currentRatingValue;
    handleUpadteRatingState(currentSlectedStart);
    selectedRatingValueText.textContent=currentRatingValue;
}

function handleMouseLeave(){
    handleUpadteRatingState(currentSlectedStart);
}