let section2 =document.querySelector('.section2')
let section3 =document.querySelector('.section3')
let section4 =document.querySelector('.section4')
onscroll=function scroll(){
    let value =scrollY;
    console.log(value);
    if(scrollY>=100){
        section2.style.opacity=1;
    }
    else{
        section2.style.opacity=0;
    }
    section2.style.opacity=value/100;
    if(scrollY>=300){
        section3.style.opacity=1;
    }
    else{
        section3.style.opacity=0;
    }
    if(scrollY >=1000){
        section4.style.opacity=1;
    }
    else{
        section4.style.opacity=0;
    }
}
