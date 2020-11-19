import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../_assets/seed/seed';
// database seed scripting

const config = {};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
