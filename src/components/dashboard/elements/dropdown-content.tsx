import { Children, ReactElement, ReactNode } from "react";

export default function DropdownContent({
	children,
	title,
}: {
	children: ReactNode;
	title: string;
}) {
	return (
		<>
			{/* Dibuat seperti dropdown FAQ di landing page, warnanya dark aja jangan putih 🤌 */}
			<div>
				{/* Title dari dropdown */}
				<h1 className="text-hackWhite text-2xl">{title}</h1>
			</div>
			{/* Konten ketika dropdown dibuka */}
			<div>{children}</div>
		</>
	);
}
