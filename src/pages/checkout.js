import { useSession } from 'next-auth/client';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import CheckoutProducts from '../components/CheckoutProducts';
import { selectItems, itemTotal } from '../slices/basketSlice';
const { default: Header } = require('../components/Header');
import Currency from 'react-currency-formatter';

function Checkout() {
	const items = useSelector(selectItems);
	const total = useSelector(itemTotal);
	const [session, loading] = useSession();
	return (
		<div>
			<Header />
			<main className="lg:flex max-width-2xl mx-auto">
				{/* {left} */}
				<div className="flex-grow m-5 shadow-sm">
					<Image src="https://links.papareact.com/ikj" objectFit="contain" width={1020} height={250} />

					<div className="flex flex-col p-5 space-y-10 bg-white">
						<h1 className="text-2xl border-b pb-4">
							{items.length === 0 ? 'Basket is empty' : 'Your Shopping Basket'}
						</h1>

						{items.map((item, i) => (
							<CheckoutProducts
								id={item.id}
								title={item.title}
								price={item.price}
								description={item.description}
								category={item.description}
								image={item.image}
								quantity={item.quantity}
							/>
						))}
					</div>
				</div>
				<div className=" flex flex-col bg-white p-10 shadow-md">
					{items.length > 0 && (
						<>
							<h2 className="whitespace-nowrap">
								Subtotal ({items.length} items):{' '}
								<span className="font-bold">
									<Currency quantity={total} currency="EUR" />
								</span>
							</h2>
							<button
								role="link"
								className={`button mt-2 ${
									!session &&
									'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed '
								}`}
							>
								{!session ? 'Sign in to checkout' : 'Checkout now'}
							</button>
						</>
					)}
				</div>
			</main>
		</div>
	);
}

export default Checkout;
