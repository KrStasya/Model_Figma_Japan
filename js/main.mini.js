!function(){let a=document.querySelector(".header");window.onscroll=()=>{window.pageYOffset>50?a.classList.add("header_active"):a.classList.remove("header_active")}}(),function(){let a=document.querySelector(".burger"),c=document.querySelector(".header_nav"),b=document.querySelector(".header_close");a.addEventListener("click",()=>{c.classList.add("header_nav_active")}),b.addEventListener("click",()=>{c.classList.remove("header_nav_active")})}(),function(){let a=function(a,d){let b=document.querySelector(".header").clientHeight,e=document.querySelector(a).getBoundingClientRect().top-b,f=window.pageYOffset,g=null,c=function(i){var a,b,h,l;null===g&&(g=i);let j=i-g,k=(a=j,b=f,h=e,(a/=d/2)<1?h/2*a*a+b:-h/2*(--a*(a-2)-1)+b);window.scrollTo(0,k),j<d&&requestAnimationFrame(c)};requestAnimationFrame(c)};!function(){let b=document.querySelectorAll(".js-scroll");b.forEach(b=>{b.addEventListener("click",function(){let b=this.getAttribute("href");a(b,1e3)})})}()}()