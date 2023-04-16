import { useState, useEffect } from "react";
import styles from "./parallax.module.css";

const Parallax = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPos(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.parallax}>
      <div
        className={styles.parallaxText}
        style={{ transform: `translateY(-${scrollPos / 1}px)` }}
      >
        <h1>Sveicināti!!!</h1>
        <p>
          Mēs, cirka mākslinieki - Katerīna un Jevgēņijs ir priecīgi, ka Jūs
          skatāties mūsu mājas lapu. Skatoties sadaļā Repertuārs, Jūs varat
          detalizēti uzzināt par mūsu priekšnesumiem, apskatīt fotogrāfijas un
          video, kā arī par mums izlasīt preses publikācijās Preses sadaļā.
          Sazināties ar mums var pa e-pastu:
        </p>
      </div>
       
    </div>
  );
};

export default Parallax;
