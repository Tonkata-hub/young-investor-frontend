"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const partners = [
	{ name: "Клуб по Финанси СМГ", role: null },
	{ name: "Bloomberg TV Bulgaria", role: "Медиен партньор" },
	{ name: "Concord", role: "Спонсор" },
];

const fadeUp = {
	hidden: { opacity: 0, y: 24 },
	show: { opacity: 1, y: 0 },
};

export function Hero() {
	return (
		<section className="relative px-6 pb-24 pt-16 lg:px-8 lg:pb-32 lg:pt-24">
			<div className="mx-auto max-w-7xl">
				<motion.div
					className="flex justify-center"
					initial="hidden"
					animate="show"
					variants={fadeUp}
					transition={{ duration: 0.5, ease: "easeOut" }}
				>
					<div className="inline-flex items-center gap-2 rounded-full bg-[#ebe4da] px-4 py-2 text-sm text-muted-foreground">
						<span className="size-2 rounded-full bg-emerald-500" />
						Училищно Състезание
					</div>
				</motion.div>

				<motion.h1
					className="mx-auto mt-10 max-w-4xl text-balance text-center font-serif text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
					initial="hidden"
					animate="show"
					variants={{
						hidden: {},
						show: {
							transition: {
								staggerChildren: 0.15,
								delayChildren: 0.1,
							},
						},
					}}
				>
					<motion.span variants={fadeUp} transition={{ duration: 0.55, ease: "easeOut" }} className="inline-block text-foreground">
						Млад
					</motion.span>{" "}
					<motion.span
						variants={fadeUp}
						transition={{ duration: 0.55, ease: "easeOut" }}
						className="inline-block text-foreground"
					>
						Инвеститор
					</motion.span>
				</motion.h1>

				<motion.p
					className="mx-auto mt-8 max-w-2xl text-pretty text-center text-lg leading-relaxed text-muted-foreground lg:text-xl"
					initial="hidden"
					animate="show"
					variants={fadeUp}
					transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
				>
					Предизвикателство за ученици от цяла България да подобрят своята финансова грамотност, да развият
					умения за работа в екип и да се потопят в света на финансите, капиталовите пазари, инвестициите и
					икономиката.
				</motion.p>

				<motion.div
					className="mx-auto mt-12 flex w-full max-w-sm flex-col items-stretch gap-4 sm:max-w-none sm:flex-row sm:items-center sm:justify-center"
					initial="hidden"
					animate="show"
					variants={fadeUp}
					transition={{ duration: 0.55, ease: "easeOut", delay: 0.3 }}
				>
					<Button
						size="lg"
						className="w-full gap-2 rounded-full bg-[lab(9.53159%_.968002_3.74648)] px-8 hover:bg-[lab(9.53159%_.968002_3.74648)]/90 sm:w-auto"
					>
						Запиши се
						<ArrowRight className="size-4" />
					</Button>
					<a
						href="/#overview"
						className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-border bg-[lab(97.6889%_.426859_1.84673)] px-8 text-base font-medium text-foreground shadow-xs transition-colors hover:bg-[lab(94.5%_.426859_1.84673)] sm:w-auto"
					>
						Научи повече
						<ChevronDown className="size-4" />
					</a>
				</motion.div>

				<motion.div
					className="mt-24 lg:mt-32"
					initial="hidden"
					animate="show"
					variants={fadeUp}
					transition={{ duration: 0.55, ease: "easeOut", delay: 0.45 }}
				>
					<p className="text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
						Партньори
					</p>
					<div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8 lg:gap-12">
						{partners.map((partner, i) => (
							<motion.div
								key={partner.name}
								className="group flex flex-col items-center gap-3 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
								initial="hidden"
								animate="show"
								variants={fadeUp}
								transition={{ duration: 0.55, ease: "easeOut", delay: 0.55 + i * 0.1 }}
							>
								<div className="h-10 w-28 rounded-lg bg-secondary" />
								<div className="text-center">
									<p className="text-sm font-medium text-foreground">{partner.name}</p>
									{partner.role && (
										<p className="mt-0.5 text-xs text-muted-foreground">{partner.role}</p>
									)}
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
