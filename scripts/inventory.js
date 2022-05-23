

let arr=JSON.parse(localStorage.getItem("products"))
display(arr);
function display(data){
 document.querySelector("#all_products").innerHTML="";
 data.forEach(function(element,index){
   let box=document.createElement("div")

   let images=document.createElement("img")
   images.src=element.proimage;

   let name=document.createElement("h2")
   name.innerText=`Type :${element.protype}`;

   let desc=document.createElement("h3")
   desc.innerText=`Description :${element.prodesc}`;

   let price=document.createElement("h2")
   price.innerText= `Price : ${element.proprice}`;

   let btn=document.createElement("button");
   btn.setAttribute("class" ,"remove_product");
   btn.innerText="Remove";
   btn.addEventListener("click",function(){
     remove(index)
   })

   box.append(images,name,desc,price,btn);
   document.getElementById("all_products").append(box)
 });

}

function remove(index){

let newarr= arr.filter(function(el,i){
 
 return i!==index
 
 })
 localStorage.setItem("products",JSON.stringify(newarr))
 display(newarr)
}
