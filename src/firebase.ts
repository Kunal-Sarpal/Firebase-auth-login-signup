import { initializeApp } from "firebase/app";

// initializeApp
interface config{
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    databaseURL: string;
}
const firebaseConfig:config = {
 // .....credentials
};


export const app = initializeApp(firebaseConfig)
