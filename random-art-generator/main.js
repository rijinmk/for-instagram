function Bubble(){
    let ww = window.innerWidth;
    let wh = window.innerHeight;
    this.x = width/2 + random(-ww, ww); 
    this.y = height/2 + random(-wh, wh);
    this.radius = 2; 
    this.colors = ["#9b59b6", "#34495e", "#e74c3c", "#f1c40f", "#2ecc71"];
    this.color = random(this.colors); 
    console.log(this.color);

    this.show = () => {
        fill(this.color);
        noStroke(); 
        ellipse(this.x, this.y, this.radius, this.radius);
    }

    this.randomMovement = () => {
        this.x += random(-5, 5); 
        this.y += random(-5, 5);
    }
}
let b = []; 
function setup(){
    let ww = window.innerWidth;
    let wh = window.innerHeight; 
    console.log(ww, wh); 
    createCanvas(ww, wh);
    let nBubbles = 3000; 
    for(let i=0; i<nBubbles; i++){
        b.push(new Bubble()); 
    }
}

function draw(){
    b.forEach(e => {
        e.show(); 
        e.randomMovement(); 
    })
}