import styles from '../textarea/textarea.module.scss';

export default function Textarea({ value = '', onChange = ()=>{console.log('fuck this shit')}, placeholder = '', className = ''}) {
    return (
        <div className={className}>
            <textarea
                className={styles.textarea}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};
