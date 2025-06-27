import React, { useState, useRef, useEffect } from 'react';
import styles from './select.module.scss';
import { SelectOptionType } from '../../../types/ui'


type SelectProps = {
    options: SelectOptionType[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
};

export default function Select({ options, value, onChange, placeholder }: SelectProps) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selected = options.find((opt) => opt.value === value);

    return (
        <div className={styles.select} ref={ref}>
            <button
                type="button"
                className={styles.control}
                onClick={() => setOpen((prev) => !prev)}
            >
                <span>{selected?.label || placeholder || 'Выберите...'}</span>
                <span className={`${styles.arrow} ${open ? styles.open : ''}`}>▾</span>
            </button>

            {open && (
                <ul className={styles.menu}>
                    {options.map((option) => (
                        <ol
                            key={option.value}
                            className={`${styles.item} ${option.value === value ? styles.selected : ''}`}
                            onClick={() => {
                                onChange(option.value);
                                setOpen(false);
                            }}
                        >
                            {option.label}
                        </ol>
                    ))}
                </ul>
            )}
        </div>
    );
}
