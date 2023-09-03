import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './PurchaseModal.module.css';
import { resetCart } from '../../redux/slices/itemsSlice';

function PurchaseModal({ setIsFormVisible, setIsCompleteVisible }) {
    const items = useSelector((state) => state.items);
    const activeLanguege = useSelector((state) => state.language.language);
    const dispatch = useDispatch();

    const [nameValue, setNameValue] = useState('');
    const [phoneValue, setPhoneValue] = useState('');
    const [emailValue, setEmailValue] = useState('');

    const purchaseNames = [
        {
            IT: 'Ti chiameremo il prima possibile',
            ENG: 'We will call you as soon as possible',
        },
        {
            IT: 'Nome*',
            ENG: 'Name*',
        },
        {
            IT: 'Telefono*',
            ENG: 'Phone*',
        },
        {
            IT: 'Email*',
            ENG: 'Email*',
        },
        {
            IT: 'Invia',
            ENG: 'Send',
        },
        {
            IT: 'Annulla',
            ENG: 'Cancel',
        },
    ];

    async function formSubmit(e) {
        e.preventDefault();
        setIsFormVisible(false);
        setIsCompleteVisible(true);

        const userData = {
            name: nameValue,
            phone: phoneValue,
            emailValue: emailValue,
        };
        dispatch(resetCart());

        return await fetch('send_mail.php', {
            method: 'POST',
            body: userData,
        });
    }

    return (
        <div className={styles.form__background}>
            <div className={styles.form}>
                <p className={styles.form__title}>
                    {purchaseNames[0][activeLanguege]}
                </p>
                <form
                    className={styles.form__body}
                    onSubmit={(e) => formSubmit(e)}
                >
                    <div className={styles.form__inputs}>
                        <input
                            type="text"
                            className={styles.form__input}
                            placeholder={purchaseNames[1][activeLanguege]}
                            required
                            value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)}
                        />
                        <input
                            type="text"
                            className={styles.form__input}
                            placeholder={purchaseNames[2][activeLanguege]}
                            required
                            value={phoneValue}
                            onChange={(e) => setPhoneValue(e.target.value)}
                        />
                        <input
                            type="text"
                            className={styles.form__input}
                            placeholder={purchaseNames[3][activeLanguege]}
                            required
                            value={emailValue}
                            onChange={(e) => setEmailValue(e.target.value)}
                        />
                    </div>
                    <div className={styles.form__buttons}>
                        <button
                            className={styles.form__button_send}
                            type="submit"
                        >
                            {purchaseNames[4][activeLanguege]}
                        </button>
                        <button
                            className={styles.form__button_cancel}
                            onClick={() => {
                                document.body.classList.remove('hidden');
                                setIsFormVisible(false);
                            }}
                        >
                            {purchaseNames[5][activeLanguege]}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PurchaseModal;
