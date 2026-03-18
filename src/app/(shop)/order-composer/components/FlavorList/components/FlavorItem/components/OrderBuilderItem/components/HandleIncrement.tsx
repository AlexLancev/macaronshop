import { PlusIcon } from "lucide-react";
import React from "react";

import { Button } from "@/shared/ui/components/Button";

interface HandleIncrementProps {
	handleIncrement: () => void;
}

export default function HandleIncrement({
	handleIncrement,
}: HandleIncrementProps) {
	return (
		<Button
			variant="outline"
			onClick={handleIncrement}
		>
			<PlusIcon />
		</Button>
	);
}
