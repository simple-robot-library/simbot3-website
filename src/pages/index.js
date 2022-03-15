import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import BrowserOnly from "@docusaurus/core/lib/client/exports/BrowserOnly";
// import Baidu from '@site/static/baiduStatistic.js'

// console.log(Baidu)

// Expression statement is not assignment or call
const documentButtonTexts = [
    '⏱️ 从文档上手',
    '📚 开始阅读文档',
    '👉 通过文档开始学习',
    '🌸 万花丛中过 🌸',
    '👀 随便逛逛?'
]

const taglines = [
    '欢迎，我的朋友',
    '别来无恙',
    '这里是simbot文档专享乐园',
    '等你好久了',
    '最近过的怎么样?',
    '有没有想我呢?',
    '有没有好好喝水?',
    'Simple Robot, 还是simple-robot?',
]


function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{random(taglines)}</p>
                    {/*<p className="hero__subtitle">{siteConfig.tagline}</p>*/}
                    <div className={styles.buttons}>
                        <Link
                            className="button button--secondary button--lg"
                            to="/docs/intro">
                            {random(documentButtonTexts)}
                        </Link>
                    </div>
                </div>
            </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`欢迎! ${siteConfig.title}`}
            // title={`Hello from ${siteConfig.title}`}
            description="Simple Robot (simbot) website by Forte Scarlet">
            <BrowserOnly>
                {() => {
                    require('@site/static/baiduStatistic.js')
                    return <div>Hello</div>
                }
                }
            </BrowserOnly>
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}

function random(elements) {
    return elements[Math.floor(Math.random() * elements.length)]
}