import {useEffect, useState} from 'react';
import {Header, Loader, SalonItem} from '../components';
import styles from '../styles/Home.module.scss';

export interface SalonListData {
    id: string,
    title: string,
    avgRating: number,
    totalRatings: number,
    address: string,
    price: number,
    currency: string,
    durationInMinutes: number,
    timeApt: string
}


export default function Home() {
    const [salonList, setSalonList] = useState<SalonListData[]>([]);
    const [filteredSalonList, setFilteredSalonList] = useState<SalonListData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [fromValue, setFromValue] = useState(0);
    const [untilValue, setUntilValue] = useState(1000);

    useEffect(() => {
        setIsLoading(true);

        fetch('https://salon-one.vercel.app/api/salons')
            .then(result => result.json())
            .then(salons => {
                setHasError(false);
                setIsLoading(false);
                setSalonList(salons.data);
            })
            .catch(e => setHasError(true))
    }, [])

    const onFromInputHandler = (e) => {
        let value = 0;
        if (e.target.value) {
            value = parseInt(e.target.value);
        }
        setFromValue(value);
    };

    const onToInputHandler = (e) => {
        let value = 0;
        if (e.target.value) {
            value = parseInt(e.target.value);
        }
        setUntilValue(value);
    };

    const onBlurInputHandler = () => {
        const filteredData = salonList.filter((salonItem) => salonItem.price >= fromValue && salonItem.price <= untilValue)
        setFilteredSalonList(filteredData);
    }

    return (
        <>
            <Header/>
            <div className={styles.priceFilterContainer}>
                <div>Pris {fromValue} Kr - {untilValue} Kr</div>
                <div onClick={() => setIsFilterOpen(!isFilterOpen)}>
                    <img src={isFilterOpen ? '/arrow-down.svg' : '/arrow-right.svg'}/>
                </div>
            </div>
            {isFilterOpen && (
                <div className={styles.pricesRangeContainer}>
                    från: <input
                    type="text" pattern="[0-9]*"
                    value={fromValue} onInput={onFromInputHandler}
                    onBlur={onBlurInputHandler}
                />
                    till: <input
                    type="text" pattern="[0-9]*" value={untilValue}
                    onInput={onToInputHandler}
                    onBlur={onBlurInputHandler}
                />
                </div>
            )}
            {isLoading && !hasError &&
            <div className={styles.loaderContainer}>
                <Loader/>
            </div>}

            {hasError && <div>Oops there was an error try refreshing the page</div>}
            {salonList.length && !filteredSalonList.length && salonList.map((salonItemData) =>
                <SalonItem {...salonItemData} key={Math.random()}/>)}
            {filteredSalonList.length > 0 && filteredSalonList
                .map((salonItemData) => <SalonItem {...salonItemData} key={Math.random()}/>)}
        </>
    )
}
