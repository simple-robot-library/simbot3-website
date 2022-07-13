import React from 'react';

export default function SimbotUtteranc() {
    function componentDidMount() {
        let script = document.createElement('script');
        let anchor = document.getElementById('inject-comments-for-uterances');
        script.setAttribute('src', 'https://utteranc.es/client.js');
        script.setAttribute('crossorigin', 'anonymous');
        script.setAttribute('async', 'true');
        script.setAttribute('repo', 'simple-robot-library/simbot3-website');
        script.setAttribute('issue-term', 'pathname');
        script.setAttribute('issue-term', 'pathname');
        script.setAttribute('label', '💬评论');
        anchor.appendChild(script);
    }

    React.useEffect(() => {
        componentDidMount();
    }, []);

    return <div id="inject-comments-for-uterances" />;
}
