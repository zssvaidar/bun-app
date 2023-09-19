import ApiController from "app/controller/ApiController";

function response(data): Response {
    return new Response(data);
}

export async function Api(request: Request): Promise<Response> | null {
    const url = new URL(request.url);

    if (url.pathname === "/api") {
        const controller = new ApiController();
        return controller.requestUserList(request);
    }


    if (url.pathname === "/blog") {
        return response("Blog!");
    }

    return null;
}
