import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
  const app = initializeApp(firebaseConfig);
  if (typeof window !== 'undefined') { getAnalytics(app); }
}
