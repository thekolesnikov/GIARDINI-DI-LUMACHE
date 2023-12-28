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
    const [messageValue, setMessageValue] = useState('');
    const [isEmailInvalid, setIsEmailInvalid] = useState(false);

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
            IT: 'Email',
            ENG: 'Email',
        },

        {
            IT: 'Invia',
            ENG: 'Send',
        },
        {
            IT: 'Annulla',
            ENG: 'Cancel',
        },
        {
            IT: 'Messaggio',
            ENG: 'Message',
        },
    ];

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    async function formSubmit(e) {
        e.preventDefault();

        if (!emailValue || validateEmail(emailValue)) {
            setIsFormVisible(false);
            setIsCompleteVisible(true);
            setIsEmailInvalid(false);

            // const userData = {
            //     name: nameValue,
            //     phone: phoneValue,
            //     emailValue: emailValue,
            //     messageValue: messageValue,
            // };
            const emailBody = `
            <b>Name</b>:${nameValue}
            <br>
            <b>Phone</b>:${phoneValue}
            <br>
            ${emailValue ? `<b>Email</b>:${emailValue}<br>` : ''}
            ${messageValue ? `<b>Email</b>:${messageValue}` : ''}
            <br>
            <br>
            ${items.map((item, index) => {
                return `
                <b>${index + 1}.</b>Item name:${item.nameEng}
                <br>
                Item id:${item.id}
                <br>
                Item count:${item.count}
                <br>
                <br>
                `;
            })}
            `;

            window.Email.send({
                SecureToken: 'caf4a320-db15-4a59-b208-cb93c8ac8f2d',
                To: 'thesharkov@gmail.com',
                From: 'thesharkov@gmail.com',
                Subject: 'New Order',
                Body: emailBody,
            }).then(() => dispatch(resetCart()));
            console.log(items);
        } else {
            setIsEmailInvalid(true);
        }
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
                            className={
                                isEmailInvalid
                                    ? styles.form__input_invalid
                                    : styles.form__input
                            }
                            placeholder={purchaseNames[3][activeLanguege]}
                            value={emailValue}
                            onChange={(e) => {
                                setEmailValue(e.target.value);
                                setIsEmailInvalid(false);
                            }}
                        />
                        {isEmailInvalid && (
                            <p className={styles.form__input_error}>
                                {activeLanguege === 'ENG'
                                    ? 'Invalid email. Please try again!'
                                    : 'E-mail non valido. Per favore riprova!'}
                            </p>
                        )}
                        <textarea
                            type="text"
                            className={styles.form__textarea}
                            placeholder={purchaseNames[6][activeLanguege]}
                            value={messageValue}
                            onChange={(e) => setMessageValue(e.target.value)}
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
