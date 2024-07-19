// const dropdown = document.getElementsByClassName("dropdown");

document.addEventListener("DOMContentLoaded", function(){
    const dropdown = document.querySelector(".dropdown");
    const dropdownSelected = document.querySelector(".dropdown-selected");
    const dropdownOptions = document.querySelector(".dropdown-options");
    const selectInput = document.getElementById("select");
    const searchBox = document.querySelector(".search-box");
    const dropdownIcon = document.getElementById("dropdown-icon");
 
    dropdownSelected.addEventListener("click", function(){
       const isVisible = dropdownOptions.style.display == "block";
       dropdownOptions.style.display = isVisible ? "none" : "block";
       dropdownIcon.classList.toggle("ri-arrow-down-s-line", isVisible);
       dropdownIcon.classList.toggle("ri-arrow-up-s-line", !isVisible);
    });
 
    dropdownOptions.addEventListener("click", function(e){
       console.log(e.target.textContent);
       if(e.target && e.target.nodeName === "LI"){
          const selectValue = e.target.getAttribute("data-value");
          const selectText = e.target.textContent;
          dropdownSelected.textContent = selectText + ' ';
          dropdownSelected.appendChild(dropdownIcon);
          selectInput.value = selectValue;
          dropdownOptions.querySelectorAll("li").forEach(function(li){
             li.classList.remove("active");      
          });
          e.target.classList.add("active");
          dropdownOptions.style.display ="none";

       }
    });
 
 });
 


// dropdown.addEventListener("click", function(e){
//     if(dropdown.contains(e.target)){
//         dropdownOption.style.display = "block";
//     }
// });

