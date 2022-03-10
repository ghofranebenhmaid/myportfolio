import React from "react"
import Link from "next/link"
import { withRouter } from "next/router"
// import { TabHead, TabContainer, TabBody, Tab } from "../styles"
// import styles from '../styles/Tabs.module.scss';


const Tabs = ({ router }) =>
{
    const {
        query: { tab }
    } = router

    const isTabOne = tab === "1" || tab == null
    const isTabTwo = tab === "2"
    return (
        <div className='container'>
            <div>
                <div selected={ isTabOne }>
                    <Link href={ { pathname: "/projects", query: 'logos' } }>
                        <a>Logos</a>
                    </Link>
                </div>
                <div selected={ isTabTwo }>
                    <Link href={ { pathname: "/projects", query: { tab: "2" } } }>
                        <a>Tab 2</a>
                    </Link>
                </div>
            </div>
            <div className="content">
                { isTabOne && <React.Fragment>This is Logos content</React.Fragment> }
                { isTabTwo && <React.Fragment>This is tab two content</React.Fragment> }
            </div>
        </div>
    )
}

export default withRouter(Tabs)