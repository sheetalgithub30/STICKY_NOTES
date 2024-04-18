const add = document.querySelector("button");
const text = document.querySelector("textarea");
const category = document.querySelector("select");

const textColor = document.querySelector(".text");
const bgColor = document.querySelector(".background");

add.addEventListener("click",()=>{
   const note = text.value;

   if(note==="") {
    alert("Please Enter a note");
    return;
  
  }
   const resultDiv = document.createElement("div");
   const para = document.createElement("p");
   para.classList.add("para");
   para.innerHTML = note;

   resultDiv.style.color=textColor.value;
   resultDiv.style.backgroundColor = bgColor.value;

   resultDiv.append(para);

   resultDiv.classList.add("stick"); 

  const cross = document.createElement("span"); 
  cross.innerHTML = "❌"; 
  cross.classList.add("close");
  cross.addEventListener("click", removeStickyNote);
  resultDiv.append(cross);

  const edit = document.createElement("span"); 
  edit.innerHTML = "✏️"; 
  edit.classList.add("edit");
  edit.addEventListener("click", editStickyNote);
  resultDiv.append(edit);
  

  console.log(document.querySelector("."+ category.value).append(resultDiv));

  text.value = "";
})

function removeStickyNote(e) {
  e.target.parentElement.remove();
}

function editStickyNote(e){
   text.value = e.target.parentElement.children[0].innerHTML;
   category.value = e.target.parentElement.parentElement.classList[1];
   e.target.parentElement.remove();
}
