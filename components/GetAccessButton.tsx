import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const GetAccessButton = () => {
	return (
		<div className="text-3xl mt-5">
			<Link href="#early-access">
				<Button size="lg" className="text-base">
					Get Access
				</Button>
			</Link>
		</div>
	);
};

export default GetAccessButton;
