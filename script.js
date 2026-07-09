/*==================================================
MENU
==================================================*/

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {

    nav.classList.toggle("active");

    if(nav.classList.contains("active")){

        menu.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    }else{

        menu.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("active");

        menu.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});

/*==================================================
HEADER BLUR
==================================================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

});

/*==================================================
SCROLL PROGRESS
==================================================*/

const progress=document.querySelector(".scroll-progress");

window.addEventListener("scroll",()=>{

    const totalHeight=document.documentElement.scrollHeight-window.innerHeight;

    const progressHeight=(window.pageYOffset/totalHeight)*100;

    progress.style.width=progressHeight+"%";

});

/*==================================================
CUSTOM CURSOR
==================================================*/

const cursor=document.querySelector(".cursor");

const outline=document.querySelector(".cursor-outline");

window.addEventListener("mousemove",(e)=>{

    cursor.style.left=e.clientX+"px";
    cursor.style.top=e.clientY+"px";

    outline.style.left=e.clientX+"px";
    outline.style.top=e.clientY+"px";

});

/*==================================================
CURSOR HOVER
==================================================*/

const hoverItems=document.querySelectorAll(
"a,button,.btn,.resume-btn,.project-image,.certificate,.skill-row span"
);

hoverItems.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        outline.style.width="70px";
        outline.style.height="70px";
        outline.style.borderColor="white";

    });

    item.addEventListener("mouseleave",()=>{

        outline.style.width="40px";
        outline.style.height="40px";
        outline.style.borderColor="rgba(255,255,255,.4)";

    });

});

/*==================================================
SECTION REVEAL
==================================================*/

const reveals=document.querySelectorAll(
"section,.project,.certificate,.education-item"
);

const revealObserver=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:.15
});

reveals.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(70px)";

    item.style.transition="1s ease";

    revealObserver.observe(item);

});

/*==================================================
PROJECT IMAGE PARALLAX
==================================================*/

const images=document.querySelectorAll(".project-image img");

window.addEventListener("scroll",()=>{

    images.forEach(image=>{

        const speed=.08;

        const offset=window.pageYOffset;

        image.style.transform=`translateY(${offset*speed}px) scale(1.05)`;

    });

});

/*==================================================
TYPEWRITER
==================================================*/

const words=[

"Frontend Developer",

"Flutter Developer",

"Web Designer",

"Creative Coder"

];

let wordIndex=0;

let letterIndex=0;

let currentWord="";

let currentLetter="";

const typingElement=document.querySelector(".small-title");

function type(){

    if(wordIndex==words.length){

        wordIndex=0;

    }

    currentWord=words[wordIndex];

    currentLetter=currentWord.slice(0,++letterIndex);

    typingElement.textContent=currentLetter;

    if(currentLetter.length==currentWord.length){

        setTimeout(erase,1800);

    }

    else{

        setTimeout(type,90);

    }

}

function erase(){

    currentLetter=currentWord.slice(0,--letterIndex);

    typingElement.textContent=currentLetter;

    if(letterIndex==0){

        wordIndex++;

        setTimeout(type,300);

    }

    else{

        setTimeout(erase,45);

    }

}

type();

/*==================================================
SMOOTH ACTIVE NAV
==================================================*/

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-200;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});

/*==================================================
CONTACT FORM
==================================================*/

const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Thank you! I'll get back to you soon.");

    form.reset();

});

/*==================================================
BACK TO TOP
==================================================*/

document.querySelector(".footer-bottom a").addEventListener("click",(e)=>{

    e.preventDefault();

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*==================================================
IMAGE FADE
==================================================*/

const hero=document.querySelector(".hero-image img");

window.addEventListener("scroll",()=>{

    hero.style.opacity=1-window.scrollY/700;

});

/*==================================================
SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});
/*==============================
SPOTLIGHT
==============================*/

const spotlight = document.querySelector(".spotlight");

document.addEventListener("mousemove", (e) => {

    spotlight.style.left = e.clientX + "px";

    spotlight.style.top = e.clientY + "px";

});