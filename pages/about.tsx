import Link from 'next/link'
import React, { PureComponent } from 'react'

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
    const css = {
        r: 255,
        g: 0,
        b: 0,
        a: 0.3
    }
    return (
        <>
            <div style = {{backgroundColor: `rgba(${css.r},${css.g},${css.b},${css.a})` }}>Hello</div>
            <Link href={'/'}> 
                <a>GO Home</a>
            </Link>
        </>
    )
}
