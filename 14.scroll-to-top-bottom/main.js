const userList=document.querySelector('.users-list')
const loader  = document.querySelector('.loader')
const SclTotop  = document.querySelector('.top')
const SclTobotoom  = document.querySelector('.bottom')


function showLoader(){
    loader.classList.add('show-loader');
    userList.classList.add('hide-usersList');
  }
  
  function removeLoader(){
    loader.classList.remove('show-loader');
    userList.classList.remove('hide-usersList');
}

function displayUserList(users){
  userList.innerHTML = users.map(user =>
    `
    <li>
      <p>${user.firstName} ${user.lastName}</p>
    </li>
    `
  ).join("");
}


async function fectchUserList(params) {
    showLoader()
    
    const user= await fetch('https://dummyjson.com/users?limit=100',{
      method:'GET',
    });
    const result = await user.json();
    if(result && result.users) displayUserList(result.users);
    
    removeLoader()
  }

fectchUserList()


SclTotop.addEventListener('click',()=>{
  window.scrollTo(0,0);
})
// SclTotop.addEventListener('click', () => {
//   window.scrollTo({
//     top: 0,       // scroll to top
//     left: 0,      // horizontal scroll (usually 0)
//     behavior: 'smooth' // smooth scrolling
//   });
// });

SclTobotoom.addEventListener('click',()=>{
  // console.log(document.body.scrollHeight);
  window.scrollTo({
    top:document.body.scrollHeight,
    behavior:'smooth',
  })
})