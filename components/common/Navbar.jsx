import Link from 'next/link'
import React from 'react'
import { MdMenu } from "react-icons/md";

export default function Navbar() {
    return (
        <header className="navbar bg-base-100">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl">Logo</Link>
            </div>
            <div className="flex-none invisible lg:visible">
                <ul className="menu menu-horizontal p-0">
                    <li><Link href="/">Anasayfa</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="flex-none visible lg:invisible">
                <MdMenu/>
            </div>
        </header>
    )
}
