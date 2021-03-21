import Link from 'next/link'

import {SalonListData} from '../../pages';
import Rating from "../rating/Rating";
import styles from './SalonItem.module.scss';

export default function SalonItem(props: SalonListData) {
    const link = `/salons/${props.id}`;

    return (
        <>
            <Link href={link}>
                <div className={styles.salonItemContainer}>
                    <div className={styles.cardData}>
                        <div className={styles.fontBold}>{props.timeApt}</div>
                    </div>
                    <div className={styles.cardData}>
                        <div className={styles.fontBold}>{props.title}</div>
                        <Rating rating={props.avgRating} total={props.totalRatings}/>
                        <div className={styles.marginTop}>{props.address}</div>
                    </div>
                    <div className={styles.cardData}>
                        <div className={styles.fontBold}>{props.price}{props.currency}</div>
                        <div className={styles.marginTop}>{props.durationInMinutes} min</div>
                    </div>
                    <div className={styles.cardData}>
                        <img src='/arrow-right.svg'/>
                    </div>
                </div>
            </Link>

        </>
    )
}