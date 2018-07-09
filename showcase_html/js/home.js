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
      elementToSetTo.src ='content/1/index.html';
      break;
    default:
    console.log("default");
  }
}
