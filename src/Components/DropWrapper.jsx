import React from 'react'
import { useDrop } from 'react-dnd'
import { ITEM_TYPE, statuses } from "../data/data"


const DropWrapper = ({ onDrop, children, status }) => {
    const [{ isOver }, drop] = useDrop({
        message: console.log("status", status),
        accept: ITEM_TYPE,
        canDrop: (item, monitor) => {
            const itemIndex = statuses.findIndex(si => si.status === item.status);
            const statusIndex = statuses.findIndex(si => si.status === status);
            return [itemIndex + 1, itemIndex - 1, itemIndex].includes(statusIndex);
        },
        drop: (item, monitor) => {
            onDrop(item, monitor, status);
        },
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    });



    return (
        <div ref={drop} className="drop-wrapper">
            {status}
            {React.cloneElement(children, { isOver })}
        </div>
    )
}

export default DropWrapper