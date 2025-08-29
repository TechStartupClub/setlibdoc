import type { ApiObject } from '$lib/types/apiObject';
import { HttpErrors } from '$lib/types/httpErrors';
import { HttpMethods } from '$lib/types/httpMethods';
import { ApiTypes } from '$lib/types/typeNames';

/**
 * Maps a string representation of a type to the corresponding ApiTypes enum value.
 *
 * @param type - string representation of a type
 * @returns mapped ApiTypes enum value
 */
export const mapType = (type: string) => {
	if (type.endsWith('[]')) {
		const baseType = type.slice(0, -2);
		switch (baseType) {
			case 'string':
				return ApiTypes.STRING_ARRAY;
			case 'number':
				return ApiTypes.INTEGER_ARRAY;
			case 'object':
				return ApiTypes.OBJECT_ARRAY;
			default:
				return ApiTypes.ARRAY;
		}
	}

	if (type.includes('|')) {
		return ApiTypes.ENUM;
	}

	switch (type) {
		case 'string':
			return ApiTypes.STRING;
		case 'number':
			return ApiTypes.INTEGER;
		case 'boolean':
			return ApiTypes.BOOLEAN;
		case 'array':
			return ApiTypes.ARRAY;
		case 'object':
			return ApiTypes.OBJECT;
		case 'null':
			return ApiTypes.NULL;
		default:
			return ApiTypes.ANY;
	}
};

/**
 * Maps a string representation of an HTTP method to the corresponding HttpMethods enum value.
 *
 * @param method - HTTP method as a string
 * @returns corresponding HttpMethods enum value
 */
export const mapMethod = (method: string) => {
	switch (method.toUpperCase()) {
		case 'GET':
			return HttpMethods.GET;
		case 'POST':
			return HttpMethods.POST;
		case 'PUT':
			return HttpMethods.PUT;
		case 'DELETE':
			return HttpMethods.DELETE;
		case 'PATCH':
			return HttpMethods.PATCH;
		case 'HEAD':
			return HttpMethods.HEAD;
		case 'OPTIONS':
			return HttpMethods.OPTIONS;
		case 'TRACE':
			return HttpMethods.TRACE;
		default:
			return HttpMethods.CONNECT;
	}
};

/**
 * Maps a numeric HTTP status code to the corresponding HttpErrors enum value.
 *
 * @param code - HTTP status code as a number
 * @returns corresponding HttpErrors enum value
 */
export const mapError = (code: number) => {
	switch (code) {
		case 200:
			return HttpErrors.OK;
		case 201:
			return HttpErrors.CREATED;
		case 204:
			return HttpErrors.NO_CONTENT;
		case 400:
			return HttpErrors.BAD_REQUEST;
		case 401:
			return HttpErrors.UNAUTHORIZED;
		case 403:
			return HttpErrors.FORBIDDEN;
		case 404:
			return HttpErrors.NOT_FOUND;
		case 500:
			return HttpErrors.INTERNAL_SERVER_ERROR;
		case 502:
			return HttpErrors.BAD_GATEWAY;
		case 503:
			return HttpErrors.SERVICE_UNAVAILABLE;
		default:
			return HttpErrors.INTERNAL_SERVER_ERROR;
	}
};

/**
 * Maps a raw API object to an ApiObject with proper types for methods and parameters.
 *
 * @param object - raw API object
 * @returns mapped ApiObject with proper types
 */
export const mapApiObject = (object: any): ApiObject => ({
	...object,
	endPoints: object.endPoints.map(
		(endPoint: {
			method: string;
			queryParameters: any[];
			bodyParameters: any[];
			headers: any[];
			formDataParameters: any[];
			response: any;
			statusCodes: any[];
		}) => ({
			...endPoint,
			method: mapMethod(endPoint.method),
			queryParameters:
				endPoint.queryParameters?.map((param: { type: string }) => ({
					...param,
					type: mapType(param.type)
				})) || [],
			bodyParameters:
				endPoint.bodyParameters?.map((param: { type: string }) => ({
					...param,
					type: mapType(param.type)
				})) || [],
			headers:
				endPoint.headers?.map((param: { type: string }) => ({
					...param,
					type: mapType(param.type)
				})) || [],
			formDataParameters:
				endPoint.formDataParameters?.map((param: { type: string }) => ({
					...param,
					type: mapType(param.type)
				})) || [],
			response: endPoint.response
				? {
						...endPoint.response,
						type: mapType(endPoint.response.type)
					}
				: undefined,
			statusCodes:
				endPoint.statusCodes?.map((status: { code: number }) => ({
					...status,
					code: mapError(status.code)
				})) || []
		})
	),
	attributes: object.attributes.map((attribute: { type: string }) => ({
		...attribute,
		type: mapType(attribute.type)
	}))
});
