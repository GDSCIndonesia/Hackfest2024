export default function YoutubeEmbed({
	url,
	title,
}: {
	url: string;
	title: string;
}) {
	return (
		<iframe
			src={url}
			title={title}
			style={{ overflow: "hidden", height: "100%", width: "100%" }}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowFullScreen
		></iframe>
	);
}
