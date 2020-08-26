
const auth = firebase.auth();

var gameState = "form";
var valuer;
//for Input Buttons


//for Redirecting to the next Page
var message;
 var error = 0;

 firebase.auth().onAuthStateChanged(function(user){
                if(user){
                  var userId = firebase.auth().currentUser.uid;
                  console.log(user);
                  
                  firebase.database().ref('Users/' + userId).once('value').then(function(snapshot){
                    if(snapshot.val()){
                        console.log(snapshot.val());
                        if(user.email === "wantedchorpolice@gmail.com"){
                          window.location.href = "index4.html";
                        }
                        else
                        {              
                          window.location.href = "index.html";
                        }
                        //window.location.href = "index.html";
                    }
                    else{
                        window.location.href = "accountSettings.html";
                    }   
                  });
                }
            });
