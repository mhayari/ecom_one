// Start Slider
const slider=document.querySelector('.slider')
const slide=document.querySelector('.slides')
const next=document.querySelector('.next')
const previous=document.querySelector('.previous')
const interval=1000
let slideId

let slides=document.querySelectorAll('.slide')
let index=1
const getSlide=()=>document.querySelectorAll('.slide')
const firstClone=slides[0].cloneNode(true)
const lastClone=slides[slides.length - 1].cloneNode(true)
firstClone.id='first-clone'
lastClone.id='last-clone'

slide.append(firstClone)
slide.prepend(lastClone)

const slideWidth=slides[index].clientWidth
console.log(slideWidth)

// slide.style.transform=`translate(${-slideWidth * index}px)`


const startSlide=()=>{
    slideId=setInterval(()=>{
        moveToNextSlide()
    },interval)
}
slide.addEventListener('transitionend',()=>{
    getSlide()
    if(slides[index].id===firstClone.id){
        slide.style.transition='none'
        index=1
        // slide.style.transform=`translate(${-slideWidth * index}px)`
        slide.style.transform=`translate(${-100 * index}%`

    }
    if(slides[index].id===lastClone.id){
        slide.style.transition='none'
        index=slides.length-2
        // slide.style.transform=`translate(${-slideWidth * index}px)`
        slide.style.transform=`translate(${-100 * index}%`

    }
})
const moveToNextSlide=()=>{
    slides=getSlide()
    if(index>=slides.length-1)return;
    index++
    slide.style.transform=`translate(${-100 * index}%`
    slide.style.transition='.7s'
}
const moveToPrevSlide=()=>{
    if(index<=0)return;
    index--
    
    //    slide.style.transform=`translate(${-100 * index}%`
    slide.style.transform=`translate(${-100 * index}%`

    slide.style.transition='.7s'
}
slider.addEventListener('mouseenter',()=>{
    clearInterval(slideId)
})
slider.addEventListener('mouseleave',startSlide)
next.addEventListener('click',moveToNextSlide)
previous.addEventListener('click',moveToPrevSlide)
startSlide()
// End Slider




// // Start Fruits Slider
// const fruits=document.querySelector('.fruits')
// const fruitsChild=document.querySelector('.fruits-child')
// const nextArrow=document.querySelector('.next-arrow')
// const prevArrow=document.querySelector('.previous-arrow')
// const interval2=1000
// let slideId2

// let fruitsCardAll=document.querySelectorAll('.fruits-card')
// let index2=0
// const getSlide2=()=>document.querySelectorAll('.fruits-card')
// const firstClone2=fruitsCardAll[0].cloneNode(true)
// const lastClone2=fruitsCardAll[fruitsCardAll.length - 1].cloneNode(true)
// firstClone2.id='first-clone2'
// lastClone2.id='last-clone2'

// fruitsChild.append(firstClone2)
// fruitsChild.prepend(lastClone2)

// const slideWidth2=fruitsCardAll[index2].clientWidth
// console.log(slideWidth2)

// // slide.style.transform=`translate(${-slideWidth * index}px)`


// const startSlide2=()=>{
//     slideId2=setInterval(()=>{
//         moveToNextSlide2()
//     },interval2)
// }
// fruitsChild.addEventListener('transitionend',()=>{
//     getSlide2()
//     if(fruitsCardAll[index2].id===firstClone2.id){
//         fruitsChild.style.transition='none'
//         index2=1
//         // fruitsChild.style.transform=`translate(${-100 * index2}%`
//         fruitsChild.style.transform=`translate(${-slideWidth2 * index2}px)`

//     }
//     if(fruitsCardAll[index2].id===lastClone2.id){
//         fruitsChild.style.transition='none'
//         index2=fruitsCardAll.length-2
//         // fruitsChild.style.transform=`translate(${-100 * index2}%`
//         fruitsChild.style.transform=`translate(${-slideWidth2 * index2}px)`

//     }
// })
// const moveToNextSlide2=()=>{
//     fruitsCardAll=getSlide2()
//     if(index2>=fruitsCardAll.length-1)return;
//     index2++
//     // fruitsChild.style.transform=`translate(${-100 * index2}%`
//     fruitsChild.style.transform=`translate(${-slideWidth2 * index2}px)`
//     fruitsChild.style.transition='.7s'
// }
// const moveToPrevSlide2=()=>{
//     if(index2<=0)return;
//     index2--
    
//     //    slide.style.transform=`translate(${-100 * index}%`
//        fruitsChild.style.transform=`translate(${-slideWidth2 * index2}px)`
//     // fruitsChild.style.transform=`translate(${-100 * index2}%`

//     fruitsChild.style.transition='.7s'
// }
// fruits.addEventListener('mouseenter',()=>{
//     clearInterval(slideId2)
// })
// fruits.addEventListener('mouseleave',startSlide2)
// nextArrow.addEventListener('click',moveToNextSlide2)
// prevArrow.addEventListener('click',moveToPrevSlide2)
// startSlide2()
// // // End Fruits Slider