const Banner = () => {
	return (
		<section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
			<div className="container mx-auto flex justify-around h-full">
				{/* text */}
				<div className="flex flex-col justify-center">
					{/* pretitle */}
					<div className="font-semibold flex items-center uppercase">
						<div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trand
					</div>
					{/* title */}
					<h1 className="text-[70px] leading-[1.1] font-light mb-4">
            AUTUMN SALE STYLISH <br />
						<span className="font-semibold">Womens</span>
					</h1>
					<div className="self-start uppercase font-semibold border-b-2 border-primary">
            Discovery More
					</div>
				</div>
				{/* image */}
				<div className="hidden lg:block">
					<img src={'/woman_hero.png'} alt="woman" />
				</div>
			</div>
		</section>
	);
};

export default Banner;
