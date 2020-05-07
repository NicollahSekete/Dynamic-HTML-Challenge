let inImg = document.getElementById("inputImage")
let inputBoxNum = document.getElementById("inputBoxNum")
let imageMaker = document.createElement("img")
let wrapper = document.getElementById("wrapper")
const removeBoxButton = document.getElementById("button2")
const buttonMaker = document.getElementById("button1")




//how to create as many boxes as possible // dynamic image // currently showing the same image multiple times
const createBox = () => {

    for (let i = 0; i < inputBoxNum.value; i++) {
        let box = document.createElement("div")
        document.body.appendChild(box)
        let imageMaker = document.createElement("img")
        imageMaker.src = `https://source.unsplash.com/random/500x500/\?${inImg.value}`
        imageMaker.setAttribute("height", "100%");
        imageMaker.setAttribute("width", "100%");
        box.appendChild(imageMaker)
        console.log(box)
        box.classList.add('box')
        wrapper.appendChild(box)
    }
}


//button to remove boxes
removeBoxButton.onclick = () => {
    box.classList.toggle('hide')
}


//button to click to grab images. 
buttonMaker.onclick =() => {
    event.preventDefault()
    console.log(inputBoxNum.value)
    createBox();

}
