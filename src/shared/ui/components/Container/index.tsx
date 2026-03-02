import { cn } from "@/shared/lib/utils/cn";
import { type ReactNode } from "react";

interface ContainerPropsType {
	children: ReactNode;
	className?: string;
}

export const Container = ({ children, className }: ContainerPropsType) => {
	return (
		<div
			className={cn(
				"container",
				className,
			)}
		>
			{children}
		</div>
	);
};
