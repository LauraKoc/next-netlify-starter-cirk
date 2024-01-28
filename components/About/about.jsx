import { useTranslation } from "next-i18next";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import style from "./about.module.css";
import img from "../../public/fon_index.jpg";

function About() {
  const { t: translate } = useTranslation("about");
  return (
    <div className={`${style.container}`}>
      <Image
        src={img}
        alt="Picture of the author"
        width="200px"
        height="250px"
        loading="lazy"
      />
      <div className={`${style.text_container}`}>
        <h2>{translate("title")}</h2>
        <p>{translate("description")}</p>
      </div>
    </div>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about"])),
      // Will be passed to the page component as props
    },
  };
}
export default About;
