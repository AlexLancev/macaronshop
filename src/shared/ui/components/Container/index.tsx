import type { ReactNode } from "react";

import { cn } from "@/shared/lib/utils/cn";

interface ContainerPropsType {
	children: ReactNode;
	className?: string;
}

export const Container = ({ children, className }: ContainerPropsType) => {
	return <div className={cn("container", className)}>{children}</div>;
};
