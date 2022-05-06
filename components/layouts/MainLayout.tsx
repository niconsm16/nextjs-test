import Head from 'next/head'
import NavBar from '../NavBar'
import styles from './MainLayout.module.css'
import { FC } from 'react'

interface P {
    children: React.ReactNode
}

export const MainLayout: FC<P> = ({ children }) => {
    return (
        <div className={styles.container}>

            <Head>
                <title>Mi paginilla</title>
                <meta name="description" content="Este es mi Home Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar />

            <main className={styles.main}>

                {children}

            </main>
        </div>
    )
}
