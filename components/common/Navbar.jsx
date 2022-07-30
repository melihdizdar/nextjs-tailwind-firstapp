import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div class="navbar bg-base-100">
        <div class="flex-1">
            <a href="/" class="btn btn-ghost normal-case text-xl">Anasayfa</a>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal p-0">
                <li><Link href="/">Anasayfa</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
        </div>
    )
}
