"use client";

import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const studentRequirements = [
	"В момента учащи в 9–12 клас",
	"Посещаващи всяко училище в България",
	"Интерес към финанси и инвестиции",
	"Не се изискват предварителни финансови познания",
];

const teamFormation = [
	"Отбори от 1–5 ученици",
	"Учениците могат да бъдат от различни училища",
	"Индивидуалното участие също е разрешено",
	"Всеки отбор трябва да има определен отборен лидер",
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

export function Eligibility() {
	return (
		<section id="eligibility" className="bg-secondary px-6 py-24 lg:px-8 lg:py-32">
			<div className="mx-auto max-w-7xl">
				<motion.div
					className="grid gap-4 lg:grid-cols-2 lg:gap-20"
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-50px" }}
				>
					<motion.div variants={fadeUp}>
						<h2 className="font-serif text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
							Кой Може да Участва?
						</h2>
					</motion.div>
					<motion.div className="flex items-end" variants={fadeUp}>
						<p className="text-lg leading-relaxed text-muted-foreground">
							Инициативата &quot;Млад Инвеститор&quot; е отворена за ученици от цяла България с интерес
							към финансите и инвестициите.
						</p>
					</motion.div>
				</motion.div>

				<motion.div
					className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-2"
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-50px" }}
				>
					<motion.div className="rounded-2xl bg-paper p-8 lg:p-10" variants={fadeUp}>
						<h3 className="font-serif text-2xl font-medium text-foreground">Изисквания за Ученици</h3>
						<ul className="mt-8">
							{studentRequirements.map((item) => (
								<li
									key={item}
									className="flex items-start gap-4 border-t border-border py-4 first:border-0 first:pt-0"
								>
									<Check className="mt-0.5 size-5 shrink-0 text-foreground" />
									<span className="text-muted-foreground">{item}</span>
								</li>
							))}
						</ul>
					</motion.div>

					<motion.div className="rounded-2xl bg-paper p-8 lg:p-10" variants={fadeUp}>
						<h3 className="font-serif text-2xl font-medium text-foreground">Формиране на Отбор</h3>
						<ul className="mt-8">
							{teamFormation.map((item) => (
								<li
									key={item}
									className="flex items-start gap-4 border-t border-border py-4 first:border-0 first:pt-0"
								>
									<div className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground" />
									<span className="text-muted-foreground">{item}</span>
								</li>
							))}
						</ul>
					</motion.div>

					<motion.div className="rounded-2xl border border-border bg-paper p-8 lg:col-span-2 lg:p-10" variants={fadeUp}>
						<div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
							<div>
								<h3 className="font-serif text-2xl font-medium text-foreground">
									Готови ли сте за предизвикателството?
								</h3>
								<p className="mt-3 leading-relaxed text-muted-foreground">
									Присъединете се към инициативата &quot;Млад Инвеститор&quot; и започнете вашето пътуване
									в света на финансите и инвестициите.
								</p>
							</div>
							<div className="shrink-0">
								<Button size="lg" className="gap-2 rounded-full px-8">
									Запиши се
									<ArrowRight className="size-4" />
								</Button>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
