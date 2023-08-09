import { Pool } from 'pg';

const connectionString = 'URL do banco de dados';

const db = new Pool({ connectionString });

export default db;
