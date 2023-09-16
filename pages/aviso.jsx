import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Card from "../components/Cards/card";
import styles from "../styles/Aviso.module.css";

const Aviso = () => {
  const { locale, locales, push } = useRouter();

  const { t: translate } = useTranslation("about");

  return (
    
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
         <Card
          title={translate("Illusion")}
          description={translate("description")}
          href={locale + `/magic`}
        />
        <Card
          title={translate("Hula hoops")}
          description={translate("description")}
          href={locale + `/hula`}
        />
        <Card
          title={translate("Yoga show")}
          description={translate("description")}
          href={locale + `/fire`}
        />
         <Card
          title={translate("Aerial silks")}
          description={translate("description")}
          href={locale + `/silks`}
        />
        <Card
          title={translate("Juggler")}
          description={translate("description")}
          href={locale + `/boxes`}
        />
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

export default Aviso;
