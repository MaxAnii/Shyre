import React from "react";
import Image from "next/image";
import feat1 from "@/Public/images/feat1.png";
import feat2 from "@/Public/images/feat2.png";
import feat3 from "@/Public/images/feat3.png";
const features = [
	{
		title: "Customizable notification templates",
		description:
			"Create stunning notifications that reflect your brand. Choose your layout, add personal touches, and engage your audience with every message.",
		imgSrc: feat1,
	},
	{
		title: "User opt-in and management",
		description:
			"Easily manage your audience with a seamless opt-in process. Viewers can quickly subscribe to receive updates, ensuring your notifications reach those who matter most.",
		imgSrc: feat2,
	},
	{
		title: "Instant real-time notifications",
		description:
			"Notify your audience the moment you publish a new video. Our service guarantees that your subscribers are always in the loop, driving immediate engagement.",
		imgSrc: feat3,
	},
];

const Features = () => {
	return (
		<div className="bg-gray-100 p-10 md:p-16">
			<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
				Features
			</h2>
			<div className="space-y-12">
				{features.map((feature, index) => {
					let order = "";
					if (index % 2 !== 0) order = "md:order-2";
					return (
						<div
							key={index}
							className="flex flex-col gap-3 md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8"
						>
							<div className={` ${order} `}>
								<Image
									src={feature.imgSrc}
									alt={feature.title}
									className="w-full rounded-lg shadow-lg "
									width={900}
									height={200}
								/>
							</div>
							<div className="">
								<h3 className="text-3xl font-semibold mb-4">{feature.title}</h3>
								<p className="text-gray-700 text-xl">{feature.description}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Features;
