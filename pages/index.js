import Head from "next/head";
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from "../styles/Main.module.scss"
import Image from 'next/image'
import testImage from '../public/img/yummy.jpeg'


const endPoint = 'https://api.foxtrotchicago.com/v5/inventory/aisles/224/items?store_id=6'

export async function getServerSideProps() {

  const res = await fetch(endPoint);
  const data = await res.json();

  return{

    props: {

      data

    }
  }
}

const Index = ({ data }) => {
  console.log(data)

  return (

    <div>
      <Head>
        <title>Foxtrot</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/zdz0zoa.css" />
      </Head>
      <main>
        <Nav />
        <div className={styles.container}>
          {/* showcase display image with textwrap */}
          <div className={styles.showcase}>
              <div className={styles.img_wrap}>
                <Image src={testImage} height='400' width='700' />
              </div>
              <div className={styles.text_wrap}>
                <h1>Discover Aisle</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus condimentum pellentesque. Vestibulum facilisis augue in suscipit maximus.</p>
              </div>
          </div>

          {/* product name with imgage grid below */}
          <div className={styles.section}>
            <h1>{data.aisle.groups[3].name}</h1>

            <div className={styles.product_grid}>

              <div className={styles.card}>
                <Image src={data.aisle.groups[3].products[2].assets[0].url} width='300' height='250' />
                <h1>{data.aisle.groups[3].products[2].title}</h1>
                <h2>${data.aisle.groups[3].products[2].unitPrice}</h2>
              </div>
              <div className={styles.card}>
                <Image src={data.aisle.groups[3].products[3].assets[0].url} width='300' height='250' />
                <h1>{data.aisle.groups[3].products[3].title}</h1>
                <h2>${data.aisle.groups[3].products[3].unitPrice}</h2>
              </div>
              <div className={styles.card}>
                <Image src={data.aisle.groups[3].products[4].assets[0].url} width='300' height='250' />
                <h1>{data.aisle.groups[3].products[4].title}</h1>
                <h2>${data.aisle.groups[3].products[4].unitPrice}</h2>
              </div>
              <div className={styles.card}>
                <Image src={data.aisle.groups[3].products[5].assets[0].url} width='300' height='250' />
                <h1>{data.aisle.groups[3].products[5].title}</h1>
                <h2>${data.aisle.groups[3].products[5].unitPrice}</h2>
              </div>
              <div className={styles.card}>
                <Image src={data.aisle.groups[3].products[6].assets[0].url} width='300' height='250' />
                <h1>{data.aisle.groups[3].products[6].title}</h1>
                <h2>${data.aisle.groups[3].products[6].unitPrice}</h2>
              </div>
              <div className={styles.card}>
                <Image src={data.aisle.groups[3].products[7].assets[0].url} width='300' height='250' />
                <h1>{data.aisle.groups[3].products[7].title}</h1>
                <h2>${data.aisle.groups[3].products[7].unitPrice}</h2>
              </div>
              <div className={styles.card}>
                <Image src={data.aisle.groups[3].products[8].assets[0].url} width='300' height='250' />
                <h1>{data.aisle.groups[3].products[8].title}</h1>
                <h2>${data.aisle.groups[3].products[8].unitPrice}</h2>
              </div>
              <div className={styles.card}>
                <Image src={data.aisle.groups[3].products[9].assets[0].url} width='300' height='250' />
                <h1>{data.aisle.groups[3].products[9].title}</h1>
                <h2>${data.aisle.groups[3].products[9].unitPrice}</h2>
              </div>
            </div>
          </div>


          {/* product name with imgage grid below */}
          <div className={styles.section}>
            <h1>{data.aisle.groups[4].name}</h1>

            <div className={styles.product_grid}>

              <div className={styles.card}>
                <Image src={data.aisle.groups[4].products[2].assets[0].url} width='300' height='250' />
                <h1>{data.aisle.groups[4].products[2].title}</h1>
                <h2>${data.aisle.groups[4].products[2].unitPrice}</h2>
              </div>
              <div className={styles.card}>
                <Image src={data.aisle.groups[4].products[3].assets[0].url} width='300' height='250' />
                <h1>{data.aisle.groups[4].products[3].title}</h1>
                <h2>${data.aisle.groups[4].products[3].unitPrice}</h2>
              </div>
              <div className={styles.card}>
                <Image src={data.aisle.groups[4].products[4].assets[0].url} width='300' height='250' />
                <h1>{data.aisle.groups[4].products[4].title}</h1>
                <h2>${data.aisle.groups[4].products[4].unitPrice}</h2>
              </div>
              <div className={styles.card}>
                <Image src={data.aisle.groups[4].products[11].assets[0].url} width='300' height='250' />
                <h1>{data.aisle.groups[4].products[11].title}</h1>
                <h2>${data.aisle.groups[4].products[11].unitPrice}</h2>
              </div>
              <div className={styles.card}>
                <Image src={data.aisle.groups[4].products[6].assets[0].url} width='300' height='250' />
                <h1>{data.aisle.groups[4].products[6].title}</h1>
                <h2>${data.aisle.groups[4].products[6].unitPrice}</h2>
              </div>
              <div className={styles.card}>
                <Image src={data.aisle.groups[4].products[7].assets[0].url} width='300' height='250' />
                <h1>{data.aisle.groups[4].products[7].title}</h1>
                <h2>${data.aisle.groups[4].products[7].unitPrice}</h2>
              </div>
              <div className={styles.card}>
                <Image src={data.aisle.groups[4].products[8].assets[0].url} width='300' height='250' />
                <h1>{data.aisle.groups[4].products[8].title}</h1>
                <h2>${data.aisle.groups[4].products[8].unitPrice}</h2>
              </div>
              <div className={styles.card}>
                <Image src={data.aisle.groups[4].products[9].assets[0].url} width='300' height='250' />
                <h1>{data.aisle.groups[4].products[9].title}</h1>
                <h2>${data.aisle.groups[4].products[9].unitPrice}</h2>
              </div>
            </div>
          </div>
        </div>

        <Footer />
        
        

      </main>
    </div>
  );
};

export default Index;
