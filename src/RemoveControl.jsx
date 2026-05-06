export default function RemoveControl({callBackRemove, index}) {

    function handleRemove(){
        callBackRemove(index);
    }

    return (
        <div>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
}