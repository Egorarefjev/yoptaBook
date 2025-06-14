import styles from './input.module.scss';

export default function Input({type = 'text', placeholder = '', value = '', className= '', onChange}) {

    return (
        <div className={className}>
            <input
                type={type}
                onChange={onChange}
                placeholder={placeholder}
                className={styles.input}
                value={value}/>
        </div>
    )
}