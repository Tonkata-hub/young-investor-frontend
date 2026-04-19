"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

const organizers = [
	{
		name: "Клуб по Финанси СМГ",
		initials: "КФ",
		logoSrc: "/images/finance-club.png",
		description:
			"Клубът по финанси представлява група от ученици от Софийската математическа гимназия, които учат икономика и финанси чрез интерактивни срещи и семинари. Освен това те инвестират и търгуват с реални пари на финансовите пазари, ръководени от експерти в индустрията.",
		social: { label: "@finance_club_smg", href: "https://instagram.com/finance_club_smg", icon: InstagramIcon },
	},
	{
		name: "Д-р Боян Иванчев",
		initials: "БИ",
		description:
			'Д-р Боян Иванчев е основоположник на поведенческите финанси и невроикономиката в България, с над тридесет годишен опит във финансовата сфера като главен дилър и асет мениджър. Той е също лектор в университет по специалността "Поведенчески финанси" и автор на 3 книги и редица научни публикации.',
		social: null,
	},
];

const sponsors = [
	// { name: "Bloomberg TV Bulgaria", role: "Медиен партньор" },
	// { name: "Concord Asset Management", role: "Спонсор" },
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

export function Team() {
	return (
		<section id="organizers" className="bg-secondary px-6 py-24 lg:px-8 lg:py-32">
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
							Екип
						</p>
						<h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
							Организатори
						</h2>
					</motion.div>
					<motion.div className="flex items-end" variants={fadeUp}>
						<p className="text-lg leading-relaxed text-muted-foreground">
							Инициативата &quot;Млад Инвеститор&quot; се организира от отдаден екип от финансови
							професионалисти и ученици.
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
					{organizers.map((person) => (
						<motion.div key={person.name} className="rounded-2xl border border-border bg-paper p-8 lg:p-10" variants={fadeUp}>
							{person.logoSrc ? (
								<div className="flex size-16 items-center justify-center overflow-hidden rounded-full bg-secondary">
									<Image
										src={person.logoSrc}
										alt={person.name}
										width={64}
										height={64}
										className="size-full object-cover"
									/>
								</div>
							) : (
								<div className="flex size-16 items-center justify-center rounded-full bg-secondary font-serif text-lg font-medium text-foreground">
									{person.initials}
								</div>
							)}
							<h3 className="mt-6 text-xl font-medium text-foreground">{person.name}</h3>
							<p className="mt-3 leading-relaxed text-muted-foreground">{person.description}</p>
							{person.social && (
								<a
									href={person.social.href}
									target="_blank"
									rel="noopener noreferrer"
									className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground underline underline-offset-4 hover:no-underline"
								>
									<person.social.icon className="size-4" />
									{person.social.label}
								</a>
							)}
						</motion.div>
					))}
				</motion.div>

				{/*
				<motion.div
					className="mt-6 border-t border-border pt-10"
					variants={fadeUp}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-50px" }}
				>
					<p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
						С Подкрепата На
					</p>
					<div className="mt-8 grid divide-y divide-border overflow-hidden rounded-2xl border border-border bg-paper md:grid-cols-2 md:divide-x md:divide-y-0">
						{sponsors.map((sponsor) => (
							<div key={sponsor.name} className="flex flex-col items-center gap-4 p-8 lg:p-10">
								<div className="h-12 w-36 rounded-lg bg-secondary" />
								<div className="text-center">
									<p className="text-sm font-medium text-foreground">{sponsor.name}</p>
									<p className="mt-1 text-xs text-muted-foreground">{sponsor.role}</p>
								</div>
							</div>
						))}
					</div>
				</motion.div>
				*/}
			</div>
		</section>
	);
}
