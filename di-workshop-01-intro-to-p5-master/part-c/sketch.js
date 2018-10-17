var moving = true
var name = 'Lewis Owens'
var positionX = 100
var positionY = 100
var directionX = 10
var directionY = 10
function setup() {
 //Comments - Creating a rectangle with dimensions of 400x200
  createCanvas(400, 200)
}

function draw() {
  //Comments - Changing background colour to 100 out of 255 on greyscale colour chart
  background(30, 150, 90)
  text('SpeedX is' + directionX, 10, 30)
  text('SpeedY' + directionY, 10, 40)
//Comments - 

  rect(positionX, positionY, 10, 10)
if (moving){
positionX = positionX + directionX
positionY = positionY + directionY
}
if (positionX >= 390 || positionX <= 0){
  directionX =- directionX;
}
if (positionY >= 190 || positionY <= 0){
  directionY = - directionY
}

//WHite rectangle appears and moves across top of rectangle from left to right.
//Increasing the numnber from 1 increses the speed of the square. Draw function happens 60 times a second, so square moves right at 60 pixels a second.
//Negative number changes the direction
console.log('The position is' + positionX)

}
function mousePressed() {
  directionX = directionX + directionX
  directionY = directionY + directionY
}
function keyPressed() {
directionX = directionX - directionX + 10
directionY = directionY - directionY + 10

}

