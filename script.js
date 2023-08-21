audio = new Audio('level1.mp3');
audio2 = new Audio('level2.mp3');
audio3 = new Audio('level3.mp3');
audio4 = new Audio('level4.mp3');
document.onkeydown = function (e){
    // console.log(e.keyCode);
    let dino = document.querySelector('.dino');
    if(e.keyCode == 38){
        dino.classList.add('animatedino');
        setTimeout(() => {
            dino.classList.remove('animatedino');
        }, 700);
    }
    if(e.keyCode == 39){
        let dinodx =  parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dinodx + 100 + "px";    
    }
    if(e.keyCode == 37){
        let dinodx =  parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = (dinodx - 100) + "px";    
    }
}
// window.onload = function (){
    
    let speed = setInterval(() => {
 obstacle = document.querySelector('.obani');
 anidur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
 newdur = anidur - 0.0001;
 obstacle.style.animationDuration = newdur+'s';
}, 10);
var score = document.querySelector('.score-count');
var i =0;
obstacle = document.querySelector('.obani');
anidur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
time = anidur*1000;
score.innerHTML = "Your Score: " + i;
let intervalid = setInterval(() => {
    i=i+1;
    score.innerHTML = "Your Score: " + i;
    if(i==1){
            audio.play(); 

        }
        if(i == 5){
            audio.pause();
            audio2.play();
            let dino = document.querySelector('.dino');
            dino.style.backgroundImage = "url('dino3.png')"
        }
        if(i == 13){
            let dino = document.querySelector('.dino');
            dino.style.backgroundImage = "url('dino4.png')"
        }
        if(i == 17){
            let dino = document.querySelector('.dino');
            dino.style.backgroundImage = "url('dino5.png')"
            audio2.pause();
            audio3.play();
        }
        if(i == 23){
            let dino = document.querySelector('.dino');
            dino.style.backgroundImage = "url('dino6.png')"
            audio3.pause()
            audio4.play();
        }
    }, time);
setInterval(() => {
    dino = document.querySelector('.dino');
    let gameover = document.querySelector('.gameover');
    let obstacle = document.querySelector('.obstacle');
    let dx =  parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    let dy =  parseInt(window.getComputedStyle(dino,null).getPropertyValue('bottom'));
    let ox =  parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    let oy =  parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('bottom'));
    offsetx = Math.abs(ox-dx); 
    offsety = Math.abs(dy-oy); 
    console.log(offsetx,offsety);
    if(offsetx<120 && offsety<100){
        gameover.style.visibility = 'visible';
        obstacle.classList.remove('obani');
        clearTimeout(intervalid);
        audio.pause();
        audio2.pause();
        audio3.pause();
        audio4.pause();
    }
}, 10);
let start = document.querySelector('.start');
start.addEventListener('click',()=>{
    let obstacle = document.querySelector('.obstacle');
    obstacle.classList.add('obani');
    go();
    let gameover = document.querySelector('.gameover');
    gameover.style.visibility = 'hidden';
    obstacle.style.left = 100+"vw";
})