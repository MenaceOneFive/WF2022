import {collection, doc, getDocs, getFirestore, setDoc} from "firebase/firestore";
import {FBInit} from "../Firebase/FBInit";
import {Review, ReviewConverter} from "../../Classes/Review";
import {getAuth} from "firebase/auth";

export const ReviewSection = ({room}) => {
    return (
        <div>
            <DrawReviews room={room}/>
            <WriteReview/>
        </div>
    )
}

const FSWriteReview = (room, review) => {
    const app = FBInit().app;
    const db = getFirestore(app);
    setDoc(doc(db, `rooms/${room.id}/reviews`, review.uid).withConverter(ReviewConverter),
        review
    ).then((result) => {
        console.log(`wrote record of ${room.id}`)
    })
}
const FSReadReviews = (room) => {
    const app = FBInit().app;
    const db = getFirestore(app);
    // const docRef = doc(db, "cities", "SF");
    const docRef = collection(db, `rooms/${room.id}/reviews`);
    const docSnap = getDocs(docRef)
        .then((result) => {
            result.forEach((item) =>
                console.log(`${item}`)
            )
        }).catch((reason) => {
            console.log(reason)
        });
}

export const UploadReview = ({room}) => {
    const review = new Review()
    //TODO: Get entities from form
    review.uid = "123123123122"
    review.stars = 4
    review.review = "방이 개 좁아요 가지마요"

    return <button onClick={() => FSWriteReview(room, review)}>{"리뷰 작성"}</button>
}

const UserNotSignedIn = () => {
    //여기에 로그인 요청
    return (<><p>아직 로그인 하지 않으셨네요</p></>)
}

const WriteReview = () => {
    const auth = getAuth();
    if (auth.currentUser!=null) {
        return (
            <>
                <p>리뷰작성하기</p>
            </>
        )
    }
    return <UserNotSignedIn/>
}

const DrawReviews = ({room}) => {
    FSReadReviews(room)
    return (<></>)
}
