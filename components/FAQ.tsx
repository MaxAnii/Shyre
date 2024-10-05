import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
	const faq = [
		{
			question: "Is it accessible?",
			answers:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate molestiae nisi quasi laborum aliquam consequuntur consequatur quisquam rem. Obcaecati doloribus in nemo iusto minus corporis incidunt hic nobis! At, libero?",
		},
		{
			question: "Is it accessible?",
			answers:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate molestiae nisi quasi laborum aliquam consequuntur consequatur quisquam rem. Obcaecati doloribus in nemo iusto minus corporis incidunt hic nobis! At, libero?",
		},
		{
			question: "Is it accessible?",
			answers:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate molestiae nisi quasi laborum aliquam consequuntur consequatur quisquam rem. Obcaecati doloribus in nemo iusto minus corporis incidunt hic nobis! At, libero?",
		},
		{
			question: "Is it accessible?",
			answers:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate molestiae nisi quasi laborum aliquam consequuntur consequatur quisquam rem. Obcaecati doloribus in nemo iusto minus corporis incidunt hic nobis! At, libero?",
		},
	];
	return (
		<div className=" p-10 md:p-16">
			<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
				Your questions, answered.
			</h2>
			{faq.map((item, index) => (
				<div className="flex justify-center text-wrap  mb-4" key={index}>
					<Accordion
						type="single"
						collapsible
						className="bg-gray-200  md:w-[50%] w-[80%] hover:bg-black hover:text-white px-5 rounded-xl "
					>
						<AccordionItem value="item-1">
							<AccordionTrigger>{item.question}</AccordionTrigger>
							<AccordionContent>{item.answers}</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			))}
		</div>
	);
};

export default FAQ;
