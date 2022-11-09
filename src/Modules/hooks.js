import {useEffect, useState} from "react";
import {FBInit} from "./Firebase/FBInit";
import {collection, doc, getDoc, getFirestore} from "firebase/firestore";
import {ConvertJsonToRoom} from "../Classes/Room";

/**
 * 파이어스토어에서 숙소 컬렉션의 길이를 가져옴
 * 컬렉션 전체를 가져오면 컬렉션에 있는 모든 문서를 가져와서
 * 읽기에 횟수 증가로 인한 패널티가 있음
 * @returns {[number,boolean]} 룸_컬렉션의 원소 갯수, 로딩 상태(비동기로 가져오기 때문)
 */
export const useRoomCollectionLength = () => {
    const [loading, setLoading] = useState(true)
    const [count, setCount] = useState(0)
    const {app} = FBInit()
    const c = collection(getFirestore(app), "rooms")
    getDoc(doc(c, "collection_info")).then((response) => {
        const data = response.data()
        setCount(data.length)
        setLoading(false)
    }).catch(console.error)
    return [count, loading]
}

/**
 * 파이어스토어에서 개별 방에 대한 정보를 가져옴
 * @param idx 가져오고자 하는 방의 인덱스
 * @returns {[json,boolean]} 방의 정보를 담는 Json, 로딩상태
 */
export const useRoom = (idx) => {
    const {app} = FBInit()
    const c = collection(getFirestore(app), "rooms")
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(
        () => {
            getDoc(doc(c, `item[${idx}]`)).then(result => {
                const data = result.data()
                setData(ConvertJsonToRoom(data))
            }).then(() => {
                setLoading(false)
            })
        }, [idx])
    return [data, loading];
}