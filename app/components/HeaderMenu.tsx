"use client";
import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
const HeaderMenu = () => {
    const pathname = usePathname();
    return (
        <ul className="menu menu-horizontal px-1">
            <li><Link className={
                clsx(
                    pathname === "/events" ? "text-purple-400" : ""
                )
            } href="/events">Events</Link></li>
            <li><Link className={
                clsx(
                    pathname === "/profile" ? "text-purple-400" : ""
                )
            } href="/">Profile</Link></li>
        </ul>
    )
}

export default HeaderMenu