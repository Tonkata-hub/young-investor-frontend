import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Overview } from "@/components/Overview";
import { Highlight } from "@/components/Highlight";
// import { Benefits } from "@/components/Benefits";
import { Timeline } from "@/components/Timeline";
import { Eligibility } from "@/components/Eligibility";
import { Criteria } from "@/components/Criteria";
import { Requirements } from "@/components/Requirements";
import { Team } from "@/components/Team";
import { Footer } from "@/components/Footer";

export default function Home() {
	return (
		<div className="min-h-screen bg-background">
			<Navbar />
			<main>
				<Hero />
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="h-px bg-foreground/20" />
				</div>
				<Overview />
				<Highlight />
				{/* <Benefits /> */}
				<Timeline />
				<Eligibility />
				<Criteria />
				<Requirements />
				<Team />
			</main>
			<Footer />
		</div>
	);
}
