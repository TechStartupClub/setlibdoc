export enum ApiTypes {
	STRING = 'string',
	NUMBER = 'number',
	BOOLEAN = 'boolean',
	OBJECT = 'object',
	ARRAY = 'array',
	NULL = 'null',
	ANY = 'any'
}

export const TypeColors: Record<ApiTypes, string> = {
	[ApiTypes.STRING]: 'text-cat-blue',
	[ApiTypes.NUMBER]: 'text-cat-green',
	[ApiTypes.BOOLEAN]: 'text-cat-yellow',
	[ApiTypes.OBJECT]: 'text-cat-mauve',
	[ApiTypes.ARRAY]: 'text-cat-purple',
	[ApiTypes.NULL]: 'text-cat-rosewater',
	[ApiTypes.ANY]: 'text-cat-sky'
};

export type Type = keyof typeof TypeColors;

export type TypeColorMap = Array<[ApiTypes, string]>;
