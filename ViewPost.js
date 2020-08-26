var canvas;
var i = 0;
function setup (){
canvas = createCanvas(displayWidth,displayHeight);
    
var storageRef = firebase.storage().ref();
//imageRef = storageRef.child('pupies');
storageRef.child('/').listAll().then(function(result){
  result.items.forEach(function(imageRef){
     //console.log(imageRef.toString());
     i+=350;
     displayImage(i,imageRef); 
 });
});

}
function draw(){
}
function mouseWheel(event) {
  //console.log(event.delta);
  var scrollPos = event.delta;
  if(scrollPos > 0){
     resizeCanvas(windowWidth - 20, windowHeight + scrollPos);
  }
 
}


function displayImage(row,image){
    image.getDownloadURL().then(function(url){
      console.log(url.toString());
      //var modURL = "https://cors-anywhere.herokuapp.com" + url;
      var modURL = "https://cors-anywhere.herokuapp.com/" + url; 
      tab = createImg(modURL,"test");
      tab.position(200,row);
      tab.style("width","400px");
      tab.style("height","400px");
  
    });
  }