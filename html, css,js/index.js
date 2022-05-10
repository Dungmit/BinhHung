const headers = document.querySelector("header")
window.addEventListener("scroll", function(){
    if(window.scrollY > 100){
        headers.classList.add("sticky")
    }
    else{
        headers.classList.remove("sticky")
    }
}
)
const img= document.querySelectorAll(".aspect-ratio-169 img")
const imgcontainer= document.querySelector(".aspect-ratio-169")
const dotItem = document.querySelectorAll(".dot")
let index = 0
let imgNumber=img.length
img.forEach(function(image,index){
        image.style.left=index*100+"%"
        dotItem[index].addEventListener("click",function(){
        dotslider(index)})
})  
function imgsilder(){
        index++;
        console.log(index)
        if(index>=imgNumber){ index=0}
        imgcontainer.style.left=  index*-100 + "%"
    

}
function dotslider(index){
        imgcontainer.style.left=  index*-100 + "%"
        const dotActive = document.querySelector(".dot.active")
        dotActive.classList.remove("active")
        dotItem[index].classList.add("active")
    }

setInterval(imgsilder,3000)


