import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./Firebase.config";

//INITIALIZE FIREBASE AUTHENTICATION
const initAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initAuthentication;
