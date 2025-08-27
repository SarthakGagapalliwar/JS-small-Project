const hexBtn = document.querySelector('.hex-button');
let buttonval=document.querySelector(".colur-value");
let hexBgColor=document.querySelector(".hex-color-geneator");
const hexCopyButton=document.querySelector(".hex-copy-color");

hexBtn.addEventListener("click", () => {
  let characterSet = '0123456789ABCDEF';
  let hexColurOutput = "#";

  for (let i = 0; i < 6; i++) {
    hexColurOutput += characterSet.charAt(
      Math.floor(Math.random() * characterSet.length)
    );
  }

//   return hexColurOutput;
    buttonval.textContent = hexColurOutput;
    hexBgColor.style.backgroundColor = hexColurOutput;
    hexBtn.style.color=hexColurOutput;
});

//rgb 
const getRedInputRange= document.querySelector('#red')
const getGreenInputRange= document.querySelector('#green')
const getBlueInputRange= document.querySelector('#blue')
const rgbBtn = document.querySelector('#button-rgb-color');
const rgbColurContainer=document.querySelector(".rgb-color-geneator")
const rgbCopyButton=document.querySelector(".rbg-copy-color");
const rgbColourValue=document.querySelector(".rgb-colur-value")

rgbBtn.addEventListener('click', () => {
  let extractRedvalue = getRedInputRange.value;
  let extractGreenvalue = getGreenInputRange.value;
  let extractBluevalue = getBlueInputRange.value;

  rgbColourValue.textContent=`rgb(${extractRedvalue}, ${extractGreenvalue}, ${extractBluevalue})`;

  rgbColurContainer.style.backgroundColor =
    `rgb(${extractRedvalue}, ${extractGreenvalue}, ${extractBluevalue})`;
});


function copyHexClickBord(){
    navigator.clipboard.writeText(buttonval.textContent)
    alert("hex color copy")
}

hexCopyButton.addEventListener('click',copyHexClickBord);

function copyRbgClickBord(){
    navigator.clipboard.writeText(rgbColourValue.textContent);
    alert("rgb color copy")
}
rgbCopyButton.addEventListener('click',copyRbgClickBord);
