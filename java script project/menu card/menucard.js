/* array list */
const menus=[{
    id:1,
    dname:"Brosted Chicken",
    catacery:"snakse",
    img:"img/kfc.jpg",
    price:"25AED",
    aboutdis: "The roasted chicken was a true masterpiece, its skin perfectly crispy and golden brown, encasing juicy, tender meat that was seasoned to perfection. Every bite was bursting with flavor, from the subtle herbs to the rich, savory juices that soaked into the side of buttery mashed potatoes. It was the kind of dish that made you savor each moment, a simple yet divine culinary experience."
     },
    {
    id:2,
    dname:"Pizza",
    catacery:"dinner",
    img:"img/sn1.jpg",
    price:"39AED",
    aboutdis:"Pizza is a popular Italian dish made primarily of a flattened round of dough topped with ingredients like tomato sauce, cheese, and various toppings. There are many styles of pizza, ranging from the classic Neapolitan, with its thin, soft crust, to thicker versions like the Chicago deep-dish"
    },


 {
id:3,
dname:"Burger",
catacery:"dinner",
img:"img/sn2.jpg",
price:"19AED",
aboutdis:"A burger (or hamburger) is a popular food made from ground meat, typically beef, that's shaped into a patty and served in a sliced bun.It often comes with various toppings like lettuce, tomato, cheese, onions, pickles, and condiments like ketchup, mustard, or mayo."
 },

{
    id:4,
    dname:"Shawarma",
    catacery:"dinner",
    img:"img/sn3.jpg",
    price:"12AED",
    aboutdis:"Shawarma is a popular Middle Eastern dish made of thinly sliced meat that is slow-cooked on a vertical rotisserie. The meat, typically lamb, beef, or chicken, is marinated in a blend of spices and stacked in layers on the spit, rotating and roasting slowly. As the outer layer cooks, it is shaved off and served in flatbreads like pita or wrapped in laffa, along with various toppings and sauces."
},
{
    id:5,
    dname:"Dosa",
    catacery:"breakfast",
    img:"img/bf2.jpg",
    price:"10AED",
    aboutdis:"Dosa is a traditional South Indian dish that resembles a thin, crispy pancake made from a fermented batter of rice and black lentils (urad dal). It's a staple in South Indian cuisine and is typically served with a variety of chutneys and sambar (a spicy lentil soup)."

},

{
id:6,
dname:"Idly",
catacery:"breakfast",
img:"img/bf1.jpg",
price:"10AED",
aboutdis:"about idly(also spelled idli) is a traditional South Indian dish made from fermented rice and lentil batter, which is steamed to create soft, fluffy cakes. Its a popular breakfast food, known for being light, healthy, and easy to digest. Idly is often served with chutney, sambar, or a combination of both."
},

{
    id:7,
    dname:"Appam",
    catacery:"breakfast",
    img:"img/bf3.jpg",
    price:"10AED",
    aboutdis:"Appam is a traditional South Indian and Sri Lankan dish made from fermented rice batter and coconut milk, popular in Kerala and Tamil Nadu. It has a distinct bowl-like shape with a soft, spongy center and crispy, lacy edges. Appam is often eaten for breakfast or dinner, usually served with a variety of side dishes like vegetable stew, chicken curry, or coconut milk."
},
{
    id:8,
    dname:"Puri",
    catacery:"breakfast",
    img:"img/bf4.jpg",
    price:"12AED",
    aboutdis:"a popular Indian deep-fried bread made from unleavened whole wheat flour dough. It is commonly served as part of breakfast or as a snack, often accompanied by various side dishes like potato curry, chana masala, or halwa. The dough is rolled into small, round discs and fried in oil, which causes the poori to puff up and become crispy on the outside while remaining soft inside."
},{
    id:9,
    dname:"Puttu",
    catacery:"lunch",
    img:"img/bf5.jpg",
    price:"10AED",
    aboutdis:"Puttu is a traditional South Indian and Sri Lankan dish, especially popular in the state of Kerala and Tamil Nadu. It is a steamed cylindrical cake made from layers of coarsely ground rice flour and grated coconut, often served with a variety of sweet or savory accompaniments. Puttu is usually eaten for breakfast and is well-known for being a healthy, gluten-free option."
},
{
id:10,
dname:"Chicken Dikka",
catacery:"dinner",
img:"img/din1.jpg",
price:"25AED",
aboutdis:"Chicken tikka is a popular Indian dish made from marinated pieces of boneless chicken that are grilled or roasted until tender and flavorful. It is well-loved for its smoky flavor, juicy texture, and vibrant spices, making it a favorite in Indian cuisine and beyond."
},

{
    id:11,
    dname:"Fish with Rice",
    catacery:"lunch",
    img:"img/lunch1.jpg",
    price:"30AED",
    aboutdis:"Fish with rice is a classic and popular combination in many cuisines around the world, celebrated for its delicious pairing of flavors and textures. Here,s an overview of how this dish is prepared and enjoyed in different cultures"
},

{
id:12,
dname:"Briyani",
catacery:"lunch",
img:"img/lunch2.jpg",
price:"30AED",
aboutdis:"Biryani is a rich and flavorful rice dish that originates from the Indian subcontinent, renowned for its aromatic spices, marinated meat, and layered cooking technique. It is a celebratory dish often served during special occasions, festivals, and family gatherings. Biryani varies widely across regions, each with its own unique ingredients and preparation methods."
}]
/* get elaments */
const maincon=document.querySelector(".maincon") 
let btncon=document.querySelector(".btncon")



  /* windows load */
window.addEventListener("DOMContentLoaded",function(){
getvaluefrmarray(menus);


/* get value in btn  */
let list=menus.reduce(function(values,item){
    if(!values.includes(item.catacery)){
        values.push(item.catacery)
    }
    return values
},["all"])

/* create btns in windowload */
let addbtns=list.map(function(item4){
return`<button class="btns" data-id=${item4}>${item4}</button>`
}).join("");



/* btn condition */
btncon.innerHTML=addbtns;
const btns=document.querySelectorAll(".btns")
btns.forEach(function(btn){
    btn.addEventListener("click",function(itemlist){
        let cattacry=itemlist.currentTarget.dataset.id;
        let mainitem=menus.filter(function(item3){
            if(item3.catacery === cattacry){
                return item3;
            }
        })
        if(cattacry === "all"){
            getvaluefrmarray(menus)
        }
        else{
            getvaluefrmarray(mainitem)
        }
    })
})



})
/* featching data from array */
function getvaluefrmarray(items){
    let item=items.map(function(item2){
       return`<section class="ourmenu">
          <img src=${item2.img} alt="" width="40%" height="270px" class="imgbox">
          <div class="dd">
          <header class="box-head">
            <h2>${item2.dname}</h2>
            <h2>${item2.price}</h2>
          </header>
          <p>
            ${item2.aboutdis}
          </p>
        </div>
        </section>`
    })
    item=item.join("")
    maincon.innerHTML=item
}