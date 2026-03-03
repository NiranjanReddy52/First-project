const subscribeButton = document.getElementById("subscribe")

subscribeButton.addEventListener("click",()=>{
    document.querySelector(".subscribe-note").innerHTML="Thank you for subscribing our channel"
    subscribeButton.innerHTML="subscribed"
    subscribeButton.classList.add("disable")
})