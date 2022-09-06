import React from "react";
import InfoButton from "./InfoButton";

const Header = () => {
    return (
        <div className={"row"}>
            <InfoButton></InfoButton>
            <p className={"page-header"}>Drag&Drop in Space </p>
        </div>
    );
};

export default Header;