import { knex as knexConfig } from 'knex'
import config from '../../knexConfig'

export const knex = knexConfig(config)