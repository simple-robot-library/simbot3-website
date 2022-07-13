import React from 'react';
import Footer from '@theme-original/Footer';
import SimbotUtteranc from "../../components/SimbotUtteranc";

export default function FooterWrapper(props) {
    const pathname = location.pathname
    let footers = []

    // 只在 /doc 或 /blog 下，且不能完全等于
    if (
        (pathname.startsWith('/blog/') && pathname.length > 6)
        || (pathname.startsWith('/docs/') && pathname.length > 6)
    ) {
        footers.push(<SimbotUtteranc/>)
    }

    return (
        <>
            {footers}
            <Footer {...props}/>
        </>
    );
}
