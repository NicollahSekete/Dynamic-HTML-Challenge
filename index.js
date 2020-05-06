const wrapper = document.getElementById('wrapper');
//const myfirstbox =document.getElementById('box1');
const paragraphs = document.getElementsByTagName('p');
const events = document.getElementById('removeBoxes');


 doBox.onclick = () => {
    for (let i = paragraphs.length - 1; i >= 0; --i) {
        paragraphs[i].remove();
      }
  };

  boxOne.onclick = ()=> {
    document.getElementById("box1").style.visibility = "hidden";}
    
    boxTwo.onclick = ()=> {
        document.getElementById("box2").style.visibility = "hidden";}