import type { HttpErrors } from './httpErrors';
import type { HttpMethods } from './httpMethods';
import type { Type } from './typeNames';

/**
 * Defines the structure of an API endpoint within the documentation system.
 */
export type Endpoint = {
	id: string;
	method: HttpMethods;
	route: string;
	description: string;
	queryParameters?: Array<{
		name: string;
		type: Type;
		description: string;
		example: string | number;
	}>;
	bodyParameters?: Array<{
		name: string;
		type: Type;
		description: string;
		example: string | number;
	}>;
	headers?: Array<{
		name: string;
		type: Type;
		description: string;
		example: string | number;
	}>;
	formDataParameters?: Array<{
		name: string;
		type: Type;
		description: string;
		example: string | number;
	}>;
	response?: {
		type: Type;
		description: string;
		example?: string | number | object | Array<string | number | object>;
	};
	statusCodes?: Array<{
		code: HttpErrors;
		description: string;
	}>;
};

/**
 * Defines the structure of an attribute associated with an API object.
 */
export type Attribute = {
	name: string;
	type: Type;
	description: string;
	example?: string | number | string[];
};

/**
 * Defines the structure of an API object, including its title, endpoints, and attributes.
 */
export type ApiObject = {
	title: string;
	endPoints: Endpoint[];
	attributes: Attribute[];
};
