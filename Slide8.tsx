import { FunctionComponent, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./Slide8.module.css";

const Slide8: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSHUFFLEClick = useCallback(() => {
    navigate("/slide-9");
  }, [navigate]);

  return (
    <div className={styles.slide8}>
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
        href="/slide-9"
        size="lg"
        onClick={onSHUFFLEClick}
      >
        SHUFFLE
      </Button>
      <img className={styles.fuwop2Icon} alt="" src="../fuwop2@2x.png" />
      <img className={styles.smogIcon} alt="" src="../smog@2x.png" />
      <img
        className={styles.tHETECHNOBEARSEPICFACADECO}
        alt=""
        src="../052-the-technobears-epic-facade-coffee-dyed@2x.png"
      />
      <img
        className={styles.ceramicOxideRustoleumExclu}
        alt=""
        src="../016-ceramic-oxiderustoleum-exclusion@2x.png"
      />
      <img
        className={styles.pierrotTree2}
        alt=""
        src="../034-pierrot-tree-2@2x.png"
      />
    </div>
  );
};

export default Slide8;
