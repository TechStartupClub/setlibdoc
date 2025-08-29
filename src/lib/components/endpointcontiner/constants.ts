export enum methods {
    GET = 'GET',
    POST = 'POST',
    PATCH = 'PATCH',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

export const methodColors: Record<methods, string> = {
    [methods.GET]: '#04a5e5',
    [methods.POST]: '#E0BD2B',
    [methods.PATCH]: '#2B33E0',
    [methods.PUT]: '#5361FB',
    [methods.DELETE]: '#e64553',
};

export type Method = keyof typeof methodColors;

export type RouteMap = Array<[methods, string]>;