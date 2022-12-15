import Button from "./Button";
import styles from "./Navbar.module.css";
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        {/* <img src="/images/tupclogo.png" /> */}
        <h2>SEN</h2>
        <h3>TINELS</h3>
      </div>

        <div className={styles.toggle}> 
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>


     
      <div className={styles.navbarActions}>

        <Link className={styles.inside} href="/tupc" passhref> 
          <Button  variant="secondary">   Home</Button> 
        </Link>

        <Link className={styles.inside} href="/Page2" passhref> 
          <Button variant="secondary"> DashBoard</Button>
        </Link>

        <Link className={styles.inside} href="Page3" passhref> 
          <Button variant="secondary"> Services</Button>
        </Link>

        <Link className={styles.inside} href="Page4" passhref> 
          <Button variant="secondary">  About</Button>
        </Link>
      
      </div>

    </div>

    
  
    
  );
};


// const toggle = document.getElementsByClassName('toggele-button')[0]
// const navbarActions = document.getElementsByClassName('navbar-links')[0]


// toggle.addEventListener('click', () => {
//   navbarActions.classList.toggle('active')
// })

export default Navbar;
