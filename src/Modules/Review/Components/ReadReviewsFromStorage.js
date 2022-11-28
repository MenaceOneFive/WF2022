import {useEffect, useState} from "react";
import {FBInit} from "../../FirebaseWrapper/FBInit";
import {collection, getFirestore, onSnapshot} from "firebase/firestore";
import {Review} from "../../../Classes/Review";
import {DrawReview} from "./DrawReview";
import {NoReviews} from "./NoReviews";

/**
 * 개별 방에 대한 리뷰를 파이어베이스에서 가져오는 컴포넌트
 * @param idx
 * @returns {JSX.Element}
 * @constructor
 */
export const ReadReviewsFromStorage = ({idx}) => {
    const [reviews, setReviews] = useState([]);
    const app = FBInit().app;
    const db = getFirestore(app);
    const docRef = collection(db, `rooms/item[${idx}]/reviews`);
    useEffect(() => {
        const listener = onSnapshot(docRef, (snapshot) => {
            var array = []
            snapshot.forEach((item) => {
                const tmp = item.data();
                const review = new Review()
                review.uid = tmp.uid
                review.review = tmp.review
                review.stars = tmp.stars
                array = [...array, review]
            })
            setReviews(array)
            return () => {
                //Cleanup 스냅샷 동기화 종료
                listener()
            }
        })
    }, [idx])
    console.log(reviews)
    if (reviews.length === 0)
        return (<><NoReviews/></>)
    return (<>
        {reviews.map((item, idx) => {
            return (
                <div key={idx}>
                    <DrawReview review={item}/>
                </div>)
        })
        }
    </>)
}
