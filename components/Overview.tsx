import { BookOpen, TrendingUp, Users, Target } from "lucide-react";

const skills = [
	{
		number: "01",
		icon: BookOpen,
		title: "Финансова Грамотност",
		description:
			"Развийте основни знания за пазарите, инвестициите и финансовото планиране, които ще ви служат през целия живот.",
	},
	{
		number: "02",
		icon: TrendingUp,
		title: "Инвестиционни Умения",
		description:
			"Научете се как да анализирате пазарите, да създавате диверсифицирани портфейли и да вземате информирани инвестиционни решения.",
	},
	{
		number: "03",
		icon: Users,
		title: "Работа в Екип",
		description:
			"Сътрудничете си с вашите връстници, за да създадете най-добрата инвестиционна стратегия и да развиете ценни умения за работа в екип.",
	},
];

export function Overview() {
	return (
		<section id="overview" className="px-6 py-24 lg:px-8 lg:py-32">
			<div className="mx-auto max-w-7xl">
				<div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
					<div className="flex flex-col justify-center">
						<p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
							За Състезанието
						</p>
						<h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
							За
							<br />
							Състезанието
						</h2>
					</div>
					<div className="flex flex-col justify-center">
						<div className="h-px w-12 bg-foreground mb-8" />
						<p className="text-lg leading-relaxed text-muted-foreground lg:text-xl">
							Това предизвикателство цели да вдигне нивото на финансовата грамотност сред младежите в
							България. То е предназначено за ученици от цялата страна от 8 до 12 клас, които са готови да
							покажат своите знания и креативност, да развият своите умения за работа в екип и
							същевременно да се потопят в сферата на финансите, капиталовите пазари, инвестициите и
							икономиката.
						</p>
					</div>
				</div>

				<div className="mt-20 grid gap-12 lg:mt-24 lg:grid-cols-3 lg:gap-8">
					{skills.map((skill) => (
						<div key={skill.title}>
							<div className="flex items-center gap-4">
								<span className="font-serif text-sm text-muted-foreground">{skill.number}</span>
								<div className="h-px flex-1 bg-border" />
							</div>
							<div className="mt-6">
								<div className="mb-4 flex size-12 items-center justify-center rounded-full bg-secondary">
									<skill.icon className="size-5 text-foreground" />
								</div>
								<h3 className="text-xl font-medium text-foreground">{skill.title}</h3>
								<p className="mt-3 leading-relaxed text-muted-foreground">{skill.description}</p>
							</div>
						</div>
					))}
				</div>

				<div className="mt-12 lg:mt-16 overflow-hidden rounded-2xl border border-border bg-paper">
					<div className="grid lg:grid-cols-[auto_1fr]">
						<div className="flex items-center justify-center border-b border-border p-8 lg:border-b-0 lg:border-r lg:p-12">
							<div className="flex size-16 items-center justify-center rounded-full bg-secondary">
								<Target className="size-7 text-foreground" />
							</div>
						</div>
						<div className="p-8 lg:p-12">
							<h3 className="font-serif text-2xl font-medium text-foreground lg:text-3xl">
								Вашето Предизвикателство
							</h3>
							<p className="mt-4 leading-relaxed text-muted-foreground lg:text-lg">
								В това състезание вие и вашите съотборници ще създадете инвестиционно портфолио за
								хипотетична бизнес персона на име Иван Петров. Ще трябва да проучите и изберете
								инвестиции, които са съобразени с целите, ценностите и толерантността към риска на Иван,
								създавайки цялостен инвестиционен план.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
