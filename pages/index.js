import {useState} from 'react'
import Head from "next/head";
import CoinList from "../components/CoinList";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import Footer from '../components/Footer'

export default function Home({ filteredCoins }) {
  const [search, setSearch] = useState("")

  const allCoins = filteredCoins.filter(coin=>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleChange = e => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  }

  // console.log(filteredCoins);
  return (
    <Layout>
      <div className="coin_app">
        <SearchBar type="text" placeholder="Search" onChange={handleChange} />
        <CoinList filteredCoins={allCoins} />
        <Footer/>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=zar&order=market_cap_desc&per_page=250&page=1&sparkline=false"
  );

  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins,
    },
  };
};
