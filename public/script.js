
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import {set, ref, push, onValue, getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyADA_eXml_S6wYedac2koc3f4zyG31_V74",
    authDomain: "form-realtime-database.firebaseapp.com",
    databaseURL: "https://form-realtime-database-default-rtdb.firebaseio.com",
    projectId: "form-realtime-database",
    storageBucket: "form-realtime-database.appspot.com",
    messagingSenderId: "504329894503",
    appId: "1:504329894503:web:1bbecdead3c746096a72c2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const database = getDatabase()

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
const selectCity = document.querySelector('.details select');
console.log(selectCity);
// console.log(selectCity.value);
const fullname = document.querySelector('.details input');
console.log(fullname)
// const email = document.querySelector('.details input[type="text"]:nth-of type(2)');
const email = document.querySelector('.details input[type="email"]');
console.log(email)

const cnic = document.querySelector('input[placeholder="CNIC"]');
console.log(cnic);
 const dob = document.querySelector('input[type="date"]');
 console.log(dob);
 const course = document.getElementById('selectCourse');
 console.log(course)
 const fatherName = document.querySelector('input[placeholder = "Father Name"]');
 console.log(fatherName);
 const phoneNumber = document.querySelector('input[type ="number"]');
 console.log(phoneNumber);
 const fatherCnic = document.querySelector('input[placeholder="Father CNIC (Optional)"]');
 console.log(fatherCnic);
 const gender = document.getElementById('gender');
 console.log(gender);
 const address = document.getElementById('address');
 console.log(address);
 const lastQuali = document.getElementById('lastQuali');
 console.log(lastQuali);
 const laptop = document.getElementById('laptop');
 console.log(laptop);
 const photo = document.getElementById('photo');
//  let text= document.createTextNode('* Upload');
//  photo.appendChild(text);

 console.log(photo);
 window.abc = function(){
 const obj = {
    city:selectCity.value,
    FullName:fullname.value,
    email:email.value,
    CNIC:cnic.value,
    dob:dob.value,
    courseEvent:course.value,
    FatherName:fatherName.value,
    phoneNumber:phoneNumber.value,
    fatherCNIC:fatherCnic.value,
    Gender:gender.value,
    Address:address.value,
    Qualification:lastQuali.value,
    Laptop:laptop.value,

 };

  obj.id = push(ref(database,"Task/")).key; // push-databse 
    var reference = ref(database, `Task/${obj.id}`);
     set(reference,obj);

     
};


function getData() {
    var reference = ref(database, "Task/");
    onValue(reference, function (data) {
      console.log(data.val());
    });
  }
  getData();