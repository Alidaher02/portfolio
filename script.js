const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const close = document.getElementById('closebtn');
const socialIcons = document.getElementById('social-icons');

btn.addEventListener('click', () => {
  nav.classList.remove('hidden');

  // Animate fade out
  socialIcons.classList.remove('opacity-100', 'scale-100');
  socialIcons.classList.add('opacity-0', 'scale-95');

  // After animation ends, keep display flex but fully transparent & scaled down
});

close.addEventListener('click', () => {
  nav.classList.add('hidden');

  // Animate fade in
  socialIcons.classList.remove('opacity-0', 'scale-95');
  socialIcons.classList.add('opacity-100', 'scale-100');
});

const inputBox = document.getElementById("input-box");
const Taskbtn = document.getElementById("TaskBtn");
const listContainer = document.getElementById("list-container");

Taskbtn.addEventListener("click" , function(){
  if(inputBox.value === ''){
    alert("Please Add a Task!");
  }else{
    let toDoList = document.createElement("div");
    toDoList.classList.add("to-do-container");
    toDoList.innerHTML = `
    <div class="to-do-container flex items-center gap-80">
        <p class="text-lg font-serif">${inputBox.value}</p>
        <button class="py-3 px-5 bg-red-600 rounded-2xl" id="del">Delete</button>
      </div>
    `
    inputBox.value = "";
    listContainer.appendChild(toDoList);
  }
     
  let Delete = toDoList.getElementById("del");
  Delete.addEventListener("click" , function(){
    toDoList.remove();
  })
  
});