/**
 * Enumeration of standard HTTP methods.
 */
export enum HttpMethods {
	GET = 'GET',
	POST = 'POST',
	PATCH = 'PATCH',
	PUT = 'PUT',
	DELETE = 'DELETE',
	OPTIONS = 'OPTIONS',
	HEAD = 'HEAD',
	TRACE = 'TRACE',
	CONNECT = 'CONNECT'
}

/**
 * Mapping of HTTP methods to their corresponding color classes for UI representation.
 */
export const MethodColors: Record<HttpMethods, string> = {
	[HttpMethods.GET]: 'text-cat-blue',
	[HttpMethods.POST]: 'text-cat-green',
	[HttpMethods.PATCH]: 'text-cat-yellow',
	[HttpMethods.PUT]: 'text-cat-mauve',
	[HttpMethods.DELETE]: 'text-cat-red',
	[HttpMethods.OPTIONS]: 'text-cat-gray',
	[HttpMethods.HEAD]: 'text-cat-gray',
	[HttpMethods.TRACE]: 'text-cat-gray',
	[HttpMethods.CONNECT]: 'text-cat-gray'
};

/**
 * Type representing the keys of the MethodColors mapping, effectively the HTTP methods.
 */
export type HttpMethod = keyof typeof MethodColors;

/**
 * Array of tuples pairing each HTTP method with its corresponding color class.
 */
export type RouteColorMap = Array<[HttpMethods, string]>;
