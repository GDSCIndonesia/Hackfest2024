import { motion } from "framer-motion";
import { Children, ReactElement, ReactNode, useState } from "react";

export default function DropdownContent({
	children,
	title,
	className,
}: {
	children: ReactNode;
	title: string;
	className?: string;
}) {
	const [isExpanded, setIsExpanded] = useState(false);
	return (
		<>
			{/* Dibuat seperti dropdown FAQ di landing page, warnanya dark aja jangan putih 🤌 */}
			<div className={className + " bg-softBlack"}>
				<div
					className="flex justify-between items-center hover:cursor-pointer px-4 py-2"
					onClick={() => setIsExpanded(!isExpanded)}
				>
					<h1 className="text-3xl font-gooBold">{title}</h1>
					<span className="font-gooBold text-xl leading-none select-none ml-4">
						{isExpanded ? "-" : "+"}
					</span>
				</div>
				{isExpanded ? <div className="px-4 pb-4">{children}</div> : <></>}
			</div>
		</>
	);
}
