import RemoveControl from './RemoveControl';

export default function ToDos({toDosList, callBack, toggle}) {

    return (
        <div>
            {toDosList.map((item, index) => (
                <div key={index}>
                    <p>{item.text}: {item.done ? "✅" : "❌"}</p>

                    <button onClick={()=>toggle(index)}>Erledigt</button>
                    <RemoveControl callBackRemove={callBack} index={index}/>
                </div>
            ))
            }
        </div>
    );
}