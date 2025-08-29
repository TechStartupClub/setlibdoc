/**
 * Enumeration of possible API data types.
 */
export enum ApiTypes {
	STRING = 'string',
	INTEGER = 'integer',
	FLOAT = 'float',
	BOOLEAN = 'boolean',
	OBJECT = 'object',
	ARRAY = 'array',
	NULL = 'null',
	ANY = 'any',
	STRING_ARRAY = 'string[]',
	INTEGER_ARRAY = 'integer[]',
	FLOAT_ARRAY = 'float[]',
	OBJECT_ARRAY = 'object[]',
	ENUM = 'enum'
}

/**
 * Mapping of API data types to their corresponding color classes for UI representation.
 */
export const TypeColors: Record<ApiTypes, string> = {
	[ApiTypes.STRING]: 'text-cat-blue',
	[ApiTypes.INTEGER]: 'text-cat-green',
	[ApiTypes.FLOAT]: 'text-cat-teal',
	[ApiTypes.BOOLEAN]: 'text-cat-yellow',
	[ApiTypes.OBJECT]: 'text-cat-mauve',
	[ApiTypes.ARRAY]: 'text-cat-purple',
	[ApiTypes.NULL]: 'text-cat-rosewater',
	[ApiTypes.ANY]: 'text-cat-sky',
	[ApiTypes.STRING_ARRAY]: 'text-cat-blue',
	[ApiTypes.INTEGER_ARRAY]: 'text-cat-green',
	[ApiTypes.FLOAT_ARRAY]: 'text-cat-teal',
	[ApiTypes.OBJECT_ARRAY]: 'text-cat-purple',
	[ApiTypes.ENUM]: 'text-cat-peach'
};

/**
 * Type representing the keys of the TypeColors mapping, effectively the API data types.
 */
export type Type = keyof typeof TypeColors;

/**
 * Array of tuples pairing each API data type with its corresponding color class.
 */
export type TypeColorMap = Array<[ApiTypes, string]>;
