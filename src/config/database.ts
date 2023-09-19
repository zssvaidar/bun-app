
const databaseConfig = {
    default: process.env.PROJECT_DB_NAME,
    connections: {
        BUN_DB: {
            client: 'mysql',
            connection: {
                host: process.env.DB_PROJECT_HOST || 'localhost',
                port: Number(process.env.DB_PROJECT_PORT || 3306),
                database: process.env.DB_PROJECT_DATABASE,
                user: process.env.DB_PROJECT_USERNAME,
                password: process.env.DB_PROJECT_PASSWORD,

            },
        }
    }

}

export default databaseConfig;