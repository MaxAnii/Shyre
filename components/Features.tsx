import React from "react";
import Image from "next/image";
import feat1 from "../Public/images/feat1.png";
import feat2 from "../Public/images/feat2.png";
import feat3 from "../Public/images/feat3.png";
import feat4 from "../Public/images/feat4.png";

const features = [
	{
		imgSrc: feat1,
	},
	{
		imgSrc: feat2,
	},
	{
		imgSrc: feat3,
	},
	{
		imgSrc: feat4,
	},
];

const Features = () => {
	return (
		<div className="">
			<div className=" bg-gray-100 py-10 p-5 md:py-16 ">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
					Features
				</h2>
				<p className="text-xl md:text-2xl font-bold text-center mb-12 ">
					<span className="text-gray-400 mr-2">Core features</span>
					to elevate your YOUTUBE game .
				</p>
				<div className="">
					<div className="flex flex-wrap justify-center gap-x-5 gap-y-10  md:flex- items-center">
						{features.map((feature, index) => {
							return (
								<div key={index} className="md:w-[30vw]">
									<Image
										src={feature.imgSrc}
										alt="feat image"
										className="w- rounded-lg shadow-lg "
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
