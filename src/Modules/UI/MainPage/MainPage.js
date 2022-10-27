import {ItemGroup, MainPageItem} from "./MainPageItem";
import {FBInit} from "../../Firebase/FBInit";
import {collection, getDocs, getFirestore} from "firebase/firestore";
import {ConvertJsonToRoom} from "../../../Classes/Room";
import {useEffect, useState} from "react";

export const MainPage = () => {
    const [rooms, AddRooms] = useState([])
    const [idx, setIdx] = useState(0)
    const app = FBInit().app;
    const db = getFirestore(app);
    //파이어스토어에서 문서 컬렉션을 갖고 오는 방법
    useEffect(() => {
        getDocs(collection(db, "rooms"))
            .then(
                (resolved, rejected) => {
                    let list = []
                    resolved.forEach(res => {
                        const room = ConvertJsonToRoom(res.data())
                        list = [...list, room]
                    })
                    AddRooms([...rooms, ...list])
                })
    }, [])
    const next = ()=>setIdx((idx + 1)%rooms.length)
    const prev = ()=>setIdx((idx - 1)%rooms.length)
    return (<>

        <button onClick={prev}>이전</button>
        <button onClick={next}>다음</button>
            <ItemGroup objs={rooms} idx={idx}/>
    </>)
}