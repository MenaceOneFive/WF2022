export const MainPageItem = ({room}) => {
    console.log(room.name);
    const renderFacilities = (facility) => {
        if (facility == null)
            return (<></>)
        return facility.map((object, idx) => {
            return (<>
                    <ul key={idx}>
                        <li><h4>{object.head}</h4>
                            <ul>
                                {object.items.map((item, i) => {
                                    return <li key={i}><h5>{item}</h5></li>
                                })}</ul>
                        </li>
                    </ul>
                </>
            )
        })
    }
    const renderImage = (images) => {
        if (images == null)
            return (<></>)
        return (
            images.map(
                (item, idx) => {
                    console.log(item);
                    return <img src={item} key={idx} width={200} height={100}/>
                }
            ))
    }
    //
    const renderOneImg = (images) => {
        console.log(images[0]);
        if(images == null)
            return (<></>)

        return (
            <img src={images[0]} width={250} height={200}/>
        )

    }
    //

    const onClickRoomItem = (rooms, idx) => {
        return(
            <>
            </>
        )
    }

    //
    if (room == null)
        return (<></>)
    return (
        <>
            <div className='room-container' onClick={onClickRoomItem}>
                <div className='room-info'>
                    {renderOneImg(room.images)}
                    <h4 className='room-name'>{room.name}</h4>

                </div>
            </div>
        </>
    )
    // <div>{renderImage(room.images)}</div>
}
//
export const ShowList = ({objs}) => {
    if (objs.length == 0)
        return (<></>)
    console.log(objs);
    return (<>
        {objs.map(
            (item, i)=>{
                return <MainPageItem room={item} key={i}/>
            }
        )}
    </>)
}
//
export const ItemGroup = ({objs, idx}) => {
    if (objs.length == 0)
        return (<></>)
    return (<>
        {
            <MainPageItem room={objs[idx]}/>
        }
    </>)
}
