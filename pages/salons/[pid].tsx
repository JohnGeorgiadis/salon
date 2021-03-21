import {useRouter} from 'next/router'
import {useEffect, useState} from 'react';
import Link from 'next/link'
import {Loader} from '../../components';

import styles from './Salon.module.scss';
import Rating from "../../components/rating/Rating";

interface SalonData {
    id: string,
    imgUrl: string,
    title: string,
    avgRating: number,
    totalRatings: number,
    address: string,
    closingAt: string,
    phone: string,
    website: string,
    bodyContent: string
}

export default function Salon() {
    const router = useRouter()
    const {pid} = router.query;

    const [salonData, setSalonData] = useState<SalonData>();
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        fetch(`http://localhost:3000/api/salons/${pid}`)
            .then(result => result.json())
            .then(salon => {
                setHasError(false);
                setIsLoading(false);
                setSalonData(salon[0])
            })
            .catch(e => setHasError(true))
    }, [])

    return (
        <>
            {isLoading &&
            <div className={styles.loaderContainer}>
                <Loader/>
            </div>}
            {hasError && <div>Oops there was an error try refreshing the page</div>}

            {salonData && (
                <div className={styles.salonContainer}>
                    <div className={styles.imgContainer}>
                        <div className={styles.header}>
                            <Link href="/">
                                <img src='/arrow-left.svg'/>
                            </Link>
                            <img src='/heart.svg'/>
                        </div>
                        <img className={styles.backgroundImg} src={salonData.imgUrl}/>
                        <div className={styles.titleData}>
                            <div className={styles.title}>{salonData.title}</div>
                            <Rating rating={salonData.avgRating} total={salonData.totalRatings} isLightTheme/>
                        </div>
                    </div>
                    <div className={styles.buttonsContainer}>
                        <div>Info</div>
                        <div>Schema</div>
                    </div>
                    <div className={styles.infoContainer}>
                        <div className={styles.infoItem}>
                            <img src='/pin.svg'/>
                            {salonData.address}
                        </div>
                        <div className={styles.infoItem}>
                            <img src='/clock.svg'/>
                            Oppet till {salonData.closingAt} idag
                            <img src='/arrow-down.svg'/>
                        </div>
                        <div className={styles.infoItem}>
                            <img src='/phone.svg'/>
                            {salonData.phone}
                        </div>
                        <div className={styles.infoItem}>
                            <img src='/globe.svg'/>
                            {salonData.website}
                        </div>
                    </div>
                    <div className={styles.bodyContainer}>
                        {salonData.bodyContent}
                    </div>
                </div>
            )}

        </>
    )
}
