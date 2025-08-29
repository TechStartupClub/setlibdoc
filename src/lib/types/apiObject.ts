import type { HttpMethods } from './httpMethods';
import type { Type } from './typeNames';

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
	statusCodes?: Array<{
		code: number;
		description: string;
	}>;
};

export type Attribute = {
	name: string;
	type: Type;
	description: string;
	example?: string | number | string[];
};

export type ApiObject = {
	title: string;
	endPoints: Endpoint[];
	attributes: Attribute[];
};
