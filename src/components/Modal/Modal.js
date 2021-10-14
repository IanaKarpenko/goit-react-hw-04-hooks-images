import styles from './Modal.module.scss';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

export const Modal = ({ image, click }) => {

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    const handleKeyDown = (evt) => {
        if (evt.code === 'Escape') {
            click();
        }
    };

    return (
        <div className={styles.Overlay} onClick={click}>
            <div className={styles.Modal}>
                <img src={image} alt="" className={styles.image} />
            </div>
        </div>
    )
}

Modal.propTypes = {
    image: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired
}


