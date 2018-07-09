function init(){

  const { lstatSync, readdirSync } = require('fs')
  const { join } = require('../content')

  const isDirectory = source => lstatSync(source).isDirectory()
  const getDirectories = source =>
    readdirSync(source).map(name => join(source, name)).filter(isDirectory)

  console.log(getDirectories);
}

function setupPlayer(object){
  console.log("in");
  console.log(object);
  let objectName = "vid" + object;
  document.getElementById(objectName).play();
}

function restyleVideo(video){

}

init();
