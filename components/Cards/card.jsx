import Link from 'next/link';
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import style from './card.module.css'

function Card({ title, description, href }) {

	const { t: translate } = useTranslation('about')
  return (
    <div className={style.card}>
      <div className={style.container}>
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
      </div>
      <div className="card__actions">
        <Link href={href}>
          <a className="card__link">{translate('learnMore')}</a>
        </Link>
      </div>
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
export default Card