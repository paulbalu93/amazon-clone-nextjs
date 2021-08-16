import { StarIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { useState } from 'react';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

function CheckoutProducts({ id, title, price, rating, description, category, image, quantity }) {
	const dispatch = useDispatch();
	// const [quantity, setQuantity] = useState(quantity);
	const addItemToBasket = () => {
		const product = {
			id,
			title,
			price,
			description,
			category,
			image,
			quantity,
		};
		// setQuantity(quantity + 1);
		dispatch(addToBasket(product));
	};

	const removeItemFromBasket = () => {
		dispatch(removeFromBasket({ id }));
	};
	return (
		<div className="grid grid-cols-5">
			<Image src={image} height={200} width={200} objectFit="contain" />
			<div className="col-span-3 mx-5">
				<p className=""> {title}</p>
				<div className="flex">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<StarIcon key={i} className="h-5 text-yellow-400" />
						))}
				</div>
				<p className="text-xs mt-2">{description}</p>
				<Currency quantity={price} currency="EUR" />
			</div>
			<div className="flex flex-col space-y-2 my-auto justify-self-end">
				<button className="button" onClick={addItemToBasket}>
					Add to Basket
				</button>
				<button onClick={removeItemFromBasket} className="button">
					{' '}
					Remove from Basket{' '}
				</button>
			</div>
		</div>
	);
}

export default CheckoutProducts;
