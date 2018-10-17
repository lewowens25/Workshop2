function setup() {
    createCanvas(400, 400)
    background(0, 0, 0)
  }
  
  var r = 100
  var g = 100
  var b = 100
  var s = 30
  
  function draw() {
    fill(r,g,b)
    noStroke() 
    if (keyIsPressed) {
      if (key == 'w') {
        if (r<255){
          r = r + 1
        }
      }
      if (key == 's') {
        if (r>0){
        r = r - 1}
      }
      if (key =='e'){
        if (g<255){
        g = g + 1}
      }
      if (key =='d'){
        if (g>0){
        g = g -1}
      }
      if (key =='r'){
        if (b<255){
        b++}
      }if (key =='f'){
        if (b>0){
         b -=1}
      }
      if (key == 'q'){
        if (s<100){
        s = s+1}}
      if (key == 'a') {
        if (s>0){
        s = s - 1}
      }
      // add more keys/colours
      fill(r,g,b)
    }
    ellipse(mouseX, mouseY, s,s)     
    document.getElementById("r").innerHTML = r;
    document.getElementById("g").innerHTML = g;
    document.getElementById("b").innerHTML = b;
    document.getElementById("s").innerHTML = s;
  }