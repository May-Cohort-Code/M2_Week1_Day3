//Moving our Charater:

/* const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
 
ctx.fillStyle = 'black';
ctx.font = '18px serif';


class Ghost{
    constructor(){
        this.x=25;
        this.y=25
    const img = document.createElement("img")
    img.addEventListener('load',()=>{
        this.img = img;
        this.draw()

    })
    img.src = 'https://media.giphy.com/media/Qr8JE9Hvi7ave/200.gif';
    }

    moveUp(){
        this.y -=25
    }
    moveDown(){
        this.y +=25
    }
    moveLeft(){
        this.x-=25
    }
    moveRight(){
        this.x+=25
    }
    draw() {
        ctx.drawImage(this.img, this.x, this.y, 50, 50);
      }
}

const ghost = new Ghost()

document.addEventListener('keydown',(event)=>{
    switch(event.key){
    case "ArrowUp":
        ghost.moveUp()
        break;
    case "ArrowDown":
        ghost.moveDown();
        break;
    case "ArrowRight":
        ghost.moveRight();
        break;
    case "ArrowLeft":
        ghost.moveLeft();
        break;
        
    }
    updateCanvas();
})


function updateCanvas(){
    ctx.clearRect(0,0,1500,1700)
    ctx.fillText("Ghost_x" + ghost.x,580,40)
    ctx.fillText("Ghost_x" + ghost.y,580,60)
    ghost.draw()
}

   */


//optional moving background

const img = document.createElement('img');
img.src = 'https://orig15.deviantart.net/8bed/f/2015/058/a/8/smb1_background_by_steamerthesteamtrain-d8jq7ea.png';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const backgroundImage = {
  img: img,
  x: 0,
  speed: -1,

  move: function() {
    this.x += this.speed;
    this.x %= canvas.width;
  },

  draw: function() {
    ctx.drawImage(this.img, this.x, 0);
    if (this.speed < 0) {
      ctx.drawImage(this.img, this.x + canvas.width, 0);
    } 
  },
};

function updateCanvas() {
  backgroundImage.move();

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.draw();

  requestAnimationFrame(updateCanvas);
}

// start calling updateCanvas once the image is loaded
img.onload = updateCanvas;
