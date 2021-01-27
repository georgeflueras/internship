class Snake {
    constructor(t, r, c,ch, id) {
        this.body = [];
        this.body[0] = createVector(floor(t / 2), floor(r / 2));
        this.xdir = 0;
        this.ydir = 0;
        this.len = 0;
        this.score = 0;
        this.score2 = 0;
        this.color = c;
        this.colorh=ch;
        this.id = id;
    }

    setDir(x, y) {
        this.xdir = x;
        this.ydir = y;
    }

    update() {
        let head = this.body[this.body.length - 1].copy();
        this.body.shift();
        head.x += this.xdir;
        head.y += this.ydir;
        if (head.x > w - 1) {
            head.x = 0;
        }
        if (head.x < 0) {
            head.x = w - 1;
        }
        if (head.y > h - 1) {
            head.y = 0;
        }
        if (head.y < 0) {
            head.y = h - 1;
        }
        this.body.push(head);
    }

    grow() {
        let head = this.body[this.body.length - 1].copy();
        this.len++;
        this.body.push(head);

    }

    endGame() {
        let x = this.body[this.body.length - 1].x;
        let y = this.body[this.body.length - 1].y;
        //if (x > w - 1 || x < 0 || y > h - 1 || y < 0) {
        // return true;
        // }
        for (let i = 0; i < this.body.length - 1; i++) {
            let part = this.body[i];
            if (part.x == x && part.y == y) {
                return true;
            }
        }
        return false;
    }

    eat(pos) {
        let x = this.body[this.body.length - 1].x;
        let y = this.body[this.body.length - 1].y;
        if (x == pos.x && y == pos.y) {
            this.grow();
            this.grow();
            this.grow();
            this.grow();
            this.grow();
      
            if (this.id == 1) {
                this.score += 1;
                document.getElementById("score").innerHTML = "Player 1: " + this.score;
            }
            else {
                this.score2 += 1;
                document.getElementById("score2").innerHTML = "Player 2: " + this.score2;
            }
            return true;
        }
        return false;
    }

    show() {
        fill(this.colorh);
        noStroke();
        rect(this.body[this.body.length-1].x,this.body[this.body.length-1].y,1,1);
        for (let i = 0; i < this.body.length-1; i++) {
            fill(this.color);
            noStroke();
            rect(this.body[i].x, this.body[i].y, 1, 1)
        }
    }

}