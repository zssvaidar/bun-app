export default class IOC {

    private static coreServices;
    static make<T>(serviceName): any {
        const iocConfig = require(process.cwd() + '/src/config/ioc.ts').default;

        serviceName = serviceName.name;

        return iocConfig.nonSingletons[serviceName]()
    };

}