"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
	{ href: "#overview", label: "За Нас" },
	{ href: "#highlight", label: "Награди" },
	{ href: "#timeline", label: "Програма" },
	{ href: "#eligibility", label: "Участие" },
	{ href: "#criteria", label: "Критерии" },
	{ href: "#organizers", label: "Организатори" },
	{ href: "#requirements", label: "Задача" },
];

export function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
			<nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
				<Link href="/" className="font-serif text-xl font-medium tracking-tight text-foreground">
					Млад Инвеститор
				</Link>

				<div className="hidden items-center gap-10 md:flex">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="text-sm text-muted-foreground transition-colors hover:text-foreground"
						>
							{link.label}
						</Link>
					))}
				</div>

				<div className="hidden md:block">
					<Button className="gap-2 rounded-full bg-[lab(9.53159%_.968002_3.74648)] px-6 hover:bg-[lab(9.53159%_.968002_3.74648)]/90">
						Искам да участвам
						<ArrowRight className="size-4" />
					</Button>
				</div>

				<button type="button" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
					{mobileMenuOpen ? (
						<X className="size-6 text-foreground" />
					) : (
						<Menu className="size-6 text-foreground" />
					)}
				</button>
			</nav>

			{mobileMenuOpen && (
				<div className="border-t bg-background md:hidden">
					<div className="px-6 py-6">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="block py-3 text-base text-muted-foreground hover:text-foreground"
								onClick={() => setMobileMenuOpen(false)}
							>
								{link.label}
							</Link>
						))}
						<div className="pt-6">
							<Button className="w-full gap-2 rounded-full">
								Искам да участвам
								<ArrowRight className="size-4" />
							</Button>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
