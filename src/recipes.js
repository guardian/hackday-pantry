import { recipes_schema } from './parser.js';
import raw_data from './data/recipes_table_export.json';

export const recipes = recipes_schema.parse(raw_data).Items;
