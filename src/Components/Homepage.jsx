import React, { useState } from 'react'
import Item from './Item'
import DropWrapper from './DropWrapper'
import Col from './Col'
import { data, statuses } from '../data/data'



import Header from './Header'
import InfoButton from './InfoButton'



const Homepage = () => {
    const [items, setItems] = useState(data);
    const [prevItems, setPrevItems] = useState(data);


    const onDrop = (item, monitor, status) => {
        const mapping = statuses.find(si => si.status === status);
        console.log(item)

        setItems(prevState => {
            const newItems = prevState
                .filter(i => i.id !== item.id)
                .concat({ ...item, status: status, icon: mapping.icon });
            return [...newItems];
        })
            ;
    }

    const moveItem = (dragIndex, hoverIndex) => {
        console.log("dragIndex", dragIndex, "        hoverIndex", hoverIndex, "from Homepage")
        if (dragIndex === hoverIndex) {
            console.log("dragIndex === hoverIndex", dragIndex, hoverIndex)
            return;
        }
        const dragItem = items[dragIndex];



        setItems(prevState => {

            const newItems = prevState.filter((i, idx) => idx !== dragIndex);
            newItems.splice(hoverIndex, 0, dragItem);
            return [...newItems];

        });
    };



    return (
        <div className="homepage">
            <Header />

            <InfoButton />

            <div className="row" >


                {
                    statuses.map(s => {
                        return (


                            <div className="col-wrapper" key={s.status}>
                                <h2 className="col-header">
                                    <DropWrapper onDrop={onDrop} status={s.status}>
                                        <Col>
                                            {items.filter((item, index) => (item.status === s.status)).map((item, index) => (
                                                <Item key={item.id} index={index} item={item} moveItem={moveItem} status={s} />))}

                                        </Col>

                                    </DropWrapper>
                                </h2>
                            </div>


                        )
                    })
                }






            </div>
            <InfoButton />
        </div>
    )

};

export default Homepage;




// statuses.map(s => {
    //     return (
    //         <div key={status} className={"col-wrapper"}>
    //             <h2 className={"col-header"}>{s.status.toUpperCase()}</h2>
    //             <DropWrapper onDrop={onDrop} status={s.status}>

    //                 <Col>
    //                     {items
    //                         .filter(i => i.status === s.status)
    //                         .map((i, idx) => <Item key={i.id} item={i} index={idx} moveItem={moveItem} status={s} />)
    //                     }
    //                     <Item></Item>
    //                 </Col>
    //             </DropWrapper>
    //         </div>
    //     );
    // })