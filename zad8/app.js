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
const ui = document.getElementById("uiTable");
firestore.collection("cars").get().then(snapshot => {
    const cars = snapshot.docs.map(doc => doc.data());
    console.log(cars);
    cars.forEach(car => {
         ui.innerHTML += `<tr><td>${car.Make}</td><td>${car.Model}</td><td>${car.Year}</td><td>${car.Color}</td><td>${car.Stolen}</td></tr>`;
    });
})
