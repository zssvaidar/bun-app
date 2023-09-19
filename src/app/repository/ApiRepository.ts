import { Knex } from "knex";
import Database from "lib/Database";
import databaseConfig from "../../config/database";
import ApiRepositoryInterface from "./ApiRepositoryInterface";

export default class ApiRepository implements ApiRepositoryInterface {

    private client: Knex;

    constructor() {
        this.client = Database.getConnection(databaseConfig.default).client;
    }

    public async getUsers(): Promise<any[]> {

        const result = await this.client.table('new_table').select('*');

        return result;
    }
}