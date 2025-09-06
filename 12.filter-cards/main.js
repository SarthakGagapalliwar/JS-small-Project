const categories = ['All','Men', 'Women', 'Kids'];
const content=[
  {
    id:'Men',
    label: 'Men Shirt 1'
  },
  {
    id:'Men',
    label: 'Men Shirt 2'
  },
  {
    id:'Men',
    label: 'Men Shirt 3'
  },
  {
    id:'Men',
    label: 'Men Shirt 4'
  },
  {
    id:'Men',
    label: 'Men Shirt 5'
  },
  {
    id:'Women',
    label: 'Women Shirt 1'
  },
  {
    id:'Women',
    label: 'Women Shirt 2'
  },
  {
    id:'Women',
    label: 'Women Shirt 3'
  },
  {
    id:'Women',
    label: 'Women Shirt 4'
  },
  {
    id:'Women',
    label: 'Women Shirt 5'
  },
  {
    id:'Kids',
    label: 'Kids Shirt 1'
  },
  {
    id:'Kids',
    label: 'Kids Shirt 2'
  },
  {
    id:'Kids',
    label: 'Kids Shirt 3'
  },
  {
    id:'Kids',
    label: 'Kids Shirt 4'
  },
  {
    id:'Kids',
    label: 'Kids Shirt 5'
  },
]

const filterButon = document.querySelector('.Filter-button-wrapper');
const ContenWrapper = document.querySelector('.Conten-wrapper');


function createCategpry(){
    categories.forEach(category => {
      const buttonEle = document.createElement('button');
      buttonEle.innerText = category;
      buttonEle.classList.add('filter-button')
      buttonEle.setAttribute('data-filter',category)

      filterButon.appendChild(buttonEle);
    })
}

function createContent(){
  content.forEach(contentItem =>{
    const singleContentItem=document.createElement('div');
    singleContentItem.classList.add('card',contentItem.id);
    singleContentItem.textContent=contentItem.label;

    ContenWrapper.appendChild(singleContentItem);
  })
}



createCategpry();
createContent();


const allFilterBUttons = document.querySelectorAll('.filter-button');
const allCard=document.querySelectorAll('.card');


function filterCardByCategory(extractCurrentCategoty,allCard){
    allCard.forEach(item => {
      const isShoeAllCard =extractCurrentCategoty.toLowerCase()==='all';
      const isitemFiltered = !item.classList.contains(extractCurrentCategoty);

      if(isitemFiltered && !isShoeAllCard){
        item.classList.add('hide');
      }else{
        item.classList.remove('hide');
      }
    })
}

allFilterBUttons.forEach(singleFilterButtonItem =>{
    singleFilterButtonItem.addEventListener('click',()=>{
        const extractCurrentCategoty = singleFilterButtonItem.dataset.filter;
        filterCardByCategory(extractCurrentCategoty,allCard);
    })
})