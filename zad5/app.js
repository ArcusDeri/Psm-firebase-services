const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
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
