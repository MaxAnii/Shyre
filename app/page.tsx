import React from "react";
import Banner from "@/components/Banner";
import EarlyAccess from "@/components/EarlyAccess";
import Features from "@/components/Features";
import WhyUs from "@/components/WhyUs";

export default function Home() {
	return (
		<>
			<Banner></Banner>
			<Features></Features>
			<WhyUs></WhyUs>
			<EarlyAccess></EarlyAccess>
		</>
	);
}
