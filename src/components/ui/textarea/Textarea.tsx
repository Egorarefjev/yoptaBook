import styles from './textarea.module.scss';
import React from 'react';

type TextareaProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    className?: string;
};

export default function Textarea({
                                     value,
                                     onChange,
                                     placeholder = '',
                                     className = '',
                                 }: TextareaProps) {
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
}
