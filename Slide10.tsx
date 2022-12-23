import { FunctionComponent, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./Slide10.module.css";

const Slide10: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSHUFFLEClick = useCallback(() => {
    navigate("/slide-11");
  }, [navigate]);

  return (
    <div className={styles.slide10}>
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
        href="/slide-11"
        size="lg"
        onClick={onSHUFFLEClick}
      >
        SHUFFLE
      </Button>
      <img
        className={styles.dudeFuwapQuestionMark}
        alt=""
        src="../dude-fuwap-question-mark@2x.png"
      />
      <img
        className={styles.slaveTheGoatSacrilegeThe}
        alt=""
        src="../019-slave-the-goatsacrilege-the-flesh@2x.png"
      />
      <img
        className={styles.lesRacinesDindignation}
        alt=""
        src="../050-les-racines-dindignation@2x.png"
      />
    </div>
  );
};

export default Slide10;
