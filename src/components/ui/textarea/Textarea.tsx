import styles from './textarea.module.scss';
import React from 'react';

type TextareaProps = {
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    className?: string;
    readOnly?: boolean
};

export default function Textarea({
                                     value,
                                     onChange,
                                     placeholder = '',
                                     className = '',
                                     readOnly = false
                                 }: TextareaProps) {
    return (
        <div className={className}>
          <textarea
              className={styles.textarea}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              readOnly={readOnly}
          />
        </div>
    );
}
