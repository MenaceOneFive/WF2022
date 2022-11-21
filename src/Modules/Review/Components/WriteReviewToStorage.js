import {FBInit} from "../../FirebaseWrapper/FBInit";
import {doc, getFirestore, setDoc} from "firebase/firestore";
import {ReviewConverter} from "../../../Classes/Review";

export const WriteReviewToStorage = (idx, review) => {
    const app = FBInit().app;
    const db = getFirestore(app);
    setDoc(doc(db, `rooms/item[${idx}]/reviews`, review.uid).withConverter(ReviewConverter),
        review
    ).then((result) => {
        console.log(`wrote record of ${idx}`)
    })
}