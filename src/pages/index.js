import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import BrowserOnly from "@docusaurus/core/lib/client/exports/BrowserOnly";

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


function random(elements) {
    return elements[Math.floor(Math.random() * elements.length)]
}

function r() {
    const arr = [true].concat(Array(100).fill(false))
    return random(arr)
}

const otherValue = [
    '三', '叁', '③', 'Ⅲ', '仨',
    ':3', '4-1', '5-2', '☘️', '👌',
    'v3', '³', '₃', '⑶', '③', '⒊', '㈢', 'ヾ',
    '(❁´◡`❁)', '(≧▽≦*)o', 'ψ(｀∇´)ψ', '(～￣▽￣)～', 'φ(゜▽゜*)', '♪(*^▽^*)', '（*＾-＾*）',
    'q(≧▽≦q)', 'φ(*￣0￣)', '(❁´◡`❁)', '(*^_^*)', '(*^▽^*)', '（*＾-＾*）',
    '(≧∀≦)ゞ', 'o(*￣▽￣*)ブ', '♪(^∇^*)', 'o(*￣︶￣*)o'
]

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    const date = new Date()
    const day = date.getDay()
    // const day = random([0,1,2,3,4,5,6])
    const isAprilFools = (date.getMonth() + 1) === 4 && date.getDate() === 1;
    const isBirthday = (date.getMonth() + 1) === 8 && date.getDate() === 3;
    console.log('Today: ' + date.getMonth() + '-' + date.getDate() + '(' + date + ')')
    console.log('Today: ' + day)

    // styles['heroBannerBg' + day]
    // const day = 0
    // const style = styles['heroBannerBg' + day]
    // const style = bgStyles[day][0]
    // console.log(styles.heroBanner)

    const numberVersionValue = (isAprilFools || isBirthday || r()) ? random(otherValue) : '3'

    const heroBannerBg = styles['heroBannerBg' + day]
    console.log("heroBannerBg: " + heroBannerBg)
    console.log(heroBannerBg)

    return (
        <header className={clsx('hero hero--primary', styles.heroBanner, heroBannerBg)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title} <small>{numberVersionValue}</small></h1>
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
