import { knex as knexConfig } from 'knex'
import configs from '../../knexfile'

export const knex = knexConfig(configs)  