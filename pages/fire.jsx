import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Fire = () => {
  const { t: translate } = useTranslation("about");

  return (
    <>
      <h2>{translate("Yoga show title")}</h2>
      <p>{translate("Yoga show description")}</p>
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

export default Fire;
