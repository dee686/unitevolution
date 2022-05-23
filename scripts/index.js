//store the products array in localstorage as "products"

   let productarr=JSON.parse(localStorage.getItem("products"))|| [];
   document.getElementById("products").addEventListener("submit",add)

   function add(){
     event.preventDefault();
       productobj={
         protype:document.querySelector("#type").value,
         prodesc:document.querySelector("#desc").value,
         proprice:document.querySelector("#price").value,
         proimage:document.querySelector("#image").value,

       }
       productarr.push(productobj);
       console.log(productarr);
       localStorage.setItem("products",JSON.stringify(productarr))
       document.querySelector("#type").value=""
       document.querySelector("#desc").value=""
       document.querySelector("#price").value=""
       document.querySelector("#image").value=""
   }
