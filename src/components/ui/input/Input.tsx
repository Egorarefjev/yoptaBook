export default function Input({type, placeholder, value, onChange}) {

    let inputType = type ?? 'text;'

    return (
        <div>
            <input
                type={inputType}
                onChange={onChange}
                placeholder={placeholder}
                value={value}/>
        </div>
    )
}