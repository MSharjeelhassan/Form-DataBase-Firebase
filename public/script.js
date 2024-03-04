
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
const showData = document.getElementById('seeForm');
console.log(showData);
const enterForm = document.getElementById('enterForm');

const enterNameFromData = document.getElementById('enterNameFromData').innerText;
const showCity = document.getElementById('showCity').value;
// console.log(showCity);
const showFullName = document.getElementById('showFullName');
const showEmail = document.getElementById('showEmail').value;
const showCnic = document.getElementById('showCnic').value;
const showDOB = document.getElementById('showDOB').value;
const showCourse = document.getElementById('showCourse').value;
const showFatherName = document.getElementById('showFatherName').value;
const showNumber = document.getElementById('showNumber').value;
const showFatherCnic = document.getElementById('showFatherCnic').value;
const showGender = document.getElementById('showGender').value;
const ShowAddress = document.getElementById('ShowAddress').value;
const ShowLastQuali = document.getElementById('ShowLastQuali').value;
const ShowLaptop  = document.getElementById('ShowLaptop').value;
const ShowPhoto  = document.getElementById('ShowPhoto').value;
const inputSearch = document.getElementById('inputSearch').value;



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

 if(obj.CNIC.length !=13){
alert("Please enter complete CNIC number")
 }
else{
  obj.id = push(ref(database,"Task/")).key; // push-databse 
    var reference = ref(database, `Task/${obj.id}`);
     set(reference,obj);
}
    //  return (obj.id);// main yeh chah raha tha ka id return karaon r isey bahr kahen variab;e main store kar lon for further use
    alert(`This user I.D ${obj.id}`)
};

// let idD = (obj.id);
// console.log(idD);


window.goHome = function (){
 alert("i am working");
 showData.style.display ="none";
 enterForm.style.display = "block";

};

//********************GET DATA FROM FIREBASE RTDB START */ -Nru2J115xeX_VNVKeUP
window.getData = function()  {
    var reference = ref(database, "Task/");
    onValue(reference, function (snapshot) {
      // enterNameFromData = `Hello Respected `
      console.log(snapshot.val());
      let foundData = snapshot.val()
      console.log(foundData.FullName)
      console.log(Object.values(foundData))
      var a = Object.values(foundData)
      for (let index = 0; index < a.length; index++) {
        console.log(a[index]);
        if (a.id == inputSearch) {
          
          showFullName.value = foundData.FullName;
         
          showEmail =foundData.email;
          showCnic = foundData.CNIC;
          showDOB =foundData.dob;
          showCourse =foundData.courseEvent;
          showFatherName = foundData.FatherName;
          showNumber = foundData.phoneNumber;
          showFatherCnic = foundData.fatherCNIC;
          showGender =foundData.Gender;
          ShowAddress =foundData.Address;
          ShowLastQuali = foundData.Qualification;
          ShowLaptop = foundData.Laptop;
        }
        else{console.log("Failed")}
      }
      // return foundData;

    });
  }

  const foundData = console.log(getData());
// alert('found data')
  console.log(foundData);

  //**************ENDS**** */

window.goToDatabase = function(){
alert('hello')
  showData.style.display ="block";
 enterForm.style.display = "none";
}
// +++++++++++Search function*****************
  const search = function(){


  }
