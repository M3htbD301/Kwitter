
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {

      apiKey: "AIzaSyCt-3_BDDm8z6CdRauRNbXU6uXttnjw5EQ",

      authDomain: "kwitter-v2-a59cc.firebaseapp.com",

      databaseURL: "https://kwitter-v2-a59cc-default-rtdb.firebaseio.com",

      projectId: "kwitter-v2-a59cc",

      storageBucket: "kwitter-v2-a59cc.appspot.com",

      messagingSenderId: "1036773029705",

      appId: "1:1036773029705:web:e690aeb150a6a68a5e0c98"

};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
user_name=localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom() {
room_name=document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name", room_name);

window.location="kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
      console.log("Room Name - "+ Room_names);
      row="<div class='room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerhtml+=row;

                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}



function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html"
}

function send() {
      msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value="";
}

