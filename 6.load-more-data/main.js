const productConatiner=document.querySelector('products-Conatiners');



async function fetchlistofProduct(){
  try{
    const responce=await fetch('https://dummyjson.com/products',{
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


  

})  


}



fetchlistofProduct();