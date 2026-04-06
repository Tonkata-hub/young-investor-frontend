"use client";

import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

const milestones = [
	{
		date: "03 май",
		title: "Краен срок за регистрация и начало на състезанието",
		description: "Последен ден за регистрация на вашия отбор и официалното начало на състезанието.",
	},
	{
		date: "03 юни",
		title: "Краен срок за предаване на доклади",
		description: "Последен ден за предаване на вашите инвестиционни портфейли и доклади.",
	},
	{
		date: "12 юни",
		title: "Представяне пред журито и резултати",
		description: "Представете вашата инвестиционна стратегия пред журито и разберете победителите.",
	},
];

const container = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.12,
		},
	},
};

const fadeUp = {
	hidden: { opacity: 0, y: 24 },
	show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export function Timeline() {
	return (
		<section id="timeline" className="px-6 py-24 lg:px-8 lg:py-32">
			<div className="mx-auto max-w-7xl">
				<motion.div
					className="grid gap-4 lg:grid-cols-2 lg:gap-20"
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-50px" }}
				>
					<motion.div variants={fadeUp}>
						<p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
							Програма на Състезанието
						</p>
						<h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
							Програма на Състезанието
						</h2>
					</motion.div>
					<motion.div className="flex items-end" variants={fadeUp}>
						<p className="text-lg leading-relaxed text-muted-foreground">
							Ключови дати и етапи за състезанието Млад Инвеститор.
						</p>
					</motion.div>
				</motion.div>

				<motion.div
					className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-3"
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-50px" }}
				>
					{milestones.map((milestone, index) => (
						<motion.div key={milestone.title} variants={fadeUp}>
							<div className="flex items-center gap-4">
								<span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary font-serif text-sm font-medium text-foreground">
									{index + 1}
								</span>
								<div className="h-px flex-1 bg-border" />
							</div>
							<div className="mt-6">
								<div className="flex items-center gap-2 text-sm text-muted-foreground">
									<Calendar className="size-4" />
									{milestone.date}
								</div>
								<h3 className="mt-3 text-xl font-medium text-foreground">{milestone.title}</h3>
								<p className="mt-3 leading-relaxed text-muted-foreground">{milestone.description}</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
