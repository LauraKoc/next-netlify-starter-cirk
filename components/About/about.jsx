
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import style from './about.module.css'

function About() {

	const { t: translate } = useTranslation('about')
  return (
   
      <div className={`${style.container}`}>
        <h2>{translate("title")}</h2>
        <p>{translate("description")}</p>
      </div>
    
   
  );
}
export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['about'])),
			// Will be passed to the page component as props
		},
	}
}
export default About