import { getRequest } from "./util";

const BASE_URL = "/books";

export const getBooks = () => getRequest(`${BASE_URL}`);