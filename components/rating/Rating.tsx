import styles from './Rating.module.scss';

interface RatingProps {
    rating: number,
    total: number,
    isLightTheme?: boolean
}

export default function Rating(props: RatingProps) {

    return (
        <>
            <div className={styles.ratingContainer}>
                <div className={styles.stars}>
                    {[...Array(5)]
                        .map((element, index) => index < props.rating
                            ? <img src='/star.svg' key={index}/>
                            : <img src='/star-empty.svg' key={index}/>)
                    }
                </div>
                <div className={!props.isLightTheme ? styles.totalRating : styles.totalRatingLight}>({props.total})
                </div>
            </div>
        </>
    )
}