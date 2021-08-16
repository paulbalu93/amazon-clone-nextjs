import Image from 'next/image';
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';

function Product({ id, title, price, description, category, image }) {
	const [rating] = useState(4);
	const [quantity, setQuantity] = useState(0);
	const dispatch = useDispatch();
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
		setQuantity(quantity + 1);
		dispatch(addToBasket(product));
	};
	return (
		<div className="relative flex flex-col m-5 bg-white z-30 p-10">
			<p className="absolute top-2 right-2 text-xs italic text-gray-400 "> {category}</p>
			<Image src={image} height={200} width={200} objectFit="contain" />
			<h4> {title}</h4>

			<div className="flex">
				{Array(rating)
					.fill()
					.map((_, i) => (
						<StarIcon className="h-5" />
					))}
			</div>
			<p className="text-xs mt-2 mb-2 line-clamp-2"> {description} </p>
			<div className="mb-5">
				<Currency quantity={price} currency="EUR" />
			</div>
			<button onClick={addItemToBasket} className="mt-auto button">
				{' '}
				Add to basket
			</button>
		</div>
	);
}
export default Product;
