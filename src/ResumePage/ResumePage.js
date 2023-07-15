import React from 'react';
import styles from './ResumePage.module.css';

const ResumePage = () => {
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/resume.pdf';
    link.download = 'resume.pdf';
    link.target = '_blank';
    link.click();
  };

  return (
    <main>

      <section>
        <div className={styles.title}>
          <a className={styles.box}></a>
          <h2><b>Resume</b></h2>
        </div>

        <div className={styles.expTitle}>
          <h4>Experience</h4>
          <button className={styles.cv} onClick={downloadPDF}>DOWNLOAD CV</button>
        </div>

        <div className={styles.expBox}>
          <div className={`${styles.info} ${styles.expleft}`}>
            <h2 style={{marginBottom: '2px'}}>May-Aug 2022</h2>
            <p style={{ fontSize: '17px', marginTop: '0px', marginBottom: '1px' }} >Software Developer Intern</p>
            <p style={{ fontSize: '14px'}} >Uline</p>
            <p style={{ fontSize: '14px', marginTop: '25px' }} >Pleasant Prarie, WI</p>
          </div>
          <div className={styles.info}>
              <li>Implemented data persistence feature to save region preferences, and resolved bugs to enhance 
                  applications as a full-stack engineer using Java and Angular on an Agile Scrum Team</li>
              <li>Updated API endpoints to handle multiple parameters as a part of a G2 Modernization project</li>
              <li>Utilized tools such as Swagger, Postman, and Jenkins to develop and deploy code on services and 
                apps for the Logistics department</li>
          </div>
        </div>

        <div className={styles.expBox}>
          <div className={`${styles.info} ${styles.expleft}`}>
            <h2 style={{marginBottom: '2px'}}>May-Aug 2021</h2>
            <p style={{ fontSize: '17px', marginTop: '0px', marginBottom: '1px' }} >QA Automation Intern</p>
            <p style={{ fontSize: '14px'}} >Encyclopedia Britannica</p>
            <p style={{ fontSize: '14px', marginTop: '25px' }} >Chicago, IL</p>
          </div>
          <div className={styles.info}>
              <li>Improved the efficiency of testing Britannica’s School website by finishing automation test 
                  cases for all the main features of the site using Selenium in Python</li>
              <li>Adapted to a new role in order to quality assure a website going to production</li>
              <li>Demoed code to senior managers to showcase programming abilities</li>
          </div>
        </div>

        <div className={styles.expBox}>
          <div className={`${styles.info} ${styles.expleft}`}>
            <h2 style={{marginBottom: '2px'}}>June 2018 - Oct 2020</h2>
            <p style={{ fontSize: '17px', marginTop: '0px', marginBottom: '1px' }} >Founder + President</p>
            <p style={{ fontSize: '14px'}}>Girls Who Code</p>
            <p style={{ fontSize: '14px', marginTop: '25px' }} >Lake Zurich, IL</p>
          </div>
          <div className={styles.info}>
              <li>Founded a branch of the Girls Who Code organization by reaching out to local libraries 
                and constructing an engaging curriculum to teach Python and HTML</li>
              <li>Managed a program for girls in grades 6-12 for multiple years with meticulous planning</li>
          </div>
        </div>
      </section>


      <section>
          <div className={styles.expTitle}>
            <h4 style={{marginBottom: '0px'}}>Education</h4>
            <a style={{background: '#E6DACE', color:'#E6DACE'}} className={styles.cv}><b>DOWNLOAD CV</b></a>
          </div>

          <div className={styles.expBox}>
            <div className={`${styles.info} ${styles.expleft}`}>
              <h2 style={{marginBottom: '2px'}}>2020 - 2023</h2>
              <p style={{ fontSize: '17px', marginTop: '0px', marginBottom: '1px' }}>University of Illinois at Urbana-Champaign</p>
              <p style={{ fontSize: '14px'}} >Bachelor's Degree in Computer Engineering</p>
              <p style={{ fontSize: '14px', marginTop: '25px' }} >Champaign, IL</p>
            </div>
            <div className={styles.info}>
                <p style={{marginBottom: '3px', fontFamily: 'default'}}>Relevant Coursework:</p>
                <ul>
                  <li className={styles.edu}>Discrete Math</li>
                  <li className={styles.edu}>Digital Systems Laboratory</li>
                  <li className={styles.edu}>Data Structures</li>
                  <li className={styles.edu}>Artificial Intelligence</li>
                  <li className={styles.edu}>Analog Signal Processing</li>
                </ul>
            </div>
          </div>

          <div className={styles.expBox}>
            <div className={`${styles.info} ${styles.expleft}`}>
              <h2 style={{marginBottom: '2px'}}>2016 - 2020</h2>
              <p style={{ fontSize: '17px', marginTop: '0px', marginBottom: '1px' }} >Adlai E. Stevenson High School</p>
              <p style={{ fontSize: '14px'}} > </p>
              <p style={{ fontSize: '14px', marginTop: '25px' }} >Lincolnshire, IL</p>
            </div>

            <div className={styles.info}>
                <p style={{marginBottom: '3px', fontFamily: 'default'}}>Relevant Coursework:</p>
                <ul>
                  <li className={styles.edu}>Calculus III</li>
                  <li className={styles.edu}>Linear Algebra</li>
                </ul>
            </div>
          </div>
      </section>

      <section>
        <div>
            <div className={styles.endBuffer}> </div>
        </div>
      </section>
        
      <section className={styles.expBox}>
      <div className={styles.container}>

        <div className={styles.section}>
          <h1 style={{color: 'white', fontSize: '14px'}}>Professional Skillset</h1>
          <h1 className={styles.header}>Professional Skillset</h1>
          <ul className={styles.list1}>
            <li>Entrepreneurial Mindset</li>
            <li>Teamwork & Collaboration</li>
          </ul>
          <ul className={styles.list1}>
            <li>Presentational Skills</li>
            <li>Digital Analytics</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h1 className={styles.header}>Software Skills</h1>
          <ul className={styles.list2}>
            <li>Python (+Selenium)</li>
            <li>Java</li>
            <li>C/C++</li>
          </ul>
          <ul className={styles.list2}>
            <li>Linux</li>
            <li>System Verilog</li>
            <li>CAD</li>
          </ul>
          <ul className={styles.list2}>
            <li>HTML/CSS</li>
            <li>Angular</li>
            <li>React</li>
          </ul>
          <ul>
            <p style={{color: 'white', fontSize: '17px'}}>empty</p>
          </ul>
        </div>

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

export default ResumePage;
