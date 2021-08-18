import Link from 'next/link'
import Head from 'next/head'
import style from '../styles/Nav.module.scss'

const Nav = () => {
    
    return (
        <>
            <Head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
            </Head>
            <nav className={style.header}>

                <div className={style.menu}>
            
                    <ul>
                        <li>
                            <Link className={style.link_style} href='/'>stores</Link>
                            <Link href='/'>contact us</Link>
                        </li>
                        <li>
                            <Link href='/'>FOXTROT</Link>
                        </li>
                        
                    </ul>
                    
                </div>
            </nav>
        </>
    )
}

export default Nav