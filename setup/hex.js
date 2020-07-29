const randomHex = () => {
  return Math.floor(Math.random()*16777215).toString(16);
 console.log('randomHex');
 }
 
 const hexClick = () => {
   document
     .getElementById("hexButton")
     .addEventListener("click", backgroundChange);
 };
 
 
 const backgroundChange = () => {
   const color = randomHex()
   document.body.style.backgroundColor = `#${color}`;
   document.getElementById('color-indicator').innerHTML = `#${color}`
   
 }

 const init = () => {
  hexClick();
  
};

init();
