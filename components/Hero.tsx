import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const partners = [
	{ name: "Клуб по Финанси СМГ", role: null },
	{ name: "Bloomberg TV Bulgaria", role: "Медиен партньор" },
	{ name: "Concord", role: "Спонсор" },
];

export function Hero() {
	return (
		<section className="relative px-6 pb-24 pt-16 lg:px-8 lg:pb-32 lg:pt-24">
			<div className="mx-auto max-w-7xl">
				<div className="flex justify-center">
					<div className="inline-flex items-center gap-2 rounded-full bg-[#ebe4da] px-4 py-2 text-sm text-muted-foreground">
						<span className="size-2 rounded-full bg-emerald-500" />
						Училищно Състезание
					</div>
				</div>

				<h1 className="mx-auto mt-10 max-w-4xl text-balance text-center font-serif text-5xl font-medium tracking-tight text-foreground sm:text-6xl lg:text-7xl">
					Млад Инвеститор
				</h1>

				<p className="mx-auto mt-8 max-w-2xl text-pretty text-center text-lg leading-relaxed text-muted-foreground lg:text-xl">
					Предизвикателство за ученици от цяла България да подобрят своята финансова грамотност, да развият
					умения за работа в екип и да се потопят в света на финансите, капиталовите пазари, инвестициите и
					икономиката.
				</p>

				<div className="mt-12 flex items-center justify-center gap-4">
					<Button
						size="lg"
						className="gap-2 rounded-full bg-[lab(9.53159%_.968002_3.74648)] px-8 hover:bg-[lab(9.53159%_.968002_3.74648)]/90"
					>
						Искам да участвам
						<ArrowRight className="size-4" />
					</Button>
					<a
						href="#overview"
						className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-background px-8 text-base font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground"
					>
						Научи повече
						<ChevronDown className="size-4" />
					</a>
				</div>

				<div className="mt-24 lg:mt-32">
					<p className="text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
						Партньори
					</p>
					<div className="mt-8 grid divide-y divide-border overflow-hidden rounded-2xl border border-border bg-paper md:grid-cols-3 md:divide-x md:divide-y-0">
						{partners.map((partner) => (
							<div key={partner.name} className="flex flex-col items-center gap-4 p-8 lg:p-10">
								<div className="h-12 w-36 rounded-lg bg-secondary" />
								<div className="text-center">
									<p className="text-sm font-medium text-foreground">{partner.name}</p>
									{partner.role && (
										<p className="mt-1 text-xs text-muted-foreground">{partner.role}</p>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
