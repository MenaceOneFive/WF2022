export class Review{
    constructor() {
        this.UID = ""       //FirebaseUID
        this.stars = 5      //유저 평가한 별점
        this.review= ""     //리뷰
    }
}

/**
 * 파이어베이스에서 리뷰를 가져오거나 보낼 때 변환을 위한 객체
 * @type {{toFirestore: (function(*): {uid: *, review: *, stars: *}), fromFirestore: ReviewConverter.fromFirestore}}
 */
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
