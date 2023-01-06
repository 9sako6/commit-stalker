import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { connectAuthEmulator, getAuth } from "firebase/auth";

export const createFirebaseApp = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyC0QF8EHPDLTmDDyhx9qTJ3ScYLbrx1YGM",
    authDomain: "commit-stalker-project.firebaseapp.com",
    projectId: "commit-stalker-project",
    storageBucket: "commit-stalker-project.appspot.com",
    messagingSenderId: "263716854607",
    appId: "1:263716854607:web:610c8747936c3b9cd4033a",
    measurementId: "G-75FF0H6G90"
  };

  if (process.env.NEXT_PUBLIC_FIREBASE_EMULATOR === 'enabled') {
    initializeApp(firebaseConfig)
    connectAuthEmulator(getAuth(), 'http://localhost:9099')
    console.log("\x1b[35mFirebase Emulator is running\x1b[39m")
  } else {
    const app = initializeApp(firebaseConfig);
    if (typeof window !== 'undefined') { getAnalytics(app); }
  }
}
