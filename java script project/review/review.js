let reviews=[
    {
        id:1,
        name:"hamith husign",
        
        img:"https://res.cloudinary.com/drwcgfoer/image/upload/v1726742353/cld-sample.jpg",

        job:"boss",

        textpro:"I recently purchased a wooden door from [Company Name], and I couldn't be more satisfied. From the moment I placed my order to the installation, the entire process was seamless and professional. The craftsmanship of the door is truly exceptional – the wood is of high quality, beautifully finished, and it adds a touch of elegance to my home."
    },
    {
        id:2,

        name:"mohamed",

        img:"https://res.cloudinary.com/drwcgfoer/image/upload/v1726742351/samples/smile.jpg",

        job:"Assestent Manager",

        textpro:"Their team was friendly, knowledgeable, and answered all my questions with patience. The installation was quick and tidy, and the door fits perfectly. I highly recommend [Company Name] to anyone looking for premium wooden doors and excellent customer service!"
    },
    {
        id:3,

        name:"jalal",

        img:"https://res.cloudinary.com/drwcgfoer/image/upload/v1726742344/samples/people/smiling-man.jpg",

        job:"manager",

        textpro:"I recently had the pleasure of working with high point for the installation of a new wooden door, and I can confidently say it was one of the best decisions I've made for my home. From the very beginning, the team demonstrated a high level of professionalism and expertise. They helped me choose the perfect door that matched the aesthetic of my home, providing insightful recommendations based on my preferences and needs."
    },
    {
        id:4,

        name:"Deepak",

        img:"https://res.cloudinary.com/drwcgfoer/image/upload/v1726742352/samples/man-on-a-street.jpg",

        job:"Accounded",

        textpro:"The quality of the door itself is remarkable. You can tell it's crafted with precision and care, using top-grade wood that not only looks beautiful but feels incredibly sturdy and durable. The natural wood grain and fine detailing add a level of elegance and warmth to my entryway that I never expected. I’ve already received several compliments from friends and family!"
    }
];
/* get elaments */
let imgs=document.getElementById("imgs")
let rname=document.getElementById("rname")
let job=document.getElementById("rposition")
let rtext=document.getElementById("rtext")
/* get elaments buttons*/
let prebtn=document.getElementById("back")
let frbtn=document.getElementById("frond")
let rondbtn=document.getElementById("rond")

let cidem=0;

window.addEventListener("DOMContentLoaded",function(){
    showprofile(cidem)
})
function showprofile(person){
    let idem=reviews[person];
    imgs.src=idem.img; 
    rname.textContent=idem.name;
    job.textContent=idem.job;
    rtext.textContent=idem.textpro
}
frbtn.addEventListener("click",function(){
    cidem++;
    if(cidem>reviews.length-1)
    {
        cidem=0;
    }
    showprofile(cidem)
})
prebtn.addEventListener("click",function(){
    cidem--;
    if(cidem<0)
    {
cidem=reviews.length-1
    }
    showprofile(cidem)

})
rondbtn.addEventListener("click",function(){
    cidem= Math.floor(Math.random()*reviews.length)

    console.log(cidem+reviews)
})

showprofile()

