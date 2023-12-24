export default function YoutubeEmbed({
	url,
	title,
}: {
	url: string;
	title: string;
}) {
	return (
		<div className="roleSpan">
			<iframe
				width="full"
				height="full"
				src={url}
				title={title}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
		</div>
	);
}
