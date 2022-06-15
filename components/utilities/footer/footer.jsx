import React from 'react'
import Image from "next/image";

export default function Footer(props) {
    return (
        <footer className="p-4 bg-ghdata-section-gradient flex md:items-center justify-between md:p-6">
            <h1>LOGO</h1>
            <span>GHData &copy; {new Date().getFullYear()}</span>
        </footer>
    )
}
