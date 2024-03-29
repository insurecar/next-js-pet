
declare module "*.svg" {
	const content: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
	export default content;
}

interface StaticImageData {
	src: string,
	height: number,
	width: number,
	placeholder?: string
}

declare module '*png' {
	const content: StaticImageData;

	export default content;
}

declare module '*jpg' {
	const content: StaticImageData;

	export default content;
}

declare module '*jpeg' { 
	const content: StaticImageData;
	
	export default content;
}