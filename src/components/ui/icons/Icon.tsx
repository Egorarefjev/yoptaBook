import React from 'react';
import styles from './Icon.module.scss';
import type { IconProps } from '../../../types/ui';

export default function Icon({ name, size = 24, className }: IconProps) {
    return (
        <span
            className={`material-icons ${styles.icon} ${className || ''}`}
            style={{ fontSize: `${size}px` }}
        >
      {name}
    </span>
    );
}

