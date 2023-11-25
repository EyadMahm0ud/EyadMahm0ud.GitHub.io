import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'مترجم',
    Svg: require('@site/static/img/translator.svg').default,
    description: (
      <>
        أقوم بتعريب عدة تطبيقات وأشارك خبرتي هنا.
        صحيح أنني لست خبيرًا ولا أتقاضى المال لكن أريد أن تتوفر اللغة العربية في كل مكان.
      </>
    ),
  },
  {
    title: 'داعم',
    Svg: require('@site/static/img/supporter.svg').default,
    description: (
      <>
        على الجميع أن يدعم القضية الفلسطينية، أليس كذلك؟
      </>
    ),
  },
  {
    title: 'مبرمج',
    Svg: require('@site/static/img/developer.svg').default,
    description: (
      <>
        أعرف بضع لغات برمجة... لكني لست ملتزم بتطوير أي شيء.
        ليس لدي طموحات أو رغبة في دخول كلية حاسبات كالشباب الآخرين، لأن البرمجة مؤلمة!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
