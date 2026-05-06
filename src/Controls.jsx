export default function Controls({callBackAdd, callBackRemove}) {

    function handleAdd(){
        callBackAdd();
    }

    function handleRemove(){
        callBackRemove();
    }

    return (
        <div>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
}