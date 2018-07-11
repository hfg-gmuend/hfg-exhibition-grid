function initGrid(){

  //var videoToStyle = document.getElementById("video-player-1");
  //videoToStyle.setAttribute()

//  setupPlayers();
  console.log("initrun");

  addContentByFolders();
}

var creator;

function addContentByFolders(){
  for (var folder = 0; folder < contentFolders.length; folder++) {

    var li = document.createElement("LI");
    li.setAttribute("class", "gridder-list")
    li.setAttribute("data-griddercontent", "#gridder-content-" + folder)
    li.setAttribute("id", "#gridder-content-" + folder + "-li")

    document.getElementById('gridder').appendChild(li);

    var img = document.createElement("IMG");
    img.src = "content/" + contentFolders[folder] + "/thumbnail.png"
    img.class = "img-fluid"
    document.getElementById("#gridder-content-" + folder + "-li").appendChild(img);


    // Create DIV
    var gridderContent = document.createElement("DIV");
    gridderContent.setAttribute("id", "gridder-content-" + folder + "-div");
    gridderContent.setAttribute("class", "gridder-content");
    document.getElementById('wrapper').appendChild(gridderContent);

    // Create ROW
    var gridderContentRow = document.createElement("DIV");
    gridderContentRow.setAttribute("id", "gridder-content-" + folder + "-row");
    document.getElementById("gridder-content-" + folder + "-div").appendChild(gridderContentRow);

    // Create Fullscreen
    var gridderContentRowFullscreen = document.createElement("DIV")
    gridderContentRowFullscreen.setAttribute("id", "gridder-content-" + folder + "-row-fullscreen")
    gridderContentRowFullscreen.setAttribute("class", "col videofullscreen")
    document.getElementById("gridder-content-" + folder + "-row").appendChild(gridderContentRowFullscreen);

    var gridderContentRowFullscreenIframe = document.createElement("IFRAME")
    gridderContentRowFullscreenIframe.setAttribute("id", "iframe-"+folder)
    gridderContentRowFullscreenIframe.setAttribute("frameborder", 0)
    gridderContentRowFullscreenIframe.setAttribute("allowfullscreen", true)
    document.getElementById("gridder-content-" + folder + "-row-fullscreen").appendChild(gridderContentRowFullscreenIframe)


    var gridderContentRowTitleContainer = document.createElement("DIV");
    gridderContentRowTitleContainer.setAttribute("id", "gridder-content-" + folder + "-row-titleContainer-" + folder)
    gridderContentRowTitleContainer.setAttribute("class", "col-sm-6");
    document.getElementById("gridder-content-" + folder + "-row").appendChild(gridderContentRowTitleContainer);

    //contentFolders[folder]
    var gridderContentRowTitleContainerTitle = document.createElement("H2");
    gridderContentRowTitleContainerTitle.setAttribute("id", "gridder-content-" + folder + "-row-titleContainer-" + folder + "-title")
    document.getElementById("gridder-content-" + folder + "-row-titleContainer-" + folder).appendChild(gridderContentRowTitleContainerTitle)

  //  console.log(readTextFile("content/"+folder+"/creator.txt"));

    readTextFile("content/"+folder+"/creator.txt")
    console.log(creator);

    var gridderContentRowTitleContainerTitleTextNode = document.createTextNode(creator);
    console.log(gridderContentRowTitleContainerTitleTextNode);
    document.getElementById("id", "gridder-content-" + folder + "-row-titleContainer-" + folder + "-title").appendChild(gridderContentRowTitleContainerTitleTextNode)



      /*<li class="gridder-list" data-griddercontent="#gridder-content-1">
        <img src="content/1/thumbnail.png" class="img-fluid">
      </li>*/


      /*
      <div id="gridder-content-1" class="gridder-content">
          <div class="row">
              <div class="col videofullscreen">
                  <iframe id="iframe-1" frameborder="0" allowfullscreen></iframe>
              </div>
              <div class="col-sm-6">
                  <h2 "title-1">Title</h2>
                  <p id="students-1">Student 1,
                    Student 2,
                    Student 3
                    Student 4</p>
              </div>
              <div class="col-sm-6">
                  <h2><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6I0ZGRkZGRjt9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTIsMEM1LjQsMCwwLDUuNCwwLDEyczUuNCwxMiwxMiwxMnMxMi01LjQsMTItMTJTMTguNiwwLDEyLDB6IE0xMiw1LjhjMC43LDAsMS4zLDAuNiwxLjMsMS4yUzEyLjcsOC4yLDEyLDguMlMxMC44LDcuNywxMC44LDdTMTEuMyw1LjgsMTIsNS44eiBNMTQsMThoLTR2LTFjMC41LTAuMiwxLTAuMiwxLTAuN3YtNC41YzAtMC41LTAuNS0wLjYtMS0wLjh2LTFoM3Y2LjNjMCwwLjUsMC41LDAuNiwxLDAuN1YxOHoiLz48L3N2Zz4="></h2>
                  <p id="description-1">Description</p>
              </div>
          </div>
      </div>*/
  }
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

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                //alert(allText);
                console.log("allText is " + allText);
                creator = allText;
            }
        }
    }
    rawFile.send(null);
}

initGrid();
