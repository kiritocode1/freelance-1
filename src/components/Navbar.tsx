"use client";
import { FC, useState } from "react";
import { Book, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar: FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<nav className="flex flex-wrap justify-between items-center w-full text-xl z-30 sticky top-0 p-3 ">
			<Link
				className="flex items-center anim"
				href="/"
			>
				Thembekile @2024
			</Link>
			<button
				
				className="md:hidden"
				onClick={toggleMenu}
				aria-label="Toggle menu"

			>
				{isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
			</button>
			<div className={`${isMenuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row items-center gap-4 w-full md:w-auto`}>
				<Link
					href="/about"
					className="w-full md:w-auto py-2 md:py-0"
				>
					About
				</Link>
				<Link
					href="/contact"
					className="w-full md:w-auto py-2 md:py-0"
				>
					Contacts
				</Link>
				<Link
					className="flex gap-2 cursor-pointer w-full md:w-auto py-2 md:py-0"
					href="/order"
				>
					<Book className="w-8 h-8 stroke-1" />
					Order Now
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
