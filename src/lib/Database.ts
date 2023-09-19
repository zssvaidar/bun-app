import knex from "knex";

export default class Database {
    static instances = [];
    public client;

    constructor(connectionName) {
        const databaseConfig = require(process.cwd() + '/src/config/database').default;
        this.client = knex(databaseConfig.connections[connectionName]);
    }

    static getConnection(connectionName) {
        const self = new Database(connectionName);
        return self;
    }
}