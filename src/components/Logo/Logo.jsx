import React from 'react'
import LogoImage from '../../assets/Group 3748.png'
import styles from './Logo.module.css'


const Logo = () => {
  return (
    <img src={LogoImage} alt="LogoImage" width={67} className={styles.logo}/>
  )
}

export default Logo;