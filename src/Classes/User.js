export class User {
    constructor() {
        this.uid = ""
        this.nickname = ""
    }
}

export const UserConverter = {
    toFirestore: (user) => {
        return {
            uid: user.uid,
            nickname: user.nickname
        }

    }
    , fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options)
        const usr = new User();
        usr.uid = data.uid
        usr.nickname = data.nickname
    }
}