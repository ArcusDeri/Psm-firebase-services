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
const authorInupt = document.getElementById("author");
const titleInupt = document.getElementById("title");
const genreInupt = document.getElementById("genre");
const isssueInupt = document.getElementById("issue");
const isbnInupt = document.getElementById("isbn");
const sendButton = document.getElementById("send");

sendButton.addEventListener("click", () => {
    const newDoc = firestore.collection("books").doc("newDoc");
    const newData = {
        Title: titleInupt.value,
        Author: authorInupt.value,
        Genre: genreInupt.value,
        Issue: isssueInupt.value,
        ISBN: isbnInupt.value
    }
    newDoc.set(newData).then(() => {
        const docReference = firestore.collection("books").doc("newDoc");
        docReference.get().then(doc => {
            if (doc && doc.exists){
                const myData = doc.data();
                console.log(myData);
                const ui = document.getElementById("uiTable");
                ui.innerHTML += `<tr><td>${myData.Title}</td><td>${myData.Author}</td><td>${myData.Title}</td><td>${myData.Genre}</td><td>${myData.Issue}</td><td>${myData.ISBN}</td></tr>`
            }
        })
    });
})
