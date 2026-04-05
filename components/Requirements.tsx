"use client";

import { FileText, AlignLeft, Mail } from "lucide-react";
import { motion } from "framer-motion";

const formatRequirements = [
	"3–10 страници дължина",
	"Times New Roman, 12pt шрифт",
	"Двойно разстояние между редовете",
	"Включете визуална кръгова диаграма на разпределението на портфолиото",
];

const contentRequirements = [
	"Икономически и геополитически анализ",
	"Обосновка на инвестиционния сектор",
	"Обосновка за избора на индивидуални акции/фондове",
	"Съображения за дългосрочно представяне",
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

export function Requirements() {
	return (
		<section id="requirements" className="bg-foreground px-6 py-24 text-background lg:px-8 lg:py-32">
			<motion.div
				className="mx-auto max-w-7xl"
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.15 }}
			>
				<div className="grid gap-4 lg:grid-cols-2 lg:gap-20">
					<motion.div variants={fadeUp}>
						<p className="text-sm font-medium uppercase tracking-wider text-background/60">
							Изисквания за Доклада
						</p>
						<h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-background lg:text-5xl">
							Изисквания за Доклада
						</h2>
					</motion.div>
					<motion.div className="flex items-end" variants={fadeUp}>
						<p className="text-lg leading-relaxed text-background/70">
							Спазвайте следните насоки при изготвянето на вашия инвестиционен доклад.
						</p>
					</motion.div>
				</div>

				<div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-2">
					<motion.div className="rounded-2xl border border-background/10 bg-background/5 p-8 lg:p-10" variants={fadeUp}>
						<div className="flex items-center gap-4">
							<div className="flex size-12 items-center justify-center rounded-full border border-background/20 bg-background/10">
								<AlignLeft className="size-5 text-background" />
							</div>
							<h3 className="font-serif text-2xl font-medium text-background">Насоки за Формата</h3>
						</div>
						<ul className="mt-8">
							{formatRequirements.map((item) => (
								<li
									key={item}
									className="flex items-start gap-4 border-t border-background/10 py-4 first:border-0 first:pt-0"
								>
									<div className="mt-2 size-1.5 shrink-0 rounded-full bg-background/50" />
									<span className="text-background/70">{item}</span>
								</li>
							))}
						</ul>
					</motion.div>

					<motion.div className="rounded-2xl border border-background/10 bg-background/5 p-8 lg:p-10" variants={fadeUp}>
						<div className="flex items-center gap-4">
							<div className="flex size-12 items-center justify-center rounded-full border border-background/20 bg-background/10">
								<FileText className="size-5 text-background" />
							</div>
							<h3 className="font-serif text-2xl font-medium text-background">
								Изисквания за Съдържанието
							</h3>
						</div>
						<ul className="mt-8">
							{contentRequirements.map((item) => (
								<li
									key={item}
									className="flex items-start gap-4 border-t border-background/10 py-4 first:border-0 first:pt-0"
								>
									<div className="mt-2 size-1.5 shrink-0 rounded-full bg-background/50" />
									<span className="text-background/70">{item}</span>
								</li>
							))}
						</ul>
					</motion.div>
				</div>

				<motion.div className="mt-6 rounded-2xl border border-background/10 bg-background/5 p-8 lg:p-10" variants={fadeUp}>
					<div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
						<div className="flex items-center gap-4">
							<div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-background/20 bg-background/10">
								<Mail className="size-5 text-background" />
							</div>
							<div>
								<h3 className="font-serif text-2xl font-medium text-background">Предаване</h3>
								<p className="mt-1 text-background/70">Изпратете завършените доклади на:</p>
							</div>
						</div>
						<a
							href="mailto:mlad.investitor@gmail.com"
							className="text-lg font-medium text-background underline underline-offset-4 hover:no-underline lg:text-xl"
						>
							mlad.investitor@gmail.com
						</a>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
}
