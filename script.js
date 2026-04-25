let input=document.querySelector("#tasks");
let btn=document.querySelector("#button");
let lst=document.querySelector("#list");
let fact=document.querySelector("#Fact")

const loadTask= () =>{
  const data=localStorage.getItem("task")
  if (data) {
    lst.innerHTML=data
    
  }
}
loadTask()

const saveTasks = ()=>{
  localStorage.setItem("task", lst.innerHTML)
}
saveTasks()
// Add button
btn.addEventListener("click",()=>{
let val=input.value.trim()


  //Edge case
  if (val === "") {
  lst.insertAdjacentHTML("afterbegin", `
    <p class="error-msg flex justify-center mt-5 bg-red-500 text-white font-bold p-2 rounded-lg">
    ⚠️ There is no input !
    </p>`);
    return;
    saveTasks()
}

   document.querySelector(".error-msg")?.remove();
    


    lst.insertAdjacentHTML("afterbegin",`
      
      <li class="flex break-all items-center justify-between bg-gray-200 px-3 py-1 rounded-lg mb-2 mt-5 shadow-sm text-lg font-bold font-[] text-blue-800">
      <span>
      ${val} 
      </span>


      <div class=" flex item-center gap-4 shrink-0">
      
      <button>
      <img class="markDone w-[20px] h-[20px]  cursor-pointer" src="assets/mark.png"
      </button>

      <button>
      <img class="deleteBtn w-[20px] h-[20px] cursor-pointer" src="assets/delete.png">
      </button>
      </div>
      
      </li>
      
      `)
    
    
    input.value="";// input will be empty after add
      
    saveTasks()
  })
    lst.addEventListener("click",(e)=>{
      if (e.target.classList.contains("deleteBtn")) {
        e.target.closest("li").remove()

        saveTasks()
      }
    })

    lst.addEventListener("click",(e)=>{
      if(e.target.classList.contains("markDone")){
        const li2=e.target.closest("li")
        li2.classList.toggle("line-through")

        saveTasks()
      }
    })


    input.addEventListener("keypress",(e)=>{
        if (e.key=="Enter") {
          btn.click();
        }
    })
    
  async function facts() {
  try {
    let res= await fetch ("https://uselessfacts.jsph.pl/api/v2/facts/random");
    let factInp= await res.json()

    let factBox=`${factInp.text}`

    fact.innerText=factBox;
  
  } catch (error) {
    fact.innerHTML=`<p class="flex justify-center mt-5 bg-red-500 text-white font-bold p-2 rounded-lg">⚠️ Failed to load the joke !</p>`
  }
 }
 facts()
