import { MinusIcon } from "lucide-react";
import React from "react";

import { Button } from "@/shared/ui/components/Button";

interface HandleDecrementProps {
	handleDecrement: () => void;
}

export default function HandleDecrement({
	handleDecrement,
}: HandleDecrementProps) {
	return (
		<Button
			variant="outline"
			onClick={handleDecrement}
		>
			<MinusIcon />
		</Button>
	);
}
