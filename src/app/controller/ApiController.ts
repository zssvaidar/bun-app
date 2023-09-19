import Vtl from "app/services/Vtl";
import IOC from "../../lib/IOC";

function responseJSON (data: any) {
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
            "Access-control-allow-origin": "*",
        }
    });
}

export default class ApiController {

    private service: Vtl;

    constructor () {
        this.service = IOC.make(Vtl)
    }

    public async requestUserList(request: Request): Promise<any> {
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
        await delay(1000);
        const userList = await this.service.getUserList({});
        return responseJSON({ users: userList });
    }

}