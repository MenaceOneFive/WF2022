import {UploadReview} from "../../Firebase/UsefulButtons";
import {ReviewSection} from "../../Review/UploadReview";

export const MainPageItem = ({room, userState}) => {
    const renderFacilities = (facility) => {
        if (facility == null)
            return (<></>)
        return facility.map((object, idx) =>
            (
                    <ul key={idx} >
                        <li><h4>{object.head}</h4>
                            <ul>
                                {object.items.map((item, i) => {
                                    return <li key={i}><h5>{item}</h5></li>
                                })}
                            </ul>
                        </li>
                    </ul>
            )
        )
    }
    const renderImage = (images) => {
        if (images == null)
            return (<></>)
        return (
            images.map(
                (item, idx) => {
                    return <img src={item} key={idx} width={200} height={100}/>
                }
            ))
    }
    if (room == null)
        return (<></>)
    return (
        <>
            <div><h1>{room.id}</h1></div>
            <div>
            </div>
            <div className={"images"}>{
                renderImage(room.images)
            }</div>
            <div><h2>{room.name}</h2></div>
            <div>
                <ul><h3>설명 : {room.description}</h3></ul>
            </div>
            <div className={"facility"}>
                <h2>시설</h2>
                {renderFacilities(room.facility)
                }</div>
            <ReviewSection room={room} userState={userState}/>
        </>
    )
}

export const ItemGroup = ({objs, idx, userState}) => {
    if (objs.length == 0)
        return (<></>)
    return (<>
        {
            <MainPageItem room={objs[idx]} userState={userState} />
        }
    </>)
}
