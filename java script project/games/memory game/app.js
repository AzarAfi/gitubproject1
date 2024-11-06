 let memoryarray = [
    { name: "fish", icon: '<i class="fa-solid fa-fish"></i>' },
    { name: "cat", icon: '<i class="fa-solid fa-cat"></i>' },
    { name: "dog", icon: '<i class="fa-solid fa-dog"></i>' },
    { name: "crow", icon: '<i class="fa-solid fa-crow"></i>'},
    { name: "horse", icon: '<i class="fa-solid fa-horse"></i>' },
    { name: "dragon", icon: '<i class="fa-solid fa-dragon"></i>' },
    // Repeat the same items
    { name: "fish", icon: '<i class="fa-solid fa-fish"></i>' },
    { name: "cat", icon: '<i class="fa-solid fa-cat"></i>' },
    { name: "dog", icon: '<i class="fa-solid fa-dog"></i>' },
    { name: "crow", icon: '<i class="fa-solid fa-crow"></i>'},
    { name: "horse", icon: '<i class="fa-solid fa-horse"></i>' },
    { name: "dragon", icon: '<i class="fa-solid fa-dragon"></i>' }
  ];

  let flibcardarray=[];
  let gamebored=document.getElementById("gamebored");
  let showbtn=document.querySelector(".tryagine");
  let wincount=0;


  swaping();
  displaycard();

  showbtn.addEventListener("click",retry);


  function retry(){
        gamebored.innerHTML="";
        gamebored.classList.add("game");
        gamebored.classList.remove("youwin");
        showbtn.classList.remove("showbtn");
        swaping();
        displaycard();
  }
  
 


  function swaping(){
    for(let i=memoryarray.length-1;i>=0;i--){
       let rand = Math.floor(Math.random() * (i + 1)); 
        [memoryarray[i],memoryarray[rand]] = [memoryarray[rand],memoryarray[i]];
      }
  } 

  function displaycard(){
    memoryarray.forEach(function(crr,ind,arr){
    let card=document.createElement("div");
    card.setAttribute("id",ind);
    card.classList.add("cardback");
    card.classList.add("active")
    gamebored.append(card);
    card.addEventListener("click",flibcard);
  })
  }

  function flibcard(){
    if(flibcardarray.length<2 && this.classList.contains("active")){
    let cardattrbute=this.getAttribute("id");
    flibcardarray.push(this);
    this.classList.remove("cardback");
    this.innerHTML=memoryarray[cardattrbute].icon;
    if(flibcardarray.length==2){
      setTimeout( checkGame,1000);
      
    }
    }
  }

  function checkGame(){
    let id1=flibcardarray[0].getAttribute("id");
    let id2=flibcardarray[1].getAttribute("id");
    if(memoryarray[id1].name === memoryarray[id2].name){
      flibcardarray[0].style.border="none";
      flibcardarray[0].style.backgroundColor="bisque";
      flibcardarray[0].innerHTML="";
      flibcardarray[0].classList.remove("active");
      flibcardarray[1].style.border="none";
      flibcardarray[1].style.backgroundColor="bisque";
      flibcardarray[1].innerHTML="";
      flibcardarray[1].classList.remove("active");
      wincount++;
      checkgameover();
    }
    else{
      flibcardarray[0].innerHTML="";
      flibcardarray[0].classList.add("cardback");
      flibcardarray[1].innerHTML="";
      flibcardarray[1].classList.add("cardback");

    }
    flibcardarray=[];
  }
  function checkgameover(){
    if(wincount==memoryarray.length/2){
      while(gamebored.firstChild)
      {
        gamebored.removeChild(gamebored.firstChild);
      }
        gamebored.innerHTML="You Win!!!!";
        gamebored.classList.remove("game");
        gamebored.classList.add("youwin");
        showbtn.classList.add("showbtn");
    }
  }