import React from "react";
import { useEffect } from "react";

export default ({ onClose, children }) => {

    // Close on escape key is inside here.
    useEffect(() => {
        const listener = (e) => {
            console.log(e);
            if (e.code === "Escape") {
                onClose();
            }
        };
        document.addEventListener("keyup", listener);
        return () => {
            document.removeEventListener("keyup", listener);
        };
    }, []);


    return (
        <div id="modal-container" onClick={() => onClose()}>
            <div  onClick={(e) => {
                e.stopPropagation();
            }}>
                {children}
            </div>
        </div>
    );

};