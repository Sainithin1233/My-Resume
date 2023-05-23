import React from 'react';
import styles from './Header.module.css';
import resumesvg from '../../assests/resume.svg';

export default function Header() {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <p className={styles.heading}>
                My Resume
            </p>
            <p className={styles.caption}>
                Make your own Resume <span>Simply </span>! 
            </p>
            <p className={styles.caption}>
               Resume is the key piece of your job application. 
            </p>
        </div>
        <div className={styles.imgbox}>
            <img src={resumesvg} alt="Resume" />
        </div>
        

    </div>
  )
}
