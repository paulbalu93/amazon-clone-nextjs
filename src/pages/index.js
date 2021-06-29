import Head from 'next/head';
import Banner from '../components/Banner';
import Feed from '../components/Feed';
import Header from '../components/Header';

export default function Home({ products }) {
	return (
		<div className="bg-gray-100">
			<Head>
				<title>Amazon 2.0</title>
			</Head>

			<Header />
			<main className="max-w-screen-2xl mx-auto">
				{/* {Banner} */}
				<Banner />
				{/* {Feed} */}
				<Feed products={products} />
			</main>
		</div>
	);
}

export async function getServerSideProps(context) {
	const products = await fetch('https://fakestoreapi.com/products').then((res) => res.json());

	return {
		props: {
			products,
		},
	};
}
