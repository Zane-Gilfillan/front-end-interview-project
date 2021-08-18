import Head from 'next/head'
import styles from '../styles/Footer.module.scss'

const Footer = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
            </Head>
            <div className={styles.footer}>
                <div className={styles.icon_grid}>
                    <i className="fab fa-twitter fa-2x"></i>
                    <i className="fab fa-instagram fa-2x"></i>
                    <i className="fab fa-facebook fa-2x"></i>
                    <i className="far fa-envelope fa-2x"></i>
                    <i className="fas fa-link fa-2x"></i>
                </div>
                <div className={styles.text_wrap}>
                    <h1>terms of service</h1>
                    <h1>privacy</h1>
                </div>
            </div>
            
            
        </>
    )
}

export default Footer
