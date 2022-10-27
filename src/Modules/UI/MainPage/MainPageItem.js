export const MainPageItem = ({room}) => {
    return (
        <>
            <div><h1>{room.id}</h1></div>
            <div><h2>{room.name}</h2></div>
            <div><h3>{room.description}</h3></div>
            <div className={"facility"}>{
                room.facility.map((object, idx) => {
                    return (<>
                            <ul key={idx}><h4>{object.head}</h4></ul>
                            {object.items.map((item, i) => {
                                <li key={i}><h5>{item}</h5></li>
                            })}
                        </>
                    )
                })}</div>
        </>
    )
}

export const ItemGroup = ({objs, idx}) => {
    if(objs.length == 0)
        return (<></>)
    return (<>
        {
            // objs.map(
            //     (item, idx) => <MainPageItem room={item} key={idx}/>
            // )
            <MainPageItem room={objs[idx]}/>
        }
    </>)
}
