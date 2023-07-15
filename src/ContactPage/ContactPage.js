import React from 'react';
import styles from './ContactPage.module.css';


const ContactPage = () => {
    return (
      <main>
  
        <section>
          <div className={styles.title}>
            <a className={styles.box}></a>
            <h2><b>Let's Talk</b></h2>
          </div>
        </section>

        <section className={styles.expBox}>
                <div className={styles.contactBox}>
                    <div>
                        <h4 className={styles.boxHead}>Name *</h4>
                        <input type="text" className={styles.inputBox} required/>
                    </div>
                    <div>
                        <h4 className={styles.boxHead}>Email *</h4>
                        <input type="email" className={styles.inputBox} required/>
                    </div>
                    <div>
                        <h4 className={styles.boxHead}>Subject</h4>
                        <input type="subject" className={styles.inputBox} ></input>
                    </div>
                    <div>
                        <h4 className={styles.boxHead}>Message</h4>
                        <textarea rows="4" className={styles.inputBox} style={{marginBottom:'25px'}}></textarea>
                    </div>
                    <button>SEND</button>
                </div>

        </section>


        <section>
        <div>
          <div className={styles.endBuffer}> </div>
        </div>
        </section>

        <div>
            <p className={styles.footer}>&copy; 2023 My Website. All rights reserved.</p>
        </div>

      </main>
  );
};

export default ContactPage;