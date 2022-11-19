import {FixedSizeGrid} from "react-window";
import {useRoomCollectionLength} from "../../hooks";
import {RoomHolder} from "./RoomHolder";
import {Container} from "@mui/material";

/**
 * 메인페이지에 다양한 방을 무한(유한)스크롤 방식으로
 * 표시하는 컴포넌트
 * @returns {JSX.Element}
 * @constructor
 */
export const MainPageGrid = () => {
    const [count, loading] = useRoomCollectionLength()
    //브라우저의 상황에 맞게 동적으로 계산하도록 수정해야함
    var column = 4
    const grid = {column, row: (count / column)}
    const GridItem = ({columnIndex, rowIndex, style}) => {
        const idx = columnIndex + grid.column * rowIndex
        if (count < idx)
            return (<></>)
        return (
            <RoomHolder idx={idx} style={style}/>
        )
    }
    const GridLayout = () => {
        return (<FixedSizeGrid columnCount={grid.column} columnWidth={300}
                               rowCount={grid.row} rowHeight={400}
                               width={window.innerWidth} height={window.innerHeight}>
            {GridItem}
        </FixedSizeGrid>)
    }
    if (loading) {
        //TODO: 꾸미기
        return (<>{"Loading Please be patient......."}</>)
    } else {
        return (
                <GridLayout/>
        )
    }
}