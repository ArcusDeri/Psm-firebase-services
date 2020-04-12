const config = {
    apiKey: "AIzaSyBOA8VWhygsxwc7jW6B2wVhOstgq_BnrOA",
    authDomain: "",
    databaseURL: "https://myfirstproject-9b0d7.firebaseio.com",
    projectId: "myfirstproject-9b0d7",
    storageBucket: "",
    messagingSenderId: "1011109052912"
};

firebase.initializeApp(config);
const firestore = firebase.firestore();
const docReference = firestore.collection("books").doc("47dg08aupfwzmA20O8IM");
docReference.get().then(doc => {
    if (doc && doc.exists){
        const myData = doc.data();
        console.log(myData);
        const ui = document.getElementById("uiTable");
        ui.innerHTML += `<tr><td>${myData.Title}</td><td>${myData.Author}</td><td>${myData.Title}</td><td>${myData.Genre}</td><td>${myData.Issue}</td><td>${myData.ISBN}</td></tr>`
    }
}).catch(error => console.warn(error));
