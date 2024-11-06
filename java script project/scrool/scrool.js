window.addEventListener("scroll",function(){
    let fmenu=document.querySelector(".fmenuone")
    const scroolhight=window.scrollY
    const fmenuhight=fmenu.getBoundingClientRect().height

    if(scroolhight>fmenuhight){
        fmenu.classList.add("check")
    }
    else{
        fmenu.classList.remove("check")
    }
}) 