import {useState} from 'react';

export default function AddControl({callBack}) {

    const [text, setText] = useState("");

    function handleAdd(){
        callBack(text);
        setText("");
    }

    return (
        <div>
            <input value={text} onChange={e => setText(e.target.value)}/>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}