import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const SilksDuo = () => {
  const { t: translate } = useTranslation("about");

  return (
    <>
      <h2>{translate("Aerial silks duo")}</h2>
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

export default SilksDuo;
