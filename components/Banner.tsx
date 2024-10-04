import Image from "next/image";
import banner from "@/public/images/banner.png";
import GetAccessButton from "./GetAccessButton";
const Banner = () => {
	return (
		<div className="md:flex w-full  md:h-[80vh] items-center justify-center hero-section pb-5 mt-4">
			<div className="flex  w-full items-center justify-center p-5 ">
				<div className="text-center">
					<h1 className="text-3xl font-bold lg:text-5xl text-wrap mb-4">
						Drive more traffic to your videos with the help of WhatsApp.
					</h1>
					<div className="hidden md:block">
						<GetAccessButton></GetAccessButton>
					</div>
				</div>
			</div>
			<div className="shadow-2xl border-spacing-4 rounded-3xl md:mr-5 mx-3 md:mx-0 md:w-full flex justify-center mb-5 float-animation">
				<div>
					<Image src={banner} alt="banner image"></Image>
				</div>
			</div>
			<div className=" md:hidden flex justify-center w-full">
				<GetAccessButton></GetAccessButton>
			</div>
		</div>
	);
};

export default Banner;
