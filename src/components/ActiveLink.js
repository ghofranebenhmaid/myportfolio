import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'



const NavLink = ({ href, children, activeClassName }) =>
{
    const router = useRouter()
    const Reload = () =>
    {
        router.reload();
    }
    let className = children.props.className || ''
    if (router.pathname === href) {
        className = `${ className } ${ activeClassName }`
    }

    return <Link href={ href } onClick={ Reload } >{ React.cloneElement(children, { className }) }</Link>
}



export default NavLink