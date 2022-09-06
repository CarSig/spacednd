import React from 'react'
import Modal from 'react-modal'


const InfoButtonModal = ({ show, onClose }) => {
    return (
        <Modal isOpen={show} onRequestClose={onClose} className={"modal"} overlayClassName={"overlay"}>
            <div className="close-btn-ctn">
                <h1 style={{ flex: "1 90%" }}> Actions on Items</h1>
                <button className="close-btn" onClick={onClose}>X</button>
            </div>
            <div className="a">
                <h2>Drag</h2>
                <p>Items can be arranged in own container or transferred to another container.</p>
                <p> It is not allowed to skip phases, for example item from "open" phase needs to be dragged to "in progress" container before it can be move to "closed" containers </p>
                <h2>Click</h2>
                <p>Clicking item opens window with extra info</p>

            </div>
        </Modal>
    )
}

export default InfoButtonModal






