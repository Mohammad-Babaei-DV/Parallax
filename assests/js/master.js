let main = document.getElementsByTagName('main')[0]
let txt = document.getElementById('txt')
let name = document.getElementsByClassName('name')[0]
let job = document.getElementsByClassName('job')[0]
let wall = document.getElementById('wall')
let imgs = document.querySelector('figure>img')
const images = ['1.jpg','2.jpg' , '3.webp' , '4.jpg' , '5.webp']
main.addEventListener('scroll', (e) => {
    let st = e.target.scrollTop
    // txt.innerHTML = st
    wall.style.left=(-(st/60)+'%')
    name.style.left=(st/5)+'px'
    job.style.right=(st/5)+'px'
    
     if ((st>0) && (st <1500)) {
        imgs.src='assests/img/'+images[0] 
    }else if ((st>1500) && (st <2200)) {
        imgs.src='assests/img/'+images[1]
    }else if ((st>2200) && (st <2900)) {
        imgs.src='assests/img/'+images[2]
        
    }else if ((st>2900) && (st <3600)) {
        imgs.src='assests/img/'+images[3]
        
    }else if ((st>3600) && (st <4300)) {
        imgs.src='assests/img/'+images[4]
        
    }else if ((st>4300) && (st <5000)) {
        imgs.src='assests/img/'+images[0]
        
    }
})