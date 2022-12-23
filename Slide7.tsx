import { FunctionComponent, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./Slide7.module.css";

const Slide7: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSHUFFLEClick = useCallback(() => {
    navigate("/slide-8");
  }, [navigate]);

  return (
    <div className={styles.slide7}>
      <img className={styles.layer1Icon} alt="" src="../layer-1.svg" />
      <div className={styles.retailItemsAnimationAndVid}>
        <p className={styles.p}>2022</p>
        <p className={styles.p}>2021</p>
        <p className={styles.p}>2020</p>
        <p className={styles.p}>Retail Items</p>
        <p className={styles.p}>Animation and Video</p>
        <p className={styles.p}>Artificial Intelligence</p>
      </div>
      <img className={styles.topaz1Icon} alt="" src="../topaz-1.svg" />
      <Button
        className={styles.sHUFFLE}
        variant="dark"
        href="/slide-8"
        size="lg"
        onClick={onSHUFFLEClick}
      >
        SHUFFLE
      </Button>
      <img
        className={styles.meatloafEngine7000Icon}
        alt=""
        src="../070-meatloaf-engine7000@2x.png"
      />
      <img
        className={styles.freeFrustrationOfTheChild}
        alt=""
        src="../062-free-frustration-of-the-child-psyche@2x.png"
      />
      <img
        className={styles.essenceOfSkeletalBeing}
        alt=""
        src="../068-essence-of-skeletal-being@2x.png"
      />
      <img
        className={styles.dALLEUntitledRitualTemple}
        alt=""
        src="../dalle-untitled-ritual-temple-666@2x.png"
      />
      <img
        className={styles.dALLEUntitledRitualTemple1}
        alt=""
        src="../dalle-untitled-ritual-temple-888@2x.png"
      />
      <img
        className={styles.dALLEUntitledRitualTemple2}
        alt=""
        src="../dalle-untitled-ritual-temple-111@2x.png"
      />
      <img
        className={styles.dALLEUntitledRitualTemple3}
        alt=""
        src="../dalle-untitled-ritual-temple-222@2x.png"
      />
      <img
        className={styles.dALLEUntitledRitualTemple4}
        alt=""
        src="../dalle-untitled-ritual-temple-333@2x.png"
      />
      <img
        className={styles.dALLEUntitledRitualTemple5}
        alt=""
        src="../dalle-untitled-ritual-temple-555@2x.png"
      />
      <img
        className={styles.dALLEUntitledRitualTemple6}
        alt=""
        src="../dalle-untitled-ritual-temple-444@2x.png"
      />
    </div>
  );
};

export default Slide7;
