// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { collection, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9-OtKyMTI4r20Br3SSYGer69-oR_tje0",
  authDomain: "ondasonar-ecommerce.firebaseapp.com",
  projectId: "ondasonar-ecommerce",
  storageBucket: "ondasonar-ecommerce.firebasestorage.app",
  messagingSenderId: "409535281749",
  appId: "1:409535281749:web:7a188b2505434bf985b2dc",
  measurementId: "G-EPG5Q8FV22"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const db = getFirestore(app);

// ---------------------------------------------------------------
// Llenar base de datos
// const productsData = require('/data/products.json')
// async function importProducts() {
//     try {
//       const productsCollection = collection(db, 'products');
      
//       for (const product of productsData) {
//         await addDoc(productsCollection, {
//           ...product
//         });
//         console.log(`Producto ${product.name} añadido`);
//       }
      
//       console.log('¡Importación completada!');
//     } catch (error) {
//       console.error('Error al importar:', error);
//     } finally {
//       process.exit();
//     }
//   }
  
//   importProducts();

// export async function getProducts() {
//     const querySnapshot = await getDocs(collection(dataBase,'products'));
//     querySnapshot.forEach(doc => console.log(`${doc.id} => ${doc.data().name}`));
// }
// // quitar el console.log y poner un array con push por cada doc, para tener la lista de los productos

// export async function addNewItem() {
//     const productsCollectionRef = collection(dataBase, 'products');
//     const newItem = {name: 'RODE MIC'};

//     try {
//         const docRef = await addDoc(productsCollectionRef, newItem);
        
//     } catch (error) {
//         console.error('Error al agregar el documento: ', error); 
//     }
    
// }

// export async function updateItem(id) {
//     const itemDocRef = doc(dataBase, 'products', id);

//     try {
//         await updateDoc(itemDocRef, {stock: 'Cambio de número'});
//     } catch (error) {
//         console.error('Error al actualizar el documento: ', error); 
//     }
    
// }

// // writeBach para hacer cambios múltiples en la base de datos

// export async function getSingleItem(id) {
//     const documentRef = doc(dataBase, 'products', id);

//     try {
//         const snapshot = await getDoc(documentRef);
//         if(snapshot.exists()) {
//             return snapshot.data();
//         } else {
//             console.log('El documento no existe.')
//         }
//     } catch (error) {
//         console.error('Error al obtener el documento: ', error);    
//     }

// }