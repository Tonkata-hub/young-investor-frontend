"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
	{ href: "/#overview", label: "За Нас" },
	{ href: "/#highlight", label: "Награди" },
	{ href: "/#timeline", label: "Програма" },
	{ href: "/#eligibility", label: "Участие" },
	{ href: "/#criteria", label: "Критерии" },
	{ href: "/#organizers", label: "Организатори" },
];
const registrationUrl = "https://forms.gle/c5LTFqtCQPU4otUU7";

export function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const mobileMenuRef = useRef<HTMLDivElement>(null);
	const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
	const headerRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const header = headerRef.current;
		if (!header) {
			return;
		}

		const updateNavbarHeight = () => {
			document.documentElement.style.setProperty("--navbar-height", `${header.offsetHeight}px`);
		};

		updateNavbarHeight();

		const resizeObserver = new ResizeObserver(updateNavbarHeight);
		resizeObserver.observe(header);
		window.addEventListener("resize", updateNavbarHeight);

		return () => {
			resizeObserver.disconnect();
			window.removeEventListener("resize", updateNavbarHeight);
		};
	}, []);

	useEffect(() => {
		if (mobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [mobileMenuOpen]);

	useEffect(() => {
		if (!mobileMenuOpen) {
			return;
		}

		const handlePointerDown = (event: PointerEvent) => {
			const target = event.target as Node;
			const clickedInsideMenu = mobileMenuRef.current?.contains(target);
			const clickedMenuButton = mobileMenuButtonRef.current?.contains(target);

			if (!clickedInsideMenu && !clickedMenuButton) {
				setMobileMenuOpen(false);
			}
		};

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setMobileMenuOpen(false);
			}
		};

		document.addEventListener("pointerdown", handlePointerDown);
		document.addEventListener("keydown", handleEscape);

		return () => {
			document.removeEventListener("pointerdown", handlePointerDown);
			document.removeEventListener("keydown", handleEscape);
		};
	}, [mobileMenuOpen]);

	return (
		<>
			<header
				ref={headerRef}
				className="sticky top-0 z-60 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80"
			>
				<nav className="relative z-20 mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
					<Link
						href="/"
						className="shrink-0 whitespace-nowrap font-serif text-lg font-medium tracking-tight text-foreground"
					>
						Млад Инвеститор
					</Link>

					<div className="hidden items-center gap-4 md:flex lg:gap-6">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="whitespace-nowrap text-xs text-muted-foreground transition-colors hover:text-foreground lg:text-sm"
							>
								{link.label}
							</Link>
						))}
					</div>

					<div className="hidden shrink-0 md:block">
						<Button
							className="gap-2 rounded-full bg-[lab(9.53159%_.968002_3.74648)] px-4 text-sm hover:bg-[lab(9.53159%_.968002_3.74648)]/90 lg:px-6"
							onClick={() => window.open(registrationUrl, "_blank", "noopener,noreferrer")}
						>
							Запиши се
							<ArrowRight className="size-4" />
						</Button>
					</div>

					<button
						ref={mobileMenuButtonRef}
						type="button"
						className="flex h-10 w-10 items-center justify-center md:hidden"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						<AnimatePresence mode="popLayout" initial={false}>
							<motion.div
								key={mobileMenuOpen ? "close" : "menu"}
								initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
								animate={{ opacity: 1, rotate: 0, scale: 1 }}
								exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
								transition={{ duration: 0.2 }}
							>
								{mobileMenuOpen ? (
									<X className="size-6 text-foreground" />
								) : (
									<Menu className="size-6 text-foreground" />
								)}
							</motion.div>
						</AnimatePresence>
					</button>
				</nav>
			</header>

			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-x-0 bottom-0 top-20 z-40 bg-black/45 md:hidden"
						onClick={() => setMobileMenuOpen(false)}
					/>
				)}
			</AnimatePresence>

			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						ref={mobileMenuRef}
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.25, ease: "easeInOut" }}
						className="fixed left-0 right-0 top-20 z-50 max-h-[calc(100dvh-5rem)] overflow-y-auto border-t bg-background shadow-xl md:hidden"
					>
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
								<Button
									className="w-full gap-2 rounded-full"
									onClick={() => window.open(registrationUrl, "_blank", "noopener,noreferrer")}
								>
									Запиши се
									<ArrowRight className="size-4" />
								</Button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
