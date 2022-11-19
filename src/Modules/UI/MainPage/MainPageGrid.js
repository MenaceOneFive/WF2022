import {FixedSizeGrid} from "react-window";
import {useRoomCollectionLength} from "../../hooks";
import {RoomHolder} from "./RoomHolder";
import css from './grid.css'
import { useWindowWidth, } from '@react-hook/window-size'
import {useEffect} from "react";

/**
 * 메인페이지에 다양한 방을 무한(유한)스크롤 방식으로
 * 표시하는 컴포넌트
 * @returns {JSX.Element}
 * @constructor
 */
export const MainPageGrid = () => {
    const [count, loading] = useRoomCollectionLength()
    const windowWidth =  useWindowWidth()
    //브라우저의 상황에 맞게 동적으로 계산하도록 수정해야함
    const column = 4
    const grid = {column, row: (count / column), itemWidth:300, itemHeight:400}
    const GridItem = ({columnIndex, rowIndex, style}) => {
        const idx = columnIndex + grid.column * rowIndex
        if (count < idx)
            return (<></>)
        return (
            <RoomHolder  idx={idx} style={style}/>
        )
    }
    const GridLayout = () => {
        return (<FixedSizeGrid className="grid-container" columnCount={grid.column} columnWidth={grid.itemWidth}
                               rowCount={grid.row} rowHeight={grid.itemHeight}
                               width={windowWidth} height={window.innerHeight}>
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