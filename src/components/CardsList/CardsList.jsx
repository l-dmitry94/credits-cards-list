import Card from 'components/Card/Card';
import css from './CardsList.module.css';
import { useState } from 'react';
import BackSideCard from 'components/BackSideCard';

const CardsList = ({ cards }) => {
    const [selectedCardId, setSelectedCardId] = useState(null);

    const handleClick = id => {
        setSelectedCardId(prevId => (prevId === id ? null : id));
    };

    return (
        <ul className={css.list}>
            {cards.map(({ id, name, number, month, year, cvv }) => (
                <li key={id} onClick={() => handleClick(id)}>
                    {selectedCardId !== id ? (
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
