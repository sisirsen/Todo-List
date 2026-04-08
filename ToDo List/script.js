let input=document.querySelector("#tasks");
let btn=document.querySelector("#button");
let lst=document.querySelector("#list");

// Add button
btn.addEventListener("click",()=>{
let val=input.value.trim();


  //Edge case
  if (val===""){
    alert("You have no input")
    return
}


    lst.insertAdjacentHTML("afterbegin",`<li class="flex items-center justify-between bg-gray-200 px-3 py-1 rounded-lg mb-2 mt-5 shadow-sm text-lg font-bold font-[] text-blue-800">
      ${val} 
      <div class=" flex item-center gap-7">
      
      <button>
      <img class="markDone w-[20px] h-[20px] cursor-pointer" src="assets/mark.png"
      </button>

      <button>
      <img class="deleteBtn w-[20px] h-[20px] cursor-pointer" src="assets/delete.png">
      </button>
      </div>
      
      </li>`)
    
    
    input.value="";// input will be empty after add
    
  })
    lst.addEventListener("click",(e)=>{
      if (e.target.classList.contains("deleteBtn")) {
        e.target.closest("li").remove()
      }
    })

    lst.addEventListener("click",(e)=>{
      if(e.target.classList.contains("markDone")){
        const li2=e.target.closest("li")
        li2.classList.toggle("line-through")
      }
    })


    input.addEventListener("keypress",(e)=>{
        if (e.key=="Enter") {
          btn.click();
        }
    })
    
