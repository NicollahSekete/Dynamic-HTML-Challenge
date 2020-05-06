const wrapper = document.getElementById('wrapper');
//const myfirstbox =document.getElementById('box1');
const paragraphs = document.getElementsByTagName('p');
const events = document.getElementById('removeBoxes');
const images = document.images('img');

//images.style.height= "calc(100vw / 3.5)";
//images.style.width= "calc(100vw / 3.5)";


 doBox.onclick = () => {
    for (let i = paragraphs.length - 1; i >= 0; --i) {
        paragraphs[i].remove();
      }
  };

  boxOne.onclick = ()=> {
    document.getElementById("box1").style.visibility = "hidden";}
    
    boxTwo.onclick = ()=> {
        document.getElementById("box2").style.visibility = "hidden";}

//Dynamic image 
