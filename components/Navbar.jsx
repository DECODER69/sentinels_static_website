import Button from "./Button";
import styles from "./Navbar.module.css";
import Link from 'next/link'
import React, {useState} from 'react'



const Navbar = () => {
  const [show,setShow]=useState(true)
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        {/* <img src="/images/tupclogo.png" /> */}
        <h2>SEN</h2>
        <h3>TINELS</h3>
      </div>


        <div className={styles.toggle} onClick={()=>setShow(!show)}> 
  

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

      {show?<div className={styles.navbarActions2}>
               
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
              
            </div>:null}

    </div>
    
    
  );
};



export default Navbar;
