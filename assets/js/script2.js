const div1 = document.getElementById("div1")
const div2 = document.getElementById("div2")
const div3 = document.getElementById("div3")
const div4 = document.getElementById("div4")

document.querySelectorAll(".cuadrado").forEach(el => {
   el.addEventListener("click", e => {
     const id = e.target.getAttribute("id");
   
     if (id === "div1") {
      div1.style.backgroundColor="black"
      div2.style.backgroundColor="red"
      div3.style.backgroundColor="green"
      div4.style.backgroundColor="yellow"
     }
     else if  (id === "div2") {
      div1.style.backgroundColor="blue"
      div2.style.backgroundColor="black"
      div3.style.backgroundColor="green"
      div4.style.backgroundColor="yellow"
     }
     else if  (id === "div3") {
      div1.style.backgroundColor="blue"
      div2.style.backgroundColor="red"
      div3.style.backgroundColor="black"
      div4.style.backgroundColor="yellow"
     }
     else if (id === "div4") {
      div1.style.backgroundColor="blue"
      div2.style.backgroundColor="red"
      div3.style.backgroundColor="green"
      div4.style.backgroundColor="black"
     }

   });
 });
 