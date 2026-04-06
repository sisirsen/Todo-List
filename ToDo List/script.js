let input=document.querySelector("#tasks");
let btn=document.querySelector("#button");
let lst=document.querySelector("#list");

// Add.
btn.addEventListener("click",()=>{

  let value=input.value.trim();

  if (value===""){
    alert("You have no input")
    return
}
    lst.insertAdjacentHTML("beforeend",`<li class="listClass">${value} <button class="deleteBtn">🗑️</button></li>`)
    
    
    input.value="";
    
  })
    lst.addEventListener("click",(e)=>{
      if (e.target.classList.contains("deleteBtn")) {
        e.target.closest("li").remove()
      }
    })
    
