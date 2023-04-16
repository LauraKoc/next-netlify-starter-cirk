import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Clown = () => {
  const { t: translate } = useTranslation("about");

  return (
    <>
      <h2>{translate("Clown ZAKO")}</h2>
      <p>{translate("Clown ZAKO description")}</p>
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

export default Clown;
