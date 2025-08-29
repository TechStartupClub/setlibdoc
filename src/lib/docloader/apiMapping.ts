import type { ApiObject } from '$lib/types/apiObject';
import { ApiTypes } from '$lib/types/typeNames';

export const mapType = (type: string) => {
	switch (type) {
		case 'string':
			return ApiTypes.STRING;
		case 'number':
			return ApiTypes.NUMBER;
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

export const mapMethod = (method: string) => {
	switch (method.toUpperCase()) {
		case 'GET':
			return 'GET';
		case 'POST':
			return 'POST';
		case 'PUT':
			return 'PUT';
		case 'DELETE':
			return 'DELETE';
		case 'PATCH':
			return 'PATCH';
		case 'HEAD':
			return 'HEAD';
		case 'OPTIONS':
			return 'OPTIONS';
		case 'TRACE':
			return 'TRACE';
		case 'CONNECT':
			return 'CONNECT';
		default:
			return 'GET';
	}
};

export const mapApiObject = (object: any): ApiObject => ({
	...object,
	endPoints: object.endPoints.map((endPoint: { method: string; queryParameters: any[] }) => ({
		...endPoint,
		method: mapMethod(endPoint.method),
		queryParameters:
			endPoint.queryParameters?.map((param: { type: string }) => ({
				...param,
				type: mapType(param.type)
			})) || []
	})),
	attributes: object.attributes.map((attribute: { type: string }) => ({
		...attribute,
		type: mapType(attribute.type)
	}))
});
