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
const ui = document.getElementById("uiTable");
firestore.collection("cars").get().then(snapshot => {
    const cars = snapshot.docs.map(doc => doc.data());
    console.log(cars);
    cars.forEach(car => {
         ui.innerHTML += `<tr><td>${car.Make}</td><td>${car.Model}</td><td>${car.Year}</td><td>${car.Color}</td><td>${car.Stolen}</td></tr>`;
    });
})
