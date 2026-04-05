import { LayoutList, TrendingUp, PieChart, Target } from "lucide-react";

const criteria = [
	{
		number: "01",
		icon: LayoutList,
		title: "Организация и Яснота",
		description: "Добре структуриран инвестиционен план, който е лесен за четене и разбиране.",
	},
	{
		number: "02",
		icon: TrendingUp,
		title: "Пазарен Анализ",
		description: "Дълбоко разбиране на текущия икономически климат и пазарни условия.",
	},
	{
		number: "03",
		icon: PieChart,
		title: "Диверсификация и Управление на Риска",
		description: "Балансирано разпределение на активите на базата на съображения за риск/възвръщаемост.",
	},
	{
		number: "04",
		icon: Target,
		title: "Съответствие с Инвестиционните Цели",
		description: "План, съобразен с интересите и желаната доходност на Иван.",
	},
];

export function Criteria() {
	return (
		<section id="criteria" className="px-6 py-24 lg:px-8 lg:py-32">
			<div className="mx-auto max-w-7xl">
				<div className="grid gap-4 lg:grid-cols-2 lg:gap-20">
					<div>
						<p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
							Критерии за Оценяване
						</p>
						<h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
							Критерии за Оценяване
						</h2>
					</div>
					<div className="flex items-end">
						<p className="text-lg leading-relaxed text-muted-foreground">
							Вашето инвестиционно портфолио и презентация ще бъдат оценявани на базата на следните
							критерии.
						</p>
					</div>
				</div>

				<div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-2">
					{criteria.map((item) => (
						<div key={item.title} className="rounded-2xl border border-border bg-paper p-8 lg:p-10">
							<div className="flex items-center gap-4">
								<span className="font-serif text-sm text-muted-foreground">{item.number}</span>
								<div className="h-px flex-1 bg-border" />
							</div>
							<div className="mt-6">
								<div className="mb-4 flex size-12 items-center justify-center rounded-full bg-secondary">
									<item.icon className="size-5 text-foreground" />
								</div>
								<h3 className="text-xl font-medium text-foreground">{item.title}</h3>
								<p className="mt-3 leading-relaxed text-muted-foreground">{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
