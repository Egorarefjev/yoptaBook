export default function Input({type, onChange}) {

    let inputType = type ?? 'text;'

    return (
        <div>
            <input type={inputType} onChange={onChange}/>
        </div>
    )
}