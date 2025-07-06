import React, { useEffect } from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
}

export default function Modal({ isOpen, onClose, children, title }: ModalProps) {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [isOpen, onClose]);

    return (
        <div className={`${styles.backdrop} ${isOpen ? styles.open : ''}`} onClick={onClose}>
            <div
                className={`${styles.modal} ${isOpen ? styles.open : ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                {title && <div className={styles.title}>{title}</div>}
                <div className={styles.content}>{children}</div>
                <button className={styles.close} onClick={onClose}>×</button>
            </div>
        </div>
    );
}
