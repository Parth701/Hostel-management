// import swal from 'sweetalert';

const firebaseConfig = {
  apiKey: "AIzaSyBEyTSPFNO8Q_6uN6sVcGs6OgDVJMxWnrE",
  authDomain: "bookroom-a6fd5.firebaseapp.com",
  databaseURL: "https://bookroom-a6fd5-default-rtdb.firebaseio.com",
  projectId: "bookroom-a6fd5",
  storageBucket: "bookroom-a6fd5.appspot.com",
  messagingSenderId: "703136343298",
  appId: "1:703136343298:web:aaac023866f5855eae8e1b"
};
//initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference my database
  var Bookroomdb = firebase.database().ref('Bookroom');
  
  document.getElementById('Bookroom').addEventListener("submit", submitForm);


  function submitForm(e){
    e.preventDefault();

    var firstname = document.getElementById('fname');
    var lastname = document.getElementById('lname');
    var phonenumber = document.getElementById('pnumber');
    var email = document.getElementById('ema');
    var roomnumber = document.getElementById('roomn');
    var studentid = document.getElementById('studid');


    // console.log(fname,lname,pnumber,ema,roomn,studid);
    saveMessages(firstname,lastname,phonenumber,email,roomnumber,studentid);

    //enable the alert
    // document.querySelector('.alert').style.display = "block";

    // //remove the alert
    // setTimeout(() => {
    //     document.querySelector('.alert').style.display = "none";
    // }, 3000);

    // //reset the form
    document.getElementById('Bookroom').reset();
    alert("submitted");
  }


  const saveMessages = (firstname,lastname,phonenumber,email,roomnumber,studentid) => {
    var newBookroom = Bookroomdb.push();

    newBookroom.set({
        firstname : firstname,
        lastname : lastname,
        phonenumber  : phonenumber,
        email : email,
        roomnumber : roomnumber,
        studentid : studid
    });
  }

  // const getElementVal = (id) =>{
  //   return document.getElementById("id").value;

  // };