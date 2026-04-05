import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const navigation = {
	program: [
		{ name: "Overview", href: "#overview" },
		{ name: "Benefits", href: "#benefits" },
		{ name: "Timeline", href: "#timeline" },
		{ name: "Eligibility", href: "#eligibility" },
	],
	resources: [
		{ name: "FAQ", href: "#" },
		{ name: "Blog", href: "#" },
		{ name: "Alumni Network", href: "#" },
		{ name: "Career Portal", href: "#" },
	],
	company: [
		{ name: "About", href: "#" },
		{ name: "Contact", href: "#" },
		{ name: "Privacy", href: "#" },
		{ name: "Terms", href: "#" },
	],
};

export function Footer() {
	return (
		<footer className="border-t border-border px-6 py-24 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
					<div>
						<h2 className="font-serif text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
							Ready to take the next step?
						</h2>
						<p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
							Join thousands of professionals who have transformed their careers through our program.
						</p>
						<Button className="mt-8 gap-2 rounded-full" size="lg">
							Start Your Application
							<ArrowRight className="size-4" />
						</Button>
					</div>

					<div className="grid gap-8 sm:grid-cols-3">
						<div>
							<h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
								Program
							</h3>
							<ul className="mt-6">
								{navigation.program.map((item) => (
									<li key={item.name}>
										<Link
											href={item.href}
											className="block py-2 text-foreground hover:text-muted-foreground"
										>
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div>
							<h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
								Resources
							</h3>
							<ul className="mt-6">
								{navigation.resources.map((item) => (
									<li key={item.name}>
										<Link
											href={item.href}
											className="block py-2 text-foreground hover:text-muted-foreground"
										>
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div>
							<h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
								Company
							</h3>
							<ul className="mt-6">
								{navigation.company.map((item) => (
									<li key={item.name}>
										<Link
											href={item.href}
											className="block py-2 text-foreground hover:text-muted-foreground"
										>
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				<div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 lg:flex-row">
					<Link href="/" className="font-serif text-xl font-medium text-foreground">
						FinEdge
					</Link>
					<p className="text-sm text-muted-foreground">
						© {new Date().getFullYear()} FinEdge. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
