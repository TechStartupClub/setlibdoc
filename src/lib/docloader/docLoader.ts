import { mapApiObject } from './apiMapping';

export async function loadApiDoc(docName: string, fetch: typeof globalThis.fetch) {
	try {
		console.log(`Fetching API docs for: ${docName}`);
		// const response = await fetch(`/api-docs/${docName}.json`);

		// if (!response.ok) {
		//     if (response.status === 404) {
		//         console.warn(`API documentation not found for: ${docName}`);
		//         return null;
		//     }
		//     throw new Error(`HTTP ${response.status}: ${response.statusText}`);
		// }

		// const apiData = await response.json();
		// return mapApiObject(apiData);
	} catch (error) {
		console.error(`Error loading API documentation for ${docName}:`, error);
		return null;
	}
}
