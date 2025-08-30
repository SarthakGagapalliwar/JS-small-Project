const productConatiner=document.querySelector('.products-Conatiners');
const loadMoreButton=document.querySelector('.Load-Button');


let currStep=0;

async function fetchlistofProduct(getCurrStep){
  try{
    const responce=await fetch(`https://dummyjson.com/products?limit=10&skip=${getCurrStep===0 ? 0 : getCurrStep*10}`,{
      method:'GET'
    })

    const result =await responce.json();
    console.log(result);

    if(result && result.products) displayProduct(result.products);
  }catch(error){
    console.log(error);
  }
}


function displayProduct(Productlist){

Productlist.forEach(producItem=>{

  const productItemWrapper = document.createElement('div');
  const productTitel=document.createElement('p');
  const productThumbnail=document.createElement('img');
  const productDescription=document.createElement('p');
  const productPrice = document.createElement("p");


  productTitel.textContent=producItem.title;
  productDescription.textContent=producItem.description;
  productThumbnail.src = producItem.thumbnail;
  productPrice.textContent=producItem.price;


  productItemWrapper.classList.add('product-item-wrapper');
  productTitel.classList.add('product-Titel');
  productDescription.classList.add('product-Desc');
  productThumbnail.classList.add('product-Thumbnail');
  productPrice.classList.add('product-Price');


  productItemWrapper.appendChild(productThumbnail);
  productItemWrapper.appendChild(productTitel);
  productItemWrapper.appendChild(productPrice);
  productItemWrapper.appendChild(productDescription);

  if(productConatiner.children.length===20){
    loadMoreButton.setAttribute('disabled', 'true');
  }

  productConatiner.appendChild(productItemWrapper);

});  
}



fetchlistofProduct(currStep);

loadMoreButton.addEventListener('click',()=>{
  currStep++;

  // if(currStep>2){
  //    loadMoreButton.setAttribute('disabled', 'true');
  // }

  fetchlistofProduct(currStep);
})
