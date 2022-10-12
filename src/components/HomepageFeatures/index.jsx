import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const chicken = 4

function FeatureList() {
    const today = new Date().getDay()
    return [{
        title: '易于使用', // Svg: require('@site/static/img/kfc/Twister.jpeg').default,
        Svg: today === chicken ? function ({className}) {
            return (<a href='/img/kfc/Twister.jpeg' target='_blank' draggable={false}>
                    <img className={className} draggable={false}
                         src={require('@site/static/img/kfc/Twister_s1.jpg').default} alt={`疯狂星期四`}/>
                </a>)
        } : require('@site/static/img/features/3/偷懒.svg').default, description: (<>
                不管你信不信，但是它至少不会过多的拖累你。
            </>),
    }, {
        title: '组件协同', Svg: today === chicken ? function ({className}) {
            return (<a href='/img/kfc/TwisterBox.jpeg' target='_blank' draggable={false}>
                    <img className={className} draggable={false}
                         src={require('@site/static/img/kfc/TwisterBox_s1.jpg').default} alt={`奖励自己`}/>
                </a>)
        } : require('@site/static/img/features/3/看书.svg').default, description: (<>
                不同的组件之间可以更紧密的合作。<br/><small>在不同的平台中，也要卿卿我我！</small>
            </>),
    }, {
        title: (<span>
            <span>基于 </span>
            <a title='Copyright © 2022 JetBrains s.r.o. and the [Kotlin] logo are registered trademarks of JetBrains s.r.o.'
               href='https://kotlinlang.org/'>Kotlin</a>
  </span>), // Svg: require('@site/static/img/Kotlin.svg').default,
        Svg: require('@site/static/img/Kotlin_icon.svg').default,
        svgTitle: 'Copyright © 2022 JetBrains s.r.o. and the [Kotlin] logo are registered trademarks of JetBrains s.r.o.',
        description: (<>
                基础代码由 <a href='https://kotlinlang.org/'>Kotlin</a> 完成。提供全异步的API，并尽可能的提供 <a
                href='https://www.oracle.com/java/'>Java</a> 的友好兼容。
            </>),
    },];
}


function CodeSampleList() {
    const requireImg = (required, alt) => ({className}) => {
        return <img className={className} draggable={false} src={required.default} alt={alt}></img>
    }
    return [
        () => (
            <>
                <CodeShow title={"简单的应用"}
                          Img={requireImg(require('./simbot-application.png'), "simbot-application")}
                          description={<><small>简单而灵活</small></>} />
            </>
        ),

        () => (<CodeShow title={""}
                         Img={requireImg(require('./boot-listener.png'), "boot-listener")}
                         description={<><small>或者...更简单些?</small></>} />),
    ]
}

function Feature({Svg, title, svgTitle, description}) {
    return (<div className={clsx('col col--4')}>
            <div className="text--center" title={svgTitle}>
                <Svg className={`${styles.featureSvg} themedDocusaurus`} role="img" title={svgTitle}/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>);
}

function CodeShow({Img, title, svgTitle, description}) {
    return (<div className={clsx('col')}>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
            </div>
            <div className="text--center" title={svgTitle}>
                <Img className={`${styles.codeShowSvg} themedDocusaurus`} role="img" title={svgTitle}/>
            </div>
            <div className="text--center padding-horiz--md">
                <p>{description}</p>
            </div>
        </div>);
}

export default function HomepageFeatures() {
    return (<>
            <HomepageFeaturesInternal/>

            <CodeSamples/>
        </>)
}

function HomepageFeaturesInternal() {
    return (<section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList().map((props, idx) => (<Feature key={idx} {...props} />))}
                </div>
            </div>
        </section>)
}

function CodeSamples() {
    return (<>
        <section className={styles.features}>
            <div className="container">
                {CodeSampleList().map((CodeSample) => (<div className="row"><CodeSample/></div>))}
            </div>
        </section>
    </>)
}


