import React, {useState} from "react";

const BoxForm = (props) => {
    const {colorArr,setColorArr} = props;
    const [color,setColor] = useState("");

    const addBox = (c)=> {
        c.preventDefault()
        setColorArr([...colorArr, color]);
    }

    const selectColor = (c) => {
        setColor(c.target.value)
    }



    return (
            <form onSubmit={addBox}>
                <label className="me-2" htmlFor="selectedColor">Color: </label>
                <input className="ms-1 me-2 mt-2" type="color" name="color" id="selectedColor" value={color} onChange={selectColor}/>
                <input className="ms-1" type="submit" value="Add Color"/>
            </form>
    )
}

export default BoxForm