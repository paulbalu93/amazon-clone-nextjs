import Image from 'next/image';
const { default: Header } = require('../components/Header');

function Checkout() {
	return (
		<div>
			<Header />
			<main className="lg:flex max-width-2xl mx-auto">
				{/* {left} */}
				<div className="flex-grow m-5 shadow-sm">
					<Image src="https://links.papareact.com/ikj" objectFit="contain" width={1020} height={250} />

					<div className="flex flex-col p-5 space-y-10 bg-white">
						<h1 className="text-2xl border-b pb-4"> Your Shopping Basket</h1>
					</div>
				</div>
				<div>
					<h1 className=""> Your Shopping Basket</h1>
				</div>
			</main>
		</div>
	);
}

export default Checkout;
