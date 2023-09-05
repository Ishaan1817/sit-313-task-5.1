import React from "react";

const style = {
    width:"70%"
}

function MainTitle(props){
    return(
        <div className="Main Heading">
            <p><b>{props.heading}</b></p>
            <input
            type="text"
            placeholder={props.placeholder}
            style={style}
            >
            </input>
        </div>
    )
}

export default MainTitle;