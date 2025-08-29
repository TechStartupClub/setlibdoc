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

export type HttpMethod = keyof typeof MethodColors;

export type RouteColorMap = Array<[HttpMethods, string]>;
