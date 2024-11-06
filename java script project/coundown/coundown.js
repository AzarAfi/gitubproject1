const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  /* get Elaments */
  let giveaway=document.querySelector(".giveaway");
  let coundowncon=document.querySelector(".coundowncon");
  let outcon=document.querySelectorAll(".outcon h1");
  /*  */
let futureday = new Date(2024,10,14,12,30,0);

/* get value from futurday */
let dates=futureday.getDate();
let year=futureday.getFullYear();
let hours=futureday.getHours();
let mints=futureday.getMinutes();
let month=months[futureday.getMonth()];
let weekday=weekdays[futureday.getDay()]


/* edit for giveaway section */
  
 giveaway.innerHTML=`Giveaway Ends On ${year},${month},${weekday} ${dates} ${hours}:${mints}pm`


 /* make function */

 function coundownrun(){/* function start */

  /* get today date and time */
  let today=new Date();
  /* minus futur day from now day  */
  
  let t=futureday-today;/* it will get left over value  for t*/
   


  /* calculate the day and time */
  let oneday=24*60*60*1000;
  let onehours=60*60*1000;
  let oneminutes=60*1000;

/* devite for the calulation */
  let cday=Math.floor(t/oneday);
  let chours=Math.floor((t%oneday)/onehours);
  let cminutes=Math.floor((t%onehours)/oneminutes);
  let csec=Math.floor((t%oneminutes)/1000);


let calcu=[cday,chours,cminutes,csec]/* all Value assaning Value */

/* add zero add frond in less then 10 value */
function format(idem){
  if(idem<10)
  {
   return (idem=`0${idem}`)
  }
return idem
}

/* assigen the calculation value our div  */
outcon.forEach(function(ev,index){
 ev.innerHTML=format(calcu[index])
})

/* expire the time after show the message */
if(t<0){
  clearInterval(cowndown)
  coundowncon.innerHTML=`The Event Was Expaire`
}
 }/* function end */
 let cowndown=setInterval(coundownrun,1000);/* run secont for intervel */


 coundownrun();/* call function */