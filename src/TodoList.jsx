import React, { useState } from 'react';
import "./todolist.css";

const dummyData = [{
    title: "Meeting with client",
    description: "Description",
},
{
    title: "Meeting with client",
    description: "Description",
},
{
    title: "Meeting with client",
    description: "Description",
}]
// backgroundColor

// state change means ==> Reference change
const TodoList = () => {
    const [data, setData] = useState(dummyData);
    const [obj, setObj] = useState({ title: '', desc: '' });

    const clickHandler = (index) => {
        data.splice(index, 1);
        setData(data.slice());
    }

    const addHandler = () => {
        const Data = {
            title: obj.title,
            description: obj.desc
        }
        setData([...data, Data]);
    }
//border-left ==> borderLeft
// class class_name {

// }
// function fnName () {]
// }
    return (
        <div>
            <input placeholder='title' value={obj.title} onChange={(e) => setObj({ ...obj, title: e.target.value })} />
            <input placeholder='description' value={obj.desc} onChange={(e) => setObj({ ...obj, desc: e.target.value })} />
            <button onClick={addHandler}>Add</button>
            {data.map((item, index) => {
                return <div className="internal">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <span style={{ marginLeft: 'auto' }} onClick={() => clickHandler(index)}>X</span>
                </div>
            })}
        </div>
    )
}

export default TodoList;
