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
 * Array of tuples pairing each HTTP error with its title and description.
 */
export const ErrorCodes: Array<{ code: ErrorCode, name: string, description: string; }> = [
	{ code: HttpErrors.OK, name: 'OK', description: 'The request has succeeded.' },
	{ code: HttpErrors.CREATED, name: 'Created', description: 'The request has been fulfilled and resulted in a new resource being created.' },
	{ code: HttpErrors.NO_CONTENT, name: 'No Content', description: 'The server successfully processed the request and is not returning any content.' },
	{ code: HttpErrors.BAD_REQUEST, name: 'Bad Request', description: 'The server could not understand the request due to invalid syntax.' },
	{ code: HttpErrors.UNAUTHORIZED, name: 'Unauthorized', description: 'The client must authenticate itself to get the requested response.' },
	{ code: HttpErrors.FORBIDDEN, name: 'Forbidden', description: 'The client does not have access rights to the content.' },
	{ code: HttpErrors.NOT_FOUND, name: 'Not Found', description: 'The server can not find the requested resource.' },
	{ code: HttpErrors.INTERNAL_SERVER_ERROR, name: 'Internal Server Error', description: 'The server has encountered a situation it doesn\'t know how to handle.' },
	{ code: HttpErrors.BAD_GATEWAY, name: 'Bad Gateway', description: 'The server was acting as a gateway or proxy and received an invalid response from the upstream server.' },
	{ code: HttpErrors.SERVICE_UNAVAILABLE, name: 'Service Unavailable', description: 'The server is not ready to handle the request, often due to maintenance or overload'}
];

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
export type ErrorCode = keyof typeof ErrorColors;

/**
 * Array of tuples pairing each HTTP error with its corresponding color class.
 */
export type ErrorColorMap = Array<[ErrorCode, string]>;
