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
		<div className="flex justify-center">
			<div className=" bg-gray-100 p-10 md:p-16 ">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
					Features
				</h2>
				<div className="space-y-12">
					<div className="flex flex-wrap justify-center gap-10 md:flex-row items-center  md:space-y-0 ">
						{features.map((feature, index) => {
							return (
								<div key={index}>
									<Image
										src={feature.imgSrc}
										alt="feat image"
										className="w- rounded-lg shadow-lg "
										width={500}
										height={200}
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
