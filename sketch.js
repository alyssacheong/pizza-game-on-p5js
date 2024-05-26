let ingredients = [];
let selected = "";

function setup() {
  createCanvas(400, 400);
  backgroundMusic();
}

function backgroundMusic() {
  // backgroundPizzeria.play();
  backgroundPizzeria.loop();
  backgroundPizzeria.setVolume(1);
  userStartAudio();
}

function preload() {
  soundFormats("mp3");
  backgroundPizzeria = loadSound("pizzeria.mp3")
  splat = loadSound("splat.mp3");
  wow = loadSound("wow.mp3")
  omg = loadSound("omg.mp3")
  omg.setVolume(0.1)
  windows = loadSound("windows.mp3")
}

function draw() {
  background(220);

  //PIZZA BASE AND CRUST
  crust = color(255, 228, 181);
  fill(crust);
  circle(200, 200, 300);

  base = color(250, 250, 210);
  fill(base);
  circle(200, 200, 275);

  

  for (const i of ingredients) {
    c = color(178, 34, 34); //PEPPERONI
    fill(c);

    if (i.name == "pepperoni") {
      circle(i.x, i.y, 50);
    }

    h = color(255, 0, 106); //HAM
    fill(h);
    if (i.name == "ham") {
      push();
      translate(i.x, i.y);
      rotate(radians(i.r));
      rect(0, 0, 40, 10);
      pop();
    }

    m = color(254, 254, 248); //MUSHROOM
    fill(m);
    if (i.name == "mushroom") {
      arc(i.x + 10, i.y, 40, 40, PI, 0, CHORD);
      rect(i.x, i.y, 20, 15);
    }

    n = color(244, 245, 10);
    fill(n);
    if (i.name == "pineapple") {
      push();
      translate(i.x, i.y);
      rotate(radians(i.r));
      arc(0, 0, 80, 80, 0, HALF_PI);
      pop();
    }
  }
  
  //INGREDIENTS
  c = color(178, 34, 34); //PEPPERONI
  fill(c);
  if (selected == "pepperoni") {
    circle(mouseX, mouseY, 50);
  }

  h = color(255, 0, 106); //HAM
  fill(h);
  if (selected == "ham") {
    push();
    translate(mouseX, mouseY);
    rotate(radians(millis() / 10));
    rect(0, 0, 40, 10);
    pop();
  }

  m = color(254, 254, 248); //MUSHROOM
  fill(m);
  if (selected == "mushroom") {
    arc(mouseX + 10, mouseY, 40, 40, PI, 0, CHORD);
    rect(mouseX, mouseY, 20, 15);
  }

  n = color(244, 245, 10); //PINEAPPLE
  fill(n);
  if (selected == "pineapple") {
    push();
    translate(mouseX, mouseY);
    rotate(radians(random(1, 360)));
    arc(0, 0, 80, 80, 0, HALF_PI);
    pop();
  }
  
  b = color(200,8,21)
  fill(b);
  if (selected == "sauce") { 
    circle(mouseX, mouseY, 5);
    if (mouseIsPressed === true) {
      line(mouseX, mouseY, pmouseX, pmouseY)
    }
  }
}


function mousePressed() {
  console.log(ingredients);
  let d = dist(200, 200, mouseX, mouseY);

  console.log(d);

  if (d < 145) {
    //mouse distance to center has to be less than radius of pizza
    if (selected == "pepperoni") {
      ingredients.push({ name: "pepperoni", x: mouseX, y: mouseY });
      console.log("MEAT");
      splat.play();
    
    }

    if (selected == "ham") {
      ingredients.push({ name: "ham", x: mouseX, y: mouseY, r: millis() / 10 });
      console.log("BETTER MEAT");
      wow.play();
    }

    if (selected == "mushroom") {
      ingredients.push({ name: "mushroom", x: mouseX, y: mouseY });
      console.log("BETTER MEAT");
    
      windows.play();
    }

    if (selected == "pineapple") {
      ingredients.push({
        name: "pineapple",
        x: mouseX,
        y: mouseY,
        r: random(1, 360),
      });
      console.log("pine");
        omg.play();
    }
    
    if (selected == "sauce") {
      ingredients.push({
        name: "sauce",
        x: mouseX,
        y: mouseY,
        a: pmouseX,
        b: pmouseY
        
      })
    }
  }
}

function keyPressed(event) {
  console.log(event);

  //pepperoni
  if (keyCode === 65) {
    console.log("a");
    selected = "pepperoni";
  }

  //ham
  if (keyCode === 83) {
    console.log("s");
    selected = "ham";
  }

  //mushroom
  if (keyCode === 68) {
    console.log("d");
    selected = "mushroom";
  }

  //pineapple
  if (keyCode === 70) {
    console.log("f");
    selected = "pineapple";
  }
  
  //sauce 
  if (keyCode === 81) {
    console.log("q")
    selected = "sauce";
  }
  
  //cheese 
  if (keyCode === 87) {
    console.log("w")
    selected = "cheese"
  }
}

