import React from 'react'
import Link from 'next/link'
import HeaderMenu from './HeaderMenu';
const Header = () => {
    return (
        <nav className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href="/">Events</Link></li>
                        <li><a >Profile</a></li>
                    </ul>
                </div>
                <Link href="/" className="btn btn-ghost text-xl">Logo</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <HeaderMenu />
            </div>
            <div className="navbar-end">
                <button className="btn">Connect Wallet</button>
            </div>
        </nav>
    )
}

export default Header