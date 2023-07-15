import React from 'react';
import styles from './Header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header>
		<div>
			<a className={styles.smallB}> </a>
			<a>
				<a className={styles.left} href={process.env.PUBLIC_URL + '/'}>Jammalamadaka</a>
				<a style={{color: 'black'}} className={styles.right}>/ SOFTWARE ENGINEER</a>
			</a>
			
		</div>

		<nav>
		  <ul>
			<li><a href={process.env.PUBLIC_URL + '/'}>HOME</a></li>
			<li><a href={process.env.PUBLIC_URL + '/resume'}>RESUME</a></li>
			<li><a href={process.env.PUBLIC_URL + '/projects'}>PROJECTS</a></li>
			<li><a href={process.env.PUBLIC_URL + '/contact'}>CONTACT</a></li>
		  </ul>
		</nav>

	  </header>
  );
};

export default Header;