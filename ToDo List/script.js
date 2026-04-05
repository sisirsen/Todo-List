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
    lst.insertAdjacentHTML("beforeend",`<li>${value}</li>`)

    input.value="";
})

