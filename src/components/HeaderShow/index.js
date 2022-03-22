import React from "react";
import style  from './styles.module.css';

function PaddingImg({src, alt}) {
    return <img src={src} alt={alt} className={`${style.p_img}`} />
}

export default function HeaderShow({}) {
    const img = require("@site/static/img/logo.png").default

    return (
        <div align="center">
            <img src={img} alt="logo" className={`${style.headLogo}`}/>
            <h2>
                ✨ simply-robot ✨
            </h2>
            <small>
                ~ simbot v3 ~
            </small>
            <br/>
            <span>
<a href="https://github.com/ForteScarlet/simpler-robot" target="_blank">github</a>
</span> &nbsp; | &nbsp; <span>
<a href="https://gitee.com/ForteScarlet/simpler-robot" target="_blank">gitee</a>
</span> <br/>
            <small> &gt; 感谢 <a href="https://github.com/ForteScarlet/CatCode"
                               target="_blank">CatCode</a> 开发团队成员制作的simbot logo &lt; </small>
            <br />
                <small> &gt; 走过路过，不要忘记点亮一颗⭐喔~ &lt; </small>
                <br/>
                <br/>
                <a href="https://github.com/ForteScarlet/simpler-robot/releases/latest"><PaddingImg alt="release"
                                                                                             src="https://img.shields.io/github/v/release/ForteScarlet/simpler-robot"/></a>
                <a href="https://repo1.maven.org/maven2/love/forte/simbot/simbot-api/" target="_blank">
                    <PaddingImg alt="release"
                         src="https://img.shields.io/maven-central/v/love.forte.simbot/simbot-api"/></a>
                <PaddingImg alt="stars" src="https://img.shields.io/github/stars/ForteScarlet/simpler-robot"/>
                <PaddingImg alt="forks" src="https://img.shields.io/github/forks/ForteScarlet/simpler-robot"/>
                <PaddingImg alt="watchers" src="https://img.shields.io/github/watchers/ForteScarlet/simpler-robot"/>
                <PaddingImg alt="repo-size" src="https://img.shields.io/github/repo-size/ForteScarlet/simpler-robot"/>
                <PaddingImg alt="issues"
                     src="https://img.shields.io/github/issues-closed/ForteScarlet/simpler-robot?color=green"/>
                <PaddingImg alt="last-commit" src="https://img.shields.io/github/last-commit/ForteScarlet/simpler-robot"/>
                <PaddingImg alt="search-hit" src="https://img.shields.io/github/search/ForteScarlet/simpler-robot/simbot"/>
                <PaddingImg alt="top-language"
                     src="https://img.shields.io/github/languages/top/ForteScarlet/simpler-robot"/>
                <a href="https://github.com/ForteScarlet/simpler-robot">
                    <PaddingImg alt="copying"
                         src="https://img.shields.io/github/license/ForteScarlet/simpler-robot"/></a>
                <br/>
            <hr />
        </div>

);
}