document.addEventListener("DOMContentLoaded", function(){
   const burger = document.querySelector("#hamburger");
   const menu = document.querySelector("#menu");
   const header = document.querySelector('#main_header')

   burger.addEventListener("click", ()=> {
       if(menu.classList.contains("h-0")){
           menu.classList.remove("h-0")
           menu.classList.remove("opacity-0")

           menu.classList.add("h-nav_height")
           menu.classList.add("opacity-100")
       }
       else{
            menu.classList.remove("h-nav_height")
            menu.classList.remove("opacity-100")

            menu.classList.add("h-0")
            menu.classList.add("opacity-0")
       }
   })
})