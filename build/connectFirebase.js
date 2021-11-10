import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { collection, getDocs, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyB0u8CKp76ocsp0aXiHnX7p7aXmJ-lQFBw",
    authDomain: "aplazos-test.firebaseapp.com",
    projectId: "aplazos-test",
    storageBucket: "aplazos-test.appspot.com",
    messagingSenderId: "925534031607",
    appId: "1:925534031607:web:890a51791d17e0c9198df2"
};

initializeApp(firebaseConfig)

// Init services
const db = getFirestore()

// Collection reference
const colRef = collection(db, 'bdaplazos-test')

// Get colection data
getDocs(colRef)
.then((snapshot) => {
    let movimientos = []
    snapshot.docs.forEach((doc) => {
        movimientos.push({ ...doc.data(), id: doc.id })
    });
    console.log(movimientos)
})
.catch(err => {
    console-log(err.message)
})