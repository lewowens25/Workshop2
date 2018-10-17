function setup() {
  createCanvas(400, 400)
  background(10, 90, 100)
}
function draw() {
  fill(255, 0, 0)
  triangle(mouseX, mouseY, 0,400, mouseX, (mouseY-20))
}
