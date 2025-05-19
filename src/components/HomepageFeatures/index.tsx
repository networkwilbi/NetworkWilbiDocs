import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
  // Either provide an Svg component or an image URL
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  imageUrl?: string;
};

const FeatureList: FeatureItem[] = [
  {

    title: 'Secure by Design',
    Svg: require('@site/static/img/blue_shield.svg').default,
    description: (
      <>
        From protocol layers to endpoint defenses--every detail matters.
      </>
    ),
  },
  {
    title: 'Balanced by Threat Model',
    Svg: require('@site/static/img/yin_yang_blue.svg').default,
    description: (
      <>
        Security is not one-size-fits-all. Learn to evaluate convenience vs protection.
      </>
    ),
  },
  {
    title: 'Open Knowledge, Peer Verified',
    Svg: require('@site/static/img/github_logo_blue.svg').default,
    description: (
      <>
        All ideas are documented, tested, and open to review on Github.
      </>
    ),
  },
];

function Feature({title, Svg, imageUrl, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
        {imageUrl && <img className={styles.featureSvg} src={imageUrl} alt={title} />}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
