import React from 'react'
import { Drawer, Navbar } from 'components'

export default function Layout({ children }) {
    return (
        <div className='layout'>
            <section className='layout__navbar'>
                <Navbar />
            </section>
            <section className='layout__content'>{children}</section>
        </div>
    )
}
