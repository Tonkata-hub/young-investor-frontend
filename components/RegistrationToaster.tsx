"use client";

import { Toaster } from "sonner";

export function RegistrationToaster() {
	return (
		<Toaster
			closeButton
			position="top-center"
			toastOptions={{
				classNames: {
					toast: "border-border bg-paper text-foreground shadow-lg",
					title: "font-serif text-base font-medium",
					description: "text-sm text-muted-foreground",
				},
			}}
		/>
	);
}
