import styles from "./Coins.module.css";
import Link from 'next/link'

const Coins = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  id,
}) => {
  // console.log(name)
  return (
    <Link href='/coin/[id]' as={`/coin/${id}`}>
    <a>
    <div className={styles.coin_container}>
      <div className={styles.coin_row}>
        <div className={styles.coin}>
          <img src={image} alt={name} className={styles.coin_img} />
          <h1 className={styles.coin_h1}>{name}</h1>
          <p className={styles.coin_symbol}>{symbol}</p>
        </div>
        <div className={styles.coin_data}>
          <p className={styles.coin_price}>R{price}</p>
          <p className={styles.coin_volume}>R{volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className={styles.coin_percemt, styles.red}>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className={styles.coin_percemt, styles.green}>{priceChange.toFixed(2)}%</p>
          )}

          <p className={styles.coin_marketcap}>
            Mkt Cap: R{marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
    </a>
    </Link>
    
  );
};

export default Coins;
