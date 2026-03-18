import { TrashIcon } from "lucide-react";
import React from "react";

import { Button } from "@/shared/ui/components/Button";

interface DeleteFlavorButtonProps {
	handleDelete: () => void;
}

export default function DeleteFlavorButton({
	handleDelete,
}: DeleteFlavorButtonProps) {
	return (
		<Button
			variant="outline"
			onClick={handleDelete}
		>
			<TrashIcon />
		</Button>
	);
}
