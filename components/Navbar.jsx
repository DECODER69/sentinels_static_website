import Button from "./Button";
import styles from "./Navbar.module.css";


const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        {/* <img src="/images/tupclogo.png" /> */}
        <h2>SEN</h2>
        <h3>TINELS</h3>
       
      </div>
      <div className={styles.navbarActions}>
        <Button  variant="secondary"><a href="http://localhost:3000/tupc">Home</a></Button> 
        <Button variant="secondary"><a href="http://localhost:3000/Page2">DashBoard</a></Button>
        <Button variant="secondary"><a href="http://localhost:3000/Page3">Services</a></Button>
        <Button variant="secondary"><a href="http://localhost:3000/Page4">About</a></Button>
      </div>

    </div>
  
    
  );
};

export default Navbar;
