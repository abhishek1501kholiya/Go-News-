const auth = firebase.auth();
var message;
var gameState = "form";
  function createAccount (){
  
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    if((email !== null && password !== null) && (email !== "" && password !== "")){
    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    promise.catch(e => alert(e.message));
      alert('signed up');
      window.location.href = "index2.html";
     
    }
    else{
       alert('Please fill out all fields');
    }
}
function Login(){

 
  var name = document.getElementById('name');

  var email = document.getElementById('email');
  var password = document.getElementById('password');

  const promise = auth.signInWithEmailAndPassword(email.value,password.value);
 // name = name.value;
  promise.catch(e => alert(e.message));
  window.location.href = "index2.html";
 
 }
function Logout (){
 // next.hide();
  auth.signOut();
  alert('signout');
}
auth.onAuthStateChanged(function(user){
  if(user){
    var email = user.email;
   alert(" Activeuser" + email);

  }else{
   alert('No Active User')
  }
})
function working(){
  if(email!=null){
      console.log("working");
  }
}
