import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import img from "../public/inspire_logo.png";
import menu from "../public/menu.png";
import styles from "../styles/Home.module.css";

const Header = () => {
  const { locale, locales, push } = useRouter();
  const { t: translate } = useTranslation("about");
  /* to do lang switch on page */
  const handleClick = (l) => () => {
    push("", undefined, { locale: l });
    setmobMenu(!mobMenu);
  };
  const router = useRouter();
  const [mobMenu, setmobMenu] = useState(false);

  function toggleMenu() {
    setmobMenu(!mobMenu);
  }

  return (
    <div className={styles.header_section}>
      <div className={styles.image_logo}>
        {/* <Link href="/home" locale={locale}>
          <Image
            src={img}
            alt="Picture of the author"
            width="100px"
            height="100px"
            loading="lazy"
          />
        </Link> */}
      </div>
      <div className={styles.mob_menu} onClick={toggleMenu}>
        <Link href="/">MENU</Link>
      </div>
      <div className={`${mobMenu ? "" : styles.mob_nav}  ${styles.menu}`}>
        <div className={styles.nav_container}>
          <Link href="/home" locale={locale}>
            <a
              className={`${
                router.pathname === "/home" ? styles.active : null
              }  ${styles.links}`}
              onClick={toggleMenu}
            >
              {translate("home")}
            </a>
          </Link>
          <Link href="/aviso" locale={locale}>
            <a
              className={`${
                router.pathname === "/aviso" ? styles.active : null
              }  ${styles.links}`}
              onClick={toggleMenu}
            >
              {translate("aviso")}
            </a>
          </Link>
          <Link href="/video" locale={locale}>
            <a
              className={`${
                router.pathname === "/video" ? styles.active : null
              }  ${styles.links}`}
              onClick={toggleMenu}
            >
              {translate("video")}
            </a>
          </Link>
          <Link href="/presse" locale={locale}>
            <a
              className={`${
                router.pathname === "/presse" ? styles.active : null
              }  ${styles.links}`}
              onClick={toggleMenu}
            >
              {translate("presse")} 
            </a>
          </Link>
        </div>
        <div className={styles.lang_container}>
          {locales.map((l) => (
            <li className={styles.lang} key={l} onClick={handleClick(l)}>
               {l} | 
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about"])),
      // Will be passed to the page component as props
    },
  };
}

export default Header;
