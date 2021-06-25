import Image from 'next/image';
function Header() {
	return (
		<header>
			<div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 sm:flex-grow-0">
				<div className="mt-2 ">
					<Image
						src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
						width={150}
						height={40}
						objectFit="contain"
						className="cursor-pointer"
					/>
				</div>
			</div>

			<div></div>
		</header>
	);
}

export default Header;
