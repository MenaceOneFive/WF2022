/**
 *  Firebase Firestore 와의 상호작용예시를 다룬 스크립트
 *
 */


import {collection, getDocs, addDoc, setDoc, doc} from "firebase/firestore";
import {FBInit} from "./FBInit";
import {getFirestore} from 'firebase/firestore'
import {useState} from "react";
import {ConvertJsonToRoom, Room, RoomConverter} from "../../Classes/Room";

export const GetSnapshot = () => {
    const [message, setMessage] = useState("");
    const querySnapshot = () => {
        const app = FBInit().app;
        const db = getFirestore(app);
        getDocs(collection(db, "rooms"))
            .then(
                (resolved, rejected) => {
                    resolved.forEach(res => {
                        console.log(`${message}, {${res.id}, `)
                        const room = ConvertJsonToRoom(res.data())
                        console.log(JSON.stringify(room))
                    })
                });
    };
    return (<>
        <div>{message}</div>
        <button onClick={querySnapshot}>데이터 받아오기</button>
    </>)
};
export const AddData = () => {
    const uploadData = () => {
        const app = FBInit().app;
        const db = getFirestore(app);
        addDoc(collection(db, "users"), {
            first: "Ada",
            last: "Lovelace",
            born: 1815
        }).then((result) => {
            console.log(`wrote record of ${result.id}`)
        })
    }
    return (<>
        <button onClick={uploadData}>데이터 업로드</button>
    </>)
}
export const AddData2 = () => {
    const uploadData = () => {
        const app = FBInit().app;
        const db = getFirestore(app);
        const ref = collection(db, "users")
        setDoc(doc(ref, "Hotel2"), {
            city: "Ada",
            name: "Lovelace",
            since: 1815,
            id: 1022,
            features: ["simple", "clean"]
        }).then((result) => {

            console.log(`wrote record of ${result.id}`)
        })
    }
    return (<>
        <button onClick={uploadData}>데이터 업로드</button>
    </>)

}
export const GetRooms = () => {
    const getRooms = () => {
        const app = FBInit().app;
        const db = getFirestore(app);
        // const docRef = doc(db, "cities", "SF");
        const docRef = collection(db, "rooms");
        const docSnap = getDocs(docRef).then((result) => {
            result.forEach((item) =>
                console.log(`${item.id} => ${item.name} `)
            )
        });

    }
    return (<>
        <button onClick={getRooms}>방 찾기</button>
    </>)
}
export const AddRoom = () => {
    const uploadData = () => {
        const app = FBInit().app;
        const db = getFirestore(app);
        const room = new Room();
        room.id = 1023123123;
        room.name = "asdfasdfasd"
        room.facility = {
            asdf: ["1234", "abce", "efgh"],
            name: 'simple room',
            city: 'busan'
        }
        room.array = []
        room.detail = "regular room"
        setDoc(doc(db, "rooms", room.id.toString()).withConverter(RoomConverter),
            room
        ).then((result) => {

            console.log(`wrote record of ${room.id}`)
        })
    }
    return (<>
        <button onClick={uploadData}>방 추가</button>
    </>)

}
/**
 * Room객체를 파이어스토어에 전송하는 함수
 * @param room
 * @constructor
 */
export const UploadRoom = (room) => {
    const app = FBInit().app;
    const db = getFirestore(app);
    setDoc(doc(db, "rooms", room.id.toString()).withConverter(RoomConverter),
        room
    ).then((result) => {
        console.log(`wrote record of ${room.id}`)
    })
}
/**
 * Json파일을 읽어서 파이어스토어에 전송하는 버튼
 * @returns {JSX.Element}
 * @constructor
 */
export const ImportJsonButton = () => {
    const processAsFile = (event) => {
        var reader = new FileReader();
        reader.readAsText(event.target.files[0], "UTF-8")
        reader.onload = function () {
            const input = JSON.parse(reader.result)
            input.map((item, idx) => {
                let room = ConvertJsonToRoom(item)
                UploadRoom(room)
            })
        }
    }
    return (<>
        <input type={"file"} accept={"application/activity+json"} onChange={processAsFile}></input>
    </>)
}
