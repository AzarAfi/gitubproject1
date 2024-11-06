//*******get all items

let alarts=document.querySelector(".alart");
let form=document.querySelector(".form-grocery");
let inputbox=document.getElementById("inputarea");
let listcon=document.querySelector(".listcon");
let listitem=document.querySelector(".listitem");
let clrbtn=document.querySelector(".clrbtn");
let glist=document.querySelector(".grocerylist");
let addbtn=document.querySelector(".addbtn");


//******Edit option
let editElament;
let editflag=false;
let editId="";

//********Add eventLisnors
   //form submit
form.addEventListener("submit",additem);
  //clear btn
clrbtn.addEventListener("click",clearitem);

//**************Function */


//1.additem 3mode here  1)add mode  2)edit mode 3)empty mode

function additem(e){
    e.preventDefault();
    let value=inputbox.value;
    let id=new Date().getTime().toString();
    if(value && !editflag)     //1)Add mode
    {
     let elament=document.createElement("div");
     elament.classList.add("listitem");
     let attr=document.createAttribute("data-id");
     attr.value=id;
     elament.setAttributeNode(attr);
     elament.innerHTML=`<h3>${value}</h3>
         <div class="btncon">
             <button class="editbtn"><i class="fa-solid fa-pen"></i></button>
             <button class="deletebtn"><i class="fa-solid fa-trash"></i></button>
         </div>`
//edit and delete btn add event lisner
          let deletebtn=elament.querySelector(".deletebtn");
          let editbtn=elament.querySelector(".editbtn");
          deletebtn.addEventListener("click",deleteitem);
          editbtn.addEventListener("click",edititem);

         listcon.appendChild(elament);
         glist.classList.add("additem");
         displayalart("item added suessfully","green");

         // back to default behaviores
         backtodefault();


    }
    else if(value && editflag)//2)Edit mode
        {
       editElament.innerHTML=value;
       displayalart("chenge value suessfully","green");
       backtodefault();
    }
    else                     //3)Empty Mode
    {
        displayalart("Enter the value","red")
    }
}
// 2.alart function
function displayalart(text,action){
    alarts.textContent=text;
    alarts.classList.add(`alart-${action}`)
///set time 
setTimeout(function(){
    alarts.textContent="";
    alarts.classList.remove(`alart-${action}`)
},1000)
}

//3.clear btn
function clearitem(){
    let items=document.querySelectorAll(".listitem");

    if(items.length>0){
    items.forEach(function(item){
        listcon.removeChild(item)
    })
    glist.classList.remove("additem");
    displayalart("item removed suessfully","red");
}
}
///4.back to default
function backtodefault(){
inputbox.value="";
editflag=false;
editId="";
addbtn.textContent="Add Item";
}

///5.delete btn 
function deleteitem(e){
let elament=e.currentTarget.closest(".listitem");
let id=elament.dataset.id;
listcon.removeChild(elament);
if(listcon.children.length === 0){
    glist.classList.remove("additem")
}
displayalart("remove your list",'red');
backtodefault();
}

///6.edit btn
function edititem(e){
    let elament=e.currentTarget.closest(".listitem"); 
    let id=elament.dataset.id;
    editElament=e.currentTarget.parentElement.previousElementSibling;
    inputbox.value=editElament.innerHTML;
    editflag=true;
    editId=elament.dataset.id;
    addbtn.textContent="edit";
}