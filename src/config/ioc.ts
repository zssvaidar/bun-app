import ApiRepository from "app/repository/ApiRepository";
import Vtl from "app/services/Vtl";

const iocConfig = {

    nonSingletons: {
        Vtl: () => new Vtl(
            new ApiRepository()
        )
    }

}

export default iocConfig;