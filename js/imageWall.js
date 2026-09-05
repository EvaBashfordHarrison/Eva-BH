const pile = document.getElementById("imagePile");

const images = [];

// Create 40 temporary images
for (let i = 0; i < 37; i++) {
  images.push(
    `../assets/images/image-${i}.jpg`
  );
}


// Shuffle the images
images.sort(() => Math.random() - 0.5);

let currentImage = 0;
let zIndex = 1;


// Add an image to the pile
function addImage() {

  const img = document.createElement("img");

  img.src = images[currentImage];

  img.classList.add("pile-image");


  // Small random movement
  const offsetX = Math.random() * 20 - 10;
  const offsetY = Math.random() * 20 - 10;


  // Small random rotation
  const rotation = Math.random() * 2 - 1;


  img.style.setProperty(
    "--offset-x",
    `${offsetX}px`
  );

  img.style.setProperty(
    "--offset-y",
    `${offsetY}px`
  );

  img.style.setProperty(
    "--rotation",
    `${rotation}deg`
  );


  // New image goes on top
  img.style.zIndex = zIndex;


  pile.appendChild(img);


  currentImage++;
  zIndex++;


  // Once we reach 40 images,
  // shuffle and start again
  if (currentImage >= images.length) {

    currentImage = 0;

    images.sort(() => Math.random() - 0.5);
  }
}


// Put down the first image
addImage();


// Add another image every 2 seconds
setInterval(addImage, 2000);