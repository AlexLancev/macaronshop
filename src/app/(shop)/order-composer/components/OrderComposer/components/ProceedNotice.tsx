import { Button } from "@/shared/ui/components/Button";

interface ProceedNoticeProps {
	maxQuantity: string;
}

export default function ProceedNotice({ maxQuantity }: ProceedNoticeProps) {
	return (
		<div>
			<span>
				Для продолжения количество макарон должно равняться {maxQuantity} штук.
			</span>
			<Button>Далее</Button>
		</div>
	);
}