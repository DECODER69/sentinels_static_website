import styles from "./Page4.module.css";

const Page4 = () => {
  return (
    
    <div className={styles.container}>

      {/* <div class={styles.flipcard}>
        <div class={styles.flipcardinner}>
          <div class={styles.flipcardfront}>
            <img src="img_avatar.png" alt="Avatar"/>
          </div>
          <div class={styles.cardback}>
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div> */}



      <div className={styles.top}>
        <div className={styles.down}>
          <div className={styles.row}>
            <div className={styles.column}>
              <img src="/images/ala.jpg" alt="" />
              <h2>CHRISTOPHER</h2>
              <p>Developer</p>
            </div>
            <div className={styles.column}>
              <img src="/images/rapsy.jpg" alt="" />
              <h2>CHRISTIAN</h2>
              <p>Developer</p>
            </div>
            <div className={styles.column}>
              <img src="/images/manji.jpg" alt="" />
              <h2>JHOUSUA</h2>
              <p>Developer</p>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.column}>
              <img src="/images/manuel.jpg" alt="" />
              <h2>LEOMHAR</h2>
              <p>Developer</p>
            </div>
            <div className={styles.column}>
              <img src="/images/dawe.png" alt="" />
              <h2>LHEXMAR</h2>
              <p>Developer</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.foot}>
        <div className={styles.col1}>
          <h1>SENTINELS</h1>
          <p>
            Lorem ipsum dolor sit amet. Qui reprehenderit possimus et dolore
            corrupti eum rerum sapiente. Qui voluptatem accusantium et odit
            commodi eum odio consequatur vel eaque quasi
          </p>
        </div>
        <div className={styles.col2}>
          <h1>Get In Touch</h1>
          <p>234street, Philippines</p>
          <p>Sentinels@gsfe.com</p>
          <p>+639xxxxxxxxx</p>
        </div>
        <div className={styles.col3}>
          <h1>Links</h1>
          <p>
            Lorem ipsum dolor sit amet. Qui reprehenderit possimus et dolore
            corrupti eum rerum sapiente. Qui voluptatem accusantium et odit
            commodi eum odio consequatur vel eaque quasi
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page4;
