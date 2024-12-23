import { FC } from 'react'
import MagneticFramer from './Magnet'

import {Book  } from 'lucide-react'
import Link from 'next/link';





const Navbar: FC= () => {
    return (
		<div className="flex justify-between items-center w-full text-xl  z-30  sticky top-0  p-3">
			<Link className="flex items-center anim" href={"/"}>Thembekile @2024</Link>
			<div className="flex items-center gap-4">
				<MagneticFramer>
					<Link href="/about">About</Link>
				</MagneticFramer>
				<MagneticFramer>
					<Link href="/contact">Contacts</Link>
				</MagneticFramer>
				<MagneticFramer>
					<Link className="flex gap-2 cursor-pointer " href="/order">
						<Book className="w-8 h-8 stroke-1" />
						Order Now
					</Link>
				</MagneticFramer>
			</div>
		</div>
	);
}

export default Navbar