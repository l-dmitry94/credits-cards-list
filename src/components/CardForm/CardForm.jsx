import { useState } from 'react';
import Select from 'react-select';
import ReactInputMask from 'react-input-mask';
import { Notify } from 'notiflix';
import "notiflix/dist/notiflix-3.2.7.min.css"

import { months, years } from 'data';
import css from './CardForm.module.css';
import Card from 'components/Card/Card';
import BackSideCard from 'components/BackSideCard';

const initialState = {
    number: '',
    name: '',
    month: null,
    year: null,
    cvv: '',
};

const CardForm = ({ onSubmit }) => {
    const [info, setInfo] = useState(initialState);
    const [isCvvFocused, setIsCvvFocused] = useState(false);

    const handleChange = event => {
        const { name, value } = event.target;

        setInfo({
            ...info,
            [name]: value.toUpperCase(),
        });
    };

    const handleChangeMonth = selectedOption => {
        setInfo({
            ...info,
            month: selectedOption,
        });
    };

    const handleChangeYear = selectedOption => {
        setInfo({
            ...info,
            year: selectedOption,
        });
    };

    const handleSubmit = event => {
        event.preventDefault();

        if(info.number.length !== 19) {
            return Notify.warning("Enter 16 numbers!")
        }

        onSubmit(info);

        setInfo(initialState);

        Notify.success("Card successfully added")
    };

    const monthsOptions = months.map(month => ({
        value: month,
        label: month,
    }));

    const yearsOptions = years.map(year => ({
        value: year,
        label: year,
    }));

    const handleFocus = () => {
        setIsCvvFocused(true);
    };

    const handleBlur = () => {
        setIsCvvFocused(false);
    };

    return (
        <div className={css.wrapper}>
            <div className={css.cardWrapper}>
                {!isCvvFocused ? (
                    <Card
                        name={info.name.length ? info.name : 'YOUR NAME'}
                        number={
                            info.number.length
                                ? info.number
                                : '#### #### #### ####'
                        }
                        month={info.month ? info.month : 'MM'}
                        year={info.year ? info.year : 'YY'}
                    />
                ) : (
                    <BackSideCard cvv={info.cvv} />
                )}
            </div>

            <form className={css.form} onSubmit={handleSubmit}>
                <div>
                    <label className={css.label} htmlFor="number">
                        Card Number
                    </label>
                    <ReactInputMask
                        mask="9999 9999 9999 9999"
                        maskChar={null}
                        type="text"
                        name="number"
                        id="number"
                        onChange={handleChange}
                        value={info.number}
                        className={css.input}
                        required
                    />
                </div>
                <div>
                    <label className={css.label} htmlFor="name">
                        Card Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={handleChange}
                        className={css.input}
                        value={info.name}
                        required
                    />
                </div>

                <div className={css.info}>
                    <div>
                        <label className={css.label}>Expiration Date</label>
                        <div className={css.selects}>
                            <Select
                                options={monthsOptions}
                                placeholder="Month"
                                onChange={handleChangeMonth}
                                value={info.month}
                                required
                            />
                            <Select
                                options={yearsOptions}
                                placeholder="Year"
                                onChange={handleChangeYear}
                                value={info.year}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className={css.label} htmlFor="cvv">
                            CVV
                        </label>
                        <input
                            type="tel"
                            name="cvv"
                            id="cvv"
                            maxLength="3"
                            onChange={handleChange}
                            className={css.input}
                            value={info.cvv}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            required
                        />
                    </div>
                </div>

                <button className={css.submit} type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CardForm;
