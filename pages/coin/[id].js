import Layout from '../../components/Layout'
import styles from "./Coin.module.css";


const Coin = ({coin}) => {
    return (
        <Layout>
        <div className={styles.coin_page}>
            <div className={styles.coin_container}>
            <img src={coin.image.small} alt={coin.name} className={styles.coin_image}/>
            <h1 className={styles.coin_name}> {coin.name}</h1>
             {/* <p className={styles.coin_ticker}> {coin.symbol}</p> */}
            <p className={styles.coin_current}> R{coin.market_data.current_price.zar}</p>
              <p className={styles.coin_description}> {coin.description.en}</p>
              <p className={styles.coin_description}> {coin.country_origin}</p>

        </div>
        </div>
    </Layout>
    )
}

export default Coin


export async function getServerSideProps(context){
    const {id} = context.query

    const res = await fetch (`https://api.coingecko.com/api/v3/coins/${id}`)


    const data = await res.json()


    return {
        props: {
            coin: data
        }
    }
}
