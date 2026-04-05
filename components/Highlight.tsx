"use client";

import { Trophy, Medal, Award } from "lucide-react";
import { motion } from "framer-motion";

const awards = [
	{
		placement: "II-ро място",
		label: "Второ място",
		amount: "2 000 лева",
		winner: false,
		icon: Medal,
		animationOrder: 1,
	},
	{
		placement: "I-во място",
		label: "Победител",
		amount: "3 000 лева",
		winner: true,
		icon: Trophy,
		animationOrder: 0,
	},
	{
		placement: "III-то място",
		label: "Трето място",
		amount: "1 000 лева",
		winner: false,
		icon: Award,
		animationOrder: 2,
	},
];

const container = {
	hidden: {},
	show: {},
};

const fadeUp = {
	hidden: { opacity: 0, y: 24 },
	show: { opacity: 1, y: 0 },
};

export function Highlight() {
	return (
		<section id="highlight" className="bg-secondary px-6 py-24 lg:px-8 lg:py-32">
			<motion.div
				className="mx-auto max-w-7xl"
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.15 }}
			>
				<div className="grid gap-4 lg:grid-cols-2 lg:gap-20">
					<motion.div variants={fadeUp} transition={{ duration: 0.55, ease: "easeOut", delay: 0 }}>
						<p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
							Награден Фонд
						</p>
						<h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
							Награден Фонд
						</h2>
					</motion.div>
					<motion.div className="flex items-end" variants={fadeUp} transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}>
						<p className="text-lg leading-relaxed text-muted-foreground">
							Най-добрите отбори ще бъдат наградени с парични награди, които отличават тяхното
							изключително представяне и иновативни инвестиционни стратегии.
						</p>
					</motion.div>
				</div>

				<div className="mt-16 grid items-end gap-4 md:grid-cols-3 lg:mt-20 lg:gap-6">
					{awards.map((award) => (
						<motion.div
							key={award.placement}
							variants={fadeUp}
							transition={{ duration: 0.55, ease: "easeOut", delay: 0.36 + award.animationOrder * 0.12 }}
							className={[
								"rounded-2xl border border-border bg-[lab(97.6889%_.426859_1.84673)]",
								award.winner
									? "px-8 pb-10 pt-20 lg:px-10 lg:pb-12 lg:pt-28"
									: "px-8 pb-10 pt-12 lg:px-10 lg:pb-12 lg:pt-16",
							].join(" ")}
						>
							<div
								className={[
									"mb-6 flex items-center justify-center rounded-full bg-secondary",
									award.winner ? "size-14" : "size-12",
								].join(" ")}
							>
								<award.icon
									className={award.winner ? "size-7 text-foreground" : "size-5 text-foreground"}
								/>
							</div>
							<p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
								{award.placement}
							</p>
							<p
								className={[
									"mt-2 font-medium text-foreground",
									award.winner ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl",
								].join(" ")}
							>
								{award.label}
							</p>
							<div className="mt-6 h-px bg-border" />
							<p
								className={[
									"mt-6 font-serif font-medium tracking-tight text-foreground",
									award.winner ? "text-5xl lg:text-6xl" : "text-4xl lg:text-5xl",
								].join(" ")}
							>
								{award.amount}
							</p>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
}
