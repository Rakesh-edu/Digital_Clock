
let h=document.querySelector('.hour');
let m=document.querySelector('.min');
let s=document.querySelector('.sec');
function clock () {
    let d=new Date();
    let hour=d.getHours();
    let min=d.getMinutes();
    let sec=d.getSeconds();
    h.value=hour;
    m.value=min;
    s.value=sec;
}

clock();

setInterval(() => {
    clock();
}, 1000);
