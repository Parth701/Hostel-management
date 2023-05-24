const firebaseConfig = {
    apiKey: "AIzaSyBItdIJwMfgPHyZrjGJTRpJYHKfnsJXDRI",
    authDomain: "feedbackhome-4dc1c.firebaseapp.com",
    databaseURL: "https://feedbackhome-4dc1c-default-rtdb.firebaseio.com",
    projectId: "feedbackhome-4dc1c",
    storageBucket: "feedbackhome-4dc1c.appspot.com",
    messagingSenderId: "302576140476",
    appId: "1:302576140476:web:0e2910f14d0ca8372690b9"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference our database
  var feedbackHomedb = firebase.database().ref('feedbackHome');

  document.getElementById('feedbackHome').addEventListener('submit', submitForm);


  function submitForm(e){
    e.preventDefault();

    var firstname = getElementVal('fname');
    var lastname = getElementVal('lname');
    var phonenumber = getElementVal('pnumber');
    var subject = getElementVal('subje');

    saveMessages(firstname,lastname,phonenumber,subject);

    //enable the alert
    document.querySelector('.alert').style.display = "block";

    //remove the alert
    setTimeout(() => {
        document.querySelector('.alert').style.display = "none";
    }, 3000);

    //reset the form
    document.getElementById('feedbackHome').reset();
  }


  const saveMessages = (firstname,lastname,phonenumber,subject) => {
    var newfeedbackHome = feedbackHomedb.push();

    newfeedbackHome.set({
        firstname : firstname,
        lastname : lastname,
        phonenumber  : phonenumber,
        subject : subject
    });
  }

  const getElementVal = (id) =>{
    return document.getElementById(id).value;

  };