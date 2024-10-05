import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { RiMailSendLine } from "react-icons/ri";
const GetAccessButton = () => {
	return (
		<div className="text-3xl mt-5">
			<Link href="#early-access">
				<Button size="lg" className="text-base">
					<RiMailSendLine className="mr-2" />
					Get Access
				</Button>
			</Link>
		</div>
	);
};

export default GetAccessButton;
