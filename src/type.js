'use strict';

new TypeIt(".home__title--strong",{
  loop:true,
  speed:30,
})  //world-class Coder| 
.move(-17)  //|world-class Coder
.type("Amazing ") //Amazing |world-class Coder
.move(null,{to:'END'})  //Amazing world-class Coder|
.delete()  //|
.type("creative front-end developer") //creative front-end developer|
.move(-20)  //|creative front-end developer
.delete()  //|
.type("passionate") //passionate|
.move(null,{to:'END'}) //passionate front-end developer| 
.delete()  //|
.go();