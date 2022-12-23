import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styles from "./Slide11.module.css";

const Slide11: FunctionComponent = () => {
  return (
    <div className={styles.slide11}>
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
        href="/slide-12"
        size="lg"
      >
        SHUFFLE
      </Button>
      <img
        className={styles.howLuckyAreWeAllToBeThe}
        alt=""
        src="../065-how-lucky-are-we-all-to-be-the-spawns-of-the-psychoterrorists-agenda-1@2x.png"
      />
      <img
        className={styles.preTouretticSuperflipIcon}
        alt=""
        src="../069-pretourettic-superflip@2x.png"
      />
      <img
        className={styles.anInexorableZemblanity}
        alt=""
        src="../008-an-inexorable-zemblanity@2x.png"
      />
      <img
        className={styles.untitledWorkIcon}
        alt=""
        src="../024-untitled-work@2x.png"
      />
      <video className={styles.pierrotShort1} autoPlay muted loop>
        <source src="../pierrotshort.mp4" />
      </video>
    </div>
  );
};

export default Slide11;
