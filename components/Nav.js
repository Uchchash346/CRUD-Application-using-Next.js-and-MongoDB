import Link from 'next/link';
import React from 'react'
import styles from '../styles/Nav.module.css';


export default function Nav() {
    return (
        <>
            <h1 className={styles.headerText}>Next CRUD</h1>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/add-post">
                            <a>Add Post</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
