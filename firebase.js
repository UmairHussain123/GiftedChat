import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAOh02jduQwr76r-YAonoMxH21yn_5uRvY",
  authDomain: "gifted-chat-df308.firebaseapp.com",
  projectId: "gifted-chat-df308",
  storageBucket: "gifted-chat-df308.appspot.com",
  messagingSenderId: "411711858864",
  appId: "1:411711858864:web:a4a388454a54fa82093375",
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
