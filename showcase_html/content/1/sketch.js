var xpos = 1;
var fps = 25;

function preload() {
    soundFormats('ogg', 'mp3');
    click = loadSound('sounds/click.mp3');
    console.log(click);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(fps);
    click.setVolume(0.1);
}

var i = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var alphabet = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];
var satz = [[T, H, E], [Q,U,I,C,K], [B,R,O,W,N], [F,O,X], [J,U,M,P,S], [O,V,E,R], [T,H,E], [L,A,Z,Y], [D,O,G]];


// random rotation value for the letters
var r = i.map(function(v){
   return Math.floor(Math.random() * 200);
});


function draw() {
  translate(40,40);
  background("#3c5d91");

  var xxx = 0;
  for (var w = 0; w < satz.length; w++) {

    for (var c = 0; c < satz[w].length; c++) {
        push();
        if (satz[w][c] != alphabet[i[xxx]]) {
            i[xxx]++;
            click.play();
        }


        var mouseMoveX = c*mouseX;
        var mouseMoveY = w*mouseY;

        if(mouseX > 50) {
            translate(mouseMoveX,mouseMoveY);
        } else {
            translate(c*50,mouseMoveY);
        }

        if(mouseY > 80) {
            translate(mouseMoveX,mouseMoveY);
        } else {
            translate(mouseMoveX,w*80);
        }

        noFill();
        stroke("#e8e3bc");
        strokeWeight(4);

        var toZero = map(r[xxx], 0, width, 100, mouseY);

        if(mouseX > 40 && mouseY > 40) {
            alphabet[i[xxx]](xpos, toZero);
        } else {
            alphabet[i[xxx]](xpos, 0);
        }

        xxx++;
        pop();
    }
  }
}


// function for the letters
function A(xpos, r){
    rotate(r);
    //waagerecht
    line(6,25,24+xpos,25);
    //schräg
    line(0, 40, 15, 0);
    line(15+xpos, 0, 30+xpos, 40);
}


function B(xpos, r){
    rotate(r);
    //arc
    arc(20+xpos, 10 , 20, 20, PI+HALF_PI, HALF_PI);
    arc(20+xpos, 30, 20, 20, PI+HALF_PI, HALF_PI);
    //senkrechte Linien
    line (0,0, 0,40);
    //waagerechte Linien
    line(0, 0, xpos+20, 0);
    line(0, 20, xpos+20, 20);
    line(0, 40, xpos+20, 40);
}


function C(xpos, r){
    rotate(r);
    //arc
    arc(10, 10, 20, 20, PI, PI+HALF_PI);
    arc(20+xpos, 10, 20, 20, PI+HALF_PI, TWO_PI);
    arc(10, 30, 20, 20, HALF_PI, PI);
    arc (20+xpos, 30, 20, 20, 0,HALF_PI);
    //senkrechte Linien
    line (0,10, 0,30);
    //waagerechte Linien
    line (10, 0, 20+xpos, 0);
    line (10, 40, 20+xpos, 40);
}


function D(xpos, r){
    rotate(r);
    //arc (xpos, ypos, breite, höhe, anfangswinkel, endwinkel, open)
    arc(20+xpos, 10, 20, 20, PI+HALF_PI, TWO_PI);
    arc (20+xpos, 30, 20, 20, 0,HALF_PI);
    //senkrechte Linien
    line(0, 0, 0, 40);
    line(30+xpos, 10, 30+xpos, 30);
    //waagrechte Linien
    line(0, 0, 20+xpos, 0);
    line(0, 40, 20+xpos, 40);
}


function E(xpos, r){
    rotate(r);
    line(0, 0, 0, 40);
    line(0, 0, xpos+30, 0);
    line(0, 20, xpos+20, 20);
    line(0, 40, xpos+30, 40);
}


function F(xpos, r){
    rotate(r);
    line(0, 0, 0, 40);
    line(0, 0, xpos+30, 0);
    line(0, 20, xpos+20, 20);
}


function G(xpos, r){
    rotate(r);
    //arc (xpos, ypos, breite, höhe, anfangswinkel, endwinkel, open)
    arc(10, 10, 20, 20, PI, PI+HALF_PI);
    arc(20+xpos, 10, 20, 20, PI+HALF_PI, TWO_PI);
    arc(10, 30, 20, 20, HALF_PI, PI);
    arc (20+xpos, 30, 20, 20, 0,HALF_PI);
    //senkrechte Linien
    line(0, 10, 0, 30);
    line(30+xpos, 20, 30+xpos, 30);
    //waagrechte Linien
    line(10, 0, 20+xpos, 0);
    line(10, 40, 20+xpos, 40);
    line(20+xpos, 20, 30+xpos, 20);
}


function H(xpos, r){
    rotate(r);
    line(0,0, 0, 40);
    line(xpos+30, 0, xpos+30, 40);
    line(0, 20, xpos+30, 20);
}


function I(xpos, r){
    rotate(r);
    //senkrechte Linien
    line (15+xpos/2,0, 15+xpos/2,40);
    //waagerechte Linien
    line (5, 0, 25+xpos, 0);
    line (5, 40, 25+xpos, 40);
}


function J(xpos, r){
    rotate(r);
    //arc
    arc (15+xpos, 30, 20, 20, 0, PI);
    //senkrechte Linien
    line (25+xpos, 0, 25+xpos, 30);
    //waagerechte Linien
    line (5,0, 25+xpos, 0);
}


function K(xpos, r){
    rotate(r);
    //senkrechte Linien
    line (0,0, 0,40);
    //schräge Linien
    line (xpos, 20, 30+xpos, 0);
    line (5+xpos, 20, 30+xpos, 40);
}


function L(xpos, r){
    rotate(r);
    //senkrecht
    line(0,0,0,40);
    //waagerecht
    line(0,40,30+xpos,40);
}


function M(xpos, r){
    rotate(r);
    //senkrechte Linien
    line(0,0,0,40);
    line(30+xpos,0,30+xpos,40);
    //schräge Linien
    line(0, 0, 15, 20);
    line(30+xpos, 0, 15+xpos, 20);
}


function N(xpos, r){
    rotate(r);
    //senkrechte Linien
    line(0,0,0,40);
    line(30+xpos,0,30+xpos,40);
    //schräge Linien
    line(0, 0, 30, 40);
}


function O(xpos, r){
    rotate(r);
    //arc (xpos, ypos, breite, höhe, anfangswinkel, endwinkel, open)
    arc(10, 10, 20, 20, PI, PI+HALF_PI);
    arc(20+xpos, 10, 20, 20, PI+HALF_PI, TWO_PI);
    arc(10, 30, 20, 20, HALF_PI, PI);
    arc (20+xpos, 30, 20, 20, 0,HALF_PI);
    //senkrechte Linien
    line(0, 10, 0, 30);
    line(30+xpos, 10, 30+xpos, 30);
    //waagrechte Linien
    line(10, 0, 20+xpos, 0);
    line(10, 40, 20+xpos, 40);
}


function P(xpos, r){
    rotate(r);
    //arc
    arc(20+xpos, 10 , 20, 20, PI+HALF_PI, HALF_PI);
    //senkrechte Linien
    line (0,0, 0,40);
    //waagerechte Linien
    line(0, 0, xpos+20, 0);
    line(0, 20, xpos+20, 20);
}


function Q(xpos, r){
    rotate(r);
    //arc (xpos, ypos, breite, höhe, anfangswinkel, endwinkel, open)
    arc(10, 10, 20, 20, PI, PI+HALF_PI);
    arc(20+xpos, 10, 20, 20, PI+HALF_PI, TWO_PI);
    arc(10, 30, 20, 20, HALF_PI, PI);
    arc (20+xpos, 30, 20, 20, 0,HALF_PI);
    //senkrechte Linien
    line(0, 10, 0, 30);
    line(30+xpos, 10, 30+xpos, 30);
    //waagrechte Linien
    line(10, 0, 20+xpos, 0);
    line(10, 40, 20+xpos, 40);
    //schräge Linie
    line (20+xpos, 30, 30+xpos, 40);
}


function R(xpos, r){
    rotate(r);
    //arc
    arc(20+xpos, 10 , 20, 20, PI+HALF_PI, HALF_PI);
    //senkrechte Linien
    line (0,0, 0,40);
    //waagerechte Linien
    line(0, 0, xpos+20, 0);
    line(0, 20, xpos+20, 20);
    //schräge Linie
    line(20+xpos, 20, 30+xpos, 40);
}


function S(xpos, r){
    rotate(r);
    //arc
    arc(10, 10, 20, 20, HALF_PI, PI+HALF_PI);
    arc(20+xpos, 30, 20, 20, PI+HALF_PI, HALF_PI);
    arc(20+xpos, 10, 20, 20, PI+HALF_PI, TWO_PI);
    arc(10, 30, 20, 20, HALF_PI, PI);
    //waagerechte Linien
    line(10, 0, 20+xpos, 0);
    line(10, 20, 20+xpos, 20);
    line(10, 40, 20+xpos, 40);
}


function T(xpos) {
    line(0,0, 30+xpos, 0);
    line(15+xpos/2, 0, 15+xpos/2, 40);
}


function U(xpos, r){
    rotate(r);
    //arc
    arc(10, 30, 20, 20, HALF_PI, PI);
    arc(20+xpos, 30, 20, 20, 0, HALF_PI);
    //senkrechte Linien
    line (0,0, 0,30);
    line (30+xpos, 0, 30+xpos, 30);
    //waagerechte Linien
    line (10, 40, 20+xpos, 40);
}


function V(xpos, r){
    rotate(r);
    //schräge Linien
    line(0,0,15,40);
    line(15+xpos, 40, 30+xpos, 0);
}


function W(xpos, r){
    rotate(r);
    //senkrechte Linien
    line(0,0,2,40);
    line(30+xpos,0,28+xpos,40);
    //schräge Linien
    line(2, 40, 15, 20);
    line(28+xpos, 40, 15+xpos, 20);
}


function X(xpos, r){
    rotate(r);
    //schräge Linien
    line (15+xpos, 20, 30+xpos, 0);
    line (15+xpos, 20, 30+xpos, 40);
    line (15, 20, 0, 0);
    line (15, 20, 0, 40);
}


function Y(xpos, r){
    rotate(r);
    //senkrecht
    line(15+xpos/2, 20, 15+xpos/2, 40);
    //schräg
    line(0,0, 15, 20);
    line(15+xpos,20, 30+xpos, 0);
}


function Z(xpos, r){
    rotate(r);
    //waagerechte
    line(0,0,30+xpos,0);
    line(0+xpos,40,30+xpos,40);
    //schräg
    line(0+xpos, 40, 30+xpos, 0);
}


// save canvas as png
function keyReleased() {
    if (key == 's' || key == 'S') {
        saveCanvas(draw, 'screenshot '+ document.title, 'png');
    }
}