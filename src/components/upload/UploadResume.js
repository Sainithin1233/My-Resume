import React, {useState} from 'react';
import styles from './upload.module.css';

export default function UploadResume() {
  // const [status, setStatus] = useState(false);
  const submitfunction = () =>{
    alert("resume uploaded succesfully !");   
  }
  return (
    <div className={styles.content}>
      <h1>Upload Your Resume</h1>
      <div className={styles.inputs}>
        <input id='fileupload' type='file' />
      </div>
      <div className={styles.submit}>
        <button type='submit' onClick={submitfunction}>Submit</button>
      </div>
      
    </div>
  )
}
