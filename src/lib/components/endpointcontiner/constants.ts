export enum methods {
    GET = 'GET',
    POST = 'POST',
    PATCH = 'PATCH',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

export const methodColors: Record<methods, string> = {
    [methods.GET]: '#2BE066',
    [methods.POST]: '#E0BD2B',
    [methods.PATCH]: '#2B33E0',
    [methods.PUT]: '#5361FB',
    [methods.DELETE]: '#E02F2B',
};

export type Method = keyof typeof methodColors;

export type RouteMap = Array<[methods, string]>;