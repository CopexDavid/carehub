
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model ChatGroup
 * 
 */
export type ChatGroup = $Result.DefaultSelection<Prisma.$ChatGroupPayload>
/**
 * Model WhatsAppAccount
 * 
 */
export type WhatsAppAccount = $Result.DefaultSelection<Prisma.$WhatsAppAccountPayload>
/**
 * Model WhatsAppMessage
 * 
 */
export type WhatsAppMessage = $Result.DefaultSelection<Prisma.$WhatsAppMessagePayload>
/**
 * Model WhatsAppChat
 * 
 */
export type WhatsAppChat = $Result.DefaultSelection<Prisma.$WhatsAppChatPayload>
/**
 * Model MessageTemplate
 * 
 */
export type MessageTemplate = $Result.DefaultSelection<Prisma.$MessageTemplatePayload>
/**
 * Model WhatsAppBroadcast
 * 
 */
export type WhatsAppBroadcast = $Result.DefaultSelection<Prisma.$WhatsAppBroadcastPayload>
/**
 * Model BroadcastAttachment
 * 
 */
export type BroadcastAttachment = $Result.DefaultSelection<Prisma.$BroadcastAttachmentPayload>
/**
 * Model ClientList
 * 
 */
export type ClientList = $Result.DefaultSelection<Prisma.$ClientListPayload>
/**
 * Model PhoneNumber
 * 
 */
export type PhoneNumber = $Result.DefaultSelection<Prisma.$PhoneNumberPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model AssistantSettings
 * 
 */
export type AssistantSettings = $Result.DefaultSelection<Prisma.$AssistantSettingsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatGroup`: Exposes CRUD operations for the **ChatGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatGroups
    * const chatGroups = await prisma.chatGroup.findMany()
    * ```
    */
  get chatGroup(): Prisma.ChatGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.whatsAppAccount`: Exposes CRUD operations for the **WhatsAppAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WhatsAppAccounts
    * const whatsAppAccounts = await prisma.whatsAppAccount.findMany()
    * ```
    */
  get whatsAppAccount(): Prisma.WhatsAppAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.whatsAppMessage`: Exposes CRUD operations for the **WhatsAppMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WhatsAppMessages
    * const whatsAppMessages = await prisma.whatsAppMessage.findMany()
    * ```
    */
  get whatsAppMessage(): Prisma.WhatsAppMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.whatsAppChat`: Exposes CRUD operations for the **WhatsAppChat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WhatsAppChats
    * const whatsAppChats = await prisma.whatsAppChat.findMany()
    * ```
    */
  get whatsAppChat(): Prisma.WhatsAppChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messageTemplate`: Exposes CRUD operations for the **MessageTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageTemplates
    * const messageTemplates = await prisma.messageTemplate.findMany()
    * ```
    */
  get messageTemplate(): Prisma.MessageTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.whatsAppBroadcast`: Exposes CRUD operations for the **WhatsAppBroadcast** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WhatsAppBroadcasts
    * const whatsAppBroadcasts = await prisma.whatsAppBroadcast.findMany()
    * ```
    */
  get whatsAppBroadcast(): Prisma.WhatsAppBroadcastDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.broadcastAttachment`: Exposes CRUD operations for the **BroadcastAttachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BroadcastAttachments
    * const broadcastAttachments = await prisma.broadcastAttachment.findMany()
    * ```
    */
  get broadcastAttachment(): Prisma.BroadcastAttachmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientList`: Exposes CRUD operations for the **ClientList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientLists
    * const clientLists = await prisma.clientList.findMany()
    * ```
    */
  get clientList(): Prisma.ClientListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.phoneNumber`: Exposes CRUD operations for the **PhoneNumber** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhoneNumbers
    * const phoneNumbers = await prisma.phoneNumber.findMany()
    * ```
    */
  get phoneNumber(): Prisma.PhoneNumberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assistantSettings`: Exposes CRUD operations for the **AssistantSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssistantSettings
    * const assistantSettings = await prisma.assistantSettings.findMany()
    * ```
    */
  get assistantSettings(): Prisma.AssistantSettingsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ChatMessage: 'ChatMessage',
    ChatGroup: 'ChatGroup',
    WhatsAppAccount: 'WhatsAppAccount',
    WhatsAppMessage: 'WhatsAppMessage',
    WhatsAppChat: 'WhatsAppChat',
    MessageTemplate: 'MessageTemplate',
    WhatsAppBroadcast: 'WhatsAppBroadcast',
    BroadcastAttachment: 'BroadcastAttachment',
    ClientList: 'ClientList',
    PhoneNumber: 'PhoneNumber',
    Client: 'Client',
    AssistantSettings: 'AssistantSettings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "chatMessage" | "chatGroup" | "whatsAppAccount" | "whatsAppMessage" | "whatsAppChat" | "messageTemplate" | "whatsAppBroadcast" | "broadcastAttachment" | "clientList" | "phoneNumber" | "client" | "assistantSettings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      ChatGroup: {
        payload: Prisma.$ChatGroupPayload<ExtArgs>
        fields: Prisma.ChatGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          findFirst: {
            args: Prisma.ChatGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          findMany: {
            args: Prisma.ChatGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>[]
          }
          create: {
            args: Prisma.ChatGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          createMany: {
            args: Prisma.ChatGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>[]
          }
          delete: {
            args: Prisma.ChatGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          update: {
            args: Prisma.ChatGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          deleteMany: {
            args: Prisma.ChatGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>[]
          }
          upsert: {
            args: Prisma.ChatGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          aggregate: {
            args: Prisma.ChatGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatGroup>
          }
          groupBy: {
            args: Prisma.ChatGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatGroupCountArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupCountAggregateOutputType> | number
          }
        }
      }
      WhatsAppAccount: {
        payload: Prisma.$WhatsAppAccountPayload<ExtArgs>
        fields: Prisma.WhatsAppAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WhatsAppAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WhatsAppAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppAccountPayload>
          }
          findFirst: {
            args: Prisma.WhatsAppAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WhatsAppAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppAccountPayload>
          }
          findMany: {
            args: Prisma.WhatsAppAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppAccountPayload>[]
          }
          create: {
            args: Prisma.WhatsAppAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppAccountPayload>
          }
          createMany: {
            args: Prisma.WhatsAppAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WhatsAppAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppAccountPayload>[]
          }
          delete: {
            args: Prisma.WhatsAppAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppAccountPayload>
          }
          update: {
            args: Prisma.WhatsAppAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppAccountPayload>
          }
          deleteMany: {
            args: Prisma.WhatsAppAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WhatsAppAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WhatsAppAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppAccountPayload>[]
          }
          upsert: {
            args: Prisma.WhatsAppAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppAccountPayload>
          }
          aggregate: {
            args: Prisma.WhatsAppAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhatsAppAccount>
          }
          groupBy: {
            args: Prisma.WhatsAppAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<WhatsAppAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.WhatsAppAccountCountArgs<ExtArgs>
            result: $Utils.Optional<WhatsAppAccountCountAggregateOutputType> | number
          }
        }
      }
      WhatsAppMessage: {
        payload: Prisma.$WhatsAppMessagePayload<ExtArgs>
        fields: Prisma.WhatsAppMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WhatsAppMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WhatsAppMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppMessagePayload>
          }
          findFirst: {
            args: Prisma.WhatsAppMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WhatsAppMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppMessagePayload>
          }
          findMany: {
            args: Prisma.WhatsAppMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppMessagePayload>[]
          }
          create: {
            args: Prisma.WhatsAppMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppMessagePayload>
          }
          createMany: {
            args: Prisma.WhatsAppMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WhatsAppMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppMessagePayload>[]
          }
          delete: {
            args: Prisma.WhatsAppMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppMessagePayload>
          }
          update: {
            args: Prisma.WhatsAppMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppMessagePayload>
          }
          deleteMany: {
            args: Prisma.WhatsAppMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WhatsAppMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WhatsAppMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppMessagePayload>[]
          }
          upsert: {
            args: Prisma.WhatsAppMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppMessagePayload>
          }
          aggregate: {
            args: Prisma.WhatsAppMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhatsAppMessage>
          }
          groupBy: {
            args: Prisma.WhatsAppMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<WhatsAppMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.WhatsAppMessageCountArgs<ExtArgs>
            result: $Utils.Optional<WhatsAppMessageCountAggregateOutputType> | number
          }
        }
      }
      WhatsAppChat: {
        payload: Prisma.$WhatsAppChatPayload<ExtArgs>
        fields: Prisma.WhatsAppChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WhatsAppChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WhatsAppChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppChatPayload>
          }
          findFirst: {
            args: Prisma.WhatsAppChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WhatsAppChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppChatPayload>
          }
          findMany: {
            args: Prisma.WhatsAppChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppChatPayload>[]
          }
          create: {
            args: Prisma.WhatsAppChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppChatPayload>
          }
          createMany: {
            args: Prisma.WhatsAppChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WhatsAppChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppChatPayload>[]
          }
          delete: {
            args: Prisma.WhatsAppChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppChatPayload>
          }
          update: {
            args: Prisma.WhatsAppChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppChatPayload>
          }
          deleteMany: {
            args: Prisma.WhatsAppChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WhatsAppChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WhatsAppChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppChatPayload>[]
          }
          upsert: {
            args: Prisma.WhatsAppChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppChatPayload>
          }
          aggregate: {
            args: Prisma.WhatsAppChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhatsAppChat>
          }
          groupBy: {
            args: Prisma.WhatsAppChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<WhatsAppChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.WhatsAppChatCountArgs<ExtArgs>
            result: $Utils.Optional<WhatsAppChatCountAggregateOutputType> | number
          }
        }
      }
      MessageTemplate: {
        payload: Prisma.$MessageTemplatePayload<ExtArgs>
        fields: Prisma.MessageTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>
          }
          findFirst: {
            args: Prisma.MessageTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>
          }
          findMany: {
            args: Prisma.MessageTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>[]
          }
          create: {
            args: Prisma.MessageTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>
          }
          createMany: {
            args: Prisma.MessageTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>[]
          }
          delete: {
            args: Prisma.MessageTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>
          }
          update: {
            args: Prisma.MessageTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>
          }
          deleteMany: {
            args: Prisma.MessageTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>[]
          }
          upsert: {
            args: Prisma.MessageTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>
          }
          aggregate: {
            args: Prisma.MessageTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessageTemplate>
          }
          groupBy: {
            args: Prisma.MessageTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<MessageTemplateCountAggregateOutputType> | number
          }
        }
      }
      WhatsAppBroadcast: {
        payload: Prisma.$WhatsAppBroadcastPayload<ExtArgs>
        fields: Prisma.WhatsAppBroadcastFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WhatsAppBroadcastFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppBroadcastPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WhatsAppBroadcastFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppBroadcastPayload>
          }
          findFirst: {
            args: Prisma.WhatsAppBroadcastFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppBroadcastPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WhatsAppBroadcastFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppBroadcastPayload>
          }
          findMany: {
            args: Prisma.WhatsAppBroadcastFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppBroadcastPayload>[]
          }
          create: {
            args: Prisma.WhatsAppBroadcastCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppBroadcastPayload>
          }
          createMany: {
            args: Prisma.WhatsAppBroadcastCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WhatsAppBroadcastCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppBroadcastPayload>[]
          }
          delete: {
            args: Prisma.WhatsAppBroadcastDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppBroadcastPayload>
          }
          update: {
            args: Prisma.WhatsAppBroadcastUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppBroadcastPayload>
          }
          deleteMany: {
            args: Prisma.WhatsAppBroadcastDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WhatsAppBroadcastUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WhatsAppBroadcastUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppBroadcastPayload>[]
          }
          upsert: {
            args: Prisma.WhatsAppBroadcastUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppBroadcastPayload>
          }
          aggregate: {
            args: Prisma.WhatsAppBroadcastAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhatsAppBroadcast>
          }
          groupBy: {
            args: Prisma.WhatsAppBroadcastGroupByArgs<ExtArgs>
            result: $Utils.Optional<WhatsAppBroadcastGroupByOutputType>[]
          }
          count: {
            args: Prisma.WhatsAppBroadcastCountArgs<ExtArgs>
            result: $Utils.Optional<WhatsAppBroadcastCountAggregateOutputType> | number
          }
        }
      }
      BroadcastAttachment: {
        payload: Prisma.$BroadcastAttachmentPayload<ExtArgs>
        fields: Prisma.BroadcastAttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BroadcastAttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastAttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BroadcastAttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastAttachmentPayload>
          }
          findFirst: {
            args: Prisma.BroadcastAttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastAttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BroadcastAttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastAttachmentPayload>
          }
          findMany: {
            args: Prisma.BroadcastAttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastAttachmentPayload>[]
          }
          create: {
            args: Prisma.BroadcastAttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastAttachmentPayload>
          }
          createMany: {
            args: Prisma.BroadcastAttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BroadcastAttachmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastAttachmentPayload>[]
          }
          delete: {
            args: Prisma.BroadcastAttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastAttachmentPayload>
          }
          update: {
            args: Prisma.BroadcastAttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastAttachmentPayload>
          }
          deleteMany: {
            args: Prisma.BroadcastAttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BroadcastAttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BroadcastAttachmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastAttachmentPayload>[]
          }
          upsert: {
            args: Prisma.BroadcastAttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastAttachmentPayload>
          }
          aggregate: {
            args: Prisma.BroadcastAttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBroadcastAttachment>
          }
          groupBy: {
            args: Prisma.BroadcastAttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<BroadcastAttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.BroadcastAttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<BroadcastAttachmentCountAggregateOutputType> | number
          }
        }
      }
      ClientList: {
        payload: Prisma.$ClientListPayload<ExtArgs>
        fields: Prisma.ClientListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientListPayload>
          }
          findFirst: {
            args: Prisma.ClientListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientListPayload>
          }
          findMany: {
            args: Prisma.ClientListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientListPayload>[]
          }
          create: {
            args: Prisma.ClientListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientListPayload>
          }
          createMany: {
            args: Prisma.ClientListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientListPayload>[]
          }
          delete: {
            args: Prisma.ClientListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientListPayload>
          }
          update: {
            args: Prisma.ClientListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientListPayload>
          }
          deleteMany: {
            args: Prisma.ClientListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientListPayload>[]
          }
          upsert: {
            args: Prisma.ClientListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientListPayload>
          }
          aggregate: {
            args: Prisma.ClientListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientList>
          }
          groupBy: {
            args: Prisma.ClientListGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientListGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientListCountArgs<ExtArgs>
            result: $Utils.Optional<ClientListCountAggregateOutputType> | number
          }
        }
      }
      PhoneNumber: {
        payload: Prisma.$PhoneNumberPayload<ExtArgs>
        fields: Prisma.PhoneNumberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhoneNumberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhoneNumberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumberPayload>
          }
          findFirst: {
            args: Prisma.PhoneNumberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhoneNumberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumberPayload>
          }
          findMany: {
            args: Prisma.PhoneNumberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumberPayload>[]
          }
          create: {
            args: Prisma.PhoneNumberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumberPayload>
          }
          createMany: {
            args: Prisma.PhoneNumberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhoneNumberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumberPayload>[]
          }
          delete: {
            args: Prisma.PhoneNumberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumberPayload>
          }
          update: {
            args: Prisma.PhoneNumberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumberPayload>
          }
          deleteMany: {
            args: Prisma.PhoneNumberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhoneNumberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhoneNumberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumberPayload>[]
          }
          upsert: {
            args: Prisma.PhoneNumberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumberPayload>
          }
          aggregate: {
            args: Prisma.PhoneNumberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoneNumber>
          }
          groupBy: {
            args: Prisma.PhoneNumberGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhoneNumberGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhoneNumberCountArgs<ExtArgs>
            result: $Utils.Optional<PhoneNumberCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      AssistantSettings: {
        payload: Prisma.$AssistantSettingsPayload<ExtArgs>
        fields: Prisma.AssistantSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssistantSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssistantSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantSettingsPayload>
          }
          findFirst: {
            args: Prisma.AssistantSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssistantSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantSettingsPayload>
          }
          findMany: {
            args: Prisma.AssistantSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantSettingsPayload>[]
          }
          create: {
            args: Prisma.AssistantSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantSettingsPayload>
          }
          createMany: {
            args: Prisma.AssistantSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssistantSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantSettingsPayload>[]
          }
          delete: {
            args: Prisma.AssistantSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantSettingsPayload>
          }
          update: {
            args: Prisma.AssistantSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantSettingsPayload>
          }
          deleteMany: {
            args: Prisma.AssistantSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssistantSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssistantSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantSettingsPayload>[]
          }
          upsert: {
            args: Prisma.AssistantSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantSettingsPayload>
          }
          aggregate: {
            args: Prisma.AssistantSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssistantSettings>
          }
          groupBy: {
            args: Prisma.AssistantSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssistantSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssistantSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<AssistantSettingsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    chatMessage?: ChatMessageOmit
    chatGroup?: ChatGroupOmit
    whatsAppAccount?: WhatsAppAccountOmit
    whatsAppMessage?: WhatsAppMessageOmit
    whatsAppChat?: WhatsAppChatOmit
    messageTemplate?: MessageTemplateOmit
    whatsAppBroadcast?: WhatsAppBroadcastOmit
    broadcastAttachment?: BroadcastAttachmentOmit
    clientList?: ClientListOmit
    phoneNumber?: PhoneNumberOmit
    client?: ClientOmit
    assistantSettings?: AssistantSettingsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    clientLists: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientLists?: boolean | UserCountOutputTypeCountClientListsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClientListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientListWhereInput
  }


  /**
   * Count Type WhatsAppAccountCountOutputType
   */

  export type WhatsAppAccountCountOutputType = {
    groups: number
    templates: number
    broadcasts: number
    chats: number
    messages: number
  }

  export type WhatsAppAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | WhatsAppAccountCountOutputTypeCountGroupsArgs
    templates?: boolean | WhatsAppAccountCountOutputTypeCountTemplatesArgs
    broadcasts?: boolean | WhatsAppAccountCountOutputTypeCountBroadcastsArgs
    chats?: boolean | WhatsAppAccountCountOutputTypeCountChatsArgs
    messages?: boolean | WhatsAppAccountCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * WhatsAppAccountCountOutputType without action
   */
  export type WhatsAppAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppAccountCountOutputType
     */
    select?: WhatsAppAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WhatsAppAccountCountOutputType without action
   */
  export type WhatsAppAccountCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatGroupWhereInput
  }

  /**
   * WhatsAppAccountCountOutputType without action
   */
  export type WhatsAppAccountCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageTemplateWhereInput
  }

  /**
   * WhatsAppAccountCountOutputType without action
   */
  export type WhatsAppAccountCountOutputTypeCountBroadcastsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsAppBroadcastWhereInput
  }

  /**
   * WhatsAppAccountCountOutputType without action
   */
  export type WhatsAppAccountCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsAppChatWhereInput
  }

  /**
   * WhatsAppAccountCountOutputType without action
   */
  export type WhatsAppAccountCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsAppMessageWhereInput
  }


  /**
   * Count Type WhatsAppChatCountOutputType
   */

  export type WhatsAppChatCountOutputType = {
    messages: number
  }

  export type WhatsAppChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | WhatsAppChatCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * WhatsAppChatCountOutputType without action
   */
  export type WhatsAppChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppChatCountOutputType
     */
    select?: WhatsAppChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WhatsAppChatCountOutputType without action
   */
  export type WhatsAppChatCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsAppMessageWhereInput
  }


  /**
   * Count Type MessageTemplateCountOutputType
   */

  export type MessageTemplateCountOutputType = {
    broadcasts: number
  }

  export type MessageTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    broadcasts?: boolean | MessageTemplateCountOutputTypeCountBroadcastsArgs
  }

  // Custom InputTypes
  /**
   * MessageTemplateCountOutputType without action
   */
  export type MessageTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplateCountOutputType
     */
    select?: MessageTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessageTemplateCountOutputType without action
   */
  export type MessageTemplateCountOutputTypeCountBroadcastsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsAppBroadcastWhereInput
  }


  /**
   * Count Type WhatsAppBroadcastCountOutputType
   */

  export type WhatsAppBroadcastCountOutputType = {
    attachments: number
  }

  export type WhatsAppBroadcastCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachments?: boolean | WhatsAppBroadcastCountOutputTypeCountAttachmentsArgs
  }

  // Custom InputTypes
  /**
   * WhatsAppBroadcastCountOutputType without action
   */
  export type WhatsAppBroadcastCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppBroadcastCountOutputType
     */
    select?: WhatsAppBroadcastCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WhatsAppBroadcastCountOutputType without action
   */
  export type WhatsAppBroadcastCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BroadcastAttachmentWhereInput
  }


  /**
   * Count Type ClientListCountOutputType
   */

  export type ClientListCountOutputType = {
    phoneNumbers: number
    broadcasts: number
    clients: number
  }

  export type ClientListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phoneNumbers?: boolean | ClientListCountOutputTypeCountPhoneNumbersArgs
    broadcasts?: boolean | ClientListCountOutputTypeCountBroadcastsArgs
    clients?: boolean | ClientListCountOutputTypeCountClientsArgs
  }

  // Custom InputTypes
  /**
   * ClientListCountOutputType without action
   */
  export type ClientListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientListCountOutputType
     */
    select?: ClientListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientListCountOutputType without action
   */
  export type ClientListCountOutputTypeCountPhoneNumbersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhoneNumberWhereInput
  }

  /**
   * ClientListCountOutputType without action
   */
  export type ClientListCountOutputTypeCountBroadcastsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsAppBroadcastWhereInput
  }

  /**
   * ClientListCountOutputType without action
   */
  export type ClientListCountOutputTypeCountClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    lists: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lists?: boolean | ClientCountOutputTypeCountListsArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientListWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientLists?: boolean | User$clientListsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientLists?: boolean | User$clientListsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      clientLists: Prisma.$ClientListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: Date | null
      image: string | null
      password: string | null
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clientLists<T extends User$clientListsArgs<ExtArgs> = {}>(args?: Subset<T, User$clientListsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.clientLists
   */
  export type User$clientListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientList
     */
    select?: ClientListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientList
     */
    omit?: ClientListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientListInclude<ExtArgs> | null
    where?: ClientListWhereInput
    orderBy?: ClientListOrderByWithRelationInput | ClientListOrderByWithRelationInput[]
    cursor?: ClientListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientListScalarFieldEnum | ClientListScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    userId: string | null
    content: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    content: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    userId: number
    content: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    userId: string
    content: string
    role: string
    createdAt: Date
    updatedAt: Date
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    userId?: boolean
    content?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "content" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["chatMessage"]>

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      content: string
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly userId: FieldRef<"ChatMessage", 'String'>
    readonly content: FieldRef<"ChatMessage", 'String'>
    readonly role: FieldRef<"ChatMessage", 'String'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
  }


  /**
   * Model ChatGroup
   */

  export type AggregateChatGroup = {
    _count: ChatGroupCountAggregateOutputType | null
    _min: ChatGroupMinAggregateOutputType | null
    _max: ChatGroupMaxAggregateOutputType | null
  }

  export type ChatGroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    accountId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatGroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    accountId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatGroupCountAggregateOutputType = {
    id: number
    name: number
    accountId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatGroupMinAggregateInputType = {
    id?: true
    name?: true
    accountId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatGroupMaxAggregateInputType = {
    id?: true
    name?: true
    accountId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatGroupCountAggregateInputType = {
    id?: true
    name?: true
    accountId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatGroup to aggregate.
     */
    where?: ChatGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatGroups
    **/
    _count?: true | ChatGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatGroupMaxAggregateInputType
  }

  export type GetChatGroupAggregateType<T extends ChatGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateChatGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatGroup[P]>
      : GetScalarType<T[P], AggregateChatGroup[P]>
  }




  export type ChatGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatGroupWhereInput
    orderBy?: ChatGroupOrderByWithAggregationInput | ChatGroupOrderByWithAggregationInput[]
    by: ChatGroupScalarFieldEnum[] | ChatGroupScalarFieldEnum
    having?: ChatGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatGroupCountAggregateInputType | true
    _min?: ChatGroupMinAggregateInputType
    _max?: ChatGroupMaxAggregateInputType
  }

  export type ChatGroupGroupByOutputType = {
    id: string
    name: string
    accountId: string
    createdAt: Date
    updatedAt: Date
    _count: ChatGroupCountAggregateOutputType | null
    _min: ChatGroupMinAggregateOutputType | null
    _max: ChatGroupMaxAggregateOutputType | null
  }

  type GetChatGroupGroupByPayload<T extends ChatGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupGroupByOutputType[P]>
        }
      >
    >


  export type ChatGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    accountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatGroup"]>

  export type ChatGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    accountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatGroup"]>

  export type ChatGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    accountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatGroup"]>

  export type ChatGroupSelectScalar = {
    id?: boolean
    name?: boolean
    accountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "accountId" | "createdAt" | "updatedAt", ExtArgs["result"]["chatGroup"]>
  export type ChatGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
  }
  export type ChatGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
  }
  export type ChatGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
  }

  export type $ChatGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatGroup"
    objects: {
      account: Prisma.$WhatsAppAccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      accountId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatGroup"]>
    composites: {}
  }

  type ChatGroupGetPayload<S extends boolean | null | undefined | ChatGroupDefaultArgs> = $Result.GetResult<Prisma.$ChatGroupPayload, S>

  type ChatGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatGroupCountAggregateInputType | true
    }

  export interface ChatGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatGroup'], meta: { name: 'ChatGroup' } }
    /**
     * Find zero or one ChatGroup that matches the filter.
     * @param {ChatGroupFindUniqueArgs} args - Arguments to find a ChatGroup
     * @example
     * // Get one ChatGroup
     * const chatGroup = await prisma.chatGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatGroupFindUniqueArgs>(args: SelectSubset<T, ChatGroupFindUniqueArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatGroupFindUniqueOrThrowArgs} args - Arguments to find a ChatGroup
     * @example
     * // Get one ChatGroup
     * const chatGroup = await prisma.chatGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupFindFirstArgs} args - Arguments to find a ChatGroup
     * @example
     * // Get one ChatGroup
     * const chatGroup = await prisma.chatGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatGroupFindFirstArgs>(args?: SelectSubset<T, ChatGroupFindFirstArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupFindFirstOrThrowArgs} args - Arguments to find a ChatGroup
     * @example
     * // Get one ChatGroup
     * const chatGroup = await prisma.chatGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatGroups
     * const chatGroups = await prisma.chatGroup.findMany()
     * 
     * // Get first 10 ChatGroups
     * const chatGroups = await prisma.chatGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatGroupWithIdOnly = await prisma.chatGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatGroupFindManyArgs>(args?: SelectSubset<T, ChatGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatGroup.
     * @param {ChatGroupCreateArgs} args - Arguments to create a ChatGroup.
     * @example
     * // Create one ChatGroup
     * const ChatGroup = await prisma.chatGroup.create({
     *   data: {
     *     // ... data to create a ChatGroup
     *   }
     * })
     * 
     */
    create<T extends ChatGroupCreateArgs>(args: SelectSubset<T, ChatGroupCreateArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatGroups.
     * @param {ChatGroupCreateManyArgs} args - Arguments to create many ChatGroups.
     * @example
     * // Create many ChatGroups
     * const chatGroup = await prisma.chatGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatGroupCreateManyArgs>(args?: SelectSubset<T, ChatGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatGroups and returns the data saved in the database.
     * @param {ChatGroupCreateManyAndReturnArgs} args - Arguments to create many ChatGroups.
     * @example
     * // Create many ChatGroups
     * const chatGroup = await prisma.chatGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatGroups and only return the `id`
     * const chatGroupWithIdOnly = await prisma.chatGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatGroup.
     * @param {ChatGroupDeleteArgs} args - Arguments to delete one ChatGroup.
     * @example
     * // Delete one ChatGroup
     * const ChatGroup = await prisma.chatGroup.delete({
     *   where: {
     *     // ... filter to delete one ChatGroup
     *   }
     * })
     * 
     */
    delete<T extends ChatGroupDeleteArgs>(args: SelectSubset<T, ChatGroupDeleteArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatGroup.
     * @param {ChatGroupUpdateArgs} args - Arguments to update one ChatGroup.
     * @example
     * // Update one ChatGroup
     * const chatGroup = await prisma.chatGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatGroupUpdateArgs>(args: SelectSubset<T, ChatGroupUpdateArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatGroups.
     * @param {ChatGroupDeleteManyArgs} args - Arguments to filter ChatGroups to delete.
     * @example
     * // Delete a few ChatGroups
     * const { count } = await prisma.chatGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatGroupDeleteManyArgs>(args?: SelectSubset<T, ChatGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatGroups
     * const chatGroup = await prisma.chatGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatGroupUpdateManyArgs>(args: SelectSubset<T, ChatGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatGroups and returns the data updated in the database.
     * @param {ChatGroupUpdateManyAndReturnArgs} args - Arguments to update many ChatGroups.
     * @example
     * // Update many ChatGroups
     * const chatGroup = await prisma.chatGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatGroups and only return the `id`
     * const chatGroupWithIdOnly = await prisma.chatGroup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatGroup.
     * @param {ChatGroupUpsertArgs} args - Arguments to update or create a ChatGroup.
     * @example
     * // Update or create a ChatGroup
     * const chatGroup = await prisma.chatGroup.upsert({
     *   create: {
     *     // ... data to create a ChatGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatGroup we want to update
     *   }
     * })
     */
    upsert<T extends ChatGroupUpsertArgs>(args: SelectSubset<T, ChatGroupUpsertArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupCountArgs} args - Arguments to filter ChatGroups to count.
     * @example
     * // Count the number of ChatGroups
     * const count = await prisma.chatGroup.count({
     *   where: {
     *     // ... the filter for the ChatGroups we want to count
     *   }
     * })
    **/
    count<T extends ChatGroupCountArgs>(
      args?: Subset<T, ChatGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatGroupAggregateArgs>(args: Subset<T, ChatGroupAggregateArgs>): Prisma.PrismaPromise<GetChatGroupAggregateType<T>>

    /**
     * Group by ChatGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatGroup model
   */
  readonly fields: ChatGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends WhatsAppAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WhatsAppAccountDefaultArgs<ExtArgs>>): Prisma__WhatsAppAccountClient<$Result.GetResult<Prisma.$WhatsAppAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatGroup model
   */
  interface ChatGroupFieldRefs {
    readonly id: FieldRef<"ChatGroup", 'String'>
    readonly name: FieldRef<"ChatGroup", 'String'>
    readonly accountId: FieldRef<"ChatGroup", 'String'>
    readonly createdAt: FieldRef<"ChatGroup", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatGroup findUnique
   */
  export type ChatGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroup to fetch.
     */
    where: ChatGroupWhereUniqueInput
  }

  /**
   * ChatGroup findUniqueOrThrow
   */
  export type ChatGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroup to fetch.
     */
    where: ChatGroupWhereUniqueInput
  }

  /**
   * ChatGroup findFirst
   */
  export type ChatGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroup to fetch.
     */
    where?: ChatGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatGroups.
     */
    cursor?: ChatGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGroups.
     */
    distinct?: ChatGroupScalarFieldEnum | ChatGroupScalarFieldEnum[]
  }

  /**
   * ChatGroup findFirstOrThrow
   */
  export type ChatGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroup to fetch.
     */
    where?: ChatGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatGroups.
     */
    cursor?: ChatGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGroups.
     */
    distinct?: ChatGroupScalarFieldEnum | ChatGroupScalarFieldEnum[]
  }

  /**
   * ChatGroup findMany
   */
  export type ChatGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroups to fetch.
     */
    where?: ChatGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatGroups.
     */
    cursor?: ChatGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    distinct?: ChatGroupScalarFieldEnum | ChatGroupScalarFieldEnum[]
  }

  /**
   * ChatGroup create
   */
  export type ChatGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatGroup.
     */
    data: XOR<ChatGroupCreateInput, ChatGroupUncheckedCreateInput>
  }

  /**
   * ChatGroup createMany
   */
  export type ChatGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatGroups.
     */
    data: ChatGroupCreateManyInput | ChatGroupCreateManyInput[]
  }

  /**
   * ChatGroup createManyAndReturn
   */
  export type ChatGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * The data used to create many ChatGroups.
     */
    data: ChatGroupCreateManyInput | ChatGroupCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatGroup update
   */
  export type ChatGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatGroup.
     */
    data: XOR<ChatGroupUpdateInput, ChatGroupUncheckedUpdateInput>
    /**
     * Choose, which ChatGroup to update.
     */
    where: ChatGroupWhereUniqueInput
  }

  /**
   * ChatGroup updateMany
   */
  export type ChatGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatGroups.
     */
    data: XOR<ChatGroupUpdateManyMutationInput, ChatGroupUncheckedUpdateManyInput>
    /**
     * Filter which ChatGroups to update
     */
    where?: ChatGroupWhereInput
    /**
     * Limit how many ChatGroups to update.
     */
    limit?: number
  }

  /**
   * ChatGroup updateManyAndReturn
   */
  export type ChatGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * The data used to update ChatGroups.
     */
    data: XOR<ChatGroupUpdateManyMutationInput, ChatGroupUncheckedUpdateManyInput>
    /**
     * Filter which ChatGroups to update
     */
    where?: ChatGroupWhereInput
    /**
     * Limit how many ChatGroups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatGroup upsert
   */
  export type ChatGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatGroup to update in case it exists.
     */
    where: ChatGroupWhereUniqueInput
    /**
     * In case the ChatGroup found by the `where` argument doesn't exist, create a new ChatGroup with this data.
     */
    create: XOR<ChatGroupCreateInput, ChatGroupUncheckedCreateInput>
    /**
     * In case the ChatGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatGroupUpdateInput, ChatGroupUncheckedUpdateInput>
  }

  /**
   * ChatGroup delete
   */
  export type ChatGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter which ChatGroup to delete.
     */
    where: ChatGroupWhereUniqueInput
  }

  /**
   * ChatGroup deleteMany
   */
  export type ChatGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatGroups to delete
     */
    where?: ChatGroupWhereInput
    /**
     * Limit how many ChatGroups to delete.
     */
    limit?: number
  }

  /**
   * ChatGroup without action
   */
  export type ChatGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
  }


  /**
   * Model WhatsAppAccount
   */

  export type AggregateWhatsAppAccount = {
    _count: WhatsAppAccountCountAggregateOutputType | null
    _avg: WhatsAppAccountAvgAggregateOutputType | null
    _sum: WhatsAppAccountSumAggregateOutputType | null
    _min: WhatsAppAccountMinAggregateOutputType | null
    _max: WhatsAppAccountMaxAggregateOutputType | null
  }

  export type WhatsAppAccountAvgAggregateOutputType = {
    maxConcurrentMessages: number | null
    retryAttempts: number | null
    maxTokens: number | null
    temperature: number | null
    totalMessages: number | null
    avgResponseTime: number | null
  }

  export type WhatsAppAccountSumAggregateOutputType = {
    maxConcurrentMessages: number | null
    retryAttempts: number | null
    maxTokens: number | null
    temperature: number | null
    totalMessages: number | null
    avgResponseTime: number | null
  }

  export type WhatsAppAccountMinAggregateOutputType = {
    id: string | null
    name: string | null
    phoneNumber: string | null
    isActive: boolean | null
    verified: boolean | null
    phoneNumberId: string | null
    businessAccountId: string | null
    accessToken: string | null
    webhookSecret: string | null
    maxConcurrentMessages: number | null
    retryAttempts: number | null
    gptModel: string | null
    maxTokens: number | null
    temperature: number | null
    totalMessages: number | null
    avgResponseTime: number | null
    lastActive: Date | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WhatsAppAccountMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phoneNumber: string | null
    isActive: boolean | null
    verified: boolean | null
    phoneNumberId: string | null
    businessAccountId: string | null
    accessToken: string | null
    webhookSecret: string | null
    maxConcurrentMessages: number | null
    retryAttempts: number | null
    gptModel: string | null
    maxTokens: number | null
    temperature: number | null
    totalMessages: number | null
    avgResponseTime: number | null
    lastActive: Date | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WhatsAppAccountCountAggregateOutputType = {
    id: number
    name: number
    phoneNumber: number
    isActive: number
    verified: number
    phoneNumberId: number
    businessAccountId: number
    accessToken: number
    webhookSecret: number
    maxConcurrentMessages: number
    retryAttempts: number
    gptModel: number
    maxTokens: number
    temperature: number
    totalMessages: number
    avgResponseTime: number
    lastActive: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WhatsAppAccountAvgAggregateInputType = {
    maxConcurrentMessages?: true
    retryAttempts?: true
    maxTokens?: true
    temperature?: true
    totalMessages?: true
    avgResponseTime?: true
  }

  export type WhatsAppAccountSumAggregateInputType = {
    maxConcurrentMessages?: true
    retryAttempts?: true
    maxTokens?: true
    temperature?: true
    totalMessages?: true
    avgResponseTime?: true
  }

  export type WhatsAppAccountMinAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    isActive?: true
    verified?: true
    phoneNumberId?: true
    businessAccountId?: true
    accessToken?: true
    webhookSecret?: true
    maxConcurrentMessages?: true
    retryAttempts?: true
    gptModel?: true
    maxTokens?: true
    temperature?: true
    totalMessages?: true
    avgResponseTime?: true
    lastActive?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WhatsAppAccountMaxAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    isActive?: true
    verified?: true
    phoneNumberId?: true
    businessAccountId?: true
    accessToken?: true
    webhookSecret?: true
    maxConcurrentMessages?: true
    retryAttempts?: true
    gptModel?: true
    maxTokens?: true
    temperature?: true
    totalMessages?: true
    avgResponseTime?: true
    lastActive?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WhatsAppAccountCountAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    isActive?: true
    verified?: true
    phoneNumberId?: true
    businessAccountId?: true
    accessToken?: true
    webhookSecret?: true
    maxConcurrentMessages?: true
    retryAttempts?: true
    gptModel?: true
    maxTokens?: true
    temperature?: true
    totalMessages?: true
    avgResponseTime?: true
    lastActive?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WhatsAppAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsAppAccount to aggregate.
     */
    where?: WhatsAppAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppAccounts to fetch.
     */
    orderBy?: WhatsAppAccountOrderByWithRelationInput | WhatsAppAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WhatsAppAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WhatsAppAccounts
    **/
    _count?: true | WhatsAppAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WhatsAppAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WhatsAppAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WhatsAppAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WhatsAppAccountMaxAggregateInputType
  }

  export type GetWhatsAppAccountAggregateType<T extends WhatsAppAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateWhatsAppAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhatsAppAccount[P]>
      : GetScalarType<T[P], AggregateWhatsAppAccount[P]>
  }




  export type WhatsAppAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsAppAccountWhereInput
    orderBy?: WhatsAppAccountOrderByWithAggregationInput | WhatsAppAccountOrderByWithAggregationInput[]
    by: WhatsAppAccountScalarFieldEnum[] | WhatsAppAccountScalarFieldEnum
    having?: WhatsAppAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WhatsAppAccountCountAggregateInputType | true
    _avg?: WhatsAppAccountAvgAggregateInputType
    _sum?: WhatsAppAccountSumAggregateInputType
    _min?: WhatsAppAccountMinAggregateInputType
    _max?: WhatsAppAccountMaxAggregateInputType
  }

  export type WhatsAppAccountGroupByOutputType = {
    id: string
    name: string
    phoneNumber: string
    isActive: boolean
    verified: boolean
    phoneNumberId: string
    businessAccountId: string
    accessToken: string
    webhookSecret: string | null
    maxConcurrentMessages: number
    retryAttempts: number
    gptModel: string
    maxTokens: number
    temperature: number
    totalMessages: number
    avgResponseTime: number
    lastActive: Date | null
    expiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: WhatsAppAccountCountAggregateOutputType | null
    _avg: WhatsAppAccountAvgAggregateOutputType | null
    _sum: WhatsAppAccountSumAggregateOutputType | null
    _min: WhatsAppAccountMinAggregateOutputType | null
    _max: WhatsAppAccountMaxAggregateOutputType | null
  }

  type GetWhatsAppAccountGroupByPayload<T extends WhatsAppAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WhatsAppAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WhatsAppAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WhatsAppAccountGroupByOutputType[P]>
            : GetScalarType<T[P], WhatsAppAccountGroupByOutputType[P]>
        }
      >
    >


  export type WhatsAppAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    isActive?: boolean
    verified?: boolean
    phoneNumberId?: boolean
    businessAccountId?: boolean
    accessToken?: boolean
    webhookSecret?: boolean
    maxConcurrentMessages?: boolean
    retryAttempts?: boolean
    gptModel?: boolean
    maxTokens?: boolean
    temperature?: boolean
    totalMessages?: boolean
    avgResponseTime?: boolean
    lastActive?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assistantSettings?: boolean | WhatsAppAccount$assistantSettingsArgs<ExtArgs>
    groups?: boolean | WhatsAppAccount$groupsArgs<ExtArgs>
    templates?: boolean | WhatsAppAccount$templatesArgs<ExtArgs>
    broadcasts?: boolean | WhatsAppAccount$broadcastsArgs<ExtArgs>
    chats?: boolean | WhatsAppAccount$chatsArgs<ExtArgs>
    messages?: boolean | WhatsAppAccount$messagesArgs<ExtArgs>
    _count?: boolean | WhatsAppAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsAppAccount"]>

  export type WhatsAppAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    isActive?: boolean
    verified?: boolean
    phoneNumberId?: boolean
    businessAccountId?: boolean
    accessToken?: boolean
    webhookSecret?: boolean
    maxConcurrentMessages?: boolean
    retryAttempts?: boolean
    gptModel?: boolean
    maxTokens?: boolean
    temperature?: boolean
    totalMessages?: boolean
    avgResponseTime?: boolean
    lastActive?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["whatsAppAccount"]>

  export type WhatsAppAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    isActive?: boolean
    verified?: boolean
    phoneNumberId?: boolean
    businessAccountId?: boolean
    accessToken?: boolean
    webhookSecret?: boolean
    maxConcurrentMessages?: boolean
    retryAttempts?: boolean
    gptModel?: boolean
    maxTokens?: boolean
    temperature?: boolean
    totalMessages?: boolean
    avgResponseTime?: boolean
    lastActive?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["whatsAppAccount"]>

  export type WhatsAppAccountSelectScalar = {
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    isActive?: boolean
    verified?: boolean
    phoneNumberId?: boolean
    businessAccountId?: boolean
    accessToken?: boolean
    webhookSecret?: boolean
    maxConcurrentMessages?: boolean
    retryAttempts?: boolean
    gptModel?: boolean
    maxTokens?: boolean
    temperature?: boolean
    totalMessages?: boolean
    avgResponseTime?: boolean
    lastActive?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WhatsAppAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phoneNumber" | "isActive" | "verified" | "phoneNumberId" | "businessAccountId" | "accessToken" | "webhookSecret" | "maxConcurrentMessages" | "retryAttempts" | "gptModel" | "maxTokens" | "temperature" | "totalMessages" | "avgResponseTime" | "lastActive" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["whatsAppAccount"]>
  export type WhatsAppAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assistantSettings?: boolean | WhatsAppAccount$assistantSettingsArgs<ExtArgs>
    groups?: boolean | WhatsAppAccount$groupsArgs<ExtArgs>
    templates?: boolean | WhatsAppAccount$templatesArgs<ExtArgs>
    broadcasts?: boolean | WhatsAppAccount$broadcastsArgs<ExtArgs>
    chats?: boolean | WhatsAppAccount$chatsArgs<ExtArgs>
    messages?: boolean | WhatsAppAccount$messagesArgs<ExtArgs>
    _count?: boolean | WhatsAppAccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WhatsAppAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WhatsAppAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WhatsAppAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WhatsAppAccount"
    objects: {
      assistantSettings: Prisma.$AssistantSettingsPayload<ExtArgs> | null
      groups: Prisma.$ChatGroupPayload<ExtArgs>[]
      templates: Prisma.$MessageTemplatePayload<ExtArgs>[]
      broadcasts: Prisma.$WhatsAppBroadcastPayload<ExtArgs>[]
      chats: Prisma.$WhatsAppChatPayload<ExtArgs>[]
      messages: Prisma.$WhatsAppMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phoneNumber: string
      isActive: boolean
      verified: boolean
      phoneNumberId: string
      businessAccountId: string
      accessToken: string
      webhookSecret: string | null
      maxConcurrentMessages: number
      retryAttempts: number
      gptModel: string
      maxTokens: number
      temperature: number
      totalMessages: number
      avgResponseTime: number
      lastActive: Date | null
      expiresAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["whatsAppAccount"]>
    composites: {}
  }

  type WhatsAppAccountGetPayload<S extends boolean | null | undefined | WhatsAppAccountDefaultArgs> = $Result.GetResult<Prisma.$WhatsAppAccountPayload, S>

  type WhatsAppAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WhatsAppAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WhatsAppAccountCountAggregateInputType | true
    }

  export interface WhatsAppAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WhatsAppAccount'], meta: { name: 'WhatsAppAccount' } }
    /**
     * Find zero or one WhatsAppAccount that matches the filter.
     * @param {WhatsAppAccountFindUniqueArgs} args - Arguments to find a WhatsAppAccount
     * @example
     * // Get one WhatsAppAccount
     * const whatsAppAccount = await prisma.whatsAppAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WhatsAppAccountFindUniqueArgs>(args: SelectSubset<T, WhatsAppAccountFindUniqueArgs<ExtArgs>>): Prisma__WhatsAppAccountClient<$Result.GetResult<Prisma.$WhatsAppAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WhatsAppAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WhatsAppAccountFindUniqueOrThrowArgs} args - Arguments to find a WhatsAppAccount
     * @example
     * // Get one WhatsAppAccount
     * const whatsAppAccount = await prisma.whatsAppAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WhatsAppAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, WhatsAppAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WhatsAppAccountClient<$Result.GetResult<Prisma.$WhatsAppAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhatsAppAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppAccountFindFirstArgs} args - Arguments to find a WhatsAppAccount
     * @example
     * // Get one WhatsAppAccount
     * const whatsAppAccount = await prisma.whatsAppAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WhatsAppAccountFindFirstArgs>(args?: SelectSubset<T, WhatsAppAccountFindFirstArgs<ExtArgs>>): Prisma__WhatsAppAccountClient<$Result.GetResult<Prisma.$WhatsAppAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhatsAppAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppAccountFindFirstOrThrowArgs} args - Arguments to find a WhatsAppAccount
     * @example
     * // Get one WhatsAppAccount
     * const whatsAppAccount = await prisma.whatsAppAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WhatsAppAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, WhatsAppAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__WhatsAppAccountClient<$Result.GetResult<Prisma.$WhatsAppAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WhatsAppAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WhatsAppAccounts
     * const whatsAppAccounts = await prisma.whatsAppAccount.findMany()
     * 
     * // Get first 10 WhatsAppAccounts
     * const whatsAppAccounts = await prisma.whatsAppAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const whatsAppAccountWithIdOnly = await prisma.whatsAppAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WhatsAppAccountFindManyArgs>(args?: SelectSubset<T, WhatsAppAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WhatsAppAccount.
     * @param {WhatsAppAccountCreateArgs} args - Arguments to create a WhatsAppAccount.
     * @example
     * // Create one WhatsAppAccount
     * const WhatsAppAccount = await prisma.whatsAppAccount.create({
     *   data: {
     *     // ... data to create a WhatsAppAccount
     *   }
     * })
     * 
     */
    create<T extends WhatsAppAccountCreateArgs>(args: SelectSubset<T, WhatsAppAccountCreateArgs<ExtArgs>>): Prisma__WhatsAppAccountClient<$Result.GetResult<Prisma.$WhatsAppAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WhatsAppAccounts.
     * @param {WhatsAppAccountCreateManyArgs} args - Arguments to create many WhatsAppAccounts.
     * @example
     * // Create many WhatsAppAccounts
     * const whatsAppAccount = await prisma.whatsAppAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WhatsAppAccountCreateManyArgs>(args?: SelectSubset<T, WhatsAppAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WhatsAppAccounts and returns the data saved in the database.
     * @param {WhatsAppAccountCreateManyAndReturnArgs} args - Arguments to create many WhatsAppAccounts.
     * @example
     * // Create many WhatsAppAccounts
     * const whatsAppAccount = await prisma.whatsAppAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WhatsAppAccounts and only return the `id`
     * const whatsAppAccountWithIdOnly = await prisma.whatsAppAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WhatsAppAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, WhatsAppAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WhatsAppAccount.
     * @param {WhatsAppAccountDeleteArgs} args - Arguments to delete one WhatsAppAccount.
     * @example
     * // Delete one WhatsAppAccount
     * const WhatsAppAccount = await prisma.whatsAppAccount.delete({
     *   where: {
     *     // ... filter to delete one WhatsAppAccount
     *   }
     * })
     * 
     */
    delete<T extends WhatsAppAccountDeleteArgs>(args: SelectSubset<T, WhatsAppAccountDeleteArgs<ExtArgs>>): Prisma__WhatsAppAccountClient<$Result.GetResult<Prisma.$WhatsAppAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WhatsAppAccount.
     * @param {WhatsAppAccountUpdateArgs} args - Arguments to update one WhatsAppAccount.
     * @example
     * // Update one WhatsAppAccount
     * const whatsAppAccount = await prisma.whatsAppAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WhatsAppAccountUpdateArgs>(args: SelectSubset<T, WhatsAppAccountUpdateArgs<ExtArgs>>): Prisma__WhatsAppAccountClient<$Result.GetResult<Prisma.$WhatsAppAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WhatsAppAccounts.
     * @param {WhatsAppAccountDeleteManyArgs} args - Arguments to filter WhatsAppAccounts to delete.
     * @example
     * // Delete a few WhatsAppAccounts
     * const { count } = await prisma.whatsAppAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WhatsAppAccountDeleteManyArgs>(args?: SelectSubset<T, WhatsAppAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhatsAppAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WhatsAppAccounts
     * const whatsAppAccount = await prisma.whatsAppAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WhatsAppAccountUpdateManyArgs>(args: SelectSubset<T, WhatsAppAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhatsAppAccounts and returns the data updated in the database.
     * @param {WhatsAppAccountUpdateManyAndReturnArgs} args - Arguments to update many WhatsAppAccounts.
     * @example
     * // Update many WhatsAppAccounts
     * const whatsAppAccount = await prisma.whatsAppAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WhatsAppAccounts and only return the `id`
     * const whatsAppAccountWithIdOnly = await prisma.whatsAppAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WhatsAppAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, WhatsAppAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WhatsAppAccount.
     * @param {WhatsAppAccountUpsertArgs} args - Arguments to update or create a WhatsAppAccount.
     * @example
     * // Update or create a WhatsAppAccount
     * const whatsAppAccount = await prisma.whatsAppAccount.upsert({
     *   create: {
     *     // ... data to create a WhatsAppAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WhatsAppAccount we want to update
     *   }
     * })
     */
    upsert<T extends WhatsAppAccountUpsertArgs>(args: SelectSubset<T, WhatsAppAccountUpsertArgs<ExtArgs>>): Prisma__WhatsAppAccountClient<$Result.GetResult<Prisma.$WhatsAppAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WhatsAppAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppAccountCountArgs} args - Arguments to filter WhatsAppAccounts to count.
     * @example
     * // Count the number of WhatsAppAccounts
     * const count = await prisma.whatsAppAccount.count({
     *   where: {
     *     // ... the filter for the WhatsAppAccounts we want to count
     *   }
     * })
    **/
    count<T extends WhatsAppAccountCountArgs>(
      args?: Subset<T, WhatsAppAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WhatsAppAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WhatsAppAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WhatsAppAccountAggregateArgs>(args: Subset<T, WhatsAppAccountAggregateArgs>): Prisma.PrismaPromise<GetWhatsAppAccountAggregateType<T>>

    /**
     * Group by WhatsAppAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WhatsAppAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WhatsAppAccountGroupByArgs['orderBy'] }
        : { orderBy?: WhatsAppAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WhatsAppAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhatsAppAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WhatsAppAccount model
   */
  readonly fields: WhatsAppAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WhatsAppAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WhatsAppAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assistantSettings<T extends WhatsAppAccount$assistantSettingsArgs<ExtArgs> = {}>(args?: Subset<T, WhatsAppAccount$assistantSettingsArgs<ExtArgs>>): Prisma__AssistantSettingsClient<$Result.GetResult<Prisma.$AssistantSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    groups<T extends WhatsAppAccount$groupsArgs<ExtArgs> = {}>(args?: Subset<T, WhatsAppAccount$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    templates<T extends WhatsAppAccount$templatesArgs<ExtArgs> = {}>(args?: Subset<T, WhatsAppAccount$templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    broadcasts<T extends WhatsAppAccount$broadcastsArgs<ExtArgs> = {}>(args?: Subset<T, WhatsAppAccount$broadcastsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppBroadcastPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chats<T extends WhatsAppAccount$chatsArgs<ExtArgs> = {}>(args?: Subset<T, WhatsAppAccount$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends WhatsAppAccount$messagesArgs<ExtArgs> = {}>(args?: Subset<T, WhatsAppAccount$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WhatsAppAccount model
   */
  interface WhatsAppAccountFieldRefs {
    readonly id: FieldRef<"WhatsAppAccount", 'String'>
    readonly name: FieldRef<"WhatsAppAccount", 'String'>
    readonly phoneNumber: FieldRef<"WhatsAppAccount", 'String'>
    readonly isActive: FieldRef<"WhatsAppAccount", 'Boolean'>
    readonly verified: FieldRef<"WhatsAppAccount", 'Boolean'>
    readonly phoneNumberId: FieldRef<"WhatsAppAccount", 'String'>
    readonly businessAccountId: FieldRef<"WhatsAppAccount", 'String'>
    readonly accessToken: FieldRef<"WhatsAppAccount", 'String'>
    readonly webhookSecret: FieldRef<"WhatsAppAccount", 'String'>
    readonly maxConcurrentMessages: FieldRef<"WhatsAppAccount", 'Int'>
    readonly retryAttempts: FieldRef<"WhatsAppAccount", 'Int'>
    readonly gptModel: FieldRef<"WhatsAppAccount", 'String'>
    readonly maxTokens: FieldRef<"WhatsAppAccount", 'Int'>
    readonly temperature: FieldRef<"WhatsAppAccount", 'Float'>
    readonly totalMessages: FieldRef<"WhatsAppAccount", 'Int'>
    readonly avgResponseTime: FieldRef<"WhatsAppAccount", 'Int'>
    readonly lastActive: FieldRef<"WhatsAppAccount", 'DateTime'>
    readonly expiresAt: FieldRef<"WhatsAppAccount", 'DateTime'>
    readonly createdAt: FieldRef<"WhatsAppAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"WhatsAppAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WhatsAppAccount findUnique
   */
  export type WhatsAppAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppAccount
     */
    select?: WhatsAppAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppAccount
     */
    omit?: WhatsAppAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppAccountInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppAccount to fetch.
     */
    where: WhatsAppAccountWhereUniqueInput
  }

  /**
   * WhatsAppAccount findUniqueOrThrow
   */
  export type WhatsAppAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppAccount
     */
    select?: WhatsAppAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppAccount
     */
    omit?: WhatsAppAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppAccountInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppAccount to fetch.
     */
    where: WhatsAppAccountWhereUniqueInput
  }

  /**
   * WhatsAppAccount findFirst
   */
  export type WhatsAppAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppAccount
     */
    select?: WhatsAppAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppAccount
     */
    omit?: WhatsAppAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppAccountInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppAccount to fetch.
     */
    where?: WhatsAppAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppAccounts to fetch.
     */
    orderBy?: WhatsAppAccountOrderByWithRelationInput | WhatsAppAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsAppAccounts.
     */
    cursor?: WhatsAppAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsAppAccounts.
     */
    distinct?: WhatsAppAccountScalarFieldEnum | WhatsAppAccountScalarFieldEnum[]
  }

  /**
   * WhatsAppAccount findFirstOrThrow
   */
  export type WhatsAppAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppAccount
     */
    select?: WhatsAppAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppAccount
     */
    omit?: WhatsAppAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppAccountInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppAccount to fetch.
     */
    where?: WhatsAppAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppAccounts to fetch.
     */
    orderBy?: WhatsAppAccountOrderByWithRelationInput | WhatsAppAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsAppAccounts.
     */
    cursor?: WhatsAppAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsAppAccounts.
     */
    distinct?: WhatsAppAccountScalarFieldEnum | WhatsAppAccountScalarFieldEnum[]
  }

  /**
   * WhatsAppAccount findMany
   */
  export type WhatsAppAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppAccount
     */
    select?: WhatsAppAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppAccount
     */
    omit?: WhatsAppAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppAccountInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppAccounts to fetch.
     */
    where?: WhatsAppAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppAccounts to fetch.
     */
    orderBy?: WhatsAppAccountOrderByWithRelationInput | WhatsAppAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WhatsAppAccounts.
     */
    cursor?: WhatsAppAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppAccounts.
     */
    skip?: number
    distinct?: WhatsAppAccountScalarFieldEnum | WhatsAppAccountScalarFieldEnum[]
  }

  /**
   * WhatsAppAccount create
   */
  export type WhatsAppAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppAccount
     */
    select?: WhatsAppAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppAccount
     */
    omit?: WhatsAppAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a WhatsAppAccount.
     */
    data: XOR<WhatsAppAccountCreateInput, WhatsAppAccountUncheckedCreateInput>
  }

  /**
   * WhatsAppAccount createMany
   */
  export type WhatsAppAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WhatsAppAccounts.
     */
    data: WhatsAppAccountCreateManyInput | WhatsAppAccountCreateManyInput[]
  }

  /**
   * WhatsAppAccount createManyAndReturn
   */
  export type WhatsAppAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppAccount
     */
    select?: WhatsAppAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppAccount
     */
    omit?: WhatsAppAccountOmit<ExtArgs> | null
    /**
     * The data used to create many WhatsAppAccounts.
     */
    data: WhatsAppAccountCreateManyInput | WhatsAppAccountCreateManyInput[]
  }

  /**
   * WhatsAppAccount update
   */
  export type WhatsAppAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppAccount
     */
    select?: WhatsAppAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppAccount
     */
    omit?: WhatsAppAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a WhatsAppAccount.
     */
    data: XOR<WhatsAppAccountUpdateInput, WhatsAppAccountUncheckedUpdateInput>
    /**
     * Choose, which WhatsAppAccount to update.
     */
    where: WhatsAppAccountWhereUniqueInput
  }

  /**
   * WhatsAppAccount updateMany
   */
  export type WhatsAppAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WhatsAppAccounts.
     */
    data: XOR<WhatsAppAccountUpdateManyMutationInput, WhatsAppAccountUncheckedUpdateManyInput>
    /**
     * Filter which WhatsAppAccounts to update
     */
    where?: WhatsAppAccountWhereInput
    /**
     * Limit how many WhatsAppAccounts to update.
     */
    limit?: number
  }

  /**
   * WhatsAppAccount updateManyAndReturn
   */
  export type WhatsAppAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppAccount
     */
    select?: WhatsAppAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppAccount
     */
    omit?: WhatsAppAccountOmit<ExtArgs> | null
    /**
     * The data used to update WhatsAppAccounts.
     */
    data: XOR<WhatsAppAccountUpdateManyMutationInput, WhatsAppAccountUncheckedUpdateManyInput>
    /**
     * Filter which WhatsAppAccounts to update
     */
    where?: WhatsAppAccountWhereInput
    /**
     * Limit how many WhatsAppAccounts to update.
     */
    limit?: number
  }

  /**
   * WhatsAppAccount upsert
   */
  export type WhatsAppAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppAccount
     */
    select?: WhatsAppAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppAccount
     */
    omit?: WhatsAppAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the WhatsAppAccount to update in case it exists.
     */
    where: WhatsAppAccountWhereUniqueInput
    /**
     * In case the WhatsAppAccount found by the `where` argument doesn't exist, create a new WhatsAppAccount with this data.
     */
    create: XOR<WhatsAppAccountCreateInput, WhatsAppAccountUncheckedCreateInput>
    /**
     * In case the WhatsAppAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WhatsAppAccountUpdateInput, WhatsAppAccountUncheckedUpdateInput>
  }

  /**
   * WhatsAppAccount delete
   */
  export type WhatsAppAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppAccount
     */
    select?: WhatsAppAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppAccount
     */
    omit?: WhatsAppAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppAccountInclude<ExtArgs> | null
    /**
     * Filter which WhatsAppAccount to delete.
     */
    where: WhatsAppAccountWhereUniqueInput
  }

  /**
   * WhatsAppAccount deleteMany
   */
  export type WhatsAppAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsAppAccounts to delete
     */
    where?: WhatsAppAccountWhereInput
    /**
     * Limit how many WhatsAppAccounts to delete.
     */
    limit?: number
  }

  /**
   * WhatsAppAccount.assistantSettings
   */
  export type WhatsAppAccount$assistantSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssistantSettings
     */
    select?: AssistantSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssistantSettings
     */
    omit?: AssistantSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistantSettingsInclude<ExtArgs> | null
    where?: AssistantSettingsWhereInput
  }

  /**
   * WhatsAppAccount.groups
   */
  export type WhatsAppAccount$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    where?: ChatGroupWhereInput
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    cursor?: ChatGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatGroupScalarFieldEnum | ChatGroupScalarFieldEnum[]
  }

  /**
   * WhatsAppAccount.templates
   */
  export type WhatsAppAccount$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    where?: MessageTemplateWhereInput
    orderBy?: MessageTemplateOrderByWithRelationInput | MessageTemplateOrderByWithRelationInput[]
    cursor?: MessageTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageTemplateScalarFieldEnum | MessageTemplateScalarFieldEnum[]
  }

  /**
   * WhatsAppAccount.broadcasts
   */
  export type WhatsAppAccount$broadcastsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppBroadcast
     */
    select?: WhatsAppBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppBroadcast
     */
    omit?: WhatsAppBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppBroadcastInclude<ExtArgs> | null
    where?: WhatsAppBroadcastWhereInput
    orderBy?: WhatsAppBroadcastOrderByWithRelationInput | WhatsAppBroadcastOrderByWithRelationInput[]
    cursor?: WhatsAppBroadcastWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WhatsAppBroadcastScalarFieldEnum | WhatsAppBroadcastScalarFieldEnum[]
  }

  /**
   * WhatsAppAccount.chats
   */
  export type WhatsAppAccount$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppChat
     */
    select?: WhatsAppChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppChat
     */
    omit?: WhatsAppChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppChatInclude<ExtArgs> | null
    where?: WhatsAppChatWhereInput
    orderBy?: WhatsAppChatOrderByWithRelationInput | WhatsAppChatOrderByWithRelationInput[]
    cursor?: WhatsAppChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WhatsAppChatScalarFieldEnum | WhatsAppChatScalarFieldEnum[]
  }

  /**
   * WhatsAppAccount.messages
   */
  export type WhatsAppAccount$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppMessage
     */
    select?: WhatsAppMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppMessage
     */
    omit?: WhatsAppMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppMessageInclude<ExtArgs> | null
    where?: WhatsAppMessageWhereInput
    orderBy?: WhatsAppMessageOrderByWithRelationInput | WhatsAppMessageOrderByWithRelationInput[]
    cursor?: WhatsAppMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WhatsAppMessageScalarFieldEnum | WhatsAppMessageScalarFieldEnum[]
  }

  /**
   * WhatsAppAccount without action
   */
  export type WhatsAppAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppAccount
     */
    select?: WhatsAppAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppAccount
     */
    omit?: WhatsAppAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppAccountInclude<ExtArgs> | null
  }


  /**
   * Model WhatsAppMessage
   */

  export type AggregateWhatsAppMessage = {
    _count: WhatsAppMessageCountAggregateOutputType | null
    _min: WhatsAppMessageMinAggregateOutputType | null
    _max: WhatsAppMessageMaxAggregateOutputType | null
  }

  export type WhatsAppMessageMinAggregateOutputType = {
    id: string | null
    whatsappId: string | null
    from: string | null
    to: string | null
    type: string | null
    content: string | null
    timestamp: Date | null
    status: string | null
    errorData: string | null
    accountId: string | null
    chatId: string | null
    isAssistant: boolean | null
  }

  export type WhatsAppMessageMaxAggregateOutputType = {
    id: string | null
    whatsappId: string | null
    from: string | null
    to: string | null
    type: string | null
    content: string | null
    timestamp: Date | null
    status: string | null
    errorData: string | null
    accountId: string | null
    chatId: string | null
    isAssistant: boolean | null
  }

  export type WhatsAppMessageCountAggregateOutputType = {
    id: number
    whatsappId: number
    from: number
    to: number
    type: number
    content: number
    timestamp: number
    status: number
    errorData: number
    accountId: number
    chatId: number
    isAssistant: number
    _all: number
  }


  export type WhatsAppMessageMinAggregateInputType = {
    id?: true
    whatsappId?: true
    from?: true
    to?: true
    type?: true
    content?: true
    timestamp?: true
    status?: true
    errorData?: true
    accountId?: true
    chatId?: true
    isAssistant?: true
  }

  export type WhatsAppMessageMaxAggregateInputType = {
    id?: true
    whatsappId?: true
    from?: true
    to?: true
    type?: true
    content?: true
    timestamp?: true
    status?: true
    errorData?: true
    accountId?: true
    chatId?: true
    isAssistant?: true
  }

  export type WhatsAppMessageCountAggregateInputType = {
    id?: true
    whatsappId?: true
    from?: true
    to?: true
    type?: true
    content?: true
    timestamp?: true
    status?: true
    errorData?: true
    accountId?: true
    chatId?: true
    isAssistant?: true
    _all?: true
  }

  export type WhatsAppMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsAppMessage to aggregate.
     */
    where?: WhatsAppMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppMessages to fetch.
     */
    orderBy?: WhatsAppMessageOrderByWithRelationInput | WhatsAppMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WhatsAppMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WhatsAppMessages
    **/
    _count?: true | WhatsAppMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WhatsAppMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WhatsAppMessageMaxAggregateInputType
  }

  export type GetWhatsAppMessageAggregateType<T extends WhatsAppMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateWhatsAppMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhatsAppMessage[P]>
      : GetScalarType<T[P], AggregateWhatsAppMessage[P]>
  }




  export type WhatsAppMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsAppMessageWhereInput
    orderBy?: WhatsAppMessageOrderByWithAggregationInput | WhatsAppMessageOrderByWithAggregationInput[]
    by: WhatsAppMessageScalarFieldEnum[] | WhatsAppMessageScalarFieldEnum
    having?: WhatsAppMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WhatsAppMessageCountAggregateInputType | true
    _min?: WhatsAppMessageMinAggregateInputType
    _max?: WhatsAppMessageMaxAggregateInputType
  }

  export type WhatsAppMessageGroupByOutputType = {
    id: string
    whatsappId: string | null
    from: string
    to: string
    type: string
    content: string
    timestamp: Date
    status: string
    errorData: string | null
    accountId: string
    chatId: string
    isAssistant: boolean
    _count: WhatsAppMessageCountAggregateOutputType | null
    _min: WhatsAppMessageMinAggregateOutputType | null
    _max: WhatsAppMessageMaxAggregateOutputType | null
  }

  type GetWhatsAppMessageGroupByPayload<T extends WhatsAppMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WhatsAppMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WhatsAppMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WhatsAppMessageGroupByOutputType[P]>
            : GetScalarType<T[P], WhatsAppMessageGroupByOutputType[P]>
        }
      >
    >


  export type WhatsAppMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    whatsappId?: boolean
    from?: boolean
    to?: boolean
    type?: boolean
    content?: boolean
    timestamp?: boolean
    status?: boolean
    errorData?: boolean
    accountId?: boolean
    chatId?: boolean
    isAssistant?: boolean
    chat?: boolean | WhatsAppChatDefaultArgs<ExtArgs>
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsAppMessage"]>

  export type WhatsAppMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    whatsappId?: boolean
    from?: boolean
    to?: boolean
    type?: boolean
    content?: boolean
    timestamp?: boolean
    status?: boolean
    errorData?: boolean
    accountId?: boolean
    chatId?: boolean
    isAssistant?: boolean
    chat?: boolean | WhatsAppChatDefaultArgs<ExtArgs>
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsAppMessage"]>

  export type WhatsAppMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    whatsappId?: boolean
    from?: boolean
    to?: boolean
    type?: boolean
    content?: boolean
    timestamp?: boolean
    status?: boolean
    errorData?: boolean
    accountId?: boolean
    chatId?: boolean
    isAssistant?: boolean
    chat?: boolean | WhatsAppChatDefaultArgs<ExtArgs>
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsAppMessage"]>

  export type WhatsAppMessageSelectScalar = {
    id?: boolean
    whatsappId?: boolean
    from?: boolean
    to?: boolean
    type?: boolean
    content?: boolean
    timestamp?: boolean
    status?: boolean
    errorData?: boolean
    accountId?: boolean
    chatId?: boolean
    isAssistant?: boolean
  }

  export type WhatsAppMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "whatsappId" | "from" | "to" | "type" | "content" | "timestamp" | "status" | "errorData" | "accountId" | "chatId" | "isAssistant", ExtArgs["result"]["whatsAppMessage"]>
  export type WhatsAppMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | WhatsAppChatDefaultArgs<ExtArgs>
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
  }
  export type WhatsAppMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | WhatsAppChatDefaultArgs<ExtArgs>
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
  }
  export type WhatsAppMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | WhatsAppChatDefaultArgs<ExtArgs>
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
  }

  export type $WhatsAppMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WhatsAppMessage"
    objects: {
      chat: Prisma.$WhatsAppChatPayload<ExtArgs>
      account: Prisma.$WhatsAppAccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      whatsappId: string | null
      from: string
      to: string
      type: string
      content: string
      timestamp: Date
      status: string
      errorData: string | null
      accountId: string
      chatId: string
      isAssistant: boolean
    }, ExtArgs["result"]["whatsAppMessage"]>
    composites: {}
  }

  type WhatsAppMessageGetPayload<S extends boolean | null | undefined | WhatsAppMessageDefaultArgs> = $Result.GetResult<Prisma.$WhatsAppMessagePayload, S>

  type WhatsAppMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WhatsAppMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WhatsAppMessageCountAggregateInputType | true
    }

  export interface WhatsAppMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WhatsAppMessage'], meta: { name: 'WhatsAppMessage' } }
    /**
     * Find zero or one WhatsAppMessage that matches the filter.
     * @param {WhatsAppMessageFindUniqueArgs} args - Arguments to find a WhatsAppMessage
     * @example
     * // Get one WhatsAppMessage
     * const whatsAppMessage = await prisma.whatsAppMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WhatsAppMessageFindUniqueArgs>(args: SelectSubset<T, WhatsAppMessageFindUniqueArgs<ExtArgs>>): Prisma__WhatsAppMessageClient<$Result.GetResult<Prisma.$WhatsAppMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WhatsAppMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WhatsAppMessageFindUniqueOrThrowArgs} args - Arguments to find a WhatsAppMessage
     * @example
     * // Get one WhatsAppMessage
     * const whatsAppMessage = await prisma.whatsAppMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WhatsAppMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, WhatsAppMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WhatsAppMessageClient<$Result.GetResult<Prisma.$WhatsAppMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhatsAppMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppMessageFindFirstArgs} args - Arguments to find a WhatsAppMessage
     * @example
     * // Get one WhatsAppMessage
     * const whatsAppMessage = await prisma.whatsAppMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WhatsAppMessageFindFirstArgs>(args?: SelectSubset<T, WhatsAppMessageFindFirstArgs<ExtArgs>>): Prisma__WhatsAppMessageClient<$Result.GetResult<Prisma.$WhatsAppMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhatsAppMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppMessageFindFirstOrThrowArgs} args - Arguments to find a WhatsAppMessage
     * @example
     * // Get one WhatsAppMessage
     * const whatsAppMessage = await prisma.whatsAppMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WhatsAppMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, WhatsAppMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__WhatsAppMessageClient<$Result.GetResult<Prisma.$WhatsAppMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WhatsAppMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WhatsAppMessages
     * const whatsAppMessages = await prisma.whatsAppMessage.findMany()
     * 
     * // Get first 10 WhatsAppMessages
     * const whatsAppMessages = await prisma.whatsAppMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const whatsAppMessageWithIdOnly = await prisma.whatsAppMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WhatsAppMessageFindManyArgs>(args?: SelectSubset<T, WhatsAppMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WhatsAppMessage.
     * @param {WhatsAppMessageCreateArgs} args - Arguments to create a WhatsAppMessage.
     * @example
     * // Create one WhatsAppMessage
     * const WhatsAppMessage = await prisma.whatsAppMessage.create({
     *   data: {
     *     // ... data to create a WhatsAppMessage
     *   }
     * })
     * 
     */
    create<T extends WhatsAppMessageCreateArgs>(args: SelectSubset<T, WhatsAppMessageCreateArgs<ExtArgs>>): Prisma__WhatsAppMessageClient<$Result.GetResult<Prisma.$WhatsAppMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WhatsAppMessages.
     * @param {WhatsAppMessageCreateManyArgs} args - Arguments to create many WhatsAppMessages.
     * @example
     * // Create many WhatsAppMessages
     * const whatsAppMessage = await prisma.whatsAppMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WhatsAppMessageCreateManyArgs>(args?: SelectSubset<T, WhatsAppMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WhatsAppMessages and returns the data saved in the database.
     * @param {WhatsAppMessageCreateManyAndReturnArgs} args - Arguments to create many WhatsAppMessages.
     * @example
     * // Create many WhatsAppMessages
     * const whatsAppMessage = await prisma.whatsAppMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WhatsAppMessages and only return the `id`
     * const whatsAppMessageWithIdOnly = await prisma.whatsAppMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WhatsAppMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, WhatsAppMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WhatsAppMessage.
     * @param {WhatsAppMessageDeleteArgs} args - Arguments to delete one WhatsAppMessage.
     * @example
     * // Delete one WhatsAppMessage
     * const WhatsAppMessage = await prisma.whatsAppMessage.delete({
     *   where: {
     *     // ... filter to delete one WhatsAppMessage
     *   }
     * })
     * 
     */
    delete<T extends WhatsAppMessageDeleteArgs>(args: SelectSubset<T, WhatsAppMessageDeleteArgs<ExtArgs>>): Prisma__WhatsAppMessageClient<$Result.GetResult<Prisma.$WhatsAppMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WhatsAppMessage.
     * @param {WhatsAppMessageUpdateArgs} args - Arguments to update one WhatsAppMessage.
     * @example
     * // Update one WhatsAppMessage
     * const whatsAppMessage = await prisma.whatsAppMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WhatsAppMessageUpdateArgs>(args: SelectSubset<T, WhatsAppMessageUpdateArgs<ExtArgs>>): Prisma__WhatsAppMessageClient<$Result.GetResult<Prisma.$WhatsAppMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WhatsAppMessages.
     * @param {WhatsAppMessageDeleteManyArgs} args - Arguments to filter WhatsAppMessages to delete.
     * @example
     * // Delete a few WhatsAppMessages
     * const { count } = await prisma.whatsAppMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WhatsAppMessageDeleteManyArgs>(args?: SelectSubset<T, WhatsAppMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhatsAppMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WhatsAppMessages
     * const whatsAppMessage = await prisma.whatsAppMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WhatsAppMessageUpdateManyArgs>(args: SelectSubset<T, WhatsAppMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhatsAppMessages and returns the data updated in the database.
     * @param {WhatsAppMessageUpdateManyAndReturnArgs} args - Arguments to update many WhatsAppMessages.
     * @example
     * // Update many WhatsAppMessages
     * const whatsAppMessage = await prisma.whatsAppMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WhatsAppMessages and only return the `id`
     * const whatsAppMessageWithIdOnly = await prisma.whatsAppMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WhatsAppMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, WhatsAppMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WhatsAppMessage.
     * @param {WhatsAppMessageUpsertArgs} args - Arguments to update or create a WhatsAppMessage.
     * @example
     * // Update or create a WhatsAppMessage
     * const whatsAppMessage = await prisma.whatsAppMessage.upsert({
     *   create: {
     *     // ... data to create a WhatsAppMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WhatsAppMessage we want to update
     *   }
     * })
     */
    upsert<T extends WhatsAppMessageUpsertArgs>(args: SelectSubset<T, WhatsAppMessageUpsertArgs<ExtArgs>>): Prisma__WhatsAppMessageClient<$Result.GetResult<Prisma.$WhatsAppMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WhatsAppMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppMessageCountArgs} args - Arguments to filter WhatsAppMessages to count.
     * @example
     * // Count the number of WhatsAppMessages
     * const count = await prisma.whatsAppMessage.count({
     *   where: {
     *     // ... the filter for the WhatsAppMessages we want to count
     *   }
     * })
    **/
    count<T extends WhatsAppMessageCountArgs>(
      args?: Subset<T, WhatsAppMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WhatsAppMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WhatsAppMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WhatsAppMessageAggregateArgs>(args: Subset<T, WhatsAppMessageAggregateArgs>): Prisma.PrismaPromise<GetWhatsAppMessageAggregateType<T>>

    /**
     * Group by WhatsAppMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WhatsAppMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WhatsAppMessageGroupByArgs['orderBy'] }
        : { orderBy?: WhatsAppMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WhatsAppMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhatsAppMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WhatsAppMessage model
   */
  readonly fields: WhatsAppMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WhatsAppMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WhatsAppMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends WhatsAppChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WhatsAppChatDefaultArgs<ExtArgs>>): Prisma__WhatsAppChatClient<$Result.GetResult<Prisma.$WhatsAppChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    account<T extends WhatsAppAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WhatsAppAccountDefaultArgs<ExtArgs>>): Prisma__WhatsAppAccountClient<$Result.GetResult<Prisma.$WhatsAppAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WhatsAppMessage model
   */
  interface WhatsAppMessageFieldRefs {
    readonly id: FieldRef<"WhatsAppMessage", 'String'>
    readonly whatsappId: FieldRef<"WhatsAppMessage", 'String'>
    readonly from: FieldRef<"WhatsAppMessage", 'String'>
    readonly to: FieldRef<"WhatsAppMessage", 'String'>
    readonly type: FieldRef<"WhatsAppMessage", 'String'>
    readonly content: FieldRef<"WhatsAppMessage", 'String'>
    readonly timestamp: FieldRef<"WhatsAppMessage", 'DateTime'>
    readonly status: FieldRef<"WhatsAppMessage", 'String'>
    readonly errorData: FieldRef<"WhatsAppMessage", 'String'>
    readonly accountId: FieldRef<"WhatsAppMessage", 'String'>
    readonly chatId: FieldRef<"WhatsAppMessage", 'String'>
    readonly isAssistant: FieldRef<"WhatsAppMessage", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * WhatsAppMessage findUnique
   */
  export type WhatsAppMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppMessage
     */
    select?: WhatsAppMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppMessage
     */
    omit?: WhatsAppMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppMessageInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppMessage to fetch.
     */
    where: WhatsAppMessageWhereUniqueInput
  }

  /**
   * WhatsAppMessage findUniqueOrThrow
   */
  export type WhatsAppMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppMessage
     */
    select?: WhatsAppMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppMessage
     */
    omit?: WhatsAppMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppMessageInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppMessage to fetch.
     */
    where: WhatsAppMessageWhereUniqueInput
  }

  /**
   * WhatsAppMessage findFirst
   */
  export type WhatsAppMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppMessage
     */
    select?: WhatsAppMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppMessage
     */
    omit?: WhatsAppMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppMessageInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppMessage to fetch.
     */
    where?: WhatsAppMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppMessages to fetch.
     */
    orderBy?: WhatsAppMessageOrderByWithRelationInput | WhatsAppMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsAppMessages.
     */
    cursor?: WhatsAppMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsAppMessages.
     */
    distinct?: WhatsAppMessageScalarFieldEnum | WhatsAppMessageScalarFieldEnum[]
  }

  /**
   * WhatsAppMessage findFirstOrThrow
   */
  export type WhatsAppMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppMessage
     */
    select?: WhatsAppMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppMessage
     */
    omit?: WhatsAppMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppMessageInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppMessage to fetch.
     */
    where?: WhatsAppMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppMessages to fetch.
     */
    orderBy?: WhatsAppMessageOrderByWithRelationInput | WhatsAppMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsAppMessages.
     */
    cursor?: WhatsAppMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsAppMessages.
     */
    distinct?: WhatsAppMessageScalarFieldEnum | WhatsAppMessageScalarFieldEnum[]
  }

  /**
   * WhatsAppMessage findMany
   */
  export type WhatsAppMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppMessage
     */
    select?: WhatsAppMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppMessage
     */
    omit?: WhatsAppMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppMessageInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppMessages to fetch.
     */
    where?: WhatsAppMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppMessages to fetch.
     */
    orderBy?: WhatsAppMessageOrderByWithRelationInput | WhatsAppMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WhatsAppMessages.
     */
    cursor?: WhatsAppMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppMessages.
     */
    skip?: number
    distinct?: WhatsAppMessageScalarFieldEnum | WhatsAppMessageScalarFieldEnum[]
  }

  /**
   * WhatsAppMessage create
   */
  export type WhatsAppMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppMessage
     */
    select?: WhatsAppMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppMessage
     */
    omit?: WhatsAppMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a WhatsAppMessage.
     */
    data: XOR<WhatsAppMessageCreateInput, WhatsAppMessageUncheckedCreateInput>
  }

  /**
   * WhatsAppMessage createMany
   */
  export type WhatsAppMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WhatsAppMessages.
     */
    data: WhatsAppMessageCreateManyInput | WhatsAppMessageCreateManyInput[]
  }

  /**
   * WhatsAppMessage createManyAndReturn
   */
  export type WhatsAppMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppMessage
     */
    select?: WhatsAppMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppMessage
     */
    omit?: WhatsAppMessageOmit<ExtArgs> | null
    /**
     * The data used to create many WhatsAppMessages.
     */
    data: WhatsAppMessageCreateManyInput | WhatsAppMessageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WhatsAppMessage update
   */
  export type WhatsAppMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppMessage
     */
    select?: WhatsAppMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppMessage
     */
    omit?: WhatsAppMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a WhatsAppMessage.
     */
    data: XOR<WhatsAppMessageUpdateInput, WhatsAppMessageUncheckedUpdateInput>
    /**
     * Choose, which WhatsAppMessage to update.
     */
    where: WhatsAppMessageWhereUniqueInput
  }

  /**
   * WhatsAppMessage updateMany
   */
  export type WhatsAppMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WhatsAppMessages.
     */
    data: XOR<WhatsAppMessageUpdateManyMutationInput, WhatsAppMessageUncheckedUpdateManyInput>
    /**
     * Filter which WhatsAppMessages to update
     */
    where?: WhatsAppMessageWhereInput
    /**
     * Limit how many WhatsAppMessages to update.
     */
    limit?: number
  }

  /**
   * WhatsAppMessage updateManyAndReturn
   */
  export type WhatsAppMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppMessage
     */
    select?: WhatsAppMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppMessage
     */
    omit?: WhatsAppMessageOmit<ExtArgs> | null
    /**
     * The data used to update WhatsAppMessages.
     */
    data: XOR<WhatsAppMessageUpdateManyMutationInput, WhatsAppMessageUncheckedUpdateManyInput>
    /**
     * Filter which WhatsAppMessages to update
     */
    where?: WhatsAppMessageWhereInput
    /**
     * Limit how many WhatsAppMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WhatsAppMessage upsert
   */
  export type WhatsAppMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppMessage
     */
    select?: WhatsAppMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppMessage
     */
    omit?: WhatsAppMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the WhatsAppMessage to update in case it exists.
     */
    where: WhatsAppMessageWhereUniqueInput
    /**
     * In case the WhatsAppMessage found by the `where` argument doesn't exist, create a new WhatsAppMessage with this data.
     */
    create: XOR<WhatsAppMessageCreateInput, WhatsAppMessageUncheckedCreateInput>
    /**
     * In case the WhatsAppMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WhatsAppMessageUpdateInput, WhatsAppMessageUncheckedUpdateInput>
  }

  /**
   * WhatsAppMessage delete
   */
  export type WhatsAppMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppMessage
     */
    select?: WhatsAppMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppMessage
     */
    omit?: WhatsAppMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppMessageInclude<ExtArgs> | null
    /**
     * Filter which WhatsAppMessage to delete.
     */
    where: WhatsAppMessageWhereUniqueInput
  }

  /**
   * WhatsAppMessage deleteMany
   */
  export type WhatsAppMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsAppMessages to delete
     */
    where?: WhatsAppMessageWhereInput
    /**
     * Limit how many WhatsAppMessages to delete.
     */
    limit?: number
  }

  /**
   * WhatsAppMessage without action
   */
  export type WhatsAppMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppMessage
     */
    select?: WhatsAppMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppMessage
     */
    omit?: WhatsAppMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppMessageInclude<ExtArgs> | null
  }


  /**
   * Model WhatsAppChat
   */

  export type AggregateWhatsAppChat = {
    _count: WhatsAppChatCountAggregateOutputType | null
    _avg: WhatsAppChatAvgAggregateOutputType | null
    _sum: WhatsAppChatSumAggregateOutputType | null
    _min: WhatsAppChatMinAggregateOutputType | null
    _max: WhatsAppChatMaxAggregateOutputType | null
  }

  export type WhatsAppChatAvgAggregateOutputType = {
    unreadCount: number | null
  }

  export type WhatsAppChatSumAggregateOutputType = {
    unreadCount: number | null
  }

  export type WhatsAppChatMinAggregateOutputType = {
    id: string | null
    phoneNumber: string | null
    displayName: string | null
    lastMessageAt: Date | null
    unreadCount: number | null
    accountId: string | null
    assistantEnabled: boolean | null
    threadId: string | null
    group: string | null
  }

  export type WhatsAppChatMaxAggregateOutputType = {
    id: string | null
    phoneNumber: string | null
    displayName: string | null
    lastMessageAt: Date | null
    unreadCount: number | null
    accountId: string | null
    assistantEnabled: boolean | null
    threadId: string | null
    group: string | null
  }

  export type WhatsAppChatCountAggregateOutputType = {
    id: number
    phoneNumber: number
    displayName: number
    lastMessageAt: number
    unreadCount: number
    accountId: number
    assistantEnabled: number
    threadId: number
    group: number
    _all: number
  }


  export type WhatsAppChatAvgAggregateInputType = {
    unreadCount?: true
  }

  export type WhatsAppChatSumAggregateInputType = {
    unreadCount?: true
  }

  export type WhatsAppChatMinAggregateInputType = {
    id?: true
    phoneNumber?: true
    displayName?: true
    lastMessageAt?: true
    unreadCount?: true
    accountId?: true
    assistantEnabled?: true
    threadId?: true
    group?: true
  }

  export type WhatsAppChatMaxAggregateInputType = {
    id?: true
    phoneNumber?: true
    displayName?: true
    lastMessageAt?: true
    unreadCount?: true
    accountId?: true
    assistantEnabled?: true
    threadId?: true
    group?: true
  }

  export type WhatsAppChatCountAggregateInputType = {
    id?: true
    phoneNumber?: true
    displayName?: true
    lastMessageAt?: true
    unreadCount?: true
    accountId?: true
    assistantEnabled?: true
    threadId?: true
    group?: true
    _all?: true
  }

  export type WhatsAppChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsAppChat to aggregate.
     */
    where?: WhatsAppChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppChats to fetch.
     */
    orderBy?: WhatsAppChatOrderByWithRelationInput | WhatsAppChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WhatsAppChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WhatsAppChats
    **/
    _count?: true | WhatsAppChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WhatsAppChatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WhatsAppChatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WhatsAppChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WhatsAppChatMaxAggregateInputType
  }

  export type GetWhatsAppChatAggregateType<T extends WhatsAppChatAggregateArgs> = {
        [P in keyof T & keyof AggregateWhatsAppChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhatsAppChat[P]>
      : GetScalarType<T[P], AggregateWhatsAppChat[P]>
  }




  export type WhatsAppChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsAppChatWhereInput
    orderBy?: WhatsAppChatOrderByWithAggregationInput | WhatsAppChatOrderByWithAggregationInput[]
    by: WhatsAppChatScalarFieldEnum[] | WhatsAppChatScalarFieldEnum
    having?: WhatsAppChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WhatsAppChatCountAggregateInputType | true
    _avg?: WhatsAppChatAvgAggregateInputType
    _sum?: WhatsAppChatSumAggregateInputType
    _min?: WhatsAppChatMinAggregateInputType
    _max?: WhatsAppChatMaxAggregateInputType
  }

  export type WhatsAppChatGroupByOutputType = {
    id: string
    phoneNumber: string
    displayName: string | null
    lastMessageAt: Date
    unreadCount: number
    accountId: string
    assistantEnabled: boolean
    threadId: string | null
    group: string | null
    _count: WhatsAppChatCountAggregateOutputType | null
    _avg: WhatsAppChatAvgAggregateOutputType | null
    _sum: WhatsAppChatSumAggregateOutputType | null
    _min: WhatsAppChatMinAggregateOutputType | null
    _max: WhatsAppChatMaxAggregateOutputType | null
  }

  type GetWhatsAppChatGroupByPayload<T extends WhatsAppChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WhatsAppChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WhatsAppChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WhatsAppChatGroupByOutputType[P]>
            : GetScalarType<T[P], WhatsAppChatGroupByOutputType[P]>
        }
      >
    >


  export type WhatsAppChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumber?: boolean
    displayName?: boolean
    lastMessageAt?: boolean
    unreadCount?: boolean
    accountId?: boolean
    assistantEnabled?: boolean
    threadId?: boolean
    group?: boolean
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
    messages?: boolean | WhatsAppChat$messagesArgs<ExtArgs>
    _count?: boolean | WhatsAppChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsAppChat"]>

  export type WhatsAppChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumber?: boolean
    displayName?: boolean
    lastMessageAt?: boolean
    unreadCount?: boolean
    accountId?: boolean
    assistantEnabled?: boolean
    threadId?: boolean
    group?: boolean
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsAppChat"]>

  export type WhatsAppChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumber?: boolean
    displayName?: boolean
    lastMessageAt?: boolean
    unreadCount?: boolean
    accountId?: boolean
    assistantEnabled?: boolean
    threadId?: boolean
    group?: boolean
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsAppChat"]>

  export type WhatsAppChatSelectScalar = {
    id?: boolean
    phoneNumber?: boolean
    displayName?: boolean
    lastMessageAt?: boolean
    unreadCount?: boolean
    accountId?: boolean
    assistantEnabled?: boolean
    threadId?: boolean
    group?: boolean
  }

  export type WhatsAppChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phoneNumber" | "displayName" | "lastMessageAt" | "unreadCount" | "accountId" | "assistantEnabled" | "threadId" | "group", ExtArgs["result"]["whatsAppChat"]>
  export type WhatsAppChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
    messages?: boolean | WhatsAppChat$messagesArgs<ExtArgs>
    _count?: boolean | WhatsAppChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WhatsAppChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
  }
  export type WhatsAppChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
  }

  export type $WhatsAppChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WhatsAppChat"
    objects: {
      account: Prisma.$WhatsAppAccountPayload<ExtArgs>
      messages: Prisma.$WhatsAppMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phoneNumber: string
      displayName: string | null
      lastMessageAt: Date
      unreadCount: number
      accountId: string
      assistantEnabled: boolean
      threadId: string | null
      group: string | null
    }, ExtArgs["result"]["whatsAppChat"]>
    composites: {}
  }

  type WhatsAppChatGetPayload<S extends boolean | null | undefined | WhatsAppChatDefaultArgs> = $Result.GetResult<Prisma.$WhatsAppChatPayload, S>

  type WhatsAppChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WhatsAppChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WhatsAppChatCountAggregateInputType | true
    }

  export interface WhatsAppChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WhatsAppChat'], meta: { name: 'WhatsAppChat' } }
    /**
     * Find zero or one WhatsAppChat that matches the filter.
     * @param {WhatsAppChatFindUniqueArgs} args - Arguments to find a WhatsAppChat
     * @example
     * // Get one WhatsAppChat
     * const whatsAppChat = await prisma.whatsAppChat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WhatsAppChatFindUniqueArgs>(args: SelectSubset<T, WhatsAppChatFindUniqueArgs<ExtArgs>>): Prisma__WhatsAppChatClient<$Result.GetResult<Prisma.$WhatsAppChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WhatsAppChat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WhatsAppChatFindUniqueOrThrowArgs} args - Arguments to find a WhatsAppChat
     * @example
     * // Get one WhatsAppChat
     * const whatsAppChat = await prisma.whatsAppChat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WhatsAppChatFindUniqueOrThrowArgs>(args: SelectSubset<T, WhatsAppChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WhatsAppChatClient<$Result.GetResult<Prisma.$WhatsAppChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhatsAppChat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppChatFindFirstArgs} args - Arguments to find a WhatsAppChat
     * @example
     * // Get one WhatsAppChat
     * const whatsAppChat = await prisma.whatsAppChat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WhatsAppChatFindFirstArgs>(args?: SelectSubset<T, WhatsAppChatFindFirstArgs<ExtArgs>>): Prisma__WhatsAppChatClient<$Result.GetResult<Prisma.$WhatsAppChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhatsAppChat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppChatFindFirstOrThrowArgs} args - Arguments to find a WhatsAppChat
     * @example
     * // Get one WhatsAppChat
     * const whatsAppChat = await prisma.whatsAppChat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WhatsAppChatFindFirstOrThrowArgs>(args?: SelectSubset<T, WhatsAppChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__WhatsAppChatClient<$Result.GetResult<Prisma.$WhatsAppChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WhatsAppChats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WhatsAppChats
     * const whatsAppChats = await prisma.whatsAppChat.findMany()
     * 
     * // Get first 10 WhatsAppChats
     * const whatsAppChats = await prisma.whatsAppChat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const whatsAppChatWithIdOnly = await prisma.whatsAppChat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WhatsAppChatFindManyArgs>(args?: SelectSubset<T, WhatsAppChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WhatsAppChat.
     * @param {WhatsAppChatCreateArgs} args - Arguments to create a WhatsAppChat.
     * @example
     * // Create one WhatsAppChat
     * const WhatsAppChat = await prisma.whatsAppChat.create({
     *   data: {
     *     // ... data to create a WhatsAppChat
     *   }
     * })
     * 
     */
    create<T extends WhatsAppChatCreateArgs>(args: SelectSubset<T, WhatsAppChatCreateArgs<ExtArgs>>): Prisma__WhatsAppChatClient<$Result.GetResult<Prisma.$WhatsAppChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WhatsAppChats.
     * @param {WhatsAppChatCreateManyArgs} args - Arguments to create many WhatsAppChats.
     * @example
     * // Create many WhatsAppChats
     * const whatsAppChat = await prisma.whatsAppChat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WhatsAppChatCreateManyArgs>(args?: SelectSubset<T, WhatsAppChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WhatsAppChats and returns the data saved in the database.
     * @param {WhatsAppChatCreateManyAndReturnArgs} args - Arguments to create many WhatsAppChats.
     * @example
     * // Create many WhatsAppChats
     * const whatsAppChat = await prisma.whatsAppChat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WhatsAppChats and only return the `id`
     * const whatsAppChatWithIdOnly = await prisma.whatsAppChat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WhatsAppChatCreateManyAndReturnArgs>(args?: SelectSubset<T, WhatsAppChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WhatsAppChat.
     * @param {WhatsAppChatDeleteArgs} args - Arguments to delete one WhatsAppChat.
     * @example
     * // Delete one WhatsAppChat
     * const WhatsAppChat = await prisma.whatsAppChat.delete({
     *   where: {
     *     // ... filter to delete one WhatsAppChat
     *   }
     * })
     * 
     */
    delete<T extends WhatsAppChatDeleteArgs>(args: SelectSubset<T, WhatsAppChatDeleteArgs<ExtArgs>>): Prisma__WhatsAppChatClient<$Result.GetResult<Prisma.$WhatsAppChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WhatsAppChat.
     * @param {WhatsAppChatUpdateArgs} args - Arguments to update one WhatsAppChat.
     * @example
     * // Update one WhatsAppChat
     * const whatsAppChat = await prisma.whatsAppChat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WhatsAppChatUpdateArgs>(args: SelectSubset<T, WhatsAppChatUpdateArgs<ExtArgs>>): Prisma__WhatsAppChatClient<$Result.GetResult<Prisma.$WhatsAppChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WhatsAppChats.
     * @param {WhatsAppChatDeleteManyArgs} args - Arguments to filter WhatsAppChats to delete.
     * @example
     * // Delete a few WhatsAppChats
     * const { count } = await prisma.whatsAppChat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WhatsAppChatDeleteManyArgs>(args?: SelectSubset<T, WhatsAppChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhatsAppChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WhatsAppChats
     * const whatsAppChat = await prisma.whatsAppChat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WhatsAppChatUpdateManyArgs>(args: SelectSubset<T, WhatsAppChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhatsAppChats and returns the data updated in the database.
     * @param {WhatsAppChatUpdateManyAndReturnArgs} args - Arguments to update many WhatsAppChats.
     * @example
     * // Update many WhatsAppChats
     * const whatsAppChat = await prisma.whatsAppChat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WhatsAppChats and only return the `id`
     * const whatsAppChatWithIdOnly = await prisma.whatsAppChat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WhatsAppChatUpdateManyAndReturnArgs>(args: SelectSubset<T, WhatsAppChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WhatsAppChat.
     * @param {WhatsAppChatUpsertArgs} args - Arguments to update or create a WhatsAppChat.
     * @example
     * // Update or create a WhatsAppChat
     * const whatsAppChat = await prisma.whatsAppChat.upsert({
     *   create: {
     *     // ... data to create a WhatsAppChat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WhatsAppChat we want to update
     *   }
     * })
     */
    upsert<T extends WhatsAppChatUpsertArgs>(args: SelectSubset<T, WhatsAppChatUpsertArgs<ExtArgs>>): Prisma__WhatsAppChatClient<$Result.GetResult<Prisma.$WhatsAppChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WhatsAppChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppChatCountArgs} args - Arguments to filter WhatsAppChats to count.
     * @example
     * // Count the number of WhatsAppChats
     * const count = await prisma.whatsAppChat.count({
     *   where: {
     *     // ... the filter for the WhatsAppChats we want to count
     *   }
     * })
    **/
    count<T extends WhatsAppChatCountArgs>(
      args?: Subset<T, WhatsAppChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WhatsAppChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WhatsAppChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WhatsAppChatAggregateArgs>(args: Subset<T, WhatsAppChatAggregateArgs>): Prisma.PrismaPromise<GetWhatsAppChatAggregateType<T>>

    /**
     * Group by WhatsAppChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppChatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WhatsAppChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WhatsAppChatGroupByArgs['orderBy'] }
        : { orderBy?: WhatsAppChatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WhatsAppChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhatsAppChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WhatsAppChat model
   */
  readonly fields: WhatsAppChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WhatsAppChat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WhatsAppChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends WhatsAppAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WhatsAppAccountDefaultArgs<ExtArgs>>): Prisma__WhatsAppAccountClient<$Result.GetResult<Prisma.$WhatsAppAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends WhatsAppChat$messagesArgs<ExtArgs> = {}>(args?: Subset<T, WhatsAppChat$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WhatsAppChat model
   */
  interface WhatsAppChatFieldRefs {
    readonly id: FieldRef<"WhatsAppChat", 'String'>
    readonly phoneNumber: FieldRef<"WhatsAppChat", 'String'>
    readonly displayName: FieldRef<"WhatsAppChat", 'String'>
    readonly lastMessageAt: FieldRef<"WhatsAppChat", 'DateTime'>
    readonly unreadCount: FieldRef<"WhatsAppChat", 'Int'>
    readonly accountId: FieldRef<"WhatsAppChat", 'String'>
    readonly assistantEnabled: FieldRef<"WhatsAppChat", 'Boolean'>
    readonly threadId: FieldRef<"WhatsAppChat", 'String'>
    readonly group: FieldRef<"WhatsAppChat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WhatsAppChat findUnique
   */
  export type WhatsAppChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppChat
     */
    select?: WhatsAppChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppChat
     */
    omit?: WhatsAppChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppChatInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppChat to fetch.
     */
    where: WhatsAppChatWhereUniqueInput
  }

  /**
   * WhatsAppChat findUniqueOrThrow
   */
  export type WhatsAppChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppChat
     */
    select?: WhatsAppChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppChat
     */
    omit?: WhatsAppChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppChatInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppChat to fetch.
     */
    where: WhatsAppChatWhereUniqueInput
  }

  /**
   * WhatsAppChat findFirst
   */
  export type WhatsAppChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppChat
     */
    select?: WhatsAppChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppChat
     */
    omit?: WhatsAppChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppChatInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppChat to fetch.
     */
    where?: WhatsAppChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppChats to fetch.
     */
    orderBy?: WhatsAppChatOrderByWithRelationInput | WhatsAppChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsAppChats.
     */
    cursor?: WhatsAppChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsAppChats.
     */
    distinct?: WhatsAppChatScalarFieldEnum | WhatsAppChatScalarFieldEnum[]
  }

  /**
   * WhatsAppChat findFirstOrThrow
   */
  export type WhatsAppChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppChat
     */
    select?: WhatsAppChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppChat
     */
    omit?: WhatsAppChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppChatInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppChat to fetch.
     */
    where?: WhatsAppChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppChats to fetch.
     */
    orderBy?: WhatsAppChatOrderByWithRelationInput | WhatsAppChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsAppChats.
     */
    cursor?: WhatsAppChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsAppChats.
     */
    distinct?: WhatsAppChatScalarFieldEnum | WhatsAppChatScalarFieldEnum[]
  }

  /**
   * WhatsAppChat findMany
   */
  export type WhatsAppChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppChat
     */
    select?: WhatsAppChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppChat
     */
    omit?: WhatsAppChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppChatInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppChats to fetch.
     */
    where?: WhatsAppChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppChats to fetch.
     */
    orderBy?: WhatsAppChatOrderByWithRelationInput | WhatsAppChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WhatsAppChats.
     */
    cursor?: WhatsAppChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppChats.
     */
    skip?: number
    distinct?: WhatsAppChatScalarFieldEnum | WhatsAppChatScalarFieldEnum[]
  }

  /**
   * WhatsAppChat create
   */
  export type WhatsAppChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppChat
     */
    select?: WhatsAppChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppChat
     */
    omit?: WhatsAppChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppChatInclude<ExtArgs> | null
    /**
     * The data needed to create a WhatsAppChat.
     */
    data: XOR<WhatsAppChatCreateInput, WhatsAppChatUncheckedCreateInput>
  }

  /**
   * WhatsAppChat createMany
   */
  export type WhatsAppChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WhatsAppChats.
     */
    data: WhatsAppChatCreateManyInput | WhatsAppChatCreateManyInput[]
  }

  /**
   * WhatsAppChat createManyAndReturn
   */
  export type WhatsAppChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppChat
     */
    select?: WhatsAppChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppChat
     */
    omit?: WhatsAppChatOmit<ExtArgs> | null
    /**
     * The data used to create many WhatsAppChats.
     */
    data: WhatsAppChatCreateManyInput | WhatsAppChatCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WhatsAppChat update
   */
  export type WhatsAppChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppChat
     */
    select?: WhatsAppChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppChat
     */
    omit?: WhatsAppChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppChatInclude<ExtArgs> | null
    /**
     * The data needed to update a WhatsAppChat.
     */
    data: XOR<WhatsAppChatUpdateInput, WhatsAppChatUncheckedUpdateInput>
    /**
     * Choose, which WhatsAppChat to update.
     */
    where: WhatsAppChatWhereUniqueInput
  }

  /**
   * WhatsAppChat updateMany
   */
  export type WhatsAppChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WhatsAppChats.
     */
    data: XOR<WhatsAppChatUpdateManyMutationInput, WhatsAppChatUncheckedUpdateManyInput>
    /**
     * Filter which WhatsAppChats to update
     */
    where?: WhatsAppChatWhereInput
    /**
     * Limit how many WhatsAppChats to update.
     */
    limit?: number
  }

  /**
   * WhatsAppChat updateManyAndReturn
   */
  export type WhatsAppChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppChat
     */
    select?: WhatsAppChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppChat
     */
    omit?: WhatsAppChatOmit<ExtArgs> | null
    /**
     * The data used to update WhatsAppChats.
     */
    data: XOR<WhatsAppChatUpdateManyMutationInput, WhatsAppChatUncheckedUpdateManyInput>
    /**
     * Filter which WhatsAppChats to update
     */
    where?: WhatsAppChatWhereInput
    /**
     * Limit how many WhatsAppChats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WhatsAppChat upsert
   */
  export type WhatsAppChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppChat
     */
    select?: WhatsAppChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppChat
     */
    omit?: WhatsAppChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppChatInclude<ExtArgs> | null
    /**
     * The filter to search for the WhatsAppChat to update in case it exists.
     */
    where: WhatsAppChatWhereUniqueInput
    /**
     * In case the WhatsAppChat found by the `where` argument doesn't exist, create a new WhatsAppChat with this data.
     */
    create: XOR<WhatsAppChatCreateInput, WhatsAppChatUncheckedCreateInput>
    /**
     * In case the WhatsAppChat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WhatsAppChatUpdateInput, WhatsAppChatUncheckedUpdateInput>
  }

  /**
   * WhatsAppChat delete
   */
  export type WhatsAppChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppChat
     */
    select?: WhatsAppChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppChat
     */
    omit?: WhatsAppChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppChatInclude<ExtArgs> | null
    /**
     * Filter which WhatsAppChat to delete.
     */
    where: WhatsAppChatWhereUniqueInput
  }

  /**
   * WhatsAppChat deleteMany
   */
  export type WhatsAppChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsAppChats to delete
     */
    where?: WhatsAppChatWhereInput
    /**
     * Limit how many WhatsAppChats to delete.
     */
    limit?: number
  }

  /**
   * WhatsAppChat.messages
   */
  export type WhatsAppChat$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppMessage
     */
    select?: WhatsAppMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppMessage
     */
    omit?: WhatsAppMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppMessageInclude<ExtArgs> | null
    where?: WhatsAppMessageWhereInput
    orderBy?: WhatsAppMessageOrderByWithRelationInput | WhatsAppMessageOrderByWithRelationInput[]
    cursor?: WhatsAppMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WhatsAppMessageScalarFieldEnum | WhatsAppMessageScalarFieldEnum[]
  }

  /**
   * WhatsAppChat without action
   */
  export type WhatsAppChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppChat
     */
    select?: WhatsAppChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppChat
     */
    omit?: WhatsAppChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppChatInclude<ExtArgs> | null
  }


  /**
   * Model MessageTemplate
   */

  export type AggregateMessageTemplate = {
    _count: MessageTemplateCountAggregateOutputType | null
    _min: MessageTemplateMinAggregateOutputType | null
    _max: MessageTemplateMaxAggregateOutputType | null
  }

  export type MessageTemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    language: string | null
    status: string | null
    whatsappId: string | null
    accountId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    rejectionReason: string | null
  }

  export type MessageTemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    language: string | null
    status: string | null
    whatsappId: string | null
    accountId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    rejectionReason: string | null
  }

  export type MessageTemplateCountAggregateOutputType = {
    id: number
    name: number
    category: number
    language: number
    status: number
    components: number
    whatsappId: number
    accountId: number
    createdAt: number
    updatedAt: number
    rejectionReason: number
    _all: number
  }


  export type MessageTemplateMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    language?: true
    status?: true
    whatsappId?: true
    accountId?: true
    createdAt?: true
    updatedAt?: true
    rejectionReason?: true
  }

  export type MessageTemplateMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    language?: true
    status?: true
    whatsappId?: true
    accountId?: true
    createdAt?: true
    updatedAt?: true
    rejectionReason?: true
  }

  export type MessageTemplateCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    language?: true
    status?: true
    components?: true
    whatsappId?: true
    accountId?: true
    createdAt?: true
    updatedAt?: true
    rejectionReason?: true
    _all?: true
  }

  export type MessageTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageTemplate to aggregate.
     */
    where?: MessageTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageTemplates to fetch.
     */
    orderBy?: MessageTemplateOrderByWithRelationInput | MessageTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageTemplates
    **/
    _count?: true | MessageTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageTemplateMaxAggregateInputType
  }

  export type GetMessageTemplateAggregateType<T extends MessageTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageTemplate[P]>
      : GetScalarType<T[P], AggregateMessageTemplate[P]>
  }




  export type MessageTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageTemplateWhereInput
    orderBy?: MessageTemplateOrderByWithAggregationInput | MessageTemplateOrderByWithAggregationInput[]
    by: MessageTemplateScalarFieldEnum[] | MessageTemplateScalarFieldEnum
    having?: MessageTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageTemplateCountAggregateInputType | true
    _min?: MessageTemplateMinAggregateInputType
    _max?: MessageTemplateMaxAggregateInputType
  }

  export type MessageTemplateGroupByOutputType = {
    id: string
    name: string
    category: string
    language: string
    status: string
    components: JsonValue
    whatsappId: string | null
    accountId: string
    createdAt: Date
    updatedAt: Date
    rejectionReason: string | null
    _count: MessageTemplateCountAggregateOutputType | null
    _min: MessageTemplateMinAggregateOutputType | null
    _max: MessageTemplateMaxAggregateOutputType | null
  }

  type GetMessageTemplateGroupByPayload<T extends MessageTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], MessageTemplateGroupByOutputType[P]>
        }
      >
    >


  export type MessageTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    language?: boolean
    status?: boolean
    components?: boolean
    whatsappId?: boolean
    accountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rejectionReason?: boolean
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
    broadcasts?: boolean | MessageTemplate$broadcastsArgs<ExtArgs>
    _count?: boolean | MessageTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageTemplate"]>

  export type MessageTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    language?: boolean
    status?: boolean
    components?: boolean
    whatsappId?: boolean
    accountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rejectionReason?: boolean
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageTemplate"]>

  export type MessageTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    language?: boolean
    status?: boolean
    components?: boolean
    whatsappId?: boolean
    accountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rejectionReason?: boolean
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageTemplate"]>

  export type MessageTemplateSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    language?: boolean
    status?: boolean
    components?: boolean
    whatsappId?: boolean
    accountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rejectionReason?: boolean
  }

  export type MessageTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "language" | "status" | "components" | "whatsappId" | "accountId" | "createdAt" | "updatedAt" | "rejectionReason", ExtArgs["result"]["messageTemplate"]>
  export type MessageTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
    broadcasts?: boolean | MessageTemplate$broadcastsArgs<ExtArgs>
    _count?: boolean | MessageTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MessageTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
  }
  export type MessageTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
  }

  export type $MessageTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MessageTemplate"
    objects: {
      account: Prisma.$WhatsAppAccountPayload<ExtArgs>
      broadcasts: Prisma.$WhatsAppBroadcastPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: string
      language: string
      status: string
      components: Prisma.JsonValue
      whatsappId: string | null
      accountId: string
      createdAt: Date
      updatedAt: Date
      rejectionReason: string | null
    }, ExtArgs["result"]["messageTemplate"]>
    composites: {}
  }

  type MessageTemplateGetPayload<S extends boolean | null | undefined | MessageTemplateDefaultArgs> = $Result.GetResult<Prisma.$MessageTemplatePayload, S>

  type MessageTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageTemplateCountAggregateInputType | true
    }

  export interface MessageTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageTemplate'], meta: { name: 'MessageTemplate' } }
    /**
     * Find zero or one MessageTemplate that matches the filter.
     * @param {MessageTemplateFindUniqueArgs} args - Arguments to find a MessageTemplate
     * @example
     * // Get one MessageTemplate
     * const messageTemplate = await prisma.messageTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageTemplateFindUniqueArgs>(args: SelectSubset<T, MessageTemplateFindUniqueArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MessageTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageTemplateFindUniqueOrThrowArgs} args - Arguments to find a MessageTemplate
     * @example
     * // Get one MessageTemplate
     * const messageTemplate = await prisma.messageTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTemplateFindFirstArgs} args - Arguments to find a MessageTemplate
     * @example
     * // Get one MessageTemplate
     * const messageTemplate = await prisma.messageTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageTemplateFindFirstArgs>(args?: SelectSubset<T, MessageTemplateFindFirstArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTemplateFindFirstOrThrowArgs} args - Arguments to find a MessageTemplate
     * @example
     * // Get one MessageTemplate
     * const messageTemplate = await prisma.messageTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MessageTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageTemplates
     * const messageTemplates = await prisma.messageTemplate.findMany()
     * 
     * // Get first 10 MessageTemplates
     * const messageTemplates = await prisma.messageTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageTemplateWithIdOnly = await prisma.messageTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageTemplateFindManyArgs>(args?: SelectSubset<T, MessageTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MessageTemplate.
     * @param {MessageTemplateCreateArgs} args - Arguments to create a MessageTemplate.
     * @example
     * // Create one MessageTemplate
     * const MessageTemplate = await prisma.messageTemplate.create({
     *   data: {
     *     // ... data to create a MessageTemplate
     *   }
     * })
     * 
     */
    create<T extends MessageTemplateCreateArgs>(args: SelectSubset<T, MessageTemplateCreateArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MessageTemplates.
     * @param {MessageTemplateCreateManyArgs} args - Arguments to create many MessageTemplates.
     * @example
     * // Create many MessageTemplates
     * const messageTemplate = await prisma.messageTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageTemplateCreateManyArgs>(args?: SelectSubset<T, MessageTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessageTemplates and returns the data saved in the database.
     * @param {MessageTemplateCreateManyAndReturnArgs} args - Arguments to create many MessageTemplates.
     * @example
     * // Create many MessageTemplates
     * const messageTemplate = await prisma.messageTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessageTemplates and only return the `id`
     * const messageTemplateWithIdOnly = await prisma.messageTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MessageTemplate.
     * @param {MessageTemplateDeleteArgs} args - Arguments to delete one MessageTemplate.
     * @example
     * // Delete one MessageTemplate
     * const MessageTemplate = await prisma.messageTemplate.delete({
     *   where: {
     *     // ... filter to delete one MessageTemplate
     *   }
     * })
     * 
     */
    delete<T extends MessageTemplateDeleteArgs>(args: SelectSubset<T, MessageTemplateDeleteArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MessageTemplate.
     * @param {MessageTemplateUpdateArgs} args - Arguments to update one MessageTemplate.
     * @example
     * // Update one MessageTemplate
     * const messageTemplate = await prisma.messageTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageTemplateUpdateArgs>(args: SelectSubset<T, MessageTemplateUpdateArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MessageTemplates.
     * @param {MessageTemplateDeleteManyArgs} args - Arguments to filter MessageTemplates to delete.
     * @example
     * // Delete a few MessageTemplates
     * const { count } = await prisma.messageTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageTemplateDeleteManyArgs>(args?: SelectSubset<T, MessageTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageTemplates
     * const messageTemplate = await prisma.messageTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageTemplateUpdateManyArgs>(args: SelectSubset<T, MessageTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageTemplates and returns the data updated in the database.
     * @param {MessageTemplateUpdateManyAndReturnArgs} args - Arguments to update many MessageTemplates.
     * @example
     * // Update many MessageTemplates
     * const messageTemplate = await prisma.messageTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MessageTemplates and only return the `id`
     * const messageTemplateWithIdOnly = await prisma.messageTemplate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MessageTemplate.
     * @param {MessageTemplateUpsertArgs} args - Arguments to update or create a MessageTemplate.
     * @example
     * // Update or create a MessageTemplate
     * const messageTemplate = await prisma.messageTemplate.upsert({
     *   create: {
     *     // ... data to create a MessageTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageTemplate we want to update
     *   }
     * })
     */
    upsert<T extends MessageTemplateUpsertArgs>(args: SelectSubset<T, MessageTemplateUpsertArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MessageTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTemplateCountArgs} args - Arguments to filter MessageTemplates to count.
     * @example
     * // Count the number of MessageTemplates
     * const count = await prisma.messageTemplate.count({
     *   where: {
     *     // ... the filter for the MessageTemplates we want to count
     *   }
     * })
    **/
    count<T extends MessageTemplateCountArgs>(
      args?: Subset<T, MessageTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageTemplateAggregateArgs>(args: Subset<T, MessageTemplateAggregateArgs>): Prisma.PrismaPromise<GetMessageTemplateAggregateType<T>>

    /**
     * Group by MessageTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageTemplateGroupByArgs['orderBy'] }
        : { orderBy?: MessageTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageTemplate model
   */
  readonly fields: MessageTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends WhatsAppAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WhatsAppAccountDefaultArgs<ExtArgs>>): Prisma__WhatsAppAccountClient<$Result.GetResult<Prisma.$WhatsAppAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    broadcasts<T extends MessageTemplate$broadcastsArgs<ExtArgs> = {}>(args?: Subset<T, MessageTemplate$broadcastsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppBroadcastPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MessageTemplate model
   */
  interface MessageTemplateFieldRefs {
    readonly id: FieldRef<"MessageTemplate", 'String'>
    readonly name: FieldRef<"MessageTemplate", 'String'>
    readonly category: FieldRef<"MessageTemplate", 'String'>
    readonly language: FieldRef<"MessageTemplate", 'String'>
    readonly status: FieldRef<"MessageTemplate", 'String'>
    readonly components: FieldRef<"MessageTemplate", 'Json'>
    readonly whatsappId: FieldRef<"MessageTemplate", 'String'>
    readonly accountId: FieldRef<"MessageTemplate", 'String'>
    readonly createdAt: FieldRef<"MessageTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"MessageTemplate", 'DateTime'>
    readonly rejectionReason: FieldRef<"MessageTemplate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MessageTemplate findUnique
   */
  export type MessageTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * Filter, which MessageTemplate to fetch.
     */
    where: MessageTemplateWhereUniqueInput
  }

  /**
   * MessageTemplate findUniqueOrThrow
   */
  export type MessageTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * Filter, which MessageTemplate to fetch.
     */
    where: MessageTemplateWhereUniqueInput
  }

  /**
   * MessageTemplate findFirst
   */
  export type MessageTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * Filter, which MessageTemplate to fetch.
     */
    where?: MessageTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageTemplates to fetch.
     */
    orderBy?: MessageTemplateOrderByWithRelationInput | MessageTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageTemplates.
     */
    cursor?: MessageTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageTemplates.
     */
    distinct?: MessageTemplateScalarFieldEnum | MessageTemplateScalarFieldEnum[]
  }

  /**
   * MessageTemplate findFirstOrThrow
   */
  export type MessageTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * Filter, which MessageTemplate to fetch.
     */
    where?: MessageTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageTemplates to fetch.
     */
    orderBy?: MessageTemplateOrderByWithRelationInput | MessageTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageTemplates.
     */
    cursor?: MessageTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageTemplates.
     */
    distinct?: MessageTemplateScalarFieldEnum | MessageTemplateScalarFieldEnum[]
  }

  /**
   * MessageTemplate findMany
   */
  export type MessageTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * Filter, which MessageTemplates to fetch.
     */
    where?: MessageTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageTemplates to fetch.
     */
    orderBy?: MessageTemplateOrderByWithRelationInput | MessageTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageTemplates.
     */
    cursor?: MessageTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageTemplates.
     */
    skip?: number
    distinct?: MessageTemplateScalarFieldEnum | MessageTemplateScalarFieldEnum[]
  }

  /**
   * MessageTemplate create
   */
  export type MessageTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageTemplate.
     */
    data: XOR<MessageTemplateCreateInput, MessageTemplateUncheckedCreateInput>
  }

  /**
   * MessageTemplate createMany
   */
  export type MessageTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageTemplates.
     */
    data: MessageTemplateCreateManyInput | MessageTemplateCreateManyInput[]
  }

  /**
   * MessageTemplate createManyAndReturn
   */
  export type MessageTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many MessageTemplates.
     */
    data: MessageTemplateCreateManyInput | MessageTemplateCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageTemplate update
   */
  export type MessageTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageTemplate.
     */
    data: XOR<MessageTemplateUpdateInput, MessageTemplateUncheckedUpdateInput>
    /**
     * Choose, which MessageTemplate to update.
     */
    where: MessageTemplateWhereUniqueInput
  }

  /**
   * MessageTemplate updateMany
   */
  export type MessageTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageTemplates.
     */
    data: XOR<MessageTemplateUpdateManyMutationInput, MessageTemplateUncheckedUpdateManyInput>
    /**
     * Filter which MessageTemplates to update
     */
    where?: MessageTemplateWhereInput
    /**
     * Limit how many MessageTemplates to update.
     */
    limit?: number
  }

  /**
   * MessageTemplate updateManyAndReturn
   */
  export type MessageTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * The data used to update MessageTemplates.
     */
    data: XOR<MessageTemplateUpdateManyMutationInput, MessageTemplateUncheckedUpdateManyInput>
    /**
     * Filter which MessageTemplates to update
     */
    where?: MessageTemplateWhereInput
    /**
     * Limit how many MessageTemplates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageTemplate upsert
   */
  export type MessageTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageTemplate to update in case it exists.
     */
    where: MessageTemplateWhereUniqueInput
    /**
     * In case the MessageTemplate found by the `where` argument doesn't exist, create a new MessageTemplate with this data.
     */
    create: XOR<MessageTemplateCreateInput, MessageTemplateUncheckedCreateInput>
    /**
     * In case the MessageTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageTemplateUpdateInput, MessageTemplateUncheckedUpdateInput>
  }

  /**
   * MessageTemplate delete
   */
  export type MessageTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * Filter which MessageTemplate to delete.
     */
    where: MessageTemplateWhereUniqueInput
  }

  /**
   * MessageTemplate deleteMany
   */
  export type MessageTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageTemplates to delete
     */
    where?: MessageTemplateWhereInput
    /**
     * Limit how many MessageTemplates to delete.
     */
    limit?: number
  }

  /**
   * MessageTemplate.broadcasts
   */
  export type MessageTemplate$broadcastsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppBroadcast
     */
    select?: WhatsAppBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppBroadcast
     */
    omit?: WhatsAppBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppBroadcastInclude<ExtArgs> | null
    where?: WhatsAppBroadcastWhereInput
    orderBy?: WhatsAppBroadcastOrderByWithRelationInput | WhatsAppBroadcastOrderByWithRelationInput[]
    cursor?: WhatsAppBroadcastWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WhatsAppBroadcastScalarFieldEnum | WhatsAppBroadcastScalarFieldEnum[]
  }

  /**
   * MessageTemplate without action
   */
  export type MessageTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
  }


  /**
   * Model WhatsAppBroadcast
   */

  export type AggregateWhatsAppBroadcast = {
    _count: WhatsAppBroadcastCountAggregateOutputType | null
    _avg: WhatsAppBroadcastAvgAggregateOutputType | null
    _sum: WhatsAppBroadcastSumAggregateOutputType | null
    _min: WhatsAppBroadcastMinAggregateOutputType | null
    _max: WhatsAppBroadcastMaxAggregateOutputType | null
  }

  export type WhatsAppBroadcastAvgAggregateOutputType = {
    recipients: number | null
    sent: number | null
    delivered: number | null
    read: number | null
    failed: number | null
  }

  export type WhatsAppBroadcastSumAggregateOutputType = {
    recipients: number | null
    sent: number | null
    delivered: number | null
    read: number | null
    failed: number | null
  }

  export type WhatsAppBroadcastMinAggregateOutputType = {
    id: string | null
    name: string | null
    status: string | null
    scheduledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    recipients: number | null
    sent: number | null
    delivered: number | null
    read: number | null
    failed: number | null
    accountId: string | null
    clientListId: string | null
    templateId: string | null
  }

  export type WhatsAppBroadcastMaxAggregateOutputType = {
    id: string | null
    name: string | null
    status: string | null
    scheduledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    recipients: number | null
    sent: number | null
    delivered: number | null
    read: number | null
    failed: number | null
    accountId: string | null
    clientListId: string | null
    templateId: string | null
  }

  export type WhatsAppBroadcastCountAggregateOutputType = {
    id: number
    name: number
    status: number
    scheduledAt: number
    createdAt: number
    updatedAt: number
    recipients: number
    sent: number
    delivered: number
    read: number
    failed: number
    templateParameters: number
    accountId: number
    clientListId: number
    templateId: number
    _all: number
  }


  export type WhatsAppBroadcastAvgAggregateInputType = {
    recipients?: true
    sent?: true
    delivered?: true
    read?: true
    failed?: true
  }

  export type WhatsAppBroadcastSumAggregateInputType = {
    recipients?: true
    sent?: true
    delivered?: true
    read?: true
    failed?: true
  }

  export type WhatsAppBroadcastMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    scheduledAt?: true
    createdAt?: true
    updatedAt?: true
    recipients?: true
    sent?: true
    delivered?: true
    read?: true
    failed?: true
    accountId?: true
    clientListId?: true
    templateId?: true
  }

  export type WhatsAppBroadcastMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    scheduledAt?: true
    createdAt?: true
    updatedAt?: true
    recipients?: true
    sent?: true
    delivered?: true
    read?: true
    failed?: true
    accountId?: true
    clientListId?: true
    templateId?: true
  }

  export type WhatsAppBroadcastCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    scheduledAt?: true
    createdAt?: true
    updatedAt?: true
    recipients?: true
    sent?: true
    delivered?: true
    read?: true
    failed?: true
    templateParameters?: true
    accountId?: true
    clientListId?: true
    templateId?: true
    _all?: true
  }

  export type WhatsAppBroadcastAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsAppBroadcast to aggregate.
     */
    where?: WhatsAppBroadcastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppBroadcasts to fetch.
     */
    orderBy?: WhatsAppBroadcastOrderByWithRelationInput | WhatsAppBroadcastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WhatsAppBroadcastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppBroadcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppBroadcasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WhatsAppBroadcasts
    **/
    _count?: true | WhatsAppBroadcastCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WhatsAppBroadcastAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WhatsAppBroadcastSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WhatsAppBroadcastMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WhatsAppBroadcastMaxAggregateInputType
  }

  export type GetWhatsAppBroadcastAggregateType<T extends WhatsAppBroadcastAggregateArgs> = {
        [P in keyof T & keyof AggregateWhatsAppBroadcast]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhatsAppBroadcast[P]>
      : GetScalarType<T[P], AggregateWhatsAppBroadcast[P]>
  }




  export type WhatsAppBroadcastGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsAppBroadcastWhereInput
    orderBy?: WhatsAppBroadcastOrderByWithAggregationInput | WhatsAppBroadcastOrderByWithAggregationInput[]
    by: WhatsAppBroadcastScalarFieldEnum[] | WhatsAppBroadcastScalarFieldEnum
    having?: WhatsAppBroadcastScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WhatsAppBroadcastCountAggregateInputType | true
    _avg?: WhatsAppBroadcastAvgAggregateInputType
    _sum?: WhatsAppBroadcastSumAggregateInputType
    _min?: WhatsAppBroadcastMinAggregateInputType
    _max?: WhatsAppBroadcastMaxAggregateInputType
  }

  export type WhatsAppBroadcastGroupByOutputType = {
    id: string
    name: string
    status: string
    scheduledAt: Date | null
    createdAt: Date
    updatedAt: Date
    recipients: number
    sent: number
    delivered: number
    read: number
    failed: number
    templateParameters: JsonValue | null
    accountId: string
    clientListId: string
    templateId: string
    _count: WhatsAppBroadcastCountAggregateOutputType | null
    _avg: WhatsAppBroadcastAvgAggregateOutputType | null
    _sum: WhatsAppBroadcastSumAggregateOutputType | null
    _min: WhatsAppBroadcastMinAggregateOutputType | null
    _max: WhatsAppBroadcastMaxAggregateOutputType | null
  }

  type GetWhatsAppBroadcastGroupByPayload<T extends WhatsAppBroadcastGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WhatsAppBroadcastGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WhatsAppBroadcastGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WhatsAppBroadcastGroupByOutputType[P]>
            : GetScalarType<T[P], WhatsAppBroadcastGroupByOutputType[P]>
        }
      >
    >


  export type WhatsAppBroadcastSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    scheduledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recipients?: boolean
    sent?: boolean
    delivered?: boolean
    read?: boolean
    failed?: boolean
    templateParameters?: boolean
    accountId?: boolean
    clientListId?: boolean
    templateId?: boolean
    attachments?: boolean | WhatsAppBroadcast$attachmentsArgs<ExtArgs>
    template?: boolean | MessageTemplateDefaultArgs<ExtArgs>
    clientList?: boolean | ClientListDefaultArgs<ExtArgs>
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
    _count?: boolean | WhatsAppBroadcastCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsAppBroadcast"]>

  export type WhatsAppBroadcastSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    scheduledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recipients?: boolean
    sent?: boolean
    delivered?: boolean
    read?: boolean
    failed?: boolean
    templateParameters?: boolean
    accountId?: boolean
    clientListId?: boolean
    templateId?: boolean
    template?: boolean | MessageTemplateDefaultArgs<ExtArgs>
    clientList?: boolean | ClientListDefaultArgs<ExtArgs>
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsAppBroadcast"]>

  export type WhatsAppBroadcastSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    scheduledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recipients?: boolean
    sent?: boolean
    delivered?: boolean
    read?: boolean
    failed?: boolean
    templateParameters?: boolean
    accountId?: boolean
    clientListId?: boolean
    templateId?: boolean
    template?: boolean | MessageTemplateDefaultArgs<ExtArgs>
    clientList?: boolean | ClientListDefaultArgs<ExtArgs>
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsAppBroadcast"]>

  export type WhatsAppBroadcastSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    scheduledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recipients?: boolean
    sent?: boolean
    delivered?: boolean
    read?: boolean
    failed?: boolean
    templateParameters?: boolean
    accountId?: boolean
    clientListId?: boolean
    templateId?: boolean
  }

  export type WhatsAppBroadcastOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "status" | "scheduledAt" | "createdAt" | "updatedAt" | "recipients" | "sent" | "delivered" | "read" | "failed" | "templateParameters" | "accountId" | "clientListId" | "templateId", ExtArgs["result"]["whatsAppBroadcast"]>
  export type WhatsAppBroadcastInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachments?: boolean | WhatsAppBroadcast$attachmentsArgs<ExtArgs>
    template?: boolean | MessageTemplateDefaultArgs<ExtArgs>
    clientList?: boolean | ClientListDefaultArgs<ExtArgs>
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
    _count?: boolean | WhatsAppBroadcastCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WhatsAppBroadcastIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | MessageTemplateDefaultArgs<ExtArgs>
    clientList?: boolean | ClientListDefaultArgs<ExtArgs>
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
  }
  export type WhatsAppBroadcastIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | MessageTemplateDefaultArgs<ExtArgs>
    clientList?: boolean | ClientListDefaultArgs<ExtArgs>
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
  }

  export type $WhatsAppBroadcastPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WhatsAppBroadcast"
    objects: {
      attachments: Prisma.$BroadcastAttachmentPayload<ExtArgs>[]
      template: Prisma.$MessageTemplatePayload<ExtArgs>
      clientList: Prisma.$ClientListPayload<ExtArgs>
      account: Prisma.$WhatsAppAccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      status: string
      scheduledAt: Date | null
      createdAt: Date
      updatedAt: Date
      recipients: number
      sent: number
      delivered: number
      read: number
      failed: number
      templateParameters: Prisma.JsonValue | null
      accountId: string
      clientListId: string
      templateId: string
    }, ExtArgs["result"]["whatsAppBroadcast"]>
    composites: {}
  }

  type WhatsAppBroadcastGetPayload<S extends boolean | null | undefined | WhatsAppBroadcastDefaultArgs> = $Result.GetResult<Prisma.$WhatsAppBroadcastPayload, S>

  type WhatsAppBroadcastCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WhatsAppBroadcastFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WhatsAppBroadcastCountAggregateInputType | true
    }

  export interface WhatsAppBroadcastDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WhatsAppBroadcast'], meta: { name: 'WhatsAppBroadcast' } }
    /**
     * Find zero or one WhatsAppBroadcast that matches the filter.
     * @param {WhatsAppBroadcastFindUniqueArgs} args - Arguments to find a WhatsAppBroadcast
     * @example
     * // Get one WhatsAppBroadcast
     * const whatsAppBroadcast = await prisma.whatsAppBroadcast.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WhatsAppBroadcastFindUniqueArgs>(args: SelectSubset<T, WhatsAppBroadcastFindUniqueArgs<ExtArgs>>): Prisma__WhatsAppBroadcastClient<$Result.GetResult<Prisma.$WhatsAppBroadcastPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WhatsAppBroadcast that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WhatsAppBroadcastFindUniqueOrThrowArgs} args - Arguments to find a WhatsAppBroadcast
     * @example
     * // Get one WhatsAppBroadcast
     * const whatsAppBroadcast = await prisma.whatsAppBroadcast.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WhatsAppBroadcastFindUniqueOrThrowArgs>(args: SelectSubset<T, WhatsAppBroadcastFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WhatsAppBroadcastClient<$Result.GetResult<Prisma.$WhatsAppBroadcastPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhatsAppBroadcast that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppBroadcastFindFirstArgs} args - Arguments to find a WhatsAppBroadcast
     * @example
     * // Get one WhatsAppBroadcast
     * const whatsAppBroadcast = await prisma.whatsAppBroadcast.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WhatsAppBroadcastFindFirstArgs>(args?: SelectSubset<T, WhatsAppBroadcastFindFirstArgs<ExtArgs>>): Prisma__WhatsAppBroadcastClient<$Result.GetResult<Prisma.$WhatsAppBroadcastPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhatsAppBroadcast that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppBroadcastFindFirstOrThrowArgs} args - Arguments to find a WhatsAppBroadcast
     * @example
     * // Get one WhatsAppBroadcast
     * const whatsAppBroadcast = await prisma.whatsAppBroadcast.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WhatsAppBroadcastFindFirstOrThrowArgs>(args?: SelectSubset<T, WhatsAppBroadcastFindFirstOrThrowArgs<ExtArgs>>): Prisma__WhatsAppBroadcastClient<$Result.GetResult<Prisma.$WhatsAppBroadcastPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WhatsAppBroadcasts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppBroadcastFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WhatsAppBroadcasts
     * const whatsAppBroadcasts = await prisma.whatsAppBroadcast.findMany()
     * 
     * // Get first 10 WhatsAppBroadcasts
     * const whatsAppBroadcasts = await prisma.whatsAppBroadcast.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const whatsAppBroadcastWithIdOnly = await prisma.whatsAppBroadcast.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WhatsAppBroadcastFindManyArgs>(args?: SelectSubset<T, WhatsAppBroadcastFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppBroadcastPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WhatsAppBroadcast.
     * @param {WhatsAppBroadcastCreateArgs} args - Arguments to create a WhatsAppBroadcast.
     * @example
     * // Create one WhatsAppBroadcast
     * const WhatsAppBroadcast = await prisma.whatsAppBroadcast.create({
     *   data: {
     *     // ... data to create a WhatsAppBroadcast
     *   }
     * })
     * 
     */
    create<T extends WhatsAppBroadcastCreateArgs>(args: SelectSubset<T, WhatsAppBroadcastCreateArgs<ExtArgs>>): Prisma__WhatsAppBroadcastClient<$Result.GetResult<Prisma.$WhatsAppBroadcastPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WhatsAppBroadcasts.
     * @param {WhatsAppBroadcastCreateManyArgs} args - Arguments to create many WhatsAppBroadcasts.
     * @example
     * // Create many WhatsAppBroadcasts
     * const whatsAppBroadcast = await prisma.whatsAppBroadcast.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WhatsAppBroadcastCreateManyArgs>(args?: SelectSubset<T, WhatsAppBroadcastCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WhatsAppBroadcasts and returns the data saved in the database.
     * @param {WhatsAppBroadcastCreateManyAndReturnArgs} args - Arguments to create many WhatsAppBroadcasts.
     * @example
     * // Create many WhatsAppBroadcasts
     * const whatsAppBroadcast = await prisma.whatsAppBroadcast.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WhatsAppBroadcasts and only return the `id`
     * const whatsAppBroadcastWithIdOnly = await prisma.whatsAppBroadcast.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WhatsAppBroadcastCreateManyAndReturnArgs>(args?: SelectSubset<T, WhatsAppBroadcastCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppBroadcastPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WhatsAppBroadcast.
     * @param {WhatsAppBroadcastDeleteArgs} args - Arguments to delete one WhatsAppBroadcast.
     * @example
     * // Delete one WhatsAppBroadcast
     * const WhatsAppBroadcast = await prisma.whatsAppBroadcast.delete({
     *   where: {
     *     // ... filter to delete one WhatsAppBroadcast
     *   }
     * })
     * 
     */
    delete<T extends WhatsAppBroadcastDeleteArgs>(args: SelectSubset<T, WhatsAppBroadcastDeleteArgs<ExtArgs>>): Prisma__WhatsAppBroadcastClient<$Result.GetResult<Prisma.$WhatsAppBroadcastPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WhatsAppBroadcast.
     * @param {WhatsAppBroadcastUpdateArgs} args - Arguments to update one WhatsAppBroadcast.
     * @example
     * // Update one WhatsAppBroadcast
     * const whatsAppBroadcast = await prisma.whatsAppBroadcast.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WhatsAppBroadcastUpdateArgs>(args: SelectSubset<T, WhatsAppBroadcastUpdateArgs<ExtArgs>>): Prisma__WhatsAppBroadcastClient<$Result.GetResult<Prisma.$WhatsAppBroadcastPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WhatsAppBroadcasts.
     * @param {WhatsAppBroadcastDeleteManyArgs} args - Arguments to filter WhatsAppBroadcasts to delete.
     * @example
     * // Delete a few WhatsAppBroadcasts
     * const { count } = await prisma.whatsAppBroadcast.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WhatsAppBroadcastDeleteManyArgs>(args?: SelectSubset<T, WhatsAppBroadcastDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhatsAppBroadcasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppBroadcastUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WhatsAppBroadcasts
     * const whatsAppBroadcast = await prisma.whatsAppBroadcast.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WhatsAppBroadcastUpdateManyArgs>(args: SelectSubset<T, WhatsAppBroadcastUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhatsAppBroadcasts and returns the data updated in the database.
     * @param {WhatsAppBroadcastUpdateManyAndReturnArgs} args - Arguments to update many WhatsAppBroadcasts.
     * @example
     * // Update many WhatsAppBroadcasts
     * const whatsAppBroadcast = await prisma.whatsAppBroadcast.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WhatsAppBroadcasts and only return the `id`
     * const whatsAppBroadcastWithIdOnly = await prisma.whatsAppBroadcast.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WhatsAppBroadcastUpdateManyAndReturnArgs>(args: SelectSubset<T, WhatsAppBroadcastUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppBroadcastPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WhatsAppBroadcast.
     * @param {WhatsAppBroadcastUpsertArgs} args - Arguments to update or create a WhatsAppBroadcast.
     * @example
     * // Update or create a WhatsAppBroadcast
     * const whatsAppBroadcast = await prisma.whatsAppBroadcast.upsert({
     *   create: {
     *     // ... data to create a WhatsAppBroadcast
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WhatsAppBroadcast we want to update
     *   }
     * })
     */
    upsert<T extends WhatsAppBroadcastUpsertArgs>(args: SelectSubset<T, WhatsAppBroadcastUpsertArgs<ExtArgs>>): Prisma__WhatsAppBroadcastClient<$Result.GetResult<Prisma.$WhatsAppBroadcastPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WhatsAppBroadcasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppBroadcastCountArgs} args - Arguments to filter WhatsAppBroadcasts to count.
     * @example
     * // Count the number of WhatsAppBroadcasts
     * const count = await prisma.whatsAppBroadcast.count({
     *   where: {
     *     // ... the filter for the WhatsAppBroadcasts we want to count
     *   }
     * })
    **/
    count<T extends WhatsAppBroadcastCountArgs>(
      args?: Subset<T, WhatsAppBroadcastCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WhatsAppBroadcastCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WhatsAppBroadcast.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppBroadcastAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WhatsAppBroadcastAggregateArgs>(args: Subset<T, WhatsAppBroadcastAggregateArgs>): Prisma.PrismaPromise<GetWhatsAppBroadcastAggregateType<T>>

    /**
     * Group by WhatsAppBroadcast.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppBroadcastGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WhatsAppBroadcastGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WhatsAppBroadcastGroupByArgs['orderBy'] }
        : { orderBy?: WhatsAppBroadcastGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WhatsAppBroadcastGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhatsAppBroadcastGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WhatsAppBroadcast model
   */
  readonly fields: WhatsAppBroadcastFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WhatsAppBroadcast.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WhatsAppBroadcastClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attachments<T extends WhatsAppBroadcast$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, WhatsAppBroadcast$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BroadcastAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    template<T extends MessageTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MessageTemplateDefaultArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    clientList<T extends ClientListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientListDefaultArgs<ExtArgs>>): Prisma__ClientListClient<$Result.GetResult<Prisma.$ClientListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    account<T extends WhatsAppAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WhatsAppAccountDefaultArgs<ExtArgs>>): Prisma__WhatsAppAccountClient<$Result.GetResult<Prisma.$WhatsAppAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WhatsAppBroadcast model
   */
  interface WhatsAppBroadcastFieldRefs {
    readonly id: FieldRef<"WhatsAppBroadcast", 'String'>
    readonly name: FieldRef<"WhatsAppBroadcast", 'String'>
    readonly status: FieldRef<"WhatsAppBroadcast", 'String'>
    readonly scheduledAt: FieldRef<"WhatsAppBroadcast", 'DateTime'>
    readonly createdAt: FieldRef<"WhatsAppBroadcast", 'DateTime'>
    readonly updatedAt: FieldRef<"WhatsAppBroadcast", 'DateTime'>
    readonly recipients: FieldRef<"WhatsAppBroadcast", 'Int'>
    readonly sent: FieldRef<"WhatsAppBroadcast", 'Int'>
    readonly delivered: FieldRef<"WhatsAppBroadcast", 'Int'>
    readonly read: FieldRef<"WhatsAppBroadcast", 'Int'>
    readonly failed: FieldRef<"WhatsAppBroadcast", 'Int'>
    readonly templateParameters: FieldRef<"WhatsAppBroadcast", 'Json'>
    readonly accountId: FieldRef<"WhatsAppBroadcast", 'String'>
    readonly clientListId: FieldRef<"WhatsAppBroadcast", 'String'>
    readonly templateId: FieldRef<"WhatsAppBroadcast", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WhatsAppBroadcast findUnique
   */
  export type WhatsAppBroadcastFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppBroadcast
     */
    select?: WhatsAppBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppBroadcast
     */
    omit?: WhatsAppBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppBroadcastInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppBroadcast to fetch.
     */
    where: WhatsAppBroadcastWhereUniqueInput
  }

  /**
   * WhatsAppBroadcast findUniqueOrThrow
   */
  export type WhatsAppBroadcastFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppBroadcast
     */
    select?: WhatsAppBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppBroadcast
     */
    omit?: WhatsAppBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppBroadcastInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppBroadcast to fetch.
     */
    where: WhatsAppBroadcastWhereUniqueInput
  }

  /**
   * WhatsAppBroadcast findFirst
   */
  export type WhatsAppBroadcastFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppBroadcast
     */
    select?: WhatsAppBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppBroadcast
     */
    omit?: WhatsAppBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppBroadcastInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppBroadcast to fetch.
     */
    where?: WhatsAppBroadcastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppBroadcasts to fetch.
     */
    orderBy?: WhatsAppBroadcastOrderByWithRelationInput | WhatsAppBroadcastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsAppBroadcasts.
     */
    cursor?: WhatsAppBroadcastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppBroadcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppBroadcasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsAppBroadcasts.
     */
    distinct?: WhatsAppBroadcastScalarFieldEnum | WhatsAppBroadcastScalarFieldEnum[]
  }

  /**
   * WhatsAppBroadcast findFirstOrThrow
   */
  export type WhatsAppBroadcastFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppBroadcast
     */
    select?: WhatsAppBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppBroadcast
     */
    omit?: WhatsAppBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppBroadcastInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppBroadcast to fetch.
     */
    where?: WhatsAppBroadcastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppBroadcasts to fetch.
     */
    orderBy?: WhatsAppBroadcastOrderByWithRelationInput | WhatsAppBroadcastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsAppBroadcasts.
     */
    cursor?: WhatsAppBroadcastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppBroadcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppBroadcasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsAppBroadcasts.
     */
    distinct?: WhatsAppBroadcastScalarFieldEnum | WhatsAppBroadcastScalarFieldEnum[]
  }

  /**
   * WhatsAppBroadcast findMany
   */
  export type WhatsAppBroadcastFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppBroadcast
     */
    select?: WhatsAppBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppBroadcast
     */
    omit?: WhatsAppBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppBroadcastInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppBroadcasts to fetch.
     */
    where?: WhatsAppBroadcastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppBroadcasts to fetch.
     */
    orderBy?: WhatsAppBroadcastOrderByWithRelationInput | WhatsAppBroadcastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WhatsAppBroadcasts.
     */
    cursor?: WhatsAppBroadcastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppBroadcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppBroadcasts.
     */
    skip?: number
    distinct?: WhatsAppBroadcastScalarFieldEnum | WhatsAppBroadcastScalarFieldEnum[]
  }

  /**
   * WhatsAppBroadcast create
   */
  export type WhatsAppBroadcastCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppBroadcast
     */
    select?: WhatsAppBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppBroadcast
     */
    omit?: WhatsAppBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppBroadcastInclude<ExtArgs> | null
    /**
     * The data needed to create a WhatsAppBroadcast.
     */
    data: XOR<WhatsAppBroadcastCreateInput, WhatsAppBroadcastUncheckedCreateInput>
  }

  /**
   * WhatsAppBroadcast createMany
   */
  export type WhatsAppBroadcastCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WhatsAppBroadcasts.
     */
    data: WhatsAppBroadcastCreateManyInput | WhatsAppBroadcastCreateManyInput[]
  }

  /**
   * WhatsAppBroadcast createManyAndReturn
   */
  export type WhatsAppBroadcastCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppBroadcast
     */
    select?: WhatsAppBroadcastSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppBroadcast
     */
    omit?: WhatsAppBroadcastOmit<ExtArgs> | null
    /**
     * The data used to create many WhatsAppBroadcasts.
     */
    data: WhatsAppBroadcastCreateManyInput | WhatsAppBroadcastCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppBroadcastIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WhatsAppBroadcast update
   */
  export type WhatsAppBroadcastUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppBroadcast
     */
    select?: WhatsAppBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppBroadcast
     */
    omit?: WhatsAppBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppBroadcastInclude<ExtArgs> | null
    /**
     * The data needed to update a WhatsAppBroadcast.
     */
    data: XOR<WhatsAppBroadcastUpdateInput, WhatsAppBroadcastUncheckedUpdateInput>
    /**
     * Choose, which WhatsAppBroadcast to update.
     */
    where: WhatsAppBroadcastWhereUniqueInput
  }

  /**
   * WhatsAppBroadcast updateMany
   */
  export type WhatsAppBroadcastUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WhatsAppBroadcasts.
     */
    data: XOR<WhatsAppBroadcastUpdateManyMutationInput, WhatsAppBroadcastUncheckedUpdateManyInput>
    /**
     * Filter which WhatsAppBroadcasts to update
     */
    where?: WhatsAppBroadcastWhereInput
    /**
     * Limit how many WhatsAppBroadcasts to update.
     */
    limit?: number
  }

  /**
   * WhatsAppBroadcast updateManyAndReturn
   */
  export type WhatsAppBroadcastUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppBroadcast
     */
    select?: WhatsAppBroadcastSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppBroadcast
     */
    omit?: WhatsAppBroadcastOmit<ExtArgs> | null
    /**
     * The data used to update WhatsAppBroadcasts.
     */
    data: XOR<WhatsAppBroadcastUpdateManyMutationInput, WhatsAppBroadcastUncheckedUpdateManyInput>
    /**
     * Filter which WhatsAppBroadcasts to update
     */
    where?: WhatsAppBroadcastWhereInput
    /**
     * Limit how many WhatsAppBroadcasts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppBroadcastIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WhatsAppBroadcast upsert
   */
  export type WhatsAppBroadcastUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppBroadcast
     */
    select?: WhatsAppBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppBroadcast
     */
    omit?: WhatsAppBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppBroadcastInclude<ExtArgs> | null
    /**
     * The filter to search for the WhatsAppBroadcast to update in case it exists.
     */
    where: WhatsAppBroadcastWhereUniqueInput
    /**
     * In case the WhatsAppBroadcast found by the `where` argument doesn't exist, create a new WhatsAppBroadcast with this data.
     */
    create: XOR<WhatsAppBroadcastCreateInput, WhatsAppBroadcastUncheckedCreateInput>
    /**
     * In case the WhatsAppBroadcast was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WhatsAppBroadcastUpdateInput, WhatsAppBroadcastUncheckedUpdateInput>
  }

  /**
   * WhatsAppBroadcast delete
   */
  export type WhatsAppBroadcastDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppBroadcast
     */
    select?: WhatsAppBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppBroadcast
     */
    omit?: WhatsAppBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppBroadcastInclude<ExtArgs> | null
    /**
     * Filter which WhatsAppBroadcast to delete.
     */
    where: WhatsAppBroadcastWhereUniqueInput
  }

  /**
   * WhatsAppBroadcast deleteMany
   */
  export type WhatsAppBroadcastDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsAppBroadcasts to delete
     */
    where?: WhatsAppBroadcastWhereInput
    /**
     * Limit how many WhatsAppBroadcasts to delete.
     */
    limit?: number
  }

  /**
   * WhatsAppBroadcast.attachments
   */
  export type WhatsAppBroadcast$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastAttachment
     */
    select?: BroadcastAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastAttachment
     */
    omit?: BroadcastAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastAttachmentInclude<ExtArgs> | null
    where?: BroadcastAttachmentWhereInput
    orderBy?: BroadcastAttachmentOrderByWithRelationInput | BroadcastAttachmentOrderByWithRelationInput[]
    cursor?: BroadcastAttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BroadcastAttachmentScalarFieldEnum | BroadcastAttachmentScalarFieldEnum[]
  }

  /**
   * WhatsAppBroadcast without action
   */
  export type WhatsAppBroadcastDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppBroadcast
     */
    select?: WhatsAppBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppBroadcast
     */
    omit?: WhatsAppBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppBroadcastInclude<ExtArgs> | null
  }


  /**
   * Model BroadcastAttachment
   */

  export type AggregateBroadcastAttachment = {
    _count: BroadcastAttachmentCountAggregateOutputType | null
    _avg: BroadcastAttachmentAvgAggregateOutputType | null
    _sum: BroadcastAttachmentSumAggregateOutputType | null
    _min: BroadcastAttachmentMinAggregateOutputType | null
    _max: BroadcastAttachmentMaxAggregateOutputType | null
  }

  export type BroadcastAttachmentAvgAggregateOutputType = {
    size: number | null
  }

  export type BroadcastAttachmentSumAggregateOutputType = {
    size: number | null
  }

  export type BroadcastAttachmentMinAggregateOutputType = {
    id: string | null
    filename: string | null
    type: string | null
    url: string | null
    size: number | null
    createdAt: Date | null
    broadcastId: string | null
  }

  export type BroadcastAttachmentMaxAggregateOutputType = {
    id: string | null
    filename: string | null
    type: string | null
    url: string | null
    size: number | null
    createdAt: Date | null
    broadcastId: string | null
  }

  export type BroadcastAttachmentCountAggregateOutputType = {
    id: number
    filename: number
    type: number
    url: number
    size: number
    createdAt: number
    broadcastId: number
    _all: number
  }


  export type BroadcastAttachmentAvgAggregateInputType = {
    size?: true
  }

  export type BroadcastAttachmentSumAggregateInputType = {
    size?: true
  }

  export type BroadcastAttachmentMinAggregateInputType = {
    id?: true
    filename?: true
    type?: true
    url?: true
    size?: true
    createdAt?: true
    broadcastId?: true
  }

  export type BroadcastAttachmentMaxAggregateInputType = {
    id?: true
    filename?: true
    type?: true
    url?: true
    size?: true
    createdAt?: true
    broadcastId?: true
  }

  export type BroadcastAttachmentCountAggregateInputType = {
    id?: true
    filename?: true
    type?: true
    url?: true
    size?: true
    createdAt?: true
    broadcastId?: true
    _all?: true
  }

  export type BroadcastAttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BroadcastAttachment to aggregate.
     */
    where?: BroadcastAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BroadcastAttachments to fetch.
     */
    orderBy?: BroadcastAttachmentOrderByWithRelationInput | BroadcastAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BroadcastAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BroadcastAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BroadcastAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BroadcastAttachments
    **/
    _count?: true | BroadcastAttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BroadcastAttachmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BroadcastAttachmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BroadcastAttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BroadcastAttachmentMaxAggregateInputType
  }

  export type GetBroadcastAttachmentAggregateType<T extends BroadcastAttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateBroadcastAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBroadcastAttachment[P]>
      : GetScalarType<T[P], AggregateBroadcastAttachment[P]>
  }




  export type BroadcastAttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BroadcastAttachmentWhereInput
    orderBy?: BroadcastAttachmentOrderByWithAggregationInput | BroadcastAttachmentOrderByWithAggregationInput[]
    by: BroadcastAttachmentScalarFieldEnum[] | BroadcastAttachmentScalarFieldEnum
    having?: BroadcastAttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BroadcastAttachmentCountAggregateInputType | true
    _avg?: BroadcastAttachmentAvgAggregateInputType
    _sum?: BroadcastAttachmentSumAggregateInputType
    _min?: BroadcastAttachmentMinAggregateInputType
    _max?: BroadcastAttachmentMaxAggregateInputType
  }

  export type BroadcastAttachmentGroupByOutputType = {
    id: string
    filename: string
    type: string
    url: string
    size: number
    createdAt: Date
    broadcastId: string
    _count: BroadcastAttachmentCountAggregateOutputType | null
    _avg: BroadcastAttachmentAvgAggregateOutputType | null
    _sum: BroadcastAttachmentSumAggregateOutputType | null
    _min: BroadcastAttachmentMinAggregateOutputType | null
    _max: BroadcastAttachmentMaxAggregateOutputType | null
  }

  type GetBroadcastAttachmentGroupByPayload<T extends BroadcastAttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BroadcastAttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BroadcastAttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BroadcastAttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], BroadcastAttachmentGroupByOutputType[P]>
        }
      >
    >


  export type BroadcastAttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    type?: boolean
    url?: boolean
    size?: boolean
    createdAt?: boolean
    broadcastId?: boolean
    broadcast?: boolean | WhatsAppBroadcastDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["broadcastAttachment"]>

  export type BroadcastAttachmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    type?: boolean
    url?: boolean
    size?: boolean
    createdAt?: boolean
    broadcastId?: boolean
    broadcast?: boolean | WhatsAppBroadcastDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["broadcastAttachment"]>

  export type BroadcastAttachmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    type?: boolean
    url?: boolean
    size?: boolean
    createdAt?: boolean
    broadcastId?: boolean
    broadcast?: boolean | WhatsAppBroadcastDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["broadcastAttachment"]>

  export type BroadcastAttachmentSelectScalar = {
    id?: boolean
    filename?: boolean
    type?: boolean
    url?: boolean
    size?: boolean
    createdAt?: boolean
    broadcastId?: boolean
  }

  export type BroadcastAttachmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "filename" | "type" | "url" | "size" | "createdAt" | "broadcastId", ExtArgs["result"]["broadcastAttachment"]>
  export type BroadcastAttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    broadcast?: boolean | WhatsAppBroadcastDefaultArgs<ExtArgs>
  }
  export type BroadcastAttachmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    broadcast?: boolean | WhatsAppBroadcastDefaultArgs<ExtArgs>
  }
  export type BroadcastAttachmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    broadcast?: boolean | WhatsAppBroadcastDefaultArgs<ExtArgs>
  }

  export type $BroadcastAttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BroadcastAttachment"
    objects: {
      broadcast: Prisma.$WhatsAppBroadcastPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      filename: string
      type: string
      url: string
      size: number
      createdAt: Date
      broadcastId: string
    }, ExtArgs["result"]["broadcastAttachment"]>
    composites: {}
  }

  type BroadcastAttachmentGetPayload<S extends boolean | null | undefined | BroadcastAttachmentDefaultArgs> = $Result.GetResult<Prisma.$BroadcastAttachmentPayload, S>

  type BroadcastAttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BroadcastAttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BroadcastAttachmentCountAggregateInputType | true
    }

  export interface BroadcastAttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BroadcastAttachment'], meta: { name: 'BroadcastAttachment' } }
    /**
     * Find zero or one BroadcastAttachment that matches the filter.
     * @param {BroadcastAttachmentFindUniqueArgs} args - Arguments to find a BroadcastAttachment
     * @example
     * // Get one BroadcastAttachment
     * const broadcastAttachment = await prisma.broadcastAttachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BroadcastAttachmentFindUniqueArgs>(args: SelectSubset<T, BroadcastAttachmentFindUniqueArgs<ExtArgs>>): Prisma__BroadcastAttachmentClient<$Result.GetResult<Prisma.$BroadcastAttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BroadcastAttachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BroadcastAttachmentFindUniqueOrThrowArgs} args - Arguments to find a BroadcastAttachment
     * @example
     * // Get one BroadcastAttachment
     * const broadcastAttachment = await prisma.broadcastAttachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BroadcastAttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, BroadcastAttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BroadcastAttachmentClient<$Result.GetResult<Prisma.$BroadcastAttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BroadcastAttachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastAttachmentFindFirstArgs} args - Arguments to find a BroadcastAttachment
     * @example
     * // Get one BroadcastAttachment
     * const broadcastAttachment = await prisma.broadcastAttachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BroadcastAttachmentFindFirstArgs>(args?: SelectSubset<T, BroadcastAttachmentFindFirstArgs<ExtArgs>>): Prisma__BroadcastAttachmentClient<$Result.GetResult<Prisma.$BroadcastAttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BroadcastAttachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastAttachmentFindFirstOrThrowArgs} args - Arguments to find a BroadcastAttachment
     * @example
     * // Get one BroadcastAttachment
     * const broadcastAttachment = await prisma.broadcastAttachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BroadcastAttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, BroadcastAttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__BroadcastAttachmentClient<$Result.GetResult<Prisma.$BroadcastAttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BroadcastAttachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastAttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BroadcastAttachments
     * const broadcastAttachments = await prisma.broadcastAttachment.findMany()
     * 
     * // Get first 10 BroadcastAttachments
     * const broadcastAttachments = await prisma.broadcastAttachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const broadcastAttachmentWithIdOnly = await prisma.broadcastAttachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BroadcastAttachmentFindManyArgs>(args?: SelectSubset<T, BroadcastAttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BroadcastAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BroadcastAttachment.
     * @param {BroadcastAttachmentCreateArgs} args - Arguments to create a BroadcastAttachment.
     * @example
     * // Create one BroadcastAttachment
     * const BroadcastAttachment = await prisma.broadcastAttachment.create({
     *   data: {
     *     // ... data to create a BroadcastAttachment
     *   }
     * })
     * 
     */
    create<T extends BroadcastAttachmentCreateArgs>(args: SelectSubset<T, BroadcastAttachmentCreateArgs<ExtArgs>>): Prisma__BroadcastAttachmentClient<$Result.GetResult<Prisma.$BroadcastAttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BroadcastAttachments.
     * @param {BroadcastAttachmentCreateManyArgs} args - Arguments to create many BroadcastAttachments.
     * @example
     * // Create many BroadcastAttachments
     * const broadcastAttachment = await prisma.broadcastAttachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BroadcastAttachmentCreateManyArgs>(args?: SelectSubset<T, BroadcastAttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BroadcastAttachments and returns the data saved in the database.
     * @param {BroadcastAttachmentCreateManyAndReturnArgs} args - Arguments to create many BroadcastAttachments.
     * @example
     * // Create many BroadcastAttachments
     * const broadcastAttachment = await prisma.broadcastAttachment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BroadcastAttachments and only return the `id`
     * const broadcastAttachmentWithIdOnly = await prisma.broadcastAttachment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BroadcastAttachmentCreateManyAndReturnArgs>(args?: SelectSubset<T, BroadcastAttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BroadcastAttachmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BroadcastAttachment.
     * @param {BroadcastAttachmentDeleteArgs} args - Arguments to delete one BroadcastAttachment.
     * @example
     * // Delete one BroadcastAttachment
     * const BroadcastAttachment = await prisma.broadcastAttachment.delete({
     *   where: {
     *     // ... filter to delete one BroadcastAttachment
     *   }
     * })
     * 
     */
    delete<T extends BroadcastAttachmentDeleteArgs>(args: SelectSubset<T, BroadcastAttachmentDeleteArgs<ExtArgs>>): Prisma__BroadcastAttachmentClient<$Result.GetResult<Prisma.$BroadcastAttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BroadcastAttachment.
     * @param {BroadcastAttachmentUpdateArgs} args - Arguments to update one BroadcastAttachment.
     * @example
     * // Update one BroadcastAttachment
     * const broadcastAttachment = await prisma.broadcastAttachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BroadcastAttachmentUpdateArgs>(args: SelectSubset<T, BroadcastAttachmentUpdateArgs<ExtArgs>>): Prisma__BroadcastAttachmentClient<$Result.GetResult<Prisma.$BroadcastAttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BroadcastAttachments.
     * @param {BroadcastAttachmentDeleteManyArgs} args - Arguments to filter BroadcastAttachments to delete.
     * @example
     * // Delete a few BroadcastAttachments
     * const { count } = await prisma.broadcastAttachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BroadcastAttachmentDeleteManyArgs>(args?: SelectSubset<T, BroadcastAttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BroadcastAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastAttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BroadcastAttachments
     * const broadcastAttachment = await prisma.broadcastAttachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BroadcastAttachmentUpdateManyArgs>(args: SelectSubset<T, BroadcastAttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BroadcastAttachments and returns the data updated in the database.
     * @param {BroadcastAttachmentUpdateManyAndReturnArgs} args - Arguments to update many BroadcastAttachments.
     * @example
     * // Update many BroadcastAttachments
     * const broadcastAttachment = await prisma.broadcastAttachment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BroadcastAttachments and only return the `id`
     * const broadcastAttachmentWithIdOnly = await prisma.broadcastAttachment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BroadcastAttachmentUpdateManyAndReturnArgs>(args: SelectSubset<T, BroadcastAttachmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BroadcastAttachmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BroadcastAttachment.
     * @param {BroadcastAttachmentUpsertArgs} args - Arguments to update or create a BroadcastAttachment.
     * @example
     * // Update or create a BroadcastAttachment
     * const broadcastAttachment = await prisma.broadcastAttachment.upsert({
     *   create: {
     *     // ... data to create a BroadcastAttachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BroadcastAttachment we want to update
     *   }
     * })
     */
    upsert<T extends BroadcastAttachmentUpsertArgs>(args: SelectSubset<T, BroadcastAttachmentUpsertArgs<ExtArgs>>): Prisma__BroadcastAttachmentClient<$Result.GetResult<Prisma.$BroadcastAttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BroadcastAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastAttachmentCountArgs} args - Arguments to filter BroadcastAttachments to count.
     * @example
     * // Count the number of BroadcastAttachments
     * const count = await prisma.broadcastAttachment.count({
     *   where: {
     *     // ... the filter for the BroadcastAttachments we want to count
     *   }
     * })
    **/
    count<T extends BroadcastAttachmentCountArgs>(
      args?: Subset<T, BroadcastAttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BroadcastAttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BroadcastAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastAttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BroadcastAttachmentAggregateArgs>(args: Subset<T, BroadcastAttachmentAggregateArgs>): Prisma.PrismaPromise<GetBroadcastAttachmentAggregateType<T>>

    /**
     * Group by BroadcastAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastAttachmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BroadcastAttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BroadcastAttachmentGroupByArgs['orderBy'] }
        : { orderBy?: BroadcastAttachmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BroadcastAttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBroadcastAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BroadcastAttachment model
   */
  readonly fields: BroadcastAttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BroadcastAttachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BroadcastAttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    broadcast<T extends WhatsAppBroadcastDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WhatsAppBroadcastDefaultArgs<ExtArgs>>): Prisma__WhatsAppBroadcastClient<$Result.GetResult<Prisma.$WhatsAppBroadcastPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BroadcastAttachment model
   */
  interface BroadcastAttachmentFieldRefs {
    readonly id: FieldRef<"BroadcastAttachment", 'String'>
    readonly filename: FieldRef<"BroadcastAttachment", 'String'>
    readonly type: FieldRef<"BroadcastAttachment", 'String'>
    readonly url: FieldRef<"BroadcastAttachment", 'String'>
    readonly size: FieldRef<"BroadcastAttachment", 'Int'>
    readonly createdAt: FieldRef<"BroadcastAttachment", 'DateTime'>
    readonly broadcastId: FieldRef<"BroadcastAttachment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BroadcastAttachment findUnique
   */
  export type BroadcastAttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastAttachment
     */
    select?: BroadcastAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastAttachment
     */
    omit?: BroadcastAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which BroadcastAttachment to fetch.
     */
    where: BroadcastAttachmentWhereUniqueInput
  }

  /**
   * BroadcastAttachment findUniqueOrThrow
   */
  export type BroadcastAttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastAttachment
     */
    select?: BroadcastAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastAttachment
     */
    omit?: BroadcastAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which BroadcastAttachment to fetch.
     */
    where: BroadcastAttachmentWhereUniqueInput
  }

  /**
   * BroadcastAttachment findFirst
   */
  export type BroadcastAttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastAttachment
     */
    select?: BroadcastAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastAttachment
     */
    omit?: BroadcastAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which BroadcastAttachment to fetch.
     */
    where?: BroadcastAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BroadcastAttachments to fetch.
     */
    orderBy?: BroadcastAttachmentOrderByWithRelationInput | BroadcastAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BroadcastAttachments.
     */
    cursor?: BroadcastAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BroadcastAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BroadcastAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BroadcastAttachments.
     */
    distinct?: BroadcastAttachmentScalarFieldEnum | BroadcastAttachmentScalarFieldEnum[]
  }

  /**
   * BroadcastAttachment findFirstOrThrow
   */
  export type BroadcastAttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastAttachment
     */
    select?: BroadcastAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastAttachment
     */
    omit?: BroadcastAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which BroadcastAttachment to fetch.
     */
    where?: BroadcastAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BroadcastAttachments to fetch.
     */
    orderBy?: BroadcastAttachmentOrderByWithRelationInput | BroadcastAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BroadcastAttachments.
     */
    cursor?: BroadcastAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BroadcastAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BroadcastAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BroadcastAttachments.
     */
    distinct?: BroadcastAttachmentScalarFieldEnum | BroadcastAttachmentScalarFieldEnum[]
  }

  /**
   * BroadcastAttachment findMany
   */
  export type BroadcastAttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastAttachment
     */
    select?: BroadcastAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastAttachment
     */
    omit?: BroadcastAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which BroadcastAttachments to fetch.
     */
    where?: BroadcastAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BroadcastAttachments to fetch.
     */
    orderBy?: BroadcastAttachmentOrderByWithRelationInput | BroadcastAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BroadcastAttachments.
     */
    cursor?: BroadcastAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BroadcastAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BroadcastAttachments.
     */
    skip?: number
    distinct?: BroadcastAttachmentScalarFieldEnum | BroadcastAttachmentScalarFieldEnum[]
  }

  /**
   * BroadcastAttachment create
   */
  export type BroadcastAttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastAttachment
     */
    select?: BroadcastAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastAttachment
     */
    omit?: BroadcastAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a BroadcastAttachment.
     */
    data: XOR<BroadcastAttachmentCreateInput, BroadcastAttachmentUncheckedCreateInput>
  }

  /**
   * BroadcastAttachment createMany
   */
  export type BroadcastAttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BroadcastAttachments.
     */
    data: BroadcastAttachmentCreateManyInput | BroadcastAttachmentCreateManyInput[]
  }

  /**
   * BroadcastAttachment createManyAndReturn
   */
  export type BroadcastAttachmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastAttachment
     */
    select?: BroadcastAttachmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastAttachment
     */
    omit?: BroadcastAttachmentOmit<ExtArgs> | null
    /**
     * The data used to create many BroadcastAttachments.
     */
    data: BroadcastAttachmentCreateManyInput | BroadcastAttachmentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastAttachmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BroadcastAttachment update
   */
  export type BroadcastAttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastAttachment
     */
    select?: BroadcastAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastAttachment
     */
    omit?: BroadcastAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a BroadcastAttachment.
     */
    data: XOR<BroadcastAttachmentUpdateInput, BroadcastAttachmentUncheckedUpdateInput>
    /**
     * Choose, which BroadcastAttachment to update.
     */
    where: BroadcastAttachmentWhereUniqueInput
  }

  /**
   * BroadcastAttachment updateMany
   */
  export type BroadcastAttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BroadcastAttachments.
     */
    data: XOR<BroadcastAttachmentUpdateManyMutationInput, BroadcastAttachmentUncheckedUpdateManyInput>
    /**
     * Filter which BroadcastAttachments to update
     */
    where?: BroadcastAttachmentWhereInput
    /**
     * Limit how many BroadcastAttachments to update.
     */
    limit?: number
  }

  /**
   * BroadcastAttachment updateManyAndReturn
   */
  export type BroadcastAttachmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastAttachment
     */
    select?: BroadcastAttachmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastAttachment
     */
    omit?: BroadcastAttachmentOmit<ExtArgs> | null
    /**
     * The data used to update BroadcastAttachments.
     */
    data: XOR<BroadcastAttachmentUpdateManyMutationInput, BroadcastAttachmentUncheckedUpdateManyInput>
    /**
     * Filter which BroadcastAttachments to update
     */
    where?: BroadcastAttachmentWhereInput
    /**
     * Limit how many BroadcastAttachments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastAttachmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BroadcastAttachment upsert
   */
  export type BroadcastAttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastAttachment
     */
    select?: BroadcastAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastAttachment
     */
    omit?: BroadcastAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastAttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the BroadcastAttachment to update in case it exists.
     */
    where: BroadcastAttachmentWhereUniqueInput
    /**
     * In case the BroadcastAttachment found by the `where` argument doesn't exist, create a new BroadcastAttachment with this data.
     */
    create: XOR<BroadcastAttachmentCreateInput, BroadcastAttachmentUncheckedCreateInput>
    /**
     * In case the BroadcastAttachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BroadcastAttachmentUpdateInput, BroadcastAttachmentUncheckedUpdateInput>
  }

  /**
   * BroadcastAttachment delete
   */
  export type BroadcastAttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastAttachment
     */
    select?: BroadcastAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastAttachment
     */
    omit?: BroadcastAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastAttachmentInclude<ExtArgs> | null
    /**
     * Filter which BroadcastAttachment to delete.
     */
    where: BroadcastAttachmentWhereUniqueInput
  }

  /**
   * BroadcastAttachment deleteMany
   */
  export type BroadcastAttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BroadcastAttachments to delete
     */
    where?: BroadcastAttachmentWhereInput
    /**
     * Limit how many BroadcastAttachments to delete.
     */
    limit?: number
  }

  /**
   * BroadcastAttachment without action
   */
  export type BroadcastAttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastAttachment
     */
    select?: BroadcastAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastAttachment
     */
    omit?: BroadcastAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastAttachmentInclude<ExtArgs> | null
  }


  /**
   * Model ClientList
   */

  export type AggregateClientList = {
    _count: ClientListCountAggregateOutputType | null
    _min: ClientListMinAggregateOutputType | null
    _max: ClientListMaxAggregateOutputType | null
  }

  export type ClientListMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientListMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientListCountAggregateOutputType = {
    id: number
    name: number
    description: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientListMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientListMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientListCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientList to aggregate.
     */
    where?: ClientListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientLists to fetch.
     */
    orderBy?: ClientListOrderByWithRelationInput | ClientListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientLists
    **/
    _count?: true | ClientListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientListMaxAggregateInputType
  }

  export type GetClientListAggregateType<T extends ClientListAggregateArgs> = {
        [P in keyof T & keyof AggregateClientList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientList[P]>
      : GetScalarType<T[P], AggregateClientList[P]>
  }




  export type ClientListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientListWhereInput
    orderBy?: ClientListOrderByWithAggregationInput | ClientListOrderByWithAggregationInput[]
    by: ClientListScalarFieldEnum[] | ClientListScalarFieldEnum
    having?: ClientListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientListCountAggregateInputType | true
    _min?: ClientListMinAggregateInputType
    _max?: ClientListMaxAggregateInputType
  }

  export type ClientListGroupByOutputType = {
    id: string
    name: string
    description: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: ClientListCountAggregateOutputType | null
    _min: ClientListMinAggregateOutputType | null
    _max: ClientListMaxAggregateOutputType | null
  }

  type GetClientListGroupByPayload<T extends ClientListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientListGroupByOutputType[P]>
            : GetScalarType<T[P], ClientListGroupByOutputType[P]>
        }
      >
    >


  export type ClientListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    phoneNumbers?: boolean | ClientList$phoneNumbersArgs<ExtArgs>
    broadcasts?: boolean | ClientList$broadcastsArgs<ExtArgs>
    clients?: boolean | ClientList$clientsArgs<ExtArgs>
    _count?: boolean | ClientListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientList"]>

  export type ClientListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientList"]>

  export type ClientListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientList"]>

  export type ClientListSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["clientList"]>
  export type ClientListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    phoneNumbers?: boolean | ClientList$phoneNumbersArgs<ExtArgs>
    broadcasts?: boolean | ClientList$broadcastsArgs<ExtArgs>
    clients?: boolean | ClientList$clientsArgs<ExtArgs>
    _count?: boolean | ClientListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClientListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ClientListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientList"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      phoneNumbers: Prisma.$PhoneNumberPayload<ExtArgs>[]
      broadcasts: Prisma.$WhatsAppBroadcastPayload<ExtArgs>[]
      clients: Prisma.$ClientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["clientList"]>
    composites: {}
  }

  type ClientListGetPayload<S extends boolean | null | undefined | ClientListDefaultArgs> = $Result.GetResult<Prisma.$ClientListPayload, S>

  type ClientListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientListCountAggregateInputType | true
    }

  export interface ClientListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientList'], meta: { name: 'ClientList' } }
    /**
     * Find zero or one ClientList that matches the filter.
     * @param {ClientListFindUniqueArgs} args - Arguments to find a ClientList
     * @example
     * // Get one ClientList
     * const clientList = await prisma.clientList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientListFindUniqueArgs>(args: SelectSubset<T, ClientListFindUniqueArgs<ExtArgs>>): Prisma__ClientListClient<$Result.GetResult<Prisma.$ClientListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClientList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientListFindUniqueOrThrowArgs} args - Arguments to find a ClientList
     * @example
     * // Get one ClientList
     * const clientList = await prisma.clientList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientListFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientListClient<$Result.GetResult<Prisma.$ClientListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientListFindFirstArgs} args - Arguments to find a ClientList
     * @example
     * // Get one ClientList
     * const clientList = await prisma.clientList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientListFindFirstArgs>(args?: SelectSubset<T, ClientListFindFirstArgs<ExtArgs>>): Prisma__ClientListClient<$Result.GetResult<Prisma.$ClientListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientListFindFirstOrThrowArgs} args - Arguments to find a ClientList
     * @example
     * // Get one ClientList
     * const clientList = await prisma.clientList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientListFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientListFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientListClient<$Result.GetResult<Prisma.$ClientListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClientLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientLists
     * const clientLists = await prisma.clientList.findMany()
     * 
     * // Get first 10 ClientLists
     * const clientLists = await prisma.clientList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientListWithIdOnly = await prisma.clientList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientListFindManyArgs>(args?: SelectSubset<T, ClientListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClientList.
     * @param {ClientListCreateArgs} args - Arguments to create a ClientList.
     * @example
     * // Create one ClientList
     * const ClientList = await prisma.clientList.create({
     *   data: {
     *     // ... data to create a ClientList
     *   }
     * })
     * 
     */
    create<T extends ClientListCreateArgs>(args: SelectSubset<T, ClientListCreateArgs<ExtArgs>>): Prisma__ClientListClient<$Result.GetResult<Prisma.$ClientListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClientLists.
     * @param {ClientListCreateManyArgs} args - Arguments to create many ClientLists.
     * @example
     * // Create many ClientLists
     * const clientList = await prisma.clientList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientListCreateManyArgs>(args?: SelectSubset<T, ClientListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClientLists and returns the data saved in the database.
     * @param {ClientListCreateManyAndReturnArgs} args - Arguments to create many ClientLists.
     * @example
     * // Create many ClientLists
     * const clientList = await prisma.clientList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClientLists and only return the `id`
     * const clientListWithIdOnly = await prisma.clientList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientListCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClientList.
     * @param {ClientListDeleteArgs} args - Arguments to delete one ClientList.
     * @example
     * // Delete one ClientList
     * const ClientList = await prisma.clientList.delete({
     *   where: {
     *     // ... filter to delete one ClientList
     *   }
     * })
     * 
     */
    delete<T extends ClientListDeleteArgs>(args: SelectSubset<T, ClientListDeleteArgs<ExtArgs>>): Prisma__ClientListClient<$Result.GetResult<Prisma.$ClientListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClientList.
     * @param {ClientListUpdateArgs} args - Arguments to update one ClientList.
     * @example
     * // Update one ClientList
     * const clientList = await prisma.clientList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientListUpdateArgs>(args: SelectSubset<T, ClientListUpdateArgs<ExtArgs>>): Prisma__ClientListClient<$Result.GetResult<Prisma.$ClientListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClientLists.
     * @param {ClientListDeleteManyArgs} args - Arguments to filter ClientLists to delete.
     * @example
     * // Delete a few ClientLists
     * const { count } = await prisma.clientList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientListDeleteManyArgs>(args?: SelectSubset<T, ClientListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientLists
     * const clientList = await prisma.clientList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientListUpdateManyArgs>(args: SelectSubset<T, ClientListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientLists and returns the data updated in the database.
     * @param {ClientListUpdateManyAndReturnArgs} args - Arguments to update many ClientLists.
     * @example
     * // Update many ClientLists
     * const clientList = await prisma.clientList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClientLists and only return the `id`
     * const clientListWithIdOnly = await prisma.clientList.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientListUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClientList.
     * @param {ClientListUpsertArgs} args - Arguments to update or create a ClientList.
     * @example
     * // Update or create a ClientList
     * const clientList = await prisma.clientList.upsert({
     *   create: {
     *     // ... data to create a ClientList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientList we want to update
     *   }
     * })
     */
    upsert<T extends ClientListUpsertArgs>(args: SelectSubset<T, ClientListUpsertArgs<ExtArgs>>): Prisma__ClientListClient<$Result.GetResult<Prisma.$ClientListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClientLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientListCountArgs} args - Arguments to filter ClientLists to count.
     * @example
     * // Count the number of ClientLists
     * const count = await prisma.clientList.count({
     *   where: {
     *     // ... the filter for the ClientLists we want to count
     *   }
     * })
    **/
    count<T extends ClientListCountArgs>(
      args?: Subset<T, ClientListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientListAggregateArgs>(args: Subset<T, ClientListAggregateArgs>): Prisma.PrismaPromise<GetClientListAggregateType<T>>

    /**
     * Group by ClientList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientListGroupByArgs['orderBy'] }
        : { orderBy?: ClientListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientList model
   */
  readonly fields: ClientListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    phoneNumbers<T extends ClientList$phoneNumbersArgs<ExtArgs> = {}>(args?: Subset<T, ClientList$phoneNumbersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneNumberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    broadcasts<T extends ClientList$broadcastsArgs<ExtArgs> = {}>(args?: Subset<T, ClientList$broadcastsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppBroadcastPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clients<T extends ClientList$clientsArgs<ExtArgs> = {}>(args?: Subset<T, ClientList$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClientList model
   */
  interface ClientListFieldRefs {
    readonly id: FieldRef<"ClientList", 'String'>
    readonly name: FieldRef<"ClientList", 'String'>
    readonly description: FieldRef<"ClientList", 'String'>
    readonly userId: FieldRef<"ClientList", 'String'>
    readonly createdAt: FieldRef<"ClientList", 'DateTime'>
    readonly updatedAt: FieldRef<"ClientList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClientList findUnique
   */
  export type ClientListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientList
     */
    select?: ClientListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientList
     */
    omit?: ClientListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientListInclude<ExtArgs> | null
    /**
     * Filter, which ClientList to fetch.
     */
    where: ClientListWhereUniqueInput
  }

  /**
   * ClientList findUniqueOrThrow
   */
  export type ClientListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientList
     */
    select?: ClientListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientList
     */
    omit?: ClientListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientListInclude<ExtArgs> | null
    /**
     * Filter, which ClientList to fetch.
     */
    where: ClientListWhereUniqueInput
  }

  /**
   * ClientList findFirst
   */
  export type ClientListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientList
     */
    select?: ClientListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientList
     */
    omit?: ClientListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientListInclude<ExtArgs> | null
    /**
     * Filter, which ClientList to fetch.
     */
    where?: ClientListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientLists to fetch.
     */
    orderBy?: ClientListOrderByWithRelationInput | ClientListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientLists.
     */
    cursor?: ClientListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientLists.
     */
    distinct?: ClientListScalarFieldEnum | ClientListScalarFieldEnum[]
  }

  /**
   * ClientList findFirstOrThrow
   */
  export type ClientListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientList
     */
    select?: ClientListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientList
     */
    omit?: ClientListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientListInclude<ExtArgs> | null
    /**
     * Filter, which ClientList to fetch.
     */
    where?: ClientListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientLists to fetch.
     */
    orderBy?: ClientListOrderByWithRelationInput | ClientListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientLists.
     */
    cursor?: ClientListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientLists.
     */
    distinct?: ClientListScalarFieldEnum | ClientListScalarFieldEnum[]
  }

  /**
   * ClientList findMany
   */
  export type ClientListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientList
     */
    select?: ClientListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientList
     */
    omit?: ClientListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientListInclude<ExtArgs> | null
    /**
     * Filter, which ClientLists to fetch.
     */
    where?: ClientListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientLists to fetch.
     */
    orderBy?: ClientListOrderByWithRelationInput | ClientListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientLists.
     */
    cursor?: ClientListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientLists.
     */
    skip?: number
    distinct?: ClientListScalarFieldEnum | ClientListScalarFieldEnum[]
  }

  /**
   * ClientList create
   */
  export type ClientListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientList
     */
    select?: ClientListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientList
     */
    omit?: ClientListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientListInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientList.
     */
    data: XOR<ClientListCreateInput, ClientListUncheckedCreateInput>
  }

  /**
   * ClientList createMany
   */
  export type ClientListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientLists.
     */
    data: ClientListCreateManyInput | ClientListCreateManyInput[]
  }

  /**
   * ClientList createManyAndReturn
   */
  export type ClientListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientList
     */
    select?: ClientListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientList
     */
    omit?: ClientListOmit<ExtArgs> | null
    /**
     * The data used to create many ClientLists.
     */
    data: ClientListCreateManyInput | ClientListCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientList update
   */
  export type ClientListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientList
     */
    select?: ClientListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientList
     */
    omit?: ClientListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientListInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientList.
     */
    data: XOR<ClientListUpdateInput, ClientListUncheckedUpdateInput>
    /**
     * Choose, which ClientList to update.
     */
    where: ClientListWhereUniqueInput
  }

  /**
   * ClientList updateMany
   */
  export type ClientListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientLists.
     */
    data: XOR<ClientListUpdateManyMutationInput, ClientListUncheckedUpdateManyInput>
    /**
     * Filter which ClientLists to update
     */
    where?: ClientListWhereInput
    /**
     * Limit how many ClientLists to update.
     */
    limit?: number
  }

  /**
   * ClientList updateManyAndReturn
   */
  export type ClientListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientList
     */
    select?: ClientListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientList
     */
    omit?: ClientListOmit<ExtArgs> | null
    /**
     * The data used to update ClientLists.
     */
    data: XOR<ClientListUpdateManyMutationInput, ClientListUncheckedUpdateManyInput>
    /**
     * Filter which ClientLists to update
     */
    where?: ClientListWhereInput
    /**
     * Limit how many ClientLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientList upsert
   */
  export type ClientListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientList
     */
    select?: ClientListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientList
     */
    omit?: ClientListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientListInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientList to update in case it exists.
     */
    where: ClientListWhereUniqueInput
    /**
     * In case the ClientList found by the `where` argument doesn't exist, create a new ClientList with this data.
     */
    create: XOR<ClientListCreateInput, ClientListUncheckedCreateInput>
    /**
     * In case the ClientList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientListUpdateInput, ClientListUncheckedUpdateInput>
  }

  /**
   * ClientList delete
   */
  export type ClientListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientList
     */
    select?: ClientListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientList
     */
    omit?: ClientListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientListInclude<ExtArgs> | null
    /**
     * Filter which ClientList to delete.
     */
    where: ClientListWhereUniqueInput
  }

  /**
   * ClientList deleteMany
   */
  export type ClientListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientLists to delete
     */
    where?: ClientListWhereInput
    /**
     * Limit how many ClientLists to delete.
     */
    limit?: number
  }

  /**
   * ClientList.phoneNumbers
   */
  export type ClientList$phoneNumbersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumber
     */
    select?: PhoneNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumber
     */
    omit?: PhoneNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumberInclude<ExtArgs> | null
    where?: PhoneNumberWhereInput
    orderBy?: PhoneNumberOrderByWithRelationInput | PhoneNumberOrderByWithRelationInput[]
    cursor?: PhoneNumberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhoneNumberScalarFieldEnum | PhoneNumberScalarFieldEnum[]
  }

  /**
   * ClientList.broadcasts
   */
  export type ClientList$broadcastsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppBroadcast
     */
    select?: WhatsAppBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppBroadcast
     */
    omit?: WhatsAppBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppBroadcastInclude<ExtArgs> | null
    where?: WhatsAppBroadcastWhereInput
    orderBy?: WhatsAppBroadcastOrderByWithRelationInput | WhatsAppBroadcastOrderByWithRelationInput[]
    cursor?: WhatsAppBroadcastWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WhatsAppBroadcastScalarFieldEnum | WhatsAppBroadcastScalarFieldEnum[]
  }

  /**
   * ClientList.clients
   */
  export type ClientList$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    cursor?: ClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * ClientList without action
   */
  export type ClientListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientList
     */
    select?: ClientListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientList
     */
    omit?: ClientListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientListInclude<ExtArgs> | null
  }


  /**
   * Model PhoneNumber
   */

  export type AggregatePhoneNumber = {
    _count: PhoneNumberCountAggregateOutputType | null
    _min: PhoneNumberMinAggregateOutputType | null
    _max: PhoneNumberMaxAggregateOutputType | null
  }

  export type PhoneNumberMinAggregateOutputType = {
    id: string | null
    phone: string | null
    clientListId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhoneNumberMaxAggregateOutputType = {
    id: string | null
    phone: string | null
    clientListId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhoneNumberCountAggregateOutputType = {
    id: number
    phone: number
    clientListId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PhoneNumberMinAggregateInputType = {
    id?: true
    phone?: true
    clientListId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhoneNumberMaxAggregateInputType = {
    id?: true
    phone?: true
    clientListId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhoneNumberCountAggregateInputType = {
    id?: true
    phone?: true
    clientListId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PhoneNumberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhoneNumber to aggregate.
     */
    where?: PhoneNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneNumbers to fetch.
     */
    orderBy?: PhoneNumberOrderByWithRelationInput | PhoneNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhoneNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneNumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhoneNumbers
    **/
    _count?: true | PhoneNumberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhoneNumberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhoneNumberMaxAggregateInputType
  }

  export type GetPhoneNumberAggregateType<T extends PhoneNumberAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoneNumber]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoneNumber[P]>
      : GetScalarType<T[P], AggregatePhoneNumber[P]>
  }




  export type PhoneNumberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhoneNumberWhereInput
    orderBy?: PhoneNumberOrderByWithAggregationInput | PhoneNumberOrderByWithAggregationInput[]
    by: PhoneNumberScalarFieldEnum[] | PhoneNumberScalarFieldEnum
    having?: PhoneNumberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhoneNumberCountAggregateInputType | true
    _min?: PhoneNumberMinAggregateInputType
    _max?: PhoneNumberMaxAggregateInputType
  }

  export type PhoneNumberGroupByOutputType = {
    id: string
    phone: string
    clientListId: string
    createdAt: Date
    updatedAt: Date
    _count: PhoneNumberCountAggregateOutputType | null
    _min: PhoneNumberMinAggregateOutputType | null
    _max: PhoneNumberMaxAggregateOutputType | null
  }

  type GetPhoneNumberGroupByPayload<T extends PhoneNumberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhoneNumberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhoneNumberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhoneNumberGroupByOutputType[P]>
            : GetScalarType<T[P], PhoneNumberGroupByOutputType[P]>
        }
      >
    >


  export type PhoneNumberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    clientListId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientList?: boolean | ClientListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phoneNumber"]>

  export type PhoneNumberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    clientListId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientList?: boolean | ClientListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phoneNumber"]>

  export type PhoneNumberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    clientListId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientList?: boolean | ClientListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phoneNumber"]>

  export type PhoneNumberSelectScalar = {
    id?: boolean
    phone?: boolean
    clientListId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PhoneNumberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone" | "clientListId" | "createdAt" | "updatedAt", ExtArgs["result"]["phoneNumber"]>
  export type PhoneNumberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientList?: boolean | ClientListDefaultArgs<ExtArgs>
  }
  export type PhoneNumberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientList?: boolean | ClientListDefaultArgs<ExtArgs>
  }
  export type PhoneNumberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientList?: boolean | ClientListDefaultArgs<ExtArgs>
  }

  export type $PhoneNumberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhoneNumber"
    objects: {
      clientList: Prisma.$ClientListPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phone: string
      clientListId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["phoneNumber"]>
    composites: {}
  }

  type PhoneNumberGetPayload<S extends boolean | null | undefined | PhoneNumberDefaultArgs> = $Result.GetResult<Prisma.$PhoneNumberPayload, S>

  type PhoneNumberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhoneNumberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhoneNumberCountAggregateInputType | true
    }

  export interface PhoneNumberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhoneNumber'], meta: { name: 'PhoneNumber' } }
    /**
     * Find zero or one PhoneNumber that matches the filter.
     * @param {PhoneNumberFindUniqueArgs} args - Arguments to find a PhoneNumber
     * @example
     * // Get one PhoneNumber
     * const phoneNumber = await prisma.phoneNumber.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhoneNumberFindUniqueArgs>(args: SelectSubset<T, PhoneNumberFindUniqueArgs<ExtArgs>>): Prisma__PhoneNumberClient<$Result.GetResult<Prisma.$PhoneNumberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PhoneNumber that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhoneNumberFindUniqueOrThrowArgs} args - Arguments to find a PhoneNumber
     * @example
     * // Get one PhoneNumber
     * const phoneNumber = await prisma.phoneNumber.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhoneNumberFindUniqueOrThrowArgs>(args: SelectSubset<T, PhoneNumberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhoneNumberClient<$Result.GetResult<Prisma.$PhoneNumberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhoneNumber that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneNumberFindFirstArgs} args - Arguments to find a PhoneNumber
     * @example
     * // Get one PhoneNumber
     * const phoneNumber = await prisma.phoneNumber.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhoneNumberFindFirstArgs>(args?: SelectSubset<T, PhoneNumberFindFirstArgs<ExtArgs>>): Prisma__PhoneNumberClient<$Result.GetResult<Prisma.$PhoneNumberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhoneNumber that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneNumberFindFirstOrThrowArgs} args - Arguments to find a PhoneNumber
     * @example
     * // Get one PhoneNumber
     * const phoneNumber = await prisma.phoneNumber.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhoneNumberFindFirstOrThrowArgs>(args?: SelectSubset<T, PhoneNumberFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhoneNumberClient<$Result.GetResult<Prisma.$PhoneNumberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PhoneNumbers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneNumberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhoneNumbers
     * const phoneNumbers = await prisma.phoneNumber.findMany()
     * 
     * // Get first 10 PhoneNumbers
     * const phoneNumbers = await prisma.phoneNumber.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const phoneNumberWithIdOnly = await prisma.phoneNumber.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhoneNumberFindManyArgs>(args?: SelectSubset<T, PhoneNumberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneNumberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PhoneNumber.
     * @param {PhoneNumberCreateArgs} args - Arguments to create a PhoneNumber.
     * @example
     * // Create one PhoneNumber
     * const PhoneNumber = await prisma.phoneNumber.create({
     *   data: {
     *     // ... data to create a PhoneNumber
     *   }
     * })
     * 
     */
    create<T extends PhoneNumberCreateArgs>(args: SelectSubset<T, PhoneNumberCreateArgs<ExtArgs>>): Prisma__PhoneNumberClient<$Result.GetResult<Prisma.$PhoneNumberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PhoneNumbers.
     * @param {PhoneNumberCreateManyArgs} args - Arguments to create many PhoneNumbers.
     * @example
     * // Create many PhoneNumbers
     * const phoneNumber = await prisma.phoneNumber.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhoneNumberCreateManyArgs>(args?: SelectSubset<T, PhoneNumberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PhoneNumbers and returns the data saved in the database.
     * @param {PhoneNumberCreateManyAndReturnArgs} args - Arguments to create many PhoneNumbers.
     * @example
     * // Create many PhoneNumbers
     * const phoneNumber = await prisma.phoneNumber.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PhoneNumbers and only return the `id`
     * const phoneNumberWithIdOnly = await prisma.phoneNumber.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhoneNumberCreateManyAndReturnArgs>(args?: SelectSubset<T, PhoneNumberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneNumberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PhoneNumber.
     * @param {PhoneNumberDeleteArgs} args - Arguments to delete one PhoneNumber.
     * @example
     * // Delete one PhoneNumber
     * const PhoneNumber = await prisma.phoneNumber.delete({
     *   where: {
     *     // ... filter to delete one PhoneNumber
     *   }
     * })
     * 
     */
    delete<T extends PhoneNumberDeleteArgs>(args: SelectSubset<T, PhoneNumberDeleteArgs<ExtArgs>>): Prisma__PhoneNumberClient<$Result.GetResult<Prisma.$PhoneNumberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PhoneNumber.
     * @param {PhoneNumberUpdateArgs} args - Arguments to update one PhoneNumber.
     * @example
     * // Update one PhoneNumber
     * const phoneNumber = await prisma.phoneNumber.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhoneNumberUpdateArgs>(args: SelectSubset<T, PhoneNumberUpdateArgs<ExtArgs>>): Prisma__PhoneNumberClient<$Result.GetResult<Prisma.$PhoneNumberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PhoneNumbers.
     * @param {PhoneNumberDeleteManyArgs} args - Arguments to filter PhoneNumbers to delete.
     * @example
     * // Delete a few PhoneNumbers
     * const { count } = await prisma.phoneNumber.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhoneNumberDeleteManyArgs>(args?: SelectSubset<T, PhoneNumberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhoneNumbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneNumberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhoneNumbers
     * const phoneNumber = await prisma.phoneNumber.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhoneNumberUpdateManyArgs>(args: SelectSubset<T, PhoneNumberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhoneNumbers and returns the data updated in the database.
     * @param {PhoneNumberUpdateManyAndReturnArgs} args - Arguments to update many PhoneNumbers.
     * @example
     * // Update many PhoneNumbers
     * const phoneNumber = await prisma.phoneNumber.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PhoneNumbers and only return the `id`
     * const phoneNumberWithIdOnly = await prisma.phoneNumber.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PhoneNumberUpdateManyAndReturnArgs>(args: SelectSubset<T, PhoneNumberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneNumberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PhoneNumber.
     * @param {PhoneNumberUpsertArgs} args - Arguments to update or create a PhoneNumber.
     * @example
     * // Update or create a PhoneNumber
     * const phoneNumber = await prisma.phoneNumber.upsert({
     *   create: {
     *     // ... data to create a PhoneNumber
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhoneNumber we want to update
     *   }
     * })
     */
    upsert<T extends PhoneNumberUpsertArgs>(args: SelectSubset<T, PhoneNumberUpsertArgs<ExtArgs>>): Prisma__PhoneNumberClient<$Result.GetResult<Prisma.$PhoneNumberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PhoneNumbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneNumberCountArgs} args - Arguments to filter PhoneNumbers to count.
     * @example
     * // Count the number of PhoneNumbers
     * const count = await prisma.phoneNumber.count({
     *   where: {
     *     // ... the filter for the PhoneNumbers we want to count
     *   }
     * })
    **/
    count<T extends PhoneNumberCountArgs>(
      args?: Subset<T, PhoneNumberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhoneNumberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhoneNumber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneNumberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhoneNumberAggregateArgs>(args: Subset<T, PhoneNumberAggregateArgs>): Prisma.PrismaPromise<GetPhoneNumberAggregateType<T>>

    /**
     * Group by PhoneNumber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneNumberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhoneNumberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhoneNumberGroupByArgs['orderBy'] }
        : { orderBy?: PhoneNumberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhoneNumberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhoneNumberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhoneNumber model
   */
  readonly fields: PhoneNumberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhoneNumber.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhoneNumberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clientList<T extends ClientListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientListDefaultArgs<ExtArgs>>): Prisma__ClientListClient<$Result.GetResult<Prisma.$ClientListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PhoneNumber model
   */
  interface PhoneNumberFieldRefs {
    readonly id: FieldRef<"PhoneNumber", 'String'>
    readonly phone: FieldRef<"PhoneNumber", 'String'>
    readonly clientListId: FieldRef<"PhoneNumber", 'String'>
    readonly createdAt: FieldRef<"PhoneNumber", 'DateTime'>
    readonly updatedAt: FieldRef<"PhoneNumber", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PhoneNumber findUnique
   */
  export type PhoneNumberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumber
     */
    select?: PhoneNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumber
     */
    omit?: PhoneNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumberInclude<ExtArgs> | null
    /**
     * Filter, which PhoneNumber to fetch.
     */
    where: PhoneNumberWhereUniqueInput
  }

  /**
   * PhoneNumber findUniqueOrThrow
   */
  export type PhoneNumberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumber
     */
    select?: PhoneNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumber
     */
    omit?: PhoneNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumberInclude<ExtArgs> | null
    /**
     * Filter, which PhoneNumber to fetch.
     */
    where: PhoneNumberWhereUniqueInput
  }

  /**
   * PhoneNumber findFirst
   */
  export type PhoneNumberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumber
     */
    select?: PhoneNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumber
     */
    omit?: PhoneNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumberInclude<ExtArgs> | null
    /**
     * Filter, which PhoneNumber to fetch.
     */
    where?: PhoneNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneNumbers to fetch.
     */
    orderBy?: PhoneNumberOrderByWithRelationInput | PhoneNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhoneNumbers.
     */
    cursor?: PhoneNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneNumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhoneNumbers.
     */
    distinct?: PhoneNumberScalarFieldEnum | PhoneNumberScalarFieldEnum[]
  }

  /**
   * PhoneNumber findFirstOrThrow
   */
  export type PhoneNumberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumber
     */
    select?: PhoneNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumber
     */
    omit?: PhoneNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumberInclude<ExtArgs> | null
    /**
     * Filter, which PhoneNumber to fetch.
     */
    where?: PhoneNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneNumbers to fetch.
     */
    orderBy?: PhoneNumberOrderByWithRelationInput | PhoneNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhoneNumbers.
     */
    cursor?: PhoneNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneNumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhoneNumbers.
     */
    distinct?: PhoneNumberScalarFieldEnum | PhoneNumberScalarFieldEnum[]
  }

  /**
   * PhoneNumber findMany
   */
  export type PhoneNumberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumber
     */
    select?: PhoneNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumber
     */
    omit?: PhoneNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumberInclude<ExtArgs> | null
    /**
     * Filter, which PhoneNumbers to fetch.
     */
    where?: PhoneNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneNumbers to fetch.
     */
    orderBy?: PhoneNumberOrderByWithRelationInput | PhoneNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhoneNumbers.
     */
    cursor?: PhoneNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneNumbers.
     */
    skip?: number
    distinct?: PhoneNumberScalarFieldEnum | PhoneNumberScalarFieldEnum[]
  }

  /**
   * PhoneNumber create
   */
  export type PhoneNumberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumber
     */
    select?: PhoneNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumber
     */
    omit?: PhoneNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumberInclude<ExtArgs> | null
    /**
     * The data needed to create a PhoneNumber.
     */
    data: XOR<PhoneNumberCreateInput, PhoneNumberUncheckedCreateInput>
  }

  /**
   * PhoneNumber createMany
   */
  export type PhoneNumberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhoneNumbers.
     */
    data: PhoneNumberCreateManyInput | PhoneNumberCreateManyInput[]
  }

  /**
   * PhoneNumber createManyAndReturn
   */
  export type PhoneNumberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumber
     */
    select?: PhoneNumberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumber
     */
    omit?: PhoneNumberOmit<ExtArgs> | null
    /**
     * The data used to create many PhoneNumbers.
     */
    data: PhoneNumberCreateManyInput | PhoneNumberCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhoneNumber update
   */
  export type PhoneNumberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumber
     */
    select?: PhoneNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumber
     */
    omit?: PhoneNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumberInclude<ExtArgs> | null
    /**
     * The data needed to update a PhoneNumber.
     */
    data: XOR<PhoneNumberUpdateInput, PhoneNumberUncheckedUpdateInput>
    /**
     * Choose, which PhoneNumber to update.
     */
    where: PhoneNumberWhereUniqueInput
  }

  /**
   * PhoneNumber updateMany
   */
  export type PhoneNumberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhoneNumbers.
     */
    data: XOR<PhoneNumberUpdateManyMutationInput, PhoneNumberUncheckedUpdateManyInput>
    /**
     * Filter which PhoneNumbers to update
     */
    where?: PhoneNumberWhereInput
    /**
     * Limit how many PhoneNumbers to update.
     */
    limit?: number
  }

  /**
   * PhoneNumber updateManyAndReturn
   */
  export type PhoneNumberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumber
     */
    select?: PhoneNumberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumber
     */
    omit?: PhoneNumberOmit<ExtArgs> | null
    /**
     * The data used to update PhoneNumbers.
     */
    data: XOR<PhoneNumberUpdateManyMutationInput, PhoneNumberUncheckedUpdateManyInput>
    /**
     * Filter which PhoneNumbers to update
     */
    where?: PhoneNumberWhereInput
    /**
     * Limit how many PhoneNumbers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhoneNumber upsert
   */
  export type PhoneNumberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumber
     */
    select?: PhoneNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumber
     */
    omit?: PhoneNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumberInclude<ExtArgs> | null
    /**
     * The filter to search for the PhoneNumber to update in case it exists.
     */
    where: PhoneNumberWhereUniqueInput
    /**
     * In case the PhoneNumber found by the `where` argument doesn't exist, create a new PhoneNumber with this data.
     */
    create: XOR<PhoneNumberCreateInput, PhoneNumberUncheckedCreateInput>
    /**
     * In case the PhoneNumber was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhoneNumberUpdateInput, PhoneNumberUncheckedUpdateInput>
  }

  /**
   * PhoneNumber delete
   */
  export type PhoneNumberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumber
     */
    select?: PhoneNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumber
     */
    omit?: PhoneNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumberInclude<ExtArgs> | null
    /**
     * Filter which PhoneNumber to delete.
     */
    where: PhoneNumberWhereUniqueInput
  }

  /**
   * PhoneNumber deleteMany
   */
  export type PhoneNumberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhoneNumbers to delete
     */
    where?: PhoneNumberWhereInput
    /**
     * Limit how many PhoneNumbers to delete.
     */
    limit?: number
  }

  /**
   * PhoneNumber without action
   */
  export type PhoneNumberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumber
     */
    select?: PhoneNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumber
     */
    omit?: PhoneNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumberInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    name: string | null
    phoneNumber: string | null
    tags: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phoneNumber: string | null
    tags: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    phoneNumber: number
    tags: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    name: string | null
    phoneNumber: string
    tags: string
    createdAt: Date
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lists?: boolean | Client$listsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phoneNumber" | "tags" | "createdAt" | "updatedAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lists?: boolean | Client$listsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      lists: Prisma.$ClientListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      phoneNumber: string
      tags: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lists<T extends Client$listsArgs<ExtArgs> = {}>(args?: Subset<T, Client$listsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly name: FieldRef<"Client", 'String'>
    readonly phoneNumber: FieldRef<"Client", 'String'>
    readonly tags: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.lists
   */
  export type Client$listsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientList
     */
    select?: ClientListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientList
     */
    omit?: ClientListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientListInclude<ExtArgs> | null
    where?: ClientListWhereInput
    orderBy?: ClientListOrderByWithRelationInput | ClientListOrderByWithRelationInput[]
    cursor?: ClientListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientListScalarFieldEnum | ClientListScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model AssistantSettings
   */

  export type AggregateAssistantSettings = {
    _count: AssistantSettingsCountAggregateOutputType | null
    _min: AssistantSettingsMinAggregateOutputType | null
    _max: AssistantSettingsMaxAggregateOutputType | null
  }

  export type AssistantSettingsMinAggregateOutputType = {
    id: string | null
    name: string | null
    model: string | null
    openAiKey: string | null
    assistantId: string | null
    isConfigured: boolean | null
    status: string | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
    accountId: string | null
  }

  export type AssistantSettingsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    model: string | null
    openAiKey: string | null
    assistantId: string | null
    isConfigured: boolean | null
    status: string | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
    accountId: string | null
  }

  export type AssistantSettingsCountAggregateOutputType = {
    id: number
    name: number
    model: number
    openAiKey: number
    assistantId: number
    isConfigured: number
    status: number
    errorMessage: number
    createdAt: number
    updatedAt: number
    accountId: number
    _all: number
  }


  export type AssistantSettingsMinAggregateInputType = {
    id?: true
    name?: true
    model?: true
    openAiKey?: true
    assistantId?: true
    isConfigured?: true
    status?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
    accountId?: true
  }

  export type AssistantSettingsMaxAggregateInputType = {
    id?: true
    name?: true
    model?: true
    openAiKey?: true
    assistantId?: true
    isConfigured?: true
    status?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
    accountId?: true
  }

  export type AssistantSettingsCountAggregateInputType = {
    id?: true
    name?: true
    model?: true
    openAiKey?: true
    assistantId?: true
    isConfigured?: true
    status?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
    accountId?: true
    _all?: true
  }

  export type AssistantSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssistantSettings to aggregate.
     */
    where?: AssistantSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssistantSettings to fetch.
     */
    orderBy?: AssistantSettingsOrderByWithRelationInput | AssistantSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssistantSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssistantSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssistantSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssistantSettings
    **/
    _count?: true | AssistantSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssistantSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssistantSettingsMaxAggregateInputType
  }

  export type GetAssistantSettingsAggregateType<T extends AssistantSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateAssistantSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssistantSettings[P]>
      : GetScalarType<T[P], AggregateAssistantSettings[P]>
  }




  export type AssistantSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssistantSettingsWhereInput
    orderBy?: AssistantSettingsOrderByWithAggregationInput | AssistantSettingsOrderByWithAggregationInput[]
    by: AssistantSettingsScalarFieldEnum[] | AssistantSettingsScalarFieldEnum
    having?: AssistantSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssistantSettingsCountAggregateInputType | true
    _min?: AssistantSettingsMinAggregateInputType
    _max?: AssistantSettingsMaxAggregateInputType
  }

  export type AssistantSettingsGroupByOutputType = {
    id: string
    name: string
    model: string
    openAiKey: string
    assistantId: string | null
    isConfigured: boolean
    status: string
    errorMessage: string | null
    createdAt: Date
    updatedAt: Date
    accountId: string
    _count: AssistantSettingsCountAggregateOutputType | null
    _min: AssistantSettingsMinAggregateOutputType | null
    _max: AssistantSettingsMaxAggregateOutputType | null
  }

  type GetAssistantSettingsGroupByPayload<T extends AssistantSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssistantSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssistantSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssistantSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], AssistantSettingsGroupByOutputType[P]>
        }
      >
    >


  export type AssistantSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    model?: boolean
    openAiKey?: boolean
    assistantId?: boolean
    isConfigured?: boolean
    status?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assistantSettings"]>

  export type AssistantSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    model?: boolean
    openAiKey?: boolean
    assistantId?: boolean
    isConfigured?: boolean
    status?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assistantSettings"]>

  export type AssistantSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    model?: boolean
    openAiKey?: boolean
    assistantId?: boolean
    isConfigured?: boolean
    status?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assistantSettings"]>

  export type AssistantSettingsSelectScalar = {
    id?: boolean
    name?: boolean
    model?: boolean
    openAiKey?: boolean
    assistantId?: boolean
    isConfigured?: boolean
    status?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
  }

  export type AssistantSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "model" | "openAiKey" | "assistantId" | "isConfigured" | "status" | "errorMessage" | "createdAt" | "updatedAt" | "accountId", ExtArgs["result"]["assistantSettings"]>
  export type AssistantSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
  }
  export type AssistantSettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
  }
  export type AssistantSettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | WhatsAppAccountDefaultArgs<ExtArgs>
  }

  export type $AssistantSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssistantSettings"
    objects: {
      account: Prisma.$WhatsAppAccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      model: string
      openAiKey: string
      assistantId: string | null
      isConfigured: boolean
      status: string
      errorMessage: string | null
      createdAt: Date
      updatedAt: Date
      accountId: string
    }, ExtArgs["result"]["assistantSettings"]>
    composites: {}
  }

  type AssistantSettingsGetPayload<S extends boolean | null | undefined | AssistantSettingsDefaultArgs> = $Result.GetResult<Prisma.$AssistantSettingsPayload, S>

  type AssistantSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssistantSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssistantSettingsCountAggregateInputType | true
    }

  export interface AssistantSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssistantSettings'], meta: { name: 'AssistantSettings' } }
    /**
     * Find zero or one AssistantSettings that matches the filter.
     * @param {AssistantSettingsFindUniqueArgs} args - Arguments to find a AssistantSettings
     * @example
     * // Get one AssistantSettings
     * const assistantSettings = await prisma.assistantSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssistantSettingsFindUniqueArgs>(args: SelectSubset<T, AssistantSettingsFindUniqueArgs<ExtArgs>>): Prisma__AssistantSettingsClient<$Result.GetResult<Prisma.$AssistantSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssistantSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssistantSettingsFindUniqueOrThrowArgs} args - Arguments to find a AssistantSettings
     * @example
     * // Get one AssistantSettings
     * const assistantSettings = await prisma.assistantSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssistantSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, AssistantSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssistantSettingsClient<$Result.GetResult<Prisma.$AssistantSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssistantSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssistantSettingsFindFirstArgs} args - Arguments to find a AssistantSettings
     * @example
     * // Get one AssistantSettings
     * const assistantSettings = await prisma.assistantSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssistantSettingsFindFirstArgs>(args?: SelectSubset<T, AssistantSettingsFindFirstArgs<ExtArgs>>): Prisma__AssistantSettingsClient<$Result.GetResult<Prisma.$AssistantSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssistantSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssistantSettingsFindFirstOrThrowArgs} args - Arguments to find a AssistantSettings
     * @example
     * // Get one AssistantSettings
     * const assistantSettings = await prisma.assistantSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssistantSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, AssistantSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssistantSettingsClient<$Result.GetResult<Prisma.$AssistantSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssistantSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssistantSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssistantSettings
     * const assistantSettings = await prisma.assistantSettings.findMany()
     * 
     * // Get first 10 AssistantSettings
     * const assistantSettings = await prisma.assistantSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assistantSettingsWithIdOnly = await prisma.assistantSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssistantSettingsFindManyArgs>(args?: SelectSubset<T, AssistantSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssistantSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssistantSettings.
     * @param {AssistantSettingsCreateArgs} args - Arguments to create a AssistantSettings.
     * @example
     * // Create one AssistantSettings
     * const AssistantSettings = await prisma.assistantSettings.create({
     *   data: {
     *     // ... data to create a AssistantSettings
     *   }
     * })
     * 
     */
    create<T extends AssistantSettingsCreateArgs>(args: SelectSubset<T, AssistantSettingsCreateArgs<ExtArgs>>): Prisma__AssistantSettingsClient<$Result.GetResult<Prisma.$AssistantSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssistantSettings.
     * @param {AssistantSettingsCreateManyArgs} args - Arguments to create many AssistantSettings.
     * @example
     * // Create many AssistantSettings
     * const assistantSettings = await prisma.assistantSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssistantSettingsCreateManyArgs>(args?: SelectSubset<T, AssistantSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssistantSettings and returns the data saved in the database.
     * @param {AssistantSettingsCreateManyAndReturnArgs} args - Arguments to create many AssistantSettings.
     * @example
     * // Create many AssistantSettings
     * const assistantSettings = await prisma.assistantSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssistantSettings and only return the `id`
     * const assistantSettingsWithIdOnly = await prisma.assistantSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssistantSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, AssistantSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssistantSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AssistantSettings.
     * @param {AssistantSettingsDeleteArgs} args - Arguments to delete one AssistantSettings.
     * @example
     * // Delete one AssistantSettings
     * const AssistantSettings = await prisma.assistantSettings.delete({
     *   where: {
     *     // ... filter to delete one AssistantSettings
     *   }
     * })
     * 
     */
    delete<T extends AssistantSettingsDeleteArgs>(args: SelectSubset<T, AssistantSettingsDeleteArgs<ExtArgs>>): Prisma__AssistantSettingsClient<$Result.GetResult<Prisma.$AssistantSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssistantSettings.
     * @param {AssistantSettingsUpdateArgs} args - Arguments to update one AssistantSettings.
     * @example
     * // Update one AssistantSettings
     * const assistantSettings = await prisma.assistantSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssistantSettingsUpdateArgs>(args: SelectSubset<T, AssistantSettingsUpdateArgs<ExtArgs>>): Prisma__AssistantSettingsClient<$Result.GetResult<Prisma.$AssistantSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssistantSettings.
     * @param {AssistantSettingsDeleteManyArgs} args - Arguments to filter AssistantSettings to delete.
     * @example
     * // Delete a few AssistantSettings
     * const { count } = await prisma.assistantSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssistantSettingsDeleteManyArgs>(args?: SelectSubset<T, AssistantSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssistantSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssistantSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssistantSettings
     * const assistantSettings = await prisma.assistantSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssistantSettingsUpdateManyArgs>(args: SelectSubset<T, AssistantSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssistantSettings and returns the data updated in the database.
     * @param {AssistantSettingsUpdateManyAndReturnArgs} args - Arguments to update many AssistantSettings.
     * @example
     * // Update many AssistantSettings
     * const assistantSettings = await prisma.assistantSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AssistantSettings and only return the `id`
     * const assistantSettingsWithIdOnly = await prisma.assistantSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssistantSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, AssistantSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssistantSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AssistantSettings.
     * @param {AssistantSettingsUpsertArgs} args - Arguments to update or create a AssistantSettings.
     * @example
     * // Update or create a AssistantSettings
     * const assistantSettings = await prisma.assistantSettings.upsert({
     *   create: {
     *     // ... data to create a AssistantSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssistantSettings we want to update
     *   }
     * })
     */
    upsert<T extends AssistantSettingsUpsertArgs>(args: SelectSubset<T, AssistantSettingsUpsertArgs<ExtArgs>>): Prisma__AssistantSettingsClient<$Result.GetResult<Prisma.$AssistantSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssistantSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssistantSettingsCountArgs} args - Arguments to filter AssistantSettings to count.
     * @example
     * // Count the number of AssistantSettings
     * const count = await prisma.assistantSettings.count({
     *   where: {
     *     // ... the filter for the AssistantSettings we want to count
     *   }
     * })
    **/
    count<T extends AssistantSettingsCountArgs>(
      args?: Subset<T, AssistantSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssistantSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssistantSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssistantSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssistantSettingsAggregateArgs>(args: Subset<T, AssistantSettingsAggregateArgs>): Prisma.PrismaPromise<GetAssistantSettingsAggregateType<T>>

    /**
     * Group by AssistantSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssistantSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssistantSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssistantSettingsGroupByArgs['orderBy'] }
        : { orderBy?: AssistantSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssistantSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssistantSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssistantSettings model
   */
  readonly fields: AssistantSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssistantSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssistantSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends WhatsAppAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WhatsAppAccountDefaultArgs<ExtArgs>>): Prisma__WhatsAppAccountClient<$Result.GetResult<Prisma.$WhatsAppAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AssistantSettings model
   */
  interface AssistantSettingsFieldRefs {
    readonly id: FieldRef<"AssistantSettings", 'String'>
    readonly name: FieldRef<"AssistantSettings", 'String'>
    readonly model: FieldRef<"AssistantSettings", 'String'>
    readonly openAiKey: FieldRef<"AssistantSettings", 'String'>
    readonly assistantId: FieldRef<"AssistantSettings", 'String'>
    readonly isConfigured: FieldRef<"AssistantSettings", 'Boolean'>
    readonly status: FieldRef<"AssistantSettings", 'String'>
    readonly errorMessage: FieldRef<"AssistantSettings", 'String'>
    readonly createdAt: FieldRef<"AssistantSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"AssistantSettings", 'DateTime'>
    readonly accountId: FieldRef<"AssistantSettings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AssistantSettings findUnique
   */
  export type AssistantSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssistantSettings
     */
    select?: AssistantSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssistantSettings
     */
    omit?: AssistantSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistantSettingsInclude<ExtArgs> | null
    /**
     * Filter, which AssistantSettings to fetch.
     */
    where: AssistantSettingsWhereUniqueInput
  }

  /**
   * AssistantSettings findUniqueOrThrow
   */
  export type AssistantSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssistantSettings
     */
    select?: AssistantSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssistantSettings
     */
    omit?: AssistantSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistantSettingsInclude<ExtArgs> | null
    /**
     * Filter, which AssistantSettings to fetch.
     */
    where: AssistantSettingsWhereUniqueInput
  }

  /**
   * AssistantSettings findFirst
   */
  export type AssistantSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssistantSettings
     */
    select?: AssistantSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssistantSettings
     */
    omit?: AssistantSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistantSettingsInclude<ExtArgs> | null
    /**
     * Filter, which AssistantSettings to fetch.
     */
    where?: AssistantSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssistantSettings to fetch.
     */
    orderBy?: AssistantSettingsOrderByWithRelationInput | AssistantSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssistantSettings.
     */
    cursor?: AssistantSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssistantSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssistantSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssistantSettings.
     */
    distinct?: AssistantSettingsScalarFieldEnum | AssistantSettingsScalarFieldEnum[]
  }

  /**
   * AssistantSettings findFirstOrThrow
   */
  export type AssistantSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssistantSettings
     */
    select?: AssistantSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssistantSettings
     */
    omit?: AssistantSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistantSettingsInclude<ExtArgs> | null
    /**
     * Filter, which AssistantSettings to fetch.
     */
    where?: AssistantSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssistantSettings to fetch.
     */
    orderBy?: AssistantSettingsOrderByWithRelationInput | AssistantSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssistantSettings.
     */
    cursor?: AssistantSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssistantSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssistantSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssistantSettings.
     */
    distinct?: AssistantSettingsScalarFieldEnum | AssistantSettingsScalarFieldEnum[]
  }

  /**
   * AssistantSettings findMany
   */
  export type AssistantSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssistantSettings
     */
    select?: AssistantSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssistantSettings
     */
    omit?: AssistantSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistantSettingsInclude<ExtArgs> | null
    /**
     * Filter, which AssistantSettings to fetch.
     */
    where?: AssistantSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssistantSettings to fetch.
     */
    orderBy?: AssistantSettingsOrderByWithRelationInput | AssistantSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssistantSettings.
     */
    cursor?: AssistantSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssistantSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssistantSettings.
     */
    skip?: number
    distinct?: AssistantSettingsScalarFieldEnum | AssistantSettingsScalarFieldEnum[]
  }

  /**
   * AssistantSettings create
   */
  export type AssistantSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssistantSettings
     */
    select?: AssistantSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssistantSettings
     */
    omit?: AssistantSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistantSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a AssistantSettings.
     */
    data: XOR<AssistantSettingsCreateInput, AssistantSettingsUncheckedCreateInput>
  }

  /**
   * AssistantSettings createMany
   */
  export type AssistantSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssistantSettings.
     */
    data: AssistantSettingsCreateManyInput | AssistantSettingsCreateManyInput[]
  }

  /**
   * AssistantSettings createManyAndReturn
   */
  export type AssistantSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssistantSettings
     */
    select?: AssistantSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssistantSettings
     */
    omit?: AssistantSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many AssistantSettings.
     */
    data: AssistantSettingsCreateManyInput | AssistantSettingsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistantSettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssistantSettings update
   */
  export type AssistantSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssistantSettings
     */
    select?: AssistantSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssistantSettings
     */
    omit?: AssistantSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistantSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a AssistantSettings.
     */
    data: XOR<AssistantSettingsUpdateInput, AssistantSettingsUncheckedUpdateInput>
    /**
     * Choose, which AssistantSettings to update.
     */
    where: AssistantSettingsWhereUniqueInput
  }

  /**
   * AssistantSettings updateMany
   */
  export type AssistantSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssistantSettings.
     */
    data: XOR<AssistantSettingsUpdateManyMutationInput, AssistantSettingsUncheckedUpdateManyInput>
    /**
     * Filter which AssistantSettings to update
     */
    where?: AssistantSettingsWhereInput
    /**
     * Limit how many AssistantSettings to update.
     */
    limit?: number
  }

  /**
   * AssistantSettings updateManyAndReturn
   */
  export type AssistantSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssistantSettings
     */
    select?: AssistantSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssistantSettings
     */
    omit?: AssistantSettingsOmit<ExtArgs> | null
    /**
     * The data used to update AssistantSettings.
     */
    data: XOR<AssistantSettingsUpdateManyMutationInput, AssistantSettingsUncheckedUpdateManyInput>
    /**
     * Filter which AssistantSettings to update
     */
    where?: AssistantSettingsWhereInput
    /**
     * Limit how many AssistantSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistantSettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssistantSettings upsert
   */
  export type AssistantSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssistantSettings
     */
    select?: AssistantSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssistantSettings
     */
    omit?: AssistantSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistantSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the AssistantSettings to update in case it exists.
     */
    where: AssistantSettingsWhereUniqueInput
    /**
     * In case the AssistantSettings found by the `where` argument doesn't exist, create a new AssistantSettings with this data.
     */
    create: XOR<AssistantSettingsCreateInput, AssistantSettingsUncheckedCreateInput>
    /**
     * In case the AssistantSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssistantSettingsUpdateInput, AssistantSettingsUncheckedUpdateInput>
  }

  /**
   * AssistantSettings delete
   */
  export type AssistantSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssistantSettings
     */
    select?: AssistantSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssistantSettings
     */
    omit?: AssistantSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistantSettingsInclude<ExtArgs> | null
    /**
     * Filter which AssistantSettings to delete.
     */
    where: AssistantSettingsWhereUniqueInput
  }

  /**
   * AssistantSettings deleteMany
   */
  export type AssistantSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssistantSettings to delete
     */
    where?: AssistantSettingsWhereInput
    /**
     * Limit how many AssistantSettings to delete.
     */
    limit?: number
  }

  /**
   * AssistantSettings without action
   */
  export type AssistantSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssistantSettings
     */
    select?: AssistantSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssistantSettings
     */
    omit?: AssistantSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistantSettingsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    content: 'content',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const ChatGroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    accountId: 'accountId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatGroupScalarFieldEnum = (typeof ChatGroupScalarFieldEnum)[keyof typeof ChatGroupScalarFieldEnum]


  export const WhatsAppAccountScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phoneNumber: 'phoneNumber',
    isActive: 'isActive',
    verified: 'verified',
    phoneNumberId: 'phoneNumberId',
    businessAccountId: 'businessAccountId',
    accessToken: 'accessToken',
    webhookSecret: 'webhookSecret',
    maxConcurrentMessages: 'maxConcurrentMessages',
    retryAttempts: 'retryAttempts',
    gptModel: 'gptModel',
    maxTokens: 'maxTokens',
    temperature: 'temperature',
    totalMessages: 'totalMessages',
    avgResponseTime: 'avgResponseTime',
    lastActive: 'lastActive',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WhatsAppAccountScalarFieldEnum = (typeof WhatsAppAccountScalarFieldEnum)[keyof typeof WhatsAppAccountScalarFieldEnum]


  export const WhatsAppMessageScalarFieldEnum: {
    id: 'id',
    whatsappId: 'whatsappId',
    from: 'from',
    to: 'to',
    type: 'type',
    content: 'content',
    timestamp: 'timestamp',
    status: 'status',
    errorData: 'errorData',
    accountId: 'accountId',
    chatId: 'chatId',
    isAssistant: 'isAssistant'
  };

  export type WhatsAppMessageScalarFieldEnum = (typeof WhatsAppMessageScalarFieldEnum)[keyof typeof WhatsAppMessageScalarFieldEnum]


  export const WhatsAppChatScalarFieldEnum: {
    id: 'id',
    phoneNumber: 'phoneNumber',
    displayName: 'displayName',
    lastMessageAt: 'lastMessageAt',
    unreadCount: 'unreadCount',
    accountId: 'accountId',
    assistantEnabled: 'assistantEnabled',
    threadId: 'threadId',
    group: 'group'
  };

  export type WhatsAppChatScalarFieldEnum = (typeof WhatsAppChatScalarFieldEnum)[keyof typeof WhatsAppChatScalarFieldEnum]


  export const MessageTemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    language: 'language',
    status: 'status',
    components: 'components',
    whatsappId: 'whatsappId',
    accountId: 'accountId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    rejectionReason: 'rejectionReason'
  };

  export type MessageTemplateScalarFieldEnum = (typeof MessageTemplateScalarFieldEnum)[keyof typeof MessageTemplateScalarFieldEnum]


  export const WhatsAppBroadcastScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    scheduledAt: 'scheduledAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    recipients: 'recipients',
    sent: 'sent',
    delivered: 'delivered',
    read: 'read',
    failed: 'failed',
    templateParameters: 'templateParameters',
    accountId: 'accountId',
    clientListId: 'clientListId',
    templateId: 'templateId'
  };

  export type WhatsAppBroadcastScalarFieldEnum = (typeof WhatsAppBroadcastScalarFieldEnum)[keyof typeof WhatsAppBroadcastScalarFieldEnum]


  export const BroadcastAttachmentScalarFieldEnum: {
    id: 'id',
    filename: 'filename',
    type: 'type',
    url: 'url',
    size: 'size',
    createdAt: 'createdAt',
    broadcastId: 'broadcastId'
  };

  export type BroadcastAttachmentScalarFieldEnum = (typeof BroadcastAttachmentScalarFieldEnum)[keyof typeof BroadcastAttachmentScalarFieldEnum]


  export const ClientListScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientListScalarFieldEnum = (typeof ClientListScalarFieldEnum)[keyof typeof ClientListScalarFieldEnum]


  export const PhoneNumberScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    clientListId: 'clientListId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PhoneNumberScalarFieldEnum = (typeof PhoneNumberScalarFieldEnum)[keyof typeof PhoneNumberScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phoneNumber: 'phoneNumber',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const AssistantSettingsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    model: 'model',
    openAiKey: 'openAiKey',
    assistantId: 'assistantId',
    isConfigured: 'isConfigured',
    status: 'status',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    accountId: 'accountId'
  };

  export type AssistantSettingsScalarFieldEnum = (typeof AssistantSettingsScalarFieldEnum)[keyof typeof AssistantSettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    clientLists?: ClientListListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientLists?: ClientListOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    clientLists?: ClientListListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    userId?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    role?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    userId?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    role?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    userId?: StringWithAggregatesFilter<"ChatMessage"> | string
    content?: StringWithAggregatesFilter<"ChatMessage"> | string
    role?: StringWithAggregatesFilter<"ChatMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type ChatGroupWhereInput = {
    AND?: ChatGroupWhereInput | ChatGroupWhereInput[]
    OR?: ChatGroupWhereInput[]
    NOT?: ChatGroupWhereInput | ChatGroupWhereInput[]
    id?: StringFilter<"ChatGroup"> | string
    name?: StringFilter<"ChatGroup"> | string
    accountId?: StringFilter<"ChatGroup"> | string
    createdAt?: DateTimeFilter<"ChatGroup"> | Date | string
    updatedAt?: DateTimeFilter<"ChatGroup"> | Date | string
    account?: XOR<WhatsAppAccountScalarRelationFilter, WhatsAppAccountWhereInput>
  }

  export type ChatGroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    account?: WhatsAppAccountOrderByWithRelationInput
  }

  export type ChatGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatGroupWhereInput | ChatGroupWhereInput[]
    OR?: ChatGroupWhereInput[]
    NOT?: ChatGroupWhereInput | ChatGroupWhereInput[]
    name?: StringFilter<"ChatGroup"> | string
    accountId?: StringFilter<"ChatGroup"> | string
    createdAt?: DateTimeFilter<"ChatGroup"> | Date | string
    updatedAt?: DateTimeFilter<"ChatGroup"> | Date | string
    account?: XOR<WhatsAppAccountScalarRelationFilter, WhatsAppAccountWhereInput>
  }, "id">

  export type ChatGroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatGroupCountOrderByAggregateInput
    _max?: ChatGroupMaxOrderByAggregateInput
    _min?: ChatGroupMinOrderByAggregateInput
  }

  export type ChatGroupScalarWhereWithAggregatesInput = {
    AND?: ChatGroupScalarWhereWithAggregatesInput | ChatGroupScalarWhereWithAggregatesInput[]
    OR?: ChatGroupScalarWhereWithAggregatesInput[]
    NOT?: ChatGroupScalarWhereWithAggregatesInput | ChatGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatGroup"> | string
    name?: StringWithAggregatesFilter<"ChatGroup"> | string
    accountId?: StringWithAggregatesFilter<"ChatGroup"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatGroup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatGroup"> | Date | string
  }

  export type WhatsAppAccountWhereInput = {
    AND?: WhatsAppAccountWhereInput | WhatsAppAccountWhereInput[]
    OR?: WhatsAppAccountWhereInput[]
    NOT?: WhatsAppAccountWhereInput | WhatsAppAccountWhereInput[]
    id?: StringFilter<"WhatsAppAccount"> | string
    name?: StringFilter<"WhatsAppAccount"> | string
    phoneNumber?: StringFilter<"WhatsAppAccount"> | string
    isActive?: BoolFilter<"WhatsAppAccount"> | boolean
    verified?: BoolFilter<"WhatsAppAccount"> | boolean
    phoneNumberId?: StringFilter<"WhatsAppAccount"> | string
    businessAccountId?: StringFilter<"WhatsAppAccount"> | string
    accessToken?: StringFilter<"WhatsAppAccount"> | string
    webhookSecret?: StringNullableFilter<"WhatsAppAccount"> | string | null
    maxConcurrentMessages?: IntFilter<"WhatsAppAccount"> | number
    retryAttempts?: IntFilter<"WhatsAppAccount"> | number
    gptModel?: StringFilter<"WhatsAppAccount"> | string
    maxTokens?: IntFilter<"WhatsAppAccount"> | number
    temperature?: FloatFilter<"WhatsAppAccount"> | number
    totalMessages?: IntFilter<"WhatsAppAccount"> | number
    avgResponseTime?: IntFilter<"WhatsAppAccount"> | number
    lastActive?: DateTimeNullableFilter<"WhatsAppAccount"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"WhatsAppAccount"> | Date | string | null
    createdAt?: DateTimeFilter<"WhatsAppAccount"> | Date | string
    updatedAt?: DateTimeFilter<"WhatsAppAccount"> | Date | string
    assistantSettings?: XOR<AssistantSettingsNullableScalarRelationFilter, AssistantSettingsWhereInput> | null
    groups?: ChatGroupListRelationFilter
    templates?: MessageTemplateListRelationFilter
    broadcasts?: WhatsAppBroadcastListRelationFilter
    chats?: WhatsAppChatListRelationFilter
    messages?: WhatsAppMessageListRelationFilter
  }

  export type WhatsAppAccountOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrder
    verified?: SortOrder
    phoneNumberId?: SortOrder
    businessAccountId?: SortOrder
    accessToken?: SortOrder
    webhookSecret?: SortOrderInput | SortOrder
    maxConcurrentMessages?: SortOrder
    retryAttempts?: SortOrder
    gptModel?: SortOrder
    maxTokens?: SortOrder
    temperature?: SortOrder
    totalMessages?: SortOrder
    avgResponseTime?: SortOrder
    lastActive?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assistantSettings?: AssistantSettingsOrderByWithRelationInput
    groups?: ChatGroupOrderByRelationAggregateInput
    templates?: MessageTemplateOrderByRelationAggregateInput
    broadcasts?: WhatsAppBroadcastOrderByRelationAggregateInput
    chats?: WhatsAppChatOrderByRelationAggregateInput
    messages?: WhatsAppMessageOrderByRelationAggregateInput
  }

  export type WhatsAppAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phoneNumber?: string
    phoneNumberId?: string
    AND?: WhatsAppAccountWhereInput | WhatsAppAccountWhereInput[]
    OR?: WhatsAppAccountWhereInput[]
    NOT?: WhatsAppAccountWhereInput | WhatsAppAccountWhereInput[]
    name?: StringFilter<"WhatsAppAccount"> | string
    isActive?: BoolFilter<"WhatsAppAccount"> | boolean
    verified?: BoolFilter<"WhatsAppAccount"> | boolean
    businessAccountId?: StringFilter<"WhatsAppAccount"> | string
    accessToken?: StringFilter<"WhatsAppAccount"> | string
    webhookSecret?: StringNullableFilter<"WhatsAppAccount"> | string | null
    maxConcurrentMessages?: IntFilter<"WhatsAppAccount"> | number
    retryAttempts?: IntFilter<"WhatsAppAccount"> | number
    gptModel?: StringFilter<"WhatsAppAccount"> | string
    maxTokens?: IntFilter<"WhatsAppAccount"> | number
    temperature?: FloatFilter<"WhatsAppAccount"> | number
    totalMessages?: IntFilter<"WhatsAppAccount"> | number
    avgResponseTime?: IntFilter<"WhatsAppAccount"> | number
    lastActive?: DateTimeNullableFilter<"WhatsAppAccount"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"WhatsAppAccount"> | Date | string | null
    createdAt?: DateTimeFilter<"WhatsAppAccount"> | Date | string
    updatedAt?: DateTimeFilter<"WhatsAppAccount"> | Date | string
    assistantSettings?: XOR<AssistantSettingsNullableScalarRelationFilter, AssistantSettingsWhereInput> | null
    groups?: ChatGroupListRelationFilter
    templates?: MessageTemplateListRelationFilter
    broadcasts?: WhatsAppBroadcastListRelationFilter
    chats?: WhatsAppChatListRelationFilter
    messages?: WhatsAppMessageListRelationFilter
  }, "id" | "phoneNumber" | "phoneNumberId">

  export type WhatsAppAccountOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrder
    verified?: SortOrder
    phoneNumberId?: SortOrder
    businessAccountId?: SortOrder
    accessToken?: SortOrder
    webhookSecret?: SortOrderInput | SortOrder
    maxConcurrentMessages?: SortOrder
    retryAttempts?: SortOrder
    gptModel?: SortOrder
    maxTokens?: SortOrder
    temperature?: SortOrder
    totalMessages?: SortOrder
    avgResponseTime?: SortOrder
    lastActive?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WhatsAppAccountCountOrderByAggregateInput
    _avg?: WhatsAppAccountAvgOrderByAggregateInput
    _max?: WhatsAppAccountMaxOrderByAggregateInput
    _min?: WhatsAppAccountMinOrderByAggregateInput
    _sum?: WhatsAppAccountSumOrderByAggregateInput
  }

  export type WhatsAppAccountScalarWhereWithAggregatesInput = {
    AND?: WhatsAppAccountScalarWhereWithAggregatesInput | WhatsAppAccountScalarWhereWithAggregatesInput[]
    OR?: WhatsAppAccountScalarWhereWithAggregatesInput[]
    NOT?: WhatsAppAccountScalarWhereWithAggregatesInput | WhatsAppAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WhatsAppAccount"> | string
    name?: StringWithAggregatesFilter<"WhatsAppAccount"> | string
    phoneNumber?: StringWithAggregatesFilter<"WhatsAppAccount"> | string
    isActive?: BoolWithAggregatesFilter<"WhatsAppAccount"> | boolean
    verified?: BoolWithAggregatesFilter<"WhatsAppAccount"> | boolean
    phoneNumberId?: StringWithAggregatesFilter<"WhatsAppAccount"> | string
    businessAccountId?: StringWithAggregatesFilter<"WhatsAppAccount"> | string
    accessToken?: StringWithAggregatesFilter<"WhatsAppAccount"> | string
    webhookSecret?: StringNullableWithAggregatesFilter<"WhatsAppAccount"> | string | null
    maxConcurrentMessages?: IntWithAggregatesFilter<"WhatsAppAccount"> | number
    retryAttempts?: IntWithAggregatesFilter<"WhatsAppAccount"> | number
    gptModel?: StringWithAggregatesFilter<"WhatsAppAccount"> | string
    maxTokens?: IntWithAggregatesFilter<"WhatsAppAccount"> | number
    temperature?: FloatWithAggregatesFilter<"WhatsAppAccount"> | number
    totalMessages?: IntWithAggregatesFilter<"WhatsAppAccount"> | number
    avgResponseTime?: IntWithAggregatesFilter<"WhatsAppAccount"> | number
    lastActive?: DateTimeNullableWithAggregatesFilter<"WhatsAppAccount"> | Date | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"WhatsAppAccount"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WhatsAppAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WhatsAppAccount"> | Date | string
  }

  export type WhatsAppMessageWhereInput = {
    AND?: WhatsAppMessageWhereInput | WhatsAppMessageWhereInput[]
    OR?: WhatsAppMessageWhereInput[]
    NOT?: WhatsAppMessageWhereInput | WhatsAppMessageWhereInput[]
    id?: StringFilter<"WhatsAppMessage"> | string
    whatsappId?: StringNullableFilter<"WhatsAppMessage"> | string | null
    from?: StringFilter<"WhatsAppMessage"> | string
    to?: StringFilter<"WhatsAppMessage"> | string
    type?: StringFilter<"WhatsAppMessage"> | string
    content?: StringFilter<"WhatsAppMessage"> | string
    timestamp?: DateTimeFilter<"WhatsAppMessage"> | Date | string
    status?: StringFilter<"WhatsAppMessage"> | string
    errorData?: StringNullableFilter<"WhatsAppMessage"> | string | null
    accountId?: StringFilter<"WhatsAppMessage"> | string
    chatId?: StringFilter<"WhatsAppMessage"> | string
    isAssistant?: BoolFilter<"WhatsAppMessage"> | boolean
    chat?: XOR<WhatsAppChatScalarRelationFilter, WhatsAppChatWhereInput>
    account?: XOR<WhatsAppAccountScalarRelationFilter, WhatsAppAccountWhereInput>
  }

  export type WhatsAppMessageOrderByWithRelationInput = {
    id?: SortOrder
    whatsappId?: SortOrderInput | SortOrder
    from?: SortOrder
    to?: SortOrder
    type?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    errorData?: SortOrderInput | SortOrder
    accountId?: SortOrder
    chatId?: SortOrder
    isAssistant?: SortOrder
    chat?: WhatsAppChatOrderByWithRelationInput
    account?: WhatsAppAccountOrderByWithRelationInput
  }

  export type WhatsAppMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WhatsAppMessageWhereInput | WhatsAppMessageWhereInput[]
    OR?: WhatsAppMessageWhereInput[]
    NOT?: WhatsAppMessageWhereInput | WhatsAppMessageWhereInput[]
    whatsappId?: StringNullableFilter<"WhatsAppMessage"> | string | null
    from?: StringFilter<"WhatsAppMessage"> | string
    to?: StringFilter<"WhatsAppMessage"> | string
    type?: StringFilter<"WhatsAppMessage"> | string
    content?: StringFilter<"WhatsAppMessage"> | string
    timestamp?: DateTimeFilter<"WhatsAppMessage"> | Date | string
    status?: StringFilter<"WhatsAppMessage"> | string
    errorData?: StringNullableFilter<"WhatsAppMessage"> | string | null
    accountId?: StringFilter<"WhatsAppMessage"> | string
    chatId?: StringFilter<"WhatsAppMessage"> | string
    isAssistant?: BoolFilter<"WhatsAppMessage"> | boolean
    chat?: XOR<WhatsAppChatScalarRelationFilter, WhatsAppChatWhereInput>
    account?: XOR<WhatsAppAccountScalarRelationFilter, WhatsAppAccountWhereInput>
  }, "id">

  export type WhatsAppMessageOrderByWithAggregationInput = {
    id?: SortOrder
    whatsappId?: SortOrderInput | SortOrder
    from?: SortOrder
    to?: SortOrder
    type?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    errorData?: SortOrderInput | SortOrder
    accountId?: SortOrder
    chatId?: SortOrder
    isAssistant?: SortOrder
    _count?: WhatsAppMessageCountOrderByAggregateInput
    _max?: WhatsAppMessageMaxOrderByAggregateInput
    _min?: WhatsAppMessageMinOrderByAggregateInput
  }

  export type WhatsAppMessageScalarWhereWithAggregatesInput = {
    AND?: WhatsAppMessageScalarWhereWithAggregatesInput | WhatsAppMessageScalarWhereWithAggregatesInput[]
    OR?: WhatsAppMessageScalarWhereWithAggregatesInput[]
    NOT?: WhatsAppMessageScalarWhereWithAggregatesInput | WhatsAppMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WhatsAppMessage"> | string
    whatsappId?: StringNullableWithAggregatesFilter<"WhatsAppMessage"> | string | null
    from?: StringWithAggregatesFilter<"WhatsAppMessage"> | string
    to?: StringWithAggregatesFilter<"WhatsAppMessage"> | string
    type?: StringWithAggregatesFilter<"WhatsAppMessage"> | string
    content?: StringWithAggregatesFilter<"WhatsAppMessage"> | string
    timestamp?: DateTimeWithAggregatesFilter<"WhatsAppMessage"> | Date | string
    status?: StringWithAggregatesFilter<"WhatsAppMessage"> | string
    errorData?: StringNullableWithAggregatesFilter<"WhatsAppMessage"> | string | null
    accountId?: StringWithAggregatesFilter<"WhatsAppMessage"> | string
    chatId?: StringWithAggregatesFilter<"WhatsAppMessage"> | string
    isAssistant?: BoolWithAggregatesFilter<"WhatsAppMessage"> | boolean
  }

  export type WhatsAppChatWhereInput = {
    AND?: WhatsAppChatWhereInput | WhatsAppChatWhereInput[]
    OR?: WhatsAppChatWhereInput[]
    NOT?: WhatsAppChatWhereInput | WhatsAppChatWhereInput[]
    id?: StringFilter<"WhatsAppChat"> | string
    phoneNumber?: StringFilter<"WhatsAppChat"> | string
    displayName?: StringNullableFilter<"WhatsAppChat"> | string | null
    lastMessageAt?: DateTimeFilter<"WhatsAppChat"> | Date | string
    unreadCount?: IntFilter<"WhatsAppChat"> | number
    accountId?: StringFilter<"WhatsAppChat"> | string
    assistantEnabled?: BoolFilter<"WhatsAppChat"> | boolean
    threadId?: StringNullableFilter<"WhatsAppChat"> | string | null
    group?: StringNullableFilter<"WhatsAppChat"> | string | null
    account?: XOR<WhatsAppAccountScalarRelationFilter, WhatsAppAccountWhereInput>
    messages?: WhatsAppMessageListRelationFilter
  }

  export type WhatsAppChatOrderByWithRelationInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    displayName?: SortOrderInput | SortOrder
    lastMessageAt?: SortOrder
    unreadCount?: SortOrder
    accountId?: SortOrder
    assistantEnabled?: SortOrder
    threadId?: SortOrderInput | SortOrder
    group?: SortOrderInput | SortOrder
    account?: WhatsAppAccountOrderByWithRelationInput
    messages?: WhatsAppMessageOrderByRelationAggregateInput
  }

  export type WhatsAppChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phoneNumber_accountId?: WhatsAppChatPhoneNumberAccountIdCompoundUniqueInput
    AND?: WhatsAppChatWhereInput | WhatsAppChatWhereInput[]
    OR?: WhatsAppChatWhereInput[]
    NOT?: WhatsAppChatWhereInput | WhatsAppChatWhereInput[]
    phoneNumber?: StringFilter<"WhatsAppChat"> | string
    displayName?: StringNullableFilter<"WhatsAppChat"> | string | null
    lastMessageAt?: DateTimeFilter<"WhatsAppChat"> | Date | string
    unreadCount?: IntFilter<"WhatsAppChat"> | number
    accountId?: StringFilter<"WhatsAppChat"> | string
    assistantEnabled?: BoolFilter<"WhatsAppChat"> | boolean
    threadId?: StringNullableFilter<"WhatsAppChat"> | string | null
    group?: StringNullableFilter<"WhatsAppChat"> | string | null
    account?: XOR<WhatsAppAccountScalarRelationFilter, WhatsAppAccountWhereInput>
    messages?: WhatsAppMessageListRelationFilter
  }, "id" | "phoneNumber_accountId">

  export type WhatsAppChatOrderByWithAggregationInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    displayName?: SortOrderInput | SortOrder
    lastMessageAt?: SortOrder
    unreadCount?: SortOrder
    accountId?: SortOrder
    assistantEnabled?: SortOrder
    threadId?: SortOrderInput | SortOrder
    group?: SortOrderInput | SortOrder
    _count?: WhatsAppChatCountOrderByAggregateInput
    _avg?: WhatsAppChatAvgOrderByAggregateInput
    _max?: WhatsAppChatMaxOrderByAggregateInput
    _min?: WhatsAppChatMinOrderByAggregateInput
    _sum?: WhatsAppChatSumOrderByAggregateInput
  }

  export type WhatsAppChatScalarWhereWithAggregatesInput = {
    AND?: WhatsAppChatScalarWhereWithAggregatesInput | WhatsAppChatScalarWhereWithAggregatesInput[]
    OR?: WhatsAppChatScalarWhereWithAggregatesInput[]
    NOT?: WhatsAppChatScalarWhereWithAggregatesInput | WhatsAppChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WhatsAppChat"> | string
    phoneNumber?: StringWithAggregatesFilter<"WhatsAppChat"> | string
    displayName?: StringNullableWithAggregatesFilter<"WhatsAppChat"> | string | null
    lastMessageAt?: DateTimeWithAggregatesFilter<"WhatsAppChat"> | Date | string
    unreadCount?: IntWithAggregatesFilter<"WhatsAppChat"> | number
    accountId?: StringWithAggregatesFilter<"WhatsAppChat"> | string
    assistantEnabled?: BoolWithAggregatesFilter<"WhatsAppChat"> | boolean
    threadId?: StringNullableWithAggregatesFilter<"WhatsAppChat"> | string | null
    group?: StringNullableWithAggregatesFilter<"WhatsAppChat"> | string | null
  }

  export type MessageTemplateWhereInput = {
    AND?: MessageTemplateWhereInput | MessageTemplateWhereInput[]
    OR?: MessageTemplateWhereInput[]
    NOT?: MessageTemplateWhereInput | MessageTemplateWhereInput[]
    id?: StringFilter<"MessageTemplate"> | string
    name?: StringFilter<"MessageTemplate"> | string
    category?: StringFilter<"MessageTemplate"> | string
    language?: StringFilter<"MessageTemplate"> | string
    status?: StringFilter<"MessageTemplate"> | string
    components?: JsonFilter<"MessageTemplate">
    whatsappId?: StringNullableFilter<"MessageTemplate"> | string | null
    accountId?: StringFilter<"MessageTemplate"> | string
    createdAt?: DateTimeFilter<"MessageTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"MessageTemplate"> | Date | string
    rejectionReason?: StringNullableFilter<"MessageTemplate"> | string | null
    account?: XOR<WhatsAppAccountScalarRelationFilter, WhatsAppAccountWhereInput>
    broadcasts?: WhatsAppBroadcastListRelationFilter
  }

  export type MessageTemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    language?: SortOrder
    status?: SortOrder
    components?: SortOrder
    whatsappId?: SortOrderInput | SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    account?: WhatsAppAccountOrderByWithRelationInput
    broadcasts?: WhatsAppBroadcastOrderByRelationAggregateInput
  }

  export type MessageTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageTemplateWhereInput | MessageTemplateWhereInput[]
    OR?: MessageTemplateWhereInput[]
    NOT?: MessageTemplateWhereInput | MessageTemplateWhereInput[]
    name?: StringFilter<"MessageTemplate"> | string
    category?: StringFilter<"MessageTemplate"> | string
    language?: StringFilter<"MessageTemplate"> | string
    status?: StringFilter<"MessageTemplate"> | string
    components?: JsonFilter<"MessageTemplate">
    whatsappId?: StringNullableFilter<"MessageTemplate"> | string | null
    accountId?: StringFilter<"MessageTemplate"> | string
    createdAt?: DateTimeFilter<"MessageTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"MessageTemplate"> | Date | string
    rejectionReason?: StringNullableFilter<"MessageTemplate"> | string | null
    account?: XOR<WhatsAppAccountScalarRelationFilter, WhatsAppAccountWhereInput>
    broadcasts?: WhatsAppBroadcastListRelationFilter
  }, "id">

  export type MessageTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    language?: SortOrder
    status?: SortOrder
    components?: SortOrder
    whatsappId?: SortOrderInput | SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    _count?: MessageTemplateCountOrderByAggregateInput
    _max?: MessageTemplateMaxOrderByAggregateInput
    _min?: MessageTemplateMinOrderByAggregateInput
  }

  export type MessageTemplateScalarWhereWithAggregatesInput = {
    AND?: MessageTemplateScalarWhereWithAggregatesInput | MessageTemplateScalarWhereWithAggregatesInput[]
    OR?: MessageTemplateScalarWhereWithAggregatesInput[]
    NOT?: MessageTemplateScalarWhereWithAggregatesInput | MessageTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MessageTemplate"> | string
    name?: StringWithAggregatesFilter<"MessageTemplate"> | string
    category?: StringWithAggregatesFilter<"MessageTemplate"> | string
    language?: StringWithAggregatesFilter<"MessageTemplate"> | string
    status?: StringWithAggregatesFilter<"MessageTemplate"> | string
    components?: JsonWithAggregatesFilter<"MessageTemplate">
    whatsappId?: StringNullableWithAggregatesFilter<"MessageTemplate"> | string | null
    accountId?: StringWithAggregatesFilter<"MessageTemplate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MessageTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MessageTemplate"> | Date | string
    rejectionReason?: StringNullableWithAggregatesFilter<"MessageTemplate"> | string | null
  }

  export type WhatsAppBroadcastWhereInput = {
    AND?: WhatsAppBroadcastWhereInput | WhatsAppBroadcastWhereInput[]
    OR?: WhatsAppBroadcastWhereInput[]
    NOT?: WhatsAppBroadcastWhereInput | WhatsAppBroadcastWhereInput[]
    id?: StringFilter<"WhatsAppBroadcast"> | string
    name?: StringFilter<"WhatsAppBroadcast"> | string
    status?: StringFilter<"WhatsAppBroadcast"> | string
    scheduledAt?: DateTimeNullableFilter<"WhatsAppBroadcast"> | Date | string | null
    createdAt?: DateTimeFilter<"WhatsAppBroadcast"> | Date | string
    updatedAt?: DateTimeFilter<"WhatsAppBroadcast"> | Date | string
    recipients?: IntFilter<"WhatsAppBroadcast"> | number
    sent?: IntFilter<"WhatsAppBroadcast"> | number
    delivered?: IntFilter<"WhatsAppBroadcast"> | number
    read?: IntFilter<"WhatsAppBroadcast"> | number
    failed?: IntFilter<"WhatsAppBroadcast"> | number
    templateParameters?: JsonNullableFilter<"WhatsAppBroadcast">
    accountId?: StringFilter<"WhatsAppBroadcast"> | string
    clientListId?: StringFilter<"WhatsAppBroadcast"> | string
    templateId?: StringFilter<"WhatsAppBroadcast"> | string
    attachments?: BroadcastAttachmentListRelationFilter
    template?: XOR<MessageTemplateScalarRelationFilter, MessageTemplateWhereInput>
    clientList?: XOR<ClientListScalarRelationFilter, ClientListWhereInput>
    account?: XOR<WhatsAppAccountScalarRelationFilter, WhatsAppAccountWhereInput>
  }

  export type WhatsAppBroadcastOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recipients?: SortOrder
    sent?: SortOrder
    delivered?: SortOrder
    read?: SortOrder
    failed?: SortOrder
    templateParameters?: SortOrderInput | SortOrder
    accountId?: SortOrder
    clientListId?: SortOrder
    templateId?: SortOrder
    attachments?: BroadcastAttachmentOrderByRelationAggregateInput
    template?: MessageTemplateOrderByWithRelationInput
    clientList?: ClientListOrderByWithRelationInput
    account?: WhatsAppAccountOrderByWithRelationInput
  }

  export type WhatsAppBroadcastWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WhatsAppBroadcastWhereInput | WhatsAppBroadcastWhereInput[]
    OR?: WhatsAppBroadcastWhereInput[]
    NOT?: WhatsAppBroadcastWhereInput | WhatsAppBroadcastWhereInput[]
    name?: StringFilter<"WhatsAppBroadcast"> | string
    status?: StringFilter<"WhatsAppBroadcast"> | string
    scheduledAt?: DateTimeNullableFilter<"WhatsAppBroadcast"> | Date | string | null
    createdAt?: DateTimeFilter<"WhatsAppBroadcast"> | Date | string
    updatedAt?: DateTimeFilter<"WhatsAppBroadcast"> | Date | string
    recipients?: IntFilter<"WhatsAppBroadcast"> | number
    sent?: IntFilter<"WhatsAppBroadcast"> | number
    delivered?: IntFilter<"WhatsAppBroadcast"> | number
    read?: IntFilter<"WhatsAppBroadcast"> | number
    failed?: IntFilter<"WhatsAppBroadcast"> | number
    templateParameters?: JsonNullableFilter<"WhatsAppBroadcast">
    accountId?: StringFilter<"WhatsAppBroadcast"> | string
    clientListId?: StringFilter<"WhatsAppBroadcast"> | string
    templateId?: StringFilter<"WhatsAppBroadcast"> | string
    attachments?: BroadcastAttachmentListRelationFilter
    template?: XOR<MessageTemplateScalarRelationFilter, MessageTemplateWhereInput>
    clientList?: XOR<ClientListScalarRelationFilter, ClientListWhereInput>
    account?: XOR<WhatsAppAccountScalarRelationFilter, WhatsAppAccountWhereInput>
  }, "id">

  export type WhatsAppBroadcastOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recipients?: SortOrder
    sent?: SortOrder
    delivered?: SortOrder
    read?: SortOrder
    failed?: SortOrder
    templateParameters?: SortOrderInput | SortOrder
    accountId?: SortOrder
    clientListId?: SortOrder
    templateId?: SortOrder
    _count?: WhatsAppBroadcastCountOrderByAggregateInput
    _avg?: WhatsAppBroadcastAvgOrderByAggregateInput
    _max?: WhatsAppBroadcastMaxOrderByAggregateInput
    _min?: WhatsAppBroadcastMinOrderByAggregateInput
    _sum?: WhatsAppBroadcastSumOrderByAggregateInput
  }

  export type WhatsAppBroadcastScalarWhereWithAggregatesInput = {
    AND?: WhatsAppBroadcastScalarWhereWithAggregatesInput | WhatsAppBroadcastScalarWhereWithAggregatesInput[]
    OR?: WhatsAppBroadcastScalarWhereWithAggregatesInput[]
    NOT?: WhatsAppBroadcastScalarWhereWithAggregatesInput | WhatsAppBroadcastScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WhatsAppBroadcast"> | string
    name?: StringWithAggregatesFilter<"WhatsAppBroadcast"> | string
    status?: StringWithAggregatesFilter<"WhatsAppBroadcast"> | string
    scheduledAt?: DateTimeNullableWithAggregatesFilter<"WhatsAppBroadcast"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WhatsAppBroadcast"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WhatsAppBroadcast"> | Date | string
    recipients?: IntWithAggregatesFilter<"WhatsAppBroadcast"> | number
    sent?: IntWithAggregatesFilter<"WhatsAppBroadcast"> | number
    delivered?: IntWithAggregatesFilter<"WhatsAppBroadcast"> | number
    read?: IntWithAggregatesFilter<"WhatsAppBroadcast"> | number
    failed?: IntWithAggregatesFilter<"WhatsAppBroadcast"> | number
    templateParameters?: JsonNullableWithAggregatesFilter<"WhatsAppBroadcast">
    accountId?: StringWithAggregatesFilter<"WhatsAppBroadcast"> | string
    clientListId?: StringWithAggregatesFilter<"WhatsAppBroadcast"> | string
    templateId?: StringWithAggregatesFilter<"WhatsAppBroadcast"> | string
  }

  export type BroadcastAttachmentWhereInput = {
    AND?: BroadcastAttachmentWhereInput | BroadcastAttachmentWhereInput[]
    OR?: BroadcastAttachmentWhereInput[]
    NOT?: BroadcastAttachmentWhereInput | BroadcastAttachmentWhereInput[]
    id?: StringFilter<"BroadcastAttachment"> | string
    filename?: StringFilter<"BroadcastAttachment"> | string
    type?: StringFilter<"BroadcastAttachment"> | string
    url?: StringFilter<"BroadcastAttachment"> | string
    size?: IntFilter<"BroadcastAttachment"> | number
    createdAt?: DateTimeFilter<"BroadcastAttachment"> | Date | string
    broadcastId?: StringFilter<"BroadcastAttachment"> | string
    broadcast?: XOR<WhatsAppBroadcastScalarRelationFilter, WhatsAppBroadcastWhereInput>
  }

  export type BroadcastAttachmentOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrder
    type?: SortOrder
    url?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    broadcastId?: SortOrder
    broadcast?: WhatsAppBroadcastOrderByWithRelationInput
  }

  export type BroadcastAttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BroadcastAttachmentWhereInput | BroadcastAttachmentWhereInput[]
    OR?: BroadcastAttachmentWhereInput[]
    NOT?: BroadcastAttachmentWhereInput | BroadcastAttachmentWhereInput[]
    filename?: StringFilter<"BroadcastAttachment"> | string
    type?: StringFilter<"BroadcastAttachment"> | string
    url?: StringFilter<"BroadcastAttachment"> | string
    size?: IntFilter<"BroadcastAttachment"> | number
    createdAt?: DateTimeFilter<"BroadcastAttachment"> | Date | string
    broadcastId?: StringFilter<"BroadcastAttachment"> | string
    broadcast?: XOR<WhatsAppBroadcastScalarRelationFilter, WhatsAppBroadcastWhereInput>
  }, "id">

  export type BroadcastAttachmentOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrder
    type?: SortOrder
    url?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    broadcastId?: SortOrder
    _count?: BroadcastAttachmentCountOrderByAggregateInput
    _avg?: BroadcastAttachmentAvgOrderByAggregateInput
    _max?: BroadcastAttachmentMaxOrderByAggregateInput
    _min?: BroadcastAttachmentMinOrderByAggregateInput
    _sum?: BroadcastAttachmentSumOrderByAggregateInput
  }

  export type BroadcastAttachmentScalarWhereWithAggregatesInput = {
    AND?: BroadcastAttachmentScalarWhereWithAggregatesInput | BroadcastAttachmentScalarWhereWithAggregatesInput[]
    OR?: BroadcastAttachmentScalarWhereWithAggregatesInput[]
    NOT?: BroadcastAttachmentScalarWhereWithAggregatesInput | BroadcastAttachmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BroadcastAttachment"> | string
    filename?: StringWithAggregatesFilter<"BroadcastAttachment"> | string
    type?: StringWithAggregatesFilter<"BroadcastAttachment"> | string
    url?: StringWithAggregatesFilter<"BroadcastAttachment"> | string
    size?: IntWithAggregatesFilter<"BroadcastAttachment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BroadcastAttachment"> | Date | string
    broadcastId?: StringWithAggregatesFilter<"BroadcastAttachment"> | string
  }

  export type ClientListWhereInput = {
    AND?: ClientListWhereInput | ClientListWhereInput[]
    OR?: ClientListWhereInput[]
    NOT?: ClientListWhereInput | ClientListWhereInput[]
    id?: StringFilter<"ClientList"> | string
    name?: StringFilter<"ClientList"> | string
    description?: StringNullableFilter<"ClientList"> | string | null
    userId?: StringFilter<"ClientList"> | string
    createdAt?: DateTimeFilter<"ClientList"> | Date | string
    updatedAt?: DateTimeFilter<"ClientList"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    phoneNumbers?: PhoneNumberListRelationFilter
    broadcasts?: WhatsAppBroadcastListRelationFilter
    clients?: ClientListRelationFilter
  }

  export type ClientListOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    phoneNumbers?: PhoneNumberOrderByRelationAggregateInput
    broadcasts?: WhatsAppBroadcastOrderByRelationAggregateInput
    clients?: ClientOrderByRelationAggregateInput
  }

  export type ClientListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientListWhereInput | ClientListWhereInput[]
    OR?: ClientListWhereInput[]
    NOT?: ClientListWhereInput | ClientListWhereInput[]
    name?: StringFilter<"ClientList"> | string
    description?: StringNullableFilter<"ClientList"> | string | null
    userId?: StringFilter<"ClientList"> | string
    createdAt?: DateTimeFilter<"ClientList"> | Date | string
    updatedAt?: DateTimeFilter<"ClientList"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    phoneNumbers?: PhoneNumberListRelationFilter
    broadcasts?: WhatsAppBroadcastListRelationFilter
    clients?: ClientListRelationFilter
  }, "id">

  export type ClientListOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientListCountOrderByAggregateInput
    _max?: ClientListMaxOrderByAggregateInput
    _min?: ClientListMinOrderByAggregateInput
  }

  export type ClientListScalarWhereWithAggregatesInput = {
    AND?: ClientListScalarWhereWithAggregatesInput | ClientListScalarWhereWithAggregatesInput[]
    OR?: ClientListScalarWhereWithAggregatesInput[]
    NOT?: ClientListScalarWhereWithAggregatesInput | ClientListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClientList"> | string
    name?: StringWithAggregatesFilter<"ClientList"> | string
    description?: StringNullableWithAggregatesFilter<"ClientList"> | string | null
    userId?: StringWithAggregatesFilter<"ClientList"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ClientList"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ClientList"> | Date | string
  }

  export type PhoneNumberWhereInput = {
    AND?: PhoneNumberWhereInput | PhoneNumberWhereInput[]
    OR?: PhoneNumberWhereInput[]
    NOT?: PhoneNumberWhereInput | PhoneNumberWhereInput[]
    id?: StringFilter<"PhoneNumber"> | string
    phone?: StringFilter<"PhoneNumber"> | string
    clientListId?: StringFilter<"PhoneNumber"> | string
    createdAt?: DateTimeFilter<"PhoneNumber"> | Date | string
    updatedAt?: DateTimeFilter<"PhoneNumber"> | Date | string
    clientList?: XOR<ClientListScalarRelationFilter, ClientListWhereInput>
  }

  export type PhoneNumberOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrder
    clientListId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientList?: ClientListOrderByWithRelationInput
  }

  export type PhoneNumberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PhoneNumberWhereInput | PhoneNumberWhereInput[]
    OR?: PhoneNumberWhereInput[]
    NOT?: PhoneNumberWhereInput | PhoneNumberWhereInput[]
    phone?: StringFilter<"PhoneNumber"> | string
    clientListId?: StringFilter<"PhoneNumber"> | string
    createdAt?: DateTimeFilter<"PhoneNumber"> | Date | string
    updatedAt?: DateTimeFilter<"PhoneNumber"> | Date | string
    clientList?: XOR<ClientListScalarRelationFilter, ClientListWhereInput>
  }, "id">

  export type PhoneNumberOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrder
    clientListId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PhoneNumberCountOrderByAggregateInput
    _max?: PhoneNumberMaxOrderByAggregateInput
    _min?: PhoneNumberMinOrderByAggregateInput
  }

  export type PhoneNumberScalarWhereWithAggregatesInput = {
    AND?: PhoneNumberScalarWhereWithAggregatesInput | PhoneNumberScalarWhereWithAggregatesInput[]
    OR?: PhoneNumberScalarWhereWithAggregatesInput[]
    NOT?: PhoneNumberScalarWhereWithAggregatesInput | PhoneNumberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PhoneNumber"> | string
    phone?: StringWithAggregatesFilter<"PhoneNumber"> | string
    clientListId?: StringWithAggregatesFilter<"PhoneNumber"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PhoneNumber"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PhoneNumber"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    name?: StringNullableFilter<"Client"> | string | null
    phoneNumber?: StringFilter<"Client"> | string
    tags?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    lists?: ClientListListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lists?: ClientListOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phoneNumber?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringNullableFilter<"Client"> | string | null
    tags?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    lists?: ClientListListRelationFilter
  }, "id" | "phoneNumber">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    name?: StringNullableWithAggregatesFilter<"Client"> | string | null
    phoneNumber?: StringWithAggregatesFilter<"Client"> | string
    tags?: StringWithAggregatesFilter<"Client"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type AssistantSettingsWhereInput = {
    AND?: AssistantSettingsWhereInput | AssistantSettingsWhereInput[]
    OR?: AssistantSettingsWhereInput[]
    NOT?: AssistantSettingsWhereInput | AssistantSettingsWhereInput[]
    id?: StringFilter<"AssistantSettings"> | string
    name?: StringFilter<"AssistantSettings"> | string
    model?: StringFilter<"AssistantSettings"> | string
    openAiKey?: StringFilter<"AssistantSettings"> | string
    assistantId?: StringNullableFilter<"AssistantSettings"> | string | null
    isConfigured?: BoolFilter<"AssistantSettings"> | boolean
    status?: StringFilter<"AssistantSettings"> | string
    errorMessage?: StringNullableFilter<"AssistantSettings"> | string | null
    createdAt?: DateTimeFilter<"AssistantSettings"> | Date | string
    updatedAt?: DateTimeFilter<"AssistantSettings"> | Date | string
    accountId?: StringFilter<"AssistantSettings"> | string
    account?: XOR<WhatsAppAccountScalarRelationFilter, WhatsAppAccountWhereInput>
  }

  export type AssistantSettingsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    openAiKey?: SortOrder
    assistantId?: SortOrderInput | SortOrder
    isConfigured?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    account?: WhatsAppAccountOrderByWithRelationInput
  }

  export type AssistantSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    accountId?: string
    AND?: AssistantSettingsWhereInput | AssistantSettingsWhereInput[]
    OR?: AssistantSettingsWhereInput[]
    NOT?: AssistantSettingsWhereInput | AssistantSettingsWhereInput[]
    name?: StringFilter<"AssistantSettings"> | string
    model?: StringFilter<"AssistantSettings"> | string
    openAiKey?: StringFilter<"AssistantSettings"> | string
    assistantId?: StringNullableFilter<"AssistantSettings"> | string | null
    isConfigured?: BoolFilter<"AssistantSettings"> | boolean
    status?: StringFilter<"AssistantSettings"> | string
    errorMessage?: StringNullableFilter<"AssistantSettings"> | string | null
    createdAt?: DateTimeFilter<"AssistantSettings"> | Date | string
    updatedAt?: DateTimeFilter<"AssistantSettings"> | Date | string
    account?: XOR<WhatsAppAccountScalarRelationFilter, WhatsAppAccountWhereInput>
  }, "id" | "accountId">

  export type AssistantSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    openAiKey?: SortOrder
    assistantId?: SortOrderInput | SortOrder
    isConfigured?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    _count?: AssistantSettingsCountOrderByAggregateInput
    _max?: AssistantSettingsMaxOrderByAggregateInput
    _min?: AssistantSettingsMinOrderByAggregateInput
  }

  export type AssistantSettingsScalarWhereWithAggregatesInput = {
    AND?: AssistantSettingsScalarWhereWithAggregatesInput | AssistantSettingsScalarWhereWithAggregatesInput[]
    OR?: AssistantSettingsScalarWhereWithAggregatesInput[]
    NOT?: AssistantSettingsScalarWhereWithAggregatesInput | AssistantSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AssistantSettings"> | string
    name?: StringWithAggregatesFilter<"AssistantSettings"> | string
    model?: StringWithAggregatesFilter<"AssistantSettings"> | string
    openAiKey?: StringWithAggregatesFilter<"AssistantSettings"> | string
    assistantId?: StringNullableWithAggregatesFilter<"AssistantSettings"> | string | null
    isConfigured?: BoolWithAggregatesFilter<"AssistantSettings"> | boolean
    status?: StringWithAggregatesFilter<"AssistantSettings"> | string
    errorMessage?: StringNullableWithAggregatesFilter<"AssistantSettings"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AssistantSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AssistantSettings"> | Date | string
    accountId?: StringWithAggregatesFilter<"AssistantSettings"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientLists?: ClientListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientLists?: ClientListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientLists?: ClientListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientLists?: ClientListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateInput = {
    id?: string
    userId: string
    content: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    userId: string
    content: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    userId: string
    content: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    account: WhatsAppAccountCreateNestedOneWithoutGroupsInput
  }

  export type ChatGroupUncheckedCreateInput = {
    id?: string
    name: string
    accountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: WhatsAppAccountUpdateOneRequiredWithoutGroupsNestedInput
  }

  export type ChatGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupCreateManyInput = {
    id?: string
    name: string
    accountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsAppAccountCreateInput = {
    id?: string
    name: string
    phoneNumber: string
    isActive?: boolean
    verified?: boolean
    phoneNumberId: string
    businessAccountId: string
    accessToken: string
    webhookSecret?: string | null
    maxConcurrentMessages?: number
    retryAttempts?: number
    gptModel?: string
    maxTokens?: number
    temperature?: number
    totalMessages?: number
    avgResponseTime?: number
    lastActive?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assistantSettings?: AssistantSettingsCreateNestedOneWithoutAccountInput
    groups?: ChatGroupCreateNestedManyWithoutAccountInput
    templates?: MessageTemplateCreateNestedManyWithoutAccountInput
    broadcasts?: WhatsAppBroadcastCreateNestedManyWithoutAccountInput
    chats?: WhatsAppChatCreateNestedManyWithoutAccountInput
    messages?: WhatsAppMessageCreateNestedManyWithoutAccountInput
  }

  export type WhatsAppAccountUncheckedCreateInput = {
    id?: string
    name: string
    phoneNumber: string
    isActive?: boolean
    verified?: boolean
    phoneNumberId: string
    businessAccountId: string
    accessToken: string
    webhookSecret?: string | null
    maxConcurrentMessages?: number
    retryAttempts?: number
    gptModel?: string
    maxTokens?: number
    temperature?: number
    totalMessages?: number
    avgResponseTime?: number
    lastActive?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assistantSettings?: AssistantSettingsUncheckedCreateNestedOneWithoutAccountInput
    groups?: ChatGroupUncheckedCreateNestedManyWithoutAccountInput
    templates?: MessageTemplateUncheckedCreateNestedManyWithoutAccountInput
    broadcasts?: WhatsAppBroadcastUncheckedCreateNestedManyWithoutAccountInput
    chats?: WhatsAppChatUncheckedCreateNestedManyWithoutAccountInput
    messages?: WhatsAppMessageUncheckedCreateNestedManyWithoutAccountInput
  }

  export type WhatsAppAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    businessAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    webhookSecret?: NullableStringFieldUpdateOperationsInput | string | null
    maxConcurrentMessages?: IntFieldUpdateOperationsInput | number
    retryAttempts?: IntFieldUpdateOperationsInput | number
    gptModel?: StringFieldUpdateOperationsInput | string
    maxTokens?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    totalMessages?: IntFieldUpdateOperationsInput | number
    avgResponseTime?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assistantSettings?: AssistantSettingsUpdateOneWithoutAccountNestedInput
    groups?: ChatGroupUpdateManyWithoutAccountNestedInput
    templates?: MessageTemplateUpdateManyWithoutAccountNestedInput
    broadcasts?: WhatsAppBroadcastUpdateManyWithoutAccountNestedInput
    chats?: WhatsAppChatUpdateManyWithoutAccountNestedInput
    messages?: WhatsAppMessageUpdateManyWithoutAccountNestedInput
  }

  export type WhatsAppAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    businessAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    webhookSecret?: NullableStringFieldUpdateOperationsInput | string | null
    maxConcurrentMessages?: IntFieldUpdateOperationsInput | number
    retryAttempts?: IntFieldUpdateOperationsInput | number
    gptModel?: StringFieldUpdateOperationsInput | string
    maxTokens?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    totalMessages?: IntFieldUpdateOperationsInput | number
    avgResponseTime?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assistantSettings?: AssistantSettingsUncheckedUpdateOneWithoutAccountNestedInput
    groups?: ChatGroupUncheckedUpdateManyWithoutAccountNestedInput
    templates?: MessageTemplateUncheckedUpdateManyWithoutAccountNestedInput
    broadcasts?: WhatsAppBroadcastUncheckedUpdateManyWithoutAccountNestedInput
    chats?: WhatsAppChatUncheckedUpdateManyWithoutAccountNestedInput
    messages?: WhatsAppMessageUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type WhatsAppAccountCreateManyInput = {
    id?: string
    name: string
    phoneNumber: string
    isActive?: boolean
    verified?: boolean
    phoneNumberId: string
    businessAccountId: string
    accessToken: string
    webhookSecret?: string | null
    maxConcurrentMessages?: number
    retryAttempts?: number
    gptModel?: string
    maxTokens?: number
    temperature?: number
    totalMessages?: number
    avgResponseTime?: number
    lastActive?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhatsAppAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    businessAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    webhookSecret?: NullableStringFieldUpdateOperationsInput | string | null
    maxConcurrentMessages?: IntFieldUpdateOperationsInput | number
    retryAttempts?: IntFieldUpdateOperationsInput | number
    gptModel?: StringFieldUpdateOperationsInput | string
    maxTokens?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    totalMessages?: IntFieldUpdateOperationsInput | number
    avgResponseTime?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsAppAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    businessAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    webhookSecret?: NullableStringFieldUpdateOperationsInput | string | null
    maxConcurrentMessages?: IntFieldUpdateOperationsInput | number
    retryAttempts?: IntFieldUpdateOperationsInput | number
    gptModel?: StringFieldUpdateOperationsInput | string
    maxTokens?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    totalMessages?: IntFieldUpdateOperationsInput | number
    avgResponseTime?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsAppMessageCreateInput = {
    id?: string
    whatsappId?: string | null
    from: string
    to: string
    type?: string
    content: string
    timestamp?: Date | string
    status?: string
    errorData?: string | null
    isAssistant?: boolean
    chat: WhatsAppChatCreateNestedOneWithoutMessagesInput
    account: WhatsAppAccountCreateNestedOneWithoutMessagesInput
  }

  export type WhatsAppMessageUncheckedCreateInput = {
    id?: string
    whatsappId?: string | null
    from: string
    to: string
    type?: string
    content: string
    timestamp?: Date | string
    status?: string
    errorData?: string | null
    accountId: string
    chatId: string
    isAssistant?: boolean
  }

  export type WhatsAppMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    whatsappId?: NullableStringFieldUpdateOperationsInput | string | null
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    errorData?: NullableStringFieldUpdateOperationsInput | string | null
    isAssistant?: BoolFieldUpdateOperationsInput | boolean
    chat?: WhatsAppChatUpdateOneRequiredWithoutMessagesNestedInput
    account?: WhatsAppAccountUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type WhatsAppMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    whatsappId?: NullableStringFieldUpdateOperationsInput | string | null
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    errorData?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    isAssistant?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WhatsAppMessageCreateManyInput = {
    id?: string
    whatsappId?: string | null
    from: string
    to: string
    type?: string
    content: string
    timestamp?: Date | string
    status?: string
    errorData?: string | null
    accountId: string
    chatId: string
    isAssistant?: boolean
  }

  export type WhatsAppMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    whatsappId?: NullableStringFieldUpdateOperationsInput | string | null
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    errorData?: NullableStringFieldUpdateOperationsInput | string | null
    isAssistant?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WhatsAppMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    whatsappId?: NullableStringFieldUpdateOperationsInput | string | null
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    errorData?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    isAssistant?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WhatsAppChatCreateInput = {
    id?: string
    phoneNumber: string
    displayName?: string | null
    lastMessageAt?: Date | string
    unreadCount?: number
    assistantEnabled?: boolean
    threadId?: string | null
    group?: string | null
    account: WhatsAppAccountCreateNestedOneWithoutChatsInput
    messages?: WhatsAppMessageCreateNestedManyWithoutChatInput
  }

  export type WhatsAppChatUncheckedCreateInput = {
    id?: string
    phoneNumber: string
    displayName?: string | null
    lastMessageAt?: Date | string
    unreadCount?: number
    accountId: string
    assistantEnabled?: boolean
    threadId?: string | null
    group?: string | null
    messages?: WhatsAppMessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type WhatsAppChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unreadCount?: IntFieldUpdateOperationsInput | number
    assistantEnabled?: BoolFieldUpdateOperationsInput | boolean
    threadId?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
    account?: WhatsAppAccountUpdateOneRequiredWithoutChatsNestedInput
    messages?: WhatsAppMessageUpdateManyWithoutChatNestedInput
  }

  export type WhatsAppChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unreadCount?: IntFieldUpdateOperationsInput | number
    accountId?: StringFieldUpdateOperationsInput | string
    assistantEnabled?: BoolFieldUpdateOperationsInput | boolean
    threadId?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: WhatsAppMessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type WhatsAppChatCreateManyInput = {
    id?: string
    phoneNumber: string
    displayName?: string | null
    lastMessageAt?: Date | string
    unreadCount?: number
    accountId: string
    assistantEnabled?: boolean
    threadId?: string | null
    group?: string | null
  }

  export type WhatsAppChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unreadCount?: IntFieldUpdateOperationsInput | number
    assistantEnabled?: BoolFieldUpdateOperationsInput | boolean
    threadId?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WhatsAppChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unreadCount?: IntFieldUpdateOperationsInput | number
    accountId?: StringFieldUpdateOperationsInput | string
    assistantEnabled?: BoolFieldUpdateOperationsInput | boolean
    threadId?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageTemplateCreateInput = {
    id?: string
    name: string
    category: string
    language: string
    status?: string
    components: JsonNullValueInput | InputJsonValue
    whatsappId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rejectionReason?: string | null
    account: WhatsAppAccountCreateNestedOneWithoutTemplatesInput
    broadcasts?: WhatsAppBroadcastCreateNestedManyWithoutTemplateInput
  }

  export type MessageTemplateUncheckedCreateInput = {
    id?: string
    name: string
    category: string
    language: string
    status?: string
    components: JsonNullValueInput | InputJsonValue
    whatsappId?: string | null
    accountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rejectionReason?: string | null
    broadcasts?: WhatsAppBroadcastUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type MessageTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    components?: JsonNullValueInput | InputJsonValue
    whatsappId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    account?: WhatsAppAccountUpdateOneRequiredWithoutTemplatesNestedInput
    broadcasts?: WhatsAppBroadcastUpdateManyWithoutTemplateNestedInput
  }

  export type MessageTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    components?: JsonNullValueInput | InputJsonValue
    whatsappId?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    broadcasts?: WhatsAppBroadcastUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type MessageTemplateCreateManyInput = {
    id?: string
    name: string
    category: string
    language: string
    status?: string
    components: JsonNullValueInput | InputJsonValue
    whatsappId?: string | null
    accountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rejectionReason?: string | null
  }

  export type MessageTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    components?: JsonNullValueInput | InputJsonValue
    whatsappId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    components?: JsonNullValueInput | InputJsonValue
    whatsappId?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WhatsAppBroadcastCreateInput = {
    id?: string
    name: string
    status?: string
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipients?: number
    sent?: number
    delivered?: number
    read?: number
    failed?: number
    templateParameters?: NullableJsonNullValueInput | InputJsonValue
    attachments?: BroadcastAttachmentCreateNestedManyWithoutBroadcastInput
    template: MessageTemplateCreateNestedOneWithoutBroadcastsInput
    clientList: ClientListCreateNestedOneWithoutBroadcastsInput
    account: WhatsAppAccountCreateNestedOneWithoutBroadcastsInput
  }

  export type WhatsAppBroadcastUncheckedCreateInput = {
    id?: string
    name: string
    status?: string
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipients?: number
    sent?: number
    delivered?: number
    read?: number
    failed?: number
    templateParameters?: NullableJsonNullValueInput | InputJsonValue
    accountId: string
    clientListId: string
    templateId: string
    attachments?: BroadcastAttachmentUncheckedCreateNestedManyWithoutBroadcastInput
  }

  export type WhatsAppBroadcastUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: IntFieldUpdateOperationsInput | number
    sent?: IntFieldUpdateOperationsInput | number
    delivered?: IntFieldUpdateOperationsInput | number
    read?: IntFieldUpdateOperationsInput | number
    failed?: IntFieldUpdateOperationsInput | number
    templateParameters?: NullableJsonNullValueInput | InputJsonValue
    attachments?: BroadcastAttachmentUpdateManyWithoutBroadcastNestedInput
    template?: MessageTemplateUpdateOneRequiredWithoutBroadcastsNestedInput
    clientList?: ClientListUpdateOneRequiredWithoutBroadcastsNestedInput
    account?: WhatsAppAccountUpdateOneRequiredWithoutBroadcastsNestedInput
  }

  export type WhatsAppBroadcastUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: IntFieldUpdateOperationsInput | number
    sent?: IntFieldUpdateOperationsInput | number
    delivered?: IntFieldUpdateOperationsInput | number
    read?: IntFieldUpdateOperationsInput | number
    failed?: IntFieldUpdateOperationsInput | number
    templateParameters?: NullableJsonNullValueInput | InputJsonValue
    accountId?: StringFieldUpdateOperationsInput | string
    clientListId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    attachments?: BroadcastAttachmentUncheckedUpdateManyWithoutBroadcastNestedInput
  }

  export type WhatsAppBroadcastCreateManyInput = {
    id?: string
    name: string
    status?: string
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipients?: number
    sent?: number
    delivered?: number
    read?: number
    failed?: number
    templateParameters?: NullableJsonNullValueInput | InputJsonValue
    accountId: string
    clientListId: string
    templateId: string
  }

  export type WhatsAppBroadcastUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: IntFieldUpdateOperationsInput | number
    sent?: IntFieldUpdateOperationsInput | number
    delivered?: IntFieldUpdateOperationsInput | number
    read?: IntFieldUpdateOperationsInput | number
    failed?: IntFieldUpdateOperationsInput | number
    templateParameters?: NullableJsonNullValueInput | InputJsonValue
  }

  export type WhatsAppBroadcastUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: IntFieldUpdateOperationsInput | number
    sent?: IntFieldUpdateOperationsInput | number
    delivered?: IntFieldUpdateOperationsInput | number
    read?: IntFieldUpdateOperationsInput | number
    failed?: IntFieldUpdateOperationsInput | number
    templateParameters?: NullableJsonNullValueInput | InputJsonValue
    accountId?: StringFieldUpdateOperationsInput | string
    clientListId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
  }

  export type BroadcastAttachmentCreateInput = {
    id?: string
    filename: string
    type: string
    url: string
    size: number
    createdAt?: Date | string
    broadcast: WhatsAppBroadcastCreateNestedOneWithoutAttachmentsInput
  }

  export type BroadcastAttachmentUncheckedCreateInput = {
    id?: string
    filename: string
    type: string
    url: string
    size: number
    createdAt?: Date | string
    broadcastId: string
  }

  export type BroadcastAttachmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    broadcast?: WhatsAppBroadcastUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type BroadcastAttachmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    broadcastId?: StringFieldUpdateOperationsInput | string
  }

  export type BroadcastAttachmentCreateManyInput = {
    id?: string
    filename: string
    type: string
    url: string
    size: number
    createdAt?: Date | string
    broadcastId: string
  }

  export type BroadcastAttachmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BroadcastAttachmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    broadcastId?: StringFieldUpdateOperationsInput | string
  }

  export type ClientListCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClientListsInput
    phoneNumbers?: PhoneNumberCreateNestedManyWithoutClientListInput
    broadcasts?: WhatsAppBroadcastCreateNestedManyWithoutClientListInput
    clients?: ClientCreateNestedManyWithoutListsInput
  }

  export type ClientListUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    phoneNumbers?: PhoneNumberUncheckedCreateNestedManyWithoutClientListInput
    broadcasts?: WhatsAppBroadcastUncheckedCreateNestedManyWithoutClientListInput
    clients?: ClientUncheckedCreateNestedManyWithoutListsInput
  }

  export type ClientListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClientListsNestedInput
    phoneNumbers?: PhoneNumberUpdateManyWithoutClientListNestedInput
    broadcasts?: WhatsAppBroadcastUpdateManyWithoutClientListNestedInput
    clients?: ClientUpdateManyWithoutListsNestedInput
  }

  export type ClientListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumbers?: PhoneNumberUncheckedUpdateManyWithoutClientListNestedInput
    broadcasts?: WhatsAppBroadcastUncheckedUpdateManyWithoutClientListNestedInput
    clients?: ClientUncheckedUpdateManyWithoutListsNestedInput
  }

  export type ClientListCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneNumberCreateInput = {
    id?: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientList: ClientListCreateNestedOneWithoutPhoneNumbersInput
  }

  export type PhoneNumberUncheckedCreateInput = {
    id?: string
    phone: string
    clientListId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhoneNumberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientList?: ClientListUpdateOneRequiredWithoutPhoneNumbersNestedInput
  }

  export type PhoneNumberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    clientListId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneNumberCreateManyInput = {
    id?: string
    phone: string
    clientListId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhoneNumberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneNumberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    clientListId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    id?: string
    name?: string | null
    phoneNumber: string
    tags: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lists?: ClientListCreateNestedManyWithoutClientsInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    name?: string | null
    phoneNumber: string
    tags: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lists?: ClientListUncheckedCreateNestedManyWithoutClientsInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ClientListUpdateManyWithoutClientsNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ClientListUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    name?: string | null
    phoneNumber: string
    tags: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssistantSettingsCreateInput = {
    id?: string
    name?: string
    model?: string
    openAiKey?: string
    assistantId?: string | null
    isConfigured?: boolean
    status?: string
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account: WhatsAppAccountCreateNestedOneWithoutAssistantSettingsInput
  }

  export type AssistantSettingsUncheckedCreateInput = {
    id?: string
    name?: string
    model?: string
    openAiKey?: string
    assistantId?: string | null
    isConfigured?: boolean
    status?: string
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId: string
  }

  export type AssistantSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    openAiKey?: StringFieldUpdateOperationsInput | string
    assistantId?: NullableStringFieldUpdateOperationsInput | string | null
    isConfigured?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: WhatsAppAccountUpdateOneRequiredWithoutAssistantSettingsNestedInput
  }

  export type AssistantSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    openAiKey?: StringFieldUpdateOperationsInput | string
    assistantId?: NullableStringFieldUpdateOperationsInput | string | null
    isConfigured?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type AssistantSettingsCreateManyInput = {
    id?: string
    name?: string
    model?: string
    openAiKey?: string
    assistantId?: string | null
    isConfigured?: boolean
    status?: string
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId: string
  }

  export type AssistantSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    openAiKey?: StringFieldUpdateOperationsInput | string
    assistantId?: NullableStringFieldUpdateOperationsInput | string | null
    isConfigured?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssistantSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    openAiKey?: StringFieldUpdateOperationsInput | string
    assistantId?: NullableStringFieldUpdateOperationsInput | string | null
    isConfigured?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ClientListListRelationFilter = {
    every?: ClientListWhereInput
    some?: ClientListWhereInput
    none?: ClientListWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClientListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsAppAccountScalarRelationFilter = {
    is?: WhatsAppAccountWhereInput
    isNot?: WhatsAppAccountWhereInput
  }

  export type ChatGroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatGroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AssistantSettingsNullableScalarRelationFilter = {
    is?: AssistantSettingsWhereInput | null
    isNot?: AssistantSettingsWhereInput | null
  }

  export type ChatGroupListRelationFilter = {
    every?: ChatGroupWhereInput
    some?: ChatGroupWhereInput
    none?: ChatGroupWhereInput
  }

  export type MessageTemplateListRelationFilter = {
    every?: MessageTemplateWhereInput
    some?: MessageTemplateWhereInput
    none?: MessageTemplateWhereInput
  }

  export type WhatsAppBroadcastListRelationFilter = {
    every?: WhatsAppBroadcastWhereInput
    some?: WhatsAppBroadcastWhereInput
    none?: WhatsAppBroadcastWhereInput
  }

  export type WhatsAppChatListRelationFilter = {
    every?: WhatsAppChatWhereInput
    some?: WhatsAppChatWhereInput
    none?: WhatsAppChatWhereInput
  }

  export type WhatsAppMessageListRelationFilter = {
    every?: WhatsAppMessageWhereInput
    some?: WhatsAppMessageWhereInput
    none?: WhatsAppMessageWhereInput
  }

  export type ChatGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageTemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WhatsAppBroadcastOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WhatsAppChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WhatsAppMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WhatsAppAccountCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrder
    verified?: SortOrder
    phoneNumberId?: SortOrder
    businessAccountId?: SortOrder
    accessToken?: SortOrder
    webhookSecret?: SortOrder
    maxConcurrentMessages?: SortOrder
    retryAttempts?: SortOrder
    gptModel?: SortOrder
    maxTokens?: SortOrder
    temperature?: SortOrder
    totalMessages?: SortOrder
    avgResponseTime?: SortOrder
    lastActive?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsAppAccountAvgOrderByAggregateInput = {
    maxConcurrentMessages?: SortOrder
    retryAttempts?: SortOrder
    maxTokens?: SortOrder
    temperature?: SortOrder
    totalMessages?: SortOrder
    avgResponseTime?: SortOrder
  }

  export type WhatsAppAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrder
    verified?: SortOrder
    phoneNumberId?: SortOrder
    businessAccountId?: SortOrder
    accessToken?: SortOrder
    webhookSecret?: SortOrder
    maxConcurrentMessages?: SortOrder
    retryAttempts?: SortOrder
    gptModel?: SortOrder
    maxTokens?: SortOrder
    temperature?: SortOrder
    totalMessages?: SortOrder
    avgResponseTime?: SortOrder
    lastActive?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsAppAccountMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrder
    verified?: SortOrder
    phoneNumberId?: SortOrder
    businessAccountId?: SortOrder
    accessToken?: SortOrder
    webhookSecret?: SortOrder
    maxConcurrentMessages?: SortOrder
    retryAttempts?: SortOrder
    gptModel?: SortOrder
    maxTokens?: SortOrder
    temperature?: SortOrder
    totalMessages?: SortOrder
    avgResponseTime?: SortOrder
    lastActive?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsAppAccountSumOrderByAggregateInput = {
    maxConcurrentMessages?: SortOrder
    retryAttempts?: SortOrder
    maxTokens?: SortOrder
    temperature?: SortOrder
    totalMessages?: SortOrder
    avgResponseTime?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type WhatsAppChatScalarRelationFilter = {
    is?: WhatsAppChatWhereInput
    isNot?: WhatsAppChatWhereInput
  }

  export type WhatsAppMessageCountOrderByAggregateInput = {
    id?: SortOrder
    whatsappId?: SortOrder
    from?: SortOrder
    to?: SortOrder
    type?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    errorData?: SortOrder
    accountId?: SortOrder
    chatId?: SortOrder
    isAssistant?: SortOrder
  }

  export type WhatsAppMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    whatsappId?: SortOrder
    from?: SortOrder
    to?: SortOrder
    type?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    errorData?: SortOrder
    accountId?: SortOrder
    chatId?: SortOrder
    isAssistant?: SortOrder
  }

  export type WhatsAppMessageMinOrderByAggregateInput = {
    id?: SortOrder
    whatsappId?: SortOrder
    from?: SortOrder
    to?: SortOrder
    type?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    errorData?: SortOrder
    accountId?: SortOrder
    chatId?: SortOrder
    isAssistant?: SortOrder
  }

  export type WhatsAppChatPhoneNumberAccountIdCompoundUniqueInput = {
    phoneNumber: string
    accountId: string
  }

  export type WhatsAppChatCountOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    displayName?: SortOrder
    lastMessageAt?: SortOrder
    unreadCount?: SortOrder
    accountId?: SortOrder
    assistantEnabled?: SortOrder
    threadId?: SortOrder
    group?: SortOrder
  }

  export type WhatsAppChatAvgOrderByAggregateInput = {
    unreadCount?: SortOrder
  }

  export type WhatsAppChatMaxOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    displayName?: SortOrder
    lastMessageAt?: SortOrder
    unreadCount?: SortOrder
    accountId?: SortOrder
    assistantEnabled?: SortOrder
    threadId?: SortOrder
    group?: SortOrder
  }

  export type WhatsAppChatMinOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    displayName?: SortOrder
    lastMessageAt?: SortOrder
    unreadCount?: SortOrder
    accountId?: SortOrder
    assistantEnabled?: SortOrder
    threadId?: SortOrder
    group?: SortOrder
  }

  export type WhatsAppChatSumOrderByAggregateInput = {
    unreadCount?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type MessageTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    language?: SortOrder
    status?: SortOrder
    components?: SortOrder
    whatsappId?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rejectionReason?: SortOrder
  }

  export type MessageTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    language?: SortOrder
    status?: SortOrder
    whatsappId?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rejectionReason?: SortOrder
  }

  export type MessageTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    language?: SortOrder
    status?: SortOrder
    whatsappId?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rejectionReason?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BroadcastAttachmentListRelationFilter = {
    every?: BroadcastAttachmentWhereInput
    some?: BroadcastAttachmentWhereInput
    none?: BroadcastAttachmentWhereInput
  }

  export type MessageTemplateScalarRelationFilter = {
    is?: MessageTemplateWhereInput
    isNot?: MessageTemplateWhereInput
  }

  export type ClientListScalarRelationFilter = {
    is?: ClientListWhereInput
    isNot?: ClientListWhereInput
  }

  export type BroadcastAttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WhatsAppBroadcastCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recipients?: SortOrder
    sent?: SortOrder
    delivered?: SortOrder
    read?: SortOrder
    failed?: SortOrder
    templateParameters?: SortOrder
    accountId?: SortOrder
    clientListId?: SortOrder
    templateId?: SortOrder
  }

  export type WhatsAppBroadcastAvgOrderByAggregateInput = {
    recipients?: SortOrder
    sent?: SortOrder
    delivered?: SortOrder
    read?: SortOrder
    failed?: SortOrder
  }

  export type WhatsAppBroadcastMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recipients?: SortOrder
    sent?: SortOrder
    delivered?: SortOrder
    read?: SortOrder
    failed?: SortOrder
    accountId?: SortOrder
    clientListId?: SortOrder
    templateId?: SortOrder
  }

  export type WhatsAppBroadcastMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recipients?: SortOrder
    sent?: SortOrder
    delivered?: SortOrder
    read?: SortOrder
    failed?: SortOrder
    accountId?: SortOrder
    clientListId?: SortOrder
    templateId?: SortOrder
  }

  export type WhatsAppBroadcastSumOrderByAggregateInput = {
    recipients?: SortOrder
    sent?: SortOrder
    delivered?: SortOrder
    read?: SortOrder
    failed?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type WhatsAppBroadcastScalarRelationFilter = {
    is?: WhatsAppBroadcastWhereInput
    isNot?: WhatsAppBroadcastWhereInput
  }

  export type BroadcastAttachmentCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    type?: SortOrder
    url?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    broadcastId?: SortOrder
  }

  export type BroadcastAttachmentAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type BroadcastAttachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    type?: SortOrder
    url?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    broadcastId?: SortOrder
  }

  export type BroadcastAttachmentMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    type?: SortOrder
    url?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    broadcastId?: SortOrder
  }

  export type BroadcastAttachmentSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PhoneNumberListRelationFilter = {
    every?: PhoneNumberWhereInput
    some?: PhoneNumberWhereInput
    none?: PhoneNumberWhereInput
  }

  export type ClientListRelationFilter = {
    every?: ClientWhereInput
    some?: ClientWhereInput
    none?: ClientWhereInput
  }

  export type PhoneNumberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientListCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientListMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientListMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhoneNumberCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    clientListId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhoneNumberMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    clientListId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhoneNumberMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    clientListId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssistantSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    openAiKey?: SortOrder
    assistantId?: SortOrder
    isConfigured?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
  }

  export type AssistantSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    openAiKey?: SortOrder
    assistantId?: SortOrder
    isConfigured?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
  }

  export type AssistantSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    openAiKey?: SortOrder
    assistantId?: SortOrder
    isConfigured?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
  }

  export type ClientListCreateNestedManyWithoutUserInput = {
    create?: XOR<ClientListCreateWithoutUserInput, ClientListUncheckedCreateWithoutUserInput> | ClientListCreateWithoutUserInput[] | ClientListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientListCreateOrConnectWithoutUserInput | ClientListCreateOrConnectWithoutUserInput[]
    createMany?: ClientListCreateManyUserInputEnvelope
    connect?: ClientListWhereUniqueInput | ClientListWhereUniqueInput[]
  }

  export type ClientListUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ClientListCreateWithoutUserInput, ClientListUncheckedCreateWithoutUserInput> | ClientListCreateWithoutUserInput[] | ClientListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientListCreateOrConnectWithoutUserInput | ClientListCreateOrConnectWithoutUserInput[]
    createMany?: ClientListCreateManyUserInputEnvelope
    connect?: ClientListWhereUniqueInput | ClientListWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClientListUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClientListCreateWithoutUserInput, ClientListUncheckedCreateWithoutUserInput> | ClientListCreateWithoutUserInput[] | ClientListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientListCreateOrConnectWithoutUserInput | ClientListCreateOrConnectWithoutUserInput[]
    upsert?: ClientListUpsertWithWhereUniqueWithoutUserInput | ClientListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClientListCreateManyUserInputEnvelope
    set?: ClientListWhereUniqueInput | ClientListWhereUniqueInput[]
    disconnect?: ClientListWhereUniqueInput | ClientListWhereUniqueInput[]
    delete?: ClientListWhereUniqueInput | ClientListWhereUniqueInput[]
    connect?: ClientListWhereUniqueInput | ClientListWhereUniqueInput[]
    update?: ClientListUpdateWithWhereUniqueWithoutUserInput | ClientListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClientListUpdateManyWithWhereWithoutUserInput | ClientListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClientListScalarWhereInput | ClientListScalarWhereInput[]
  }

  export type ClientListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClientListCreateWithoutUserInput, ClientListUncheckedCreateWithoutUserInput> | ClientListCreateWithoutUserInput[] | ClientListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientListCreateOrConnectWithoutUserInput | ClientListCreateOrConnectWithoutUserInput[]
    upsert?: ClientListUpsertWithWhereUniqueWithoutUserInput | ClientListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClientListCreateManyUserInputEnvelope
    set?: ClientListWhereUniqueInput | ClientListWhereUniqueInput[]
    disconnect?: ClientListWhereUniqueInput | ClientListWhereUniqueInput[]
    delete?: ClientListWhereUniqueInput | ClientListWhereUniqueInput[]
    connect?: ClientListWhereUniqueInput | ClientListWhereUniqueInput[]
    update?: ClientListUpdateWithWhereUniqueWithoutUserInput | ClientListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClientListUpdateManyWithWhereWithoutUserInput | ClientListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClientListScalarWhereInput | ClientListScalarWhereInput[]
  }

  export type WhatsAppAccountCreateNestedOneWithoutGroupsInput = {
    create?: XOR<WhatsAppAccountCreateWithoutGroupsInput, WhatsAppAccountUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: WhatsAppAccountCreateOrConnectWithoutGroupsInput
    connect?: WhatsAppAccountWhereUniqueInput
  }

  export type WhatsAppAccountUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<WhatsAppAccountCreateWithoutGroupsInput, WhatsAppAccountUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: WhatsAppAccountCreateOrConnectWithoutGroupsInput
    upsert?: WhatsAppAccountUpsertWithoutGroupsInput
    connect?: WhatsAppAccountWhereUniqueInput
    update?: XOR<XOR<WhatsAppAccountUpdateToOneWithWhereWithoutGroupsInput, WhatsAppAccountUpdateWithoutGroupsInput>, WhatsAppAccountUncheckedUpdateWithoutGroupsInput>
  }

  export type AssistantSettingsCreateNestedOneWithoutAccountInput = {
    create?: XOR<AssistantSettingsCreateWithoutAccountInput, AssistantSettingsUncheckedCreateWithoutAccountInput>
    connectOrCreate?: AssistantSettingsCreateOrConnectWithoutAccountInput
    connect?: AssistantSettingsWhereUniqueInput
  }

  export type ChatGroupCreateNestedManyWithoutAccountInput = {
    create?: XOR<ChatGroupCreateWithoutAccountInput, ChatGroupUncheckedCreateWithoutAccountInput> | ChatGroupCreateWithoutAccountInput[] | ChatGroupUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ChatGroupCreateOrConnectWithoutAccountInput | ChatGroupCreateOrConnectWithoutAccountInput[]
    createMany?: ChatGroupCreateManyAccountInputEnvelope
    connect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
  }

  export type MessageTemplateCreateNestedManyWithoutAccountInput = {
    create?: XOR<MessageTemplateCreateWithoutAccountInput, MessageTemplateUncheckedCreateWithoutAccountInput> | MessageTemplateCreateWithoutAccountInput[] | MessageTemplateUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: MessageTemplateCreateOrConnectWithoutAccountInput | MessageTemplateCreateOrConnectWithoutAccountInput[]
    createMany?: MessageTemplateCreateManyAccountInputEnvelope
    connect?: MessageTemplateWhereUniqueInput | MessageTemplateWhereUniqueInput[]
  }

  export type WhatsAppBroadcastCreateNestedManyWithoutAccountInput = {
    create?: XOR<WhatsAppBroadcastCreateWithoutAccountInput, WhatsAppBroadcastUncheckedCreateWithoutAccountInput> | WhatsAppBroadcastCreateWithoutAccountInput[] | WhatsAppBroadcastUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: WhatsAppBroadcastCreateOrConnectWithoutAccountInput | WhatsAppBroadcastCreateOrConnectWithoutAccountInput[]
    createMany?: WhatsAppBroadcastCreateManyAccountInputEnvelope
    connect?: WhatsAppBroadcastWhereUniqueInput | WhatsAppBroadcastWhereUniqueInput[]
  }

  export type WhatsAppChatCreateNestedManyWithoutAccountInput = {
    create?: XOR<WhatsAppChatCreateWithoutAccountInput, WhatsAppChatUncheckedCreateWithoutAccountInput> | WhatsAppChatCreateWithoutAccountInput[] | WhatsAppChatUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: WhatsAppChatCreateOrConnectWithoutAccountInput | WhatsAppChatCreateOrConnectWithoutAccountInput[]
    createMany?: WhatsAppChatCreateManyAccountInputEnvelope
    connect?: WhatsAppChatWhereUniqueInput | WhatsAppChatWhereUniqueInput[]
  }

  export type WhatsAppMessageCreateNestedManyWithoutAccountInput = {
    create?: XOR<WhatsAppMessageCreateWithoutAccountInput, WhatsAppMessageUncheckedCreateWithoutAccountInput> | WhatsAppMessageCreateWithoutAccountInput[] | WhatsAppMessageUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: WhatsAppMessageCreateOrConnectWithoutAccountInput | WhatsAppMessageCreateOrConnectWithoutAccountInput[]
    createMany?: WhatsAppMessageCreateManyAccountInputEnvelope
    connect?: WhatsAppMessageWhereUniqueInput | WhatsAppMessageWhereUniqueInput[]
  }

  export type AssistantSettingsUncheckedCreateNestedOneWithoutAccountInput = {
    create?: XOR<AssistantSettingsCreateWithoutAccountInput, AssistantSettingsUncheckedCreateWithoutAccountInput>
    connectOrCreate?: AssistantSettingsCreateOrConnectWithoutAccountInput
    connect?: AssistantSettingsWhereUniqueInput
  }

  export type ChatGroupUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<ChatGroupCreateWithoutAccountInput, ChatGroupUncheckedCreateWithoutAccountInput> | ChatGroupCreateWithoutAccountInput[] | ChatGroupUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ChatGroupCreateOrConnectWithoutAccountInput | ChatGroupCreateOrConnectWithoutAccountInput[]
    createMany?: ChatGroupCreateManyAccountInputEnvelope
    connect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
  }

  export type MessageTemplateUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<MessageTemplateCreateWithoutAccountInput, MessageTemplateUncheckedCreateWithoutAccountInput> | MessageTemplateCreateWithoutAccountInput[] | MessageTemplateUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: MessageTemplateCreateOrConnectWithoutAccountInput | MessageTemplateCreateOrConnectWithoutAccountInput[]
    createMany?: MessageTemplateCreateManyAccountInputEnvelope
    connect?: MessageTemplateWhereUniqueInput | MessageTemplateWhereUniqueInput[]
  }

  export type WhatsAppBroadcastUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<WhatsAppBroadcastCreateWithoutAccountInput, WhatsAppBroadcastUncheckedCreateWithoutAccountInput> | WhatsAppBroadcastCreateWithoutAccountInput[] | WhatsAppBroadcastUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: WhatsAppBroadcastCreateOrConnectWithoutAccountInput | WhatsAppBroadcastCreateOrConnectWithoutAccountInput[]
    createMany?: WhatsAppBroadcastCreateManyAccountInputEnvelope
    connect?: WhatsAppBroadcastWhereUniqueInput | WhatsAppBroadcastWhereUniqueInput[]
  }

  export type WhatsAppChatUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<WhatsAppChatCreateWithoutAccountInput, WhatsAppChatUncheckedCreateWithoutAccountInput> | WhatsAppChatCreateWithoutAccountInput[] | WhatsAppChatUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: WhatsAppChatCreateOrConnectWithoutAccountInput | WhatsAppChatCreateOrConnectWithoutAccountInput[]
    createMany?: WhatsAppChatCreateManyAccountInputEnvelope
    connect?: WhatsAppChatWhereUniqueInput | WhatsAppChatWhereUniqueInput[]
  }

  export type WhatsAppMessageUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<WhatsAppMessageCreateWithoutAccountInput, WhatsAppMessageUncheckedCreateWithoutAccountInput> | WhatsAppMessageCreateWithoutAccountInput[] | WhatsAppMessageUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: WhatsAppMessageCreateOrConnectWithoutAccountInput | WhatsAppMessageCreateOrConnectWithoutAccountInput[]
    createMany?: WhatsAppMessageCreateManyAccountInputEnvelope
    connect?: WhatsAppMessageWhereUniqueInput | WhatsAppMessageWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AssistantSettingsUpdateOneWithoutAccountNestedInput = {
    create?: XOR<AssistantSettingsCreateWithoutAccountInput, AssistantSettingsUncheckedCreateWithoutAccountInput>
    connectOrCreate?: AssistantSettingsCreateOrConnectWithoutAccountInput
    upsert?: AssistantSettingsUpsertWithoutAccountInput
    disconnect?: AssistantSettingsWhereInput | boolean
    delete?: AssistantSettingsWhereInput | boolean
    connect?: AssistantSettingsWhereUniqueInput
    update?: XOR<XOR<AssistantSettingsUpdateToOneWithWhereWithoutAccountInput, AssistantSettingsUpdateWithoutAccountInput>, AssistantSettingsUncheckedUpdateWithoutAccountInput>
  }

  export type ChatGroupUpdateManyWithoutAccountNestedInput = {
    create?: XOR<ChatGroupCreateWithoutAccountInput, ChatGroupUncheckedCreateWithoutAccountInput> | ChatGroupCreateWithoutAccountInput[] | ChatGroupUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ChatGroupCreateOrConnectWithoutAccountInput | ChatGroupCreateOrConnectWithoutAccountInput[]
    upsert?: ChatGroupUpsertWithWhereUniqueWithoutAccountInput | ChatGroupUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: ChatGroupCreateManyAccountInputEnvelope
    set?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    disconnect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    delete?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    connect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    update?: ChatGroupUpdateWithWhereUniqueWithoutAccountInput | ChatGroupUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: ChatGroupUpdateManyWithWhereWithoutAccountInput | ChatGroupUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: ChatGroupScalarWhereInput | ChatGroupScalarWhereInput[]
  }

  export type MessageTemplateUpdateManyWithoutAccountNestedInput = {
    create?: XOR<MessageTemplateCreateWithoutAccountInput, MessageTemplateUncheckedCreateWithoutAccountInput> | MessageTemplateCreateWithoutAccountInput[] | MessageTemplateUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: MessageTemplateCreateOrConnectWithoutAccountInput | MessageTemplateCreateOrConnectWithoutAccountInput[]
    upsert?: MessageTemplateUpsertWithWhereUniqueWithoutAccountInput | MessageTemplateUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: MessageTemplateCreateManyAccountInputEnvelope
    set?: MessageTemplateWhereUniqueInput | MessageTemplateWhereUniqueInput[]
    disconnect?: MessageTemplateWhereUniqueInput | MessageTemplateWhereUniqueInput[]
    delete?: MessageTemplateWhereUniqueInput | MessageTemplateWhereUniqueInput[]
    connect?: MessageTemplateWhereUniqueInput | MessageTemplateWhereUniqueInput[]
    update?: MessageTemplateUpdateWithWhereUniqueWithoutAccountInput | MessageTemplateUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: MessageTemplateUpdateManyWithWhereWithoutAccountInput | MessageTemplateUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: MessageTemplateScalarWhereInput | MessageTemplateScalarWhereInput[]
  }

  export type WhatsAppBroadcastUpdateManyWithoutAccountNestedInput = {
    create?: XOR<WhatsAppBroadcastCreateWithoutAccountInput, WhatsAppBroadcastUncheckedCreateWithoutAccountInput> | WhatsAppBroadcastCreateWithoutAccountInput[] | WhatsAppBroadcastUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: WhatsAppBroadcastCreateOrConnectWithoutAccountInput | WhatsAppBroadcastCreateOrConnectWithoutAccountInput[]
    upsert?: WhatsAppBroadcastUpsertWithWhereUniqueWithoutAccountInput | WhatsAppBroadcastUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: WhatsAppBroadcastCreateManyAccountInputEnvelope
    set?: WhatsAppBroadcastWhereUniqueInput | WhatsAppBroadcastWhereUniqueInput[]
    disconnect?: WhatsAppBroadcastWhereUniqueInput | WhatsAppBroadcastWhereUniqueInput[]
    delete?: WhatsAppBroadcastWhereUniqueInput | WhatsAppBroadcastWhereUniqueInput[]
    connect?: WhatsAppBroadcastWhereUniqueInput | WhatsAppBroadcastWhereUniqueInput[]
    update?: WhatsAppBroadcastUpdateWithWhereUniqueWithoutAccountInput | WhatsAppBroadcastUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: WhatsAppBroadcastUpdateManyWithWhereWithoutAccountInput | WhatsAppBroadcastUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: WhatsAppBroadcastScalarWhereInput | WhatsAppBroadcastScalarWhereInput[]
  }

  export type WhatsAppChatUpdateManyWithoutAccountNestedInput = {
    create?: XOR<WhatsAppChatCreateWithoutAccountInput, WhatsAppChatUncheckedCreateWithoutAccountInput> | WhatsAppChatCreateWithoutAccountInput[] | WhatsAppChatUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: WhatsAppChatCreateOrConnectWithoutAccountInput | WhatsAppChatCreateOrConnectWithoutAccountInput[]
    upsert?: WhatsAppChatUpsertWithWhereUniqueWithoutAccountInput | WhatsAppChatUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: WhatsAppChatCreateManyAccountInputEnvelope
    set?: WhatsAppChatWhereUniqueInput | WhatsAppChatWhereUniqueInput[]
    disconnect?: WhatsAppChatWhereUniqueInput | WhatsAppChatWhereUniqueInput[]
    delete?: WhatsAppChatWhereUniqueInput | WhatsAppChatWhereUniqueInput[]
    connect?: WhatsAppChatWhereUniqueInput | WhatsAppChatWhereUniqueInput[]
    update?: WhatsAppChatUpdateWithWhereUniqueWithoutAccountInput | WhatsAppChatUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: WhatsAppChatUpdateManyWithWhereWithoutAccountInput | WhatsAppChatUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: WhatsAppChatScalarWhereInput | WhatsAppChatScalarWhereInput[]
  }

  export type WhatsAppMessageUpdateManyWithoutAccountNestedInput = {
    create?: XOR<WhatsAppMessageCreateWithoutAccountInput, WhatsAppMessageUncheckedCreateWithoutAccountInput> | WhatsAppMessageCreateWithoutAccountInput[] | WhatsAppMessageUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: WhatsAppMessageCreateOrConnectWithoutAccountInput | WhatsAppMessageCreateOrConnectWithoutAccountInput[]
    upsert?: WhatsAppMessageUpsertWithWhereUniqueWithoutAccountInput | WhatsAppMessageUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: WhatsAppMessageCreateManyAccountInputEnvelope
    set?: WhatsAppMessageWhereUniqueInput | WhatsAppMessageWhereUniqueInput[]
    disconnect?: WhatsAppMessageWhereUniqueInput | WhatsAppMessageWhereUniqueInput[]
    delete?: WhatsAppMessageWhereUniqueInput | WhatsAppMessageWhereUniqueInput[]
    connect?: WhatsAppMessageWhereUniqueInput | WhatsAppMessageWhereUniqueInput[]
    update?: WhatsAppMessageUpdateWithWhereUniqueWithoutAccountInput | WhatsAppMessageUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: WhatsAppMessageUpdateManyWithWhereWithoutAccountInput | WhatsAppMessageUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: WhatsAppMessageScalarWhereInput | WhatsAppMessageScalarWhereInput[]
  }

  export type AssistantSettingsUncheckedUpdateOneWithoutAccountNestedInput = {
    create?: XOR<AssistantSettingsCreateWithoutAccountInput, AssistantSettingsUncheckedCreateWithoutAccountInput>
    connectOrCreate?: AssistantSettingsCreateOrConnectWithoutAccountInput
    upsert?: AssistantSettingsUpsertWithoutAccountInput
    disconnect?: AssistantSettingsWhereInput | boolean
    delete?: AssistantSettingsWhereInput | boolean
    connect?: AssistantSettingsWhereUniqueInput
    update?: XOR<XOR<AssistantSettingsUpdateToOneWithWhereWithoutAccountInput, AssistantSettingsUpdateWithoutAccountInput>, AssistantSettingsUncheckedUpdateWithoutAccountInput>
  }

  export type ChatGroupUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<ChatGroupCreateWithoutAccountInput, ChatGroupUncheckedCreateWithoutAccountInput> | ChatGroupCreateWithoutAccountInput[] | ChatGroupUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ChatGroupCreateOrConnectWithoutAccountInput | ChatGroupCreateOrConnectWithoutAccountInput[]
    upsert?: ChatGroupUpsertWithWhereUniqueWithoutAccountInput | ChatGroupUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: ChatGroupCreateManyAccountInputEnvelope
    set?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    disconnect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    delete?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    connect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    update?: ChatGroupUpdateWithWhereUniqueWithoutAccountInput | ChatGroupUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: ChatGroupUpdateManyWithWhereWithoutAccountInput | ChatGroupUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: ChatGroupScalarWhereInput | ChatGroupScalarWhereInput[]
  }

  export type MessageTemplateUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<MessageTemplateCreateWithoutAccountInput, MessageTemplateUncheckedCreateWithoutAccountInput> | MessageTemplateCreateWithoutAccountInput[] | MessageTemplateUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: MessageTemplateCreateOrConnectWithoutAccountInput | MessageTemplateCreateOrConnectWithoutAccountInput[]
    upsert?: MessageTemplateUpsertWithWhereUniqueWithoutAccountInput | MessageTemplateUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: MessageTemplateCreateManyAccountInputEnvelope
    set?: MessageTemplateWhereUniqueInput | MessageTemplateWhereUniqueInput[]
    disconnect?: MessageTemplateWhereUniqueInput | MessageTemplateWhereUniqueInput[]
    delete?: MessageTemplateWhereUniqueInput | MessageTemplateWhereUniqueInput[]
    connect?: MessageTemplateWhereUniqueInput | MessageTemplateWhereUniqueInput[]
    update?: MessageTemplateUpdateWithWhereUniqueWithoutAccountInput | MessageTemplateUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: MessageTemplateUpdateManyWithWhereWithoutAccountInput | MessageTemplateUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: MessageTemplateScalarWhereInput | MessageTemplateScalarWhereInput[]
  }

  export type WhatsAppBroadcastUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<WhatsAppBroadcastCreateWithoutAccountInput, WhatsAppBroadcastUncheckedCreateWithoutAccountInput> | WhatsAppBroadcastCreateWithoutAccountInput[] | WhatsAppBroadcastUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: WhatsAppBroadcastCreateOrConnectWithoutAccountInput | WhatsAppBroadcastCreateOrConnectWithoutAccountInput[]
    upsert?: WhatsAppBroadcastUpsertWithWhereUniqueWithoutAccountInput | WhatsAppBroadcastUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: WhatsAppBroadcastCreateManyAccountInputEnvelope
    set?: WhatsAppBroadcastWhereUniqueInput | WhatsAppBroadcastWhereUniqueInput[]
    disconnect?: WhatsAppBroadcastWhereUniqueInput | WhatsAppBroadcastWhereUniqueInput[]
    delete?: WhatsAppBroadcastWhereUniqueInput | WhatsAppBroadcastWhereUniqueInput[]
    connect?: WhatsAppBroadcastWhereUniqueInput | WhatsAppBroadcastWhereUniqueInput[]
    update?: WhatsAppBroadcastUpdateWithWhereUniqueWithoutAccountInput | WhatsAppBroadcastUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: WhatsAppBroadcastUpdateManyWithWhereWithoutAccountInput | WhatsAppBroadcastUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: WhatsAppBroadcastScalarWhereInput | WhatsAppBroadcastScalarWhereInput[]
  }

  export type WhatsAppChatUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<WhatsAppChatCreateWithoutAccountInput, WhatsAppChatUncheckedCreateWithoutAccountInput> | WhatsAppChatCreateWithoutAccountInput[] | WhatsAppChatUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: WhatsAppChatCreateOrConnectWithoutAccountInput | WhatsAppChatCreateOrConnectWithoutAccountInput[]
    upsert?: WhatsAppChatUpsertWithWhereUniqueWithoutAccountInput | WhatsAppChatUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: WhatsAppChatCreateManyAccountInputEnvelope
    set?: WhatsAppChatWhereUniqueInput | WhatsAppChatWhereUniqueInput[]
    disconnect?: WhatsAppChatWhereUniqueInput | WhatsAppChatWhereUniqueInput[]
    delete?: WhatsAppChatWhereUniqueInput | WhatsAppChatWhereUniqueInput[]
    connect?: WhatsAppChatWhereUniqueInput | WhatsAppChatWhereUniqueInput[]
    update?: WhatsAppChatUpdateWithWhereUniqueWithoutAccountInput | WhatsAppChatUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: WhatsAppChatUpdateManyWithWhereWithoutAccountInput | WhatsAppChatUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: WhatsAppChatScalarWhereInput | WhatsAppChatScalarWhereInput[]
  }

  export type WhatsAppMessageUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<WhatsAppMessageCreateWithoutAccountInput, WhatsAppMessageUncheckedCreateWithoutAccountInput> | WhatsAppMessageCreateWithoutAccountInput[] | WhatsAppMessageUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: WhatsAppMessageCreateOrConnectWithoutAccountInput | WhatsAppMessageCreateOrConnectWithoutAccountInput[]
    upsert?: WhatsAppMessageUpsertWithWhereUniqueWithoutAccountInput | WhatsAppMessageUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: WhatsAppMessageCreateManyAccountInputEnvelope
    set?: WhatsAppMessageWhereUniqueInput | WhatsAppMessageWhereUniqueInput[]
    disconnect?: WhatsAppMessageWhereUniqueInput | WhatsAppMessageWhereUniqueInput[]
    delete?: WhatsAppMessageWhereUniqueInput | WhatsAppMessageWhereUniqueInput[]
    connect?: WhatsAppMessageWhereUniqueInput | WhatsAppMessageWhereUniqueInput[]
    update?: WhatsAppMessageUpdateWithWhereUniqueWithoutAccountInput | WhatsAppMessageUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: WhatsAppMessageUpdateManyWithWhereWithoutAccountInput | WhatsAppMessageUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: WhatsAppMessageScalarWhereInput | WhatsAppMessageScalarWhereInput[]
  }

  export type WhatsAppChatCreateNestedOneWithoutMessagesInput = {
    create?: XOR<WhatsAppChatCreateWithoutMessagesInput, WhatsAppChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: WhatsAppChatCreateOrConnectWithoutMessagesInput
    connect?: WhatsAppChatWhereUniqueInput
  }

  export type WhatsAppAccountCreateNestedOneWithoutMessagesInput = {
    create?: XOR<WhatsAppAccountCreateWithoutMessagesInput, WhatsAppAccountUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: WhatsAppAccountCreateOrConnectWithoutMessagesInput
    connect?: WhatsAppAccountWhereUniqueInput
  }

  export type WhatsAppChatUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<WhatsAppChatCreateWithoutMessagesInput, WhatsAppChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: WhatsAppChatCreateOrConnectWithoutMessagesInput
    upsert?: WhatsAppChatUpsertWithoutMessagesInput
    connect?: WhatsAppChatWhereUniqueInput
    update?: XOR<XOR<WhatsAppChatUpdateToOneWithWhereWithoutMessagesInput, WhatsAppChatUpdateWithoutMessagesInput>, WhatsAppChatUncheckedUpdateWithoutMessagesInput>
  }

  export type WhatsAppAccountUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<WhatsAppAccountCreateWithoutMessagesInput, WhatsAppAccountUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: WhatsAppAccountCreateOrConnectWithoutMessagesInput
    upsert?: WhatsAppAccountUpsertWithoutMessagesInput
    connect?: WhatsAppAccountWhereUniqueInput
    update?: XOR<XOR<WhatsAppAccountUpdateToOneWithWhereWithoutMessagesInput, WhatsAppAccountUpdateWithoutMessagesInput>, WhatsAppAccountUncheckedUpdateWithoutMessagesInput>
  }

  export type WhatsAppAccountCreateNestedOneWithoutChatsInput = {
    create?: XOR<WhatsAppAccountCreateWithoutChatsInput, WhatsAppAccountUncheckedCreateWithoutChatsInput>
    connectOrCreate?: WhatsAppAccountCreateOrConnectWithoutChatsInput
    connect?: WhatsAppAccountWhereUniqueInput
  }

  export type WhatsAppMessageCreateNestedManyWithoutChatInput = {
    create?: XOR<WhatsAppMessageCreateWithoutChatInput, WhatsAppMessageUncheckedCreateWithoutChatInput> | WhatsAppMessageCreateWithoutChatInput[] | WhatsAppMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: WhatsAppMessageCreateOrConnectWithoutChatInput | WhatsAppMessageCreateOrConnectWithoutChatInput[]
    createMany?: WhatsAppMessageCreateManyChatInputEnvelope
    connect?: WhatsAppMessageWhereUniqueInput | WhatsAppMessageWhereUniqueInput[]
  }

  export type WhatsAppMessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<WhatsAppMessageCreateWithoutChatInput, WhatsAppMessageUncheckedCreateWithoutChatInput> | WhatsAppMessageCreateWithoutChatInput[] | WhatsAppMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: WhatsAppMessageCreateOrConnectWithoutChatInput | WhatsAppMessageCreateOrConnectWithoutChatInput[]
    createMany?: WhatsAppMessageCreateManyChatInputEnvelope
    connect?: WhatsAppMessageWhereUniqueInput | WhatsAppMessageWhereUniqueInput[]
  }

  export type WhatsAppAccountUpdateOneRequiredWithoutChatsNestedInput = {
    create?: XOR<WhatsAppAccountCreateWithoutChatsInput, WhatsAppAccountUncheckedCreateWithoutChatsInput>
    connectOrCreate?: WhatsAppAccountCreateOrConnectWithoutChatsInput
    upsert?: WhatsAppAccountUpsertWithoutChatsInput
    connect?: WhatsAppAccountWhereUniqueInput
    update?: XOR<XOR<WhatsAppAccountUpdateToOneWithWhereWithoutChatsInput, WhatsAppAccountUpdateWithoutChatsInput>, WhatsAppAccountUncheckedUpdateWithoutChatsInput>
  }

  export type WhatsAppMessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<WhatsAppMessageCreateWithoutChatInput, WhatsAppMessageUncheckedCreateWithoutChatInput> | WhatsAppMessageCreateWithoutChatInput[] | WhatsAppMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: WhatsAppMessageCreateOrConnectWithoutChatInput | WhatsAppMessageCreateOrConnectWithoutChatInput[]
    upsert?: WhatsAppMessageUpsertWithWhereUniqueWithoutChatInput | WhatsAppMessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: WhatsAppMessageCreateManyChatInputEnvelope
    set?: WhatsAppMessageWhereUniqueInput | WhatsAppMessageWhereUniqueInput[]
    disconnect?: WhatsAppMessageWhereUniqueInput | WhatsAppMessageWhereUniqueInput[]
    delete?: WhatsAppMessageWhereUniqueInput | WhatsAppMessageWhereUniqueInput[]
    connect?: WhatsAppMessageWhereUniqueInput | WhatsAppMessageWhereUniqueInput[]
    update?: WhatsAppMessageUpdateWithWhereUniqueWithoutChatInput | WhatsAppMessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: WhatsAppMessageUpdateManyWithWhereWithoutChatInput | WhatsAppMessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: WhatsAppMessageScalarWhereInput | WhatsAppMessageScalarWhereInput[]
  }

  export type WhatsAppMessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<WhatsAppMessageCreateWithoutChatInput, WhatsAppMessageUncheckedCreateWithoutChatInput> | WhatsAppMessageCreateWithoutChatInput[] | WhatsAppMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: WhatsAppMessageCreateOrConnectWithoutChatInput | WhatsAppMessageCreateOrConnectWithoutChatInput[]
    upsert?: WhatsAppMessageUpsertWithWhereUniqueWithoutChatInput | WhatsAppMessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: WhatsAppMessageCreateManyChatInputEnvelope
    set?: WhatsAppMessageWhereUniqueInput | WhatsAppMessageWhereUniqueInput[]
    disconnect?: WhatsAppMessageWhereUniqueInput | WhatsAppMessageWhereUniqueInput[]
    delete?: WhatsAppMessageWhereUniqueInput | WhatsAppMessageWhereUniqueInput[]
    connect?: WhatsAppMessageWhereUniqueInput | WhatsAppMessageWhereUniqueInput[]
    update?: WhatsAppMessageUpdateWithWhereUniqueWithoutChatInput | WhatsAppMessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: WhatsAppMessageUpdateManyWithWhereWithoutChatInput | WhatsAppMessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: WhatsAppMessageScalarWhereInput | WhatsAppMessageScalarWhereInput[]
  }

  export type WhatsAppAccountCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<WhatsAppAccountCreateWithoutTemplatesInput, WhatsAppAccountUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: WhatsAppAccountCreateOrConnectWithoutTemplatesInput
    connect?: WhatsAppAccountWhereUniqueInput
  }

  export type WhatsAppBroadcastCreateNestedManyWithoutTemplateInput = {
    create?: XOR<WhatsAppBroadcastCreateWithoutTemplateInput, WhatsAppBroadcastUncheckedCreateWithoutTemplateInput> | WhatsAppBroadcastCreateWithoutTemplateInput[] | WhatsAppBroadcastUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: WhatsAppBroadcastCreateOrConnectWithoutTemplateInput | WhatsAppBroadcastCreateOrConnectWithoutTemplateInput[]
    createMany?: WhatsAppBroadcastCreateManyTemplateInputEnvelope
    connect?: WhatsAppBroadcastWhereUniqueInput | WhatsAppBroadcastWhereUniqueInput[]
  }

  export type WhatsAppBroadcastUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<WhatsAppBroadcastCreateWithoutTemplateInput, WhatsAppBroadcastUncheckedCreateWithoutTemplateInput> | WhatsAppBroadcastCreateWithoutTemplateInput[] | WhatsAppBroadcastUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: WhatsAppBroadcastCreateOrConnectWithoutTemplateInput | WhatsAppBroadcastCreateOrConnectWithoutTemplateInput[]
    createMany?: WhatsAppBroadcastCreateManyTemplateInputEnvelope
    connect?: WhatsAppBroadcastWhereUniqueInput | WhatsAppBroadcastWhereUniqueInput[]
  }

  export type WhatsAppAccountUpdateOneRequiredWithoutTemplatesNestedInput = {
    create?: XOR<WhatsAppAccountCreateWithoutTemplatesInput, WhatsAppAccountUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: WhatsAppAccountCreateOrConnectWithoutTemplatesInput
    upsert?: WhatsAppAccountUpsertWithoutTemplatesInput
    connect?: WhatsAppAccountWhereUniqueInput
    update?: XOR<XOR<WhatsAppAccountUpdateToOneWithWhereWithoutTemplatesInput, WhatsAppAccountUpdateWithoutTemplatesInput>, WhatsAppAccountUncheckedUpdateWithoutTemplatesInput>
  }

  export type WhatsAppBroadcastUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<WhatsAppBroadcastCreateWithoutTemplateInput, WhatsAppBroadcastUncheckedCreateWithoutTemplateInput> | WhatsAppBroadcastCreateWithoutTemplateInput[] | WhatsAppBroadcastUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: WhatsAppBroadcastCreateOrConnectWithoutTemplateInput | WhatsAppBroadcastCreateOrConnectWithoutTemplateInput[]
    upsert?: WhatsAppBroadcastUpsertWithWhereUniqueWithoutTemplateInput | WhatsAppBroadcastUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: WhatsAppBroadcastCreateManyTemplateInputEnvelope
    set?: WhatsAppBroadcastWhereUniqueInput | WhatsAppBroadcastWhereUniqueInput[]
    disconnect?: WhatsAppBroadcastWhereUniqueInput | WhatsAppBroadcastWhereUniqueInput[]
    delete?: WhatsAppBroadcastWhereUniqueInput | WhatsAppBroadcastWhereUniqueInput[]
    connect?: WhatsAppBroadcastWhereUniqueInput | WhatsAppBroadcastWhereUniqueInput[]
    update?: WhatsAppBroadcastUpdateWithWhereUniqueWithoutTemplateInput | WhatsAppBroadcastUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: WhatsAppBroadcastUpdateManyWithWhereWithoutTemplateInput | WhatsAppBroadcastUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: WhatsAppBroadcastScalarWhereInput | WhatsAppBroadcastScalarWhereInput[]
  }

  export type WhatsAppBroadcastUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<WhatsAppBroadcastCreateWithoutTemplateInput, WhatsAppBroadcastUncheckedCreateWithoutTemplateInput> | WhatsAppBroadcastCreateWithoutTemplateInput[] | WhatsAppBroadcastUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: WhatsAppBroadcastCreateOrConnectWithoutTemplateInput | WhatsAppBroadcastCreateOrConnectWithoutTemplateInput[]
    upsert?: WhatsAppBroadcastUpsertWithWhereUniqueWithoutTemplateInput | WhatsAppBroadcastUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: WhatsAppBroadcastCreateManyTemplateInputEnvelope
    set?: WhatsAppBroadcastWhereUniqueInput | WhatsAppBroadcastWhereUniqueInput[]
    disconnect?: WhatsAppBroadcastWhereUniqueInput | WhatsAppBroadcastWhereUniqueInput[]
    delete?: WhatsAppBroadcastWhereUniqueInput | WhatsAppBroadcastWhereUniqueInput[]
    connect?: WhatsAppBroadcastWhereUniqueInput | WhatsAppBroadcastWhereUniqueInput[]
    update?: WhatsAppBroadcastUpdateWithWhereUniqueWithoutTemplateInput | WhatsAppBroadcastUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: WhatsAppBroadcastUpdateManyWithWhereWithoutTemplateInput | WhatsAppBroadcastUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: WhatsAppBroadcastScalarWhereInput | WhatsAppBroadcastScalarWhereInput[]
  }

  export type BroadcastAttachmentCreateNestedManyWithoutBroadcastInput = {
    create?: XOR<BroadcastAttachmentCreateWithoutBroadcastInput, BroadcastAttachmentUncheckedCreateWithoutBroadcastInput> | BroadcastAttachmentCreateWithoutBroadcastInput[] | BroadcastAttachmentUncheckedCreateWithoutBroadcastInput[]
    connectOrCreate?: BroadcastAttachmentCreateOrConnectWithoutBroadcastInput | BroadcastAttachmentCreateOrConnectWithoutBroadcastInput[]
    createMany?: BroadcastAttachmentCreateManyBroadcastInputEnvelope
    connect?: BroadcastAttachmentWhereUniqueInput | BroadcastAttachmentWhereUniqueInput[]
  }

  export type MessageTemplateCreateNestedOneWithoutBroadcastsInput = {
    create?: XOR<MessageTemplateCreateWithoutBroadcastsInput, MessageTemplateUncheckedCreateWithoutBroadcastsInput>
    connectOrCreate?: MessageTemplateCreateOrConnectWithoutBroadcastsInput
    connect?: MessageTemplateWhereUniqueInput
  }

  export type ClientListCreateNestedOneWithoutBroadcastsInput = {
    create?: XOR<ClientListCreateWithoutBroadcastsInput, ClientListUncheckedCreateWithoutBroadcastsInput>
    connectOrCreate?: ClientListCreateOrConnectWithoutBroadcastsInput
    connect?: ClientListWhereUniqueInput
  }

  export type WhatsAppAccountCreateNestedOneWithoutBroadcastsInput = {
    create?: XOR<WhatsAppAccountCreateWithoutBroadcastsInput, WhatsAppAccountUncheckedCreateWithoutBroadcastsInput>
    connectOrCreate?: WhatsAppAccountCreateOrConnectWithoutBroadcastsInput
    connect?: WhatsAppAccountWhereUniqueInput
  }

  export type BroadcastAttachmentUncheckedCreateNestedManyWithoutBroadcastInput = {
    create?: XOR<BroadcastAttachmentCreateWithoutBroadcastInput, BroadcastAttachmentUncheckedCreateWithoutBroadcastInput> | BroadcastAttachmentCreateWithoutBroadcastInput[] | BroadcastAttachmentUncheckedCreateWithoutBroadcastInput[]
    connectOrCreate?: BroadcastAttachmentCreateOrConnectWithoutBroadcastInput | BroadcastAttachmentCreateOrConnectWithoutBroadcastInput[]
    createMany?: BroadcastAttachmentCreateManyBroadcastInputEnvelope
    connect?: BroadcastAttachmentWhereUniqueInput | BroadcastAttachmentWhereUniqueInput[]
  }

  export type BroadcastAttachmentUpdateManyWithoutBroadcastNestedInput = {
    create?: XOR<BroadcastAttachmentCreateWithoutBroadcastInput, BroadcastAttachmentUncheckedCreateWithoutBroadcastInput> | BroadcastAttachmentCreateWithoutBroadcastInput[] | BroadcastAttachmentUncheckedCreateWithoutBroadcastInput[]
    connectOrCreate?: BroadcastAttachmentCreateOrConnectWithoutBroadcastInput | BroadcastAttachmentCreateOrConnectWithoutBroadcastInput[]
    upsert?: BroadcastAttachmentUpsertWithWhereUniqueWithoutBroadcastInput | BroadcastAttachmentUpsertWithWhereUniqueWithoutBroadcastInput[]
    createMany?: BroadcastAttachmentCreateManyBroadcastInputEnvelope
    set?: BroadcastAttachmentWhereUniqueInput | BroadcastAttachmentWhereUniqueInput[]
    disconnect?: BroadcastAttachmentWhereUniqueInput | BroadcastAttachmentWhereUniqueInput[]
    delete?: BroadcastAttachmentWhereUniqueInput | BroadcastAttachmentWhereUniqueInput[]
    connect?: BroadcastAttachmentWhereUniqueInput | BroadcastAttachmentWhereUniqueInput[]
    update?: BroadcastAttachmentUpdateWithWhereUniqueWithoutBroadcastInput | BroadcastAttachmentUpdateWithWhereUniqueWithoutBroadcastInput[]
    updateMany?: BroadcastAttachmentUpdateManyWithWhereWithoutBroadcastInput | BroadcastAttachmentUpdateManyWithWhereWithoutBroadcastInput[]
    deleteMany?: BroadcastAttachmentScalarWhereInput | BroadcastAttachmentScalarWhereInput[]
  }

  export type MessageTemplateUpdateOneRequiredWithoutBroadcastsNestedInput = {
    create?: XOR<MessageTemplateCreateWithoutBroadcastsInput, MessageTemplateUncheckedCreateWithoutBroadcastsInput>
    connectOrCreate?: MessageTemplateCreateOrConnectWithoutBroadcastsInput
    upsert?: MessageTemplateUpsertWithoutBroadcastsInput
    connect?: MessageTemplateWhereUniqueInput
    update?: XOR<XOR<MessageTemplateUpdateToOneWithWhereWithoutBroadcastsInput, MessageTemplateUpdateWithoutBroadcastsInput>, MessageTemplateUncheckedUpdateWithoutBroadcastsInput>
  }

  export type ClientListUpdateOneRequiredWithoutBroadcastsNestedInput = {
    create?: XOR<ClientListCreateWithoutBroadcastsInput, ClientListUncheckedCreateWithoutBroadcastsInput>
    connectOrCreate?: ClientListCreateOrConnectWithoutBroadcastsInput
    upsert?: ClientListUpsertWithoutBroadcastsInput
    connect?: ClientListWhereUniqueInput
    update?: XOR<XOR<ClientListUpdateToOneWithWhereWithoutBroadcastsInput, ClientListUpdateWithoutBroadcastsInput>, ClientListUncheckedUpdateWithoutBroadcastsInput>
  }

  export type WhatsAppAccountUpdateOneRequiredWithoutBroadcastsNestedInput = {
    create?: XOR<WhatsAppAccountCreateWithoutBroadcastsInput, WhatsAppAccountUncheckedCreateWithoutBroadcastsInput>
    connectOrCreate?: WhatsAppAccountCreateOrConnectWithoutBroadcastsInput
    upsert?: WhatsAppAccountUpsertWithoutBroadcastsInput
    connect?: WhatsAppAccountWhereUniqueInput
    update?: XOR<XOR<WhatsAppAccountUpdateToOneWithWhereWithoutBroadcastsInput, WhatsAppAccountUpdateWithoutBroadcastsInput>, WhatsAppAccountUncheckedUpdateWithoutBroadcastsInput>
  }

  export type BroadcastAttachmentUncheckedUpdateManyWithoutBroadcastNestedInput = {
    create?: XOR<BroadcastAttachmentCreateWithoutBroadcastInput, BroadcastAttachmentUncheckedCreateWithoutBroadcastInput> | BroadcastAttachmentCreateWithoutBroadcastInput[] | BroadcastAttachmentUncheckedCreateWithoutBroadcastInput[]
    connectOrCreate?: BroadcastAttachmentCreateOrConnectWithoutBroadcastInput | BroadcastAttachmentCreateOrConnectWithoutBroadcastInput[]
    upsert?: BroadcastAttachmentUpsertWithWhereUniqueWithoutBroadcastInput | BroadcastAttachmentUpsertWithWhereUniqueWithoutBroadcastInput[]
    createMany?: BroadcastAttachmentCreateManyBroadcastInputEnvelope
    set?: BroadcastAttachmentWhereUniqueInput | BroadcastAttachmentWhereUniqueInput[]
    disconnect?: BroadcastAttachmentWhereUniqueInput | BroadcastAttachmentWhereUniqueInput[]
    delete?: BroadcastAttachmentWhereUniqueInput | BroadcastAttachmentWhereUniqueInput[]
    connect?: BroadcastAttachmentWhereUniqueInput | BroadcastAttachmentWhereUniqueInput[]
    update?: BroadcastAttachmentUpdateWithWhereUniqueWithoutBroadcastInput | BroadcastAttachmentUpdateWithWhereUniqueWithoutBroadcastInput[]
    updateMany?: BroadcastAttachmentUpdateManyWithWhereWithoutBroadcastInput | BroadcastAttachmentUpdateManyWithWhereWithoutBroadcastInput[]
    deleteMany?: BroadcastAttachmentScalarWhereInput | BroadcastAttachmentScalarWhereInput[]
  }

  export type WhatsAppBroadcastCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<WhatsAppBroadcastCreateWithoutAttachmentsInput, WhatsAppBroadcastUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: WhatsAppBroadcastCreateOrConnectWithoutAttachmentsInput
    connect?: WhatsAppBroadcastWhereUniqueInput
  }

  export type WhatsAppBroadcastUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<WhatsAppBroadcastCreateWithoutAttachmentsInput, WhatsAppBroadcastUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: WhatsAppBroadcastCreateOrConnectWithoutAttachmentsInput
    upsert?: WhatsAppBroadcastUpsertWithoutAttachmentsInput
    connect?: WhatsAppBroadcastWhereUniqueInput
    update?: XOR<XOR<WhatsAppBroadcastUpdateToOneWithWhereWithoutAttachmentsInput, WhatsAppBroadcastUpdateWithoutAttachmentsInput>, WhatsAppBroadcastUncheckedUpdateWithoutAttachmentsInput>
  }

  export type UserCreateNestedOneWithoutClientListsInput = {
    create?: XOR<UserCreateWithoutClientListsInput, UserUncheckedCreateWithoutClientListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientListsInput
    connect?: UserWhereUniqueInput
  }

  export type PhoneNumberCreateNestedManyWithoutClientListInput = {
    create?: XOR<PhoneNumberCreateWithoutClientListInput, PhoneNumberUncheckedCreateWithoutClientListInput> | PhoneNumberCreateWithoutClientListInput[] | PhoneNumberUncheckedCreateWithoutClientListInput[]
    connectOrCreate?: PhoneNumberCreateOrConnectWithoutClientListInput | PhoneNumberCreateOrConnectWithoutClientListInput[]
    createMany?: PhoneNumberCreateManyClientListInputEnvelope
    connect?: PhoneNumberWhereUniqueInput | PhoneNumberWhereUniqueInput[]
  }

  export type WhatsAppBroadcastCreateNestedManyWithoutClientListInput = {
    create?: XOR<WhatsAppBroadcastCreateWithoutClientListInput, WhatsAppBroadcastUncheckedCreateWithoutClientListInput> | WhatsAppBroadcastCreateWithoutClientListInput[] | WhatsAppBroadcastUncheckedCreateWithoutClientListInput[]
    connectOrCreate?: WhatsAppBroadcastCreateOrConnectWithoutClientListInput | WhatsAppBroadcastCreateOrConnectWithoutClientListInput[]
    createMany?: WhatsAppBroadcastCreateManyClientListInputEnvelope
    connect?: WhatsAppBroadcastWhereUniqueInput | WhatsAppBroadcastWhereUniqueInput[]
  }

  export type ClientCreateNestedManyWithoutListsInput = {
    create?: XOR<ClientCreateWithoutListsInput, ClientUncheckedCreateWithoutListsInput> | ClientCreateWithoutListsInput[] | ClientUncheckedCreateWithoutListsInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutListsInput | ClientCreateOrConnectWithoutListsInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type PhoneNumberUncheckedCreateNestedManyWithoutClientListInput = {
    create?: XOR<PhoneNumberCreateWithoutClientListInput, PhoneNumberUncheckedCreateWithoutClientListInput> | PhoneNumberCreateWithoutClientListInput[] | PhoneNumberUncheckedCreateWithoutClientListInput[]
    connectOrCreate?: PhoneNumberCreateOrConnectWithoutClientListInput | PhoneNumberCreateOrConnectWithoutClientListInput[]
    createMany?: PhoneNumberCreateManyClientListInputEnvelope
    connect?: PhoneNumberWhereUniqueInput | PhoneNumberWhereUniqueInput[]
  }

  export type WhatsAppBroadcastUncheckedCreateNestedManyWithoutClientListInput = {
    create?: XOR<WhatsAppBroadcastCreateWithoutClientListInput, WhatsAppBroadcastUncheckedCreateWithoutClientListInput> | WhatsAppBroadcastCreateWithoutClientListInput[] | WhatsAppBroadcastUncheckedCreateWithoutClientListInput[]
    connectOrCreate?: WhatsAppBroadcastCreateOrConnectWithoutClientListInput | WhatsAppBroadcastCreateOrConnectWithoutClientListInput[]
    createMany?: WhatsAppBroadcastCreateManyClientListInputEnvelope
    connect?: WhatsAppBroadcastWhereUniqueInput | WhatsAppBroadcastWhereUniqueInput[]
  }

  export type ClientUncheckedCreateNestedManyWithoutListsInput = {
    create?: XOR<ClientCreateWithoutListsInput, ClientUncheckedCreateWithoutListsInput> | ClientCreateWithoutListsInput[] | ClientUncheckedCreateWithoutListsInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutListsInput | ClientCreateOrConnectWithoutListsInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutClientListsNestedInput = {
    create?: XOR<UserCreateWithoutClientListsInput, UserUncheckedCreateWithoutClientListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientListsInput
    upsert?: UserUpsertWithoutClientListsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClientListsInput, UserUpdateWithoutClientListsInput>, UserUncheckedUpdateWithoutClientListsInput>
  }

  export type PhoneNumberUpdateManyWithoutClientListNestedInput = {
    create?: XOR<PhoneNumberCreateWithoutClientListInput, PhoneNumberUncheckedCreateWithoutClientListInput> | PhoneNumberCreateWithoutClientListInput[] | PhoneNumberUncheckedCreateWithoutClientListInput[]
    connectOrCreate?: PhoneNumberCreateOrConnectWithoutClientListInput | PhoneNumberCreateOrConnectWithoutClientListInput[]
    upsert?: PhoneNumberUpsertWithWhereUniqueWithoutClientListInput | PhoneNumberUpsertWithWhereUniqueWithoutClientListInput[]
    createMany?: PhoneNumberCreateManyClientListInputEnvelope
    set?: PhoneNumberWhereUniqueInput | PhoneNumberWhereUniqueInput[]
    disconnect?: PhoneNumberWhereUniqueInput | PhoneNumberWhereUniqueInput[]
    delete?: PhoneNumberWhereUniqueInput | PhoneNumberWhereUniqueInput[]
    connect?: PhoneNumberWhereUniqueInput | PhoneNumberWhereUniqueInput[]
    update?: PhoneNumberUpdateWithWhereUniqueWithoutClientListInput | PhoneNumberUpdateWithWhereUniqueWithoutClientListInput[]
    updateMany?: PhoneNumberUpdateManyWithWhereWithoutClientListInput | PhoneNumberUpdateManyWithWhereWithoutClientListInput[]
    deleteMany?: PhoneNumberScalarWhereInput | PhoneNumberScalarWhereInput[]
  }

  export type WhatsAppBroadcastUpdateManyWithoutClientListNestedInput = {
    create?: XOR<WhatsAppBroadcastCreateWithoutClientListInput, WhatsAppBroadcastUncheckedCreateWithoutClientListInput> | WhatsAppBroadcastCreateWithoutClientListInput[] | WhatsAppBroadcastUncheckedCreateWithoutClientListInput[]
    connectOrCreate?: WhatsAppBroadcastCreateOrConnectWithoutClientListInput | WhatsAppBroadcastCreateOrConnectWithoutClientListInput[]
    upsert?: WhatsAppBroadcastUpsertWithWhereUniqueWithoutClientListInput | WhatsAppBroadcastUpsertWithWhereUniqueWithoutClientListInput[]
    createMany?: WhatsAppBroadcastCreateManyClientListInputEnvelope
    set?: WhatsAppBroadcastWhereUniqueInput | WhatsAppBroadcastWhereUniqueInput[]
    disconnect?: WhatsAppBroadcastWhereUniqueInput | WhatsAppBroadcastWhereUniqueInput[]
    delete?: WhatsAppBroadcastWhereUniqueInput | WhatsAppBroadcastWhereUniqueInput[]
    connect?: WhatsAppBroadcastWhereUniqueInput | WhatsAppBroadcastWhereUniqueInput[]
    update?: WhatsAppBroadcastUpdateWithWhereUniqueWithoutClientListInput | WhatsAppBroadcastUpdateWithWhereUniqueWithoutClientListInput[]
    updateMany?: WhatsAppBroadcastUpdateManyWithWhereWithoutClientListInput | WhatsAppBroadcastUpdateManyWithWhereWithoutClientListInput[]
    deleteMany?: WhatsAppBroadcastScalarWhereInput | WhatsAppBroadcastScalarWhereInput[]
  }

  export type ClientUpdateManyWithoutListsNestedInput = {
    create?: XOR<ClientCreateWithoutListsInput, ClientUncheckedCreateWithoutListsInput> | ClientCreateWithoutListsInput[] | ClientUncheckedCreateWithoutListsInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutListsInput | ClientCreateOrConnectWithoutListsInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutListsInput | ClientUpsertWithWhereUniqueWithoutListsInput[]
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutListsInput | ClientUpdateWithWhereUniqueWithoutListsInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutListsInput | ClientUpdateManyWithWhereWithoutListsInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type PhoneNumberUncheckedUpdateManyWithoutClientListNestedInput = {
    create?: XOR<PhoneNumberCreateWithoutClientListInput, PhoneNumberUncheckedCreateWithoutClientListInput> | PhoneNumberCreateWithoutClientListInput[] | PhoneNumberUncheckedCreateWithoutClientListInput[]
    connectOrCreate?: PhoneNumberCreateOrConnectWithoutClientListInput | PhoneNumberCreateOrConnectWithoutClientListInput[]
    upsert?: PhoneNumberUpsertWithWhereUniqueWithoutClientListInput | PhoneNumberUpsertWithWhereUniqueWithoutClientListInput[]
    createMany?: PhoneNumberCreateManyClientListInputEnvelope
    set?: PhoneNumberWhereUniqueInput | PhoneNumberWhereUniqueInput[]
    disconnect?: PhoneNumberWhereUniqueInput | PhoneNumberWhereUniqueInput[]
    delete?: PhoneNumberWhereUniqueInput | PhoneNumberWhereUniqueInput[]
    connect?: PhoneNumberWhereUniqueInput | PhoneNumberWhereUniqueInput[]
    update?: PhoneNumberUpdateWithWhereUniqueWithoutClientListInput | PhoneNumberUpdateWithWhereUniqueWithoutClientListInput[]
    updateMany?: PhoneNumberUpdateManyWithWhereWithoutClientListInput | PhoneNumberUpdateManyWithWhereWithoutClientListInput[]
    deleteMany?: PhoneNumberScalarWhereInput | PhoneNumberScalarWhereInput[]
  }

  export type WhatsAppBroadcastUncheckedUpdateManyWithoutClientListNestedInput = {
    create?: XOR<WhatsAppBroadcastCreateWithoutClientListInput, WhatsAppBroadcastUncheckedCreateWithoutClientListInput> | WhatsAppBroadcastCreateWithoutClientListInput[] | WhatsAppBroadcastUncheckedCreateWithoutClientListInput[]
    connectOrCreate?: WhatsAppBroadcastCreateOrConnectWithoutClientListInput | WhatsAppBroadcastCreateOrConnectWithoutClientListInput[]
    upsert?: WhatsAppBroadcastUpsertWithWhereUniqueWithoutClientListInput | WhatsAppBroadcastUpsertWithWhereUniqueWithoutClientListInput[]
    createMany?: WhatsAppBroadcastCreateManyClientListInputEnvelope
    set?: WhatsAppBroadcastWhereUniqueInput | WhatsAppBroadcastWhereUniqueInput[]
    disconnect?: WhatsAppBroadcastWhereUniqueInput | WhatsAppBroadcastWhereUniqueInput[]
    delete?: WhatsAppBroadcastWhereUniqueInput | WhatsAppBroadcastWhereUniqueInput[]
    connect?: WhatsAppBroadcastWhereUniqueInput | WhatsAppBroadcastWhereUniqueInput[]
    update?: WhatsAppBroadcastUpdateWithWhereUniqueWithoutClientListInput | WhatsAppBroadcastUpdateWithWhereUniqueWithoutClientListInput[]
    updateMany?: WhatsAppBroadcastUpdateManyWithWhereWithoutClientListInput | WhatsAppBroadcastUpdateManyWithWhereWithoutClientListInput[]
    deleteMany?: WhatsAppBroadcastScalarWhereInput | WhatsAppBroadcastScalarWhereInput[]
  }

  export type ClientUncheckedUpdateManyWithoutListsNestedInput = {
    create?: XOR<ClientCreateWithoutListsInput, ClientUncheckedCreateWithoutListsInput> | ClientCreateWithoutListsInput[] | ClientUncheckedCreateWithoutListsInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutListsInput | ClientCreateOrConnectWithoutListsInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutListsInput | ClientUpsertWithWhereUniqueWithoutListsInput[]
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutListsInput | ClientUpdateWithWhereUniqueWithoutListsInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutListsInput | ClientUpdateManyWithWhereWithoutListsInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type ClientListCreateNestedOneWithoutPhoneNumbersInput = {
    create?: XOR<ClientListCreateWithoutPhoneNumbersInput, ClientListUncheckedCreateWithoutPhoneNumbersInput>
    connectOrCreate?: ClientListCreateOrConnectWithoutPhoneNumbersInput
    connect?: ClientListWhereUniqueInput
  }

  export type ClientListUpdateOneRequiredWithoutPhoneNumbersNestedInput = {
    create?: XOR<ClientListCreateWithoutPhoneNumbersInput, ClientListUncheckedCreateWithoutPhoneNumbersInput>
    connectOrCreate?: ClientListCreateOrConnectWithoutPhoneNumbersInput
    upsert?: ClientListUpsertWithoutPhoneNumbersInput
    connect?: ClientListWhereUniqueInput
    update?: XOR<XOR<ClientListUpdateToOneWithWhereWithoutPhoneNumbersInput, ClientListUpdateWithoutPhoneNumbersInput>, ClientListUncheckedUpdateWithoutPhoneNumbersInput>
  }

  export type ClientListCreateNestedManyWithoutClientsInput = {
    create?: XOR<ClientListCreateWithoutClientsInput, ClientListUncheckedCreateWithoutClientsInput> | ClientListCreateWithoutClientsInput[] | ClientListUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: ClientListCreateOrConnectWithoutClientsInput | ClientListCreateOrConnectWithoutClientsInput[]
    connect?: ClientListWhereUniqueInput | ClientListWhereUniqueInput[]
  }

  export type ClientListUncheckedCreateNestedManyWithoutClientsInput = {
    create?: XOR<ClientListCreateWithoutClientsInput, ClientListUncheckedCreateWithoutClientsInput> | ClientListCreateWithoutClientsInput[] | ClientListUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: ClientListCreateOrConnectWithoutClientsInput | ClientListCreateOrConnectWithoutClientsInput[]
    connect?: ClientListWhereUniqueInput | ClientListWhereUniqueInput[]
  }

  export type ClientListUpdateManyWithoutClientsNestedInput = {
    create?: XOR<ClientListCreateWithoutClientsInput, ClientListUncheckedCreateWithoutClientsInput> | ClientListCreateWithoutClientsInput[] | ClientListUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: ClientListCreateOrConnectWithoutClientsInput | ClientListCreateOrConnectWithoutClientsInput[]
    upsert?: ClientListUpsertWithWhereUniqueWithoutClientsInput | ClientListUpsertWithWhereUniqueWithoutClientsInput[]
    set?: ClientListWhereUniqueInput | ClientListWhereUniqueInput[]
    disconnect?: ClientListWhereUniqueInput | ClientListWhereUniqueInput[]
    delete?: ClientListWhereUniqueInput | ClientListWhereUniqueInput[]
    connect?: ClientListWhereUniqueInput | ClientListWhereUniqueInput[]
    update?: ClientListUpdateWithWhereUniqueWithoutClientsInput | ClientListUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: ClientListUpdateManyWithWhereWithoutClientsInput | ClientListUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: ClientListScalarWhereInput | ClientListScalarWhereInput[]
  }

  export type ClientListUncheckedUpdateManyWithoutClientsNestedInput = {
    create?: XOR<ClientListCreateWithoutClientsInput, ClientListUncheckedCreateWithoutClientsInput> | ClientListCreateWithoutClientsInput[] | ClientListUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: ClientListCreateOrConnectWithoutClientsInput | ClientListCreateOrConnectWithoutClientsInput[]
    upsert?: ClientListUpsertWithWhereUniqueWithoutClientsInput | ClientListUpsertWithWhereUniqueWithoutClientsInput[]
    set?: ClientListWhereUniqueInput | ClientListWhereUniqueInput[]
    disconnect?: ClientListWhereUniqueInput | ClientListWhereUniqueInput[]
    delete?: ClientListWhereUniqueInput | ClientListWhereUniqueInput[]
    connect?: ClientListWhereUniqueInput | ClientListWhereUniqueInput[]
    update?: ClientListUpdateWithWhereUniqueWithoutClientsInput | ClientListUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: ClientListUpdateManyWithWhereWithoutClientsInput | ClientListUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: ClientListScalarWhereInput | ClientListScalarWhereInput[]
  }

  export type WhatsAppAccountCreateNestedOneWithoutAssistantSettingsInput = {
    create?: XOR<WhatsAppAccountCreateWithoutAssistantSettingsInput, WhatsAppAccountUncheckedCreateWithoutAssistantSettingsInput>
    connectOrCreate?: WhatsAppAccountCreateOrConnectWithoutAssistantSettingsInput
    connect?: WhatsAppAccountWhereUniqueInput
  }

  export type WhatsAppAccountUpdateOneRequiredWithoutAssistantSettingsNestedInput = {
    create?: XOR<WhatsAppAccountCreateWithoutAssistantSettingsInput, WhatsAppAccountUncheckedCreateWithoutAssistantSettingsInput>
    connectOrCreate?: WhatsAppAccountCreateOrConnectWithoutAssistantSettingsInput
    upsert?: WhatsAppAccountUpsertWithoutAssistantSettingsInput
    connect?: WhatsAppAccountWhereUniqueInput
    update?: XOR<XOR<WhatsAppAccountUpdateToOneWithWhereWithoutAssistantSettingsInput, WhatsAppAccountUpdateWithoutAssistantSettingsInput>, WhatsAppAccountUncheckedUpdateWithoutAssistantSettingsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ClientListCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    phoneNumbers?: PhoneNumberCreateNestedManyWithoutClientListInput
    broadcasts?: WhatsAppBroadcastCreateNestedManyWithoutClientListInput
    clients?: ClientCreateNestedManyWithoutListsInput
  }

  export type ClientListUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    phoneNumbers?: PhoneNumberUncheckedCreateNestedManyWithoutClientListInput
    broadcasts?: WhatsAppBroadcastUncheckedCreateNestedManyWithoutClientListInput
    clients?: ClientUncheckedCreateNestedManyWithoutListsInput
  }

  export type ClientListCreateOrConnectWithoutUserInput = {
    where: ClientListWhereUniqueInput
    create: XOR<ClientListCreateWithoutUserInput, ClientListUncheckedCreateWithoutUserInput>
  }

  export type ClientListCreateManyUserInputEnvelope = {
    data: ClientListCreateManyUserInput | ClientListCreateManyUserInput[]
  }

  export type ClientListUpsertWithWhereUniqueWithoutUserInput = {
    where: ClientListWhereUniqueInput
    update: XOR<ClientListUpdateWithoutUserInput, ClientListUncheckedUpdateWithoutUserInput>
    create: XOR<ClientListCreateWithoutUserInput, ClientListUncheckedCreateWithoutUserInput>
  }

  export type ClientListUpdateWithWhereUniqueWithoutUserInput = {
    where: ClientListWhereUniqueInput
    data: XOR<ClientListUpdateWithoutUserInput, ClientListUncheckedUpdateWithoutUserInput>
  }

  export type ClientListUpdateManyWithWhereWithoutUserInput = {
    where: ClientListScalarWhereInput
    data: XOR<ClientListUpdateManyMutationInput, ClientListUncheckedUpdateManyWithoutUserInput>
  }

  export type ClientListScalarWhereInput = {
    AND?: ClientListScalarWhereInput | ClientListScalarWhereInput[]
    OR?: ClientListScalarWhereInput[]
    NOT?: ClientListScalarWhereInput | ClientListScalarWhereInput[]
    id?: StringFilter<"ClientList"> | string
    name?: StringFilter<"ClientList"> | string
    description?: StringNullableFilter<"ClientList"> | string | null
    userId?: StringFilter<"ClientList"> | string
    createdAt?: DateTimeFilter<"ClientList"> | Date | string
    updatedAt?: DateTimeFilter<"ClientList"> | Date | string
  }

  export type WhatsAppAccountCreateWithoutGroupsInput = {
    id?: string
    name: string
    phoneNumber: string
    isActive?: boolean
    verified?: boolean
    phoneNumberId: string
    businessAccountId: string
    accessToken: string
    webhookSecret?: string | null
    maxConcurrentMessages?: number
    retryAttempts?: number
    gptModel?: string
    maxTokens?: number
    temperature?: number
    totalMessages?: number
    avgResponseTime?: number
    lastActive?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assistantSettings?: AssistantSettingsCreateNestedOneWithoutAccountInput
    templates?: MessageTemplateCreateNestedManyWithoutAccountInput
    broadcasts?: WhatsAppBroadcastCreateNestedManyWithoutAccountInput
    chats?: WhatsAppChatCreateNestedManyWithoutAccountInput
    messages?: WhatsAppMessageCreateNestedManyWithoutAccountInput
  }

  export type WhatsAppAccountUncheckedCreateWithoutGroupsInput = {
    id?: string
    name: string
    phoneNumber: string
    isActive?: boolean
    verified?: boolean
    phoneNumberId: string
    businessAccountId: string
    accessToken: string
    webhookSecret?: string | null
    maxConcurrentMessages?: number
    retryAttempts?: number
    gptModel?: string
    maxTokens?: number
    temperature?: number
    totalMessages?: number
    avgResponseTime?: number
    lastActive?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assistantSettings?: AssistantSettingsUncheckedCreateNestedOneWithoutAccountInput
    templates?: MessageTemplateUncheckedCreateNestedManyWithoutAccountInput
    broadcasts?: WhatsAppBroadcastUncheckedCreateNestedManyWithoutAccountInput
    chats?: WhatsAppChatUncheckedCreateNestedManyWithoutAccountInput
    messages?: WhatsAppMessageUncheckedCreateNestedManyWithoutAccountInput
  }

  export type WhatsAppAccountCreateOrConnectWithoutGroupsInput = {
    where: WhatsAppAccountWhereUniqueInput
    create: XOR<WhatsAppAccountCreateWithoutGroupsInput, WhatsAppAccountUncheckedCreateWithoutGroupsInput>
  }

  export type WhatsAppAccountUpsertWithoutGroupsInput = {
    update: XOR<WhatsAppAccountUpdateWithoutGroupsInput, WhatsAppAccountUncheckedUpdateWithoutGroupsInput>
    create: XOR<WhatsAppAccountCreateWithoutGroupsInput, WhatsAppAccountUncheckedCreateWithoutGroupsInput>
    where?: WhatsAppAccountWhereInput
  }

  export type WhatsAppAccountUpdateToOneWithWhereWithoutGroupsInput = {
    where?: WhatsAppAccountWhereInput
    data: XOR<WhatsAppAccountUpdateWithoutGroupsInput, WhatsAppAccountUncheckedUpdateWithoutGroupsInput>
  }

  export type WhatsAppAccountUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    businessAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    webhookSecret?: NullableStringFieldUpdateOperationsInput | string | null
    maxConcurrentMessages?: IntFieldUpdateOperationsInput | number
    retryAttempts?: IntFieldUpdateOperationsInput | number
    gptModel?: StringFieldUpdateOperationsInput | string
    maxTokens?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    totalMessages?: IntFieldUpdateOperationsInput | number
    avgResponseTime?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assistantSettings?: AssistantSettingsUpdateOneWithoutAccountNestedInput
    templates?: MessageTemplateUpdateManyWithoutAccountNestedInput
    broadcasts?: WhatsAppBroadcastUpdateManyWithoutAccountNestedInput
    chats?: WhatsAppChatUpdateManyWithoutAccountNestedInput
    messages?: WhatsAppMessageUpdateManyWithoutAccountNestedInput
  }

  export type WhatsAppAccountUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    businessAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    webhookSecret?: NullableStringFieldUpdateOperationsInput | string | null
    maxConcurrentMessages?: IntFieldUpdateOperationsInput | number
    retryAttempts?: IntFieldUpdateOperationsInput | number
    gptModel?: StringFieldUpdateOperationsInput | string
    maxTokens?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    totalMessages?: IntFieldUpdateOperationsInput | number
    avgResponseTime?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assistantSettings?: AssistantSettingsUncheckedUpdateOneWithoutAccountNestedInput
    templates?: MessageTemplateUncheckedUpdateManyWithoutAccountNestedInput
    broadcasts?: WhatsAppBroadcastUncheckedUpdateManyWithoutAccountNestedInput
    chats?: WhatsAppChatUncheckedUpdateManyWithoutAccountNestedInput
    messages?: WhatsAppMessageUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AssistantSettingsCreateWithoutAccountInput = {
    id?: string
    name?: string
    model?: string
    openAiKey?: string
    assistantId?: string | null
    isConfigured?: boolean
    status?: string
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssistantSettingsUncheckedCreateWithoutAccountInput = {
    id?: string
    name?: string
    model?: string
    openAiKey?: string
    assistantId?: string | null
    isConfigured?: boolean
    status?: string
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssistantSettingsCreateOrConnectWithoutAccountInput = {
    where: AssistantSettingsWhereUniqueInput
    create: XOR<AssistantSettingsCreateWithoutAccountInput, AssistantSettingsUncheckedCreateWithoutAccountInput>
  }

  export type ChatGroupCreateWithoutAccountInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGroupUncheckedCreateWithoutAccountInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGroupCreateOrConnectWithoutAccountInput = {
    where: ChatGroupWhereUniqueInput
    create: XOR<ChatGroupCreateWithoutAccountInput, ChatGroupUncheckedCreateWithoutAccountInput>
  }

  export type ChatGroupCreateManyAccountInputEnvelope = {
    data: ChatGroupCreateManyAccountInput | ChatGroupCreateManyAccountInput[]
  }

  export type MessageTemplateCreateWithoutAccountInput = {
    id?: string
    name: string
    category: string
    language: string
    status?: string
    components: JsonNullValueInput | InputJsonValue
    whatsappId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rejectionReason?: string | null
    broadcasts?: WhatsAppBroadcastCreateNestedManyWithoutTemplateInput
  }

  export type MessageTemplateUncheckedCreateWithoutAccountInput = {
    id?: string
    name: string
    category: string
    language: string
    status?: string
    components: JsonNullValueInput | InputJsonValue
    whatsappId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rejectionReason?: string | null
    broadcasts?: WhatsAppBroadcastUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type MessageTemplateCreateOrConnectWithoutAccountInput = {
    where: MessageTemplateWhereUniqueInput
    create: XOR<MessageTemplateCreateWithoutAccountInput, MessageTemplateUncheckedCreateWithoutAccountInput>
  }

  export type MessageTemplateCreateManyAccountInputEnvelope = {
    data: MessageTemplateCreateManyAccountInput | MessageTemplateCreateManyAccountInput[]
  }

  export type WhatsAppBroadcastCreateWithoutAccountInput = {
    id?: string
    name: string
    status?: string
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipients?: number
    sent?: number
    delivered?: number
    read?: number
    failed?: number
    templateParameters?: NullableJsonNullValueInput | InputJsonValue
    attachments?: BroadcastAttachmentCreateNestedManyWithoutBroadcastInput
    template: MessageTemplateCreateNestedOneWithoutBroadcastsInput
    clientList: ClientListCreateNestedOneWithoutBroadcastsInput
  }

  export type WhatsAppBroadcastUncheckedCreateWithoutAccountInput = {
    id?: string
    name: string
    status?: string
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipients?: number
    sent?: number
    delivered?: number
    read?: number
    failed?: number
    templateParameters?: NullableJsonNullValueInput | InputJsonValue
    clientListId: string
    templateId: string
    attachments?: BroadcastAttachmentUncheckedCreateNestedManyWithoutBroadcastInput
  }

  export type WhatsAppBroadcastCreateOrConnectWithoutAccountInput = {
    where: WhatsAppBroadcastWhereUniqueInput
    create: XOR<WhatsAppBroadcastCreateWithoutAccountInput, WhatsAppBroadcastUncheckedCreateWithoutAccountInput>
  }

  export type WhatsAppBroadcastCreateManyAccountInputEnvelope = {
    data: WhatsAppBroadcastCreateManyAccountInput | WhatsAppBroadcastCreateManyAccountInput[]
  }

  export type WhatsAppChatCreateWithoutAccountInput = {
    id?: string
    phoneNumber: string
    displayName?: string | null
    lastMessageAt?: Date | string
    unreadCount?: number
    assistantEnabled?: boolean
    threadId?: string | null
    group?: string | null
    messages?: WhatsAppMessageCreateNestedManyWithoutChatInput
  }

  export type WhatsAppChatUncheckedCreateWithoutAccountInput = {
    id?: string
    phoneNumber: string
    displayName?: string | null
    lastMessageAt?: Date | string
    unreadCount?: number
    assistantEnabled?: boolean
    threadId?: string | null
    group?: string | null
    messages?: WhatsAppMessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type WhatsAppChatCreateOrConnectWithoutAccountInput = {
    where: WhatsAppChatWhereUniqueInput
    create: XOR<WhatsAppChatCreateWithoutAccountInput, WhatsAppChatUncheckedCreateWithoutAccountInput>
  }

  export type WhatsAppChatCreateManyAccountInputEnvelope = {
    data: WhatsAppChatCreateManyAccountInput | WhatsAppChatCreateManyAccountInput[]
  }

  export type WhatsAppMessageCreateWithoutAccountInput = {
    id?: string
    whatsappId?: string | null
    from: string
    to: string
    type?: string
    content: string
    timestamp?: Date | string
    status?: string
    errorData?: string | null
    isAssistant?: boolean
    chat: WhatsAppChatCreateNestedOneWithoutMessagesInput
  }

  export type WhatsAppMessageUncheckedCreateWithoutAccountInput = {
    id?: string
    whatsappId?: string | null
    from: string
    to: string
    type?: string
    content: string
    timestamp?: Date | string
    status?: string
    errorData?: string | null
    chatId: string
    isAssistant?: boolean
  }

  export type WhatsAppMessageCreateOrConnectWithoutAccountInput = {
    where: WhatsAppMessageWhereUniqueInput
    create: XOR<WhatsAppMessageCreateWithoutAccountInput, WhatsAppMessageUncheckedCreateWithoutAccountInput>
  }

  export type WhatsAppMessageCreateManyAccountInputEnvelope = {
    data: WhatsAppMessageCreateManyAccountInput | WhatsAppMessageCreateManyAccountInput[]
  }

  export type AssistantSettingsUpsertWithoutAccountInput = {
    update: XOR<AssistantSettingsUpdateWithoutAccountInput, AssistantSettingsUncheckedUpdateWithoutAccountInput>
    create: XOR<AssistantSettingsCreateWithoutAccountInput, AssistantSettingsUncheckedCreateWithoutAccountInput>
    where?: AssistantSettingsWhereInput
  }

  export type AssistantSettingsUpdateToOneWithWhereWithoutAccountInput = {
    where?: AssistantSettingsWhereInput
    data: XOR<AssistantSettingsUpdateWithoutAccountInput, AssistantSettingsUncheckedUpdateWithoutAccountInput>
  }

  export type AssistantSettingsUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    openAiKey?: StringFieldUpdateOperationsInput | string
    assistantId?: NullableStringFieldUpdateOperationsInput | string | null
    isConfigured?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssistantSettingsUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    openAiKey?: StringFieldUpdateOperationsInput | string
    assistantId?: NullableStringFieldUpdateOperationsInput | string | null
    isConfigured?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupUpsertWithWhereUniqueWithoutAccountInput = {
    where: ChatGroupWhereUniqueInput
    update: XOR<ChatGroupUpdateWithoutAccountInput, ChatGroupUncheckedUpdateWithoutAccountInput>
    create: XOR<ChatGroupCreateWithoutAccountInput, ChatGroupUncheckedCreateWithoutAccountInput>
  }

  export type ChatGroupUpdateWithWhereUniqueWithoutAccountInput = {
    where: ChatGroupWhereUniqueInput
    data: XOR<ChatGroupUpdateWithoutAccountInput, ChatGroupUncheckedUpdateWithoutAccountInput>
  }

  export type ChatGroupUpdateManyWithWhereWithoutAccountInput = {
    where: ChatGroupScalarWhereInput
    data: XOR<ChatGroupUpdateManyMutationInput, ChatGroupUncheckedUpdateManyWithoutAccountInput>
  }

  export type ChatGroupScalarWhereInput = {
    AND?: ChatGroupScalarWhereInput | ChatGroupScalarWhereInput[]
    OR?: ChatGroupScalarWhereInput[]
    NOT?: ChatGroupScalarWhereInput | ChatGroupScalarWhereInput[]
    id?: StringFilter<"ChatGroup"> | string
    name?: StringFilter<"ChatGroup"> | string
    accountId?: StringFilter<"ChatGroup"> | string
    createdAt?: DateTimeFilter<"ChatGroup"> | Date | string
    updatedAt?: DateTimeFilter<"ChatGroup"> | Date | string
  }

  export type MessageTemplateUpsertWithWhereUniqueWithoutAccountInput = {
    where: MessageTemplateWhereUniqueInput
    update: XOR<MessageTemplateUpdateWithoutAccountInput, MessageTemplateUncheckedUpdateWithoutAccountInput>
    create: XOR<MessageTemplateCreateWithoutAccountInput, MessageTemplateUncheckedCreateWithoutAccountInput>
  }

  export type MessageTemplateUpdateWithWhereUniqueWithoutAccountInput = {
    where: MessageTemplateWhereUniqueInput
    data: XOR<MessageTemplateUpdateWithoutAccountInput, MessageTemplateUncheckedUpdateWithoutAccountInput>
  }

  export type MessageTemplateUpdateManyWithWhereWithoutAccountInput = {
    where: MessageTemplateScalarWhereInput
    data: XOR<MessageTemplateUpdateManyMutationInput, MessageTemplateUncheckedUpdateManyWithoutAccountInput>
  }

  export type MessageTemplateScalarWhereInput = {
    AND?: MessageTemplateScalarWhereInput | MessageTemplateScalarWhereInput[]
    OR?: MessageTemplateScalarWhereInput[]
    NOT?: MessageTemplateScalarWhereInput | MessageTemplateScalarWhereInput[]
    id?: StringFilter<"MessageTemplate"> | string
    name?: StringFilter<"MessageTemplate"> | string
    category?: StringFilter<"MessageTemplate"> | string
    language?: StringFilter<"MessageTemplate"> | string
    status?: StringFilter<"MessageTemplate"> | string
    components?: JsonFilter<"MessageTemplate">
    whatsappId?: StringNullableFilter<"MessageTemplate"> | string | null
    accountId?: StringFilter<"MessageTemplate"> | string
    createdAt?: DateTimeFilter<"MessageTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"MessageTemplate"> | Date | string
    rejectionReason?: StringNullableFilter<"MessageTemplate"> | string | null
  }

  export type WhatsAppBroadcastUpsertWithWhereUniqueWithoutAccountInput = {
    where: WhatsAppBroadcastWhereUniqueInput
    update: XOR<WhatsAppBroadcastUpdateWithoutAccountInput, WhatsAppBroadcastUncheckedUpdateWithoutAccountInput>
    create: XOR<WhatsAppBroadcastCreateWithoutAccountInput, WhatsAppBroadcastUncheckedCreateWithoutAccountInput>
  }

  export type WhatsAppBroadcastUpdateWithWhereUniqueWithoutAccountInput = {
    where: WhatsAppBroadcastWhereUniqueInput
    data: XOR<WhatsAppBroadcastUpdateWithoutAccountInput, WhatsAppBroadcastUncheckedUpdateWithoutAccountInput>
  }

  export type WhatsAppBroadcastUpdateManyWithWhereWithoutAccountInput = {
    where: WhatsAppBroadcastScalarWhereInput
    data: XOR<WhatsAppBroadcastUpdateManyMutationInput, WhatsAppBroadcastUncheckedUpdateManyWithoutAccountInput>
  }

  export type WhatsAppBroadcastScalarWhereInput = {
    AND?: WhatsAppBroadcastScalarWhereInput | WhatsAppBroadcastScalarWhereInput[]
    OR?: WhatsAppBroadcastScalarWhereInput[]
    NOT?: WhatsAppBroadcastScalarWhereInput | WhatsAppBroadcastScalarWhereInput[]
    id?: StringFilter<"WhatsAppBroadcast"> | string
    name?: StringFilter<"WhatsAppBroadcast"> | string
    status?: StringFilter<"WhatsAppBroadcast"> | string
    scheduledAt?: DateTimeNullableFilter<"WhatsAppBroadcast"> | Date | string | null
    createdAt?: DateTimeFilter<"WhatsAppBroadcast"> | Date | string
    updatedAt?: DateTimeFilter<"WhatsAppBroadcast"> | Date | string
    recipients?: IntFilter<"WhatsAppBroadcast"> | number
    sent?: IntFilter<"WhatsAppBroadcast"> | number
    delivered?: IntFilter<"WhatsAppBroadcast"> | number
    read?: IntFilter<"WhatsAppBroadcast"> | number
    failed?: IntFilter<"WhatsAppBroadcast"> | number
    templateParameters?: JsonNullableFilter<"WhatsAppBroadcast">
    accountId?: StringFilter<"WhatsAppBroadcast"> | string
    clientListId?: StringFilter<"WhatsAppBroadcast"> | string
    templateId?: StringFilter<"WhatsAppBroadcast"> | string
  }

  export type WhatsAppChatUpsertWithWhereUniqueWithoutAccountInput = {
    where: WhatsAppChatWhereUniqueInput
    update: XOR<WhatsAppChatUpdateWithoutAccountInput, WhatsAppChatUncheckedUpdateWithoutAccountInput>
    create: XOR<WhatsAppChatCreateWithoutAccountInput, WhatsAppChatUncheckedCreateWithoutAccountInput>
  }

  export type WhatsAppChatUpdateWithWhereUniqueWithoutAccountInput = {
    where: WhatsAppChatWhereUniqueInput
    data: XOR<WhatsAppChatUpdateWithoutAccountInput, WhatsAppChatUncheckedUpdateWithoutAccountInput>
  }

  export type WhatsAppChatUpdateManyWithWhereWithoutAccountInput = {
    where: WhatsAppChatScalarWhereInput
    data: XOR<WhatsAppChatUpdateManyMutationInput, WhatsAppChatUncheckedUpdateManyWithoutAccountInput>
  }

  export type WhatsAppChatScalarWhereInput = {
    AND?: WhatsAppChatScalarWhereInput | WhatsAppChatScalarWhereInput[]
    OR?: WhatsAppChatScalarWhereInput[]
    NOT?: WhatsAppChatScalarWhereInput | WhatsAppChatScalarWhereInput[]
    id?: StringFilter<"WhatsAppChat"> | string
    phoneNumber?: StringFilter<"WhatsAppChat"> | string
    displayName?: StringNullableFilter<"WhatsAppChat"> | string | null
    lastMessageAt?: DateTimeFilter<"WhatsAppChat"> | Date | string
    unreadCount?: IntFilter<"WhatsAppChat"> | number
    accountId?: StringFilter<"WhatsAppChat"> | string
    assistantEnabled?: BoolFilter<"WhatsAppChat"> | boolean
    threadId?: StringNullableFilter<"WhatsAppChat"> | string | null
    group?: StringNullableFilter<"WhatsAppChat"> | string | null
  }

  export type WhatsAppMessageUpsertWithWhereUniqueWithoutAccountInput = {
    where: WhatsAppMessageWhereUniqueInput
    update: XOR<WhatsAppMessageUpdateWithoutAccountInput, WhatsAppMessageUncheckedUpdateWithoutAccountInput>
    create: XOR<WhatsAppMessageCreateWithoutAccountInput, WhatsAppMessageUncheckedCreateWithoutAccountInput>
  }

  export type WhatsAppMessageUpdateWithWhereUniqueWithoutAccountInput = {
    where: WhatsAppMessageWhereUniqueInput
    data: XOR<WhatsAppMessageUpdateWithoutAccountInput, WhatsAppMessageUncheckedUpdateWithoutAccountInput>
  }

  export type WhatsAppMessageUpdateManyWithWhereWithoutAccountInput = {
    where: WhatsAppMessageScalarWhereInput
    data: XOR<WhatsAppMessageUpdateManyMutationInput, WhatsAppMessageUncheckedUpdateManyWithoutAccountInput>
  }

  export type WhatsAppMessageScalarWhereInput = {
    AND?: WhatsAppMessageScalarWhereInput | WhatsAppMessageScalarWhereInput[]
    OR?: WhatsAppMessageScalarWhereInput[]
    NOT?: WhatsAppMessageScalarWhereInput | WhatsAppMessageScalarWhereInput[]
    id?: StringFilter<"WhatsAppMessage"> | string
    whatsappId?: StringNullableFilter<"WhatsAppMessage"> | string | null
    from?: StringFilter<"WhatsAppMessage"> | string
    to?: StringFilter<"WhatsAppMessage"> | string
    type?: StringFilter<"WhatsAppMessage"> | string
    content?: StringFilter<"WhatsAppMessage"> | string
    timestamp?: DateTimeFilter<"WhatsAppMessage"> | Date | string
    status?: StringFilter<"WhatsAppMessage"> | string
    errorData?: StringNullableFilter<"WhatsAppMessage"> | string | null
    accountId?: StringFilter<"WhatsAppMessage"> | string
    chatId?: StringFilter<"WhatsAppMessage"> | string
    isAssistant?: BoolFilter<"WhatsAppMessage"> | boolean
  }

  export type WhatsAppChatCreateWithoutMessagesInput = {
    id?: string
    phoneNumber: string
    displayName?: string | null
    lastMessageAt?: Date | string
    unreadCount?: number
    assistantEnabled?: boolean
    threadId?: string | null
    group?: string | null
    account: WhatsAppAccountCreateNestedOneWithoutChatsInput
  }

  export type WhatsAppChatUncheckedCreateWithoutMessagesInput = {
    id?: string
    phoneNumber: string
    displayName?: string | null
    lastMessageAt?: Date | string
    unreadCount?: number
    accountId: string
    assistantEnabled?: boolean
    threadId?: string | null
    group?: string | null
  }

  export type WhatsAppChatCreateOrConnectWithoutMessagesInput = {
    where: WhatsAppChatWhereUniqueInput
    create: XOR<WhatsAppChatCreateWithoutMessagesInput, WhatsAppChatUncheckedCreateWithoutMessagesInput>
  }

  export type WhatsAppAccountCreateWithoutMessagesInput = {
    id?: string
    name: string
    phoneNumber: string
    isActive?: boolean
    verified?: boolean
    phoneNumberId: string
    businessAccountId: string
    accessToken: string
    webhookSecret?: string | null
    maxConcurrentMessages?: number
    retryAttempts?: number
    gptModel?: string
    maxTokens?: number
    temperature?: number
    totalMessages?: number
    avgResponseTime?: number
    lastActive?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assistantSettings?: AssistantSettingsCreateNestedOneWithoutAccountInput
    groups?: ChatGroupCreateNestedManyWithoutAccountInput
    templates?: MessageTemplateCreateNestedManyWithoutAccountInput
    broadcasts?: WhatsAppBroadcastCreateNestedManyWithoutAccountInput
    chats?: WhatsAppChatCreateNestedManyWithoutAccountInput
  }

  export type WhatsAppAccountUncheckedCreateWithoutMessagesInput = {
    id?: string
    name: string
    phoneNumber: string
    isActive?: boolean
    verified?: boolean
    phoneNumberId: string
    businessAccountId: string
    accessToken: string
    webhookSecret?: string | null
    maxConcurrentMessages?: number
    retryAttempts?: number
    gptModel?: string
    maxTokens?: number
    temperature?: number
    totalMessages?: number
    avgResponseTime?: number
    lastActive?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assistantSettings?: AssistantSettingsUncheckedCreateNestedOneWithoutAccountInput
    groups?: ChatGroupUncheckedCreateNestedManyWithoutAccountInput
    templates?: MessageTemplateUncheckedCreateNestedManyWithoutAccountInput
    broadcasts?: WhatsAppBroadcastUncheckedCreateNestedManyWithoutAccountInput
    chats?: WhatsAppChatUncheckedCreateNestedManyWithoutAccountInput
  }

  export type WhatsAppAccountCreateOrConnectWithoutMessagesInput = {
    where: WhatsAppAccountWhereUniqueInput
    create: XOR<WhatsAppAccountCreateWithoutMessagesInput, WhatsAppAccountUncheckedCreateWithoutMessagesInput>
  }

  export type WhatsAppChatUpsertWithoutMessagesInput = {
    update: XOR<WhatsAppChatUpdateWithoutMessagesInput, WhatsAppChatUncheckedUpdateWithoutMessagesInput>
    create: XOR<WhatsAppChatCreateWithoutMessagesInput, WhatsAppChatUncheckedCreateWithoutMessagesInput>
    where?: WhatsAppChatWhereInput
  }

  export type WhatsAppChatUpdateToOneWithWhereWithoutMessagesInput = {
    where?: WhatsAppChatWhereInput
    data: XOR<WhatsAppChatUpdateWithoutMessagesInput, WhatsAppChatUncheckedUpdateWithoutMessagesInput>
  }

  export type WhatsAppChatUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unreadCount?: IntFieldUpdateOperationsInput | number
    assistantEnabled?: BoolFieldUpdateOperationsInput | boolean
    threadId?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
    account?: WhatsAppAccountUpdateOneRequiredWithoutChatsNestedInput
  }

  export type WhatsAppChatUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unreadCount?: IntFieldUpdateOperationsInput | number
    accountId?: StringFieldUpdateOperationsInput | string
    assistantEnabled?: BoolFieldUpdateOperationsInput | boolean
    threadId?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WhatsAppAccountUpsertWithoutMessagesInput = {
    update: XOR<WhatsAppAccountUpdateWithoutMessagesInput, WhatsAppAccountUncheckedUpdateWithoutMessagesInput>
    create: XOR<WhatsAppAccountCreateWithoutMessagesInput, WhatsAppAccountUncheckedCreateWithoutMessagesInput>
    where?: WhatsAppAccountWhereInput
  }

  export type WhatsAppAccountUpdateToOneWithWhereWithoutMessagesInput = {
    where?: WhatsAppAccountWhereInput
    data: XOR<WhatsAppAccountUpdateWithoutMessagesInput, WhatsAppAccountUncheckedUpdateWithoutMessagesInput>
  }

  export type WhatsAppAccountUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    businessAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    webhookSecret?: NullableStringFieldUpdateOperationsInput | string | null
    maxConcurrentMessages?: IntFieldUpdateOperationsInput | number
    retryAttempts?: IntFieldUpdateOperationsInput | number
    gptModel?: StringFieldUpdateOperationsInput | string
    maxTokens?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    totalMessages?: IntFieldUpdateOperationsInput | number
    avgResponseTime?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assistantSettings?: AssistantSettingsUpdateOneWithoutAccountNestedInput
    groups?: ChatGroupUpdateManyWithoutAccountNestedInput
    templates?: MessageTemplateUpdateManyWithoutAccountNestedInput
    broadcasts?: WhatsAppBroadcastUpdateManyWithoutAccountNestedInput
    chats?: WhatsAppChatUpdateManyWithoutAccountNestedInput
  }

  export type WhatsAppAccountUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    businessAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    webhookSecret?: NullableStringFieldUpdateOperationsInput | string | null
    maxConcurrentMessages?: IntFieldUpdateOperationsInput | number
    retryAttempts?: IntFieldUpdateOperationsInput | number
    gptModel?: StringFieldUpdateOperationsInput | string
    maxTokens?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    totalMessages?: IntFieldUpdateOperationsInput | number
    avgResponseTime?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assistantSettings?: AssistantSettingsUncheckedUpdateOneWithoutAccountNestedInput
    groups?: ChatGroupUncheckedUpdateManyWithoutAccountNestedInput
    templates?: MessageTemplateUncheckedUpdateManyWithoutAccountNestedInput
    broadcasts?: WhatsAppBroadcastUncheckedUpdateManyWithoutAccountNestedInput
    chats?: WhatsAppChatUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type WhatsAppAccountCreateWithoutChatsInput = {
    id?: string
    name: string
    phoneNumber: string
    isActive?: boolean
    verified?: boolean
    phoneNumberId: string
    businessAccountId: string
    accessToken: string
    webhookSecret?: string | null
    maxConcurrentMessages?: number
    retryAttempts?: number
    gptModel?: string
    maxTokens?: number
    temperature?: number
    totalMessages?: number
    avgResponseTime?: number
    lastActive?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assistantSettings?: AssistantSettingsCreateNestedOneWithoutAccountInput
    groups?: ChatGroupCreateNestedManyWithoutAccountInput
    templates?: MessageTemplateCreateNestedManyWithoutAccountInput
    broadcasts?: WhatsAppBroadcastCreateNestedManyWithoutAccountInput
    messages?: WhatsAppMessageCreateNestedManyWithoutAccountInput
  }

  export type WhatsAppAccountUncheckedCreateWithoutChatsInput = {
    id?: string
    name: string
    phoneNumber: string
    isActive?: boolean
    verified?: boolean
    phoneNumberId: string
    businessAccountId: string
    accessToken: string
    webhookSecret?: string | null
    maxConcurrentMessages?: number
    retryAttempts?: number
    gptModel?: string
    maxTokens?: number
    temperature?: number
    totalMessages?: number
    avgResponseTime?: number
    lastActive?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assistantSettings?: AssistantSettingsUncheckedCreateNestedOneWithoutAccountInput
    groups?: ChatGroupUncheckedCreateNestedManyWithoutAccountInput
    templates?: MessageTemplateUncheckedCreateNestedManyWithoutAccountInput
    broadcasts?: WhatsAppBroadcastUncheckedCreateNestedManyWithoutAccountInput
    messages?: WhatsAppMessageUncheckedCreateNestedManyWithoutAccountInput
  }

  export type WhatsAppAccountCreateOrConnectWithoutChatsInput = {
    where: WhatsAppAccountWhereUniqueInput
    create: XOR<WhatsAppAccountCreateWithoutChatsInput, WhatsAppAccountUncheckedCreateWithoutChatsInput>
  }

  export type WhatsAppMessageCreateWithoutChatInput = {
    id?: string
    whatsappId?: string | null
    from: string
    to: string
    type?: string
    content: string
    timestamp?: Date | string
    status?: string
    errorData?: string | null
    isAssistant?: boolean
    account: WhatsAppAccountCreateNestedOneWithoutMessagesInput
  }

  export type WhatsAppMessageUncheckedCreateWithoutChatInput = {
    id?: string
    whatsappId?: string | null
    from: string
    to: string
    type?: string
    content: string
    timestamp?: Date | string
    status?: string
    errorData?: string | null
    accountId: string
    isAssistant?: boolean
  }

  export type WhatsAppMessageCreateOrConnectWithoutChatInput = {
    where: WhatsAppMessageWhereUniqueInput
    create: XOR<WhatsAppMessageCreateWithoutChatInput, WhatsAppMessageUncheckedCreateWithoutChatInput>
  }

  export type WhatsAppMessageCreateManyChatInputEnvelope = {
    data: WhatsAppMessageCreateManyChatInput | WhatsAppMessageCreateManyChatInput[]
  }

  export type WhatsAppAccountUpsertWithoutChatsInput = {
    update: XOR<WhatsAppAccountUpdateWithoutChatsInput, WhatsAppAccountUncheckedUpdateWithoutChatsInput>
    create: XOR<WhatsAppAccountCreateWithoutChatsInput, WhatsAppAccountUncheckedCreateWithoutChatsInput>
    where?: WhatsAppAccountWhereInput
  }

  export type WhatsAppAccountUpdateToOneWithWhereWithoutChatsInput = {
    where?: WhatsAppAccountWhereInput
    data: XOR<WhatsAppAccountUpdateWithoutChatsInput, WhatsAppAccountUncheckedUpdateWithoutChatsInput>
  }

  export type WhatsAppAccountUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    businessAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    webhookSecret?: NullableStringFieldUpdateOperationsInput | string | null
    maxConcurrentMessages?: IntFieldUpdateOperationsInput | number
    retryAttempts?: IntFieldUpdateOperationsInput | number
    gptModel?: StringFieldUpdateOperationsInput | string
    maxTokens?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    totalMessages?: IntFieldUpdateOperationsInput | number
    avgResponseTime?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assistantSettings?: AssistantSettingsUpdateOneWithoutAccountNestedInput
    groups?: ChatGroupUpdateManyWithoutAccountNestedInput
    templates?: MessageTemplateUpdateManyWithoutAccountNestedInput
    broadcasts?: WhatsAppBroadcastUpdateManyWithoutAccountNestedInput
    messages?: WhatsAppMessageUpdateManyWithoutAccountNestedInput
  }

  export type WhatsAppAccountUncheckedUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    businessAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    webhookSecret?: NullableStringFieldUpdateOperationsInput | string | null
    maxConcurrentMessages?: IntFieldUpdateOperationsInput | number
    retryAttempts?: IntFieldUpdateOperationsInput | number
    gptModel?: StringFieldUpdateOperationsInput | string
    maxTokens?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    totalMessages?: IntFieldUpdateOperationsInput | number
    avgResponseTime?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assistantSettings?: AssistantSettingsUncheckedUpdateOneWithoutAccountNestedInput
    groups?: ChatGroupUncheckedUpdateManyWithoutAccountNestedInput
    templates?: MessageTemplateUncheckedUpdateManyWithoutAccountNestedInput
    broadcasts?: WhatsAppBroadcastUncheckedUpdateManyWithoutAccountNestedInput
    messages?: WhatsAppMessageUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type WhatsAppMessageUpsertWithWhereUniqueWithoutChatInput = {
    where: WhatsAppMessageWhereUniqueInput
    update: XOR<WhatsAppMessageUpdateWithoutChatInput, WhatsAppMessageUncheckedUpdateWithoutChatInput>
    create: XOR<WhatsAppMessageCreateWithoutChatInput, WhatsAppMessageUncheckedCreateWithoutChatInput>
  }

  export type WhatsAppMessageUpdateWithWhereUniqueWithoutChatInput = {
    where: WhatsAppMessageWhereUniqueInput
    data: XOR<WhatsAppMessageUpdateWithoutChatInput, WhatsAppMessageUncheckedUpdateWithoutChatInput>
  }

  export type WhatsAppMessageUpdateManyWithWhereWithoutChatInput = {
    where: WhatsAppMessageScalarWhereInput
    data: XOR<WhatsAppMessageUpdateManyMutationInput, WhatsAppMessageUncheckedUpdateManyWithoutChatInput>
  }

  export type WhatsAppAccountCreateWithoutTemplatesInput = {
    id?: string
    name: string
    phoneNumber: string
    isActive?: boolean
    verified?: boolean
    phoneNumberId: string
    businessAccountId: string
    accessToken: string
    webhookSecret?: string | null
    maxConcurrentMessages?: number
    retryAttempts?: number
    gptModel?: string
    maxTokens?: number
    temperature?: number
    totalMessages?: number
    avgResponseTime?: number
    lastActive?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assistantSettings?: AssistantSettingsCreateNestedOneWithoutAccountInput
    groups?: ChatGroupCreateNestedManyWithoutAccountInput
    broadcasts?: WhatsAppBroadcastCreateNestedManyWithoutAccountInput
    chats?: WhatsAppChatCreateNestedManyWithoutAccountInput
    messages?: WhatsAppMessageCreateNestedManyWithoutAccountInput
  }

  export type WhatsAppAccountUncheckedCreateWithoutTemplatesInput = {
    id?: string
    name: string
    phoneNumber: string
    isActive?: boolean
    verified?: boolean
    phoneNumberId: string
    businessAccountId: string
    accessToken: string
    webhookSecret?: string | null
    maxConcurrentMessages?: number
    retryAttempts?: number
    gptModel?: string
    maxTokens?: number
    temperature?: number
    totalMessages?: number
    avgResponseTime?: number
    lastActive?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assistantSettings?: AssistantSettingsUncheckedCreateNestedOneWithoutAccountInput
    groups?: ChatGroupUncheckedCreateNestedManyWithoutAccountInput
    broadcasts?: WhatsAppBroadcastUncheckedCreateNestedManyWithoutAccountInput
    chats?: WhatsAppChatUncheckedCreateNestedManyWithoutAccountInput
    messages?: WhatsAppMessageUncheckedCreateNestedManyWithoutAccountInput
  }

  export type WhatsAppAccountCreateOrConnectWithoutTemplatesInput = {
    where: WhatsAppAccountWhereUniqueInput
    create: XOR<WhatsAppAccountCreateWithoutTemplatesInput, WhatsAppAccountUncheckedCreateWithoutTemplatesInput>
  }

  export type WhatsAppBroadcastCreateWithoutTemplateInput = {
    id?: string
    name: string
    status?: string
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipients?: number
    sent?: number
    delivered?: number
    read?: number
    failed?: number
    templateParameters?: NullableJsonNullValueInput | InputJsonValue
    attachments?: BroadcastAttachmentCreateNestedManyWithoutBroadcastInput
    clientList: ClientListCreateNestedOneWithoutBroadcastsInput
    account: WhatsAppAccountCreateNestedOneWithoutBroadcastsInput
  }

  export type WhatsAppBroadcastUncheckedCreateWithoutTemplateInput = {
    id?: string
    name: string
    status?: string
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipients?: number
    sent?: number
    delivered?: number
    read?: number
    failed?: number
    templateParameters?: NullableJsonNullValueInput | InputJsonValue
    accountId: string
    clientListId: string
    attachments?: BroadcastAttachmentUncheckedCreateNestedManyWithoutBroadcastInput
  }

  export type WhatsAppBroadcastCreateOrConnectWithoutTemplateInput = {
    where: WhatsAppBroadcastWhereUniqueInput
    create: XOR<WhatsAppBroadcastCreateWithoutTemplateInput, WhatsAppBroadcastUncheckedCreateWithoutTemplateInput>
  }

  export type WhatsAppBroadcastCreateManyTemplateInputEnvelope = {
    data: WhatsAppBroadcastCreateManyTemplateInput | WhatsAppBroadcastCreateManyTemplateInput[]
  }

  export type WhatsAppAccountUpsertWithoutTemplatesInput = {
    update: XOR<WhatsAppAccountUpdateWithoutTemplatesInput, WhatsAppAccountUncheckedUpdateWithoutTemplatesInput>
    create: XOR<WhatsAppAccountCreateWithoutTemplatesInput, WhatsAppAccountUncheckedCreateWithoutTemplatesInput>
    where?: WhatsAppAccountWhereInput
  }

  export type WhatsAppAccountUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: WhatsAppAccountWhereInput
    data: XOR<WhatsAppAccountUpdateWithoutTemplatesInput, WhatsAppAccountUncheckedUpdateWithoutTemplatesInput>
  }

  export type WhatsAppAccountUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    businessAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    webhookSecret?: NullableStringFieldUpdateOperationsInput | string | null
    maxConcurrentMessages?: IntFieldUpdateOperationsInput | number
    retryAttempts?: IntFieldUpdateOperationsInput | number
    gptModel?: StringFieldUpdateOperationsInput | string
    maxTokens?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    totalMessages?: IntFieldUpdateOperationsInput | number
    avgResponseTime?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assistantSettings?: AssistantSettingsUpdateOneWithoutAccountNestedInput
    groups?: ChatGroupUpdateManyWithoutAccountNestedInput
    broadcasts?: WhatsAppBroadcastUpdateManyWithoutAccountNestedInput
    chats?: WhatsAppChatUpdateManyWithoutAccountNestedInput
    messages?: WhatsAppMessageUpdateManyWithoutAccountNestedInput
  }

  export type WhatsAppAccountUncheckedUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    businessAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    webhookSecret?: NullableStringFieldUpdateOperationsInput | string | null
    maxConcurrentMessages?: IntFieldUpdateOperationsInput | number
    retryAttempts?: IntFieldUpdateOperationsInput | number
    gptModel?: StringFieldUpdateOperationsInput | string
    maxTokens?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    totalMessages?: IntFieldUpdateOperationsInput | number
    avgResponseTime?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assistantSettings?: AssistantSettingsUncheckedUpdateOneWithoutAccountNestedInput
    groups?: ChatGroupUncheckedUpdateManyWithoutAccountNestedInput
    broadcasts?: WhatsAppBroadcastUncheckedUpdateManyWithoutAccountNestedInput
    chats?: WhatsAppChatUncheckedUpdateManyWithoutAccountNestedInput
    messages?: WhatsAppMessageUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type WhatsAppBroadcastUpsertWithWhereUniqueWithoutTemplateInput = {
    where: WhatsAppBroadcastWhereUniqueInput
    update: XOR<WhatsAppBroadcastUpdateWithoutTemplateInput, WhatsAppBroadcastUncheckedUpdateWithoutTemplateInput>
    create: XOR<WhatsAppBroadcastCreateWithoutTemplateInput, WhatsAppBroadcastUncheckedCreateWithoutTemplateInput>
  }

  export type WhatsAppBroadcastUpdateWithWhereUniqueWithoutTemplateInput = {
    where: WhatsAppBroadcastWhereUniqueInput
    data: XOR<WhatsAppBroadcastUpdateWithoutTemplateInput, WhatsAppBroadcastUncheckedUpdateWithoutTemplateInput>
  }

  export type WhatsAppBroadcastUpdateManyWithWhereWithoutTemplateInput = {
    where: WhatsAppBroadcastScalarWhereInput
    data: XOR<WhatsAppBroadcastUpdateManyMutationInput, WhatsAppBroadcastUncheckedUpdateManyWithoutTemplateInput>
  }

  export type BroadcastAttachmentCreateWithoutBroadcastInput = {
    id?: string
    filename: string
    type: string
    url: string
    size: number
    createdAt?: Date | string
  }

  export type BroadcastAttachmentUncheckedCreateWithoutBroadcastInput = {
    id?: string
    filename: string
    type: string
    url: string
    size: number
    createdAt?: Date | string
  }

  export type BroadcastAttachmentCreateOrConnectWithoutBroadcastInput = {
    where: BroadcastAttachmentWhereUniqueInput
    create: XOR<BroadcastAttachmentCreateWithoutBroadcastInput, BroadcastAttachmentUncheckedCreateWithoutBroadcastInput>
  }

  export type BroadcastAttachmentCreateManyBroadcastInputEnvelope = {
    data: BroadcastAttachmentCreateManyBroadcastInput | BroadcastAttachmentCreateManyBroadcastInput[]
  }

  export type MessageTemplateCreateWithoutBroadcastsInput = {
    id?: string
    name: string
    category: string
    language: string
    status?: string
    components: JsonNullValueInput | InputJsonValue
    whatsappId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rejectionReason?: string | null
    account: WhatsAppAccountCreateNestedOneWithoutTemplatesInput
  }

  export type MessageTemplateUncheckedCreateWithoutBroadcastsInput = {
    id?: string
    name: string
    category: string
    language: string
    status?: string
    components: JsonNullValueInput | InputJsonValue
    whatsappId?: string | null
    accountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rejectionReason?: string | null
  }

  export type MessageTemplateCreateOrConnectWithoutBroadcastsInput = {
    where: MessageTemplateWhereUniqueInput
    create: XOR<MessageTemplateCreateWithoutBroadcastsInput, MessageTemplateUncheckedCreateWithoutBroadcastsInput>
  }

  export type ClientListCreateWithoutBroadcastsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClientListsInput
    phoneNumbers?: PhoneNumberCreateNestedManyWithoutClientListInput
    clients?: ClientCreateNestedManyWithoutListsInput
  }

  export type ClientListUncheckedCreateWithoutBroadcastsInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    phoneNumbers?: PhoneNumberUncheckedCreateNestedManyWithoutClientListInput
    clients?: ClientUncheckedCreateNestedManyWithoutListsInput
  }

  export type ClientListCreateOrConnectWithoutBroadcastsInput = {
    where: ClientListWhereUniqueInput
    create: XOR<ClientListCreateWithoutBroadcastsInput, ClientListUncheckedCreateWithoutBroadcastsInput>
  }

  export type WhatsAppAccountCreateWithoutBroadcastsInput = {
    id?: string
    name: string
    phoneNumber: string
    isActive?: boolean
    verified?: boolean
    phoneNumberId: string
    businessAccountId: string
    accessToken: string
    webhookSecret?: string | null
    maxConcurrentMessages?: number
    retryAttempts?: number
    gptModel?: string
    maxTokens?: number
    temperature?: number
    totalMessages?: number
    avgResponseTime?: number
    lastActive?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assistantSettings?: AssistantSettingsCreateNestedOneWithoutAccountInput
    groups?: ChatGroupCreateNestedManyWithoutAccountInput
    templates?: MessageTemplateCreateNestedManyWithoutAccountInput
    chats?: WhatsAppChatCreateNestedManyWithoutAccountInput
    messages?: WhatsAppMessageCreateNestedManyWithoutAccountInput
  }

  export type WhatsAppAccountUncheckedCreateWithoutBroadcastsInput = {
    id?: string
    name: string
    phoneNumber: string
    isActive?: boolean
    verified?: boolean
    phoneNumberId: string
    businessAccountId: string
    accessToken: string
    webhookSecret?: string | null
    maxConcurrentMessages?: number
    retryAttempts?: number
    gptModel?: string
    maxTokens?: number
    temperature?: number
    totalMessages?: number
    avgResponseTime?: number
    lastActive?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assistantSettings?: AssistantSettingsUncheckedCreateNestedOneWithoutAccountInput
    groups?: ChatGroupUncheckedCreateNestedManyWithoutAccountInput
    templates?: MessageTemplateUncheckedCreateNestedManyWithoutAccountInput
    chats?: WhatsAppChatUncheckedCreateNestedManyWithoutAccountInput
    messages?: WhatsAppMessageUncheckedCreateNestedManyWithoutAccountInput
  }

  export type WhatsAppAccountCreateOrConnectWithoutBroadcastsInput = {
    where: WhatsAppAccountWhereUniqueInput
    create: XOR<WhatsAppAccountCreateWithoutBroadcastsInput, WhatsAppAccountUncheckedCreateWithoutBroadcastsInput>
  }

  export type BroadcastAttachmentUpsertWithWhereUniqueWithoutBroadcastInput = {
    where: BroadcastAttachmentWhereUniqueInput
    update: XOR<BroadcastAttachmentUpdateWithoutBroadcastInput, BroadcastAttachmentUncheckedUpdateWithoutBroadcastInput>
    create: XOR<BroadcastAttachmentCreateWithoutBroadcastInput, BroadcastAttachmentUncheckedCreateWithoutBroadcastInput>
  }

  export type BroadcastAttachmentUpdateWithWhereUniqueWithoutBroadcastInput = {
    where: BroadcastAttachmentWhereUniqueInput
    data: XOR<BroadcastAttachmentUpdateWithoutBroadcastInput, BroadcastAttachmentUncheckedUpdateWithoutBroadcastInput>
  }

  export type BroadcastAttachmentUpdateManyWithWhereWithoutBroadcastInput = {
    where: BroadcastAttachmentScalarWhereInput
    data: XOR<BroadcastAttachmentUpdateManyMutationInput, BroadcastAttachmentUncheckedUpdateManyWithoutBroadcastInput>
  }

  export type BroadcastAttachmentScalarWhereInput = {
    AND?: BroadcastAttachmentScalarWhereInput | BroadcastAttachmentScalarWhereInput[]
    OR?: BroadcastAttachmentScalarWhereInput[]
    NOT?: BroadcastAttachmentScalarWhereInput | BroadcastAttachmentScalarWhereInput[]
    id?: StringFilter<"BroadcastAttachment"> | string
    filename?: StringFilter<"BroadcastAttachment"> | string
    type?: StringFilter<"BroadcastAttachment"> | string
    url?: StringFilter<"BroadcastAttachment"> | string
    size?: IntFilter<"BroadcastAttachment"> | number
    createdAt?: DateTimeFilter<"BroadcastAttachment"> | Date | string
    broadcastId?: StringFilter<"BroadcastAttachment"> | string
  }

  export type MessageTemplateUpsertWithoutBroadcastsInput = {
    update: XOR<MessageTemplateUpdateWithoutBroadcastsInput, MessageTemplateUncheckedUpdateWithoutBroadcastsInput>
    create: XOR<MessageTemplateCreateWithoutBroadcastsInput, MessageTemplateUncheckedCreateWithoutBroadcastsInput>
    where?: MessageTemplateWhereInput
  }

  export type MessageTemplateUpdateToOneWithWhereWithoutBroadcastsInput = {
    where?: MessageTemplateWhereInput
    data: XOR<MessageTemplateUpdateWithoutBroadcastsInput, MessageTemplateUncheckedUpdateWithoutBroadcastsInput>
  }

  export type MessageTemplateUpdateWithoutBroadcastsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    components?: JsonNullValueInput | InputJsonValue
    whatsappId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    account?: WhatsAppAccountUpdateOneRequiredWithoutTemplatesNestedInput
  }

  export type MessageTemplateUncheckedUpdateWithoutBroadcastsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    components?: JsonNullValueInput | InputJsonValue
    whatsappId?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientListUpsertWithoutBroadcastsInput = {
    update: XOR<ClientListUpdateWithoutBroadcastsInput, ClientListUncheckedUpdateWithoutBroadcastsInput>
    create: XOR<ClientListCreateWithoutBroadcastsInput, ClientListUncheckedCreateWithoutBroadcastsInput>
    where?: ClientListWhereInput
  }

  export type ClientListUpdateToOneWithWhereWithoutBroadcastsInput = {
    where?: ClientListWhereInput
    data: XOR<ClientListUpdateWithoutBroadcastsInput, ClientListUncheckedUpdateWithoutBroadcastsInput>
  }

  export type ClientListUpdateWithoutBroadcastsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClientListsNestedInput
    phoneNumbers?: PhoneNumberUpdateManyWithoutClientListNestedInput
    clients?: ClientUpdateManyWithoutListsNestedInput
  }

  export type ClientListUncheckedUpdateWithoutBroadcastsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumbers?: PhoneNumberUncheckedUpdateManyWithoutClientListNestedInput
    clients?: ClientUncheckedUpdateManyWithoutListsNestedInput
  }

  export type WhatsAppAccountUpsertWithoutBroadcastsInput = {
    update: XOR<WhatsAppAccountUpdateWithoutBroadcastsInput, WhatsAppAccountUncheckedUpdateWithoutBroadcastsInput>
    create: XOR<WhatsAppAccountCreateWithoutBroadcastsInput, WhatsAppAccountUncheckedCreateWithoutBroadcastsInput>
    where?: WhatsAppAccountWhereInput
  }

  export type WhatsAppAccountUpdateToOneWithWhereWithoutBroadcastsInput = {
    where?: WhatsAppAccountWhereInput
    data: XOR<WhatsAppAccountUpdateWithoutBroadcastsInput, WhatsAppAccountUncheckedUpdateWithoutBroadcastsInput>
  }

  export type WhatsAppAccountUpdateWithoutBroadcastsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    businessAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    webhookSecret?: NullableStringFieldUpdateOperationsInput | string | null
    maxConcurrentMessages?: IntFieldUpdateOperationsInput | number
    retryAttempts?: IntFieldUpdateOperationsInput | number
    gptModel?: StringFieldUpdateOperationsInput | string
    maxTokens?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    totalMessages?: IntFieldUpdateOperationsInput | number
    avgResponseTime?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assistantSettings?: AssistantSettingsUpdateOneWithoutAccountNestedInput
    groups?: ChatGroupUpdateManyWithoutAccountNestedInput
    templates?: MessageTemplateUpdateManyWithoutAccountNestedInput
    chats?: WhatsAppChatUpdateManyWithoutAccountNestedInput
    messages?: WhatsAppMessageUpdateManyWithoutAccountNestedInput
  }

  export type WhatsAppAccountUncheckedUpdateWithoutBroadcastsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    businessAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    webhookSecret?: NullableStringFieldUpdateOperationsInput | string | null
    maxConcurrentMessages?: IntFieldUpdateOperationsInput | number
    retryAttempts?: IntFieldUpdateOperationsInput | number
    gptModel?: StringFieldUpdateOperationsInput | string
    maxTokens?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    totalMessages?: IntFieldUpdateOperationsInput | number
    avgResponseTime?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assistantSettings?: AssistantSettingsUncheckedUpdateOneWithoutAccountNestedInput
    groups?: ChatGroupUncheckedUpdateManyWithoutAccountNestedInput
    templates?: MessageTemplateUncheckedUpdateManyWithoutAccountNestedInput
    chats?: WhatsAppChatUncheckedUpdateManyWithoutAccountNestedInput
    messages?: WhatsAppMessageUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type WhatsAppBroadcastCreateWithoutAttachmentsInput = {
    id?: string
    name: string
    status?: string
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipients?: number
    sent?: number
    delivered?: number
    read?: number
    failed?: number
    templateParameters?: NullableJsonNullValueInput | InputJsonValue
    template: MessageTemplateCreateNestedOneWithoutBroadcastsInput
    clientList: ClientListCreateNestedOneWithoutBroadcastsInput
    account: WhatsAppAccountCreateNestedOneWithoutBroadcastsInput
  }

  export type WhatsAppBroadcastUncheckedCreateWithoutAttachmentsInput = {
    id?: string
    name: string
    status?: string
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipients?: number
    sent?: number
    delivered?: number
    read?: number
    failed?: number
    templateParameters?: NullableJsonNullValueInput | InputJsonValue
    accountId: string
    clientListId: string
    templateId: string
  }

  export type WhatsAppBroadcastCreateOrConnectWithoutAttachmentsInput = {
    where: WhatsAppBroadcastWhereUniqueInput
    create: XOR<WhatsAppBroadcastCreateWithoutAttachmentsInput, WhatsAppBroadcastUncheckedCreateWithoutAttachmentsInput>
  }

  export type WhatsAppBroadcastUpsertWithoutAttachmentsInput = {
    update: XOR<WhatsAppBroadcastUpdateWithoutAttachmentsInput, WhatsAppBroadcastUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<WhatsAppBroadcastCreateWithoutAttachmentsInput, WhatsAppBroadcastUncheckedCreateWithoutAttachmentsInput>
    where?: WhatsAppBroadcastWhereInput
  }

  export type WhatsAppBroadcastUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: WhatsAppBroadcastWhereInput
    data: XOR<WhatsAppBroadcastUpdateWithoutAttachmentsInput, WhatsAppBroadcastUncheckedUpdateWithoutAttachmentsInput>
  }

  export type WhatsAppBroadcastUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: IntFieldUpdateOperationsInput | number
    sent?: IntFieldUpdateOperationsInput | number
    delivered?: IntFieldUpdateOperationsInput | number
    read?: IntFieldUpdateOperationsInput | number
    failed?: IntFieldUpdateOperationsInput | number
    templateParameters?: NullableJsonNullValueInput | InputJsonValue
    template?: MessageTemplateUpdateOneRequiredWithoutBroadcastsNestedInput
    clientList?: ClientListUpdateOneRequiredWithoutBroadcastsNestedInput
    account?: WhatsAppAccountUpdateOneRequiredWithoutBroadcastsNestedInput
  }

  export type WhatsAppBroadcastUncheckedUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: IntFieldUpdateOperationsInput | number
    sent?: IntFieldUpdateOperationsInput | number
    delivered?: IntFieldUpdateOperationsInput | number
    read?: IntFieldUpdateOperationsInput | number
    failed?: IntFieldUpdateOperationsInput | number
    templateParameters?: NullableJsonNullValueInput | InputJsonValue
    accountId?: StringFieldUpdateOperationsInput | string
    clientListId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutClientListsInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutClientListsInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutClientListsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClientListsInput, UserUncheckedCreateWithoutClientListsInput>
  }

  export type PhoneNumberCreateWithoutClientListInput = {
    id?: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhoneNumberUncheckedCreateWithoutClientListInput = {
    id?: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhoneNumberCreateOrConnectWithoutClientListInput = {
    where: PhoneNumberWhereUniqueInput
    create: XOR<PhoneNumberCreateWithoutClientListInput, PhoneNumberUncheckedCreateWithoutClientListInput>
  }

  export type PhoneNumberCreateManyClientListInputEnvelope = {
    data: PhoneNumberCreateManyClientListInput | PhoneNumberCreateManyClientListInput[]
  }

  export type WhatsAppBroadcastCreateWithoutClientListInput = {
    id?: string
    name: string
    status?: string
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipients?: number
    sent?: number
    delivered?: number
    read?: number
    failed?: number
    templateParameters?: NullableJsonNullValueInput | InputJsonValue
    attachments?: BroadcastAttachmentCreateNestedManyWithoutBroadcastInput
    template: MessageTemplateCreateNestedOneWithoutBroadcastsInput
    account: WhatsAppAccountCreateNestedOneWithoutBroadcastsInput
  }

  export type WhatsAppBroadcastUncheckedCreateWithoutClientListInput = {
    id?: string
    name: string
    status?: string
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipients?: number
    sent?: number
    delivered?: number
    read?: number
    failed?: number
    templateParameters?: NullableJsonNullValueInput | InputJsonValue
    accountId: string
    templateId: string
    attachments?: BroadcastAttachmentUncheckedCreateNestedManyWithoutBroadcastInput
  }

  export type WhatsAppBroadcastCreateOrConnectWithoutClientListInput = {
    where: WhatsAppBroadcastWhereUniqueInput
    create: XOR<WhatsAppBroadcastCreateWithoutClientListInput, WhatsAppBroadcastUncheckedCreateWithoutClientListInput>
  }

  export type WhatsAppBroadcastCreateManyClientListInputEnvelope = {
    data: WhatsAppBroadcastCreateManyClientListInput | WhatsAppBroadcastCreateManyClientListInput[]
  }

  export type ClientCreateWithoutListsInput = {
    id?: string
    name?: string | null
    phoneNumber: string
    tags: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUncheckedCreateWithoutListsInput = {
    id?: string
    name?: string | null
    phoneNumber: string
    tags: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientCreateOrConnectWithoutListsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutListsInput, ClientUncheckedCreateWithoutListsInput>
  }

  export type UserUpsertWithoutClientListsInput = {
    update: XOR<UserUpdateWithoutClientListsInput, UserUncheckedUpdateWithoutClientListsInput>
    create: XOR<UserCreateWithoutClientListsInput, UserUncheckedCreateWithoutClientListsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClientListsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClientListsInput, UserUncheckedUpdateWithoutClientListsInput>
  }

  export type UserUpdateWithoutClientListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutClientListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneNumberUpsertWithWhereUniqueWithoutClientListInput = {
    where: PhoneNumberWhereUniqueInput
    update: XOR<PhoneNumberUpdateWithoutClientListInput, PhoneNumberUncheckedUpdateWithoutClientListInput>
    create: XOR<PhoneNumberCreateWithoutClientListInput, PhoneNumberUncheckedCreateWithoutClientListInput>
  }

  export type PhoneNumberUpdateWithWhereUniqueWithoutClientListInput = {
    where: PhoneNumberWhereUniqueInput
    data: XOR<PhoneNumberUpdateWithoutClientListInput, PhoneNumberUncheckedUpdateWithoutClientListInput>
  }

  export type PhoneNumberUpdateManyWithWhereWithoutClientListInput = {
    where: PhoneNumberScalarWhereInput
    data: XOR<PhoneNumberUpdateManyMutationInput, PhoneNumberUncheckedUpdateManyWithoutClientListInput>
  }

  export type PhoneNumberScalarWhereInput = {
    AND?: PhoneNumberScalarWhereInput | PhoneNumberScalarWhereInput[]
    OR?: PhoneNumberScalarWhereInput[]
    NOT?: PhoneNumberScalarWhereInput | PhoneNumberScalarWhereInput[]
    id?: StringFilter<"PhoneNumber"> | string
    phone?: StringFilter<"PhoneNumber"> | string
    clientListId?: StringFilter<"PhoneNumber"> | string
    createdAt?: DateTimeFilter<"PhoneNumber"> | Date | string
    updatedAt?: DateTimeFilter<"PhoneNumber"> | Date | string
  }

  export type WhatsAppBroadcastUpsertWithWhereUniqueWithoutClientListInput = {
    where: WhatsAppBroadcastWhereUniqueInput
    update: XOR<WhatsAppBroadcastUpdateWithoutClientListInput, WhatsAppBroadcastUncheckedUpdateWithoutClientListInput>
    create: XOR<WhatsAppBroadcastCreateWithoutClientListInput, WhatsAppBroadcastUncheckedCreateWithoutClientListInput>
  }

  export type WhatsAppBroadcastUpdateWithWhereUniqueWithoutClientListInput = {
    where: WhatsAppBroadcastWhereUniqueInput
    data: XOR<WhatsAppBroadcastUpdateWithoutClientListInput, WhatsAppBroadcastUncheckedUpdateWithoutClientListInput>
  }

  export type WhatsAppBroadcastUpdateManyWithWhereWithoutClientListInput = {
    where: WhatsAppBroadcastScalarWhereInput
    data: XOR<WhatsAppBroadcastUpdateManyMutationInput, WhatsAppBroadcastUncheckedUpdateManyWithoutClientListInput>
  }

  export type ClientUpsertWithWhereUniqueWithoutListsInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutListsInput, ClientUncheckedUpdateWithoutListsInput>
    create: XOR<ClientCreateWithoutListsInput, ClientUncheckedCreateWithoutListsInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutListsInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutListsInput, ClientUncheckedUpdateWithoutListsInput>
  }

  export type ClientUpdateManyWithWhereWithoutListsInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutListsInput>
  }

  export type ClientScalarWhereInput = {
    AND?: ClientScalarWhereInput | ClientScalarWhereInput[]
    OR?: ClientScalarWhereInput[]
    NOT?: ClientScalarWhereInput | ClientScalarWhereInput[]
    id?: StringFilter<"Client"> | string
    name?: StringNullableFilter<"Client"> | string | null
    phoneNumber?: StringFilter<"Client"> | string
    tags?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
  }

  export type ClientListCreateWithoutPhoneNumbersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClientListsInput
    broadcasts?: WhatsAppBroadcastCreateNestedManyWithoutClientListInput
    clients?: ClientCreateNestedManyWithoutListsInput
  }

  export type ClientListUncheckedCreateWithoutPhoneNumbersInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    broadcasts?: WhatsAppBroadcastUncheckedCreateNestedManyWithoutClientListInput
    clients?: ClientUncheckedCreateNestedManyWithoutListsInput
  }

  export type ClientListCreateOrConnectWithoutPhoneNumbersInput = {
    where: ClientListWhereUniqueInput
    create: XOR<ClientListCreateWithoutPhoneNumbersInput, ClientListUncheckedCreateWithoutPhoneNumbersInput>
  }

  export type ClientListUpsertWithoutPhoneNumbersInput = {
    update: XOR<ClientListUpdateWithoutPhoneNumbersInput, ClientListUncheckedUpdateWithoutPhoneNumbersInput>
    create: XOR<ClientListCreateWithoutPhoneNumbersInput, ClientListUncheckedCreateWithoutPhoneNumbersInput>
    where?: ClientListWhereInput
  }

  export type ClientListUpdateToOneWithWhereWithoutPhoneNumbersInput = {
    where?: ClientListWhereInput
    data: XOR<ClientListUpdateWithoutPhoneNumbersInput, ClientListUncheckedUpdateWithoutPhoneNumbersInput>
  }

  export type ClientListUpdateWithoutPhoneNumbersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClientListsNestedInput
    broadcasts?: WhatsAppBroadcastUpdateManyWithoutClientListNestedInput
    clients?: ClientUpdateManyWithoutListsNestedInput
  }

  export type ClientListUncheckedUpdateWithoutPhoneNumbersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    broadcasts?: WhatsAppBroadcastUncheckedUpdateManyWithoutClientListNestedInput
    clients?: ClientUncheckedUpdateManyWithoutListsNestedInput
  }

  export type ClientListCreateWithoutClientsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClientListsInput
    phoneNumbers?: PhoneNumberCreateNestedManyWithoutClientListInput
    broadcasts?: WhatsAppBroadcastCreateNestedManyWithoutClientListInput
  }

  export type ClientListUncheckedCreateWithoutClientsInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    phoneNumbers?: PhoneNumberUncheckedCreateNestedManyWithoutClientListInput
    broadcasts?: WhatsAppBroadcastUncheckedCreateNestedManyWithoutClientListInput
  }

  export type ClientListCreateOrConnectWithoutClientsInput = {
    where: ClientListWhereUniqueInput
    create: XOR<ClientListCreateWithoutClientsInput, ClientListUncheckedCreateWithoutClientsInput>
  }

  export type ClientListUpsertWithWhereUniqueWithoutClientsInput = {
    where: ClientListWhereUniqueInput
    update: XOR<ClientListUpdateWithoutClientsInput, ClientListUncheckedUpdateWithoutClientsInput>
    create: XOR<ClientListCreateWithoutClientsInput, ClientListUncheckedCreateWithoutClientsInput>
  }

  export type ClientListUpdateWithWhereUniqueWithoutClientsInput = {
    where: ClientListWhereUniqueInput
    data: XOR<ClientListUpdateWithoutClientsInput, ClientListUncheckedUpdateWithoutClientsInput>
  }

  export type ClientListUpdateManyWithWhereWithoutClientsInput = {
    where: ClientListScalarWhereInput
    data: XOR<ClientListUpdateManyMutationInput, ClientListUncheckedUpdateManyWithoutClientsInput>
  }

  export type WhatsAppAccountCreateWithoutAssistantSettingsInput = {
    id?: string
    name: string
    phoneNumber: string
    isActive?: boolean
    verified?: boolean
    phoneNumberId: string
    businessAccountId: string
    accessToken: string
    webhookSecret?: string | null
    maxConcurrentMessages?: number
    retryAttempts?: number
    gptModel?: string
    maxTokens?: number
    temperature?: number
    totalMessages?: number
    avgResponseTime?: number
    lastActive?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: ChatGroupCreateNestedManyWithoutAccountInput
    templates?: MessageTemplateCreateNestedManyWithoutAccountInput
    broadcasts?: WhatsAppBroadcastCreateNestedManyWithoutAccountInput
    chats?: WhatsAppChatCreateNestedManyWithoutAccountInput
    messages?: WhatsAppMessageCreateNestedManyWithoutAccountInput
  }

  export type WhatsAppAccountUncheckedCreateWithoutAssistantSettingsInput = {
    id?: string
    name: string
    phoneNumber: string
    isActive?: boolean
    verified?: boolean
    phoneNumberId: string
    businessAccountId: string
    accessToken: string
    webhookSecret?: string | null
    maxConcurrentMessages?: number
    retryAttempts?: number
    gptModel?: string
    maxTokens?: number
    temperature?: number
    totalMessages?: number
    avgResponseTime?: number
    lastActive?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: ChatGroupUncheckedCreateNestedManyWithoutAccountInput
    templates?: MessageTemplateUncheckedCreateNestedManyWithoutAccountInput
    broadcasts?: WhatsAppBroadcastUncheckedCreateNestedManyWithoutAccountInput
    chats?: WhatsAppChatUncheckedCreateNestedManyWithoutAccountInput
    messages?: WhatsAppMessageUncheckedCreateNestedManyWithoutAccountInput
  }

  export type WhatsAppAccountCreateOrConnectWithoutAssistantSettingsInput = {
    where: WhatsAppAccountWhereUniqueInput
    create: XOR<WhatsAppAccountCreateWithoutAssistantSettingsInput, WhatsAppAccountUncheckedCreateWithoutAssistantSettingsInput>
  }

  export type WhatsAppAccountUpsertWithoutAssistantSettingsInput = {
    update: XOR<WhatsAppAccountUpdateWithoutAssistantSettingsInput, WhatsAppAccountUncheckedUpdateWithoutAssistantSettingsInput>
    create: XOR<WhatsAppAccountCreateWithoutAssistantSettingsInput, WhatsAppAccountUncheckedCreateWithoutAssistantSettingsInput>
    where?: WhatsAppAccountWhereInput
  }

  export type WhatsAppAccountUpdateToOneWithWhereWithoutAssistantSettingsInput = {
    where?: WhatsAppAccountWhereInput
    data: XOR<WhatsAppAccountUpdateWithoutAssistantSettingsInput, WhatsAppAccountUncheckedUpdateWithoutAssistantSettingsInput>
  }

  export type WhatsAppAccountUpdateWithoutAssistantSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    businessAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    webhookSecret?: NullableStringFieldUpdateOperationsInput | string | null
    maxConcurrentMessages?: IntFieldUpdateOperationsInput | number
    retryAttempts?: IntFieldUpdateOperationsInput | number
    gptModel?: StringFieldUpdateOperationsInput | string
    maxTokens?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    totalMessages?: IntFieldUpdateOperationsInput | number
    avgResponseTime?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: ChatGroupUpdateManyWithoutAccountNestedInput
    templates?: MessageTemplateUpdateManyWithoutAccountNestedInput
    broadcasts?: WhatsAppBroadcastUpdateManyWithoutAccountNestedInput
    chats?: WhatsAppChatUpdateManyWithoutAccountNestedInput
    messages?: WhatsAppMessageUpdateManyWithoutAccountNestedInput
  }

  export type WhatsAppAccountUncheckedUpdateWithoutAssistantSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    businessAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    webhookSecret?: NullableStringFieldUpdateOperationsInput | string | null
    maxConcurrentMessages?: IntFieldUpdateOperationsInput | number
    retryAttempts?: IntFieldUpdateOperationsInput | number
    gptModel?: StringFieldUpdateOperationsInput | string
    maxTokens?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    totalMessages?: IntFieldUpdateOperationsInput | number
    avgResponseTime?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: ChatGroupUncheckedUpdateManyWithoutAccountNestedInput
    templates?: MessageTemplateUncheckedUpdateManyWithoutAccountNestedInput
    broadcasts?: WhatsAppBroadcastUncheckedUpdateManyWithoutAccountNestedInput
    chats?: WhatsAppChatUncheckedUpdateManyWithoutAccountNestedInput
    messages?: WhatsAppMessageUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type ClientListCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientListUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumbers?: PhoneNumberUpdateManyWithoutClientListNestedInput
    broadcasts?: WhatsAppBroadcastUpdateManyWithoutClientListNestedInput
    clients?: ClientUpdateManyWithoutListsNestedInput
  }

  export type ClientListUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumbers?: PhoneNumberUncheckedUpdateManyWithoutClientListNestedInput
    broadcasts?: WhatsAppBroadcastUncheckedUpdateManyWithoutClientListNestedInput
    clients?: ClientUncheckedUpdateManyWithoutListsNestedInput
  }

  export type ClientListUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupCreateManyAccountInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageTemplateCreateManyAccountInput = {
    id?: string
    name: string
    category: string
    language: string
    status?: string
    components: JsonNullValueInput | InputJsonValue
    whatsappId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rejectionReason?: string | null
  }

  export type WhatsAppBroadcastCreateManyAccountInput = {
    id?: string
    name: string
    status?: string
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipients?: number
    sent?: number
    delivered?: number
    read?: number
    failed?: number
    templateParameters?: NullableJsonNullValueInput | InputJsonValue
    clientListId: string
    templateId: string
  }

  export type WhatsAppChatCreateManyAccountInput = {
    id?: string
    phoneNumber: string
    displayName?: string | null
    lastMessageAt?: Date | string
    unreadCount?: number
    assistantEnabled?: boolean
    threadId?: string | null
    group?: string | null
  }

  export type WhatsAppMessageCreateManyAccountInput = {
    id?: string
    whatsappId?: string | null
    from: string
    to: string
    type?: string
    content: string
    timestamp?: Date | string
    status?: string
    errorData?: string | null
    chatId: string
    isAssistant?: boolean
  }

  export type ChatGroupUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageTemplateUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    components?: JsonNullValueInput | InputJsonValue
    whatsappId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    broadcasts?: WhatsAppBroadcastUpdateManyWithoutTemplateNestedInput
  }

  export type MessageTemplateUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    components?: JsonNullValueInput | InputJsonValue
    whatsappId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    broadcasts?: WhatsAppBroadcastUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type MessageTemplateUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    components?: JsonNullValueInput | InputJsonValue
    whatsappId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WhatsAppBroadcastUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: IntFieldUpdateOperationsInput | number
    sent?: IntFieldUpdateOperationsInput | number
    delivered?: IntFieldUpdateOperationsInput | number
    read?: IntFieldUpdateOperationsInput | number
    failed?: IntFieldUpdateOperationsInput | number
    templateParameters?: NullableJsonNullValueInput | InputJsonValue
    attachments?: BroadcastAttachmentUpdateManyWithoutBroadcastNestedInput
    template?: MessageTemplateUpdateOneRequiredWithoutBroadcastsNestedInput
    clientList?: ClientListUpdateOneRequiredWithoutBroadcastsNestedInput
  }

  export type WhatsAppBroadcastUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: IntFieldUpdateOperationsInput | number
    sent?: IntFieldUpdateOperationsInput | number
    delivered?: IntFieldUpdateOperationsInput | number
    read?: IntFieldUpdateOperationsInput | number
    failed?: IntFieldUpdateOperationsInput | number
    templateParameters?: NullableJsonNullValueInput | InputJsonValue
    clientListId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    attachments?: BroadcastAttachmentUncheckedUpdateManyWithoutBroadcastNestedInput
  }

  export type WhatsAppBroadcastUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: IntFieldUpdateOperationsInput | number
    sent?: IntFieldUpdateOperationsInput | number
    delivered?: IntFieldUpdateOperationsInput | number
    read?: IntFieldUpdateOperationsInput | number
    failed?: IntFieldUpdateOperationsInput | number
    templateParameters?: NullableJsonNullValueInput | InputJsonValue
    clientListId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
  }

  export type WhatsAppChatUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unreadCount?: IntFieldUpdateOperationsInput | number
    assistantEnabled?: BoolFieldUpdateOperationsInput | boolean
    threadId?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: WhatsAppMessageUpdateManyWithoutChatNestedInput
  }

  export type WhatsAppChatUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unreadCount?: IntFieldUpdateOperationsInput | number
    assistantEnabled?: BoolFieldUpdateOperationsInput | boolean
    threadId?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: WhatsAppMessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type WhatsAppChatUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unreadCount?: IntFieldUpdateOperationsInput | number
    assistantEnabled?: BoolFieldUpdateOperationsInput | boolean
    threadId?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WhatsAppMessageUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    whatsappId?: NullableStringFieldUpdateOperationsInput | string | null
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    errorData?: NullableStringFieldUpdateOperationsInput | string | null
    isAssistant?: BoolFieldUpdateOperationsInput | boolean
    chat?: WhatsAppChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type WhatsAppMessageUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    whatsappId?: NullableStringFieldUpdateOperationsInput | string | null
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    errorData?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: StringFieldUpdateOperationsInput | string
    isAssistant?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WhatsAppMessageUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    whatsappId?: NullableStringFieldUpdateOperationsInput | string | null
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    errorData?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: StringFieldUpdateOperationsInput | string
    isAssistant?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WhatsAppMessageCreateManyChatInput = {
    id?: string
    whatsappId?: string | null
    from: string
    to: string
    type?: string
    content: string
    timestamp?: Date | string
    status?: string
    errorData?: string | null
    accountId: string
    isAssistant?: boolean
  }

  export type WhatsAppMessageUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    whatsappId?: NullableStringFieldUpdateOperationsInput | string | null
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    errorData?: NullableStringFieldUpdateOperationsInput | string | null
    isAssistant?: BoolFieldUpdateOperationsInput | boolean
    account?: WhatsAppAccountUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type WhatsAppMessageUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    whatsappId?: NullableStringFieldUpdateOperationsInput | string | null
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    errorData?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: StringFieldUpdateOperationsInput | string
    isAssistant?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WhatsAppMessageUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    whatsappId?: NullableStringFieldUpdateOperationsInput | string | null
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    errorData?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: StringFieldUpdateOperationsInput | string
    isAssistant?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WhatsAppBroadcastCreateManyTemplateInput = {
    id?: string
    name: string
    status?: string
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipients?: number
    sent?: number
    delivered?: number
    read?: number
    failed?: number
    templateParameters?: NullableJsonNullValueInput | InputJsonValue
    accountId: string
    clientListId: string
  }

  export type WhatsAppBroadcastUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: IntFieldUpdateOperationsInput | number
    sent?: IntFieldUpdateOperationsInput | number
    delivered?: IntFieldUpdateOperationsInput | number
    read?: IntFieldUpdateOperationsInput | number
    failed?: IntFieldUpdateOperationsInput | number
    templateParameters?: NullableJsonNullValueInput | InputJsonValue
    attachments?: BroadcastAttachmentUpdateManyWithoutBroadcastNestedInput
    clientList?: ClientListUpdateOneRequiredWithoutBroadcastsNestedInput
    account?: WhatsAppAccountUpdateOneRequiredWithoutBroadcastsNestedInput
  }

  export type WhatsAppBroadcastUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: IntFieldUpdateOperationsInput | number
    sent?: IntFieldUpdateOperationsInput | number
    delivered?: IntFieldUpdateOperationsInput | number
    read?: IntFieldUpdateOperationsInput | number
    failed?: IntFieldUpdateOperationsInput | number
    templateParameters?: NullableJsonNullValueInput | InputJsonValue
    accountId?: StringFieldUpdateOperationsInput | string
    clientListId?: StringFieldUpdateOperationsInput | string
    attachments?: BroadcastAttachmentUncheckedUpdateManyWithoutBroadcastNestedInput
  }

  export type WhatsAppBroadcastUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: IntFieldUpdateOperationsInput | number
    sent?: IntFieldUpdateOperationsInput | number
    delivered?: IntFieldUpdateOperationsInput | number
    read?: IntFieldUpdateOperationsInput | number
    failed?: IntFieldUpdateOperationsInput | number
    templateParameters?: NullableJsonNullValueInput | InputJsonValue
    accountId?: StringFieldUpdateOperationsInput | string
    clientListId?: StringFieldUpdateOperationsInput | string
  }

  export type BroadcastAttachmentCreateManyBroadcastInput = {
    id?: string
    filename: string
    type: string
    url: string
    size: number
    createdAt?: Date | string
  }

  export type BroadcastAttachmentUpdateWithoutBroadcastInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BroadcastAttachmentUncheckedUpdateWithoutBroadcastInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BroadcastAttachmentUncheckedUpdateManyWithoutBroadcastInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneNumberCreateManyClientListInput = {
    id?: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhatsAppBroadcastCreateManyClientListInput = {
    id?: string
    name: string
    status?: string
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipients?: number
    sent?: number
    delivered?: number
    read?: number
    failed?: number
    templateParameters?: NullableJsonNullValueInput | InputJsonValue
    accountId: string
    templateId: string
  }

  export type PhoneNumberUpdateWithoutClientListInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneNumberUncheckedUpdateWithoutClientListInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneNumberUncheckedUpdateManyWithoutClientListInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsAppBroadcastUpdateWithoutClientListInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: IntFieldUpdateOperationsInput | number
    sent?: IntFieldUpdateOperationsInput | number
    delivered?: IntFieldUpdateOperationsInput | number
    read?: IntFieldUpdateOperationsInput | number
    failed?: IntFieldUpdateOperationsInput | number
    templateParameters?: NullableJsonNullValueInput | InputJsonValue
    attachments?: BroadcastAttachmentUpdateManyWithoutBroadcastNestedInput
    template?: MessageTemplateUpdateOneRequiredWithoutBroadcastsNestedInput
    account?: WhatsAppAccountUpdateOneRequiredWithoutBroadcastsNestedInput
  }

  export type WhatsAppBroadcastUncheckedUpdateWithoutClientListInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: IntFieldUpdateOperationsInput | number
    sent?: IntFieldUpdateOperationsInput | number
    delivered?: IntFieldUpdateOperationsInput | number
    read?: IntFieldUpdateOperationsInput | number
    failed?: IntFieldUpdateOperationsInput | number
    templateParameters?: NullableJsonNullValueInput | InputJsonValue
    accountId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    attachments?: BroadcastAttachmentUncheckedUpdateManyWithoutBroadcastNestedInput
  }

  export type WhatsAppBroadcastUncheckedUpdateManyWithoutClientListInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: IntFieldUpdateOperationsInput | number
    sent?: IntFieldUpdateOperationsInput | number
    delivered?: IntFieldUpdateOperationsInput | number
    read?: IntFieldUpdateOperationsInput | number
    failed?: IntFieldUpdateOperationsInput | number
    templateParameters?: NullableJsonNullValueInput | InputJsonValue
    accountId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
  }

  export type ClientUpdateWithoutListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateWithoutListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyWithoutListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientListUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClientListsNestedInput
    phoneNumbers?: PhoneNumberUpdateManyWithoutClientListNestedInput
    broadcasts?: WhatsAppBroadcastUpdateManyWithoutClientListNestedInput
  }

  export type ClientListUncheckedUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumbers?: PhoneNumberUncheckedUpdateManyWithoutClientListNestedInput
    broadcasts?: WhatsAppBroadcastUncheckedUpdateManyWithoutClientListNestedInput
  }

  export type ClientListUncheckedUpdateManyWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}