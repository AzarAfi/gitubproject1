
 let btns=document.querySelectorAll(".btns");
let mainbox=document.querySelector(".mainbox");
let contentcon=document.querySelectorAll(".content-con");

mainbox.addEventListener("click",function(ev){
let id=ev.target.dataset.id;
if(id){
    btns.forEach(function(btn){
        btn.classList.remove("active")
        ev.target.classList.add("active")
    })
    contentcon.forEach(function(evn){
      evn.classList.remove("active")
    })
    let elament=document.getElementById(id);
     elament.classList.add("active")
}
}) 

