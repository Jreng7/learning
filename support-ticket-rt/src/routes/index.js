import { ticket } from './tickets.js';
import { parseRoutePath } from '../utils/parseRoutePath.js';

export const ticketRouter = [...ticket].map((route) => ({
  ...route,
  url: parseRoutePath(route.url)
}))