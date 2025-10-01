const progress= document.querySelector('.progress');
const prevBtn= document.querySelector('.prev-btn');
const nextBtn= document.querySelector('.next-btn');

const iconsWrapper = document.querySelectorAll('.icon-wrapper');


let curentSelectedStep=1;

nextBtn.addEventListener('click', ()=>{
    if(curentSelectedStep < iconsWrapper.length){
        curentSelectedStep++;
    }
    handleUpdateStep();
})

prevBtn.addEventListener('click', ()=>{
    if(curentSelectedStep>1){
        curentSelectedStep--;
    }
    handleUpdateStep()
})

function handleUpdateStep(){
    iconsWrapper.forEach((item,index)=>{
        if(index < curentSelectedStep){
            item.classList.add('active');
        }else{
            item.classList.remove('active');
        }
    })

    progress.style.width = ((curentSelectedStep - 1)/(iconsWrapper.length-1))*100+"%";

    if(curentSelectedStep===1){
        prevBtn.disabled=true;
    }else if(curentSelectedStep===iconsWrapper.length){
        nextBtn.disabled=true;
    }else{
        prevBtn.disabled=false;
        nextBtn.disabled=false;
    }
}