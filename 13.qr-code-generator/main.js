const qrContainer = document.querySelector('.qr-container');
const qrTextInput =document.querySelector('.qr-text');

const generateQRcodeButton = document.querySelector('.ganrate-qr-code-btn');
const errorMessage = document.querySelector('.error-message-text');


generateQRcodeButton.addEventListener('click',()=>{
      validInputField();
})

function validInputField(){

  if(qrTextInput.value.trim().length > 0){
    generateQRcode();
    console.log("hii");
    
  }else{
    qrContainer.innerHTML="";
    errorMessage.textContent="Enter text and use some URL to generate QR Code";
  }
}
function generateQRcode(){
  qrContainer.innerHTML= "";
  new QRCode(qrContainer,{
      text : qrTextInput.value,
      height : 400,
      weight : 400,
      colorLight : '#fff',
      colorDark: '#000'
  });
  qrTextInput.value='';
  errorMessage.textContent='';
};
