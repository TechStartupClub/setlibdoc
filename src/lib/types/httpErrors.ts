/**
 * Enumeration of standard HTTP errors.
 */
export enum HttpErrors {
	OK = 200,
	CREATED = 201,
	NO_CONTENT = 204,
	BAD_REQUEST = 400,
	UNAUTHORIZED = 401,
	FORBIDDEN = 403,
	NOT_FOUND = 404,
	INTERNAL_SERVER_ERROR = 500,
	BAD_GATEWAY = 502,
	SERVICE_UNAVAILABLE = 503
}

/**
 * Mapping of HTTP errors to their corresponding color classes for UI representation.
 */
export const ErrorColors: Record<HttpErrors, string> = {
	[HttpErrors.OK]: 'text-cat-green',
	[HttpErrors.CREATED]: 'text-cat-green',
	[HttpErrors.NO_CONTENT]: 'text-cat-green',
	[HttpErrors.BAD_REQUEST]: 'text-cat-red',
	[HttpErrors.UNAUTHORIZED]: 'text-cat-red',
	[HttpErrors.FORBIDDEN]: 'text-cat-red',
	[HttpErrors.NOT_FOUND]: 'text-cat-red',
	[HttpErrors.INTERNAL_SERVER_ERROR]: 'text-cat-red',
	[HttpErrors.BAD_GATEWAY]: 'text-cat-red',
	[HttpErrors.SERVICE_UNAVAILABLE]: 'text-cat-red'
};

/**
 * Type representing the keys of the ErrorColors mapping, effectively the HTTP errors.
 */
export type ErrorMethod = keyof typeof ErrorColors;

/**
 * Array of tuples pairing each HTTP error with its corresponding color class.
 */
export type ErrorColorMap = Array<[ErrorMethod, string]>;
