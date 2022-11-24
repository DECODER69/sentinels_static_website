import styles from "./Page2.module.css";

const Page2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row1}>
        <h1>WELCOME TO &nbsp;</h1>
        <h2>SEN</h2>
        <h1>TINELS TECH</h1>
      </div>

      <div className={styles.row2}>
        <div className={styles.left}>
          <p>Professional Security tech cameras </p>
          <p>from a Team you can trust</p>
        </div>

        <div className={styles.right}>
          <img src="/images/cctv.png" alt="" />
        </div>
      </div>
      
      <div className={styles.bot}>
              <div className={styles.left}>
                <div className={styles.img1}>
                  <h2>PREVIEW OF RECORD</h2>
                  <img src="/images/cam1.jpg" alt="" />
                  <p>October 11, 2022 - 04-12-08</p>
                </div>

              </div>

              <div className={styles.right}>
                <div className={styles.img1}>
                  <h2>CAMERA INSTALLED</h2>
                    <div className={styles.outer}>
                      <div className={styles.insideleft}>
                        <img src="/images/cam1.jpg" alt="" />
                        <p>CAM 1</p>
                      </div>
                      <div className={styles.insideright}>
                        <img src="/images/cam1.jpg" alt="" />
                        <p>CAM 2</p>
                      </div>
                    </div>
                </div>

              </div>


            </div>
    </div>
  );
};

export default Page2;
