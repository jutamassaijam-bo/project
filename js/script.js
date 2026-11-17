const btn  = document.querySelector(".button")
btn.addEventListener("mouseenter", () => {
  btn.classList.add("hover")

})
btn.addEventListener("mouseleave", () => {
  btn.classList.remove("hover")
  
})