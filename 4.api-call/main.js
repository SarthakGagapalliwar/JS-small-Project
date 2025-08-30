
const postListContiner=document.querySelector('.post_list_continer');
//fech using xhr

function fetchUsingXHR(){
    const xhr=new XMLHttpRequest();
    xhr.open('GET',"https://jsonplaceholder.typicode.com/posts");
    xhr.responseType='json';
    xhr.send();

    xhr.onload=()=>{
      if(xhr.status===200){
        displayResults(xhr.response);
      }else{
        console.log("Some error occures");
        
      }
    }
  }
  
  // fetchUsingXHR();
  
//fetch using fetchMEthod


function fetchUsingFetchMethod(){

    const fetchRequest = fetch('https://jsonplaceholder.typicode.com/posts',{
      method:'GET',
    })

    fetchRequest
    .then(res=>res.json())
    .then(result=>displayResults(result))
    .catch(e=>console.log(e)
    )
}
//fetchUsingFetchMethod()



//fechusing asyn await


async function fetchUsingAsynAwaitMethod(){
    const response = await  fetch('https://jsonplaceholder.typicode.com/posts',{
      method:'GET',
    })
    const result= await response.json();
    displayResults(result);
}
// fetchUsingAsynAwaitMethod()




//xhr using promsis asyn and awit

function helperMethod(method,url){
  const promsis = new Promise((res,rej)=>{
    const xhr=new XMLHttpRequest()
    xhr.open(method,url);
    xhr.responseType='json';
    xhr.send();

    xhr.onload=()=>{
        if(xhr.status===200){
          res(xhr.response);
        }else{
          rej(xhr.response);
        }
    }

  })
  return promsis;
}

async function fetchusingXhrAyncAwait(){
    const response = await helperMethod('GET','https://jsonplaceholder.typicode.com/posts');
    displayResults(response);
    
}
fetchusingXhrAyncAwait()



function displayResults(posts){
  postListContiner.innerHTML=posts.map(postItem =>
    `
    <div class="post-item">
      <h3>${postItem.title}</h3>
      <p>${postItem.body}</p>
    </div>
    `
  ).join(" ");
}




