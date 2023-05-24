const firebaseConfig = {
  apiKey: "AIzaSyDMXsVZ22PV-dMqtyP_ZZXvtIWv4pOc7Qo",
  authDomain: "feedbackmess-ee357.firebaseapp.com",
  databaseURL: "https://feedbackmess-ee357-default-rtdb.firebaseio.com",
  projectId: "feedbackmess-ee357",
  storageBucket: "feedbackmess-ee357.appspot.com",
  messagingSenderId: "118299571058",
  appId: "1:118299571058:web:c4e4a2aa50630b2bac23eb"
};

  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference our database
  var feedbackmessdb = firebase.database().ref('feedbackmess');

  document.getElementById('feedbackmess').addEventListener('submit', submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal('yname');
    var mail = getElementVal('email');
    var tellus = getElementVal('tells');

    saveMessages(name,mail,tellus);

    //enable the alert
    document.querySelector('.alert').style.display = "block";

    //remove the alert
    setTimeout(() => {
        document.querySelector('.alert').style.display = "none";
    }, 3000);

    //reset the form
    document.getElementById('feedbackmess').reset();
  }


  const saveMessages = (name,mail,tellus) => {
    var newfeedbackmess = feedbackmessdb.push();

    newfeedbackmess.set({
        name : name,
        mail : mail,
        tellus  : tellus,
    });
  }

  const getElementVal = (id) =>{
    return document.getElementById(id).value;

  };