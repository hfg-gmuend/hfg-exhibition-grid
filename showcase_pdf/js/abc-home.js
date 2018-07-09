function init(){

  //var videoToStyle = document.getElementById("video-player-1");
  //videoToStyle.setAttribute()

//  setupPlayers();
}

function setupElement(object){
  console.log("in");
  console.log(object);
  let objectName = "iframe-" + object;
  let elementToSetTo = document.getElementById(objectName);

  switch (object) {
    case "1":
      elementToSetTo.src ='content/parametric-abc/scoreboard-explotion/sketch/index.html';
      break;
    case "2":
    elementToSetTo.src ='content/parametric-abc/rate-of-motion/index.html';
      break;
    case "3":
      elementToSetTo.src ='content/parametric-abc/explode/empty-example/index.html';
      break;
    case "4":
      elementToSetTo.src ='content/parametric-abc/fisheye/index.html';
      break;
    case "5":
      elementToSetTo.src ='content/parametric-abc/boomerang-white/index.html';
      break;
    case "6":
      elementToSetTo.src ='content/parametric-abc/audio-explosion/index.html';
      break;
    case "7":
      elementToSetTo.src ='content/parametric-abc/outspoken/outspoken (final)/empty-example/index.html';
      break;
    case "8":
      elementToSetTo.src ='content/parametric-abc/boomerang-white/index.html';
      break;
    default:
    console.log("default");
  }
}
