import React from 'react';
import styles from './ProjectsPage.module.css';


const ProjectsPage = () => {
    return (
      <main>
  
        <section>
          <div className={styles.title}>
            <a className={styles.box}></a>
            <h2><b>Projects</b></h2>
          </div>

          <p className={styles.paraTitle}>The following projects showcase my experience in Artifice Intelligence, Java, 
                and Python <br/>programming. These are all fully-functioning applications I have worked on.</p>
        </section>

        <section>
            <div className={styles.expBox}>
                <div className={`${styles.info} ${styles.expleft}`}>
                    <h2 style={{marginTop: '0px', marginBottom: '2px'}}>AI Robotics</h2>
                    <p style={{ fontSize: '17px', marginTop: '0px', marginBottom: '1px', fontSize: '14px'}} ><b>Python</b></p>
                    <p style={{ fontSize: '14px', marginTop: '25px', fontSize: '17px'}} >For this project, I used a modified A* Search method to find the shortest path in the space. 
                                                                        I also created a shapeshifting alien path planning problem using a configuration space and 3D maze.</p>
                </div>
                <div className={styles.info}>
                    <img className={styles.p1} src={process.env.PUBLIC_URL + '/P1.gif'}></img>
                </div>
            </div>

            <div className={styles.expBox}>
                <div className={`${styles.info} ${styles.expleft}`}>
                    <h2 style={{marginTop: '0px', marginBottom: '2px'}}>Healthcare Project</h2>
                    <p style={{ fontSize: '17px', marginTop: '0px', marginBottom: '1px', fontSize: '14px'}} ><b>Java</b></p>
                    <p style={{ fontSize: '14px', marginTop: '25px', fontSize: '17px', width: '640px'}} >I coded an interactive program for users to track daily health goals including 
                                                                                                         water intake, calories, and exercise. There were several functions implemented
                                                                                                         to allow users to grow virtual flowers, and eventually full gardens, as daily 
                                                                                                         healthcare goals were met to integrate an entertaining component.</p>
                </div>
            </div>

            <div className={styles.expBox}>
                <div className={`${styles.info} ${styles.expleft}`}>
                    <h2 style={{marginTop: '0px', marginBottom: '2px'}}>FBLA Mobile Quiz App</h2>
                    <p style={{ fontSize: '17px', marginTop: '0px', marginBottom: '1px', fontSize: '14px'}} ><b>Java</b></p>
                    <p style={{ fontSize: '14px', marginTop: '25px', fontSize: '17px', width: '640px'}} >I developed a mobile app for students to play a quiz game about FBLA topics. I 
                                                                                                         collaborated on this project and aided in back-end development by establishing 
                                                                                                         functions testing the validity of answers selected by users to each timed question, 
                                                                                                         and leadership feature.</p>
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

export default ProjectsPage;