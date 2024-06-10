import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '',
    Svg: require('@site/static/img/Rathalos.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: '',
    Svg: require('@site/static/img/Deviljho.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: '',
    Svg: require('@site/static/img/Rathian.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: '',
    Svg: require('@site/static/img/Lagiacrus.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: '',
    Svg: require('@site/static/img/Glavenus.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: '',
    Svg: require('@site/static/img/Brachydios.svg').default,
    description: (
      <>
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
