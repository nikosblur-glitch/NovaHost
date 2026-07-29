const faq = document.querySelectorAll(".faq-item");

faq.forEach(item=>{

const btn=item.querySelector(".faq-question");

btn.onclick=()=>{

item.classList.toggle("active");

}

});
