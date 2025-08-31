const tabcontainer = document.querySelector('.container');
const tabButtons = document.querySelectorAll('.tab-button');
const tabContent = document.querySelectorAll('.content');


tabcontainer.addEventListener('click', (event) => {
  const currentId = event.target.dataset.id;

  if (currentId) {
    tabButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    event.target.classList.add('active');

    tabContent.forEach(content =>{
      content.classList.remove('active');
    });

    const currentElemnt=document.getElementById(currentId);
    currentElemnt.classList.add('active');
  }
})