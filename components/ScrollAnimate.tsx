"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollAnimateProps {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	direction?: "up" | "down" | "left" | "right" | "none";
	duration?: number;
}

export function ScrollAnimate({
	children,
	className = "",
	delay = 0,
	direction = "up",
	duration = 0.6,
}: ScrollAnimateProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-80px" });

	const directionOffset = {
		up: { y: 40, x: 0 },
		down: { y: -40, x: 0 },
		left: { y: 0, x: 40 },
		right: { y: 0, x: -40 },
		none: { y: 0, x: 0 },
	};

	return (
		<motion.div
			ref={ref}
			className={className}
			initial={{
				opacity: 0,
				y: directionOffset[direction].y,
				x: directionOffset[direction].x,
			}}
			animate={
				isInView
					? { opacity: 1, y: 0, x: 0 }
					: {
							opacity: 0,
							y: directionOffset[direction].y,
							x: directionOffset[direction].x,
					  }
			}
			transition={{
				duration,
				delay,
				ease: [0.25, 0.4, 0.25, 1],
			}}
		>
			{children}
		</motion.div>
	);
}

export function ScrollAnimateStagger({
	children,
	className = "",
	staggerDelay = 0.1,
}: {
	children: React.ReactNode;
	className?: string;
	staggerDelay?: number;
}) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-80px" });

	return (
		<motion.div
			ref={ref}
			className={className}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			variants={{
				hidden: {},
				visible: {
					transition: {
						staggerChildren: staggerDelay,
					},
				},
			}}
		>
			{children}
		</motion.div>
	);
}

export function ScrollAnimateItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
	return (
		<motion.div
			className={className}
			variants={{
				hidden: { opacity: 0, y: 30 },
				visible: {
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.5,
						ease: [0.25, 0.4, 0.25, 1],
					},
				},
			}}
		>
			{children}
		</motion.div>
	);
}
