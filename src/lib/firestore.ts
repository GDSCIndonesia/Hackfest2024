import {
  collection,
  onSnapshot,
  query,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  orderBy,
  Timestamp,
  runTransaction,
  where,
  addDoc,
} from "firebase/firestore";

import { db } from "./firebase";

export async function getUserByEmail(email: string = '') {
  let q = query(collection(db, "users"));
  q = query(q, where("email", "==", email));
  const results = await getDocs(q);
  return results.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data(),
      // Only plain objects can be passed to Client Components from Server Components
      created_at: doc.data().created_at.toDate(),
    };
  })[0];
}

export async function getTeamByTeamId(teamId: string = '') {
  let q = query(collection(db, "teams"));
  q = query(q, where("name", "==", teamId));
  const results = await getDocs(q);
  return results.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data(),
      // Only plain objects can be passed to Client Components from Server Components
      created_at: doc.data().created_at.toDate(),
    };
  })[0];
}