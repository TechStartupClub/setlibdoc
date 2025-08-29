import type { ApiObject } from '$lib/types/apiObject';
import { HttpMethods } from '$lib/types/httpMethods';
import { ApiTypes } from '$lib/types/typeNames';

/**
 * Maps a string representation of a type to the corresponding ApiTypes enum value.
 *
 * @param type - string representation of a type
 * @returns mapped ApiTypes enum value
 */
export const mapType = (type: string) => {
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
				})) || []
		})
	),
	attributes: object.attributes.map((attribute: { type: string }) => ({
		...attribute,
		type: mapType(attribute.type)
	}))
});
