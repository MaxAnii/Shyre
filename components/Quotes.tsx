import React from "react";

const Quotes = () => {
	return (
		<div className="bg-gray-100 p-10 md:p-16 ">
			<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">//</h2>
			<p className="text-lg text-gray-700 text-center mx-auto md:w-2/4 font-sans">
				Using Eau has been a game-changer for our digital marketing strategy.
				The insights we've gained have allowed us to refine our content and
				significantly boost our search engine rankings.
			</p>
			<div className="flex justify-center mt-3">
				<img
					alt="user profile"
					src={"https://github.com/shadcn.png"}
					className=" h-[60px] w-[60px] rounded-xl border-4  border-stone-100  md:h-[80px] md:w-[80px]"
				/>
			</div>
			<div className="flex justify-center  text-gray-600">Ansar Ul Haq</div>
			<div className="flex justify-center text-gray-400">
				Team lead | senior Dev
			</div>
		</div>
	);
};

export default Quotes;
