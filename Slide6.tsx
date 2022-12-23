import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Slide6.module.css";

const Slide6: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSHUFFLEClick = useCallback(() => {
    navigate("/slide-7");
  }, [navigate]);

  return (
    <div className={styles.slide6}>
      <img className={styles.layer1Icon} alt="" src="../layer-1.svg" />
      <div className={styles.retailItemsAnimationAndVid}>
        <p className={styles.p}>2022</p>
        <p className={styles.p}>2021</p>
        <p className={styles.p}>2020</p>
        <p className={styles.p}>Retail Items</p>
        <p className={styles.p}>Animation and Video</p>
        <p className={styles.p}>Artificial Intelligence</p>
      </div>
      <img
        className={styles.potentiallyDisturbingImagery}
        alt=""
        src="../potentially-disturbing-imagery@2x.png"
      />
      <video className={styles.aReionizedUniverseInstallat} autoPlay muted loop>
        <source src="../021_a reionized universe installation art concept.mp4" />
      </video>
      <img
        className={styles.unknownDialecticDialectsDi}
        alt=""
        src="../043-unknown-dialectic-dialects-dialectal-dialect@2x.png"
      />
      <img
        className={styles.the93rdInfinite}
        alt=""
        src="../071-the-93rd-infinite@2x.png"
      />
      <img className={styles.topaz1Icon} alt="" src="../topaz-1.svg" />
      <button className={styles.sHUFFLE} onClick={onSHUFFLEClick}>
        SHUFFLE
      </button>
    </div>
  );
};

export default Slide6;
