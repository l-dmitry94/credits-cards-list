import Card from 'components/Card/Card';
import css from './CardsList.module.css';
import { useState } from 'react';
import BackSideCard from 'components/BackSideCard';

const CardsList = ({ cards }) => {
    const [showCvv, setShowCvv] = useState(false);

    const handleClick = () => {
        setShowCvv(!showCvv);
    };

    return (
        <ul className={css.list}>
            {cards.map(({ name, number, month, year, cvv }) => (
                <li key={number} onClick={handleClick}>
                    {!showCvv ? (
                        <Card
                            name={name}
                            number={number}
                            month={month}
                            year={year}
                        />
                    ) : (
                        <BackSideCard cvv={cvv} />
                    )}
                </li>
            ))}
        </ul>
    );
};

export default CardsList;
