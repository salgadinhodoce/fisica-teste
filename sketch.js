//referenciando modulos da biblioteca matter
const Engine = Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine;
var world;
var bola;
var solo;
var retangulo; 
var quadrado;

function setup(){

createCanvas(400,400);

engine=Engine.create();
world=engine.world;


var propriedadesdabola={


frictionAir:0.05,
density:30



}

var propriedadesdoretangulo={

frictionAir:0.03,
desntity:30


}

var propriedadesdoquadrado={

frictionAir:0.04,
density:30


}

retangulo=Bodies.rectangle(100,300,70,40,propriedadesdoretangulo);
World.add(world,retangulo);

bola=Bodies.circle(300,300,10,propriedadesdabola);
World.add(world,bola);

quadrado=Bodies.rectangle(200,300,20,20,propriedadesdoquadrado);
World.add(world,quadrado)

var propriedadesdosolo={

isStatic:true

}

solo=Bodies.rectangle(0,350,800,10,propriedadesdosolo);
World.add(world,solo);



}

function draw(){

background("black");
Engine.update(engine);


rectMode(CENTER);
ellipseMode(RADIUS);

ellipse(bola.position.x,bola.position.y,10);
rect(solo.position.x,solo.position.y,800,10);
rect(retangulo.position.x,retangulo.position.y,70,40);
rect(quadrado.position.x,quadrado.position.y,20,20);

}


