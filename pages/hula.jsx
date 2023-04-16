import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Hula = () => {
  const { t: translate } = useTranslation("about");

  return (
    <>
      <h2>{translate("Hula hoops title")}</h2>
      <p>{translate("Hula hoops description")}</p>
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

export default Hula;
