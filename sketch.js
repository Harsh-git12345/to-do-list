var input;
var add;
var ypos = 300;
var deletes = [];
var items = [];
var numbers = 0;
function setup() {
  createCanvas(800,800);
  input = createInput("Enter what you want to add");
  input.position(300, 200);
  add = createButton("ADD");
  add.position(500, 200);
}

function draw() {
  background(51);
  add.mousePressed(() => {
    addingList();
  })
  deletes.map((item) => {
    item[1].mousePressed(function() {
      item[1].remove();
      item[0].remove();
      console.log(deletes);
    })
  })

  
  //for(var i = 0; i < deletes.length; i++) {
    //deletes[i][1].show();

  //}
}
function addingList () {
  var value = input.value();
  var item = createElement("h2");
  var delete1 = createButton("X");
  delete1.position(600, ypos + 30);
  delete1.style('color', 'red');
  var array2 = [item, delete1];
  deletes.push(array2);
  //items.push(item);
  numbers = numbers + 1;
  item.html(numbers + ". " + value);
  item.position(100, ypos);
  ypos = ypos + 30;
}