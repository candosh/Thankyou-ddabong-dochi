// src/db/visitorCounter.ts
import { db } from "../../firebaseConfig.ts";
import { doc, updateDoc, getDoc, onSnapshot } from "firebase/firestore";

// Visitor count document reference
const visitorDocRef = doc(db, "VisitorCount", "visitor");

// Increment the visitor count
export const incrementVisitorCount = async (): Promise<void> => {
  try {
    const docSnap = await getDoc(visitorDocRef);
    if (docSnap.exists()) {
      const newCount = (docSnap.data().count || 0) + 1;
      await updateDoc(visitorDocRef, { count: newCount });
    } else {
      // If the document does not exist, it's a first visit, create the document with count 1
      await updateDoc(visitorDocRef, { count: 1 });
    }
  } catch (error) {
    console.error("Error incrementing visitor count:", error);
  }
};

// Subscribe to the visitor count document
export const onVisitorCountUpdate = (
  callback: (count: number) => void
): (() => void) => {
  const unsubscribe = onSnapshot(
    visitorDocRef,
    (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        callback(data.count);
      }
    },
    (error) => {
      console.error("Error subscribing to visitor count changes:", error);
    }
  );

  // Return the unsubscribe function to be called when the subscription is no longer needed
  return unsubscribe;
};
