import { ArrowUpRight } from "lucide-react";

const benefits = [
	{
		title: "Career Advancement",
		description: "Fast-track your career with credentials recognized by leading financial institutions worldwide.",
		link: "Explore careers",
	},
	{
		title: "Industry Mentorship",
		description: "Work directly with C-suite executives and portfolio managers from top-tier firms.",
		link: "Meet mentors",
	},
	{
		title: "Research Access",
		description: "Gain exclusive access to proprietary research, market data, and analytical tools.",
		link: "View resources",
	},
];

export function Benefits() {
	return (
		<section id="benefits" className="bg-foreground px-6 py-24 text-background lg:px-8 lg:py-32">
			<div className="mx-auto max-w-7xl">
				<div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
					<div>
						<p className="text-sm font-medium uppercase tracking-wider text-background/60">
							Program Benefits
						</p>
						<h2 className="mt-4 font-serif text-4xl font-medium tracking-tight lg:text-5xl">
							Everything you need to excel
						</h2>
					</div>
					<div>
						<p className="text-lg leading-relaxed text-background/80">
							Our comprehensive program is designed to provide you with the knowledge, skills, and
							connections necessary to become a leader in financial services.
						</p>
					</div>
				</div>

				<div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-background/10 bg-background/10 lg:mt-20 lg:grid-cols-3">
					{benefits.map((benefit) => (
						<div key={benefit.title} className="group bg-foreground p-8 lg:p-10">
							<h3 className="text-xl font-medium">{benefit.title}</h3>
							<p className="mt-4 leading-relaxed text-background/70">{benefit.description}</p>
							<a
								href="#"
								className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-background/60 transition-colors hover:text-background"
							>
								{benefit.link}
								<ArrowUpRight className="size-4" />
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
