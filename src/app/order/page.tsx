"use client";
import { FC } from 'react'
import Link from "next/link";
import Image from "next/image";

function EbookOrderWide() {
	return (
		<div className="w-full max-w-6xl mx-auto p-6">
			<div className="flex flex-col md:flex-row gap-8 items-center">
				<div className="w-full md:w-1/3 aspect-[3/4] relative">
					<Image
						src="/t-images/9.png"
						alt="Ebook Cover"
						layout="fill"
						objectFit="cover"
						className="rounded-lg shadow-md"
					/>
				</div>
				<div className="w-full md:w-2/3 space-y-6">
					<h1 className="text-3xl font-bold">The Ultimate Guide to Minimalism</h1>
					<p className=" text-lg">
						Discover the secrets to living a clutter-free, purposeful life. This comprehensive ebook will teach you how to simplify your surroundings and focus on what truly matters.
					</p>
					<ul className="list-disc list-inside pace-y-2">
						<li>Learn effective decluttering techniques</li>
						<li>Develop a minimalist mindset</li>
						<li>Create a more organized and peaceful living space</li>
						<li>Improve your focus and productivity</li>
					</ul>
					<div className="flex items-center justify-between">
						<span className="text-2xl font-semibold">$10.99</span>
            <Link 
              href="/order"
							className="px-6 py-3  text-white font-semibold rounded-lg  text-4xl  "
							
            >

							Order EBook Now
						</Link> 
					</div>
				</div>
			</div>
		</div>
	);
}









const page: FC= () => {
  return <div className='min-h-screen'>
    <h1 className='text-center text-4xl type'>Order Now: </h1>

    <EbookOrderWide/>
  </div>
}

export default page