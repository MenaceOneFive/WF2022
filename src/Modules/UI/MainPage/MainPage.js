import {FBInit} from "../../Firebase/FBInit";
import {
    collection, getDocs, getFirestore, query, where, orderBy, limit, startAfter, doc, getDoc, startAt
} from "firebase/firestore";
import {ConvertJsonToRoom} from "../../../Classes/Room";
import {useEffect, useState} from "react";
import {ShowList} from "./MainPageItem";

export const MainPage = () => {
    const [rooms, AddRooms] = useState([])
    const app = FBInit().app;
    const db = getFirestore(app);
    //파이어스토어에서 문서 컬렉션을 갖고 오는 방법
    useEffect(() => {
        GetRooms(0, 6).then((list) => {
            AddRooms([...rooms, ...list])
        })
    }, [])

    const GetRooms = (index, count) =>
        new Promise(async (resolve, reject) => {
            const roomRef = collection(db, "rooms");
            const snapshot = await getDoc(doc(roomRef, `item[${index}]`));
            const rooms = (await getDocs(query(roomRef, orderBy("name"), startAt(snapshot), limit(count))))
                .docs.map(
                    (item, idx) => ConvertJsonToRoom(item.data())
                );
            resolve(rooms)
        })

    GetRooms(10, 3).then()
    return (<>
        <ShowList objs={rooms}/>
    </>)
}
