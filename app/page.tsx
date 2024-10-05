import React from "react";
import Banner from "@/components/Banner";
import EarlyAccess from "@/components/EarlyAccess";
import Features from "@/components/Features";
import WhyUs from "@/components/WhyUs";
import Quotes from "@/components/Quotes";
import FAQ from "@/components/FAQ";

export default function Home() {
	return (
		<>
			<Banner></Banner>
			<Features></Features>
			<WhyUs></WhyUs>
			<Quotes></Quotes>
			<FAQ></FAQ>
			<EarlyAccess></EarlyAccess>
		</>
	);
}
