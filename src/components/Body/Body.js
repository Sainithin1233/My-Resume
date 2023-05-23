import React, { useEffect, useState } from 'react';
import styles from './Body.module.css';
import UploadResume from '../upload/UploadResume';
import PrepareResume from '../prepare/PrepareResume';

export default function Body() {
    const [uploadstatus, setuploadStatus] = useState(false);
    const [preparestatus, setprepareStatus] = useState(false);


    const displayUpload = ()=>{
        console.log("upload");
        setuploadStatus(true);
        setprepareStatus(false);
    }
    const prepareResume =() =>{
        console.log("prepare");
        setuploadStatus(false);
        setprepareStatus(true);
    }
  return (
    <>
    <div className={styles.content}>
        <div className={styles.upload}>
            <div onClick={displayUpload} className={styles.button}>Upload a Resume</div>
        </div>
        <div className={styles.prepare}>
            <div onClick={prepareResume} className={styles.button}>Make a Resume</div>
        </div>
    </div>
    {uploadstatus ? (<UploadResume />) : (<></>)}
    {preparestatus ? (<PrepareResume />):(<></>)}
    </>
  )
}
