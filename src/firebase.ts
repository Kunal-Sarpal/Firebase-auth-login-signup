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
    apiKey: "AIzaSyCSorESWxd1M9bZOPf3JunxwmihhOuJKyI",
    authDomain: "kunal-app-14939.firebaseapp.com",
    projectId: "kunal-app-14939",
    storageBucket: "kunal-app-14939.appspot.com",
    messagingSenderId: "94453707364",
    appId: "1:94453707364:web:4c0196d030d1403bb2e571",
    databaseURL: "https://kunal-app-14939-default-rtdb.firebaseio.com/"
};


export const app = initializeApp(firebaseConfig)