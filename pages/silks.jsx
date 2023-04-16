import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Silks = () => {
  const { t: translate } = useTranslation("about");

  return (
    <>
      <h2>{translate("Aerial silks title")}</h2>
      <p>{translate("Aerial silks description")}</p>
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

export default Silks;
