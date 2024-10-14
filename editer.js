let htmlinput=document.querySelector(".html-textarea");
let cssinput=document.querySelector(".css-textarea");
let jsinput=document.querySelector(".js-textarea");
let save=document.querySelector(".save");
let iframe=document.querySelector(".output iframe");
let uparrow=document.querySelector(".up-arrow");
let downarrow=document.querySelector(".down-arrow");
let ouputContainer=document.querySelector(".output-container");

save.addEventListener(`click`,()=>{
    iframe.contentDocument.body.innerHTML=htmlinput.value;
    iframe.contentDocument.head.innerHTML=`<style>${cssinput.value}</style>`;
    iframe.contentWindow.eval(jsinput.value);
})

uparrow.addEventListener(`click`,()=>{
    uparrow.classList.add("hidden");
    downarrow.classList.remove("hidden");
})

downarrow.addEventListener(`click`,()=>{
    uparrow.classList.remove("hidden");
    downarrow.classList.add("hidden");
})
let copy=document.querySelectorAll(".copy");

copy.forEach((ele)=>{
    console.log(ele);
    ele.addEventListener('click',()=>{
        console.log("hi copy");
        if(ele.classList.contains("copy1")){
            navigator.clipboard.writeText(htmlinput.value);
        }
        else if(ele.classList.contains("copy2")){
            navigator.clipboard.writeText(cssinput.value);
        }else{
            navigator.clipboard.writeText(jsinput.value);
        }
    })
   
})