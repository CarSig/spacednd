import React, { useState } from 'react'
import InfoButtonModal from './InfoButtonModal';




const InfoButton = () => {
    const [show, setShow] = useState(false);
    const onOpen = () => setShow(true);
    const onClose = () => setShow(false);
    return (
        <div>
            <button className="info-btn" onClick={onOpen}  >❔</button>

            <InfoButtonModal onClose={onClose} show={show} />


        </div>
    )
}



export default InfoButton