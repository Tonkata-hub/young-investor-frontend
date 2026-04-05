import { Trophy, Medal, Award } from "lucide-react";

const awards = [
	{
		placement: "II-ро място",
		label: "Второ място",
		amount: "2 000 лева",
		winner: false,
		icon: Medal,
	},
	{
		placement: "I-во място",
		label: "Победител",
		amount: "3 000 лева",
		winner: true,
		icon: Trophy,
	},
	{
		placement: "III-то място",
		label: "Трето място",
		amount: "1 000 лева",
		winner: false,
		icon: Award,
	},
];

export function Highlight() {
	return (
		<section id="highlight" className="bg-secondary px-6 py-24 lg:px-8 lg:py-32">
			<div className="mx-auto max-w-7xl">
				<div className="grid gap-4 lg:grid-cols-2 lg:gap-20">
					<div>
						<p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
							Награден Фонд
						</p>
						<h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
							Награден Фонд
						</h2>
					</div>
					<div className="flex items-end">
						<p className="text-lg leading-relaxed text-muted-foreground">
							Най-добрите отбори ще бъдат наградени с парични награди, които отличават тяхното
							изключително представяне и иновативни инвестиционни стратегии.
						</p>
					</div>
				</div>

				<div className="mt-16 grid items-end gap-4 md:grid-cols-3 lg:mt-20 lg:gap-6">
					{awards.map((award) => (
						<div
							key={award.placement}
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
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
