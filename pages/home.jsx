import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import VideoComponent from "../components/VideoComponent/VideoComponent";
import Card from "../components/Cards/card";
import About from "../components/About/about";
import styles from "../styles/Home.module.css";


const Home = () => {
  const { locale, locales, push } = useRouter();

  const { t: translate } = useTranslation("about");

  return (
    <>
      <VideoComponent />
      <About />
      <div className={styles.cardContainer}>
        <Card
          title={translate("Aerial ring")}
          description={translate("description")}
          href={locale + `/ring`}
        />
        <Card
          title={translate("Clown ZAKO")}
          description={translate("description")}
          href={locale + `/clown`}
        />
        <Card
          title={translate("Aerial silks duo")}
          description={translate("description")}
          href={locale + `/silks_duo`}
        />
      </div>
    </>
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

export default Home;
