let snake, snake2;
let rez = 16;
let food, portal1, portal2;
let w;
let h;
let score = 0;
let score2 = 0;
let l = 0, r = 0, u = 0, d = 0, l1 = 0, r1 = 0, u1 = 0, d1 = 0;
let winp1 = 0, winp2 = 0, end = 0;
let bg;

function setup() {
  createCanvas(800, 800);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(12);
  snake = new Snake(0, 0, 255,0, 1);
  snake2 = new Snake(98, 98, 0,255, 2);
  food = createVector(floor(random(w)), floor(random(h)));
  portal1 = createVector(floor(random(w)), floor(random(h)));
  portal2 = createVector(floor(random(w)), floor(random(h)));
  bg = (random() * 60) + 120;
}

function foodLocation() {
  let ok = 1, auxok = 1, auxok1 = 1;
  let x = floor(random(w));
  let y = floor(random(h));
  while (ok == 1) {
    auxok = 1;
    auxok1 = 1;
    x = floor(random(w));
    y = floor(random(h));
    for (let i = 0; i < snake.body.length - 1; i++) {
      let part = snake.body[i];
      if (part.x == x && part.y == y) {
        auxok = 0;
      }
    }
    for (let i = 0; i < snake2.body.length - 1; i++) {
      let part = snake2.body[i];
      if (part.x == x && part.y == y) {
        auxok1 = 0;
      }
    }
    if (auxok1 == 1 && auxok == 1) {
      ok = 0;
    }
  }
  food = createVector(x, y);
}

function portals() {
  let part = snake.body[snake.body.length - 1];
  if (part.x == portal1.x && part.y == portal1.y) {
    return 1;

  }
  part = snake.body[snake.body.length - 1];
  if (part.x == portal2.x && part.y == portal2.y) {
    return 2;
  }

  let part2 = snake2.body[snake2.body.length - 1];
  if (part2.x == portal1.x && part2.y == portal1.y) {
    return 3;
  }
  part2 = snake2.body[snake2.body.length - 1];
  if (part2.x == portal2.x && part2.y == portal2.y) {
    return 4;
  }
}


function colision() {
  let x = snake.body[snake.body.length - 1].x;
  let y = snake.body[snake.body.length - 1].y;
  let x1 = snake2.body[snake2.body.length - 1].x;
  let y1 = snake2.body[snake2.body.length - 1].y;
  let first1 = snake.body[snake.body.length - 1];
  let first2 = snake2.body[snake2.body.length - 1];
  for (let i = 0; i <= snake.body.length - 1; i++) {
    let part = snake.body[i];
    if (first1.x == x1 && first1.y == y1) {
      return 3;
    }
    if (part.x == x1 && part.y == y1) {
      return 1;
    }
  }
  for (let i = 0; i <= snake2.body.length - 1; i++) {
    let part = snake2.body[i];
    if (first2.x == x && first2.y == y) {
      return 3;
    }
    if (part.x == x && part.y == y) {
      return 2;
    }
  }
  return false;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && r == 0) {
    l = 1;
    r = 0;
    u = 0;
    d = 0;
    snake.setDir(-1, 0);

  } else if (keyCode === RIGHT_ARROW && l == 0) {
    r = 1;
    l = 0;
    u = 0;
    d = 0;
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW && u == 0) {
    d = 1;
    l = 0;
    r = 0;
    u = 0;
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW && d == 0) {
    u = 1;
    l = 0;
    r = 0;
    d = 0;
    snake.setDir(0, -1);
  }
  if (keyCode === 65 && r1 == 0) {
    l1 = 1;
    r1 = 0;
    u1 = 0;
    d1 = 0;
    snake2.setDir(-1, 0);
  } else if (keyCode === 68 && l1 == 0) {
    r1 = 1;
    l1 = 0;
    u1 = 0;
    d1 = 0;
    snake2.setDir(1, 0);
  } else if (keyCode === 83 && u1 == 0) {
    d1 = 1;
    l1 = 0;
    r1 = 0;
    u1 = 0;
    snake2.setDir(0, 1);
  } else if (keyCode === 87 && d1 == 0) {
    u1 = 1;
    l1 = 0;
    r1 = 0;
    d1 = 0;
    snake2.setDir(0, -1);
  }

  if (end == 1) {
    if (keyCode == 32) {
      l = 0, r = 0, u = 0, d = 0, l1 = 0, r1 = 0, u1 = 0, d1 = 0;
      end = 0;
      document.getElementById("score").innerHTML = "Player 1:";
      document.getElementById("score2").innerHTML = "Player 2:";
      bg = (random() * 60) + 120;
      setup();
      draw();
      loop();
    }
  }
}

function draw() {
  scale(rez);
  stroke(0);
  background(bg);
  if (snake.eat(food) || snake2.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();
  snake2.update();
  snake2.show();

  if (portals() == 1) {
    snake.body[snake.body.length - 1].x = portal2.x + snake.xdir;
    snake.body[snake.body.length - 1].y = portal2.y + snake.ydir;
  }
  if (portals() == 2) {
    snake.body[snake.body.length - 1].x = portal1.x + snake.xdir;
    snake.body[snake.body.length - 1].y = portal1.y + snake.ydir;
  }
  if (portals() == 3) {
    snake2.body[snake2.body.length - 1].x = portal2.x + snake2.xdir;
    snake2.body[snake2.body.length - 1].y = portal2.y + snake2.ydir;
  }
  if (portals() == 4) {
    snake2.body[snake2.body.length - 1].x = portal1.x + snake2.xdir;
    snake2.body[snake2.body.length - 1].y = portal1.y + snake2.ydir;
  }
  if (colision() == 1) {
    end = 1;
    alert("Player 1 Wins");
    print("END GAME");
    winp1++;
    document.getElementById("table").innerHTML = "Player 1 Wins: " + winp1;
    noLoop();
  } else {
    if (colision() == 2) {
      end = 1;
      alert("Player 2 Wins");
      print("END GAME");
      winp2++;
      document.getElementById("table2").innerHTML = "Player 2 Wins: " + winp2;
      noLoop();
    }
    else {
      if (colision() == 3) {
        end = 1;
        alert("TIE");
        print("END GAME");
        noLoop();
      }
    }
  }
  if (snake.endGame()) {
    end = 1;
    alert("Player 2 Wins");
    print("END GAME");
    winp2++;
    document.getElementById("table2").innerHTML = "Player 2 Wins: " + winp2;
    noLoop();
  }
  if (snake2.endGame()) {
    end = 1;
    alert("Player 1 Wins");
    print("END GAME");
    winp1++;
    document.getElementById("table").innerHTML = "Player 1 Wins: " + winp1;
    noLoop();
  }

  noStroke();
  fill(256, 125, 3);
  rect(portal2.x, portal2.y, 1, 1);
  fill(52, 220, 205);
  rect(portal1.x, portal1.y, 1, 1);
  fill(123, 0, 46);
  rect(food.x, food.y, 1, 1);
}
