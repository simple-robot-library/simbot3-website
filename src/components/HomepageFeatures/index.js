import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
// import img1 from '@site/static/img/kfc/Twister.jpeg'

const today = new Date().getDay()
const chicken = 4

const FeatureList = [
  {
    title: '易于使用',
    // Svg: require('@site/static/img/kfc/Twister.jpeg').default,
    Svg: today === chicken ? function ({className}) {
        return (
            <a href='/img/kfc/Twister.jpeg' target='_blank'>
                <img className={className} draggable={false} src={require('@site/static/img/kfc/Twister_s1.jpg').default} alt={`疯狂星期四`}/>
            </a>
        )
    } : require('@site/static/img/features/3/偷懒.svg').default,
    description: (
      <>
        不管你信不信，但是它至少不会过多的拖累你。
      </>
    ),
  },
  {
    title: '组件协同',
    Svg: today === chicken ? function ({className}) {
        return (
            <a href='/img/kfc/TwisterBox.jpeg' target='_blank'><img className={className} draggable={false}
                    src={require('@site/static/img/kfc/TwisterBox_s1.jpg').default} alt={`奖励自己`}/>
            </a>
        )
    } : require('@site/static/img/features/3/看书.svg').default,
    description: (
      <>
        不同的组件之间可以更紧密的合作。<br/><small>在不同的平台中，我们也要卿卿我我！</small>
      </>
    ),
  },
  {
    title: (<span>
            <span>基于 </span>
            <a title='Copyright © 2022 JetBrains s.r.o. and the [Kotlin] logo are registered trademarks of JetBrains s.r.o.' href='https://www.jetbrains.com/'>Kotlin</a>
  </span>) ,
    // Svg: require('@site/static/img/Kotlin.svg').default,
    Svg: require('@site/static/img/Kotlin_icon.svg').default,
    svgTitle: 'Copyright © 2022 JetBrains s.r.o. and the [Kotlin] logo are registered trademarks of JetBrains s.r.o.',
    description: (
      <>
        基础代码由 <a href='https://kotlinlang.org/'>Kotlin</a> 完成。提供全异步的API，并尽可能的提供 <a href='https://www.oracle.com/java/'>Java</a> 的友好兼容。
      </>
    ),
  },
];




function Feature({Svg, title, svgTitle, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center" title={svgTitle}>
        <Svg className={`${styles.featureSvg} themedDocusaurus`} role="img" title={svgTitle} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
