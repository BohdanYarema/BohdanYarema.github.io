window.addEventListener("load",()=>{
    document.body.classList.add("loaded");
});

const reveals=document.querySelectorAll(".reveal");
const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }
    });
},{threshold:0.15});
reveals.forEach(el=>observer.observe(el));

const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightbox-img");

document.querySelectorAll(".portfolio-item").forEach(item=>{
    item.addEventListener("click",()=>{
        lightboxImg.src=item.querySelector("img").src;
        lightbox.classList.add("active");
    });
});

lightbox.addEventListener("click",()=>lightbox.classList.remove("active"));
document.addEventListener("keydown",e=>{
    if(e.key==="Escape") lightbox.classList.remove("active");
});

window.addEventListener("scroll",()=>{
    const scrollTop=window.scrollY;
    const docHeight=document.body.scrollHeight - window.innerHeight;
    const progress=(scrollTop/docHeight)*100;
    document.querySelector(".progress-bar").style.width=progress+"%";

    document.querySelectorAll(".parallax img").forEach(img=>{
        img.style.transform=`translateY(${scrollTop*0.15}px)`;
    });
});