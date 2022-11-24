import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <h1>CODING SERVICES</h1>
      <p>We focus on delivering high class projects related in</p>
      <p>Python, Node Js, React Js, Html, and Css</p>

      {/* <h1>Technological University of the Philippines</h1>
      <h3>Manila Campus</h3>
      <p>CQT Avenue, Salawag, Dasmarinas, Cavite</p> */}
    </div>
  );
};

export default Hero;
