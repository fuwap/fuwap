import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Slide31.module.css";

const Slide31: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAnimationClick = useCallback(() => {
    navigate("/slide-6");
  }, [navigate]);

  return (
    <div className={styles.slide31}>
      <video
        className={styles.animation}
        autoPlay
        muted
        onClick={onAnimationClick}
      >
        <source src="../enter_fuwap_1.mp4" />
      </video>
    </div>
  );
};

export default Slide31;
