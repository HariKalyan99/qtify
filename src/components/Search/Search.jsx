import React from 'react'
import styles from './Search.module.css'
import {ReactComponent as SearchIcon} from '../../assets/Search icon.svg'

const Search = () => {
  return (
    <form className={styles.wrapper}>
        <div>
            <input type="text" />
        </div>
        <div>
            <button className={styles.searchButton} type='submit'>
                <SearchIcon />
            </button>
        </div>
    </form>
  )
}

export default Search