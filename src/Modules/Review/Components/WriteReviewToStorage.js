import {FBInit} from "../../FirebaseWrapper/FBInit";
import {doc, getFirestore, setDoc} from "firebase/firestore";
import {ReviewConverter} from "../../../Classes/Review";

/**
 * WriteReview 컴포넌트에서 입력한 리뷰를 파이어베이스에 업로드하는 함수
 * @param idx
 * @param review
 * @constructor
 */
export const WriteReviewToStorage = (idx, review) => {
    const app = FBInit().app;
    const db = getFirestore(app);
    setDoc(doc(db, `rooms/item[${idx}]/reviews`, review.uid).withConverter(ReviewConverter),
        review
    ).then((result) => {
        console.log(`wrote record of ${idx}`)
    })
}