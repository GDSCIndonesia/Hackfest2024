export default function YoutubeEmbed({
	url,
	title,
}: {
	url: string;
	title: string;
}) {
	return (
		<>
			<iframe
				width="560"
				height="315"
				src={url}
				title={title}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
		</>
	);
}
