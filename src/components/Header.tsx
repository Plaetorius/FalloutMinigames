'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import StarburstImage from "@/components/StarburstImage";

export default function Header() {
	const pathname = usePathname();
	
	const isActive = (path: string) => pathname ? pathname.split("/")[1] === path : false;
	console.log(`Pathname: ${pathname}, IsActive: ${isActive("/calculus")}`);
	
	
	return (
		<header className="sticky top-0 z-50 flex justify-between items-center p-4 h-28 bg-pbrown text-white">
			<div className="flex w-24">
				<StarburstImage color="pred" image_path="/icons/mininuke.png" image_alt="Mininuke Icon"/>
			</div>
			<nav className="text-lg">
				<ul className="flex space-x-4 text-4xl font-advertising">
					<li>
						<Link href="/" className={`${isActive("") ? "text-pyellow" : "text-phyellow hover:text-pyellow"} flex transition-transform transform ease-in-out hover:scale-110`}>
							Home
						</Link>
					</li>
					<li>
						<Link href="/games/calculus" className={`${isActive("games") ? "text-pyellow" : "text-phyellow hover:text-pyellow"} flex transition-transform ease-in-out transform hover:scale-110`}>
							Games
						</Link>
					</li>
				</ul>
			</nav>
			<div className="w-24">
			 	{/* TODO ProfilePicture Component */}
			</div>
		</header>
	);
}