declare module 'aurelia-event-aggregator/index' {
	export class EventAggregator {
	    eventLookup: any;
	    messageHandlers: any;
	    constructor();
	    publish(event: any, data: any): void;
	    subscribe(event: any, callback: any): () => void;
	    subscribeOnce(event: any, callback: any): () => void;
	}
	export function includeEventsIn(obj: any): EventAggregator;
	export function configure(aurelia: any): void;

}
declare module 'aurelia-event-aggregator' {
	export * from 'aurelia-event-aggregator/index';
}
declare module 'aurelia-history/index' {
	export class History {
	    activate(): void;
	    deactivate(): void;
	    navigate(): void;
	    navigateBack(): void;
	}

}
declare module 'aurelia-history' {
	export * from 'aurelia-history/index';
}
declare module 'aurelia-logging-console/index' {
	export class ConsoleAppender {
	    constructor();
	    debug(logger: any, message: any, ...rest: any[]): void;
	    info(logger: any, message: any, ...rest: any[]): void;
	    warn(logger: any, message: any, ...rest: any[]): void;
	    error(logger: any, message: any, ...rest: any[]): void;
	}

}
declare module 'aurelia-logging-console' {
	export * from 'aurelia-logging-console/index';
}
declare module 'aurelia-logging/index' {
	/**
	 * This library is part of the Aurelia platform and contains a minimal but effective logging mechanism
	 * with support for log levels and pluggable log appenders.
	 *
	 * @module logging
	 */
	/**
	* Creates an instance of Error that aggregates and preserves an innerError.
	*
	* @class AggregateError
	* @constructor
	*/
	export function AggregateError(msg: any, inner: any, skipIfAlreadyAggregate?: any): any;
	/**
	* Enum specifying the levels of the logger
	*
	* @property levels
	* @type Enum
	* @for export
	*/
	export var levels: {
	    none: number;
	    error: number;
	    warn: number;
	    info: number;
	    debug: number;
	};
	/**
	* Gets an instance of a logger by the Id used when creating.
	*
	* @method getLogger
	* @param {string} id The id of the logger you wish to get an instance of.
	* @return {Logger} The instance of the logger, or creates a new logger if none exists for that Id.
	* @for export
	*/
	export function getLogger(id: any): any;
	/**
	 * Adds an appender capable of processing logs and channeling them to an output.
	 *
	 * @method addAppender
	 * @param {Object} appender An appender instance to begin processing logs with.
	 * @for export
	 */
	export function addAppender(appender: any): void;
	/**
	* Sets the level of the logging for the application loggers
	*
	* @method setLevel
	* @param {Number} level Matches an enum specifying the level of logging.
	* @for export
	*/
	export function setLevel(level: any): void;
	/**
	* The logger is essentially responsible for having log statements that appear during debugging but are squelched
	* when using the build tools, depending on the log level that is set.  The available levels are -
	* 1. none
	* 2. error
	* 3. warn
	* 4. info
	* 5. debug
	*
	* You cannot instantiate the logger directly - you must use the getLogger method instead.
	*
	* @class Logger
	* @constructor
	*/
	export class Logger {
	    id: any;
	    constructor(id: any, key: any);
	    /**
	     * Logs a debug message.
	     *
	     * @method debug
	     * @param {string} message The message to log
	     */
	    debug(): void;
	    /**
	     * Logs info.
	     *
	     * @method info
	     * @param {string} message The message to log
	     */
	    info(): void;
	    /**
	     * Logs a warning.
	     *
	     * @method warn
	     * @param {string} message The message to log
	     */
	    warn(): void;
	    /**
	     * Logs an error.
	     *
	     * @method error
	     * @param {string} message The message to log
	     */
	    error(): void;
	}

}
declare module 'aurelia-logging' {
	export * from 'aurelia-logging/index';
}
declare module 'aurelia-metadata/metadata' {
	/**
	* Provides helpers for working with metadata.
	*
	* @class Metadata
	* @static
	*/
	export var Metadata: {
	    resource: string;
	    paramTypes: string;
	    properties: string;
	    get(metadataKey: any, target: any, propertyKey?: any): any;
	    getOwn(metadataKey: any, target: any, propertyKey?: any): any;
	    getOrCreateOwn(metadataKey: any, Type: any, target: any, propertyKey?: any): any;
	};

}
declare module 'aurelia-metadata/decorator-applicator' {
	export class DecoratorApplicator {
	    private _first;
	    private _second;
	    private _third;
	    private _rest;
	    constructor();
	    decorator(decorator: any): DecoratorApplicator;
	    _decorate(target: any): void;
	}

}
declare module 'aurelia-metadata/decorators' {
	export var Decorators: {
	    configure: {
	        parameterizedDecorator(name: any, decorator: any): void;
	        simpleDecorator(name: any, decorator: any): void;
	    };
	};

}
declare module 'aurelia-metadata/origin' {
	/**
	* A metadata annotation that describes the origin module of the function to which it's attached.
	*
	* @class Origin
	* @constructor
	* @param {string} moduleId The origin module id.
	* @param {string} moduleMember The name of the export in the origin module.
	*/
	export class Origin {
	    moduleId: any;
	    moduleMember: any;
	    constructor(moduleId: any, moduleMember?: any);
	    /**
	    * Get the Origin annotation for the specified function.
	    *
	    * @method get
	    * @static
	    * @param {Function} fn The function to inspect for Origin metadata.
	    * @return {Origin} Returns the Origin metadata.
	    */
	    static get(fn: any): {};
	    /**
	    * Set the Origin annotation for the specified function.
	    *
	    * @method set
	    * @static
	    * @param {Function} fn The function to set the Origin metadata on.
	    * @param {origin} fn The Origin metadata to store on the function.
	    * @return {Origin} Returns the Origin metadata.
	    */
	    static set(fn: any, origin: any): void;
	}

}
declare module 'aurelia-metadata/index' {
	/**
	 * Utilities for reading and writing the metadata of JavaScript functions.
	 *
	 * @module metadata
	 */
	export { Origin } from 'aurelia-metadata/origin';
	export { Metadata } from 'aurelia-metadata/metadata';
	export { Decorators } from 'aurelia-metadata/decorators';

}
declare module 'aurelia-metadata' {
	export * from 'aurelia-metadata/index';
}
declare module 'aurelia-path/index' {
	export function relativeToFile(name: any, file: any): any;
	export function join(path1: any, path2: any): any;
	export function buildQueryString(a: any, traditional?: any): string;

}
declare module 'aurelia-path' {
	export * from 'aurelia-path/index';
}
declare module 'aurelia-route-recognizer/state' {
	export class State {
	    charSpec: any;
	    nextStates: any;
	    constructor(charSpec?: any);
	    get(charSpec: any): any;
	    put(charSpec: any): any;
	    match(ch: any): any[];
	}

}
declare module 'aurelia-route-recognizer/segments' {
	export class StaticSegment {
	    string: any;
	    constructor(string: any);
	    eachChar(callback: any): void;
	    regex(): any;
	    generate(): any;
	}
	export class DynamicSegment {
	    name: any;
	    constructor(name: any);
	    eachChar(callback: any): void;
	    regex(): string;
	    generate(params: any, consumed: any): any;
	}
	export class StarSegment {
	    name: any;
	    constructor(name: any);
	    eachChar(callback: any): void;
	    regex(): string;
	    generate(params: any, consumed: any): any;
	}
	export class EpsilonSegment {
	    eachChar(): void;
	    regex(): string;
	    generate(): string;
	}

}
declare module 'aurelia-route-recognizer/index' {
	/**
	 * Class that parses route patterns and matches path strings.
	 *
	 * @class RouteRecognizer
	 * @constructor
	 */
	export class RouteRecognizer {
	    rootState: any;
	    names: any;
	    constructor();
	    /**
	     * Parse a route pattern and add it to the collection of recognized routes.
	     *
	     * @method add
	     * @param {Object} route The route to add.
	     */
	    add(route: any): any;
	    /**
	     * Retrieve the handlers registered for the named route.
	     *
	     * @method handlersFor
	     * @param {String} name The name of the route.
	     * @return {Array} The handlers.
	     */
	    handlersFor(name: any): any[];
	    /**
	     * Check if this RouteRecognizer recognizes a named route.
	     *
	     * @method hasRoute
	     * @param {String} name The name of the route.
	     * @return {Boolean} True if the named route is recognized.
	     */
	    hasRoute(name: any): boolean;
	    /**
	     * Generate a path and query string from a route name and params object.
	     *
	     * @method generate
	     * @param {String} name The name of the route.
	     * @param {Object} params The route params to use when populating the pattern.
	     *  Properties not required by the pattern will be appended to the query string.
	     * @return {String} The generated absolute path and query string.
	     */
	    generate(name: any, params: any): string;
	    /**
	     * Generate a query string from an object.
	     *
	     * @method generateQueryString
	     * @param {Object} params Object containing the keys and values to be used.
	     * @return {String} The generated query string, including leading '?'.
	     */
	    generateQueryString(params: any): string;
	    /**
	     * Parse a query string.
	     *
	     * @method parseQueryString
	     * @param {String} The query string to parse.
	     * @return {Object} Object with keys and values mapped from the query string.
	     */
	    parseQueryString(queryString: any): {};
	    /**
	     * Match a path string against registered route patterns.
	     *
	     * @method recognize
	     * @param {String} path The path to attempt to match.
	     * @return {Array} Array of objects containing `handler`, `params`, and
	     *  `isDynanic` values for the matched route(s), or undefined if no match
	     *  was found.
	     */
	    recognize(path: any): RecognizeResults;
	}
	export class RecognizeResults {
	    splice: any;
	    slice: any;
	    push: any;
	    length: any;
	    queryParams: any;
	    constructor(queryParams: any);
	}

}
declare module 'aurelia-route-recognizer' {
	export * from 'aurelia-route-recognizer/index';
}
declare module 'aurelia-skeleton-plugin/hello-world' {
	export class HelloWorld {
	}

}
declare module 'aurelia-skeleton-plugin/index' {
	export function configure(aurelia: any): void;

}
declare module 'aurelia-skeleton-plugin' {
	export * from 'aurelia-skeleton-plugin/index';
}
declare module 'aurelia-task-queue/index' {
	export class TaskQueue {
	    microTaskQueue: any;
	    microTaskQueueCapacity: any;
	    taskQueue: any;
	    requestFlushMicroTaskQueue: any;
	    requestFlushTaskQueue: any;
	    constructor();
	    queueMicroTask(task: any): void;
	    queueTask(task: any): void;
	    flushTaskQueue(): void;
	    flushMicroTaskQueue(): void;
	    onError(error: any, task: any): void;
	}

}
declare module 'aurelia-task-queue' {
	export * from 'aurelia-task-queue/index';
}
declare module 'aurelia-dependency-injection/metadata' {
	/**
	* Used to allow functions/classes to indicate that they should be registered as transients with the container.
	*
	* @class TransientRegistration
	* @constructor
	* @param {Object} [key] The key to register as.
	*/
	export class TransientRegistration {
	    key: any;
	    constructor(key: any);
	    /**
	    * Called by the container to register the annotated function/class as transient.
	    *
	    * @method register
	    * @param {Container} container The container to register with.
	    * @param {Object} key The key to register as.
	    * @param {Object} fn The function to register (target of the annotation).
	    */
	    register(container: any, key: any, fn: any): void;
	}
	/**
	* Used to allow functions/classes to indicate that they should be registered as singletons with the container.
	*
	* @class SingletonRegistration
	* @constructor
	* @param {Object} [key] The key to register as.
	*/
	export class SingletonRegistration {
	    registerInChild: any;
	    key: any;
	    constructor(keyOrRegisterInChild: any, registerInChild?: boolean);
	    /**
	    * Called by the container to register the annotated function/class as a singleton.
	    *
	    * @method register
	    * @param {Container} container The container to register with.
	    * @param {Object} key The key to register as.
	    * @param {Object} fn The function to register (target of the annotation).
	    */
	    register(container: any, key: any, fn: any): void;
	}
	/**
	* An abstract resolver used to allow functions/classes to specify custom dependency resolution logic.
	*
	* @class Resolver
	* @constructor
	*/
	export class Resolver {
	    /**
	    * Called by the container to allow custom resolution of dependencies for a function/class.
	    *
	    * @method get
	    * @param {Container} container The container to resolve from.
	    * @return {Object} Returns the resolved object.
	    */
	    get(container: any): void;
	}
	/**
	* Used to allow functions/classes to specify lazy resolution logic.
	*
	* @class Lazy
	* @constructor
	* @extends Resolver
	* @param {Object} key The key to lazily resolve.
	*/
	export class Lazy extends Resolver {
	    key: any;
	    constructor(key: any);
	    /**
	    * Called by the container to lazily resolve the dependency into a lazy locator function.
	    *
	    * @method get
	    * @param {Container} container The container to resolve from.
	    * @return {Function} Returns a function which can be invoked at a later time to obtain the actual dependency.
	    */
	    get(container: any): () => any;
	    /**
	    * Creates a Lazy Resolver for the supplied key.
	    *
	    * @method of
	    * @static
	    * @param {Object} key The key to lazily resolve.
	    * @return {Lazy} Returns an insance of Lazy for the key.
	    */
	    static of(key: any): Lazy;
	}
	/**
	* Used to allow functions/classes to specify resolution of all matches to a key.
	*
	* @class All
	* @constructor
	* @extends Resolver
	* @param {Object} key The key to lazily resolve all matches for.
	*/
	export class All extends Resolver {
	    key: any;
	    constructor(key: any);
	    /**
	    * Called by the container to resolve all matching dependencies as an array of instances.
	    *
	    * @method get
	    * @param {Container} container The container to resolve from.
	    * @return {Object[]} Returns an array of all matching instances.
	    */
	    get(container: any): any;
	    /**
	    * Creates an All Resolver for the supplied key.
	    *
	    * @method of
	    * @static
	    * @param {Object} key The key to resolve all instances for.
	    * @return {All} Returns an insance of All for the key.
	    */
	    static of(key: any): All;
	}
	/**
	* Used to allow functions/classes to specify an optional dependency, which will be resolved only if already registred with the container.
	*
	* @class Optional
	* @constructor
	* @extends Resolver
	* @param {Object} key The key to optionally resolve for.
	* @param {Boolean} [checkParent=false] Indicates whether or not the parent container hierarchy should be checked.
	*/
	export class Optional extends Resolver {
	    key: any;
	    checkParent: any;
	    constructor(key: any, checkParent?: boolean);
	    /**
	    * Called by the container to provide optional resolution of the key.
	    *
	    * @method get
	    * @param {Container} container The container to resolve from.
	    * @return {Object} Returns the instance if found; otherwise null.
	    */
	    get(container: any): any;
	    /**
	    * Creates an Optional Resolver for the supplied key.
	    *
	    * @method of
	    * @static
	    * @param {Object} key The key to optionally resolve for.
	    * @param {Boolean} [checkParent=false] Indicates whether or not the parent container hierarchy should be checked.
	    * @return {Optional} Returns an insance of Optional for the key.
	    */
	    static of(key: any, checkParent?: boolean): Optional;
	}
	/**
	* Used to inject the dependency from the parent container instead of the current one.
	*
	* @class Parent
	* @constructor
	* @extends Resolver
	* @param {Object} key The key to resolve from the parent container.
	*/
	export class Parent extends Resolver {
	    key: any;
	    constructor(key: any);
	    /**
	    * Called by the container to load the dependency from the parent container
	    *
	    * @method get
	    * @param {Container} container The container to resolve the parent from.
	    * @return {Function} Returns the matching instance from the parent container
	    */
	    get(container: any): any;
	    /**
	    * Creates a Parent Resolver for the supplied key.
	    *
	    * @method of
	    * @static
	    * @param {Object} key The key to resolve.
	    * @return {Parent} Returns an insance of Parent for the key.
	    */
	    static of(key: any): Parent;
	}
	/**
	* Used to instantiate a class.
	*
	* @class ClassActivator
	* @constructor
	*/
	export class ClassActivator {
	    static instance: ClassActivator;
	    invoke(fn: any, args: any): any;
	}
	/**
	* Used to invoke a factory method.
	*
	* @class FactoryActivator
	* @constructor
	*/
	export class FactoryActivator {
	    static instance: FactoryActivator;
	    invoke(fn: any, args: any): any;
	}

}
declare module 'aurelia-dependency-injection/container' {
	export var emptyParameters: any[];
	/**
	* A lightweight, extensible dependency injection container.
	*
	* @class Container
	* @constructor
	*/
	export class Container {
	    constructionInfo: any;
	    entries: any;
	    root: any;
	    locateParameterInfoElsewhere: any;
	    parent: any;
	    constructor(constructionInfo?: any);
	    /**
	    * Adds an additional location to search for constructor parameter type info.
	    *
	    * @method addParameterInfoLocator
	    * @param {Function} locator Configures a locator function to use when searching for parameter info. It should return undefined if no parameter info is found.
	    */
	    addParameterInfoLocator(locator: any): void;
	    /**
	    * Registers an existing object instance with the container.
	    *
	    * @method registerInstance
	    * @param {Object} key The key that identifies the dependency at resolution time; usually a constructor function.
	    * @param {Object} instance The instance that will be resolved when the key is matched.
	    */
	    registerInstance(key: any, instance: any): void;
	    /**
	    * Registers a type (constructor function) such that the container returns a new instance for each request.
	    *
	    * @method registerTransient
	    * @param {Object} key The key that identifies the dependency at resolution time; usually a constructor function.
	    * @param {Function} [fn] The constructor function to use when the dependency needs to be instantiated.
	    */
	    registerTransient(key: any, fn: any): void;
	    /**
	    * Registers a type (constructor function) such that the container always returns the same instance for each request.
	    *
	    * @method registerSingleton
	    * @param {Object} key The key that identifies the dependency at resolution time; usually a constructor function.
	    * @param {Function} [fn] The constructor function to use when the dependency needs to be instantiated.
	    */
	    registerSingleton(key: any, fn: any): void;
	    /**
	    * Registers a type (constructor function) by inspecting its registration annotations. If none are found, then the default singleton registration is used.
	    *
	    * @method autoRegister
	    * @param {Function} fn The constructor function to use when the dependency needs to be instantiated.
	    * @param {Object} [key] The key that identifies the dependency at resolution time; usually a constructor function.
	    */
	    autoRegister(fn: any, key?: any): void;
	    /**
	    * Registers an array of types (constructor functions) by inspecting their registration annotations. If none are found, then the default singleton registration is used.
	    *
	    * @method autoRegisterAll
	    * @param {Function[]} fns The constructor function to use when the dependency needs to be instantiated.
	    */
	    autoRegisterAll(fns: any): void;
	    /**
	    * Registers a custom resolution function such that the container calls this function for each request to obtain the instance.
	    *
	    * @method registerHandler
	    * @param {Object} key The key that identifies the dependency at resolution time; usually a constructor function.
	    * @param {Function} handler The resolution function to use when the dependency is needed. It will be passed one arguement, the container instance that is invoking it.
	    */
	    registerHandler(key: any, handler: any): void;
	    /**
	    * Unregisters based on key.
	    *
	    * @method unregister
	    * @param {Object} key The key that identifies the dependency at resolution time; usually a constructor function.
	    */
	    unregister(key: any): void;
	    /**
	    * Resolves a single instance based on the provided key.
	    *
	    * @method get
	    * @param {Object} key The key that identifies the object to resolve.
	    * @return {Object} Returns the resolved instance.
	    */
	    get(key: any): any;
	    /**
	    * Resolves all instance registered under the provided key.
	    *
	    * @method getAll
	    * @param {Object} key The key that identifies the objects to resolve.
	    * @return {Object[]} Returns an array of the resolved instances.
	    */
	    getAll(key: any): any;
	    /**
	    * Inspects the container to determine if a particular key has been registred.
	    *
	    * @method hasHandler
	    * @param {Object} key The key that identifies the dependency at resolution time; usually a constructor function.
	    * @param {Boolean} [checkParent=false] Indicates whether or not to check the parent container hierarchy.
	    * @return {Boolean} Returns true if the key has been registred; false otherwise.
	    */
	    hasHandler(key: any, checkParent?: boolean): any;
	    /**
	    * Creates a new dependency injection container whose parent is the current container.
	    *
	    * @method createChild
	    * @return {Container} Returns a new container instance parented to this.
	    */
	    createChild(): Container;
	    /**
	    * Invokes a function, recursively resolving its dependencies.
	    *
	    * @method invoke
	    * @param {Function} fn The function to invoke with the auto-resolved dependencies.
	    * @return {Object} Returns the instance resulting from calling the function.
	    */
	    invoke(fn: any): any;
	    getOrCreateEntry(key: any): any;
	    getOrCreateConstructionInfo(fn: any): any;
	    createConstructionInfo(fn: any): any;
	}

}
declare module 'aurelia-dependency-injection/index' {
	export { TransientRegistration, SingletonRegistration, Resolver, Lazy, All, Optional, Parent, ClassActivator, FactoryActivator } from 'aurelia-dependency-injection/metadata';
	export { Container } from 'aurelia-dependency-injection/container';
	export function autoinject(target: any): any;
	export function inject(...rest: any[]): (target: any) => void;
	export function registration(value: any): (target: any) => void;
	export function transient(key: any): (target: any) => void;
	export function singleton(keyOrRegisterInChild: any, registerInChild?: boolean): (target: any) => void;
	export function instanceActivator(value: any): (target: any) => void;
	export function factory(): (target: any) => void;

}
declare module 'aurelia-dependency-injection' {
	export * from 'aurelia-dependency-injection/index';
}
declare module 'aurelia-history-browser/index' {
	import { History } from 'aurelia-history';
	export class BrowserHistory extends History {
	    interval: any;
	    active: any;
	    previousFragment: any;
	    location: any;
	    history: any;
	    root: any;
	    options: any;
	    fragment: any;
	    iframe: any;
	    private _checkUrlCallback;
	    private _hasPushState;
	    private _wantsHashChange;
	    private _wantsPushState;
	    private _checkUrlInterval;
	    private _checkUrlTimer;
	    constructor();
	    getHash(window?: any): any;
	    getFragment(fragment?: any, forcePushState?: any): any;
	    activate(options?: any): any;
	    deactivate(): void;
	    checkUrl(): boolean;
	    loadUrl(fragmentOverride?: any): any;
	    navigate(fragment?: any, options?: any): any;
	    navigateBack(): void;
	}
	export function configure(aurelia: any): void;

}
declare module 'aurelia-history-browser' {
	export * from 'aurelia-history-browser/index';
}
declare module 'aurelia-http-client/headers' {
	export class Headers {
	    headers: any;
	    constructor(headers?: {});
	    add(key: any, value: any): void;
	    get(key: any): any;
	    clear(): void;
	    configureXHR(xhr: any): void;
	    /**
	     * XmlHttpRequest's getAllResponseHeaders() method returns a string of response
	     * headers according to the format described here:
	     * http://www.w3.org/TR/XMLHttpRequest/#the-getallresponseheaders-method
	     * This method parses that string into a user-friendly key/value pair object.
	     */
	    static parse(headerStr: any): Headers;
	}

}
declare module 'aurelia-http-client/http-response-message' {
	export class HttpResponseMessage {
	    requestMessage: any;
	    statusCode: any;
	    response: any;
	    isSuccess: any;
	    statusText: any;
	    reviver: any;
	    mimeType: any;
	    responseType: any;
	    headers: any;
	    private _content;
	    constructor(requestMessage: any, xhr: any, responseType: any, reviver?: any);
	    content: any;
	}
	/**
	 * MimeTypes mapped to responseTypes
	 *
	 * @type {Object}
	 */
	export var mimeTypes: {
	    "text/html": string;
	    "text/javascript": string;
	    "application/javascript": string;
	    "text/json": string;
	    "application/json": string;
	    "application/rss+xml": string;
	    "application/atom+xml": string;
	    "application/xhtml+xml": string;
	    "text/markdown": string;
	    "text/xml": string;
	    "text/mathml": string;
	    "application/xml": string;
	    "text/yml": string;
	    "text/csv": string;
	    "text/css": string;
	    "text/less": string;
	    "text/stylus": string;
	    "text/scss": string;
	    "text/sass": string;
	    "text/plain": string;
	};

}
declare module 'aurelia-http-client/request-message-processor' {
	export class RequestMessageProcessor {
	    XHRType: any;
	    transformers: any;
	    xhr: any;
	    constructor(xhrType: any, transformers: any);
	    abort(): void;
	    process(client: any, message: any): Promise<{}>;
	}

}
declare module 'aurelia-http-client/transformers' {
	export function timeoutTransformer(client: any, processor: any, message: any, xhr: any): void;
	export function callbackParameterNameTransformer(client: any, processor: any, message: any, xhr: any): void;
	export function credentialsTransformer(client: any, processor: any, message: any, xhr: any): void;
	export function progressTransformer(client: any, processor: any, message: any, xhr: any): void;
	export function responseTypeTransformer(client: any, processor: any, message: any, xhr: any): void;
	export function headerTransformer(client: any, processor: any, message: any, xhr: any): void;
	export function contentTransformer(client: any, processor: any, message: any, xhr: any): void;

}
declare module 'aurelia-http-client/http-request-message' {
	import { RequestMessageProcessor } from 'aurelia-http-client/request-message-processor';
	export class HttpRequestMessage {
	    method: any;
	    uri: any;
	    content: any;
	    headers: any;
	    responseType: any;
	    constructor(method?: any, uri?: any, content?: any, headers?: any);
	}
	export function createHttpRequestMessageProcessor(): RequestMessageProcessor;

}
declare module 'aurelia-http-client/jsonp-request-message' {
	import { RequestMessageProcessor } from 'aurelia-http-client/request-message-processor';
	export class JSONPRequestMessage {
	    method: any;
	    uri: any;
	    content: any;
	    headers: any;
	    responseType: any;
	    callbackParameterName: any;
	    constructor(uri?: any, callbackParameterName?: any);
	}
	export function createJSONPRequestMessageProcessor(): RequestMessageProcessor;

}
declare module 'aurelia-http-client/request-builder' {
	/**
	* A builder class allowing fluent composition of HTTP requests.
	*
	* @class RequestBuilder
	* @constructor
	*/
	export class RequestBuilder {
	    client: any;
	    transformers: any;
	    useJsonp: any;
	    constructor(client: any);
	    /**
	    * Adds a user-defined request transformer to the RequestBuilder.
	    *
	    * @method addHelper
	    * @param {String} name The name of the helper to add.
	    * @param {Function} fn The helper function.
	    * @chainable
	    */
	    static addHelper(name: any, fn: any): void;
	    /**
	    * Sends the request.
	    *
	    * @method send
	    * @return {Promise} A cancellable promise object.
	    */
	    send(): any;
	}

}
declare module 'aurelia-http-client/http-client' {
	import { RequestBuilder } from 'aurelia-http-client/request-builder';
	/**
	* The main HTTP client object.
	*
	* @class HttpClient
	* @constructor
	*/
	export class HttpClient {
	    requestTransformers: any;
	    requestProcessorFactories: any;
	    pendingRequests: any;
	    isRequesting: any;
	    constructor();
	    /**
	     * Configure this HttpClient with default settings to be used by all requests.
	     *
	     * @method configure
	     * @param {Function} fn A function that takes a RequestBuilder as an argument.
	     * @chainable
	     */
	    configure(fn: any): HttpClient;
	    /**
	     * Returns a new RequestBuilder for this HttpClient instance that can be used to build and send HTTP requests.
	     *
	     * @method createRequest
	     * @param uri The target URI.
	     * @type RequestBuilder
	     */
	    createRequest(uri: any): RequestBuilder;
	    /**
	     * Sends a message using the underlying networking stack.
	     *
	     * @method send
	     * @param message A configured HttpRequestMessage or JSONPRequestMessage.
	     * @param {Array} transformers A collection of transformers to apply to the HTTP request.
	     * @return {Promise} A cancellable promise object.
	     */
	    send(message: any, transformers: any): any;
	    /**
	     * Sends an HTTP DELETE request.
	     *
	     * @method delete
	     * @param {String} uri The target URI.
	     * @return {Promise} A cancellable promise object.
	     */
	    delete(uri: any): any;
	    /**
	     * Sends an HTTP GET request.
	     *
	     * @method get
	     * @param {String} uri The target URI.
	     * @return {Promise} A cancellable promise object.
	     */
	    get(uri: any): any;
	    /**
	     * Sends an HTTP HEAD request.
	     *
	     * @method head
	     * @param {String} uri The target URI.
	     * @return {Promise} A cancellable promise object.
	     */
	    head(uri: any): any;
	    /**
	     * Sends a JSONP request.
	     *
	     * @method jsonp
	     * @param {String} uri The target URI.
	     * @return {Promise} A cancellable promise object.
	     */
	    jsonp(uri: any, callbackParameterName?: string): any;
	    /**
	     * Sends an HTTP OPTIONS request.
	     *
	     * @method options
	     * @param {String} uri The target URI.
	     * @return {Promise} A cancellable promise object.
	     */
	    options(uri: any): any;
	    /**
	     * Sends an HTTP PUT request.
	     *
	     * @method put
	     * @param {String} uri The target URI.
	     * @param {Object} uri The request payload.
	     * @return {Promise} A cancellable promise object.
	     */
	    put(uri: any, content: any): any;
	    /**
	     * Sends an HTTP PATCH request.
	     *
	     * @method patch
	     * @param {String} uri The target URI.
	     * @param {Object} uri The request payload.
	     * @return {Promise} A cancellable promise object.
	     */
	    patch(uri: any, content: any): any;
	    /**
	     * Sends an HTTP POST request.
	     *
	     * @method post
	     * @param {String} uri The target URI.
	     * @param {Object} uri The request payload.
	     * @return {Promise} A cancellable promise object.
	     */
	    post(uri: any, content: any): any;
	}

}
declare module 'aurelia-http-client/index' {
	/**
	 * An extensible HTTP client provided by Aurelia.
	 *
	 * @module HttpClient
	 */
	export { HttpClient } from 'aurelia-http-client/http-client';
	export { HttpRequestMessage } from 'aurelia-http-client/http-request-message';
	export { HttpResponseMessage, mimeTypes } from 'aurelia-http-client/http-response-message';
	export { JSONPRequestMessage } from 'aurelia-http-client/jsonp-request-message';
	export { Headers } from 'aurelia-http-client/headers';
	export { RequestBuilder } from 'aurelia-http-client/request-builder';

}
declare module 'aurelia-http-client' {
	export * from 'aurelia-http-client/index';
}
declare module 'aurelia-loader/template-registry-entry' {
	export class TemplateDependency {
	    src: any;
	    name: any;
	    constructor(src: any, name: any);
	}
	export class TemplateRegistryEntry {
	    id: any;
	    template: any;
	    dependencies: any;
	    resources: any;
	    factory: any;
	    constructor(id: any);
	    templateIsLoaded: boolean;
	    isReady: boolean;
	    setTemplate(template: any): void;
	    setResources(resources: any): void;
	    setFactory(factory: any): void;
	}

}
declare module 'aurelia-loader/loader' {
	export class Loader {
	    templateRegistry: any;
	    constructor();
	    loadModule(id: any): void;
	    loadAllModules(ids: any): void;
	    loadTemplate(url: any): void;
	    getOrCreateTemplateRegistryEntry(id: any): any;
	    importDocument(url: any): Promise<{}>;
	    importTemplate(url: any): Promise<any>;
	    findTemplate(doc: any, url: any): any;
	}

}
declare module 'aurelia-loader/index' {
	export { TemplateRegistryEntry, TemplateDependency } from 'aurelia-loader/template-registry-entry';
	export { Loader } from 'aurelia-loader/loader';

}
declare module 'aurelia-loader' {
	export * from 'aurelia-loader/index';
}
declare module 'aurelia-binding/access-keyed-observer' {
	export class AccessKeyedObserver {
	    objectInfo: any;
	    keyInfo: any;
	    evaluate: any;
	    observerLocator: any;
	    disposeKey: any;
	    disposeObject: any;
	    disposeProperty: any;
	    callback: any;
	    constructor(objectInfo: any, keyInfo: any, observerLocator: any, evaluate: any);
	    updatePropertySubscription(object: any, key: any): void;
	    objectOrKeyChanged(object: any, key?: any): void;
	    subscribe(callback: any): () => void;
	    notify(): void;
	    dispose(): void;
	}

}
declare module 'aurelia-binding/array-change-records' {
	export function calcSplices(current: any, currentStart: any, currentEnd: any, old: any, oldStart: any, oldEnd: any): any;
	export function projectArraySplices(array: any, changeRecords: any): any[];

}
declare module 'aurelia-binding/environment' {
	export var hasObjectObserve: boolean;
	export var hasArrayObserve: boolean;

}
declare module 'aurelia-binding/map-change-records' {
	export function getChangeRecords(map: any): any[];

}
declare module 'aurelia-binding/collection-observation' {
	export class ModifyCollectionObserver {
	    taskQueue: any;
	    queued: any;
	    callbacks: any;
	    changeRecords: any;
	    oldCollection: any;
	    collection: any;
	    lengthPropertyName: any;
	    lengthObserver: any;
	    array: any;
	    constructor(taskQueue: any, collection: any);
	    subscribe(callback: any): () => void;
	    addChangeRecord(changeRecord: any): void;
	    reset(oldCollection: any): void;
	    getLengthObserver(): any;
	    call(): void;
	}
	export class CollectionLengthObserver {
	    collection: any;
	    callbacks: any;
	    lengthPropertyName: any;
	    currentValue: any;
	    constructor(collection: any);
	    getValue(): any;
	    setValue(newValue: any): void;
	    subscribe(callback: any): () => void;
	    call(newValue: any): void;
	}

}
declare module 'aurelia-binding/array-observation' {
	export function getArrayObserver(taskQueue: any, array: any): any;

}
declare module 'aurelia-binding/path-observer' {
	export class PathObserver {
	    leftObserver: any;
	    disposeLeft: any;
	    rightObserver: any;
	    disposeRight: any;
	    callback: any;
	    constructor(leftObserver: any, getRightObserver: any, value: any);
	    updateRight(observer: any): any;
	    subscribe(callback: any): () => void;
	    notify(newValue: any): void;
	    dispose(): void;
	}

}
declare module 'aurelia-binding/composite-observer' {
	export class CompositeObserver {
	    subscriptions: any;
	    evaluate: any;
	    callback: any;
	    constructor(observers: any, evaluate: any);
	    subscribe(callback: any): () => void;
	    notify(newValue: any): void;
	    dispose(): void;
	}

}
declare module 'aurelia-binding/ast' {
	import { AccessKeyedObserver } from 'aurelia-binding/access-keyed-observer';
	export class Expression {
	    isChain: any;
	    isAssignable: any;
	    constructor();
	    evaluate(): void;
	    assign(): void;
	    toString(): string;
	}
	export class Chain extends Expression {
	    expressions: any;
	    constructor(expressions: any);
	    evaluate(scope?: any, valueConverters?: any): any;
	    accept(visitor: any): void;
	}
	export class ValueConverter extends Expression {
	    expression: any;
	    name: any;
	    args: any;
	    allArgs: any;
	    constructor(expression: any, name: any, args: any, allArgs: any);
	    evaluate(scope?: any, valueConverters?: any): any;
	    assign(scope?: any, value?: any, valueConverters?: any): any;
	    accept(visitor: any): void;
	    connect(binding: any, scope: any): {
	        value: any;
	        observer: any;
	    };
	}
	export class Assign extends Expression {
	    target: any;
	    value: any;
	    constructor(target: any, value: any);
	    evaluate(scope?: any, valueConverters?: any): any;
	    accept(vistor: any): void;
	    connect(binding: any, scope: any): {
	        value: any;
	    };
	}
	export class Conditional extends Expression {
	    condition: any;
	    yes: any;
	    no: any;
	    constructor(condition: any, yes: any, no: any);
	    evaluate(scope?: any, valueConverters?: any): any;
	    accept(visitor: any): void;
	    connect(binding: any, scope: any): {
	        value: any;
	        observer: any;
	    };
	}
	export class AccessScope extends Expression {
	    name: any;
	    isAssignable: any;
	    constructor(name: any);
	    evaluate(scope?: any, valueConverters?: any): any;
	    assign(scope?: any, value?: any): any;
	    accept(visitor: any): void;
	    connect(binding: any, scope: any): {
	        value: any;
	        observer: any;
	    };
	}
	export class AccessMember extends Expression {
	    object: any;
	    name: any;
	    isAssignable: any;
	    constructor(object: any, name: any);
	    evaluate(scope?: any, valueConverters?: any): any;
	    assign(scope?: any, value?: any): any;
	    accept(visitor: any): void;
	    connect(binding: any, scope: any): {
	        value: any;
	        observer: any;
	    };
	}
	export class AccessKeyed extends Expression {
	    object: any;
	    key: any;
	    isAssignable: any;
	    constructor(object: any, key: any);
	    evaluate(scope?: any, valueConverters?: any): any;
	    assign(scope?: any, value?: any): any;
	    accept(visitor: any): void;
	    connect(binding: any, scope: any): {
	        value: any;
	        observer: AccessKeyedObserver;
	    };
	}
	export class CallScope extends Expression {
	    name: any;
	    args: any;
	    constructor(name: any, args: any);
	    evaluate(scope?: any, valueConverters?: any, args?: any): any;
	    accept(visitor: any): void;
	    connect(binding: any, scope: any): {
	        value: any;
	        observer: any;
	    };
	}
	export class CallMember extends Expression {
	    object: any;
	    name: any;
	    args: any;
	    constructor(object: any, name: any, args: any);
	    evaluate(scope?: any, valueConverters?: any, args?: any): any;
	    accept(visitor: any): void;
	    connect(binding: any, scope: any): {
	        value: any;
	        observer: any;
	    };
	}
	export class CallFunction extends Expression {
	    func: any;
	    args: any;
	    constructor(func: any, args: any);
	    evaluate(scope?: any, valueConverters?: any, args?: any): any;
	    accept(visitor: any): void;
	    connect(binding: any, scope: any): {
	        value: any;
	        observer: any;
	    };
	}
	export class Binary extends Expression {
	    operation: any;
	    left: any;
	    right: any;
	    constructor(operation: any, left: any, right: any);
	    evaluate(scope?: any, valueConverters?: any): any;
	    accept(visitor: any): void;
	    connect(binding: any, scope: any): {
	        value: any;
	        observer: any;
	    };
	}
	export class PrefixNot extends Expression {
	    operation: any;
	    expression: any;
	    constructor(operation: any, expression: any);
	    evaluate(scope?: any, valueConverters?: any): boolean;
	    accept(visitor: any): void;
	    connect(binding: any, scope: any): {
	        value: boolean;
	        observer: any;
	    };
	}
	export class LiteralPrimitive extends Expression {
	    value: any;
	    constructor(value: any);
	    evaluate(scope?: any, valueConverters?: any): any;
	    accept(visitor: any): void;
	    connect(binding: any, scope: any): {
	        value: any;
	    };
	}
	export class LiteralString extends Expression {
	    value: any;
	    constructor(value: any);
	    evaluate(scope?: any, valueConverters?: any): any;
	    accept(visitor: any): void;
	    connect(binding: any, scope: any): {
	        value: any;
	    };
	}
	export class LiteralArray extends Expression {
	    elements: any;
	    constructor(elements: any);
	    evaluate(scope?: any, valueConverters?: any): any[];
	    accept(visitor: any): void;
	    connect(binding: any, scope: any): {
	        value: any[];
	        observer: any;
	    };
	}
	export class LiteralObject extends Expression {
	    keys: any;
	    values: any;
	    constructor(keys: any, values: any);
	    evaluate(scope?: any, valueConverters?: any): {};
	    accept(visitor: any): void;
	    connect(binding: any, scope: any): {
	        value: {};
	        observer: any;
	    };
	}
	export class Unparser {
	    buffer: any;
	    constructor(buffer: any);
	    static unparse(expression: any): string;
	    write(text: any): void;
	    writeArgs(args: any): void;
	    visitChain(chain: any): void;
	    visitValueConverter(converter: any): void;
	    visitAssign(assign: any): void;
	    visitConditional(conditional: any): void;
	    visitAccessScope(access: any): void;
	    visitAccessMember(access: any): void;
	    visitAccessKeyed(access: any): void;
	    visitCallScope(call: any): void;
	    visitCallFunction(call: any): void;
	    visitCallMember(call: any): void;
	    visitPrefix(prefix: any): void;
	    visitBinary(binary: any): void;
	    visitLiteralPrimitive(literal: any): void;
	    visitLiteralArray(literal: any): void;
	    visitLiteralObject(literal: any): void;
	    visitLiteralString(literal: any): void;
	}

}
declare module 'aurelia-binding/binding-modes' {
	export const bindingMode: {
	    oneTime: number;
	    oneWay: number;
	    twoWay: number;
	};

}
declare module 'aurelia-binding/binding-expression' {
	export class BindingExpression {
	    observerLocator: any;
	    targetProperty: any;
	    sourceExpression: any;
	    mode: any;
	    valueConverterLookupFunction: any;
	    attribute: any;
	    discrete: any;
	    constructor(observerLocator: any, targetProperty: any, sourceExpression: any, mode: any, valueConverterLookupFunction: any, attribute?: any);
	    createBinding(target: any): any;
	}

}
declare module 'aurelia-binding/call-expression' {
	export class CallExpression {
	    observerLocator: any;
	    targetProperty: any;
	    sourceExpression: any;
	    valueConverterLookupFunction: any;
	    constructor(observerLocator: any, targetProperty: any, sourceExpression: any, valueConverterLookupFunction: any);
	    createBinding(target: any): any;
	}

}
declare module 'aurelia-binding/computed-observation' {
	export class ComputedPropertyObserver {
	    obj: any;
	    propertyName: any;
	    descriptor: any;
	    observerLocator: any;
	    callbacks: any;
	    oldValue: any;
	    subscriptions: any;
	    constructor(obj: any, propertyName: any, descriptor: any, observerLocator: any);
	    getValue(): any;
	    setValue(newValue: any): void;
	    trigger(newValue: any, oldValue: any): void;
	    evaluate(): void;
	    subscribe(callback: any): () => void;
	}
	export function hasDeclaredDependencies(descriptor: any): any;
	export function declarePropertyDependencies(ctor: any, propertyName: any, dependencies: any): void;

}
declare module 'aurelia-binding/dirty-checking' {
	export class DirtyChecker {
	    tracked: any;
	    checkDelay: any;
	    constructor();
	    addProperty(property: any): void;
	    removeProperty(property: any): void;
	    scheduleDirtyCheck(): void;
	    check(): void;
	}
	export class DirtyCheckProperty {
	    dirtyChecker: any;
	    obj: any;
	    propertyName: any;
	    callbacks: any;
	    isSVG: any;
	    oldValue: any;
	    tracking: any;
	    newValue: any;
	    constructor(dirtyChecker: any, obj: any, propertyName: any);
	    getValue(): any;
	    setValue(newValue: any): void;
	    call(): void;
	    isDirty(): boolean;
	    beginTracking(): void;
	    endTracking(): void;
	    subscribe(callback: any): () => void;
	}

}
declare module 'aurelia-binding/element-observation' {
	export class XLinkAttributeObserver {
	    element: any;
	    propertyName: any;
	    attributeName: any;
	    constructor(element: any, propertyName: any, attributeName: any);
	    getValue(): any;
	    setValue(newValue: any): any;
	    subscribe(callback: any): void;
	}
	export class DataAttributeObserver {
	    element: any;
	    propertyName: any;
	    constructor(element: any, propertyName: any);
	    getValue(): any;
	    setValue(newValue: any): any;
	    subscribe(callback: any): void;
	}
	export class StyleObserver {
	    element: any;
	    propertyName: any;
	    constructor(element: any, propertyName: any);
	    getValue(): any;
	    setValue(newValue: any): void;
	    subscribe(callback: any): void;
	    flattenCss(object: any): string;
	}
	export class ValueAttributeObserver {
	    element: any;
	    propertyName: any;
	    handler: any;
	    callbacks: any;
	    oldValue: any;
	    disposeHandler: any;
	    constructor(element: any, propertyName: any, handler: any);
	    getValue(): any;
	    setValue(newValue: any): void;
	    call(): void;
	    subscribe(callback: any): any;
	    unsubscribe(callback: any): void;
	}
	export class SelectValueObserver {
	    element: any;
	    handler: any;
	    observerLocator: any;
	    value: any;
	    arraySubscription: any;
	    initialSync: any;
	    oldValue: any;
	    callbacks: any;
	    disposeHandler: any;
	    domObserver: any;
	    constructor(element: any, handler: any, observerLocator: any);
	    getValue(): any;
	    setValue(newValue: any): void;
	    synchronizeOptions(): void;
	    synchronizeValue(): void;
	    call(): void;
	    subscribe(callback: any): any;
	    unsubscribe(callback: any): void;
	    bind(): void;
	    unbind(): void;
	}
	export class CheckedObserver {
	    element: any;
	    handler: any;
	    observerLocator: any;
	    value: any;
	    arraySubscription: any;
	    initialSync: any;
	    oldValue: any;
	    callbacks: any;
	    disposeHandler: any;
	    constructor(element: any, handler: any, observerLocator: any);
	    getValue(): any;
	    setValue(newValue: any): void;
	    synchronizeElement(): void;
	    synchronizeValue(): void;
	    call(): void;
	    subscribe(callback: any): any;
	    unsubscribe(callback: any): void;
	    unbind(): void;
	}

}
declare module 'aurelia-binding/event-manager' {
	export class EventManager {
	    elementHandlerLookup: any;
	    eventStrategyLookup: any;
	    defaultEventStrategy: any;
	    constructor();
	    registerElementConfig(config: any): void;
	    registerElementPropertyConfig(tagName: any, propertyName: any, events: any): void;
	    registerElementHandler(tagName: any, handler: any): void;
	    registerEventStrategy(eventName: any, strategy: any): void;
	    getElementHandler(target: any, propertyName: any): any;
	    addEventListener(target: any, targetEvent: any, callback: any, delegate: any): any;
	}

}
declare module 'aurelia-binding/value-converter' {
	export class ValueConverterResource {
	    name: any;
	    instance: any;
	    constructor(name?: any);
	    static convention(name: any): ValueConverterResource;
	    analyze(container: any, target: any): void;
	    register(registry: any, name: any): void;
	    load(container: any, target: any): Promise<ValueConverterResource>;
	}

}
declare module 'aurelia-binding/property-observation' {
	export class SetterObserver {
	    taskQueue: any;
	    obj: any;
	    propertyName: any;
	    callbacks: any;
	    queued: any;
	    observing: any;
	    currentValue: any;
	    oldValue: any;
	    constructor(taskQueue: any, obj: any, propertyName: any);
	    getValue(): any;
	    setValue(newValue: any): void;
	    getterValue(): any;
	    setterValue(newValue: any): void;
	    call(): void;
	    subscribe(callback: any): () => void;
	    convertProperty(): void;
	}
	export class OoObjectObserver {
	    obj: any;
	    observers: any;
	    observerLocator: any;
	    observing: any;
	    constructor(obj: any, observerLocator: any);
	    subscribe(propertyObserver: any, callback: any): () => void;
	    getObserver(propertyName: any, descriptor: any): any;
	    handleChanges(changeRecords: any): void;
	}
	export class OoPropertyObserver {
	    owner: any;
	    obj: any;
	    propertyName: any;
	    callbacks: any;
	    constructor(owner: any, obj: any, propertyName: any);
	    getValue(): any;
	    setValue(newValue: any): void;
	    trigger(newValue: any, oldValue: any): void;
	    subscribe(callback: any): any;
	}
	export class UndefinedPropertyObserver {
	    owner: any;
	    obj: any;
	    propertyName: any;
	    callbackMap: any;
	    callbacks: any;
	    actual: any;
	    subscription: any;
	    constructor(owner: any, obj: any, propertyName: any);
	    getValue(): any;
	    setValue(newValue: any): void;
	    trigger(newValue: any, oldValue: any): void;
	    getObserver(): void;
	    subscribe(callback: any): any;
	}

}
declare module 'aurelia-binding/observer-locator' {
	export class ObserverLocator {
	    taskQueue: any;
	    eventManager: any;
	    dirtyChecker: any;
	    observationAdapters: any;
	    static inject(): any[];
	    constructor(taskQueue: any, eventManager: any, dirtyChecker: any, observationAdapters: any);
	    getObserversLookup(obj: any): any;
	    getObserver(obj: any, propertyName: any): any;
	    getObservationAdapter(obj: any, propertyName: any, descriptor: any): any;
	    createPropertyObserver(obj: any, propertyName: any): any;
	    getArrayObserver(array: any): any;
	    getMapObserver(map: any): any;
	}
	export class ObjectObservationAdapter {
	    handlesProperty(object: any, propertyName: any, descriptor: any): void;
	    getObserver(object: any, propertyName: any, descriptor: any): void;
	}

}
declare module 'aurelia-binding/lexer' {
	export class Token {
	    index: any;
	    text: any;
	    opKey: any;
	    key: any;
	    value: any;
	    constructor(index: any, text: any);
	    withOp(op: any): Token;
	    withGetterSetter(key: any): Token;
	    withValue(value: any): Token;
	    toString(): string;
	}
	export class Lexer {
	    lex(text: any): any[];
	}
	export class Scanner {
	    input: any;
	    length: any;
	    peek: any;
	    index: any;
	    constructor(input: any);
	    scanToken(): any;
	    scanCharacter(start: any, text: any): Token;
	    scanOperator(start: any, text: any): Token;
	    scanComplexOperator(start: any, code: any, one: any, two: any): Token;
	    scanIdentifier(): Token;
	    scanNumber(start: any): Token;
	    scanString(): Token;
	    advance(): void;
	    error(message: any, offset?: number): void;
	}

}
declare module 'aurelia-binding/parser' {
	import { AccessScope, LiteralObject } from 'aurelia-binding/ast';
	export class Parser {
	    cache: any;
	    lexer: any;
	    constructor();
	    parse(input: any): any;
	}
	export class ParserImplementation {
	    index: any;
	    input: any;
	    tokens: any;
	    constructor(lexer: any, input: any);
	    peek: any;
	    parseChain(): any;
	    parseValueConverter(): any;
	    parseExpression(): any;
	    parseConditional(): any;
	    parseLogicalOr(): any;
	    parseLogicalAnd(): any;
	    parseEquality(): any;
	    parseRelational(): any;
	    parseAdditive(): any;
	    parseMultiplicative(): any;
	    parsePrefix(): any;
	    parseAccessOrCallMember(): any;
	    parsePrimary(): any;
	    parseAccessOrCallScope(): AccessScope;
	    parseObject(): LiteralObject;
	    parseExpressionList(terminator: any): any[];
	    optional(text: any): boolean;
	    expect(text: any): void;
	    advance(): void;
	    error(message: any): void;
	}

}
declare module 'aurelia-binding/listener-expression' {
	export class ListenerExpression {
	    eventManager: any;
	    targetEvent: any;
	    sourceExpression: any;
	    delegate: any;
	    discrete: any;
	    preventDefault: any;
	    constructor(eventManager: any, targetEvent: any, sourceExpression: any, delegate: any, preventDefault: any);
	    createBinding(target: any): any;
	}

}
declare module 'aurelia-binding/name-expression' {
	export class NameExpression {
	    property: any;
	    discrete: any;
	    mode: any;
	    constructor(name: any, mode: any);
	    createBinding(target: any): any;
	}

}
declare module 'aurelia-binding/index' {
	export { EventManager } from 'aurelia-binding/event-manager';
	export { ObserverLocator, ObjectObservationAdapter } from 'aurelia-binding/observer-locator';
	export { ValueConverterResource } from 'aurelia-binding/value-converter';
	export { calcSplices } from 'aurelia-binding/array-change-records';
	export * from 'aurelia-binding/binding-modes';
	export { Parser } from 'aurelia-binding/parser';
	export { BindingExpression } from 'aurelia-binding/binding-expression';
	export { ListenerExpression } from 'aurelia-binding/listener-expression';
	export { NameExpression } from 'aurelia-binding/name-expression';
	export { CallExpression } from 'aurelia-binding/call-expression';
	export { DirtyChecker } from 'aurelia-binding/dirty-checking';
	export { getChangeRecords } from 'aurelia-binding/map-change-records';
	export { ComputedPropertyObserver, declarePropertyDependencies } from 'aurelia-binding/computed-observation';
	export function valueConverter(nameOrTarget: any): (target: any) => void;
	export function computedFrom(...rest: any[]): (target: any, key: any, descriptor: any) => any;

}
declare module 'aurelia-binding' {
	export * from 'aurelia-binding/index';
}
declare module 'aurelia-loader-default/index' {
	import { Loader } from 'aurelia-loader';
	export class DefaultLoader extends Loader {
	    moduleRegistry: any;
	    constructor();
	    loadModule(id: any): any;
	    loadAllModules(ids: any): Promise<any[]>;
	    loadTemplate(url: any): any;
	}

}
declare module 'aurelia-loader-default' {
	export * from 'aurelia-loader-default/index';
}
declare module 'aurelia-router/navigation-commands' {
	/**
	 * Determines if the provided object is a navigation command.
	 * A navigation command is anything with a navigate method.
	 * @param {object} obj The item to check.
	 * @return {boolean}
	 */
	export function isNavigationCommand(obj: any): boolean;
	/**
	* Used during the activation lifecycle to cause a redirect.
	*
	* @class Redirect
	* @constructor
	* @param {String} url The url to redirect to.
	*/
	export class Redirect {
	    url: any;
	    options: any;
	    shouldContinueProcessing: any;
	    router: any;
	    constructor(url: any, options?: any);
	    /**
	    * Called by the activation system to set the child router.
	    *
	    * @method setRouter
	    * @param {Router} router
	    */
	    setRouter(router: any): void;
	    /**
	    * Called by the navigation pipeline to navigate.
	    *
	    * @method navigate
	    * @param {Router} appRouter - a router which should redirect
	    */
	    navigate(appRouter: any): void;
	}

}
declare module 'aurelia-router/navigation-plan' {
	export const activationStrategy: {
	    noChange: string;
	    invokeLifecycle: string;
	    replace: string;
	};
	export function buildNavigationPlan(navigationContext: any, forceLifecycleMinimum?: any): Promise<{}>;
	export class BuildNavigationPlanStep {
	    run(navigationContext: any, next: any): any;
	}

}
declare module 'aurelia-router/util' {
	export function processPotential(obj: any, resolve: any, reject: any): any;

}
declare module 'aurelia-router/activation' {
	export var affirmations: string[];
	export class CanDeactivatePreviousStep {
	    run(navigationContext: any, next: any): any;
	}
	export class CanActivateNextStep {
	    run(navigationContext: any, next: any): any;
	}
	export class DeactivatePreviousStep {
	    run(navigationContext: any, next: any): any;
	}
	export class ActivateNextStep {
	    run(navigationContext: any, next: any): any;
	}

}
declare module 'aurelia-router/navigation-context' {
	export class NavigationContext {
	    router: any;
	    nextInstruction: any;
	    currentInstruction: any;
	    prevInstruction: any;
	    plan: any;
	    constructor(router: any, nextInstruction: any);
	    getAllContexts(acc?: any[]): any[];
	    nextInstructions: any[];
	    currentInstructions: any[];
	    prevInstructions: any[];
	    commitChanges(waitToSwap: any): Promise<void>;
	    updateTitle(): void;
	    buildTitle(separator?: string): any;
	}
	export class CommitChangesStep {
	    run(navigationContext: any, next: any): any;
	}

}
declare module 'aurelia-router/navigation-instruction' {
	export class NavigationInstruction {
	    fragment: any;
	    queryString: any;
	    params: any;
	    queryParams: any;
	    config: any;
	    lifecycleArgs: any;
	    viewPortInstructions: any;
	    constructor(fragment: any, queryString: any, params: any, queryParams: any, config: any, parentInstruction: any);
	    addViewPortInstruction(viewPortName: any, strategy: any, moduleId: any, component: any): {
	        name: any;
	        strategy: any;
	        moduleId: any;
	        component: any;
	        childRouter: any;
	        lifecycleArgs: any;
	    };
	    getWildCardName(): any;
	    getWildcardPath(): any;
	    getBaseUrl(): any;
	}

}
declare module 'aurelia-router/nav-model' {
	/**
	 * Class for storing and interacting with a route's navigation settings
	 *
	 * @class NavModel
	 * @constructor
	 */
	export class NavModel {
	    router: any;
	    relativeHref: any;
	    isActive: any;
	    title: any;
	    href: any;
	    settings: any;
	    config: any;
	    order: any;
	    constructor(router: any, relativeHref: any);
	    /**
	     * Sets the route's title and updates document.title.
	     *  If the a navigation is in progress, the change will be applied
	     *  to document.title when the navigation completes.
	     *
	     * @method setTitle
	     * @param {String} title The new title.
	     */
	    setTitle(title: any): void;
	}

}
declare module 'aurelia-router/route-filters' {
	export class RouteFilterContainer {
	    static inject(): any[];
	    container: any;
	    filters: any;
	    filterCache: any;
	    constructor(container: any);
	    addStep(name: any, step: any, index?: number): void;
	    getFilterSteps(name: any): any;
	}
	export function createRouteFilterStep(name: any): any;

}
declare module 'aurelia-router/router-configuration' {
	export class RouterConfiguration {
	    instructions: any;
	    options: any;
	    pipelineSteps: any;
	    unknownRouteConfig: any;
	    title: any;
	    constructor();
	    addPipelineStep(name: any, step: any): void;
	    map(route: any): RouterConfiguration;
	    mapRoute(config: any): RouterConfiguration;
	    mapUnknownRoutes(config: any): RouterConfiguration;
	    exportToRouter(router: any): void;
	}

}
declare module 'aurelia-router/router' {
	import { NavModel } from 'aurelia-router/nav-model';
	export class Router {
	    container: any;
	    history: any;
	    viewPorts: any;
	    baseUrl: any;
	    isConfigured: any;
	    parent: any;
	    navigation: any;
	    recognizer: any;
	    childRecognizer: any;
	    catchAllHandler: any;
	    routes: any;
	    fallbackOrder: any;
	    currentInstruction: any;
	    isNavigating: any;
	    constructor(container: any, history: any);
	    isRoot: boolean;
	    registerViewPort(viewPort: any, name: any): void;
	    refreshBaseUrl(): void;
	    refreshNavigation(): void;
	    configure(callbackOrConfig: any): Router;
	    createRootedPath(fragment: any): any;
	    navigate(fragment: any, options: any): any;
	    navigateToRoute(route: any, params: any, options: any): any;
	    navigateBack(): void;
	    createChild(container: any): Router;
	    createNavigationInstruction(url?: string, parentInstruction?: any): Promise<any>;
	    createNavigationContext(instruction: any): any;
	    generate(name: any, params: any): any;
	    createNavModel(config: any): NavModel;
	    addRoute(config: any, navModel: any): void;
	    hasRoute(name: any): boolean;
	    hasOwnRoute(name: any): any;
	    handleUnknownRoutes(config: any): void;
	    updateTitle(): any;
	    reset(): void;
	}

}
declare module 'aurelia-router/pipeline' {
	export const pipelineStatus: {
	    completed: string;
	    cancelled: string;
	    rejected: string;
	    running: string;
	};
	export class Pipeline {
	    steps: any;
	    constructor();
	    withStep(step: any): Pipeline;
	    run(ctx: any): any;
	}

}
declare module 'aurelia-router/route-loading' {
	export class RouteLoader {
	    loadRoute(router: any, config: any): void;
	}
	export class LoadRouteStep {
	    static inject(): typeof RouteLoader[];
	    routeLoader: any;
	    constructor(routeLoader: any);
	    run(navigationContext: any, next: any): Promise<{}>;
	}
	export function loadNewRoute(routeLoader: any, navigationContext: any): Promise<{}[]>;

}
declare module 'aurelia-router/pipeline-provider' {
	import { Pipeline } from 'aurelia-router/pipeline';
	export class PipelineProvider {
	    static inject(): any[];
	    container: any;
	    steps: any;
	    constructor(container: any);
	    createPipeline(navigationContext: any): Pipeline;
	}

}
declare module 'aurelia-router/app-router' {
	import { Router } from 'aurelia-router/router';
	export class AppRouter extends Router {
	    static inject(): any[];
	    pipelineProvider: any;
	    events: any;
	    history: any;
	    queue: any;
	    isNavigating: any;
	    isActive: any;
	    container: any;
	    options: any;
	    constructor(container: any, history: any, pipelineProvider: any, events: any);
	    isRoot: boolean;
	    loadUrl(url: any): Promise<{}>;
	    queueInstruction(instruction: any): Promise<{}>;
	    dequeueInstruction(): void;
	    registerViewPort(viewPort: any, name: any): Promise<void>;
	    activate(options?: any): void;
	    deactivate(): void;
	    reset(): void;
	}

}
declare module 'aurelia-router/index' {
	export { Router } from 'aurelia-router/router';
	export { AppRouter } from 'aurelia-router/app-router';
	export { PipelineProvider } from 'aurelia-router/pipeline-provider';
	export { Redirect } from 'aurelia-router/navigation-commands';
	export { RouteLoader } from 'aurelia-router/route-loading';
	export { RouterConfiguration } from 'aurelia-router/router-configuration';
	export { activationStrategy } from 'aurelia-router/navigation-plan';
	export { RouteFilterContainer, createRouteFilterStep } from 'aurelia-router/route-filters';

}
declare module 'aurelia-router' {
	export * from 'aurelia-router/index';
}
declare module 'aurelia-templating/animator' {
	export class Animator {
	    static instance: any;
	    static configureDefault(container: any, animatorInstance?: any): void;
	    move(): Promise<boolean>;
	    enter(element: any): Promise<boolean>;
	    leave(element: any): Promise<boolean>;
	    removeClass(element: any, className: any): Promise<boolean>;
	    addClass(element: any, className: any): Promise<boolean>;
	}

}
declare module 'aurelia-templating/behavior-instance' {
	export class BehaviorInstance {
	    behavior: any;
	    executionContext: any;
	    isAttached: any;
	    boundProperties: any;
	    view: any;
	    contentView: any;
	    constructor(behavior: any, executionContext: any, instruction: any);
	    created(context: any): void;
	    bind(context: any): void;
	    unbind(): void;
	    attached(): void;
	    detached(): void;
	}

}
declare module 'aurelia-templating/util' {
	export function hyphenate(name: any): any;
	export function nextElementSibling(element: any): any;

}
declare module 'aurelia-templating/bindable-property' {
	export class BindableProperty {
	    name: any;
	    attribute: any;
	    defaultBindingMode: any;
	    changeHandler: any;
	    owner: any;
	    descriptor: any;
	    defaultValue: any;
	    hasOptions: any;
	    isDynamic: any;
	    constructor(nameOrConfig: any);
	    registerWith(target: any, behavior: any, descriptor?: any): any;
	    configureDescriptor(behavior: any, descriptor: any): any;
	    defineOn(target: any, behavior: any): void;
	    createObserver(executionContext: any): BehaviorPropertyObserver;
	    initialize(executionContext: any, observerLookup: any, attributes: any, behaviorHandlesBind: any, boundProperties: any): void;
	    createDynamicProperty(executionContext: any, observerLookup: any, behaviorHandlesBind: any, name: any, attribute: any, boundProperties: any): void;
	}
	export class BehaviorPropertyObserver {
	    taskQueue: any;
	    obj: any;
	    propertyName: any;
	    callbacks: any;
	    notqueued: any;
	    publishing: any;
	    selfSubscriber: any;
	    currentValue: any;
	    oldValue: any;
	    constructor(taskQueue: any, obj: any, propertyName: any, selfSubscriber: any, initialValue?: any);
	    getValue(): any;
	    setValue(newValue: any): void;
	    call(): void;
	    subscribe(callback: any): () => void;
	}

}
declare module 'aurelia-templating/binding-language' {
	export class BindingLanguage {
	    inspectAttribute(resources: any, attrName: any, attrValue: any): void;
	    createAttributeInstruction(resources: any, element: any, info: any, existingInstruction: any): void;
	    parseText(resources: any, value: any): void;
	}

}
declare module 'aurelia-templating/children' {
	export class ChildObserver {
	    selector: any;
	    changeHandler: any;
	    property: any;
	    constructor(property: any, changeHandler: any, selector: any);
	    createBinding(target: any, behavior: any): ChildObserverBinder;
	}
	export class ChildObserverBinder {
	    selector: any;
	    target: any;
	    property: any;
	    behavior: any;
	    changeHandler: any;
	    observer: any;
	    constructor(selector: any, target: any, property: any, behavior: any, changeHandler: any);
	    bind(source: any): void;
	    unbind(): void;
	    onChange(mutations: any): void;
	}

}
declare module 'aurelia-templating/view-strategy' {
	export class ViewStrategy {
	    static metadataKey: string;
	    makeRelativeTo(baseUrl: any): void;
	    static normalize(value: any): any;
	    static getDefault(target: any): any;
	}
	export class UseViewStrategy extends ViewStrategy {
	    path: any;
	    absolutePath: any;
	    moduleId: any;
	    constructor(path: any);
	    loadViewFactory(viewEngine: any, options: any): any;
	    makeRelativeTo(file: any): void;
	}
	export class ConventionalViewStrategy extends ViewStrategy {
	    moduleId: any;
	    viewUrl: any;
	    constructor(moduleId: any);
	    loadViewFactory(viewEngine: any, options: any): any;
	    static convertModuleIdToViewUrl(moduleId: any): string;
	}
	export class NoViewStrategy extends ViewStrategy {
	    loadViewFactory(): Promise<any>;
	}
	export class TemplateRegistryViewStrategy extends ViewStrategy {
	    moduleId: any;
	    registryEntry: any;
	    constructor(moduleId: any, registryEntry: any);
	    loadViewFactory(viewEngine: any, options: any): any;
	}

}
declare module 'aurelia-templating/resource-registry' {
	export class ResourceRegistry {
	    attributes: any;
	    elements: any;
	    valueConverters: any;
	    attributeMap: any;
	    baseResourceUrl: any;
	    constructor();
	    registerElement(tagName: any, behavior: any): void;
	    getElement(tagName: any): any;
	    registerAttribute(attribute: any, behavior: any, knownAttribute: any): void;
	    getAttribute(attribute: any): any;
	    registerValueConverter(name: any, valueConverter: any): void;
	    getValueConverter(name: any): any;
	}
	export class ViewResources extends ResourceRegistry {
	    parent: any;
	    viewUrl: any;
	    valueConverterLookupFunction: any;
	    constructor(parent: any, viewUrl: any);
	    relativeToView(path: any): any;
	    getElement(tagName: any): any;
	    mapAttribute(attribute: any): any;
	    getAttribute(attribute: any): any;
	    getValueConverter(name: any): any;
	}

}
declare module 'aurelia-templating/view' {
	export class View {
	    fragment: any;
	    behaviors: any;
	    bindings: any;
	    children: any;
	    systemControlled: any;
	    contentSelectors: any;
	    firstChild: any;
	    lastChild: any;
	    isBound: any;
	    isAttached: any;
	    executionContext: any;
	    owner: any;
	    constructor(fragment: any, behaviors: any, bindings: any, children: any, systemControlled: any, contentSelectors: any);
	    created(executionContext: any): void;
	    bind(executionContext: any, systemUpdate?: any): void;
	    addBinding(binding: any): void;
	    unbind(): void;
	    insertNodesBefore(refNode: any): void;
	    appendNodesTo(parent: any): void;
	    removeNodes(): void;
	    attached(): void;
	    detached(): void;
	}

}
declare module 'aurelia-templating/content-selector' {
	export class ContentSelector {
	    static applySelectors(view: any, contentSelectors: any, callback: any): void;
	    anchor: any;
	    selector: any;
	    all: any;
	    groups: any;
	    constructor(anchor: any, selector: any);
	    copyForViewSlot(): ContentSelector;
	    matches(node: any): any;
	    add(group: any): void;
	    insert(index: any, group: any): void;
	    removeAt(index: any, fragment: any): void;
	}

}
declare module 'aurelia-templating/view-slot' {
	export class ViewSlot {
	    anchor: any;
	    viewAddMethod: any;
	    executionContext: any;
	    animator: any;
	    children: any;
	    isBound: any;
	    isAttached: any;
	    contentSelectors: any;
	    constructor(anchor: any, anchorIsContainer: any, executionContext?: any, animator?: any);
	    transformChildNodesIntoView(): void;
	    bind(executionContext: any): void;
	    unbind(): void;
	    add(view: any): void;
	    insert(index: any, view: any): void;
	    remove(view: any): void;
	    removeAt(index: any): any;
	    removeAll(): Promise<void>;
	    swap(view: any): void;
	    attached(): void;
	    detached(): void;
	    installContentSelectors(contentSelectors: any): void;
	    contentSelectorAdd(view: any): void;
	    contentSelectorInsert(index: any, view: any): void;
	    contentSelectorRemove(view: any): void;
	    contentSelectorRemoveAt(index: any): any;
	    contentSelectorRemoveAll(): any;
	}

}
declare module 'aurelia-templating/view-factory' {
	export class BoundViewFactory {
	    parentContainer: any;
	    viewFactory: any;
	    executionContext: any;
	    factoryOptions: any;
	    constructor(parentContainer: any, viewFactory: any, executionContext: any);
	    create(executionContext: any): any;
	}
	export class ViewFactory {
	    template: any;
	    instructions: any;
	    resources: any;
	    part: any;
	    partReplacements: any;
	    constructor(template: any, instructions: any, resources: any);
	    create(container: any, executionContext: any, options?: any): any;
	}

}
declare module 'aurelia-templating/view-compiler' {
	import { ViewFactory } from 'aurelia-templating/view-factory';
	import { BindingLanguage } from 'aurelia-templating/binding-language';
	export class ViewCompiler {
	    bindingLanguage: any;
	    static inject(): typeof BindingLanguage[];
	    constructor(bindingLanguage: any);
	    compile(templateOrFragment: any, resources: any, options?: any): ViewFactory;
	    compileNode(node: any, resources: any, instructions: any, parentNode: any, parentInjectorId: any, targetLightDOM: any): any;
	    compileElement(node: any, resources: any, instructions: any, parentNode: any, parentInjectorId: any, targetLightDOM: any): any;
	}

}
declare module 'aurelia-templating/html-behavior' {
	import { BehaviorInstance } from 'aurelia-templating/behavior-instance';
	export class HtmlBehaviorResource {
	    elementName: any;
	    attributeName: any;
	    liftsContent: any;
	    targetShadowDOM: any;
	    skipContentProcessing: any;
	    usesShadowDOM: any;
	    childExpression: any;
	    hasDynamicOptions: any;
	    properties: any;
	    attributes: any;
	    observerLocator: any;
	    taskQueue: any;
	    target: any;
	    handlesCreated: any;
	    handlesBind: any;
	    handlesUnbind: any;
	    handlesAttached: any;
	    handlesDetached: any;
	    apiName: any;
	    viewStrategy: any;
	    viewFactory: any;
	    constructor();
	    static convention(name: any, existing?: any): any;
	    analyze(container: any, target: any): void;
	    load(container: any, target: any, viewStrategy: any, transientView: any): any;
	    register(registry: any, name: any): void;
	    compile(compiler: any, resources: any, node: any, instruction: any, parentNode: any): any;
	    create(container: any, instruction?: any, element?: any, bindings?: any): BehaviorInstance;
	    ensurePropertiesDefined(instance: any, lookup: any): void;
	}

}
declare module 'aurelia-templating/module-analyzer' {
	export class ModuleAnalyzer {
	    cache: any;
	    constructor();
	    getAnalysis(moduleId: any): any;
	    analyze(moduleId: any, moduleInstance: any, viewModelMember: any): any;
	}

}
declare module 'aurelia-templating/view-engine' {
	export class ViewEngine {
	    static inject(): any[];
	    loader: any;
	    container: any;
	    viewCompiler: any;
	    moduleAnalyzer: any;
	    appResources: any;
	    constructor(loader: any, container: any, viewCompiler: any, moduleAnalyzer: any, appResources: any);
	    loadViewFactory(urlOrRegistryEntry: any, compileOptions: any, associatedModuleId: any): any;
	    loadTemplateResources(viewRegistryEntry: any, associatedModuleId: any): any;
	    importViewModelResource(moduleImport: any, moduleMember: any): any;
	    importViewResources(moduleIds: any, names: any, resources: any, associatedModuleId: any): any;
	}

}
declare module 'aurelia-templating/composition-engine' {
	import { ViewEngine } from 'aurelia-templating/view-engine';
	export class CompositionEngine {
	    static inject(): typeof ViewEngine[];
	    viewEngine: any;
	    constructor(viewEngine: any);
	    activate(instruction: any): any;
	    createBehaviorAndSwap(instruction: any): any;
	    createBehavior(instruction: any): any;
	    createViewModel(instruction: any): any;
	    compose(instruction: any): any;
	}

}
declare module 'aurelia-templating/element-config' {
	export class ElementConfigResource {
	    load(container: any, target: any): Promise<ElementConfigResource>;
	    register(): void;
	}

}
declare module 'aurelia-templating/decorators' {
	export function behavior(override: any): any;
	export function customElement(name: any): any;
	export function customAttribute(name: any): any;
	export function templateController(target?: any): any;
	export function bindable(nameOrConfigOrTarget: any, key?: any, descriptor?: any): any;
	export function dynamicOptions(target?: any): any;
	export function syncChildren(property: any, changeHandler: any, selector: any): any;
	export function useShadowDOM(target: any): any;
	export function skipContentProcessing(target: any): any;
	export function viewStrategy(strategy: any): any;
	export function useView(path: any): any;
	export function noView(target?: any): any;
	export function elementConfig(target: any): any;

}
declare module 'aurelia-templating/index' {
	export { HtmlBehaviorResource } from 'aurelia-templating/html-behavior';
	export { BindableProperty } from 'aurelia-templating/bindable-property';
	export { ResourceRegistry, ViewResources } from 'aurelia-templating/resource-registry';
	export { ChildObserver } from 'aurelia-templating/children';
	export { ElementConfigResource } from 'aurelia-templating/element-config';
	export { ViewStrategy, UseViewStrategy, ConventionalViewStrategy, NoViewStrategy } from 'aurelia-templating/view-strategy';
	export { ViewCompiler } from 'aurelia-templating/view-compiler';
	export { ViewEngine } from 'aurelia-templating/view-engine';
	export { ViewFactory, BoundViewFactory } from 'aurelia-templating/view-factory';
	export { ViewSlot } from 'aurelia-templating/view-slot';
	export { View } from 'aurelia-templating/view';
	export { BindingLanguage } from 'aurelia-templating/binding-language';
	export { CompositionEngine } from 'aurelia-templating/composition-engine';
	export { Animator } from 'aurelia-templating/animator';
	export * from 'aurelia-templating/decorators';

}
declare module 'aurelia-templating' {
	export * from 'aurelia-templating/index';
}
declare module 'aurelia-animator-css/animator' {
	export class CssAnimator {
	    animationStack: any;
	    constructor();
	    addMultipleEventListener(el: any, s: any, fn: any, b: any): void;
	    addAnimationToStack(animId: any): void;
	    removeAnimationFromStack(animId: any): void;
	    getElementAnimationDelay(element: any): number;
	    move(): Promise<boolean>;
	    enter(element: any): Promise<{}>;
	    leave(element: any): Promise<{}>;
	    removeClass(element: any, className: any): Promise<{}>;
	    addClass(element: any, className: any): Promise<{}>;
	}

}
declare module 'aurelia-animator-css/index' {
	export { CssAnimator } from 'aurelia-animator-css/animator';
	export function configure(aurelia: any): void;

}
declare module 'aurelia-animator-css' {
	export * from 'aurelia-animator-css/index';
}
declare module 'aurelia-framework/plugins' {
	/**
	 * Manages loading and configuring plugins.
	 *
	 * @class Plugins
	 * @constructor
	 * @param {Aurelia} aurelia An instance of Aurelia.
	 */
	export class Plugins {
	    aurelia: any;
	    info: any;
	    processed: any;
	    constructor(aurelia: any);
	    /**
	     * Configures a plugin before Aurelia starts.
	     *
	     * @method plugin
	     * @param {moduleId} moduleId The ID of the module to configure.
	     * @param {config} config The configuration for the specified module.
	     * @return {Plugins} Returns the current Plugins instance.
	   */
	    plugin(moduleId: any, config: any): Plugins;
	    _process(): any;
	}

}
declare module 'aurelia-framework/aurelia' {
	/**
	 * The framework core that provides the main Aurelia object.
	 *
	 * @class Aurelia
	 * @constructor
	 * @param {Loader} loader The loader for this Aurelia instance to use. If a loader is not specified, Aurelia will use a defaultLoader.
	 * @param {Container} container The dependency injection container for this Aurelia instance to use. If a container is not specified, Aurelia will create an empty container.
	 * @param {ResourceRegistry} resources The resource registry for this Aurelia instance to use. If a resource registry is not specified, Aurelia will create an empty registry.
	 */
	export class Aurelia {
	    loader: any;
	    container: any;
	    resources: any;
	    use: any;
	    resourcesToLoad: any;
	    currentPluginId: any;
	    started: any;
	    host: any;
	    root: any;
	    constructor(loader?: any, container?: any, resources?: any);
	    /**
	     * Adds an existing object to the framework's dependency injection container.
	     *
	     * @method withInstance
	     * @param {Class} type The object type of the dependency that the framework will inject.
	     * @param {Object} instance The existing instance of the dependency that the framework will inject.
	     * @return {Aurelia} Returns the current Aurelia instance.
	     */
	    withInstance(type: any, instance: any): Aurelia;
	    /**
	     * Adds a singleton to the framework's dependency injection container.
	     *
	     * @method withSingleton
	     * @param {Class} type The object type of the dependency that the framework will inject.
	     * @param {Object} implementation The constructor function of the dependency that the framework will inject.
	     * @return {Aurelia} Returns the current Aurelia instance.
	     */
	    withSingleton(type: any, implementation: any): Aurelia;
	    /**
	     * Adds globally available view resources to be imported into the Aurelia framework.
	     *
	     * @method globalizeResources
	     * @param {Object|Array} resources The relative module id to the resource. (Relative to the plugin's installer.)
	     * @return {Aurelia} Returns the current Aurelia instance.
	     */
	    globalizeResources(resources: any): Aurelia;
	    /**
	     * Renames a global resource that was imported.
	     *
	     * @method renameGlobalResource
	     * @param {String} resourcePath The path to the resource.
	     * @param {String} newName The new name.
	     * @return {Aurelia} Returns the current Aurelia instance.
	     */
	    renameGlobalResource(resourcePath: any, newName: any): Aurelia;
	    /**
	     * Loads plugins, then resources, and then starts the Aurelia instance.
	     *
	     * @method start
	     * @return {Aurelia} Returns the started Aurelia instance.
	     */
	    start(): any;
	    /**
	     * Instantiates the root view-model and view and add them to the DOM.
	     *
	     * @method withSingleton
	     * @param {Object} root The root view-model to load upon bootstrap.
	     * @param {string|Object} applicationHost The DOM object that Aurelia will attach to.
	     * @return {Aurelia} Returns the current Aurelia instance.
	     */
	    setRoot(root?: string, applicationHost?: any): any;
	}

}
declare module 'aurelia-framework/index' {
	/**
	 * The aurelia framework brings together all the required core aurelia libraries into a ready-to-go application-building platform.
	 *
	 * @module framework
	 */
	export { Aurelia } from 'aurelia-framework/aurelia';
	export * from 'aurelia-dependency-injection';
	export * from 'aurelia-binding';
	export * from 'aurelia-metadata';
	export * from 'aurelia-templating';
	export * from 'aurelia-loader';
	export * from 'aurelia-task-queue';
	export var LogManager: any;

}
declare module 'aurelia-framework' {
	export * from 'aurelia-framework/index';
}
declare module 'aurelia-templating-binding/syntax-interpreter' {
	export class SyntaxInterpreter {
	    static inject(): any[];
	    parser: any;
	    observerLocator: any;
	    eventManager: any;
	    attributeMap: any;
	    language: any;
	    constructor(parser: any, observerLocator: any, eventManager: any);
	    interpret(resources: any, element: any, info: any, existingInstruction: any): any;
	    handleUnknownCommand(resources: any, element: any, info: any, existingInstruction: any): any;
	    determineDefaultBindingMode(element: any, attrName: any): any;
	    bind(resources: any, element: any, info: any, existingInstruction: any): any;
	    trigger(resources: any, element: any, info: any): any;
	    delegate(resources: any, element: any, info: any): any;
	    call(resources: any, element: any, info: any, existingInstruction: any): any;
	    options(resources: any, element: any, info: any, existingInstruction: any): any;
	}

}
declare module 'aurelia-templating-binding/binding-language' {
	import { BindingLanguage } from 'aurelia-templating';
	export class TemplatingBindingLanguage extends BindingLanguage {
	    static inject(): any[];
	    parser: any;
	    observerLocator: any;
	    syntaxInterpreter: any;
	    emptyStringExpression: any;
	    attributeMap: any;
	    constructor(parser: any, observerLocator: any, syntaxInterpreter: any);
	    inspectAttribute(resources: any, attrName: any, attrValue: any): any;
	    createAttributeInstruction(resources: any, element: any, info: any, existingInstruction: any): any;
	    parseText(resources: any, value: any): InterpolationBindingExpression;
	    parseContent(resources: any, attrName: any, attrValue: any): InterpolationBindingExpression;
	}
	export class InterpolationBindingExpression {
	    observerLocator: any;
	    targetProperty: any;
	    parts: any;
	    mode: any;
	    valueConverterLookupFunction: any;
	    attribute: any;
	    discrete: any;
	    constructor(observerLocator: any, targetProperty: any, parts: any, mode: any, valueConverterLookupFunction: any, attribute: any);
	    createBinding(target: any): any;
	}

}
declare module 'aurelia-templating-binding/index' {
	export function configure(aurelia: any): void;
	export { TemplatingBindingLanguage } from 'aurelia-templating-binding/binding-language';
	export { SyntaxInterpreter } from 'aurelia-templating-binding/syntax-interpreter';

}
declare module 'aurelia-templating-binding' {
	export * from 'aurelia-templating-binding/index';
}
declare module 'aurelia-templating-resources/compose' {
	export class Compose {
	    element: any;
	    container: any;
	    compositionEngine: any;
	    viewSlot: any;
	    viewResources: any;
	    taskQueue: any;
	    executionContext: any;
	    view: any;
	    viewModel: any;
	    model: any;
	    currentInstruction: any;
	    currentViewModel: any;
	    constructor(element: any, container: any, compositionEngine: any, viewSlot: any, viewResources: any, taskQueue: any);
	    bind(executionContext: any): void;
	    modelChanged(newValue: any, oldValue: any): void;
	    viewChanged(newValue: any, oldValue: any): void;
	    viewModelChanged(newValue: any, oldValue: any): void;
	}

}
declare module 'aurelia-templating-resources/global-behavior' {
	export class GlobalBehavior {
	    element: any;
	    handler: any;
	    aureliaCommand: any;
	    aureliaAttrName: any;
	    static handlers: any;
	    static createSettingsFromBehavior: any;
	    static jQueryPlugins: any;
	    constructor(element: any);
	    bind(): void;
	    attached(): void;
	    detached(): void;
	    unbind(): void;
	}

}
declare module 'aurelia-templating-resources/if' {
	export class If {
	    viewFactory: any;
	    viewSlot: any;
	    showing: any;
	    view: any;
	    constructor(viewFactory: any, viewSlot: any);
	    valueChanged(newValue: any): void;
	}

}
declare module 'aurelia-templating-resources/with' {
	export class With {
	    viewFactory: any;
	    viewSlot: any;
	    view: any;
	    constructor(viewFactory: any, viewSlot: any);
	    valueChanged(newValue: any): void;
	}

}
declare module 'aurelia-templating-resources/repeat' {
	export class Repeat {
	    viewFactory: any;
	    viewSlot: any;
	    observerLocator: any;
	    local: any;
	    key: any;
	    value: any;
	    items: any;
	    executionContext: any;
	    oldItems: any;
	    disposeSubscription: any;
	    lastBoundItems: any;
	    constructor(viewFactory: any, viewSlot: any, observerLocator: any);
	    bind(executionContext: any): void;
	    unbind(): void;
	    itemsChanged(): void;
	    processItems(): void;
	    processArrayItems(items: any): void;
	    processMapEntries(items: any): void;
	    processNumber(value: any): void;
	    createBaseExecutionContext(data: any): any;
	    createBaseExecutionKvpContext(key: any, value: any): any;
	    createFullExecutionContext(data: any, index: any, length: any): any;
	    createFullExecutionKvpContext(key: any, value: any, index: any, length: any): any;
	    updateExecutionContext(context: any, index: any, length: any): any;
	    handleSplices(array: any, splices: any): void;
	    handleMapChangeRecords(map: any, records: any): void;
	    getViewIndexByKey(key: any): any;
	}

}
declare module 'aurelia-templating-resources/show' {
	export class Show {
	    element: any;
	    constructor(element: any);
	    valueChanged(newValue: any): void;
	}

}
declare module 'aurelia-templating-resources/sanitize-html' {
	export class SanitizeHtmlValueConverter {
	    static defaultSanitizer(untrustedMarkup: any): any;
	    sanitizer: any;
	    constructor();
	    toView(untrustedMarkup: any): any;
	}

}
declare module 'aurelia-templating-resources/replaceable' {
	export class Replaceable {
	    constructor(viewFactory: any, viewSlot: any);
	}

}
declare module 'aurelia-templating-resources/index' {
	export function configure(aurelia: any): void;
	export { Compose } from 'aurelia-templating-resources/compose';
	export { If } from 'aurelia-templating-resources/if';
	export { With } from 'aurelia-templating-resources/with';
	export { Repeat } from 'aurelia-templating-resources/repeat';
	export { Show } from 'aurelia-templating-resources/show';
	export { GlobalBehavior } from 'aurelia-templating-resources/global-behavior';
	export { SanitizeHtmlValueConverter } from 'aurelia-templating-resources/sanitize-html';
	export { Replaceable } from 'aurelia-templating-resources/replaceable';

}
declare module 'aurelia-templating-resources' {
	export * from 'aurelia-templating-resources/index';
}
declare module 'aurelia-templating-router/route-loader' {
	import { RouteLoader } from 'aurelia-router';
	export class TemplatingRouteLoader extends RouteLoader {
	    compositionEngine: any;
	    constructor(compositionEngine: any);
	    loadRoute(router: any, config: any): any;
	}

}
declare module 'aurelia-templating-router/router-view' {
	export class RouterView {
	    element: any;
	    container: any;
	    viewSlot: any;
	    router: any;
	    view: any;
	    constructor(element: any, container: any, viewSlot: any, router: any);
	    bind(executionContext: any): void;
	    process(viewPortInstruction: any, waitToSwap: any): any;
	    swap(viewPortInstruction: any): void;
	}

}
declare module 'aurelia-templating-router/route-href' {
	export class RouteHref {
	    router: any;
	    element: any;
	    route: any;
	    params: any;
	    attribute: any;
	    constructor(router: any, element: any);
	    bind(): void;
	    attributeChanged(value: any, previous: any): void;
	    processChange(): void;
	}

}
declare module 'aurelia-templating-router/index' {
	export function configure(aurelia: any): void;
	export { TemplatingRouteLoader } from 'aurelia-templating-router/route-loader';
	export { RouterView } from 'aurelia-templating-router/router-view';
	export { RouteHref } from 'aurelia-templating-router/route-href';

}
declare module 'aurelia-templating-router' {
	export * from 'aurelia-templating-router/index';
}
declare module 'aurelia-validation/validation/utilities' {
	export class Utilities {
	    constructor();
	    static getValue(val: any): any;
	    static isEmptyValue(val: any): boolean;
	}

}
declare module 'aurelia-validation/validation/validation-locale' {
	export class ValidationLocale {
	    static Repository: any;
	    defaults: any;
	    currentLocale: any;
	    constructor(defaults: any, data: any);
	    getValueFor(identifier: any, category: any): any;
	    setting(settingIdentifier: any): any;
	    translate(translationIdentifier: any, newValue: any, threshold: any): any;
	}

}
declare module 'aurelia-validation/validation/validate-custom-attribute-view-strategy' {
	export class ValidateCustomAttributeViewStrategyBase {
	    bindingPathAttributes: any;
	    constructor();
	    getValidationProperty(validation: any, element: any): any;
	    prepareElement(validationProperty: any, element: any): void;
	    updateElement(validationProperty: any, element: any): void;
	}
	export class TWBootstrapViewStrategy extends ValidateCustomAttributeViewStrategyBase {
	    appendMessageToInput: any;
	    appendMessageToLabel: any;
	    helpBlockClass: any;
	    constructor(appendMessageToInput: any, appendMessageToLabel: any, helpBlockClass: any);
	    searchFormGroup(currentElement: any, currentDepth: any): any;
	    findLabels(formGroup: any, inputId: any): any[];
	    findLabelsRecursively(currentElement: any, inputId: any, currentLabels: any, currentDepth: any): void;
	    appendMessageToElement(element: any, validationProperty: any): void;
	    appendUIVisuals(validationProperty: any, currentElement: any): void;
	    prepareElement(validationProperty: any, element: any): void;
	    updateElement(validationProperty: any, element: any): void;
	}
	export class ValidateCustomAttributeViewStrategy {
	}

}
declare module 'aurelia-validation/validation/validation-config' {
	export class ValidationConfigDefaults {
	    static _defaults: any;
	    static defaults: any;
	}
	export class ValidationConfig {
	    static uniqueListenerId: any;
	    innerConfig: any;
	    values: any;
	    changedHandlers: any;
	    constructor(innerConfig?: any);
	    getValue(identifier: any): any;
	    setValue(identifier: any, value: any): ValidationConfig;
	    onLocaleChanged(callback: any): any;
	    getDebounceTimeout(): any;
	    useDebounceTimeout(value: any): ValidationConfig;
	    getDependencies(): any;
	    computedFrom(dependencies: any): ValidationConfig;
	    useLocale(localeIdentifier: any): ValidationConfig;
	    locale(): any;
	    useViewStrategy(viewStrategy: any): ValidationConfig;
	    getViewStrategy(): any;
	}

}
declare module 'aurelia-validation/validation/validation-result' {
	export class ValidationResult {
	    isValid: any;
	    properties: any;
	    constructor();
	    addProperty(name: any): any;
	    checkValidity(): void;
	    clear(): void;
	}
	export class ValidationResultProperty {
	    group: any;
	    onValidateCallbacks: any;
	    isValid: any;
	    isDirty: any;
	    message: any;
	    failingRule: any;
	    latestValue: any;
	    constructor(group: any);
	    clear(): void;
	    onValidate(onValidateCallback: any): void;
	    notifyObserversOfChange(): void;
	    setValidity(validationResponse: any, shouldBeDirty: any): void;
	}

}
declare module 'aurelia-validation/validation/validation-rules' {
	export class ValidationRule {
	    onValidate: any;
	    threshold: any;
	    message: any;
	    errorMessage: any;
	    ruleName: any;
	    constructor(threshold: any, onValidate: any, message?: any);
	    withMessage(message: any): void;
	    explain(): any;
	    setResult(result: any, currentValue: any, locale: any): boolean;
	    /**
	     * Validation rules: return a promise that fulfills and resolves to true/false
	     */
	    validate(currentValue: any, locale: any): Promise<boolean>;
	}
	export class EmailValidationRule extends ValidationRule {
	    isFQDN: any;
	    emailUserUtf8Regex: any;
	    constructor();
	}
	export class MinimumLengthValidationRule extends ValidationRule {
	    constructor(minimumLength: any);
	}
	export class MaximumLengthValidationRule extends ValidationRule {
	    constructor(maximumLength: any);
	}
	export class BetweenLengthValidationRule extends ValidationRule {
	    constructor(minimumLength: any, maximumLength: any);
	}
	export class CustomFunctionValidationRule extends ValidationRule {
	    constructor(customFunction: any, threshold: any);
	}
	export class NumericValidationRule extends ValidationRule {
	    constructor();
	}
	export class RegexValidationRule extends ValidationRule {
	    constructor(regex: any);
	}
	export class ContainsOnlyValidationRule extends RegexValidationRule {
	    constructor(regex: any);
	}
	export class MinimumValueValidationRule extends ValidationRule {
	    constructor(minimumValue: any);
	}
	export class MinimumInclusiveValueValidationRule extends ValidationRule {
	    constructor(minimumValue: any);
	}
	export class MaximumValueValidationRule extends ValidationRule {
	    constructor(maximumValue: any);
	}
	export class MaximumInclusiveValueValidationRule extends ValidationRule {
	    constructor(maximumValue: any);
	}
	export class BetweenValueValidationRule extends ValidationRule {
	    constructor(minimumValue: any, maximumValue: any);
	}
	export class DigitValidationRule extends ValidationRule {
	    digitRegex: any;
	    constructor();
	}
	export class AlphaNumericValidationRule extends ValidationRule {
	    alphaNumericRegex: any;
	    constructor();
	}
	export class AlphaValidationRule extends ValidationRule {
	    alphaRegex: any;
	    constructor();
	}
	export class AlphaOrWhitespaceValidationRule extends ValidationRule {
	    alphaNumericRegex: any;
	    constructor();
	}
	export class AlphaNumericOrWhitespaceValidationRule extends ValidationRule {
	    alphaNumericRegex: any;
	    constructor();
	}
	export class MediumPasswordValidationRule extends ValidationRule {
	    constructor(minimumComplexityLevel: any);
	}
	export class StrongPasswordValidationRule extends MediumPasswordValidationRule {
	    constructor();
	}
	export class EqualityValidationRuleBase extends ValidationRule {
	    constructor(otherValue: any, equality: any, otherValueLabel?: any);
	}
	export class EqualityValidationRule extends EqualityValidationRuleBase {
	    constructor(otherValue: any);
	}
	export class EqualityWithOtherLabelValidationRule extends EqualityValidationRuleBase {
	    constructor(otherValue: any, otherLabel: any);
	}
	export class InEqualityValidationRule extends EqualityValidationRuleBase {
	    constructor(otherValue: any);
	}
	export class InEqualityWithOtherLabelValidationRule extends EqualityValidationRuleBase {
	    constructor(otherValue: any, otherLabel: any);
	}
	export class InCollectionValidationRule extends ValidationRule {
	    constructor(collection: any);
	}

}
declare module 'aurelia-validation/validation/validation-rules-collection' {
	export class ValidationRulesCollection {
	    isRequired: any;
	    validationRules: any;
	    validationCollections: any;
	    isRequiredMessage: any;
	    constructor();
	    /**
	     * Returns a promise that fulfils and resolves to simple result status object.
	     */
	    validate(newValue: any, locale: any): Promise<{
	        isValid: boolean;
	        message: any;
	        failingRule: string;
	        latestValue: any;
	    }>;
	    addValidationRule(validationRule: any): void;
	    addValidationRuleCollection(validationRulesCollection: any): void;
	    isNotEmpty(): void;
	    withMessage(message: any): void;
	}
	export class SwitchCaseValidationRulesCollection {
	    conditionExpression: any;
	    innerCollections: any;
	    defaultCollection: any;
	    caseLabel: any;
	    defaultCaseLabel: any;
	    constructor(conditionExpression: any);
	    case(caseLabel: any): void;
	    default(): void;
	    getCurrentCollection(caseLabel: any, createIfNotExists?: boolean): any;
	    validate(newValue: any, locale: any): any;
	    addValidationRule(validationRule: any): void;
	    addValidationRuleCollection(validationRulesCollection: any): void;
	    isNotEmpty(): void;
	    withMessage(message: any): void;
	}

}
declare module 'aurelia-validation/validation/path-observer' {
	export class PathObserver {
	    observerLocator: any;
	    path: any;
	    subject: any;
	    observers: any;
	    callbacks: any;
	    constructor(observerLocator: any, subject: any, path: any);
	    observeParts(propertyName?: any): void;
	    observePart(part: any): void;
	    getObserver(): any;
	    getValue(): any;
	    subscribe(callback: any): any;
	}

}
declare module 'aurelia-validation/validation/debouncer' {
	export class Debouncer {
	    currentFunction: any;
	    debounceTimeout: any;
	    constructor(debounceTimeout: any);
	    debounce(func: any): void;
	}

}
declare module 'aurelia-validation/validation/validation-property' {
	export class ValidationProperty {
	    propertyResult: any;
	    propertyName: any;
	    validationGroup: any;
	    collectionOfValidationRules: any;
	    config: any;
	    latestValue: any;
	    observer: any;
	    debouncer: any;
	    dependencyObservers: any;
	    constructor(observerLocator: any, propertyName: any, validationGroup: any, propertyResult: any, config: any);
	    addValidationRule(validationRule: any): void;
	    validateCurrentValue(forceDirty: any, forceExecution?: any): any;
	    clear(): void;
	    /**
	     * returns a promise that fulfils and resolves to true/false
	     */
	    validate(newValue: any, shouldBeDirty: any, forceExecution?: any): any;
	}

}
declare module 'aurelia-validation/validation/validation-group-builder' {
	export class ValidationGroupBuilder {
	    observerLocator: any;
	    validationRuleCollections: any;
	    validationGroup: any;
	    constructor(observerLocator: any, validationGroup: any);
	    ensure(propertyName: any, configurationCallback: any): any;
	    isNotEmpty(): any;
	    isGreaterThan(minimumValue: any): any;
	    isGreaterThanOrEqualTo(minimumValue: any): any;
	    isBetween(minimumValue: any, maximumValue: any): any;
	    isIn(collection: any): any;
	    isLessThan(maximumValue: any): any;
	    isLessThanOrEqualTo(maximumValue: any): any;
	    isEqualTo(otherValue: any, otherValueLabel: any): any;
	    isNotEqualTo(otherValue: any, otherValueLabel: any): any;
	    isEmail(): any;
	    hasMinLength(minimumValue: any): any;
	    hasMaxLength(maximumValue: any): any;
	    hasLengthBetween(minimumValue: any, maximumValue: any): any;
	    isNumber(): any;
	    containsOnlyDigits(): any;
	    containsOnlyAlpha(): any;
	    containsOnlyAlphaOrWhitespace(): any;
	    containsOnlyAlphanumerics(): any;
	    containsOnlyAlphanumericsOrWhitespace(): any;
	    isStrongPassword(minimumComplexityLevel: any): any;
	    containsOnly(regex: any): any;
	    matches(regex: any): any;
	    passes(customFunction: any, threshold: any): any;
	    passesRule(validationRule: any): any;
	    checkLast(): void;
	    withMessage(message: any): any;
	    if(conditionExpression: any): any;
	    else(): any;
	    endIf(): any;
	    switch(conditionExpression: any): any;
	    case(caseLabel: any): any;
	    default(): any;
	    endSwitch(): any;
	}

}
declare module 'aurelia-validation/validation/validation-group' {
	/**
	 * Encapsulates validation rules and their current validation state for a given subject
	 * @class ValidationGroup
	 * @constructor
	 */
	export class ValidationGroup {
	    result: any;
	    subject: any;
	    validationProperties: any;
	    config: any;
	    builder: any;
	    onValidateCallbacks: any;
	    onPropertyValidationCallbacks: any;
	    isValidating: any;
	    onDestroy: any;
	    /**
	     * Instantiates a new {ValidationGroup}
	     * @param subject The subject to evaluate
	     * @param observerLocator The observerLocator used to monitor changes on the subject
	     * @param config The configuration
	     */
	    constructor(subject: any, observerLocator: any, config: any);
	    destroy(): void;
	    clear(): void;
	    onBreezeEntity(): void;
	    /**
	     * Causes complete re-evaluation: gets the latest value, marks the property as 'dirty' (unless false is passed), runs validation rules asynchronously and updates this.result
	     * @returns {Promise} A promise that fulfils when valid, rejects when invalid.
	     */
	    validate(forceDirty?: boolean, forceExecution?: boolean): Promise<any>;
	    onValidate(validationFunction: any, validationFunctionFailedCallback?: any): ValidationGroup;
	    onPropertyValidate(validationFunction: any): ValidationGroup;
	    /**
	     * Adds a validation property for the specified path
	     * @param {String} bindingPath the path of the property/field, for example 'firstName' or 'address.muncipality.zipCode'
	     * @param configCallback a configuration callback
	     * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
	     */
	    ensure(bindingPath: any, configCallback?: any): ValidationGroup;
	    /**
	     * Adds a validation rule that checks a value for being 'isNotEmpty', 'required'
	     * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
	     */
	    isNotEmpty(): any;
	    /**
	     * Adds a validation rule that checks a value for being greater than or equal to a threshold
	     * @param minimumValue the threshold
	     * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
	     */
	    isGreaterThanOrEqualTo(minimumValue: any): any;
	    /**
	     * Adds a validation rule that checks a value for being greater than a threshold
	     * @param minimumValue the threshold
	     * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
	     */
	    isGreaterThan(minimumValue: any): any;
	    /**
	     * Adds a validation rule that checks a value for being greater than or equal to a threshold, and less than or equal to another threshold
	     * @param minimumValue The minimum threshold
	     * @param maximumValue The isLessThanOrEqualTo threshold
	     * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
	     */
	    isBetween(minimumValue: any, maximumValue: any): any;
	    /**
	     * Adds a validation rule that checks a value for being less than a threshold
	     * @param maximumValue The threshold
	     * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
	     */
	    isLessThanOrEqualTo(maximumValue: any): any;
	    /**
	     * Adds a validation rule that checks a value for being less than or equal to a threshold
	     * @param maximumValue The threshold
	     * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
	     */
	    isLessThan(maximumValue: any): any;
	    /**
	     * Adds a validation rule that checks a value for being equal to a threshold
	     * @param otherValue The threshold
	     * @param otherValueLabel Optional: a label to use in the validation message
	     * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
	     */
	    isEqualTo(otherValue: any, otherValueLabel: any): any;
	    /**
	     * Adds a validation rule that checks a value for not being equal to a threshold
	     * @param otherValue The threshold
	     * @param otherValueLabel Optional: a label to use in the validation message
	     * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
	     */
	    isNotEqualTo(otherValue: any, otherValueLabel: any): any;
	    /**
	     * Adds a validation rule that checks a value for being a valid isEmail address
	     * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
	     */
	    isEmail(): any;
	    /**
	     * Adds a validation rule that checks a value for being equal to at least one other value in a particular collection
	     * @param collection The threshold
	     * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
	     */
	    isIn(collection: any): any;
	    /**
	     * Adds a validation rule that checks a value for having a length greater than or equal to a specified threshold
	     * @param minimumValue The threshold
	     * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
	     */
	    hasMinLength(minimumValue: any): any;
	    /**
	     * Adds a validation rule that checks a value for having a length less than a specified threshold
	     * @param maximumValue The threshold
	     * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
	     */
	    hasMaxLength(maximumValue: any): any;
	    /**
	     * Adds a validation rule that checks a value for having a length greater than or equal to a specified threshold and less than another threshold
	     * @param minimumValue The min threshold
	     * @param maximumValue The max threshold
	     * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
	     */
	    hasLengthBetween(minimumValue: any, maximumValue: any): any;
	    /**
	     * Adds a validation rule that checks a value for being numeric, this includes formatted numbers like '-3,600.25'
	     * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
	     */
	    isNumber(): any;
	    /**
	     * Adds a validation rule that checks a value for being strictly numeric, this excludes formatted numbers like '-3,600.25'
	     * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
	     */
	    containsOnlyDigits(): any;
	    containsOnly(regex: any): any;
	    containsOnlyAlpha(): any;
	    containsOnlyAlphaOrWhitespace(): any;
	    containsOnlyLetters(): any;
	    containsOnlyLettersOrWhitespace(): any;
	    /**
	     * Adds a validation rule that checks a value for only containing alphanumerical characters
	     * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
	     */
	    containsOnlyAlphanumerics(): any;
	    /**
	     * Adds a validation rule that checks a value for only containing alphanumerical characters or whitespace
	     * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
	     */
	    containsOnlyAlphanumericsOrWhitespace(): any;
	    /**
	     * Adds a validation rule that checks a value for being a strong password. A strong password contains at least the specified of the following groups: lowercase characters, uppercase characters, digits and special characters.
	     * @param minimumComplexityLevel {Number} Optionally, specifiy the number of groups to match. Default is 4.
	     * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
	     */
	    isStrongPassword(minimumComplexityLevel: any): any;
	    /**
	     * Adds a validation rule that checks a value for matching a particular regex
	     * @param regex the regex to match
	     * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
	     */
	    matches(regex: any): any;
	    /**
	     * Adds a validation rule that checks a value for passing a custom function
	     * @param customFunction {Function} The custom function that needs to pass, that takes two arguments: newValue (the value currently being evaluated) and optionally: threshold, and returns true/false.
	     * @param threshold {Object} An optional threshold that will be passed to the customFunction
	     * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
	     */
	    passes(customFunction: any, threshold?: any): any;
	    /**
	     * Adds the {ValidationRule}
	     * @param validationRule {ValudationRule} The rule that needs to pass
	     * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
	     */
	    passesRule(validationRule: any): any;
	    /**
	     * Specifies that the next validation rules only need to be evaluated when the specified conditionExpression is true
	     * @param conditionExpression {Function} a function that returns true of false.
	     * @param threshold {Object} an optional treshold object that is passed to the conditionExpression
	     * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
	     */
	    if(conditionExpression: any, threshold: any): any;
	    /**
	     * Specifies that the next validation rules only need to be evaluated when the previously specified conditionExpression is false.
	     * See: if(conditionExpression, threshold)
	     * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
	     */
	    else(): any;
	    /**
	     * Specifies that the execution of next validation rules no longer depend on the the previously specified conditionExpression.
	     * See: if(conditionExpression, threshold)
	     * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
	     */
	    endIf(): any;
	    /**
	     * Specifies that the next validation rules only need to be evaluated when they are preceded by a case that matches the conditionExpression
	     * @param conditionExpression {Function} a function that returns a case label to execute. This is optional, when omitted the case label will be matched using the underlying property's value
	     * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
	     */
	    switch(conditionExpression: any): any;
	    /**
	     * Specifies that the next validation rules only need to be evaluated when the caseLabel matches the value returned by a preceding switch statement
	     * See: switch(conditionExpression)
	     * @param caseLabel {Object} the case label
	     * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
	     */
	    case(caseLabel: any): any;
	    /**
	     * Specifies that the next validation rules only need to be evaluated when not other caseLabel matches the value returned by a preceding switch statement
	     * See: switch(conditionExpression)
	     * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
	     */
	    default(): any;
	    /**
	     * Specifies that the execution of next validation rules no longer depend on the the previously specified conditionExpression.
	     * See: switch(conditionExpression)
	     * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
	     */
	    endSwitch(): any;
	    /**
	     * Specifies that the execution of the previous validation rule should use the specified error message if it fails
	     * @param message either a static string or a function that takes two arguments: newValue (the value that has been evaluated) and threshold.
	     * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
	     */
	    withMessage(message: any): any;
	}

}
declare module 'aurelia-validation/validation/validation' {
	import { ValidationGroup } from 'aurelia-validation/validation/validation-group';
	/**
	 * A lightweight validation plugin
	 * @class Validation
	 * @constructor
	 */
	export class Validation {
	    static defaults: any;
	    observerLocator: any;
	    config: any;
	    /**
	     * Instantiates a new {Validation}
	     * @param observerLocator the observerLocator used to observer properties
	     * @param validationConfig the configuration
	     */
	    constructor(observerLocator: any, validationConfig: any);
	    /**
	     * Returns a new validation group on the subject
	     * @param subject The subject to validate
	     * @returns {ValidationGroup} A ValidationGroup that encapsulates the validation rules and current validation state for this subject
	     */
	    on(subject: any, configCallback?: any): ValidationGroup;
	    onBreezeEntity(breezeEntity: any, configCallback: any): ValidationGroup;
	}

}
declare module 'aurelia-validation/validation/validate-custom-attribute' {
	export class ValidateCustomAttribute {
	    element: any;
	    processedValidation: any;
	    viewStrategy: any;
	    value: any;
	    constructor(element: any);
	    valueChanged(newValue: any): void;
	    subscribeChangedHandlers(currentElement: any): void;
	    detached(): void;
	    attached(): void;
	}

}
declare module 'aurelia-validation/validation/decorators' {
	export function ensure(setupStep: any): (target: any, propertyName: any) => void;

}
declare module 'aurelia-validation/index' {
	export { Utilities } from 'aurelia-validation/validation/utilities';
	export { ValidationConfig } from 'aurelia-validation/validation/validation-config';
	export { ValidationLocale } from 'aurelia-validation/validation/validation-locale';
	export * from 'aurelia-validation/validation/validation-result';
	export * from 'aurelia-validation/validation/validation-rules';
	export { Validation } from 'aurelia-validation/validation/validation';
	export { ValidateCustomAttribute } from 'aurelia-validation/validation/validate-custom-attribute';
	export { ValidateCustomAttributeViewStrategy } from 'aurelia-validation/validation/validate-custom-attribute-view-strategy';
	export { ValidateCustomAttributeViewStrategyBase } from 'aurelia-validation/validation/validate-custom-attribute-view-strategy';
	export { ensure } from 'aurelia-validation/validation/decorators';
	export function configure(aurelia: any, configCallback: any): any;

}
declare module 'aurelia-validation' {
	export * from 'aurelia-validation/index';
}
declare module 'aurelia-bootstrapper/index' {
	export function bootstrap(configure: any): Promise<{}>;

}
declare module 'aurelia-bootstrapper' {
	export * from 'aurelia-bootstrapper/index';
}
