import React from 'react';
import css from "./BackSideCard.module.css"

const BackSideCard = ({ cvv }) => {
    return (
        <div className={css.wrapper}>
            <p className={css.cvv}>{cvv}</p>
        </div>
    );
};

export default BackSideCard;
