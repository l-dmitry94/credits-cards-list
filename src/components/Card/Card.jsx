import { FcSimCardChip } from 'react-icons/fc';
import { SiVisa } from 'react-icons/si';
import css from './Card.module.css';
import { IconContext } from 'react-icons';

const Card = ({ number, name, month, year }) => {
    return (
        <div className={css.wrapper}>
            <div className={css.icons}>
                <IconContext.Provider value={{ size: '32px' }}>
                    <FcSimCardChip />
                </IconContext.Provider>
                <IconContext.Provider value={{ size: '32px' }}>
                    <SiVisa />
                </IconContext.Provider>
            </div>
            <h1 className={css.number}>{number}</h1>
            <div className={css.info}>
                <div>
                    <p className={css.title}>Card Holder</p>
                    <span className={css.data}>{name}</span>
                </div>
                <div>
                    <p className={css.title}>Expires</p>
                    <span className={css.data}>{`${month.label ? month.label : "MM"}/${year.label ? year.label : "YY"}`}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
