import { useSelector } from 'react-redux';

import styles from './OrderCompleted.module.css';
import logo from './img/bigLogo.svg';

function OrderCompleted({ setIsCompleteVisible }) {
    const activeLanguege = useSelector((state) => state.language.language);

    const completedNames = [
        {
            IT: 'Ordine completato!',
            ENG: 'Order completed!',
        },
        {
            IT: 'Ti chiameremo il prima possibile',
            ENG: 'We will call you as soon as possible',
        },
        {
            IT: 'Vicino',
            ENG: 'Close',
        },
    ];
    function closeModal() {
        document.body.classList.remove('hidden');
        setIsCompleteVisible(false);
    }
    return (
        <div className={styles.complete__background}>
            <div className={styles.complete}>
                <div className={styles.complete__body}>
                    <div className={styles.complete__logo}>
                        <img src={logo} alt="logo" />
                    </div>
                    <p className={styles.complete__text}>
                        {completedNames[0][activeLanguege]}
                        <br />
                        {completedNames[1][activeLanguege]}
                    </p>
                </div>
                <button
                    className={styles.complete__button}
                    onClick={closeModal}
                >
                    {completedNames[2][activeLanguege]}
                </button>
            </div>
        </div>
    );
}

export default OrderCompleted;
