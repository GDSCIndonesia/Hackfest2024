import { useAppStyle } from "@/styles/tailwind";

export default function ProgressBar({ finished }: { finished?: boolean }) {
	const style = useAppStyle();
	return (
		<svg
			width="30"
			height="100%"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				y="15"
				x="12.5"
				width="5"
				height="100%"
				fill={style.theme?.colors?.hackWhite as string}
			></rect>
			<circle
				cx="15"
				cy="15"
				r="15"
				fill={style.theme?.colors?.softDark as string}
			/>
			<circle
				cx="15"
				cy="15"
				r="13"
				fill={
					(finished
						? style.theme?.colors?.hackBlue
						: style.theme?.colors?.hackRed) as string
				}
			/>
		</svg>
	);
}
