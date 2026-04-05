import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

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

export function Eligibility() {
	return (
		<section id="eligibility" className="bg-secondary px-6 py-24 lg:px-8 lg:py-32">
			<div className="mx-auto max-w-7xl">
				<div className="grid gap-4 lg:grid-cols-2 lg:gap-20">
					<div>
						<p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
							Кой Може да Участва
						</p>
						<h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
							Кой Може да Участва
						</h2>
					</div>
					<div className="flex items-end">
						<p className="text-lg leading-relaxed text-muted-foreground">
							Инициативата &quot;Млад Инвеститор&quot; е отворена за ученици от цяла България с интерес
							към финансите и инвестициите.
						</p>
					</div>
				</div>

				<div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-2">
					<div className="rounded-2xl bg-paper p-8 lg:p-10">
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
					</div>

					<div className="flex flex-col gap-6">
						<div className="rounded-2xl bg-paper p-8 lg:p-10">
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
						</div>

						<div className="rounded-2xl border border-border bg-paper p-8 lg:p-10">
							<h3 className="font-serif text-2xl font-medium text-foreground">
								Готови ли сте за предизвикателството?
							</h3>
							<p className="mt-3 leading-relaxed text-muted-foreground">
								Присъединете се към инициативата &quot;Млад Инвеститор&quot; и започнете вашето пътуване
								в света на финансите и инвестициите.
							</p>
							<div className="mt-6">
								<Button size="lg" className="gap-2 rounded-full px-8">
									Запиши се
									<ArrowRight className="size-4" />
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
