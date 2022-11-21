import {collection, doc, getDocs, getFirestore, setDoc} from "firebase/firestore";
import {FBInit} from "../FirebaseWrapper/FBInit";
import {Review, ReviewConverter} from "../../Classes/Review";
import {useEffect, useState} from "react";
import {useFBAuth} from "../FirebaseWrapper/FBAuth";

export const ReviewSection = ({idx}) => {
    return (
        <div>
            <DrawReviews idx={idx}/>
            <WriteReview idx={idx} />
        </div>
    )
}
const DrawReviews = ({idx}) => {
    return ReadReviewsFromStorage(idx)
}

const ReadReviewsFromStorage = (idx) => {
    const [reviews, setReviews] = useState([]);
    const app = FBInit().app;
    const db = getFirestore(app);
    const docRef = collection(db, `rooms/item[${idx}]/reviews`);
    useEffect(() => {
        getDocs(docRef)
            .then((result) => {
                let array = []
                result.forEach((item) => {
                    const tmp = item.data();
                    const review = new Review()
                    review.uid = tmp.uid
                    review.review = tmp.review
                    review.stars = tmp.stars
                    array = [...array, review]
                })
                setReviews(array)
            }).catch((reason) => {
            console.log(reason)
            return (<></>)
        });
    }, [idx])
    console.log(reviews)
    if (reviews.length === 0)
        return (<></>)
    return (<>
        {reviews.map((item, idx) => {
            return (
                <div key={idx}>
                    <hr></hr>
                    <p>사용자 : {item.uid}</p>
                    <p>평점 : {item.stars}</p>
                    <p>리뷰 : {item.review}</p>
                    <hr></hr>
                </div>
            )
        })
        }
    </>)
}

const UserNotSignedIn = () => {
    //여기에 로그인 요청
    return (<><p>아직 로그인 하지 않으셨네요</p></>)
}

const WriteReview = ({idx}) => {
    const [auth,isSignIn] = useFBAuth()
    const [innerText, setInnerText] = useState("")
    const SetText = (e) => setInnerText(e.target.value)
    const user = auth.currentUser

    const uploadReview = () => {
        const review = new Review();
        review.stars = 3
        review.uid = user.uid
        review.review = innerText
        WriteReviewToStorage(idx, review)
    }
    if (user != null) {
        return (
            <>
                <p>리뷰작성하기</p>
                <p>{user.displayName}</p>
                <label><input type={"text"} value={innerText} onChange={SetText}/></label><br/>
                <button onClick={uploadReview}>작성하기
                </button>
            </>
        )
    }
    return <UserNotSignedIn/>
}

const WriteReviewToStorage = (idx, review) => {
    const app = FBInit().app;
    const db = getFirestore(app);
    setDoc(doc(db, `rooms/item[${idx}]/reviews`, review.uid).withConverter(ReviewConverter),
        review
    ).then((result) => {
        console.log(`wrote record of ${idx}`)
    })
}
