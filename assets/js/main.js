// Write your javascript code here
let count = 0;

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const container = document.getElementById("container");
const items = Array.from(container.children);

 



//i click next btn increase in array value count if count > 6 starting increasing count from 1
rightBtn.addEventListener("click",()=>{
  
})

//now i click left button decrease count countinu value
leftBtn.addEventListener("click",()=>{
count--;
if(count < 0){
    count = values.length-1;
}
display.innerText = values[count];
})
