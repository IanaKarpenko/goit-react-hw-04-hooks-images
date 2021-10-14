import styles from './Button.module.scss';
import PropTypes from 'prop-types';

export const Button = ({ currentPage, onSubmit }) => {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
    });
    return (
        <div className={styles.buttonContainer}>
            <button type='button' className={styles.Button} onClick={onSubmit}>Load more</button>
        </div>
    );
}

Button.propTypes = {
    currentPage: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

