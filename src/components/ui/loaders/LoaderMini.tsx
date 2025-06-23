import styles from './loader-mini.module.scss';

export default function LoaderMini({ size = 64 }) {
    return (
        <div className={styles.wrapper} style={{ width: size, height: size }}>
            <svg className={styles.gegga}>
                <defs>
                    <filter id="gegga">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                        <feColorMatrix
                            in="blur"
                            type="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
                            result="inreGegga"
                        />
                        <feComposite in="SourceGraphic" in2="inreGegga" operator="atop" />
                    </filter>
                </defs>
            </svg>

            <svg
                className={styles.snurra}
                width={size}
                height={size}
                viewBox="0 0 200 200"
            >
                <defs>
                    <linearGradient id="gradient">
                        <stop className={styles.stop1} offset="0" />
                        <stop className={styles.stop2} offset="1" />
                    </linearGradient>
                </defs>
                <path
                    className={styles.halvan}
                    d="m 164,100 c 0,-35.3 -28.7,-64 -64,-64 -35.3,0 -64,28.7 -64,64 0,35.3 28.7,64 64,64 35.3,0 64,-26.2 64,-64 0,-37.8 -26.9,-64 -64,-64 -37.1,0 -65.3,26.9 -64,64 1.3,37.1 26.7,65.1 64,64 37.3,-1.1 64,-64 64,-64"
                />
                <circle className={styles.strecken} cx="100" cy="100" r="64" />
            </svg>

            <svg
                className={styles.skugga}
                width={size}
                height={size}
                viewBox="0 0 200 200"
            >
                <path
                    className={styles.halvan}
                    d="m 164,100 c 0,-35.3 -28.7,-64 -64,-64 -35.3,0 -64,28.7 -64,64 0,35.3 28.7,64 64,64 35.3,0 64,-26.2 64,-64 0,-37.8 -26.9,-64 -64,-64 -37.1,0 -65.3,26.9 -64,64 1.3,37.1 26.7,65.1 64,64 37.3,-1.1 64,-64 64,-64"
                />
                <circle className={styles.strecken} cx="100" cy="100" r="64" />
            </svg>
        </div>
    );
}

