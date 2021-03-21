import styles from './Header.module.scss';

export default function Header() {
    return (
        <>
            <header className={styles.headerContainer}>
                <div className={styles.backIcon}>
                    <img src='/arrow.svg'/>
                </div>
                <div className={styles.title}>Hąr</div>
                <div className={styles.filterIcon}><img src='/filter.svg'/></div>
            </header>
        </>
    )
}