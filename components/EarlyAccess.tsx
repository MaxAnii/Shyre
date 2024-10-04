"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";

const EarlyAccess = () => {
	const [email, setEmail] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const response = await fetch("{base_url}/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email }),
		});

		if (response.ok) {
			alert("Thank you for registering for early access!");
			setEmail("");
		} else {
			alert("Failed to register. Please try again.");
		}
	};

	return (
		<div id="early-access" className="bg-gray-100 p-10 md:p-16">
			<h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
				Get Early Access
			</h2>
			<p className="text-lg text-center mb-8">
				Excited to enhance your YouTube channel? Drop your email below for early
				access and exclusive updates!
			</p>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col items-center space-y-4 w-full md:w-1/2 mx-auto"
			>
				<input
					type="email"
					placeholder="Enter your email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					className="w-full px-4 py-2 rounded-md text-gray-800"
				/>
				<Button type="submit" className="bg-black">
					Submit
				</Button>
			</form>
			<p className="text-center mt-8">
				Stay tuned for a powerful new way to engage your audience!
			</p>
		</div>
	);
};

export default EarlyAccess;
