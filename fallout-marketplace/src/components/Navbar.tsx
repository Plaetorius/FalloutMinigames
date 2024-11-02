'use client';

import { createContext, useContext, useState, ReactNode } from "react";

interface SidebarContextType {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export default function Sidebar() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<SidebarContext.Provider value={{ isOpen, setIsOpen }}>
			<SidebarNav />
		</SidebarContext.Provider>
	)
}

function useSidebar() {
	const context = useContext(SidebarContext);
	if (!context) {
		throw new Error("Broken context for Sidebar");
	}
	return context;
}

function SidebarNav() {
	const { isOpen, setIsOpen } = useSidebar();

	return (
		<div className="absolute">
			<p>Home</p>
			<button onClick={() => setIsOpen(!isOpen)}>
				Toggle me!
			</button>
			{isOpen && <Subnav />}
		</div>
	)
}


function Subnav() {
	return (
		<div>
			<p>Subnav Item</p>
		</div>
	)
}