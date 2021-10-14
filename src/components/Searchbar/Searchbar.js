import PropTypes from 'prop-types';
import styles from './Searchbar.module.scss';
import { useState } from 'react';

export const Searchbar = ({ onSubmitt }) => {

    const [search, setSearch] = useState("");

    const changeFilter = (evt) => {
        setSearch(evt.currentTarget.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSubmitt(search);
    }

    return (
        <header className="Searchbar">
            <form className={styles.SearchForm} onSubmit={handleSubmit}>
                <button type="submit" className={ styles['SearchForm-button'] }>
                    <span className={styles['SearchForm-button-label'] }>Search</span>
                </button>

                <input
                    className={ styles['SearchForm-input'] }
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={search}
                    onChange={changeFilter}
                />
            </form>
        </header>
        )
}

Searchbar.propTypes = {
    onSubmitt: PropTypes.func.isRequired
}
