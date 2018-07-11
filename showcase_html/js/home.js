function initGrid(){

  //var videoToStyle = document.getElementById("video-player-1");
  //videoToStyle.setAttribute()

//  setupPlayers();
  console.log("initrun");

  addContentByFolders();
}

var text;

function addContentByFolders(){
  for (var folder = 0; folder < contentFolders.length; folder++) {

    var li = document.createElement("LI");
    li.setAttribute("class", "gridder-list")
    li.setAttribute("data-griddercontent", "#gridder-content-" + contentFolders[folder])
    li.setAttribute("id", "#gridder-content-" + contentFolders[folder] )

    document.getElementById('gridder').appendChild(li);

    var img = document.createElement("IMG");
    img.src = "content/" + contentFolders[folder] + "/thumbnail.png"
    img.class = "img-fluid"
    document.getElementById("#gridder-content-" + contentFolders[folder] ).appendChild(img);


    // Create DIV
    var gridderContent = document.createElement("DIV");
    gridderContent.setAttribute("id", "gridder-content-" + contentFolders[folder]);
    gridderContent.setAttribute("class", "gridder-content");
    document.getElementById('wrapper').appendChild(gridderContent);

    // Create ROW
    var gridderContentRow = document.createElement("DIV");
    gridderContentRow.setAttribute("id", "gridder-content-" + contentFolders[folder] + "-row");
    document.getElementById("gridder-content-" + contentFolders[folder]).appendChild(gridderContentRow);

    // Create Fullscreen
    var gridderContentRowFullscreen = document.createElement("DIV")
    gridderContentRowFullscreen.setAttribute("id", "gridder-content-" + contentFolders[folder] + "-row-fullscreen")
    gridderContentRowFullscreen.setAttribute("class", "col videofullscreen")
    document.getElementById("gridder-content-" + contentFolders[folder] + "-row").appendChild(gridderContentRowFullscreen);

    // Create Fullscreen iFrame
    var gridderContentRowFullscreenIframe = document.createElement("IFRAME")
    gridderContentRowFullscreenIframe.setAttribute("id", "iframe-"+folder)
    gridderContentRowFullscreenIframe.setAttribute("frameborder", 0)
    gridderContentRowFullscreenIframe.setAttribute("allowfullscreen", true)
    document.getElementById("gridder-content-" + contentFolders[folder] + "-row-fullscreen").appendChild(gridderContentRowFullscreenIframe)

    // Create Title Container
    var gridderContentRowTitleContainer = document.createElement("DIV");
    gridderContentRowTitleContainer.setAttribute("id", "gridder-content-" + contentFolders[folder] + "-row-titleContainer-" + contentFolders[folder])
    gridderContentRowTitleContainer.setAttribute("class", "col-sm-6");
    document.getElementById("gridder-content-" + contentFolders[folder] + "-row").appendChild(gridderContentRowTitleContainer);

    // Create Title Container Title
    var gridderContentRowTitleContainerTitle = document.createElement("H2");
    gridderContentRowTitleContainerTitle.setAttribute("id", "title-"+contentFolders[folder])
    readTextFile("content/"+contentFolders[folder]+"/title.txt")
    gridderContentRowTitleContainerTitle.innerHTML = text
    document.getElementById("gridder-content-" + contentFolders[folder] + "-row-titleContainer-" + contentFolders[folder]).appendChild(gridderContentRowTitleContainerTitle)

    // Create Title Container Paragraph
    var gridderContentRowTitleContainerParagraph = document.createElement("p");
    readTextFile("content/"+contentFolders[folder]+"/creator.txt")
    gridderContentRowTitleContainerParagraph.innerHTML = text;
    gridderContentRowTitleContainerParagraph.setAttribute("id", "students-" + contentFolders[folder])
    document.getElementById("gridder-content-" + contentFolders[folder] + "-row-titleContainer-" + contentFolders[folder]).appendChild(gridderContentRowTitleContainerParagraph);


    var gridderContentRowDescriptionContainer = document.createElement("DIV");
    gridderContentRowDescriptionContainer.setAttribute("id", "gridder-content-" + contentFolders[folder] + "-row-descriptionContainer-" + contentFolders[folder])
    gridderContentRowDescriptionContainer.setAttribute("class", "col-sm-6");
    document.getElementById("gridder-content-" + contentFolders[folder] + "-row").appendChild(gridderContentRowDescriptionContainer);

    var gridderContentRowDescriptionContainerH2 = document.createElement("H2");
    gridderContentRowDescriptionContainerH2.setAttribute("id", "description-"+contentFolders[folder]+"-h2");
    document.getElementById("gridder-content-" + contentFolders[folder] + "-row-descriptionContainer-" + contentFolders[folder]).appendChild(gridderContentRowDescriptionContainerH2);

    var gridderContentRowDescriptionContainerH2Image = document.createElement("IMG");
    gridderContentRowDescriptionContainerH2Image.setAttribute("src", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6I0ZGRkZGRjt9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTIsMEM1LjQsMCwwLDUuNCwwLDEyczUuNCwxMiwxMiwxMnMxMi01LjQsMTItMTJTMTguNiwwLDEyLDB6IE0xMiw1LjhjMC43LDAsMS4zLDAuNiwxLjMsMS4yUzEyLjcsOC4yLDEyLDguMlMxMC44LDcuNywxMC44LDdTMTEuMyw1LjgsMTIsNS44eiBNMTQsMThoLTR2LTFjMC41LTAuMiwxLTAuMiwxLTAuN3YtNC41YzAtMC41LTAuNS0wLjYtMS0wLjh2LTFoM3Y2LjNjMCwwLjUsMC41LDAuNiwxLDAuN1YxOHoiLz48L3N2Zz4=")
    document.getElementById("description-"+contentFolders[folder]+"-h2").appendChild(gridderContentRowDescriptionContainerH2Image);

    var gridderContentRowDescriptionContainerDescription = document.createElement("P")
    readTextFile("content/"+contentFolders[folder]+"/description.txt")
    gridderContentRowDescriptionContainerDescription.innerHTML = text
    gridderContentRowDescriptionContainerDescription.setAttribute("id", "description-"+contentFolders[folder])
    document.getElementById("gridder-content-" + contentFolders[folder] + "-row-descriptionContainer-" + contentFolders[folder]).appendChild(gridderContentRowDescriptionContainerDescription);



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
                text = allText;
            }
        }
    }
    rawFile.send(null);
}

initGrid();
