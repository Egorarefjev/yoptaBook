export default function Input({type, onChangeAction}) {

    let inputType = type ?? 'text;'

    return (
        <div>
            <input type={inputType} onChange={onChangeAction}/>
        </div>
    )
}