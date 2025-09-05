import type { HttpErrors } from './httpErrors';
import type { HttpMethods } from './httpMethods';
import type { Type } from './typeNames';
import { z } from 'zod';

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

const HttpMethodsSchema = z.enum([
	'GET',
	'POST',
	'PUT',
	'DELETE',
	'PATCH',
	'HEAD',
	'OPTIONS',
	'TRACE',
	'CONNECT'
]);

const TypeSchema = z.enum([
	'string',
	'number',
	'boolean',
	'object',
	'array',
	'null',
	'any',
	'enum',
	'string[]',
	'number[]',
	'object[]',
	'array[]'
]);

const HttpErrorsSchema = z.enum([
	'200',
	'201',
	'204',
	'400',
	'401',
	'403',
	'404',
	'500',
	'502',
	'503'
]);

export const EndpointSchema = z.object({
	id: z.string(),
	method: HttpMethodsSchema,
	route: z.string(),
	description: z.string(),
	queryParameters: z
		.array(
			z.object({
				name: z.string(),
				type: TypeSchema,
				description: z.string(),
				example: z.union([z.string(), z.number()])
			})
		)
		.optional(),
	bodyParameters: z
		.array(
			z.object({
				name: z.string(),
				type: TypeSchema,
				description: z.string(),
				example: z.union([z.string(), z.number()])
			})
		)
		.optional(),
	headers: z
		.array(
			z.object({
				name: z.string(),
				type: TypeSchema,
				description: z.string(),
				example: z.union([z.string(), z.number()])
			})
		)
		.optional(),
	formDataParameters: z
		.array(
			z.object({
				name: z.string(),
				type: TypeSchema,
				description: z.string(),
				example: z.union([z.string(), z.number()])
			})
		)
		.optional(),
	response: z
		.object({
			type: TypeSchema,
			description: z.string(),
			example: z
				.union([
					z.string(),
					z.number(),
					z.object({}).loose(),
					z.array(z.union([z.string(), z.number(), z.object({}).loose()]))
				])
				.optional()
		})
		.optional(),
	statusCodes: z
		.array(
			z.object({
				code: HttpErrorsSchema,
				description: z.string()
			})
		)
		.optional()
});

export const AttributeSchema = z.object({
	name: z.string(),
	type: TypeSchema,
	description: z.string(),
	example: z.union([z.string(), z.number(), z.array(z.string())]).optional()
});

export const ApiObjectSchema = z.object({
	title: z
		.string()
		.regex(
			/^The [A-Z].+ Object$/,
			"Title must be in the format 'The [Name] Object', where [Name] starts with a capital letter."
		),
	endPoints: z.array(EndpointSchema),
	attributes: z.array(AttributeSchema)
});