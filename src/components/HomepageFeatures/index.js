import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'مترجم',
    image: './img/translator.png',
    description: (
      <>
        أقوم بتعريب عدة تطبيقات وأشارك خبرتي هنا. أريد أن تتوفر اللغة العربية في كل مكان.
      </>
    ),
  },
  {
    title: 'داعم',
    image: './img/supporter.png',
    description: (
      <>
        على الجميع أن يدعم القضية العربية، أليس كذلك؟
      </>
    ),
  },
  {
    title: 'مطور',
    image: './img/developer.png',
    description: (
      <>
        أعرف بضع لغات برمجة... لست ملتزم بتطوير أي شيء. ليس لدي طموحات، لأن البرمجة مؤلمة!
      </>
    ),
  },
]

function Feature({ image, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} alt={title} className="featureImage" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomePageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={clsx('text--center', styles.featureTitle)}>
          من أكون؟
        </h2>
        <hr></hr>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}