import React, { useEffect } from 'react';
import firebase from './firebase';
import './App.css';

function App() {
  console.log("$@%@")
  // firebase.firestore()
  // .collection('Training')
  // .get()
  // .then(snapshot => {
  //   const data = snapshot.docs.map((doc) => ({
  //     id: doc.id,
  //     ...doc.data(),
  //   }));
  //   console.log("All data in 'books' collection", data); 
  // });
  useEffect(() => {
    console.log("@#%@#%")
  }, [])
  return (
    <div>
      Exercise
    </div>
  );
}

export default App;
