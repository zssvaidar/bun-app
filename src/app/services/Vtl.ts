import ApiRepositoryInterface from "../repository/ApiRepositoryInterface";

export default class Vtl {

    private api: ApiRepositoryInterface;

    constructor(api: ApiRepositoryInterface) {
        this.api = api;
    }

    public async getUserList(params: any): Promise<any[]> {

        const data = await this.api.getUsers();

        return data;
    }
}
    