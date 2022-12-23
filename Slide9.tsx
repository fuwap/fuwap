import { FunctionComponent, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./Slide9.module.css";

const Slide9: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSHUFFLEClick = useCallback(() => {
    navigate("/slide-10");
  }, [navigate]);

  return (
    <div className={styles.slide9}>
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
        href="/slide-10"
        size="lg"
        onClick={onSHUFFLEClick}
      >
        SHUFFLE
      </Button>
      <img
        className={styles.magnusTheAmuletHaveTheEt}
        alt=""
        src="../037-magnus-the-amulet-have-the-eternal-mightprinciples-of-cursed-scroll@2x.png"
      />
      <img
        className={styles.bipglunkCheeser97Icon}
        alt=""
        src="../053-bipglunk-cheeser97@2x.png"
      />
      <img className={styles.analogueIcon} alt="" src="../analogue@2x.png" />
    </div>
  );
};

export default Slide9;
