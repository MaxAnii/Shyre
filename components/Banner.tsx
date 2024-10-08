import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import banner from "../Public/images/banner.png";
import GetAccessButton from "./GetAccessButton";

const Banner = () => {
	return (
		<div className="background  flex justify-center ">
			<div className=" border-2 rounded-2xl bg-white	border-dotted md:w-[60vw] pt-16 pb-10 mb-5 mt-10 shadow-xl">
				<h1 className="text-center text-4xl lg:text-5xl mb-6 mt-16 p-4 font-semibold leading-tight">
					Drive More Traffic To Your YouTube Videos Via WhatsApp
					<span className="inline-block bg-slate-200 text-5xl rounded-3xl p-3 ml-3 shadow-2xl align-middle">
						🚀
					</span>
				</h1>

				<div className=" mt-3 text-gray-400	text-center text-lg ">
					Discover highly targeted keyword suggestions based on user intent and
					current market trends.
				</div>
				<div className="	flex justify-center w-full">
					<GetAccessButton></GetAccessButton>
				</div>
				<div className="flex justify-center mt-6 items-center gap-3">
					<div className="flex">
						<Avatar className="-ml-2 first:ml-0 border-2 border-white">
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<Avatar className="-ml-4 border-2 border-white">
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<Avatar className="-ml-4 border-2 border-white">
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<Avatar className="-ml-4 border-2 border-white">
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<Avatar className="-ml-4 border-2 border-white">
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</div>
					<div className="text-gray-400">500+ people wait for launch</div>
				</div>

				<div className=" rounded-2xl md:mr-5 mx-3 md:mx-0  flex justify-center mb-5 float-animation mt-11">
					<div className="shadow-2xl border-8 border-zinc-200 rounded-2xl">
						<div className="border-[5px] border-black  rounded-lg p-2">
							<Image
								src={banner}
								alt="banner image"
								width={700}
								height={500}
							></Image>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
