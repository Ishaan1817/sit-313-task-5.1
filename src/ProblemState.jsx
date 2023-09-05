import React from "react";

const style = {
    width:"75%",
}

function ProblemStatement (props){
    return(
        <div>
            <p><b>{props.heading}</b></p>
            <textarea
            type="text"
            placeholder={props.placeholder}
            rows={props.rows}
            style={style}
            >
            </textarea>
        </div>
    )
}

export default ProblemStatement;