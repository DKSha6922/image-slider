let count = 0;
const intervalTime = 2000;

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const container = document.getElementById("container");
const items = container.getElementsByTagName("img");

const dots = document.querySelectorAll(".dot");
const images = document.querySelectorAll(".image");

// Initialize: Show the first image and hide the rest
for (let i = 1; i < items.length; i++) {
  items[i].style.display = "none";
}


const showNextImage = ()=>{
    items[count].style.display = "none";

  count++;
  if (count >= items.length) {
    count = 0;
  }
  items[count].style.display = "block";
updateDots();
}


const showPrevImage =()=>{
    items[count].style.display = "none";

  count--;
  if (count < 0) {
    count = items.length - 1;
  }
  items[count].style.display = "block";
  updateDots();
}

const updateDots = ()=>{
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          images.forEach((image) => {
            image.style.display = "none";
          });
          images[index].style.display = "block";
          count = index; // Update count to the selected index
        });
      });      
}

let autoSliderInterval = setInterval(showNextImage,intervalTime);
// Next button: Increase count, loop back if needed, and update display
rightBtn.addEventListener("click", () => {
  clearInterval(autoSliderInterval);
  showNextImage();
  autoSliderInterval = setInterval(showNextImage,intervalTime);
});

// Previous button: Decrease count, loop back if needed, and update display
leftBtn.addEventListener("click", () => {
 clearInterval(autoSliderInterval);
 showPrevImage();
 autoSliderInterval = setInterval(showNextImage,intervalTime);
});

// Dot navigation: Show corresponding image and hide the rest
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      clearInterval(autoSliderInterval); // Reset the interval when manually navigating
      images.forEach((image) => image.classList.add("hidden"));
      images[index].style.display = "block";
      count = index; // Update count to the selected index
      updateDots();
      autoSliderInterval = setInterval(showNextImage, intervalTime); // Restart auto-sliding
    });
  });
  updateDots();


