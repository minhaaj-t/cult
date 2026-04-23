export type Product = {
	id: string;
	title: string;
	blurb: string;
	/** paths under /public */
	image800: string;
	image1200: string;
	ogImage: string;
	alt: string;
};

export const products: Product[] = [
	{
		id: "gnr-18x24",
		title: "Guns N’ Roses — 18×24",
		blurb: "A bold tribute in classic band-poster form — raw energy for notes that refuse to be quiet.",
		image800: "/images/gallery/gnr-18x24-800w.webp",
		image1200: "/images/gallery/gnr-18x24-1200w.webp",
		ogImage: "/images/gallery/gnr-18x24-og.webp",
		alt: "CultScribe notebook design with a rock poster aesthetic in red and black",
	},
	{
		id: "other-side-moon-18x24",
		title: "I’ll see you on the other side of the moon — 18×24",
		blurb: "A poetic cover for dreams, setlists, and late-night ideas written under a different sky.",
		image800: "/images/gallery/other-side-moon-18x24-800w.webp",
		image1200: "/images/gallery/other-side-moon-18x24-1200w.webp",
		ogImage: "/images/gallery/other-side-moon-18x24-og.webp",
		alt: "CultScribe notebook cover with lunar and poetic artwork",
	},
	{
		id: "princess-darkness-18x24",
		title: "Princess of the darkness lives forever — 18×24",
		blurb: "Dramatic gothic-tinged art for sketches and lyrics with room for a little mystery.",
		image800: "/images/gallery/princess-darkness-18x24-800w.webp",
		image1200: "/images/gallery/princess-darkness-18x24-1200w.webp",
		ogImage: "/images/gallery/princess-darkness-18x24-og.webp",
		alt: "CultScribe notebook cover with dark, theatrical illustration",
	},
	{
		id: "where-legends-forever",
		title: "Where Legends Live Forever",
		blurb: "A flagship look that leads with the CultScribe tagline — a companion for every page you fill.",
		image800: "/images/gallery/where-legends-forever-800w.webp",
		image1200: "/images/gallery/where-legends-forever-1200w.webp",
		ogImage: "/images/gallery/where-legends-forever-og.webp",
		alt: "CultScribe branding: Where legends live forever notebook presentation",
	},
];
