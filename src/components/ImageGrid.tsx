"use client";
import { InView } from "@/components/InView";
import { motion } from "motion/react";

export function InViewImagesGrid() {
	return (
		<div className="h-full w-full overflow-auto">
			
			<div className="flex  items-end justify-center  ">
				<InView
					viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
					variants={{
						hidden: {
							opacity: 0,
						},
						visible: {
							opacity: 1,
							transition: {
								staggerChildren: 0.09,
							},
						},
					}}
				>
					<div className="columns-2 gap-4 px-8 sm:columns-3">
						{[
							"/t-images/1.png",
							"/t-images/2.png",
							"/t-images/3.png",
							"/t-images/4.png",
							"/t-images/5.png",
							"/t-images/6.png",
							"/t-images/7.png",
							"/t-images/8.png",
							"/t-images/9.png",
							"/t-images/10.png",


						].map((imgSrc, index) => {
							return (
								<motion.div
									variants={{
										hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
										visible: {
											opacity: 1,
											scale: 1,
											filter: "blur(0px)",
										},
									}}
									key={index}
									className="mb-4"
								>
									<img
										src={imgSrc}
										alt={`Image placeholder from cosmos.so, index:${index}`}
										className="size-full rounded-xl object-contain "
									/>
								</motion.div>
							);
						})}
					</div>
				</InView>
			</div>
		</div>
	);
}
