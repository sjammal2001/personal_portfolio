import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (

    <main className={styles.main}>

      <section className={styles.aboutMe}>
        <body className={styles.body}>

        <div className={styles.box}></div>

        <div className={`${styles.box} ${styles.overlay}`}>

          <img className={styles.pfp} src={process.env.PUBLIC_URL + '/pfp.png'} alt='Profile'/>
          <h3 className={styles.me}>Swarna<br />Jammalamadaka</h3>
          <hr className={styles.solid} />
          <p className={styles.job}>SOFTWARE ENGINEER</p>

          <div className={styles.social}> 
            <a href="https://www.linkedin.com/in/swarna-jammalamadaka-0ab8721b6/">
            <img className={styles.soImg} src={process.env.PUBLIC_URL + '/linkedin-icon.png'} alt='icon'/>
            </a>
          </div>

        </div>

        <div className={`${styles.box} ${styles.intro}`}>
          <h1>Hello</h1>
          <h5>Here's who I am & what I do</h5>
          <button>RESUME</button>
          <button>PROJECTS</button>
          <p className={styles.introP}>I was first introduced to coding in high school, and have 
            continued my passion for it until now. Throughout the years, 
            I have developed a variety of skills in the IT field as I 
            experienced different roles including tutoring people in 
            coding, and internships in jobs such as QA Automation and 
            Software Development. All of these experiences have made a 
            stronger programmer. Using my variety of skills, I am now 
            looking forward to further developing my skills as a Software 
            Developer in the IT field.</p>
        </div>
        </body>
        </section>

        <p className={styles.footer}>&copy; 2023 My Website. All rights reserved. </p>

    </main>  
  );
};

export default HomePage;
