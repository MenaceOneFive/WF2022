export class Review{
    constructor() {
        this.UID = ""       //FirebaseUID
        this.stars = 5      //유저 평가한 별점
        this.review= ""     //리뷰
    }
}
export const ReviewConverter = {
    toFirestore: (review) => {
        return {
            uid: review.uid,
            stars: review.stars,
            review: review.review
        }
    }, fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options)
        let review = new Review();
        review.UID = data.UID
        review.stars = data.stars
        review.review = data.review;
    }
}

