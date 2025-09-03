import problem_data from '../src/lib/api-docs/problems.json';
import user_data from '../src/lib/api-docs/users.json';
import auth_data from '../src/lib/api-docs/auth.json';
import token_data from '../src/lib/api-docs/tickets.json';
import type { ApiObject } from '../src/lib/types/apiObject';

test('parses problem.json', () => {
    const problems: ApiObject = problem_data;
});

test('parses auth.json', () => {
    const auth: ApiObject = auth_data;
});

test('parses users.json', () => {
    const users: ApiObject = user_data;
});

test('parses tokens.json', () => {
    const tokens: ApiObject = token_data;
});
