"use client";

import { toast } from "sonner";

export const registrationClosedMessage = "Срокът за записване изтече.";

export function showRegistrationClosedMessage() {
	toast.info(registrationClosedMessage, {
		description: "Регистрацията за състезанието вече е затворена.",
	});
}
