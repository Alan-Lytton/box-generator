import React, {useState} from "react";

const AddBox = (props) => {
    const {colorArr} = props;



    return (
        <div className="App d-flex flex-wrap justify-content-center mt-4">
            {
                colorArr.map((color,index) => (
                    <div className="me-3" key={ index } style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: color
                        }}>
                    </div>
                ))
            }
        </div>
    )
}

export default AddBox