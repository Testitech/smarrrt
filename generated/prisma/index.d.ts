
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Country
 * 
 */
export type Country = $Result.DefaultSelection<Prisma.$CountryPayload>
/**
 * Model VisaPurpose
 * 
 */
export type VisaPurpose = $Result.DefaultSelection<Prisma.$VisaPurposePayload>
/**
 * Model PofRule
 * 
 */
export type PofRule = $Result.DefaultSelection<Prisma.$PofRulePayload>
/**
 * Model StudyIntake
 * 
 */
export type StudyIntake = $Result.DefaultSelection<Prisma.$StudyIntakePayload>
/**
 * Model FxRate
 * 
 */
export type FxRate = $Result.DefaultSelection<Prisma.$FxRatePayload>
/**
 * Model UserTimeline
 * 
 */
export type UserTimeline = $Result.DefaultSelection<Prisma.$UserTimelinePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visaPurpose`: Exposes CRUD operations for the **VisaPurpose** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VisaPurposes
    * const visaPurposes = await prisma.visaPurpose.findMany()
    * ```
    */
  get visaPurpose(): Prisma.VisaPurposeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pofRule`: Exposes CRUD operations for the **PofRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PofRules
    * const pofRules = await prisma.pofRule.findMany()
    * ```
    */
  get pofRule(): Prisma.PofRuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studyIntake`: Exposes CRUD operations for the **StudyIntake** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudyIntakes
    * const studyIntakes = await prisma.studyIntake.findMany()
    * ```
    */
  get studyIntake(): Prisma.StudyIntakeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fxRate`: Exposes CRUD operations for the **FxRate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FxRates
    * const fxRates = await prisma.fxRate.findMany()
    * ```
    */
  get fxRate(): Prisma.FxRateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userTimeline`: Exposes CRUD operations for the **UserTimeline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTimelines
    * const userTimelines = await prisma.userTimeline.findMany()
    * ```
    */
  get userTimeline(): Prisma.UserTimelineDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Country: 'Country',
    VisaPurpose: 'VisaPurpose',
    PofRule: 'PofRule',
    StudyIntake: 'StudyIntake',
    FxRate: 'FxRate',
    UserTimeline: 'UserTimeline'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "session" | "verificationToken" | "country" | "visaPurpose" | "pofRule" | "studyIntake" | "fxRate" | "userTimeline"
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
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Country: {
        payload: Prisma.$CountryPayload<ExtArgs>
        fields: Prisma.CountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findFirst: {
            args: Prisma.CountryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findMany: {
            args: Prisma.CountryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          create: {
            args: Prisma.CountryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          createMany: {
            args: Prisma.CountryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          delete: {
            args: Prisma.CountryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          update: {
            args: Prisma.CountryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          deleteMany: {
            args: Prisma.CountryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CountryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          upsert: {
            args: Prisma.CountryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.CountryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryCountArgs<ExtArgs>
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
      VisaPurpose: {
        payload: Prisma.$VisaPurposePayload<ExtArgs>
        fields: Prisma.VisaPurposeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisaPurposeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPurposePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisaPurposeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPurposePayload>
          }
          findFirst: {
            args: Prisma.VisaPurposeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPurposePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisaPurposeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPurposePayload>
          }
          findMany: {
            args: Prisma.VisaPurposeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPurposePayload>[]
          }
          create: {
            args: Prisma.VisaPurposeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPurposePayload>
          }
          createMany: {
            args: Prisma.VisaPurposeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisaPurposeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPurposePayload>[]
          }
          delete: {
            args: Prisma.VisaPurposeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPurposePayload>
          }
          update: {
            args: Prisma.VisaPurposeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPurposePayload>
          }
          deleteMany: {
            args: Prisma.VisaPurposeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisaPurposeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisaPurposeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPurposePayload>[]
          }
          upsert: {
            args: Prisma.VisaPurposeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPurposePayload>
          }
          aggregate: {
            args: Prisma.VisaPurposeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisaPurpose>
          }
          groupBy: {
            args: Prisma.VisaPurposeGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisaPurposeGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisaPurposeCountArgs<ExtArgs>
            result: $Utils.Optional<VisaPurposeCountAggregateOutputType> | number
          }
        }
      }
      PofRule: {
        payload: Prisma.$PofRulePayload<ExtArgs>
        fields: Prisma.PofRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PofRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PofRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PofRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PofRulePayload>
          }
          findFirst: {
            args: Prisma.PofRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PofRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PofRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PofRulePayload>
          }
          findMany: {
            args: Prisma.PofRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PofRulePayload>[]
          }
          create: {
            args: Prisma.PofRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PofRulePayload>
          }
          createMany: {
            args: Prisma.PofRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PofRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PofRulePayload>[]
          }
          delete: {
            args: Prisma.PofRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PofRulePayload>
          }
          update: {
            args: Prisma.PofRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PofRulePayload>
          }
          deleteMany: {
            args: Prisma.PofRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PofRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PofRuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PofRulePayload>[]
          }
          upsert: {
            args: Prisma.PofRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PofRulePayload>
          }
          aggregate: {
            args: Prisma.PofRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePofRule>
          }
          groupBy: {
            args: Prisma.PofRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<PofRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.PofRuleCountArgs<ExtArgs>
            result: $Utils.Optional<PofRuleCountAggregateOutputType> | number
          }
        }
      }
      StudyIntake: {
        payload: Prisma.$StudyIntakePayload<ExtArgs>
        fields: Prisma.StudyIntakeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudyIntakeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyIntakePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudyIntakeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyIntakePayload>
          }
          findFirst: {
            args: Prisma.StudyIntakeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyIntakePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudyIntakeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyIntakePayload>
          }
          findMany: {
            args: Prisma.StudyIntakeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyIntakePayload>[]
          }
          create: {
            args: Prisma.StudyIntakeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyIntakePayload>
          }
          createMany: {
            args: Prisma.StudyIntakeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudyIntakeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyIntakePayload>[]
          }
          delete: {
            args: Prisma.StudyIntakeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyIntakePayload>
          }
          update: {
            args: Prisma.StudyIntakeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyIntakePayload>
          }
          deleteMany: {
            args: Prisma.StudyIntakeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudyIntakeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudyIntakeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyIntakePayload>[]
          }
          upsert: {
            args: Prisma.StudyIntakeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyIntakePayload>
          }
          aggregate: {
            args: Prisma.StudyIntakeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudyIntake>
          }
          groupBy: {
            args: Prisma.StudyIntakeGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudyIntakeGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudyIntakeCountArgs<ExtArgs>
            result: $Utils.Optional<StudyIntakeCountAggregateOutputType> | number
          }
        }
      }
      FxRate: {
        payload: Prisma.$FxRatePayload<ExtArgs>
        fields: Prisma.FxRateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FxRateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FxRatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FxRateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FxRatePayload>
          }
          findFirst: {
            args: Prisma.FxRateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FxRatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FxRateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FxRatePayload>
          }
          findMany: {
            args: Prisma.FxRateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FxRatePayload>[]
          }
          create: {
            args: Prisma.FxRateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FxRatePayload>
          }
          createMany: {
            args: Prisma.FxRateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FxRateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FxRatePayload>[]
          }
          delete: {
            args: Prisma.FxRateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FxRatePayload>
          }
          update: {
            args: Prisma.FxRateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FxRatePayload>
          }
          deleteMany: {
            args: Prisma.FxRateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FxRateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FxRateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FxRatePayload>[]
          }
          upsert: {
            args: Prisma.FxRateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FxRatePayload>
          }
          aggregate: {
            args: Prisma.FxRateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFxRate>
          }
          groupBy: {
            args: Prisma.FxRateGroupByArgs<ExtArgs>
            result: $Utils.Optional<FxRateGroupByOutputType>[]
          }
          count: {
            args: Prisma.FxRateCountArgs<ExtArgs>
            result: $Utils.Optional<FxRateCountAggregateOutputType> | number
          }
        }
      }
      UserTimeline: {
        payload: Prisma.$UserTimelinePayload<ExtArgs>
        fields: Prisma.UserTimelineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserTimelineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTimelinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserTimelineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTimelinePayload>
          }
          findFirst: {
            args: Prisma.UserTimelineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTimelinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserTimelineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTimelinePayload>
          }
          findMany: {
            args: Prisma.UserTimelineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTimelinePayload>[]
          }
          create: {
            args: Prisma.UserTimelineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTimelinePayload>
          }
          createMany: {
            args: Prisma.UserTimelineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserTimelineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTimelinePayload>[]
          }
          delete: {
            args: Prisma.UserTimelineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTimelinePayload>
          }
          update: {
            args: Prisma.UserTimelineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTimelinePayload>
          }
          deleteMany: {
            args: Prisma.UserTimelineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserTimelineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserTimelineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTimelinePayload>[]
          }
          upsert: {
            args: Prisma.UserTimelineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTimelinePayload>
          }
          aggregate: {
            args: Prisma.UserTimelineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserTimeline>
          }
          groupBy: {
            args: Prisma.UserTimelineGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserTimelineGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserTimelineCountArgs<ExtArgs>
            result: $Utils.Optional<UserTimelineCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    country?: CountryOmit
    visaPurpose?: VisaPurposeOmit
    pofRule?: PofRuleOmit
    studyIntake?: StudyIntakeOmit
    fxRate?: FxRateOmit
    userTimeline?: UserTimelineOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    accounts: number
    sessions: number
    timelines: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    timelines?: boolean | UserCountOutputTypeCountTimelinesArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTimelinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTimelineWhereInput
  }


  /**
   * Count Type CountryCountOutputType
   */

  export type CountryCountOutputType = {
    pofRules: number
    studyIntake: number
    timelines: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pofRules?: boolean | CountryCountOutputTypeCountPofRulesArgs
    studyIntake?: boolean | CountryCountOutputTypeCountStudyIntakeArgs
    timelines?: boolean | CountryCountOutputTypeCountTimelinesArgs
  }

  // Custom InputTypes
  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountPofRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PofRuleWhereInput
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountStudyIntakeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudyIntakeWhereInput
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountTimelinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTimelineWhereInput
  }


  /**
   * Count Type VisaPurposeCountOutputType
   */

  export type VisaPurposeCountOutputType = {
    pofRules: number
    timelines: number
  }

  export type VisaPurposeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pofRules?: boolean | VisaPurposeCountOutputTypeCountPofRulesArgs
    timelines?: boolean | VisaPurposeCountOutputTypeCountTimelinesArgs
  }

  // Custom InputTypes
  /**
   * VisaPurposeCountOutputType without action
   */
  export type VisaPurposeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaPurposeCountOutputType
     */
    select?: VisaPurposeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VisaPurposeCountOutputType without action
   */
  export type VisaPurposeCountOutputTypeCountPofRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PofRuleWhereInput
  }

  /**
   * VisaPurposeCountOutputType without action
   */
  export type VisaPurposeCountOutputTypeCountTimelinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTimelineWhereInput
  }


  /**
   * Count Type FxRateCountOutputType
   */

  export type FxRateCountOutputType = {
    countries: number
  }

  export type FxRateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    countries?: boolean | FxRateCountOutputTypeCountCountriesArgs
  }

  // Custom InputTypes
  /**
   * FxRateCountOutputType without action
   */
  export type FxRateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FxRateCountOutputType
     */
    select?: FxRateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FxRateCountOutputType without action
   */
  export type FxRateCountOutputTypeCountCountriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
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
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
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
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
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
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string
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
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    timelines?: boolean | User$timelinesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    timelines?: boolean | User$timelinesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      timelines: Prisma.$UserTimelinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string
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
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    timelines<T extends User$timelinesArgs<ExtArgs> = {}>(args?: Subset<T, User$timelinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTimelinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.timelines
   */
  export type User$timelinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTimeline
     */
    select?: UserTimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTimeline
     */
    omit?: UserTimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTimelineInclude<ExtArgs> | null
    where?: UserTimelineWhereInput
    orderBy?: UserTimelineOrderByWithRelationInput | UserTimelineOrderByWithRelationInput[]
    cursor?: UserTimelineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTimelineScalarFieldEnum | UserTimelineScalarFieldEnum[]
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
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
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
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryMinAggregateOutputType = {
    id: string | null
    name: string | null
    isoCode: string | null
    currencyCode: string | null
    flagEmoji: string | null
    isActive: boolean | null
  }

  export type CountryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isoCode: string | null
    currencyCode: string | null
    flagEmoji: string | null
    isActive: boolean | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    name: number
    isoCode: number
    currencyCode: number
    flagEmoji: number
    isActive: number
    _all: number
  }


  export type CountryMinAggregateInputType = {
    id?: true
    name?: true
    isoCode?: true
    currencyCode?: true
    flagEmoji?: true
    isActive?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    name?: true
    isoCode?: true
    currencyCode?: true
    flagEmoji?: true
    isActive?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    name?: true
    isoCode?: true
    currencyCode?: true
    flagEmoji?: true
    isActive?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithAggregationInput | CountryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    id: string
    name: string
    isoCode: string
    currencyCode: string
    flagEmoji: string
    isActive: boolean
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isoCode?: boolean
    currencyCode?: boolean
    flagEmoji?: boolean
    isActive?: boolean
    pofRules?: boolean | Country$pofRulesArgs<ExtArgs>
    studyIntake?: boolean | Country$studyIntakeArgs<ExtArgs>
    fxRates?: boolean | FxRateDefaultArgs<ExtArgs>
    timelines?: boolean | Country$timelinesArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>

  export type CountrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isoCode?: boolean
    currencyCode?: boolean
    flagEmoji?: boolean
    isActive?: boolean
    fxRates?: boolean | FxRateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>

  export type CountrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isoCode?: boolean
    currencyCode?: boolean
    flagEmoji?: boolean
    isActive?: boolean
    fxRates?: boolean | FxRateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>

  export type CountrySelectScalar = {
    id?: boolean
    name?: boolean
    isoCode?: boolean
    currencyCode?: boolean
    flagEmoji?: boolean
    isActive?: boolean
  }

  export type CountryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isoCode" | "currencyCode" | "flagEmoji" | "isActive", ExtArgs["result"]["country"]>
  export type CountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pofRules?: boolean | Country$pofRulesArgs<ExtArgs>
    studyIntake?: boolean | Country$studyIntakeArgs<ExtArgs>
    fxRates?: boolean | FxRateDefaultArgs<ExtArgs>
    timelines?: boolean | Country$timelinesArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CountryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fxRates?: boolean | FxRateDefaultArgs<ExtArgs>
  }
  export type CountryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fxRates?: boolean | FxRateDefaultArgs<ExtArgs>
  }

  export type $CountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Country"
    objects: {
      pofRules: Prisma.$PofRulePayload<ExtArgs>[]
      studyIntake: Prisma.$StudyIntakePayload<ExtArgs>[]
      fxRates: Prisma.$FxRatePayload<ExtArgs>
      timelines: Prisma.$UserTimelinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      isoCode: string
      currencyCode: string
      flagEmoji: string
      isActive: boolean
    }, ExtArgs["result"]["country"]>
    composites: {}
  }

  type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = $Result.GetResult<Prisma.$CountryPayload, S>

  type CountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CountryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Country'], meta: { name: 'Country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryFindUniqueArgs>(args: SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Country that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryFindFirstArgs>(args?: SelectSubset<T, CountryFindFirstArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountryFindManyArgs>(args?: SelectSubset<T, CountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
     */
    create<T extends CountryCreateArgs>(args: SelectSubset<T, CountryCreateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Countries.
     * @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryCreateManyArgs>(args?: SelectSubset<T, CountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Countries and returns the data saved in the database.
     * @param {CountryCreateManyAndReturnArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountryCreateManyAndReturnArgs>(args?: SelectSubset<T, CountryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
     */
    delete<T extends CountryDeleteArgs>(args: SelectSubset<T, CountryDeleteArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryUpdateArgs>(args: SelectSubset<T, CountryUpdateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryDeleteManyArgs>(args?: SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryUpdateManyArgs>(args: SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries and returns the data updated in the database.
     * @param {CountryUpdateManyAndReturnArgs} args - Arguments to update many Countries.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.updateManyAndReturn({
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
    updateManyAndReturn<T extends CountryUpdateManyAndReturnArgs>(args: SelectSubset<T, CountryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
     */
    upsert<T extends CountryUpsertArgs>(args: SelectSubset<T, CountryUpsertArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
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
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Country model
   */
  readonly fields: CountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pofRules<T extends Country$pofRulesArgs<ExtArgs> = {}>(args?: Subset<T, Country$pofRulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PofRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studyIntake<T extends Country$studyIntakeArgs<ExtArgs> = {}>(args?: Subset<T, Country$studyIntakeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyIntakePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fxRates<T extends FxRateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FxRateDefaultArgs<ExtArgs>>): Prisma__FxRateClient<$Result.GetResult<Prisma.$FxRatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    timelines<T extends Country$timelinesArgs<ExtArgs> = {}>(args?: Subset<T, Country$timelinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTimelinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Country model
   */
  interface CountryFieldRefs {
    readonly id: FieldRef<"Country", 'String'>
    readonly name: FieldRef<"Country", 'String'>
    readonly isoCode: FieldRef<"Country", 'String'>
    readonly currencyCode: FieldRef<"Country", 'String'>
    readonly flagEmoji: FieldRef<"Country", 'String'>
    readonly isActive: FieldRef<"Country", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Country findUnique
   */
  export type CountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findFirst
   */
  export type CountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findMany
   */
  export type CountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country create
   */
  export type CountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }

  /**
   * Country createMany
   */
  export type CountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country createManyAndReturn
   */
  export type CountryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Country update
   */
  export type CountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country updateManyAndReturn
   */
  export type CountryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Country upsert
   */
  export type CountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }

  /**
   * Country delete
   */
  export type CountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to delete.
     */
    limit?: number
  }

  /**
   * Country.pofRules
   */
  export type Country$pofRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PofRule
     */
    select?: PofRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PofRule
     */
    omit?: PofRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PofRuleInclude<ExtArgs> | null
    where?: PofRuleWhereInput
    orderBy?: PofRuleOrderByWithRelationInput | PofRuleOrderByWithRelationInput[]
    cursor?: PofRuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PofRuleScalarFieldEnum | PofRuleScalarFieldEnum[]
  }

  /**
   * Country.studyIntake
   */
  export type Country$studyIntakeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyIntake
     */
    select?: StudyIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyIntake
     */
    omit?: StudyIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyIntakeInclude<ExtArgs> | null
    where?: StudyIntakeWhereInput
    orderBy?: StudyIntakeOrderByWithRelationInput | StudyIntakeOrderByWithRelationInput[]
    cursor?: StudyIntakeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudyIntakeScalarFieldEnum | StudyIntakeScalarFieldEnum[]
  }

  /**
   * Country.timelines
   */
  export type Country$timelinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTimeline
     */
    select?: UserTimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTimeline
     */
    omit?: UserTimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTimelineInclude<ExtArgs> | null
    where?: UserTimelineWhereInput
    orderBy?: UserTimelineOrderByWithRelationInput | UserTimelineOrderByWithRelationInput[]
    cursor?: UserTimelineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTimelineScalarFieldEnum | UserTimelineScalarFieldEnum[]
  }

  /**
   * Country without action
   */
  export type CountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
  }


  /**
   * Model VisaPurpose
   */

  export type AggregateVisaPurpose = {
    _count: VisaPurposeCountAggregateOutputType | null
    _min: VisaPurposeMinAggregateOutputType | null
    _max: VisaPurposeMaxAggregateOutputType | null
  }

  export type VisaPurposeMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    icon: string | null
    description: string | null
    isActive: boolean | null
  }

  export type VisaPurposeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    icon: string | null
    description: string | null
    isActive: boolean | null
  }

  export type VisaPurposeCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    icon: number
    description: number
    isActive: number
    _all: number
  }


  export type VisaPurposeMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    icon?: true
    description?: true
    isActive?: true
  }

  export type VisaPurposeMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    icon?: true
    description?: true
    isActive?: true
  }

  export type VisaPurposeCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    icon?: true
    description?: true
    isActive?: true
    _all?: true
  }

  export type VisaPurposeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisaPurpose to aggregate.
     */
    where?: VisaPurposeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisaPurposes to fetch.
     */
    orderBy?: VisaPurposeOrderByWithRelationInput | VisaPurposeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisaPurposeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisaPurposes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisaPurposes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VisaPurposes
    **/
    _count?: true | VisaPurposeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisaPurposeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisaPurposeMaxAggregateInputType
  }

  export type GetVisaPurposeAggregateType<T extends VisaPurposeAggregateArgs> = {
        [P in keyof T & keyof AggregateVisaPurpose]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisaPurpose[P]>
      : GetScalarType<T[P], AggregateVisaPurpose[P]>
  }




  export type VisaPurposeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisaPurposeWhereInput
    orderBy?: VisaPurposeOrderByWithAggregationInput | VisaPurposeOrderByWithAggregationInput[]
    by: VisaPurposeScalarFieldEnum[] | VisaPurposeScalarFieldEnum
    having?: VisaPurposeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisaPurposeCountAggregateInputType | true
    _min?: VisaPurposeMinAggregateInputType
    _max?: VisaPurposeMaxAggregateInputType
  }

  export type VisaPurposeGroupByOutputType = {
    id: string
    name: string
    slug: string
    icon: string
    description: string | null
    isActive: boolean
    _count: VisaPurposeCountAggregateOutputType | null
    _min: VisaPurposeMinAggregateOutputType | null
    _max: VisaPurposeMaxAggregateOutputType | null
  }

  type GetVisaPurposeGroupByPayload<T extends VisaPurposeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisaPurposeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisaPurposeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisaPurposeGroupByOutputType[P]>
            : GetScalarType<T[P], VisaPurposeGroupByOutputType[P]>
        }
      >
    >


  export type VisaPurposeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    icon?: boolean
    description?: boolean
    isActive?: boolean
    pofRules?: boolean | VisaPurpose$pofRulesArgs<ExtArgs>
    timelines?: boolean | VisaPurpose$timelinesArgs<ExtArgs>
    _count?: boolean | VisaPurposeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visaPurpose"]>

  export type VisaPurposeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    icon?: boolean
    description?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["visaPurpose"]>

  export type VisaPurposeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    icon?: boolean
    description?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["visaPurpose"]>

  export type VisaPurposeSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    icon?: boolean
    description?: boolean
    isActive?: boolean
  }

  export type VisaPurposeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "icon" | "description" | "isActive", ExtArgs["result"]["visaPurpose"]>
  export type VisaPurposeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pofRules?: boolean | VisaPurpose$pofRulesArgs<ExtArgs>
    timelines?: boolean | VisaPurpose$timelinesArgs<ExtArgs>
    _count?: boolean | VisaPurposeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VisaPurposeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VisaPurposeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VisaPurposePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VisaPurpose"
    objects: {
      pofRules: Prisma.$PofRulePayload<ExtArgs>[]
      timelines: Prisma.$UserTimelinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      icon: string
      description: string | null
      isActive: boolean
    }, ExtArgs["result"]["visaPurpose"]>
    composites: {}
  }

  type VisaPurposeGetPayload<S extends boolean | null | undefined | VisaPurposeDefaultArgs> = $Result.GetResult<Prisma.$VisaPurposePayload, S>

  type VisaPurposeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisaPurposeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisaPurposeCountAggregateInputType | true
    }

  export interface VisaPurposeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VisaPurpose'], meta: { name: 'VisaPurpose' } }
    /**
     * Find zero or one VisaPurpose that matches the filter.
     * @param {VisaPurposeFindUniqueArgs} args - Arguments to find a VisaPurpose
     * @example
     * // Get one VisaPurpose
     * const visaPurpose = await prisma.visaPurpose.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisaPurposeFindUniqueArgs>(args: SelectSubset<T, VisaPurposeFindUniqueArgs<ExtArgs>>): Prisma__VisaPurposeClient<$Result.GetResult<Prisma.$VisaPurposePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VisaPurpose that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisaPurposeFindUniqueOrThrowArgs} args - Arguments to find a VisaPurpose
     * @example
     * // Get one VisaPurpose
     * const visaPurpose = await prisma.visaPurpose.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisaPurposeFindUniqueOrThrowArgs>(args: SelectSubset<T, VisaPurposeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisaPurposeClient<$Result.GetResult<Prisma.$VisaPurposePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisaPurpose that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaPurposeFindFirstArgs} args - Arguments to find a VisaPurpose
     * @example
     * // Get one VisaPurpose
     * const visaPurpose = await prisma.visaPurpose.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisaPurposeFindFirstArgs>(args?: SelectSubset<T, VisaPurposeFindFirstArgs<ExtArgs>>): Prisma__VisaPurposeClient<$Result.GetResult<Prisma.$VisaPurposePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisaPurpose that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaPurposeFindFirstOrThrowArgs} args - Arguments to find a VisaPurpose
     * @example
     * // Get one VisaPurpose
     * const visaPurpose = await prisma.visaPurpose.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisaPurposeFindFirstOrThrowArgs>(args?: SelectSubset<T, VisaPurposeFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisaPurposeClient<$Result.GetResult<Prisma.$VisaPurposePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VisaPurposes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaPurposeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VisaPurposes
     * const visaPurposes = await prisma.visaPurpose.findMany()
     * 
     * // Get first 10 VisaPurposes
     * const visaPurposes = await prisma.visaPurpose.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visaPurposeWithIdOnly = await prisma.visaPurpose.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisaPurposeFindManyArgs>(args?: SelectSubset<T, VisaPurposeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisaPurposePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VisaPurpose.
     * @param {VisaPurposeCreateArgs} args - Arguments to create a VisaPurpose.
     * @example
     * // Create one VisaPurpose
     * const VisaPurpose = await prisma.visaPurpose.create({
     *   data: {
     *     // ... data to create a VisaPurpose
     *   }
     * })
     * 
     */
    create<T extends VisaPurposeCreateArgs>(args: SelectSubset<T, VisaPurposeCreateArgs<ExtArgs>>): Prisma__VisaPurposeClient<$Result.GetResult<Prisma.$VisaPurposePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VisaPurposes.
     * @param {VisaPurposeCreateManyArgs} args - Arguments to create many VisaPurposes.
     * @example
     * // Create many VisaPurposes
     * const visaPurpose = await prisma.visaPurpose.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisaPurposeCreateManyArgs>(args?: SelectSubset<T, VisaPurposeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VisaPurposes and returns the data saved in the database.
     * @param {VisaPurposeCreateManyAndReturnArgs} args - Arguments to create many VisaPurposes.
     * @example
     * // Create many VisaPurposes
     * const visaPurpose = await prisma.visaPurpose.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VisaPurposes and only return the `id`
     * const visaPurposeWithIdOnly = await prisma.visaPurpose.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisaPurposeCreateManyAndReturnArgs>(args?: SelectSubset<T, VisaPurposeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisaPurposePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VisaPurpose.
     * @param {VisaPurposeDeleteArgs} args - Arguments to delete one VisaPurpose.
     * @example
     * // Delete one VisaPurpose
     * const VisaPurpose = await prisma.visaPurpose.delete({
     *   where: {
     *     // ... filter to delete one VisaPurpose
     *   }
     * })
     * 
     */
    delete<T extends VisaPurposeDeleteArgs>(args: SelectSubset<T, VisaPurposeDeleteArgs<ExtArgs>>): Prisma__VisaPurposeClient<$Result.GetResult<Prisma.$VisaPurposePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VisaPurpose.
     * @param {VisaPurposeUpdateArgs} args - Arguments to update one VisaPurpose.
     * @example
     * // Update one VisaPurpose
     * const visaPurpose = await prisma.visaPurpose.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisaPurposeUpdateArgs>(args: SelectSubset<T, VisaPurposeUpdateArgs<ExtArgs>>): Prisma__VisaPurposeClient<$Result.GetResult<Prisma.$VisaPurposePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VisaPurposes.
     * @param {VisaPurposeDeleteManyArgs} args - Arguments to filter VisaPurposes to delete.
     * @example
     * // Delete a few VisaPurposes
     * const { count } = await prisma.visaPurpose.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisaPurposeDeleteManyArgs>(args?: SelectSubset<T, VisaPurposeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisaPurposes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaPurposeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VisaPurposes
     * const visaPurpose = await prisma.visaPurpose.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisaPurposeUpdateManyArgs>(args: SelectSubset<T, VisaPurposeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisaPurposes and returns the data updated in the database.
     * @param {VisaPurposeUpdateManyAndReturnArgs} args - Arguments to update many VisaPurposes.
     * @example
     * // Update many VisaPurposes
     * const visaPurpose = await prisma.visaPurpose.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VisaPurposes and only return the `id`
     * const visaPurposeWithIdOnly = await prisma.visaPurpose.updateManyAndReturn({
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
    updateManyAndReturn<T extends VisaPurposeUpdateManyAndReturnArgs>(args: SelectSubset<T, VisaPurposeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisaPurposePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VisaPurpose.
     * @param {VisaPurposeUpsertArgs} args - Arguments to update or create a VisaPurpose.
     * @example
     * // Update or create a VisaPurpose
     * const visaPurpose = await prisma.visaPurpose.upsert({
     *   create: {
     *     // ... data to create a VisaPurpose
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VisaPurpose we want to update
     *   }
     * })
     */
    upsert<T extends VisaPurposeUpsertArgs>(args: SelectSubset<T, VisaPurposeUpsertArgs<ExtArgs>>): Prisma__VisaPurposeClient<$Result.GetResult<Prisma.$VisaPurposePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VisaPurposes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaPurposeCountArgs} args - Arguments to filter VisaPurposes to count.
     * @example
     * // Count the number of VisaPurposes
     * const count = await prisma.visaPurpose.count({
     *   where: {
     *     // ... the filter for the VisaPurposes we want to count
     *   }
     * })
    **/
    count<T extends VisaPurposeCountArgs>(
      args?: Subset<T, VisaPurposeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisaPurposeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VisaPurpose.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaPurposeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisaPurposeAggregateArgs>(args: Subset<T, VisaPurposeAggregateArgs>): Prisma.PrismaPromise<GetVisaPurposeAggregateType<T>>

    /**
     * Group by VisaPurpose.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaPurposeGroupByArgs} args - Group by arguments.
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
      T extends VisaPurposeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisaPurposeGroupByArgs['orderBy'] }
        : { orderBy?: VisaPurposeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VisaPurposeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisaPurposeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VisaPurpose model
   */
  readonly fields: VisaPurposeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VisaPurpose.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisaPurposeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pofRules<T extends VisaPurpose$pofRulesArgs<ExtArgs> = {}>(args?: Subset<T, VisaPurpose$pofRulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PofRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    timelines<T extends VisaPurpose$timelinesArgs<ExtArgs> = {}>(args?: Subset<T, VisaPurpose$timelinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTimelinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the VisaPurpose model
   */
  interface VisaPurposeFieldRefs {
    readonly id: FieldRef<"VisaPurpose", 'String'>
    readonly name: FieldRef<"VisaPurpose", 'String'>
    readonly slug: FieldRef<"VisaPurpose", 'String'>
    readonly icon: FieldRef<"VisaPurpose", 'String'>
    readonly description: FieldRef<"VisaPurpose", 'String'>
    readonly isActive: FieldRef<"VisaPurpose", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * VisaPurpose findUnique
   */
  export type VisaPurposeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaPurpose
     */
    select?: VisaPurposeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaPurpose
     */
    omit?: VisaPurposeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaPurposeInclude<ExtArgs> | null
    /**
     * Filter, which VisaPurpose to fetch.
     */
    where: VisaPurposeWhereUniqueInput
  }

  /**
   * VisaPurpose findUniqueOrThrow
   */
  export type VisaPurposeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaPurpose
     */
    select?: VisaPurposeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaPurpose
     */
    omit?: VisaPurposeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaPurposeInclude<ExtArgs> | null
    /**
     * Filter, which VisaPurpose to fetch.
     */
    where: VisaPurposeWhereUniqueInput
  }

  /**
   * VisaPurpose findFirst
   */
  export type VisaPurposeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaPurpose
     */
    select?: VisaPurposeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaPurpose
     */
    omit?: VisaPurposeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaPurposeInclude<ExtArgs> | null
    /**
     * Filter, which VisaPurpose to fetch.
     */
    where?: VisaPurposeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisaPurposes to fetch.
     */
    orderBy?: VisaPurposeOrderByWithRelationInput | VisaPurposeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisaPurposes.
     */
    cursor?: VisaPurposeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisaPurposes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisaPurposes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisaPurposes.
     */
    distinct?: VisaPurposeScalarFieldEnum | VisaPurposeScalarFieldEnum[]
  }

  /**
   * VisaPurpose findFirstOrThrow
   */
  export type VisaPurposeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaPurpose
     */
    select?: VisaPurposeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaPurpose
     */
    omit?: VisaPurposeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaPurposeInclude<ExtArgs> | null
    /**
     * Filter, which VisaPurpose to fetch.
     */
    where?: VisaPurposeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisaPurposes to fetch.
     */
    orderBy?: VisaPurposeOrderByWithRelationInput | VisaPurposeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisaPurposes.
     */
    cursor?: VisaPurposeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisaPurposes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisaPurposes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisaPurposes.
     */
    distinct?: VisaPurposeScalarFieldEnum | VisaPurposeScalarFieldEnum[]
  }

  /**
   * VisaPurpose findMany
   */
  export type VisaPurposeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaPurpose
     */
    select?: VisaPurposeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaPurpose
     */
    omit?: VisaPurposeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaPurposeInclude<ExtArgs> | null
    /**
     * Filter, which VisaPurposes to fetch.
     */
    where?: VisaPurposeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisaPurposes to fetch.
     */
    orderBy?: VisaPurposeOrderByWithRelationInput | VisaPurposeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VisaPurposes.
     */
    cursor?: VisaPurposeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisaPurposes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisaPurposes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisaPurposes.
     */
    distinct?: VisaPurposeScalarFieldEnum | VisaPurposeScalarFieldEnum[]
  }

  /**
   * VisaPurpose create
   */
  export type VisaPurposeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaPurpose
     */
    select?: VisaPurposeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaPurpose
     */
    omit?: VisaPurposeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaPurposeInclude<ExtArgs> | null
    /**
     * The data needed to create a VisaPurpose.
     */
    data: XOR<VisaPurposeCreateInput, VisaPurposeUncheckedCreateInput>
  }

  /**
   * VisaPurpose createMany
   */
  export type VisaPurposeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VisaPurposes.
     */
    data: VisaPurposeCreateManyInput | VisaPurposeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VisaPurpose createManyAndReturn
   */
  export type VisaPurposeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaPurpose
     */
    select?: VisaPurposeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VisaPurpose
     */
    omit?: VisaPurposeOmit<ExtArgs> | null
    /**
     * The data used to create many VisaPurposes.
     */
    data: VisaPurposeCreateManyInput | VisaPurposeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VisaPurpose update
   */
  export type VisaPurposeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaPurpose
     */
    select?: VisaPurposeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaPurpose
     */
    omit?: VisaPurposeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaPurposeInclude<ExtArgs> | null
    /**
     * The data needed to update a VisaPurpose.
     */
    data: XOR<VisaPurposeUpdateInput, VisaPurposeUncheckedUpdateInput>
    /**
     * Choose, which VisaPurpose to update.
     */
    where: VisaPurposeWhereUniqueInput
  }

  /**
   * VisaPurpose updateMany
   */
  export type VisaPurposeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VisaPurposes.
     */
    data: XOR<VisaPurposeUpdateManyMutationInput, VisaPurposeUncheckedUpdateManyInput>
    /**
     * Filter which VisaPurposes to update
     */
    where?: VisaPurposeWhereInput
    /**
     * Limit how many VisaPurposes to update.
     */
    limit?: number
  }

  /**
   * VisaPurpose updateManyAndReturn
   */
  export type VisaPurposeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaPurpose
     */
    select?: VisaPurposeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VisaPurpose
     */
    omit?: VisaPurposeOmit<ExtArgs> | null
    /**
     * The data used to update VisaPurposes.
     */
    data: XOR<VisaPurposeUpdateManyMutationInput, VisaPurposeUncheckedUpdateManyInput>
    /**
     * Filter which VisaPurposes to update
     */
    where?: VisaPurposeWhereInput
    /**
     * Limit how many VisaPurposes to update.
     */
    limit?: number
  }

  /**
   * VisaPurpose upsert
   */
  export type VisaPurposeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaPurpose
     */
    select?: VisaPurposeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaPurpose
     */
    omit?: VisaPurposeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaPurposeInclude<ExtArgs> | null
    /**
     * The filter to search for the VisaPurpose to update in case it exists.
     */
    where: VisaPurposeWhereUniqueInput
    /**
     * In case the VisaPurpose found by the `where` argument doesn't exist, create a new VisaPurpose with this data.
     */
    create: XOR<VisaPurposeCreateInput, VisaPurposeUncheckedCreateInput>
    /**
     * In case the VisaPurpose was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisaPurposeUpdateInput, VisaPurposeUncheckedUpdateInput>
  }

  /**
   * VisaPurpose delete
   */
  export type VisaPurposeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaPurpose
     */
    select?: VisaPurposeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaPurpose
     */
    omit?: VisaPurposeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaPurposeInclude<ExtArgs> | null
    /**
     * Filter which VisaPurpose to delete.
     */
    where: VisaPurposeWhereUniqueInput
  }

  /**
   * VisaPurpose deleteMany
   */
  export type VisaPurposeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisaPurposes to delete
     */
    where?: VisaPurposeWhereInput
    /**
     * Limit how many VisaPurposes to delete.
     */
    limit?: number
  }

  /**
   * VisaPurpose.pofRules
   */
  export type VisaPurpose$pofRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PofRule
     */
    select?: PofRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PofRule
     */
    omit?: PofRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PofRuleInclude<ExtArgs> | null
    where?: PofRuleWhereInput
    orderBy?: PofRuleOrderByWithRelationInput | PofRuleOrderByWithRelationInput[]
    cursor?: PofRuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PofRuleScalarFieldEnum | PofRuleScalarFieldEnum[]
  }

  /**
   * VisaPurpose.timelines
   */
  export type VisaPurpose$timelinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTimeline
     */
    select?: UserTimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTimeline
     */
    omit?: UserTimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTimelineInclude<ExtArgs> | null
    where?: UserTimelineWhereInput
    orderBy?: UserTimelineOrderByWithRelationInput | UserTimelineOrderByWithRelationInput[]
    cursor?: UserTimelineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTimelineScalarFieldEnum | UserTimelineScalarFieldEnum[]
  }

  /**
   * VisaPurpose without action
   */
  export type VisaPurposeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaPurpose
     */
    select?: VisaPurposeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaPurpose
     */
    omit?: VisaPurposeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaPurposeInclude<ExtArgs> | null
  }


  /**
   * Model PofRule
   */

  export type AggregatePofRule = {
    _count: PofRuleCountAggregateOutputType | null
    _avg: PofRuleAvgAggregateOutputType | null
    _sum: PofRuleSumAggregateOutputType | null
    _min: PofRuleMinAggregateOutputType | null
    _max: PofRuleMaxAggregateOutputType | null
  }

  export type PofRuleAvgAggregateOutputType = {
    safeBufferMonths: number | null
    cautionBufferMonths: number | null
    riskyBufferMonths: number | null
    minAmountForeign: number | null
    statementMonths: number | null
  }

  export type PofRuleSumAggregateOutputType = {
    safeBufferMonths: number | null
    cautionBufferMonths: number | null
    riskyBufferMonths: number | null
    minAmountForeign: number | null
    statementMonths: number | null
  }

  export type PofRuleMinAggregateOutputType = {
    id: string | null
    countryId: string | null
    purposeId: string | null
    safeBufferMonths: number | null
    cautionBufferMonths: number | null
    riskyBufferMonths: number | null
    minAmountForeign: number | null
    requiresHistory: boolean | null
    analysisText: string | null
    nigerianSpecific: string | null
    statementMonths: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PofRuleMaxAggregateOutputType = {
    id: string | null
    countryId: string | null
    purposeId: string | null
    safeBufferMonths: number | null
    cautionBufferMonths: number | null
    riskyBufferMonths: number | null
    minAmountForeign: number | null
    requiresHistory: boolean | null
    analysisText: string | null
    nigerianSpecific: string | null
    statementMonths: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PofRuleCountAggregateOutputType = {
    id: number
    countryId: number
    purposeId: number
    safeBufferMonths: number
    cautionBufferMonths: number
    riskyBufferMonths: number
    minAmountForeign: number
    requiresHistory: number
    analysisText: number
    nigerianSpecific: number
    statementMonths: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PofRuleAvgAggregateInputType = {
    safeBufferMonths?: true
    cautionBufferMonths?: true
    riskyBufferMonths?: true
    minAmountForeign?: true
    statementMonths?: true
  }

  export type PofRuleSumAggregateInputType = {
    safeBufferMonths?: true
    cautionBufferMonths?: true
    riskyBufferMonths?: true
    minAmountForeign?: true
    statementMonths?: true
  }

  export type PofRuleMinAggregateInputType = {
    id?: true
    countryId?: true
    purposeId?: true
    safeBufferMonths?: true
    cautionBufferMonths?: true
    riskyBufferMonths?: true
    minAmountForeign?: true
    requiresHistory?: true
    analysisText?: true
    nigerianSpecific?: true
    statementMonths?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PofRuleMaxAggregateInputType = {
    id?: true
    countryId?: true
    purposeId?: true
    safeBufferMonths?: true
    cautionBufferMonths?: true
    riskyBufferMonths?: true
    minAmountForeign?: true
    requiresHistory?: true
    analysisText?: true
    nigerianSpecific?: true
    statementMonths?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PofRuleCountAggregateInputType = {
    id?: true
    countryId?: true
    purposeId?: true
    safeBufferMonths?: true
    cautionBufferMonths?: true
    riskyBufferMonths?: true
    minAmountForeign?: true
    requiresHistory?: true
    analysisText?: true
    nigerianSpecific?: true
    statementMonths?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PofRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PofRule to aggregate.
     */
    where?: PofRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PofRules to fetch.
     */
    orderBy?: PofRuleOrderByWithRelationInput | PofRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PofRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PofRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PofRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PofRules
    **/
    _count?: true | PofRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PofRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PofRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PofRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PofRuleMaxAggregateInputType
  }

  export type GetPofRuleAggregateType<T extends PofRuleAggregateArgs> = {
        [P in keyof T & keyof AggregatePofRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePofRule[P]>
      : GetScalarType<T[P], AggregatePofRule[P]>
  }




  export type PofRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PofRuleWhereInput
    orderBy?: PofRuleOrderByWithAggregationInput | PofRuleOrderByWithAggregationInput[]
    by: PofRuleScalarFieldEnum[] | PofRuleScalarFieldEnum
    having?: PofRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PofRuleCountAggregateInputType | true
    _avg?: PofRuleAvgAggregateInputType
    _sum?: PofRuleSumAggregateInputType
    _min?: PofRuleMinAggregateInputType
    _max?: PofRuleMaxAggregateInputType
  }

  export type PofRuleGroupByOutputType = {
    id: string
    countryId: string
    purposeId: string
    safeBufferMonths: number
    cautionBufferMonths: number
    riskyBufferMonths: number
    minAmountForeign: number
    requiresHistory: boolean
    analysisText: string
    nigerianSpecific: string
    statementMonths: number
    createdAt: Date
    updatedAt: Date
    _count: PofRuleCountAggregateOutputType | null
    _avg: PofRuleAvgAggregateOutputType | null
    _sum: PofRuleSumAggregateOutputType | null
    _min: PofRuleMinAggregateOutputType | null
    _max: PofRuleMaxAggregateOutputType | null
  }

  type GetPofRuleGroupByPayload<T extends PofRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PofRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PofRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PofRuleGroupByOutputType[P]>
            : GetScalarType<T[P], PofRuleGroupByOutputType[P]>
        }
      >
    >


  export type PofRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countryId?: boolean
    purposeId?: boolean
    safeBufferMonths?: boolean
    cautionBufferMonths?: boolean
    riskyBufferMonths?: boolean
    minAmountForeign?: boolean
    requiresHistory?: boolean
    analysisText?: boolean
    nigerianSpecific?: boolean
    statementMonths?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
    purpose?: boolean | VisaPurposeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pofRule"]>

  export type PofRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countryId?: boolean
    purposeId?: boolean
    safeBufferMonths?: boolean
    cautionBufferMonths?: boolean
    riskyBufferMonths?: boolean
    minAmountForeign?: boolean
    requiresHistory?: boolean
    analysisText?: boolean
    nigerianSpecific?: boolean
    statementMonths?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
    purpose?: boolean | VisaPurposeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pofRule"]>

  export type PofRuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countryId?: boolean
    purposeId?: boolean
    safeBufferMonths?: boolean
    cautionBufferMonths?: boolean
    riskyBufferMonths?: boolean
    minAmountForeign?: boolean
    requiresHistory?: boolean
    analysisText?: boolean
    nigerianSpecific?: boolean
    statementMonths?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
    purpose?: boolean | VisaPurposeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pofRule"]>

  export type PofRuleSelectScalar = {
    id?: boolean
    countryId?: boolean
    purposeId?: boolean
    safeBufferMonths?: boolean
    cautionBufferMonths?: boolean
    riskyBufferMonths?: boolean
    minAmountForeign?: boolean
    requiresHistory?: boolean
    analysisText?: boolean
    nigerianSpecific?: boolean
    statementMonths?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PofRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "countryId" | "purposeId" | "safeBufferMonths" | "cautionBufferMonths" | "riskyBufferMonths" | "minAmountForeign" | "requiresHistory" | "analysisText" | "nigerianSpecific" | "statementMonths" | "createdAt" | "updatedAt", ExtArgs["result"]["pofRule"]>
  export type PofRuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
    purpose?: boolean | VisaPurposeDefaultArgs<ExtArgs>
  }
  export type PofRuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
    purpose?: boolean | VisaPurposeDefaultArgs<ExtArgs>
  }
  export type PofRuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
    purpose?: boolean | VisaPurposeDefaultArgs<ExtArgs>
  }

  export type $PofRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PofRule"
    objects: {
      country: Prisma.$CountryPayload<ExtArgs>
      purpose: Prisma.$VisaPurposePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      countryId: string
      purposeId: string
      safeBufferMonths: number
      cautionBufferMonths: number
      riskyBufferMonths: number
      minAmountForeign: number
      requiresHistory: boolean
      analysisText: string
      nigerianSpecific: string
      statementMonths: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pofRule"]>
    composites: {}
  }

  type PofRuleGetPayload<S extends boolean | null | undefined | PofRuleDefaultArgs> = $Result.GetResult<Prisma.$PofRulePayload, S>

  type PofRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PofRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PofRuleCountAggregateInputType | true
    }

  export interface PofRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PofRule'], meta: { name: 'PofRule' } }
    /**
     * Find zero or one PofRule that matches the filter.
     * @param {PofRuleFindUniqueArgs} args - Arguments to find a PofRule
     * @example
     * // Get one PofRule
     * const pofRule = await prisma.pofRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PofRuleFindUniqueArgs>(args: SelectSubset<T, PofRuleFindUniqueArgs<ExtArgs>>): Prisma__PofRuleClient<$Result.GetResult<Prisma.$PofRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PofRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PofRuleFindUniqueOrThrowArgs} args - Arguments to find a PofRule
     * @example
     * // Get one PofRule
     * const pofRule = await prisma.pofRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PofRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, PofRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PofRuleClient<$Result.GetResult<Prisma.$PofRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PofRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PofRuleFindFirstArgs} args - Arguments to find a PofRule
     * @example
     * // Get one PofRule
     * const pofRule = await prisma.pofRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PofRuleFindFirstArgs>(args?: SelectSubset<T, PofRuleFindFirstArgs<ExtArgs>>): Prisma__PofRuleClient<$Result.GetResult<Prisma.$PofRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PofRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PofRuleFindFirstOrThrowArgs} args - Arguments to find a PofRule
     * @example
     * // Get one PofRule
     * const pofRule = await prisma.pofRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PofRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, PofRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__PofRuleClient<$Result.GetResult<Prisma.$PofRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PofRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PofRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PofRules
     * const pofRules = await prisma.pofRule.findMany()
     * 
     * // Get first 10 PofRules
     * const pofRules = await prisma.pofRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pofRuleWithIdOnly = await prisma.pofRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PofRuleFindManyArgs>(args?: SelectSubset<T, PofRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PofRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PofRule.
     * @param {PofRuleCreateArgs} args - Arguments to create a PofRule.
     * @example
     * // Create one PofRule
     * const PofRule = await prisma.pofRule.create({
     *   data: {
     *     // ... data to create a PofRule
     *   }
     * })
     * 
     */
    create<T extends PofRuleCreateArgs>(args: SelectSubset<T, PofRuleCreateArgs<ExtArgs>>): Prisma__PofRuleClient<$Result.GetResult<Prisma.$PofRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PofRules.
     * @param {PofRuleCreateManyArgs} args - Arguments to create many PofRules.
     * @example
     * // Create many PofRules
     * const pofRule = await prisma.pofRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PofRuleCreateManyArgs>(args?: SelectSubset<T, PofRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PofRules and returns the data saved in the database.
     * @param {PofRuleCreateManyAndReturnArgs} args - Arguments to create many PofRules.
     * @example
     * // Create many PofRules
     * const pofRule = await prisma.pofRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PofRules and only return the `id`
     * const pofRuleWithIdOnly = await prisma.pofRule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PofRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, PofRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PofRulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PofRule.
     * @param {PofRuleDeleteArgs} args - Arguments to delete one PofRule.
     * @example
     * // Delete one PofRule
     * const PofRule = await prisma.pofRule.delete({
     *   where: {
     *     // ... filter to delete one PofRule
     *   }
     * })
     * 
     */
    delete<T extends PofRuleDeleteArgs>(args: SelectSubset<T, PofRuleDeleteArgs<ExtArgs>>): Prisma__PofRuleClient<$Result.GetResult<Prisma.$PofRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PofRule.
     * @param {PofRuleUpdateArgs} args - Arguments to update one PofRule.
     * @example
     * // Update one PofRule
     * const pofRule = await prisma.pofRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PofRuleUpdateArgs>(args: SelectSubset<T, PofRuleUpdateArgs<ExtArgs>>): Prisma__PofRuleClient<$Result.GetResult<Prisma.$PofRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PofRules.
     * @param {PofRuleDeleteManyArgs} args - Arguments to filter PofRules to delete.
     * @example
     * // Delete a few PofRules
     * const { count } = await prisma.pofRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PofRuleDeleteManyArgs>(args?: SelectSubset<T, PofRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PofRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PofRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PofRules
     * const pofRule = await prisma.pofRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PofRuleUpdateManyArgs>(args: SelectSubset<T, PofRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PofRules and returns the data updated in the database.
     * @param {PofRuleUpdateManyAndReturnArgs} args - Arguments to update many PofRules.
     * @example
     * // Update many PofRules
     * const pofRule = await prisma.pofRule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PofRules and only return the `id`
     * const pofRuleWithIdOnly = await prisma.pofRule.updateManyAndReturn({
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
    updateManyAndReturn<T extends PofRuleUpdateManyAndReturnArgs>(args: SelectSubset<T, PofRuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PofRulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PofRule.
     * @param {PofRuleUpsertArgs} args - Arguments to update or create a PofRule.
     * @example
     * // Update or create a PofRule
     * const pofRule = await prisma.pofRule.upsert({
     *   create: {
     *     // ... data to create a PofRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PofRule we want to update
     *   }
     * })
     */
    upsert<T extends PofRuleUpsertArgs>(args: SelectSubset<T, PofRuleUpsertArgs<ExtArgs>>): Prisma__PofRuleClient<$Result.GetResult<Prisma.$PofRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PofRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PofRuleCountArgs} args - Arguments to filter PofRules to count.
     * @example
     * // Count the number of PofRules
     * const count = await prisma.pofRule.count({
     *   where: {
     *     // ... the filter for the PofRules we want to count
     *   }
     * })
    **/
    count<T extends PofRuleCountArgs>(
      args?: Subset<T, PofRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PofRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PofRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PofRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PofRuleAggregateArgs>(args: Subset<T, PofRuleAggregateArgs>): Prisma.PrismaPromise<GetPofRuleAggregateType<T>>

    /**
     * Group by PofRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PofRuleGroupByArgs} args - Group by arguments.
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
      T extends PofRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PofRuleGroupByArgs['orderBy'] }
        : { orderBy?: PofRuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PofRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPofRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PofRule model
   */
  readonly fields: PofRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PofRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PofRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    purpose<T extends VisaPurposeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VisaPurposeDefaultArgs<ExtArgs>>): Prisma__VisaPurposeClient<$Result.GetResult<Prisma.$VisaPurposePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PofRule model
   */
  interface PofRuleFieldRefs {
    readonly id: FieldRef<"PofRule", 'String'>
    readonly countryId: FieldRef<"PofRule", 'String'>
    readonly purposeId: FieldRef<"PofRule", 'String'>
    readonly safeBufferMonths: FieldRef<"PofRule", 'Int'>
    readonly cautionBufferMonths: FieldRef<"PofRule", 'Int'>
    readonly riskyBufferMonths: FieldRef<"PofRule", 'Int'>
    readonly minAmountForeign: FieldRef<"PofRule", 'Float'>
    readonly requiresHistory: FieldRef<"PofRule", 'Boolean'>
    readonly analysisText: FieldRef<"PofRule", 'String'>
    readonly nigerianSpecific: FieldRef<"PofRule", 'String'>
    readonly statementMonths: FieldRef<"PofRule", 'Int'>
    readonly createdAt: FieldRef<"PofRule", 'DateTime'>
    readonly updatedAt: FieldRef<"PofRule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PofRule findUnique
   */
  export type PofRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PofRule
     */
    select?: PofRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PofRule
     */
    omit?: PofRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PofRuleInclude<ExtArgs> | null
    /**
     * Filter, which PofRule to fetch.
     */
    where: PofRuleWhereUniqueInput
  }

  /**
   * PofRule findUniqueOrThrow
   */
  export type PofRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PofRule
     */
    select?: PofRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PofRule
     */
    omit?: PofRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PofRuleInclude<ExtArgs> | null
    /**
     * Filter, which PofRule to fetch.
     */
    where: PofRuleWhereUniqueInput
  }

  /**
   * PofRule findFirst
   */
  export type PofRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PofRule
     */
    select?: PofRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PofRule
     */
    omit?: PofRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PofRuleInclude<ExtArgs> | null
    /**
     * Filter, which PofRule to fetch.
     */
    where?: PofRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PofRules to fetch.
     */
    orderBy?: PofRuleOrderByWithRelationInput | PofRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PofRules.
     */
    cursor?: PofRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PofRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PofRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PofRules.
     */
    distinct?: PofRuleScalarFieldEnum | PofRuleScalarFieldEnum[]
  }

  /**
   * PofRule findFirstOrThrow
   */
  export type PofRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PofRule
     */
    select?: PofRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PofRule
     */
    omit?: PofRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PofRuleInclude<ExtArgs> | null
    /**
     * Filter, which PofRule to fetch.
     */
    where?: PofRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PofRules to fetch.
     */
    orderBy?: PofRuleOrderByWithRelationInput | PofRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PofRules.
     */
    cursor?: PofRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PofRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PofRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PofRules.
     */
    distinct?: PofRuleScalarFieldEnum | PofRuleScalarFieldEnum[]
  }

  /**
   * PofRule findMany
   */
  export type PofRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PofRule
     */
    select?: PofRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PofRule
     */
    omit?: PofRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PofRuleInclude<ExtArgs> | null
    /**
     * Filter, which PofRules to fetch.
     */
    where?: PofRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PofRules to fetch.
     */
    orderBy?: PofRuleOrderByWithRelationInput | PofRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PofRules.
     */
    cursor?: PofRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PofRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PofRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PofRules.
     */
    distinct?: PofRuleScalarFieldEnum | PofRuleScalarFieldEnum[]
  }

  /**
   * PofRule create
   */
  export type PofRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PofRule
     */
    select?: PofRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PofRule
     */
    omit?: PofRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PofRuleInclude<ExtArgs> | null
    /**
     * The data needed to create a PofRule.
     */
    data: XOR<PofRuleCreateInput, PofRuleUncheckedCreateInput>
  }

  /**
   * PofRule createMany
   */
  export type PofRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PofRules.
     */
    data: PofRuleCreateManyInput | PofRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PofRule createManyAndReturn
   */
  export type PofRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PofRule
     */
    select?: PofRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PofRule
     */
    omit?: PofRuleOmit<ExtArgs> | null
    /**
     * The data used to create many PofRules.
     */
    data: PofRuleCreateManyInput | PofRuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PofRuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PofRule update
   */
  export type PofRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PofRule
     */
    select?: PofRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PofRule
     */
    omit?: PofRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PofRuleInclude<ExtArgs> | null
    /**
     * The data needed to update a PofRule.
     */
    data: XOR<PofRuleUpdateInput, PofRuleUncheckedUpdateInput>
    /**
     * Choose, which PofRule to update.
     */
    where: PofRuleWhereUniqueInput
  }

  /**
   * PofRule updateMany
   */
  export type PofRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PofRules.
     */
    data: XOR<PofRuleUpdateManyMutationInput, PofRuleUncheckedUpdateManyInput>
    /**
     * Filter which PofRules to update
     */
    where?: PofRuleWhereInput
    /**
     * Limit how many PofRules to update.
     */
    limit?: number
  }

  /**
   * PofRule updateManyAndReturn
   */
  export type PofRuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PofRule
     */
    select?: PofRuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PofRule
     */
    omit?: PofRuleOmit<ExtArgs> | null
    /**
     * The data used to update PofRules.
     */
    data: XOR<PofRuleUpdateManyMutationInput, PofRuleUncheckedUpdateManyInput>
    /**
     * Filter which PofRules to update
     */
    where?: PofRuleWhereInput
    /**
     * Limit how many PofRules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PofRuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PofRule upsert
   */
  export type PofRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PofRule
     */
    select?: PofRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PofRule
     */
    omit?: PofRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PofRuleInclude<ExtArgs> | null
    /**
     * The filter to search for the PofRule to update in case it exists.
     */
    where: PofRuleWhereUniqueInput
    /**
     * In case the PofRule found by the `where` argument doesn't exist, create a new PofRule with this data.
     */
    create: XOR<PofRuleCreateInput, PofRuleUncheckedCreateInput>
    /**
     * In case the PofRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PofRuleUpdateInput, PofRuleUncheckedUpdateInput>
  }

  /**
   * PofRule delete
   */
  export type PofRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PofRule
     */
    select?: PofRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PofRule
     */
    omit?: PofRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PofRuleInclude<ExtArgs> | null
    /**
     * Filter which PofRule to delete.
     */
    where: PofRuleWhereUniqueInput
  }

  /**
   * PofRule deleteMany
   */
  export type PofRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PofRules to delete
     */
    where?: PofRuleWhereInput
    /**
     * Limit how many PofRules to delete.
     */
    limit?: number
  }

  /**
   * PofRule without action
   */
  export type PofRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PofRule
     */
    select?: PofRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PofRule
     */
    omit?: PofRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PofRuleInclude<ExtArgs> | null
  }


  /**
   * Model StudyIntake
   */

  export type AggregateStudyIntake = {
    _count: StudyIntakeCountAggregateOutputType | null
    _avg: StudyIntakeAvgAggregateOutputType | null
    _sum: StudyIntakeSumAggregateOutputType | null
    _min: StudyIntakeMinAggregateOutputType | null
    _max: StudyIntakeMaxAggregateOutputType | null
  }

  export type StudyIntakeAvgAggregateOutputType = {
    intakeMonth: number | null
  }

  export type StudyIntakeSumAggregateOutputType = {
    intakeMonth: number | null
  }

  export type StudyIntakeMinAggregateOutputType = {
    id: string | null
    countryId: string | null
    intakeMonth: number | null
    intakeName: string | null
    isMainIntake: boolean | null
  }

  export type StudyIntakeMaxAggregateOutputType = {
    id: string | null
    countryId: string | null
    intakeMonth: number | null
    intakeName: string | null
    isMainIntake: boolean | null
  }

  export type StudyIntakeCountAggregateOutputType = {
    id: number
    countryId: number
    intakeMonth: number
    intakeName: number
    isMainIntake: number
    _all: number
  }


  export type StudyIntakeAvgAggregateInputType = {
    intakeMonth?: true
  }

  export type StudyIntakeSumAggregateInputType = {
    intakeMonth?: true
  }

  export type StudyIntakeMinAggregateInputType = {
    id?: true
    countryId?: true
    intakeMonth?: true
    intakeName?: true
    isMainIntake?: true
  }

  export type StudyIntakeMaxAggregateInputType = {
    id?: true
    countryId?: true
    intakeMonth?: true
    intakeName?: true
    isMainIntake?: true
  }

  export type StudyIntakeCountAggregateInputType = {
    id?: true
    countryId?: true
    intakeMonth?: true
    intakeName?: true
    isMainIntake?: true
    _all?: true
  }

  export type StudyIntakeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudyIntake to aggregate.
     */
    where?: StudyIntakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyIntakes to fetch.
     */
    orderBy?: StudyIntakeOrderByWithRelationInput | StudyIntakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudyIntakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyIntakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyIntakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudyIntakes
    **/
    _count?: true | StudyIntakeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudyIntakeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudyIntakeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudyIntakeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudyIntakeMaxAggregateInputType
  }

  export type GetStudyIntakeAggregateType<T extends StudyIntakeAggregateArgs> = {
        [P in keyof T & keyof AggregateStudyIntake]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudyIntake[P]>
      : GetScalarType<T[P], AggregateStudyIntake[P]>
  }




  export type StudyIntakeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudyIntakeWhereInput
    orderBy?: StudyIntakeOrderByWithAggregationInput | StudyIntakeOrderByWithAggregationInput[]
    by: StudyIntakeScalarFieldEnum[] | StudyIntakeScalarFieldEnum
    having?: StudyIntakeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudyIntakeCountAggregateInputType | true
    _avg?: StudyIntakeAvgAggregateInputType
    _sum?: StudyIntakeSumAggregateInputType
    _min?: StudyIntakeMinAggregateInputType
    _max?: StudyIntakeMaxAggregateInputType
  }

  export type StudyIntakeGroupByOutputType = {
    id: string
    countryId: string
    intakeMonth: number
    intakeName: string
    isMainIntake: boolean
    _count: StudyIntakeCountAggregateOutputType | null
    _avg: StudyIntakeAvgAggregateOutputType | null
    _sum: StudyIntakeSumAggregateOutputType | null
    _min: StudyIntakeMinAggregateOutputType | null
    _max: StudyIntakeMaxAggregateOutputType | null
  }

  type GetStudyIntakeGroupByPayload<T extends StudyIntakeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudyIntakeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudyIntakeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudyIntakeGroupByOutputType[P]>
            : GetScalarType<T[P], StudyIntakeGroupByOutputType[P]>
        }
      >
    >


  export type StudyIntakeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countryId?: boolean
    intakeMonth?: boolean
    intakeName?: boolean
    isMainIntake?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyIntake"]>

  export type StudyIntakeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countryId?: boolean
    intakeMonth?: boolean
    intakeName?: boolean
    isMainIntake?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyIntake"]>

  export type StudyIntakeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countryId?: boolean
    intakeMonth?: boolean
    intakeName?: boolean
    isMainIntake?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyIntake"]>

  export type StudyIntakeSelectScalar = {
    id?: boolean
    countryId?: boolean
    intakeMonth?: boolean
    intakeName?: boolean
    isMainIntake?: boolean
  }

  export type StudyIntakeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "countryId" | "intakeMonth" | "intakeName" | "isMainIntake", ExtArgs["result"]["studyIntake"]>
  export type StudyIntakeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }
  export type StudyIntakeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }
  export type StudyIntakeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }

  export type $StudyIntakePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudyIntake"
    objects: {
      country: Prisma.$CountryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      countryId: string
      intakeMonth: number
      intakeName: string
      isMainIntake: boolean
    }, ExtArgs["result"]["studyIntake"]>
    composites: {}
  }

  type StudyIntakeGetPayload<S extends boolean | null | undefined | StudyIntakeDefaultArgs> = $Result.GetResult<Prisma.$StudyIntakePayload, S>

  type StudyIntakeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudyIntakeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudyIntakeCountAggregateInputType | true
    }

  export interface StudyIntakeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudyIntake'], meta: { name: 'StudyIntake' } }
    /**
     * Find zero or one StudyIntake that matches the filter.
     * @param {StudyIntakeFindUniqueArgs} args - Arguments to find a StudyIntake
     * @example
     * // Get one StudyIntake
     * const studyIntake = await prisma.studyIntake.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudyIntakeFindUniqueArgs>(args: SelectSubset<T, StudyIntakeFindUniqueArgs<ExtArgs>>): Prisma__StudyIntakeClient<$Result.GetResult<Prisma.$StudyIntakePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudyIntake that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudyIntakeFindUniqueOrThrowArgs} args - Arguments to find a StudyIntake
     * @example
     * // Get one StudyIntake
     * const studyIntake = await prisma.studyIntake.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudyIntakeFindUniqueOrThrowArgs>(args: SelectSubset<T, StudyIntakeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudyIntakeClient<$Result.GetResult<Prisma.$StudyIntakePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudyIntake that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyIntakeFindFirstArgs} args - Arguments to find a StudyIntake
     * @example
     * // Get one StudyIntake
     * const studyIntake = await prisma.studyIntake.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudyIntakeFindFirstArgs>(args?: SelectSubset<T, StudyIntakeFindFirstArgs<ExtArgs>>): Prisma__StudyIntakeClient<$Result.GetResult<Prisma.$StudyIntakePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudyIntake that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyIntakeFindFirstOrThrowArgs} args - Arguments to find a StudyIntake
     * @example
     * // Get one StudyIntake
     * const studyIntake = await prisma.studyIntake.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudyIntakeFindFirstOrThrowArgs>(args?: SelectSubset<T, StudyIntakeFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudyIntakeClient<$Result.GetResult<Prisma.$StudyIntakePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudyIntakes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyIntakeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudyIntakes
     * const studyIntakes = await prisma.studyIntake.findMany()
     * 
     * // Get first 10 StudyIntakes
     * const studyIntakes = await prisma.studyIntake.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studyIntakeWithIdOnly = await prisma.studyIntake.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudyIntakeFindManyArgs>(args?: SelectSubset<T, StudyIntakeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyIntakePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudyIntake.
     * @param {StudyIntakeCreateArgs} args - Arguments to create a StudyIntake.
     * @example
     * // Create one StudyIntake
     * const StudyIntake = await prisma.studyIntake.create({
     *   data: {
     *     // ... data to create a StudyIntake
     *   }
     * })
     * 
     */
    create<T extends StudyIntakeCreateArgs>(args: SelectSubset<T, StudyIntakeCreateArgs<ExtArgs>>): Prisma__StudyIntakeClient<$Result.GetResult<Prisma.$StudyIntakePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudyIntakes.
     * @param {StudyIntakeCreateManyArgs} args - Arguments to create many StudyIntakes.
     * @example
     * // Create many StudyIntakes
     * const studyIntake = await prisma.studyIntake.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudyIntakeCreateManyArgs>(args?: SelectSubset<T, StudyIntakeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudyIntakes and returns the data saved in the database.
     * @param {StudyIntakeCreateManyAndReturnArgs} args - Arguments to create many StudyIntakes.
     * @example
     * // Create many StudyIntakes
     * const studyIntake = await prisma.studyIntake.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudyIntakes and only return the `id`
     * const studyIntakeWithIdOnly = await prisma.studyIntake.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudyIntakeCreateManyAndReturnArgs>(args?: SelectSubset<T, StudyIntakeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyIntakePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudyIntake.
     * @param {StudyIntakeDeleteArgs} args - Arguments to delete one StudyIntake.
     * @example
     * // Delete one StudyIntake
     * const StudyIntake = await prisma.studyIntake.delete({
     *   where: {
     *     // ... filter to delete one StudyIntake
     *   }
     * })
     * 
     */
    delete<T extends StudyIntakeDeleteArgs>(args: SelectSubset<T, StudyIntakeDeleteArgs<ExtArgs>>): Prisma__StudyIntakeClient<$Result.GetResult<Prisma.$StudyIntakePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudyIntake.
     * @param {StudyIntakeUpdateArgs} args - Arguments to update one StudyIntake.
     * @example
     * // Update one StudyIntake
     * const studyIntake = await prisma.studyIntake.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudyIntakeUpdateArgs>(args: SelectSubset<T, StudyIntakeUpdateArgs<ExtArgs>>): Prisma__StudyIntakeClient<$Result.GetResult<Prisma.$StudyIntakePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudyIntakes.
     * @param {StudyIntakeDeleteManyArgs} args - Arguments to filter StudyIntakes to delete.
     * @example
     * // Delete a few StudyIntakes
     * const { count } = await prisma.studyIntake.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudyIntakeDeleteManyArgs>(args?: SelectSubset<T, StudyIntakeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudyIntakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyIntakeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudyIntakes
     * const studyIntake = await prisma.studyIntake.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudyIntakeUpdateManyArgs>(args: SelectSubset<T, StudyIntakeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudyIntakes and returns the data updated in the database.
     * @param {StudyIntakeUpdateManyAndReturnArgs} args - Arguments to update many StudyIntakes.
     * @example
     * // Update many StudyIntakes
     * const studyIntake = await prisma.studyIntake.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudyIntakes and only return the `id`
     * const studyIntakeWithIdOnly = await prisma.studyIntake.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudyIntakeUpdateManyAndReturnArgs>(args: SelectSubset<T, StudyIntakeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyIntakePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudyIntake.
     * @param {StudyIntakeUpsertArgs} args - Arguments to update or create a StudyIntake.
     * @example
     * // Update or create a StudyIntake
     * const studyIntake = await prisma.studyIntake.upsert({
     *   create: {
     *     // ... data to create a StudyIntake
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudyIntake we want to update
     *   }
     * })
     */
    upsert<T extends StudyIntakeUpsertArgs>(args: SelectSubset<T, StudyIntakeUpsertArgs<ExtArgs>>): Prisma__StudyIntakeClient<$Result.GetResult<Prisma.$StudyIntakePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudyIntakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyIntakeCountArgs} args - Arguments to filter StudyIntakes to count.
     * @example
     * // Count the number of StudyIntakes
     * const count = await prisma.studyIntake.count({
     *   where: {
     *     // ... the filter for the StudyIntakes we want to count
     *   }
     * })
    **/
    count<T extends StudyIntakeCountArgs>(
      args?: Subset<T, StudyIntakeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudyIntakeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudyIntake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyIntakeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudyIntakeAggregateArgs>(args: Subset<T, StudyIntakeAggregateArgs>): Prisma.PrismaPromise<GetStudyIntakeAggregateType<T>>

    /**
     * Group by StudyIntake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyIntakeGroupByArgs} args - Group by arguments.
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
      T extends StudyIntakeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudyIntakeGroupByArgs['orderBy'] }
        : { orderBy?: StudyIntakeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudyIntakeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudyIntakeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudyIntake model
   */
  readonly fields: StudyIntakeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudyIntake.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudyIntakeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StudyIntake model
   */
  interface StudyIntakeFieldRefs {
    readonly id: FieldRef<"StudyIntake", 'String'>
    readonly countryId: FieldRef<"StudyIntake", 'String'>
    readonly intakeMonth: FieldRef<"StudyIntake", 'Int'>
    readonly intakeName: FieldRef<"StudyIntake", 'String'>
    readonly isMainIntake: FieldRef<"StudyIntake", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * StudyIntake findUnique
   */
  export type StudyIntakeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyIntake
     */
    select?: StudyIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyIntake
     */
    omit?: StudyIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyIntakeInclude<ExtArgs> | null
    /**
     * Filter, which StudyIntake to fetch.
     */
    where: StudyIntakeWhereUniqueInput
  }

  /**
   * StudyIntake findUniqueOrThrow
   */
  export type StudyIntakeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyIntake
     */
    select?: StudyIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyIntake
     */
    omit?: StudyIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyIntakeInclude<ExtArgs> | null
    /**
     * Filter, which StudyIntake to fetch.
     */
    where: StudyIntakeWhereUniqueInput
  }

  /**
   * StudyIntake findFirst
   */
  export type StudyIntakeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyIntake
     */
    select?: StudyIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyIntake
     */
    omit?: StudyIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyIntakeInclude<ExtArgs> | null
    /**
     * Filter, which StudyIntake to fetch.
     */
    where?: StudyIntakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyIntakes to fetch.
     */
    orderBy?: StudyIntakeOrderByWithRelationInput | StudyIntakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudyIntakes.
     */
    cursor?: StudyIntakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyIntakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyIntakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudyIntakes.
     */
    distinct?: StudyIntakeScalarFieldEnum | StudyIntakeScalarFieldEnum[]
  }

  /**
   * StudyIntake findFirstOrThrow
   */
  export type StudyIntakeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyIntake
     */
    select?: StudyIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyIntake
     */
    omit?: StudyIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyIntakeInclude<ExtArgs> | null
    /**
     * Filter, which StudyIntake to fetch.
     */
    where?: StudyIntakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyIntakes to fetch.
     */
    orderBy?: StudyIntakeOrderByWithRelationInput | StudyIntakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudyIntakes.
     */
    cursor?: StudyIntakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyIntakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyIntakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudyIntakes.
     */
    distinct?: StudyIntakeScalarFieldEnum | StudyIntakeScalarFieldEnum[]
  }

  /**
   * StudyIntake findMany
   */
  export type StudyIntakeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyIntake
     */
    select?: StudyIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyIntake
     */
    omit?: StudyIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyIntakeInclude<ExtArgs> | null
    /**
     * Filter, which StudyIntakes to fetch.
     */
    where?: StudyIntakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyIntakes to fetch.
     */
    orderBy?: StudyIntakeOrderByWithRelationInput | StudyIntakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudyIntakes.
     */
    cursor?: StudyIntakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyIntakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyIntakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudyIntakes.
     */
    distinct?: StudyIntakeScalarFieldEnum | StudyIntakeScalarFieldEnum[]
  }

  /**
   * StudyIntake create
   */
  export type StudyIntakeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyIntake
     */
    select?: StudyIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyIntake
     */
    omit?: StudyIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyIntakeInclude<ExtArgs> | null
    /**
     * The data needed to create a StudyIntake.
     */
    data: XOR<StudyIntakeCreateInput, StudyIntakeUncheckedCreateInput>
  }

  /**
   * StudyIntake createMany
   */
  export type StudyIntakeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudyIntakes.
     */
    data: StudyIntakeCreateManyInput | StudyIntakeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudyIntake createManyAndReturn
   */
  export type StudyIntakeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyIntake
     */
    select?: StudyIntakeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudyIntake
     */
    omit?: StudyIntakeOmit<ExtArgs> | null
    /**
     * The data used to create many StudyIntakes.
     */
    data: StudyIntakeCreateManyInput | StudyIntakeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyIntakeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudyIntake update
   */
  export type StudyIntakeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyIntake
     */
    select?: StudyIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyIntake
     */
    omit?: StudyIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyIntakeInclude<ExtArgs> | null
    /**
     * The data needed to update a StudyIntake.
     */
    data: XOR<StudyIntakeUpdateInput, StudyIntakeUncheckedUpdateInput>
    /**
     * Choose, which StudyIntake to update.
     */
    where: StudyIntakeWhereUniqueInput
  }

  /**
   * StudyIntake updateMany
   */
  export type StudyIntakeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudyIntakes.
     */
    data: XOR<StudyIntakeUpdateManyMutationInput, StudyIntakeUncheckedUpdateManyInput>
    /**
     * Filter which StudyIntakes to update
     */
    where?: StudyIntakeWhereInput
    /**
     * Limit how many StudyIntakes to update.
     */
    limit?: number
  }

  /**
   * StudyIntake updateManyAndReturn
   */
  export type StudyIntakeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyIntake
     */
    select?: StudyIntakeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudyIntake
     */
    omit?: StudyIntakeOmit<ExtArgs> | null
    /**
     * The data used to update StudyIntakes.
     */
    data: XOR<StudyIntakeUpdateManyMutationInput, StudyIntakeUncheckedUpdateManyInput>
    /**
     * Filter which StudyIntakes to update
     */
    where?: StudyIntakeWhereInput
    /**
     * Limit how many StudyIntakes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyIntakeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudyIntake upsert
   */
  export type StudyIntakeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyIntake
     */
    select?: StudyIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyIntake
     */
    omit?: StudyIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyIntakeInclude<ExtArgs> | null
    /**
     * The filter to search for the StudyIntake to update in case it exists.
     */
    where: StudyIntakeWhereUniqueInput
    /**
     * In case the StudyIntake found by the `where` argument doesn't exist, create a new StudyIntake with this data.
     */
    create: XOR<StudyIntakeCreateInput, StudyIntakeUncheckedCreateInput>
    /**
     * In case the StudyIntake was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudyIntakeUpdateInput, StudyIntakeUncheckedUpdateInput>
  }

  /**
   * StudyIntake delete
   */
  export type StudyIntakeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyIntake
     */
    select?: StudyIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyIntake
     */
    omit?: StudyIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyIntakeInclude<ExtArgs> | null
    /**
     * Filter which StudyIntake to delete.
     */
    where: StudyIntakeWhereUniqueInput
  }

  /**
   * StudyIntake deleteMany
   */
  export type StudyIntakeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudyIntakes to delete
     */
    where?: StudyIntakeWhereInput
    /**
     * Limit how many StudyIntakes to delete.
     */
    limit?: number
  }

  /**
   * StudyIntake without action
   */
  export type StudyIntakeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyIntake
     */
    select?: StudyIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyIntake
     */
    omit?: StudyIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyIntakeInclude<ExtArgs> | null
  }


  /**
   * Model FxRate
   */

  export type AggregateFxRate = {
    _count: FxRateCountAggregateOutputType | null
    _avg: FxRateAvgAggregateOutputType | null
    _sum: FxRateSumAggregateOutputType | null
    _min: FxRateMinAggregateOutputType | null
    _max: FxRateMaxAggregateOutputType | null
  }

  export type FxRateAvgAggregateOutputType = {
    cbnRate: number | null
    parallelRate: number | null
  }

  export type FxRateSumAggregateOutputType = {
    cbnRate: number | null
    parallelRate: number | null
  }

  export type FxRateMinAggregateOutputType = {
    currencyCode: string | null
    cbnRate: number | null
    parallelRate: number | null
    lastUpdated: Date | null
  }

  export type FxRateMaxAggregateOutputType = {
    currencyCode: string | null
    cbnRate: number | null
    parallelRate: number | null
    lastUpdated: Date | null
  }

  export type FxRateCountAggregateOutputType = {
    currencyCode: number
    cbnRate: number
    parallelRate: number
    lastUpdated: number
    _all: number
  }


  export type FxRateAvgAggregateInputType = {
    cbnRate?: true
    parallelRate?: true
  }

  export type FxRateSumAggregateInputType = {
    cbnRate?: true
    parallelRate?: true
  }

  export type FxRateMinAggregateInputType = {
    currencyCode?: true
    cbnRate?: true
    parallelRate?: true
    lastUpdated?: true
  }

  export type FxRateMaxAggregateInputType = {
    currencyCode?: true
    cbnRate?: true
    parallelRate?: true
    lastUpdated?: true
  }

  export type FxRateCountAggregateInputType = {
    currencyCode?: true
    cbnRate?: true
    parallelRate?: true
    lastUpdated?: true
    _all?: true
  }

  export type FxRateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FxRate to aggregate.
     */
    where?: FxRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FxRates to fetch.
     */
    orderBy?: FxRateOrderByWithRelationInput | FxRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FxRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FxRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FxRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FxRates
    **/
    _count?: true | FxRateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FxRateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FxRateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FxRateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FxRateMaxAggregateInputType
  }

  export type GetFxRateAggregateType<T extends FxRateAggregateArgs> = {
        [P in keyof T & keyof AggregateFxRate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFxRate[P]>
      : GetScalarType<T[P], AggregateFxRate[P]>
  }




  export type FxRateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FxRateWhereInput
    orderBy?: FxRateOrderByWithAggregationInput | FxRateOrderByWithAggregationInput[]
    by: FxRateScalarFieldEnum[] | FxRateScalarFieldEnum
    having?: FxRateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FxRateCountAggregateInputType | true
    _avg?: FxRateAvgAggregateInputType
    _sum?: FxRateSumAggregateInputType
    _min?: FxRateMinAggregateInputType
    _max?: FxRateMaxAggregateInputType
  }

  export type FxRateGroupByOutputType = {
    currencyCode: string
    cbnRate: number
    parallelRate: number
    lastUpdated: Date
    _count: FxRateCountAggregateOutputType | null
    _avg: FxRateAvgAggregateOutputType | null
    _sum: FxRateSumAggregateOutputType | null
    _min: FxRateMinAggregateOutputType | null
    _max: FxRateMaxAggregateOutputType | null
  }

  type GetFxRateGroupByPayload<T extends FxRateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FxRateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FxRateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FxRateGroupByOutputType[P]>
            : GetScalarType<T[P], FxRateGroupByOutputType[P]>
        }
      >
    >


  export type FxRateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    currencyCode?: boolean
    cbnRate?: boolean
    parallelRate?: boolean
    lastUpdated?: boolean
    countries?: boolean | FxRate$countriesArgs<ExtArgs>
    _count?: boolean | FxRateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fxRate"]>

  export type FxRateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    currencyCode?: boolean
    cbnRate?: boolean
    parallelRate?: boolean
    lastUpdated?: boolean
  }, ExtArgs["result"]["fxRate"]>

  export type FxRateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    currencyCode?: boolean
    cbnRate?: boolean
    parallelRate?: boolean
    lastUpdated?: boolean
  }, ExtArgs["result"]["fxRate"]>

  export type FxRateSelectScalar = {
    currencyCode?: boolean
    cbnRate?: boolean
    parallelRate?: boolean
    lastUpdated?: boolean
  }

  export type FxRateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"currencyCode" | "cbnRate" | "parallelRate" | "lastUpdated", ExtArgs["result"]["fxRate"]>
  export type FxRateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    countries?: boolean | FxRate$countriesArgs<ExtArgs>
    _count?: boolean | FxRateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FxRateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FxRateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FxRatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FxRate"
    objects: {
      countries: Prisma.$CountryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      currencyCode: string
      cbnRate: number
      parallelRate: number
      lastUpdated: Date
    }, ExtArgs["result"]["fxRate"]>
    composites: {}
  }

  type FxRateGetPayload<S extends boolean | null | undefined | FxRateDefaultArgs> = $Result.GetResult<Prisma.$FxRatePayload, S>

  type FxRateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FxRateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FxRateCountAggregateInputType | true
    }

  export interface FxRateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FxRate'], meta: { name: 'FxRate' } }
    /**
     * Find zero or one FxRate that matches the filter.
     * @param {FxRateFindUniqueArgs} args - Arguments to find a FxRate
     * @example
     * // Get one FxRate
     * const fxRate = await prisma.fxRate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FxRateFindUniqueArgs>(args: SelectSubset<T, FxRateFindUniqueArgs<ExtArgs>>): Prisma__FxRateClient<$Result.GetResult<Prisma.$FxRatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FxRate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FxRateFindUniqueOrThrowArgs} args - Arguments to find a FxRate
     * @example
     * // Get one FxRate
     * const fxRate = await prisma.fxRate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FxRateFindUniqueOrThrowArgs>(args: SelectSubset<T, FxRateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FxRateClient<$Result.GetResult<Prisma.$FxRatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FxRate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FxRateFindFirstArgs} args - Arguments to find a FxRate
     * @example
     * // Get one FxRate
     * const fxRate = await prisma.fxRate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FxRateFindFirstArgs>(args?: SelectSubset<T, FxRateFindFirstArgs<ExtArgs>>): Prisma__FxRateClient<$Result.GetResult<Prisma.$FxRatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FxRate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FxRateFindFirstOrThrowArgs} args - Arguments to find a FxRate
     * @example
     * // Get one FxRate
     * const fxRate = await prisma.fxRate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FxRateFindFirstOrThrowArgs>(args?: SelectSubset<T, FxRateFindFirstOrThrowArgs<ExtArgs>>): Prisma__FxRateClient<$Result.GetResult<Prisma.$FxRatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FxRates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FxRateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FxRates
     * const fxRates = await prisma.fxRate.findMany()
     * 
     * // Get first 10 FxRates
     * const fxRates = await prisma.fxRate.findMany({ take: 10 })
     * 
     * // Only select the `currencyCode`
     * const fxRateWithCurrencyCodeOnly = await prisma.fxRate.findMany({ select: { currencyCode: true } })
     * 
     */
    findMany<T extends FxRateFindManyArgs>(args?: SelectSubset<T, FxRateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FxRatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FxRate.
     * @param {FxRateCreateArgs} args - Arguments to create a FxRate.
     * @example
     * // Create one FxRate
     * const FxRate = await prisma.fxRate.create({
     *   data: {
     *     // ... data to create a FxRate
     *   }
     * })
     * 
     */
    create<T extends FxRateCreateArgs>(args: SelectSubset<T, FxRateCreateArgs<ExtArgs>>): Prisma__FxRateClient<$Result.GetResult<Prisma.$FxRatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FxRates.
     * @param {FxRateCreateManyArgs} args - Arguments to create many FxRates.
     * @example
     * // Create many FxRates
     * const fxRate = await prisma.fxRate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FxRateCreateManyArgs>(args?: SelectSubset<T, FxRateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FxRates and returns the data saved in the database.
     * @param {FxRateCreateManyAndReturnArgs} args - Arguments to create many FxRates.
     * @example
     * // Create many FxRates
     * const fxRate = await prisma.fxRate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FxRates and only return the `currencyCode`
     * const fxRateWithCurrencyCodeOnly = await prisma.fxRate.createManyAndReturn({
     *   select: { currencyCode: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FxRateCreateManyAndReturnArgs>(args?: SelectSubset<T, FxRateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FxRatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FxRate.
     * @param {FxRateDeleteArgs} args - Arguments to delete one FxRate.
     * @example
     * // Delete one FxRate
     * const FxRate = await prisma.fxRate.delete({
     *   where: {
     *     // ... filter to delete one FxRate
     *   }
     * })
     * 
     */
    delete<T extends FxRateDeleteArgs>(args: SelectSubset<T, FxRateDeleteArgs<ExtArgs>>): Prisma__FxRateClient<$Result.GetResult<Prisma.$FxRatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FxRate.
     * @param {FxRateUpdateArgs} args - Arguments to update one FxRate.
     * @example
     * // Update one FxRate
     * const fxRate = await prisma.fxRate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FxRateUpdateArgs>(args: SelectSubset<T, FxRateUpdateArgs<ExtArgs>>): Prisma__FxRateClient<$Result.GetResult<Prisma.$FxRatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FxRates.
     * @param {FxRateDeleteManyArgs} args - Arguments to filter FxRates to delete.
     * @example
     * // Delete a few FxRates
     * const { count } = await prisma.fxRate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FxRateDeleteManyArgs>(args?: SelectSubset<T, FxRateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FxRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FxRateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FxRates
     * const fxRate = await prisma.fxRate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FxRateUpdateManyArgs>(args: SelectSubset<T, FxRateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FxRates and returns the data updated in the database.
     * @param {FxRateUpdateManyAndReturnArgs} args - Arguments to update many FxRates.
     * @example
     * // Update many FxRates
     * const fxRate = await prisma.fxRate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FxRates and only return the `currencyCode`
     * const fxRateWithCurrencyCodeOnly = await prisma.fxRate.updateManyAndReturn({
     *   select: { currencyCode: true },
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
    updateManyAndReturn<T extends FxRateUpdateManyAndReturnArgs>(args: SelectSubset<T, FxRateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FxRatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FxRate.
     * @param {FxRateUpsertArgs} args - Arguments to update or create a FxRate.
     * @example
     * // Update or create a FxRate
     * const fxRate = await prisma.fxRate.upsert({
     *   create: {
     *     // ... data to create a FxRate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FxRate we want to update
     *   }
     * })
     */
    upsert<T extends FxRateUpsertArgs>(args: SelectSubset<T, FxRateUpsertArgs<ExtArgs>>): Prisma__FxRateClient<$Result.GetResult<Prisma.$FxRatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FxRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FxRateCountArgs} args - Arguments to filter FxRates to count.
     * @example
     * // Count the number of FxRates
     * const count = await prisma.fxRate.count({
     *   where: {
     *     // ... the filter for the FxRates we want to count
     *   }
     * })
    **/
    count<T extends FxRateCountArgs>(
      args?: Subset<T, FxRateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FxRateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FxRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FxRateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FxRateAggregateArgs>(args: Subset<T, FxRateAggregateArgs>): Prisma.PrismaPromise<GetFxRateAggregateType<T>>

    /**
     * Group by FxRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FxRateGroupByArgs} args - Group by arguments.
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
      T extends FxRateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FxRateGroupByArgs['orderBy'] }
        : { orderBy?: FxRateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FxRateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFxRateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FxRate model
   */
  readonly fields: FxRateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FxRate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FxRateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    countries<T extends FxRate$countriesArgs<ExtArgs> = {}>(args?: Subset<T, FxRate$countriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FxRate model
   */
  interface FxRateFieldRefs {
    readonly currencyCode: FieldRef<"FxRate", 'String'>
    readonly cbnRate: FieldRef<"FxRate", 'Float'>
    readonly parallelRate: FieldRef<"FxRate", 'Float'>
    readonly lastUpdated: FieldRef<"FxRate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FxRate findUnique
   */
  export type FxRateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FxRate
     */
    select?: FxRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FxRate
     */
    omit?: FxRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FxRateInclude<ExtArgs> | null
    /**
     * Filter, which FxRate to fetch.
     */
    where: FxRateWhereUniqueInput
  }

  /**
   * FxRate findUniqueOrThrow
   */
  export type FxRateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FxRate
     */
    select?: FxRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FxRate
     */
    omit?: FxRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FxRateInclude<ExtArgs> | null
    /**
     * Filter, which FxRate to fetch.
     */
    where: FxRateWhereUniqueInput
  }

  /**
   * FxRate findFirst
   */
  export type FxRateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FxRate
     */
    select?: FxRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FxRate
     */
    omit?: FxRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FxRateInclude<ExtArgs> | null
    /**
     * Filter, which FxRate to fetch.
     */
    where?: FxRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FxRates to fetch.
     */
    orderBy?: FxRateOrderByWithRelationInput | FxRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FxRates.
     */
    cursor?: FxRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FxRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FxRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FxRates.
     */
    distinct?: FxRateScalarFieldEnum | FxRateScalarFieldEnum[]
  }

  /**
   * FxRate findFirstOrThrow
   */
  export type FxRateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FxRate
     */
    select?: FxRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FxRate
     */
    omit?: FxRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FxRateInclude<ExtArgs> | null
    /**
     * Filter, which FxRate to fetch.
     */
    where?: FxRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FxRates to fetch.
     */
    orderBy?: FxRateOrderByWithRelationInput | FxRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FxRates.
     */
    cursor?: FxRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FxRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FxRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FxRates.
     */
    distinct?: FxRateScalarFieldEnum | FxRateScalarFieldEnum[]
  }

  /**
   * FxRate findMany
   */
  export type FxRateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FxRate
     */
    select?: FxRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FxRate
     */
    omit?: FxRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FxRateInclude<ExtArgs> | null
    /**
     * Filter, which FxRates to fetch.
     */
    where?: FxRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FxRates to fetch.
     */
    orderBy?: FxRateOrderByWithRelationInput | FxRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FxRates.
     */
    cursor?: FxRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FxRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FxRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FxRates.
     */
    distinct?: FxRateScalarFieldEnum | FxRateScalarFieldEnum[]
  }

  /**
   * FxRate create
   */
  export type FxRateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FxRate
     */
    select?: FxRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FxRate
     */
    omit?: FxRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FxRateInclude<ExtArgs> | null
    /**
     * The data needed to create a FxRate.
     */
    data: XOR<FxRateCreateInput, FxRateUncheckedCreateInput>
  }

  /**
   * FxRate createMany
   */
  export type FxRateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FxRates.
     */
    data: FxRateCreateManyInput | FxRateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FxRate createManyAndReturn
   */
  export type FxRateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FxRate
     */
    select?: FxRateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FxRate
     */
    omit?: FxRateOmit<ExtArgs> | null
    /**
     * The data used to create many FxRates.
     */
    data: FxRateCreateManyInput | FxRateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FxRate update
   */
  export type FxRateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FxRate
     */
    select?: FxRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FxRate
     */
    omit?: FxRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FxRateInclude<ExtArgs> | null
    /**
     * The data needed to update a FxRate.
     */
    data: XOR<FxRateUpdateInput, FxRateUncheckedUpdateInput>
    /**
     * Choose, which FxRate to update.
     */
    where: FxRateWhereUniqueInput
  }

  /**
   * FxRate updateMany
   */
  export type FxRateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FxRates.
     */
    data: XOR<FxRateUpdateManyMutationInput, FxRateUncheckedUpdateManyInput>
    /**
     * Filter which FxRates to update
     */
    where?: FxRateWhereInput
    /**
     * Limit how many FxRates to update.
     */
    limit?: number
  }

  /**
   * FxRate updateManyAndReturn
   */
  export type FxRateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FxRate
     */
    select?: FxRateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FxRate
     */
    omit?: FxRateOmit<ExtArgs> | null
    /**
     * The data used to update FxRates.
     */
    data: XOR<FxRateUpdateManyMutationInput, FxRateUncheckedUpdateManyInput>
    /**
     * Filter which FxRates to update
     */
    where?: FxRateWhereInput
    /**
     * Limit how many FxRates to update.
     */
    limit?: number
  }

  /**
   * FxRate upsert
   */
  export type FxRateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FxRate
     */
    select?: FxRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FxRate
     */
    omit?: FxRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FxRateInclude<ExtArgs> | null
    /**
     * The filter to search for the FxRate to update in case it exists.
     */
    where: FxRateWhereUniqueInput
    /**
     * In case the FxRate found by the `where` argument doesn't exist, create a new FxRate with this data.
     */
    create: XOR<FxRateCreateInput, FxRateUncheckedCreateInput>
    /**
     * In case the FxRate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FxRateUpdateInput, FxRateUncheckedUpdateInput>
  }

  /**
   * FxRate delete
   */
  export type FxRateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FxRate
     */
    select?: FxRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FxRate
     */
    omit?: FxRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FxRateInclude<ExtArgs> | null
    /**
     * Filter which FxRate to delete.
     */
    where: FxRateWhereUniqueInput
  }

  /**
   * FxRate deleteMany
   */
  export type FxRateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FxRates to delete
     */
    where?: FxRateWhereInput
    /**
     * Limit how many FxRates to delete.
     */
    limit?: number
  }

  /**
   * FxRate.countries
   */
  export type FxRate$countriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    cursor?: CountryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * FxRate without action
   */
  export type FxRateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FxRate
     */
    select?: FxRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FxRate
     */
    omit?: FxRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FxRateInclude<ExtArgs> | null
  }


  /**
   * Model UserTimeline
   */

  export type AggregateUserTimeline = {
    _count: UserTimelineCountAggregateOutputType | null
    _avg: UserTimelineAvgAggregateOutputType | null
    _sum: UserTimelineSumAggregateOutputType | null
    _min: UserTimelineMinAggregateOutputType | null
    _max: UserTimelineMaxAggregateOutputType | null
  }

  export type UserTimelineAvgAggregateOutputType = {
    currentBalance: number | null
    targetAmount: number | null
    monthlyDeposit: number | null
  }

  export type UserTimelineSumAggregateOutputType = {
    currentBalance: number | null
    targetAmount: number | null
    monthlyDeposit: number | null
  }

  export type UserTimelineMinAggregateOutputType = {
    id: string | null
    userId: string | null
    countryId: string | null
    purposeId: string | null
    slug: string | null
    intakeDate: Date | null
    currentBalance: number | null
    targetAmount: number | null
    monthlyDeposit: number | null
    safeStartDate: Date | null
    cautionStartDate: Date | null
    riskyStartDate: Date | null
    currentStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserTimelineMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    countryId: string | null
    purposeId: string | null
    slug: string | null
    intakeDate: Date | null
    currentBalance: number | null
    targetAmount: number | null
    monthlyDeposit: number | null
    safeStartDate: Date | null
    cautionStartDate: Date | null
    riskyStartDate: Date | null
    currentStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserTimelineCountAggregateOutputType = {
    id: number
    userId: number
    countryId: number
    purposeId: number
    slug: number
    intakeDate: number
    currentBalance: number
    targetAmount: number
    monthlyDeposit: number
    safeStartDate: number
    cautionStartDate: number
    riskyStartDate: number
    currentStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserTimelineAvgAggregateInputType = {
    currentBalance?: true
    targetAmount?: true
    monthlyDeposit?: true
  }

  export type UserTimelineSumAggregateInputType = {
    currentBalance?: true
    targetAmount?: true
    monthlyDeposit?: true
  }

  export type UserTimelineMinAggregateInputType = {
    id?: true
    userId?: true
    countryId?: true
    purposeId?: true
    slug?: true
    intakeDate?: true
    currentBalance?: true
    targetAmount?: true
    monthlyDeposit?: true
    safeStartDate?: true
    cautionStartDate?: true
    riskyStartDate?: true
    currentStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserTimelineMaxAggregateInputType = {
    id?: true
    userId?: true
    countryId?: true
    purposeId?: true
    slug?: true
    intakeDate?: true
    currentBalance?: true
    targetAmount?: true
    monthlyDeposit?: true
    safeStartDate?: true
    cautionStartDate?: true
    riskyStartDate?: true
    currentStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserTimelineCountAggregateInputType = {
    id?: true
    userId?: true
    countryId?: true
    purposeId?: true
    slug?: true
    intakeDate?: true
    currentBalance?: true
    targetAmount?: true
    monthlyDeposit?: true
    safeStartDate?: true
    cautionStartDate?: true
    riskyStartDate?: true
    currentStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserTimelineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTimeline to aggregate.
     */
    where?: UserTimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTimelines to fetch.
     */
    orderBy?: UserTimelineOrderByWithRelationInput | UserTimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserTimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTimelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTimelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserTimelines
    **/
    _count?: true | UserTimelineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserTimelineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserTimelineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTimelineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTimelineMaxAggregateInputType
  }

  export type GetUserTimelineAggregateType<T extends UserTimelineAggregateArgs> = {
        [P in keyof T & keyof AggregateUserTimeline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserTimeline[P]>
      : GetScalarType<T[P], AggregateUserTimeline[P]>
  }




  export type UserTimelineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTimelineWhereInput
    orderBy?: UserTimelineOrderByWithAggregationInput | UserTimelineOrderByWithAggregationInput[]
    by: UserTimelineScalarFieldEnum[] | UserTimelineScalarFieldEnum
    having?: UserTimelineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTimelineCountAggregateInputType | true
    _avg?: UserTimelineAvgAggregateInputType
    _sum?: UserTimelineSumAggregateInputType
    _min?: UserTimelineMinAggregateInputType
    _max?: UserTimelineMaxAggregateInputType
  }

  export type UserTimelineGroupByOutputType = {
    id: string
    userId: string
    countryId: string
    purposeId: string
    slug: string
    intakeDate: Date
    currentBalance: number
    targetAmount: number
    monthlyDeposit: number
    safeStartDate: Date
    cautionStartDate: Date
    riskyStartDate: Date
    currentStatus: string
    createdAt: Date
    updatedAt: Date
    _count: UserTimelineCountAggregateOutputType | null
    _avg: UserTimelineAvgAggregateOutputType | null
    _sum: UserTimelineSumAggregateOutputType | null
    _min: UserTimelineMinAggregateOutputType | null
    _max: UserTimelineMaxAggregateOutputType | null
  }

  type GetUserTimelineGroupByPayload<T extends UserTimelineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserTimelineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTimelineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTimelineGroupByOutputType[P]>
            : GetScalarType<T[P], UserTimelineGroupByOutputType[P]>
        }
      >
    >


  export type UserTimelineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    countryId?: boolean
    purposeId?: boolean
    slug?: boolean
    intakeDate?: boolean
    currentBalance?: boolean
    targetAmount?: boolean
    monthlyDeposit?: boolean
    safeStartDate?: boolean
    cautionStartDate?: boolean
    riskyStartDate?: boolean
    currentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
    purpose?: boolean | VisaPurposeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTimeline"]>

  export type UserTimelineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    countryId?: boolean
    purposeId?: boolean
    slug?: boolean
    intakeDate?: boolean
    currentBalance?: boolean
    targetAmount?: boolean
    monthlyDeposit?: boolean
    safeStartDate?: boolean
    cautionStartDate?: boolean
    riskyStartDate?: boolean
    currentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
    purpose?: boolean | VisaPurposeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTimeline"]>

  export type UserTimelineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    countryId?: boolean
    purposeId?: boolean
    slug?: boolean
    intakeDate?: boolean
    currentBalance?: boolean
    targetAmount?: boolean
    monthlyDeposit?: boolean
    safeStartDate?: boolean
    cautionStartDate?: boolean
    riskyStartDate?: boolean
    currentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
    purpose?: boolean | VisaPurposeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTimeline"]>

  export type UserTimelineSelectScalar = {
    id?: boolean
    userId?: boolean
    countryId?: boolean
    purposeId?: boolean
    slug?: boolean
    intakeDate?: boolean
    currentBalance?: boolean
    targetAmount?: boolean
    monthlyDeposit?: boolean
    safeStartDate?: boolean
    cautionStartDate?: boolean
    riskyStartDate?: boolean
    currentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserTimelineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "countryId" | "purposeId" | "slug" | "intakeDate" | "currentBalance" | "targetAmount" | "monthlyDeposit" | "safeStartDate" | "cautionStartDate" | "riskyStartDate" | "currentStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["userTimeline"]>
  export type UserTimelineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
    purpose?: boolean | VisaPurposeDefaultArgs<ExtArgs>
  }
  export type UserTimelineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
    purpose?: boolean | VisaPurposeDefaultArgs<ExtArgs>
  }
  export type UserTimelineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
    purpose?: boolean | VisaPurposeDefaultArgs<ExtArgs>
  }

  export type $UserTimelinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserTimeline"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      country: Prisma.$CountryPayload<ExtArgs>
      purpose: Prisma.$VisaPurposePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      countryId: string
      purposeId: string
      slug: string
      intakeDate: Date
      currentBalance: number
      targetAmount: number
      monthlyDeposit: number
      safeStartDate: Date
      cautionStartDate: Date
      riskyStartDate: Date
      currentStatus: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userTimeline"]>
    composites: {}
  }

  type UserTimelineGetPayload<S extends boolean | null | undefined | UserTimelineDefaultArgs> = $Result.GetResult<Prisma.$UserTimelinePayload, S>

  type UserTimelineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserTimelineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserTimelineCountAggregateInputType | true
    }

  export interface UserTimelineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserTimeline'], meta: { name: 'UserTimeline' } }
    /**
     * Find zero or one UserTimeline that matches the filter.
     * @param {UserTimelineFindUniqueArgs} args - Arguments to find a UserTimeline
     * @example
     * // Get one UserTimeline
     * const userTimeline = await prisma.userTimeline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserTimelineFindUniqueArgs>(args: SelectSubset<T, UserTimelineFindUniqueArgs<ExtArgs>>): Prisma__UserTimelineClient<$Result.GetResult<Prisma.$UserTimelinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserTimeline that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserTimelineFindUniqueOrThrowArgs} args - Arguments to find a UserTimeline
     * @example
     * // Get one UserTimeline
     * const userTimeline = await prisma.userTimeline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserTimelineFindUniqueOrThrowArgs>(args: SelectSubset<T, UserTimelineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserTimelineClient<$Result.GetResult<Prisma.$UserTimelinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTimeline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTimelineFindFirstArgs} args - Arguments to find a UserTimeline
     * @example
     * // Get one UserTimeline
     * const userTimeline = await prisma.userTimeline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserTimelineFindFirstArgs>(args?: SelectSubset<T, UserTimelineFindFirstArgs<ExtArgs>>): Prisma__UserTimelineClient<$Result.GetResult<Prisma.$UserTimelinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTimeline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTimelineFindFirstOrThrowArgs} args - Arguments to find a UserTimeline
     * @example
     * // Get one UserTimeline
     * const userTimeline = await prisma.userTimeline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserTimelineFindFirstOrThrowArgs>(args?: SelectSubset<T, UserTimelineFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserTimelineClient<$Result.GetResult<Prisma.$UserTimelinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserTimelines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTimelineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTimelines
     * const userTimelines = await prisma.userTimeline.findMany()
     * 
     * // Get first 10 UserTimelines
     * const userTimelines = await prisma.userTimeline.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userTimelineWithIdOnly = await prisma.userTimeline.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserTimelineFindManyArgs>(args?: SelectSubset<T, UserTimelineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTimelinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserTimeline.
     * @param {UserTimelineCreateArgs} args - Arguments to create a UserTimeline.
     * @example
     * // Create one UserTimeline
     * const UserTimeline = await prisma.userTimeline.create({
     *   data: {
     *     // ... data to create a UserTimeline
     *   }
     * })
     * 
     */
    create<T extends UserTimelineCreateArgs>(args: SelectSubset<T, UserTimelineCreateArgs<ExtArgs>>): Prisma__UserTimelineClient<$Result.GetResult<Prisma.$UserTimelinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserTimelines.
     * @param {UserTimelineCreateManyArgs} args - Arguments to create many UserTimelines.
     * @example
     * // Create many UserTimelines
     * const userTimeline = await prisma.userTimeline.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserTimelineCreateManyArgs>(args?: SelectSubset<T, UserTimelineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserTimelines and returns the data saved in the database.
     * @param {UserTimelineCreateManyAndReturnArgs} args - Arguments to create many UserTimelines.
     * @example
     * // Create many UserTimelines
     * const userTimeline = await prisma.userTimeline.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserTimelines and only return the `id`
     * const userTimelineWithIdOnly = await prisma.userTimeline.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserTimelineCreateManyAndReturnArgs>(args?: SelectSubset<T, UserTimelineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTimelinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserTimeline.
     * @param {UserTimelineDeleteArgs} args - Arguments to delete one UserTimeline.
     * @example
     * // Delete one UserTimeline
     * const UserTimeline = await prisma.userTimeline.delete({
     *   where: {
     *     // ... filter to delete one UserTimeline
     *   }
     * })
     * 
     */
    delete<T extends UserTimelineDeleteArgs>(args: SelectSubset<T, UserTimelineDeleteArgs<ExtArgs>>): Prisma__UserTimelineClient<$Result.GetResult<Prisma.$UserTimelinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserTimeline.
     * @param {UserTimelineUpdateArgs} args - Arguments to update one UserTimeline.
     * @example
     * // Update one UserTimeline
     * const userTimeline = await prisma.userTimeline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserTimelineUpdateArgs>(args: SelectSubset<T, UserTimelineUpdateArgs<ExtArgs>>): Prisma__UserTimelineClient<$Result.GetResult<Prisma.$UserTimelinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserTimelines.
     * @param {UserTimelineDeleteManyArgs} args - Arguments to filter UserTimelines to delete.
     * @example
     * // Delete a few UserTimelines
     * const { count } = await prisma.userTimeline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserTimelineDeleteManyArgs>(args?: SelectSubset<T, UserTimelineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTimelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTimelineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTimelines
     * const userTimeline = await prisma.userTimeline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserTimelineUpdateManyArgs>(args: SelectSubset<T, UserTimelineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTimelines and returns the data updated in the database.
     * @param {UserTimelineUpdateManyAndReturnArgs} args - Arguments to update many UserTimelines.
     * @example
     * // Update many UserTimelines
     * const userTimeline = await prisma.userTimeline.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserTimelines and only return the `id`
     * const userTimelineWithIdOnly = await prisma.userTimeline.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserTimelineUpdateManyAndReturnArgs>(args: SelectSubset<T, UserTimelineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTimelinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserTimeline.
     * @param {UserTimelineUpsertArgs} args - Arguments to update or create a UserTimeline.
     * @example
     * // Update or create a UserTimeline
     * const userTimeline = await prisma.userTimeline.upsert({
     *   create: {
     *     // ... data to create a UserTimeline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserTimeline we want to update
     *   }
     * })
     */
    upsert<T extends UserTimelineUpsertArgs>(args: SelectSubset<T, UserTimelineUpsertArgs<ExtArgs>>): Prisma__UserTimelineClient<$Result.GetResult<Prisma.$UserTimelinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserTimelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTimelineCountArgs} args - Arguments to filter UserTimelines to count.
     * @example
     * // Count the number of UserTimelines
     * const count = await prisma.userTimeline.count({
     *   where: {
     *     // ... the filter for the UserTimelines we want to count
     *   }
     * })
    **/
    count<T extends UserTimelineCountArgs>(
      args?: Subset<T, UserTimelineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTimelineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserTimeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTimelineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserTimelineAggregateArgs>(args: Subset<T, UserTimelineAggregateArgs>): Prisma.PrismaPromise<GetUserTimelineAggregateType<T>>

    /**
     * Group by UserTimeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTimelineGroupByArgs} args - Group by arguments.
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
      T extends UserTimelineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserTimelineGroupByArgs['orderBy'] }
        : { orderBy?: UserTimelineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserTimelineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTimelineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserTimeline model
   */
  readonly fields: UserTimelineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserTimeline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserTimelineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    purpose<T extends VisaPurposeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VisaPurposeDefaultArgs<ExtArgs>>): Prisma__VisaPurposeClient<$Result.GetResult<Prisma.$VisaPurposePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserTimeline model
   */
  interface UserTimelineFieldRefs {
    readonly id: FieldRef<"UserTimeline", 'String'>
    readonly userId: FieldRef<"UserTimeline", 'String'>
    readonly countryId: FieldRef<"UserTimeline", 'String'>
    readonly purposeId: FieldRef<"UserTimeline", 'String'>
    readonly slug: FieldRef<"UserTimeline", 'String'>
    readonly intakeDate: FieldRef<"UserTimeline", 'DateTime'>
    readonly currentBalance: FieldRef<"UserTimeline", 'Float'>
    readonly targetAmount: FieldRef<"UserTimeline", 'Float'>
    readonly monthlyDeposit: FieldRef<"UserTimeline", 'Float'>
    readonly safeStartDate: FieldRef<"UserTimeline", 'DateTime'>
    readonly cautionStartDate: FieldRef<"UserTimeline", 'DateTime'>
    readonly riskyStartDate: FieldRef<"UserTimeline", 'DateTime'>
    readonly currentStatus: FieldRef<"UserTimeline", 'String'>
    readonly createdAt: FieldRef<"UserTimeline", 'DateTime'>
    readonly updatedAt: FieldRef<"UserTimeline", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserTimeline findUnique
   */
  export type UserTimelineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTimeline
     */
    select?: UserTimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTimeline
     */
    omit?: UserTimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTimelineInclude<ExtArgs> | null
    /**
     * Filter, which UserTimeline to fetch.
     */
    where: UserTimelineWhereUniqueInput
  }

  /**
   * UserTimeline findUniqueOrThrow
   */
  export type UserTimelineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTimeline
     */
    select?: UserTimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTimeline
     */
    omit?: UserTimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTimelineInclude<ExtArgs> | null
    /**
     * Filter, which UserTimeline to fetch.
     */
    where: UserTimelineWhereUniqueInput
  }

  /**
   * UserTimeline findFirst
   */
  export type UserTimelineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTimeline
     */
    select?: UserTimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTimeline
     */
    omit?: UserTimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTimelineInclude<ExtArgs> | null
    /**
     * Filter, which UserTimeline to fetch.
     */
    where?: UserTimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTimelines to fetch.
     */
    orderBy?: UserTimelineOrderByWithRelationInput | UserTimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTimelines.
     */
    cursor?: UserTimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTimelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTimelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTimelines.
     */
    distinct?: UserTimelineScalarFieldEnum | UserTimelineScalarFieldEnum[]
  }

  /**
   * UserTimeline findFirstOrThrow
   */
  export type UserTimelineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTimeline
     */
    select?: UserTimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTimeline
     */
    omit?: UserTimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTimelineInclude<ExtArgs> | null
    /**
     * Filter, which UserTimeline to fetch.
     */
    where?: UserTimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTimelines to fetch.
     */
    orderBy?: UserTimelineOrderByWithRelationInput | UserTimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTimelines.
     */
    cursor?: UserTimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTimelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTimelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTimelines.
     */
    distinct?: UserTimelineScalarFieldEnum | UserTimelineScalarFieldEnum[]
  }

  /**
   * UserTimeline findMany
   */
  export type UserTimelineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTimeline
     */
    select?: UserTimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTimeline
     */
    omit?: UserTimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTimelineInclude<ExtArgs> | null
    /**
     * Filter, which UserTimelines to fetch.
     */
    where?: UserTimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTimelines to fetch.
     */
    orderBy?: UserTimelineOrderByWithRelationInput | UserTimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserTimelines.
     */
    cursor?: UserTimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTimelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTimelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTimelines.
     */
    distinct?: UserTimelineScalarFieldEnum | UserTimelineScalarFieldEnum[]
  }

  /**
   * UserTimeline create
   */
  export type UserTimelineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTimeline
     */
    select?: UserTimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTimeline
     */
    omit?: UserTimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTimelineInclude<ExtArgs> | null
    /**
     * The data needed to create a UserTimeline.
     */
    data: XOR<UserTimelineCreateInput, UserTimelineUncheckedCreateInput>
  }

  /**
   * UserTimeline createMany
   */
  export type UserTimelineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserTimelines.
     */
    data: UserTimelineCreateManyInput | UserTimelineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserTimeline createManyAndReturn
   */
  export type UserTimelineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTimeline
     */
    select?: UserTimelineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTimeline
     */
    omit?: UserTimelineOmit<ExtArgs> | null
    /**
     * The data used to create many UserTimelines.
     */
    data: UserTimelineCreateManyInput | UserTimelineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTimelineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTimeline update
   */
  export type UserTimelineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTimeline
     */
    select?: UserTimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTimeline
     */
    omit?: UserTimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTimelineInclude<ExtArgs> | null
    /**
     * The data needed to update a UserTimeline.
     */
    data: XOR<UserTimelineUpdateInput, UserTimelineUncheckedUpdateInput>
    /**
     * Choose, which UserTimeline to update.
     */
    where: UserTimelineWhereUniqueInput
  }

  /**
   * UserTimeline updateMany
   */
  export type UserTimelineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserTimelines.
     */
    data: XOR<UserTimelineUpdateManyMutationInput, UserTimelineUncheckedUpdateManyInput>
    /**
     * Filter which UserTimelines to update
     */
    where?: UserTimelineWhereInput
    /**
     * Limit how many UserTimelines to update.
     */
    limit?: number
  }

  /**
   * UserTimeline updateManyAndReturn
   */
  export type UserTimelineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTimeline
     */
    select?: UserTimelineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTimeline
     */
    omit?: UserTimelineOmit<ExtArgs> | null
    /**
     * The data used to update UserTimelines.
     */
    data: XOR<UserTimelineUpdateManyMutationInput, UserTimelineUncheckedUpdateManyInput>
    /**
     * Filter which UserTimelines to update
     */
    where?: UserTimelineWhereInput
    /**
     * Limit how many UserTimelines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTimelineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTimeline upsert
   */
  export type UserTimelineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTimeline
     */
    select?: UserTimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTimeline
     */
    omit?: UserTimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTimelineInclude<ExtArgs> | null
    /**
     * The filter to search for the UserTimeline to update in case it exists.
     */
    where: UserTimelineWhereUniqueInput
    /**
     * In case the UserTimeline found by the `where` argument doesn't exist, create a new UserTimeline with this data.
     */
    create: XOR<UserTimelineCreateInput, UserTimelineUncheckedCreateInput>
    /**
     * In case the UserTimeline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserTimelineUpdateInput, UserTimelineUncheckedUpdateInput>
  }

  /**
   * UserTimeline delete
   */
  export type UserTimelineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTimeline
     */
    select?: UserTimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTimeline
     */
    omit?: UserTimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTimelineInclude<ExtArgs> | null
    /**
     * Filter which UserTimeline to delete.
     */
    where: UserTimelineWhereUniqueInput
  }

  /**
   * UserTimeline deleteMany
   */
  export type UserTimelineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTimelines to delete
     */
    where?: UserTimelineWhereInput
    /**
     * Limit how many UserTimelines to delete.
     */
    limit?: number
  }

  /**
   * UserTimeline without action
   */
  export type UserTimelineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTimeline
     */
    select?: UserTimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTimeline
     */
    omit?: UserTimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTimelineInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const CountryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isoCode: 'isoCode',
    currencyCode: 'currencyCode',
    flagEmoji: 'flagEmoji',
    isActive: 'isActive'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const VisaPurposeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    icon: 'icon',
    description: 'description',
    isActive: 'isActive'
  };

  export type VisaPurposeScalarFieldEnum = (typeof VisaPurposeScalarFieldEnum)[keyof typeof VisaPurposeScalarFieldEnum]


  export const PofRuleScalarFieldEnum: {
    id: 'id',
    countryId: 'countryId',
    purposeId: 'purposeId',
    safeBufferMonths: 'safeBufferMonths',
    cautionBufferMonths: 'cautionBufferMonths',
    riskyBufferMonths: 'riskyBufferMonths',
    minAmountForeign: 'minAmountForeign',
    requiresHistory: 'requiresHistory',
    analysisText: 'analysisText',
    nigerianSpecific: 'nigerianSpecific',
    statementMonths: 'statementMonths',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PofRuleScalarFieldEnum = (typeof PofRuleScalarFieldEnum)[keyof typeof PofRuleScalarFieldEnum]


  export const StudyIntakeScalarFieldEnum: {
    id: 'id',
    countryId: 'countryId',
    intakeMonth: 'intakeMonth',
    intakeName: 'intakeName',
    isMainIntake: 'isMainIntake'
  };

  export type StudyIntakeScalarFieldEnum = (typeof StudyIntakeScalarFieldEnum)[keyof typeof StudyIntakeScalarFieldEnum]


  export const FxRateScalarFieldEnum: {
    currencyCode: 'currencyCode',
    cbnRate: 'cbnRate',
    parallelRate: 'parallelRate',
    lastUpdated: 'lastUpdated'
  };

  export type FxRateScalarFieldEnum = (typeof FxRateScalarFieldEnum)[keyof typeof FxRateScalarFieldEnum]


  export const UserTimelineScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    countryId: 'countryId',
    purposeId: 'purposeId',
    slug: 'slug',
    intakeDate: 'intakeDate',
    currentBalance: 'currentBalance',
    targetAmount: 'targetAmount',
    monthlyDeposit: 'monthlyDeposit',
    safeStartDate: 'safeStartDate',
    cautionStartDate: 'cautionStartDate',
    riskyStartDate: 'riskyStartDate',
    currentStatus: 'currentStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserTimelineScalarFieldEnum = (typeof UserTimelineScalarFieldEnum)[keyof typeof UserTimelineScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    timelines?: UserTimelineListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    timelines?: UserTimelineOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    timelines?: UserTimelineListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrder
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
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type CountryWhereInput = {
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    id?: StringFilter<"Country"> | string
    name?: StringFilter<"Country"> | string
    isoCode?: StringFilter<"Country"> | string
    currencyCode?: StringFilter<"Country"> | string
    flagEmoji?: StringFilter<"Country"> | string
    isActive?: BoolFilter<"Country"> | boolean
    pofRules?: PofRuleListRelationFilter
    studyIntake?: StudyIntakeListRelationFilter
    fxRates?: XOR<FxRateScalarRelationFilter, FxRateWhereInput>
    timelines?: UserTimelineListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isoCode?: SortOrder
    currencyCode?: SortOrder
    flagEmoji?: SortOrder
    isActive?: SortOrder
    pofRules?: PofRuleOrderByRelationAggregateInput
    studyIntake?: StudyIntakeOrderByRelationAggregateInput
    fxRates?: FxRateOrderByWithRelationInput
    timelines?: UserTimelineOrderByRelationAggregateInput
  }

  export type CountryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    isoCode?: string
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    currencyCode?: StringFilter<"Country"> | string
    flagEmoji?: StringFilter<"Country"> | string
    isActive?: BoolFilter<"Country"> | boolean
    pofRules?: PofRuleListRelationFilter
    studyIntake?: StudyIntakeListRelationFilter
    fxRates?: XOR<FxRateScalarRelationFilter, FxRateWhereInput>
    timelines?: UserTimelineListRelationFilter
  }, "id" | "id" | "name" | "isoCode">

  export type CountryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isoCode?: SortOrder
    currencyCode?: SortOrder
    flagEmoji?: SortOrder
    isActive?: SortOrder
    _count?: CountryCountOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    OR?: CountryScalarWhereWithAggregatesInput[]
    NOT?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Country"> | string
    name?: StringWithAggregatesFilter<"Country"> | string
    isoCode?: StringWithAggregatesFilter<"Country"> | string
    currencyCode?: StringWithAggregatesFilter<"Country"> | string
    flagEmoji?: StringWithAggregatesFilter<"Country"> | string
    isActive?: BoolWithAggregatesFilter<"Country"> | boolean
  }

  export type VisaPurposeWhereInput = {
    AND?: VisaPurposeWhereInput | VisaPurposeWhereInput[]
    OR?: VisaPurposeWhereInput[]
    NOT?: VisaPurposeWhereInput | VisaPurposeWhereInput[]
    id?: StringFilter<"VisaPurpose"> | string
    name?: StringFilter<"VisaPurpose"> | string
    slug?: StringFilter<"VisaPurpose"> | string
    icon?: StringFilter<"VisaPurpose"> | string
    description?: StringNullableFilter<"VisaPurpose"> | string | null
    isActive?: BoolFilter<"VisaPurpose"> | boolean
    pofRules?: PofRuleListRelationFilter
    timelines?: UserTimelineListRelationFilter
  }

  export type VisaPurposeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    icon?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    pofRules?: PofRuleOrderByRelationAggregateInput
    timelines?: UserTimelineOrderByRelationAggregateInput
  }

  export type VisaPurposeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: VisaPurposeWhereInput | VisaPurposeWhereInput[]
    OR?: VisaPurposeWhereInput[]
    NOT?: VisaPurposeWhereInput | VisaPurposeWhereInput[]
    icon?: StringFilter<"VisaPurpose"> | string
    description?: StringNullableFilter<"VisaPurpose"> | string | null
    isActive?: BoolFilter<"VisaPurpose"> | boolean
    pofRules?: PofRuleListRelationFilter
    timelines?: UserTimelineListRelationFilter
  }, "id" | "id" | "name" | "slug">

  export type VisaPurposeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    icon?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    _count?: VisaPurposeCountOrderByAggregateInput
    _max?: VisaPurposeMaxOrderByAggregateInput
    _min?: VisaPurposeMinOrderByAggregateInput
  }

  export type VisaPurposeScalarWhereWithAggregatesInput = {
    AND?: VisaPurposeScalarWhereWithAggregatesInput | VisaPurposeScalarWhereWithAggregatesInput[]
    OR?: VisaPurposeScalarWhereWithAggregatesInput[]
    NOT?: VisaPurposeScalarWhereWithAggregatesInput | VisaPurposeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VisaPurpose"> | string
    name?: StringWithAggregatesFilter<"VisaPurpose"> | string
    slug?: StringWithAggregatesFilter<"VisaPurpose"> | string
    icon?: StringWithAggregatesFilter<"VisaPurpose"> | string
    description?: StringNullableWithAggregatesFilter<"VisaPurpose"> | string | null
    isActive?: BoolWithAggregatesFilter<"VisaPurpose"> | boolean
  }

  export type PofRuleWhereInput = {
    AND?: PofRuleWhereInput | PofRuleWhereInput[]
    OR?: PofRuleWhereInput[]
    NOT?: PofRuleWhereInput | PofRuleWhereInput[]
    id?: StringFilter<"PofRule"> | string
    countryId?: StringFilter<"PofRule"> | string
    purposeId?: StringFilter<"PofRule"> | string
    safeBufferMonths?: IntFilter<"PofRule"> | number
    cautionBufferMonths?: IntFilter<"PofRule"> | number
    riskyBufferMonths?: IntFilter<"PofRule"> | number
    minAmountForeign?: FloatFilter<"PofRule"> | number
    requiresHistory?: BoolFilter<"PofRule"> | boolean
    analysisText?: StringFilter<"PofRule"> | string
    nigerianSpecific?: StringFilter<"PofRule"> | string
    statementMonths?: IntFilter<"PofRule"> | number
    createdAt?: DateTimeFilter<"PofRule"> | Date | string
    updatedAt?: DateTimeFilter<"PofRule"> | Date | string
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    purpose?: XOR<VisaPurposeScalarRelationFilter, VisaPurposeWhereInput>
  }

  export type PofRuleOrderByWithRelationInput = {
    id?: SortOrder
    countryId?: SortOrder
    purposeId?: SortOrder
    safeBufferMonths?: SortOrder
    cautionBufferMonths?: SortOrder
    riskyBufferMonths?: SortOrder
    minAmountForeign?: SortOrder
    requiresHistory?: SortOrder
    analysisText?: SortOrder
    nigerianSpecific?: SortOrder
    statementMonths?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    country?: CountryOrderByWithRelationInput
    purpose?: VisaPurposeOrderByWithRelationInput
  }

  export type PofRuleWhereUniqueInput = Prisma.AtLeast<{
    countryId_purposeId?: PofRuleCountryIdPurposeIdCompoundUniqueInput
    AND?: PofRuleWhereInput | PofRuleWhereInput[]
    OR?: PofRuleWhereInput[]
    NOT?: PofRuleWhereInput | PofRuleWhereInput[]
    id?: StringFilter<"PofRule"> | string
    countryId?: StringFilter<"PofRule"> | string
    purposeId?: StringFilter<"PofRule"> | string
    safeBufferMonths?: IntFilter<"PofRule"> | number
    cautionBufferMonths?: IntFilter<"PofRule"> | number
    riskyBufferMonths?: IntFilter<"PofRule"> | number
    minAmountForeign?: FloatFilter<"PofRule"> | number
    requiresHistory?: BoolFilter<"PofRule"> | boolean
    analysisText?: StringFilter<"PofRule"> | string
    nigerianSpecific?: StringFilter<"PofRule"> | string
    statementMonths?: IntFilter<"PofRule"> | number
    createdAt?: DateTimeFilter<"PofRule"> | Date | string
    updatedAt?: DateTimeFilter<"PofRule"> | Date | string
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    purpose?: XOR<VisaPurposeScalarRelationFilter, VisaPurposeWhereInput>
  }, "countryId_purposeId">

  export type PofRuleOrderByWithAggregationInput = {
    id?: SortOrder
    countryId?: SortOrder
    purposeId?: SortOrder
    safeBufferMonths?: SortOrder
    cautionBufferMonths?: SortOrder
    riskyBufferMonths?: SortOrder
    minAmountForeign?: SortOrder
    requiresHistory?: SortOrder
    analysisText?: SortOrder
    nigerianSpecific?: SortOrder
    statementMonths?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PofRuleCountOrderByAggregateInput
    _avg?: PofRuleAvgOrderByAggregateInput
    _max?: PofRuleMaxOrderByAggregateInput
    _min?: PofRuleMinOrderByAggregateInput
    _sum?: PofRuleSumOrderByAggregateInput
  }

  export type PofRuleScalarWhereWithAggregatesInput = {
    AND?: PofRuleScalarWhereWithAggregatesInput | PofRuleScalarWhereWithAggregatesInput[]
    OR?: PofRuleScalarWhereWithAggregatesInput[]
    NOT?: PofRuleScalarWhereWithAggregatesInput | PofRuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PofRule"> | string
    countryId?: StringWithAggregatesFilter<"PofRule"> | string
    purposeId?: StringWithAggregatesFilter<"PofRule"> | string
    safeBufferMonths?: IntWithAggregatesFilter<"PofRule"> | number
    cautionBufferMonths?: IntWithAggregatesFilter<"PofRule"> | number
    riskyBufferMonths?: IntWithAggregatesFilter<"PofRule"> | number
    minAmountForeign?: FloatWithAggregatesFilter<"PofRule"> | number
    requiresHistory?: BoolWithAggregatesFilter<"PofRule"> | boolean
    analysisText?: StringWithAggregatesFilter<"PofRule"> | string
    nigerianSpecific?: StringWithAggregatesFilter<"PofRule"> | string
    statementMonths?: IntWithAggregatesFilter<"PofRule"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PofRule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PofRule"> | Date | string
  }

  export type StudyIntakeWhereInput = {
    AND?: StudyIntakeWhereInput | StudyIntakeWhereInput[]
    OR?: StudyIntakeWhereInput[]
    NOT?: StudyIntakeWhereInput | StudyIntakeWhereInput[]
    id?: StringFilter<"StudyIntake"> | string
    countryId?: StringFilter<"StudyIntake"> | string
    intakeMonth?: IntFilter<"StudyIntake"> | number
    intakeName?: StringFilter<"StudyIntake"> | string
    isMainIntake?: BoolFilter<"StudyIntake"> | boolean
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
  }

  export type StudyIntakeOrderByWithRelationInput = {
    id?: SortOrder
    countryId?: SortOrder
    intakeMonth?: SortOrder
    intakeName?: SortOrder
    isMainIntake?: SortOrder
    country?: CountryOrderByWithRelationInput
  }

  export type StudyIntakeWhereUniqueInput = Prisma.AtLeast<{
    countryId_intakeMonth?: StudyIntakeCountryIdIntakeMonthCompoundUniqueInput
    AND?: StudyIntakeWhereInput | StudyIntakeWhereInput[]
    OR?: StudyIntakeWhereInput[]
    NOT?: StudyIntakeWhereInput | StudyIntakeWhereInput[]
    id?: StringFilter<"StudyIntake"> | string
    countryId?: StringFilter<"StudyIntake"> | string
    intakeMonth?: IntFilter<"StudyIntake"> | number
    intakeName?: StringFilter<"StudyIntake"> | string
    isMainIntake?: BoolFilter<"StudyIntake"> | boolean
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
  }, "countryId_intakeMonth">

  export type StudyIntakeOrderByWithAggregationInput = {
    id?: SortOrder
    countryId?: SortOrder
    intakeMonth?: SortOrder
    intakeName?: SortOrder
    isMainIntake?: SortOrder
    _count?: StudyIntakeCountOrderByAggregateInput
    _avg?: StudyIntakeAvgOrderByAggregateInput
    _max?: StudyIntakeMaxOrderByAggregateInput
    _min?: StudyIntakeMinOrderByAggregateInput
    _sum?: StudyIntakeSumOrderByAggregateInput
  }

  export type StudyIntakeScalarWhereWithAggregatesInput = {
    AND?: StudyIntakeScalarWhereWithAggregatesInput | StudyIntakeScalarWhereWithAggregatesInput[]
    OR?: StudyIntakeScalarWhereWithAggregatesInput[]
    NOT?: StudyIntakeScalarWhereWithAggregatesInput | StudyIntakeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudyIntake"> | string
    countryId?: StringWithAggregatesFilter<"StudyIntake"> | string
    intakeMonth?: IntWithAggregatesFilter<"StudyIntake"> | number
    intakeName?: StringWithAggregatesFilter<"StudyIntake"> | string
    isMainIntake?: BoolWithAggregatesFilter<"StudyIntake"> | boolean
  }

  export type FxRateWhereInput = {
    AND?: FxRateWhereInput | FxRateWhereInput[]
    OR?: FxRateWhereInput[]
    NOT?: FxRateWhereInput | FxRateWhereInput[]
    currencyCode?: StringFilter<"FxRate"> | string
    cbnRate?: FloatFilter<"FxRate"> | number
    parallelRate?: FloatFilter<"FxRate"> | number
    lastUpdated?: DateTimeFilter<"FxRate"> | Date | string
    countries?: CountryListRelationFilter
  }

  export type FxRateOrderByWithRelationInput = {
    currencyCode?: SortOrder
    cbnRate?: SortOrder
    parallelRate?: SortOrder
    lastUpdated?: SortOrder
    countries?: CountryOrderByRelationAggregateInput
  }

  export type FxRateWhereUniqueInput = Prisma.AtLeast<{
    currencyCode?: string
    AND?: FxRateWhereInput | FxRateWhereInput[]
    OR?: FxRateWhereInput[]
    NOT?: FxRateWhereInput | FxRateWhereInput[]
    cbnRate?: FloatFilter<"FxRate"> | number
    parallelRate?: FloatFilter<"FxRate"> | number
    lastUpdated?: DateTimeFilter<"FxRate"> | Date | string
    countries?: CountryListRelationFilter
  }, "currencyCode">

  export type FxRateOrderByWithAggregationInput = {
    currencyCode?: SortOrder
    cbnRate?: SortOrder
    parallelRate?: SortOrder
    lastUpdated?: SortOrder
    _count?: FxRateCountOrderByAggregateInput
    _avg?: FxRateAvgOrderByAggregateInput
    _max?: FxRateMaxOrderByAggregateInput
    _min?: FxRateMinOrderByAggregateInput
    _sum?: FxRateSumOrderByAggregateInput
  }

  export type FxRateScalarWhereWithAggregatesInput = {
    AND?: FxRateScalarWhereWithAggregatesInput | FxRateScalarWhereWithAggregatesInput[]
    OR?: FxRateScalarWhereWithAggregatesInput[]
    NOT?: FxRateScalarWhereWithAggregatesInput | FxRateScalarWhereWithAggregatesInput[]
    currencyCode?: StringWithAggregatesFilter<"FxRate"> | string
    cbnRate?: FloatWithAggregatesFilter<"FxRate"> | number
    parallelRate?: FloatWithAggregatesFilter<"FxRate"> | number
    lastUpdated?: DateTimeWithAggregatesFilter<"FxRate"> | Date | string
  }

  export type UserTimelineWhereInput = {
    AND?: UserTimelineWhereInput | UserTimelineWhereInput[]
    OR?: UserTimelineWhereInput[]
    NOT?: UserTimelineWhereInput | UserTimelineWhereInput[]
    id?: StringFilter<"UserTimeline"> | string
    userId?: StringFilter<"UserTimeline"> | string
    countryId?: StringFilter<"UserTimeline"> | string
    purposeId?: StringFilter<"UserTimeline"> | string
    slug?: StringFilter<"UserTimeline"> | string
    intakeDate?: DateTimeFilter<"UserTimeline"> | Date | string
    currentBalance?: FloatFilter<"UserTimeline"> | number
    targetAmount?: FloatFilter<"UserTimeline"> | number
    monthlyDeposit?: FloatFilter<"UserTimeline"> | number
    safeStartDate?: DateTimeFilter<"UserTimeline"> | Date | string
    cautionStartDate?: DateTimeFilter<"UserTimeline"> | Date | string
    riskyStartDate?: DateTimeFilter<"UserTimeline"> | Date | string
    currentStatus?: StringFilter<"UserTimeline"> | string
    createdAt?: DateTimeFilter<"UserTimeline"> | Date | string
    updatedAt?: DateTimeFilter<"UserTimeline"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    purpose?: XOR<VisaPurposeScalarRelationFilter, VisaPurposeWhereInput>
  }

  export type UserTimelineOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    countryId?: SortOrder
    purposeId?: SortOrder
    slug?: SortOrder
    intakeDate?: SortOrder
    currentBalance?: SortOrder
    targetAmount?: SortOrder
    monthlyDeposit?: SortOrder
    safeStartDate?: SortOrder
    cautionStartDate?: SortOrder
    riskyStartDate?: SortOrder
    currentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    country?: CountryOrderByWithRelationInput
    purpose?: VisaPurposeOrderByWithRelationInput
  }

  export type UserTimelineWhereUniqueInput = Prisma.AtLeast<{
    slug?: string
    AND?: UserTimelineWhereInput | UserTimelineWhereInput[]
    OR?: UserTimelineWhereInput[]
    NOT?: UserTimelineWhereInput | UserTimelineWhereInput[]
    id?: StringFilter<"UserTimeline"> | string
    userId?: StringFilter<"UserTimeline"> | string
    countryId?: StringFilter<"UserTimeline"> | string
    purposeId?: StringFilter<"UserTimeline"> | string
    intakeDate?: DateTimeFilter<"UserTimeline"> | Date | string
    currentBalance?: FloatFilter<"UserTimeline"> | number
    targetAmount?: FloatFilter<"UserTimeline"> | number
    monthlyDeposit?: FloatFilter<"UserTimeline"> | number
    safeStartDate?: DateTimeFilter<"UserTimeline"> | Date | string
    cautionStartDate?: DateTimeFilter<"UserTimeline"> | Date | string
    riskyStartDate?: DateTimeFilter<"UserTimeline"> | Date | string
    currentStatus?: StringFilter<"UserTimeline"> | string
    createdAt?: DateTimeFilter<"UserTimeline"> | Date | string
    updatedAt?: DateTimeFilter<"UserTimeline"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    purpose?: XOR<VisaPurposeScalarRelationFilter, VisaPurposeWhereInput>
  }, "slug">

  export type UserTimelineOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    countryId?: SortOrder
    purposeId?: SortOrder
    slug?: SortOrder
    intakeDate?: SortOrder
    currentBalance?: SortOrder
    targetAmount?: SortOrder
    monthlyDeposit?: SortOrder
    safeStartDate?: SortOrder
    cautionStartDate?: SortOrder
    riskyStartDate?: SortOrder
    currentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserTimelineCountOrderByAggregateInput
    _avg?: UserTimelineAvgOrderByAggregateInput
    _max?: UserTimelineMaxOrderByAggregateInput
    _min?: UserTimelineMinOrderByAggregateInput
    _sum?: UserTimelineSumOrderByAggregateInput
  }

  export type UserTimelineScalarWhereWithAggregatesInput = {
    AND?: UserTimelineScalarWhereWithAggregatesInput | UserTimelineScalarWhereWithAggregatesInput[]
    OR?: UserTimelineScalarWhereWithAggregatesInput[]
    NOT?: UserTimelineScalarWhereWithAggregatesInput | UserTimelineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserTimeline"> | string
    userId?: StringWithAggregatesFilter<"UserTimeline"> | string
    countryId?: StringWithAggregatesFilter<"UserTimeline"> | string
    purposeId?: StringWithAggregatesFilter<"UserTimeline"> | string
    slug?: StringWithAggregatesFilter<"UserTimeline"> | string
    intakeDate?: DateTimeWithAggregatesFilter<"UserTimeline"> | Date | string
    currentBalance?: FloatWithAggregatesFilter<"UserTimeline"> | number
    targetAmount?: FloatWithAggregatesFilter<"UserTimeline"> | number
    monthlyDeposit?: FloatWithAggregatesFilter<"UserTimeline"> | number
    safeStartDate?: DateTimeWithAggregatesFilter<"UserTimeline"> | Date | string
    cautionStartDate?: DateTimeWithAggregatesFilter<"UserTimeline"> | Date | string
    riskyStartDate?: DateTimeWithAggregatesFilter<"UserTimeline"> | Date | string
    currentStatus?: StringWithAggregatesFilter<"UserTimeline"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserTimeline"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserTimeline"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    timelines?: UserTimelineCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    timelines?: UserTimelineUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    timelines?: UserTimelineUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    timelines?: UserTimelineUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier?: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier?: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier?: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryCreateInput = {
    id: string
    name: string
    isoCode: string
    flagEmoji: string
    isActive?: boolean
    pofRules?: PofRuleCreateNestedManyWithoutCountryInput
    studyIntake?: StudyIntakeCreateNestedManyWithoutCountryInput
    fxRates: FxRateCreateNestedOneWithoutCountriesInput
    timelines?: UserTimelineCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    id: string
    name: string
    isoCode: string
    currencyCode: string
    flagEmoji: string
    isActive?: boolean
    pofRules?: PofRuleUncheckedCreateNestedManyWithoutCountryInput
    studyIntake?: StudyIntakeUncheckedCreateNestedManyWithoutCountryInput
    timelines?: UserTimelineUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
    flagEmoji?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    pofRules?: PofRuleUpdateManyWithoutCountryNestedInput
    studyIntake?: StudyIntakeUpdateManyWithoutCountryNestedInput
    fxRates?: FxRateUpdateOneRequiredWithoutCountriesNestedInput
    timelines?: UserTimelineUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    flagEmoji?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    pofRules?: PofRuleUncheckedUpdateManyWithoutCountryNestedInput
    studyIntake?: StudyIntakeUncheckedUpdateManyWithoutCountryNestedInput
    timelines?: UserTimelineUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateManyInput = {
    id: string
    name: string
    isoCode: string
    currencyCode: string
    flagEmoji: string
    isActive?: boolean
  }

  export type CountryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
    flagEmoji?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    flagEmoji?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VisaPurposeCreateInput = {
    id: string
    name: string
    slug: string
    icon: string
    description?: string | null
    isActive?: boolean
    pofRules?: PofRuleCreateNestedManyWithoutPurposeInput
    timelines?: UserTimelineCreateNestedManyWithoutPurposeInput
  }

  export type VisaPurposeUncheckedCreateInput = {
    id: string
    name: string
    slug: string
    icon: string
    description?: string | null
    isActive?: boolean
    pofRules?: PofRuleUncheckedCreateNestedManyWithoutPurposeInput
    timelines?: UserTimelineUncheckedCreateNestedManyWithoutPurposeInput
  }

  export type VisaPurposeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    pofRules?: PofRuleUpdateManyWithoutPurposeNestedInput
    timelines?: UserTimelineUpdateManyWithoutPurposeNestedInput
  }

  export type VisaPurposeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    pofRules?: PofRuleUncheckedUpdateManyWithoutPurposeNestedInput
    timelines?: UserTimelineUncheckedUpdateManyWithoutPurposeNestedInput
  }

  export type VisaPurposeCreateManyInput = {
    id: string
    name: string
    slug: string
    icon: string
    description?: string | null
    isActive?: boolean
  }

  export type VisaPurposeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VisaPurposeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PofRuleCreateInput = {
    id?: string
    safeBufferMonths: number
    cautionBufferMonths: number
    riskyBufferMonths: number
    minAmountForeign: number
    requiresHistory?: boolean
    analysisText: string
    nigerianSpecific: string
    statementMonths?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutPofRulesInput
    purpose: VisaPurposeCreateNestedOneWithoutPofRulesInput
  }

  export type PofRuleUncheckedCreateInput = {
    id?: string
    countryId: string
    purposeId: string
    safeBufferMonths: number
    cautionBufferMonths: number
    riskyBufferMonths: number
    minAmountForeign: number
    requiresHistory?: boolean
    analysisText: string
    nigerianSpecific: string
    statementMonths?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PofRuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    safeBufferMonths?: IntFieldUpdateOperationsInput | number
    cautionBufferMonths?: IntFieldUpdateOperationsInput | number
    riskyBufferMonths?: IntFieldUpdateOperationsInput | number
    minAmountForeign?: FloatFieldUpdateOperationsInput | number
    requiresHistory?: BoolFieldUpdateOperationsInput | boolean
    analysisText?: StringFieldUpdateOperationsInput | string
    nigerianSpecific?: StringFieldUpdateOperationsInput | string
    statementMonths?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutPofRulesNestedInput
    purpose?: VisaPurposeUpdateOneRequiredWithoutPofRulesNestedInput
  }

  export type PofRuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    purposeId?: StringFieldUpdateOperationsInput | string
    safeBufferMonths?: IntFieldUpdateOperationsInput | number
    cautionBufferMonths?: IntFieldUpdateOperationsInput | number
    riskyBufferMonths?: IntFieldUpdateOperationsInput | number
    minAmountForeign?: FloatFieldUpdateOperationsInput | number
    requiresHistory?: BoolFieldUpdateOperationsInput | boolean
    analysisText?: StringFieldUpdateOperationsInput | string
    nigerianSpecific?: StringFieldUpdateOperationsInput | string
    statementMonths?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PofRuleCreateManyInput = {
    id?: string
    countryId: string
    purposeId: string
    safeBufferMonths: number
    cautionBufferMonths: number
    riskyBufferMonths: number
    minAmountForeign: number
    requiresHistory?: boolean
    analysisText: string
    nigerianSpecific: string
    statementMonths?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PofRuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    safeBufferMonths?: IntFieldUpdateOperationsInput | number
    cautionBufferMonths?: IntFieldUpdateOperationsInput | number
    riskyBufferMonths?: IntFieldUpdateOperationsInput | number
    minAmountForeign?: FloatFieldUpdateOperationsInput | number
    requiresHistory?: BoolFieldUpdateOperationsInput | boolean
    analysisText?: StringFieldUpdateOperationsInput | string
    nigerianSpecific?: StringFieldUpdateOperationsInput | string
    statementMonths?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PofRuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    purposeId?: StringFieldUpdateOperationsInput | string
    safeBufferMonths?: IntFieldUpdateOperationsInput | number
    cautionBufferMonths?: IntFieldUpdateOperationsInput | number
    riskyBufferMonths?: IntFieldUpdateOperationsInput | number
    minAmountForeign?: FloatFieldUpdateOperationsInput | number
    requiresHistory?: BoolFieldUpdateOperationsInput | boolean
    analysisText?: StringFieldUpdateOperationsInput | string
    nigerianSpecific?: StringFieldUpdateOperationsInput | string
    statementMonths?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyIntakeCreateInput = {
    id?: string
    intakeMonth: number
    intakeName: string
    isMainIntake?: boolean
    country: CountryCreateNestedOneWithoutStudyIntakeInput
  }

  export type StudyIntakeUncheckedCreateInput = {
    id?: string
    countryId: string
    intakeMonth: number
    intakeName: string
    isMainIntake?: boolean
  }

  export type StudyIntakeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    intakeMonth?: IntFieldUpdateOperationsInput | number
    intakeName?: StringFieldUpdateOperationsInput | string
    isMainIntake?: BoolFieldUpdateOperationsInput | boolean
    country?: CountryUpdateOneRequiredWithoutStudyIntakeNestedInput
  }

  export type StudyIntakeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    intakeMonth?: IntFieldUpdateOperationsInput | number
    intakeName?: StringFieldUpdateOperationsInput | string
    isMainIntake?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudyIntakeCreateManyInput = {
    id?: string
    countryId: string
    intakeMonth: number
    intakeName: string
    isMainIntake?: boolean
  }

  export type StudyIntakeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    intakeMonth?: IntFieldUpdateOperationsInput | number
    intakeName?: StringFieldUpdateOperationsInput | string
    isMainIntake?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudyIntakeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    intakeMonth?: IntFieldUpdateOperationsInput | number
    intakeName?: StringFieldUpdateOperationsInput | string
    isMainIntake?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FxRateCreateInput = {
    currencyCode: string
    cbnRate: number
    parallelRate: number
    lastUpdated?: Date | string
    countries?: CountryCreateNestedManyWithoutFxRatesInput
  }

  export type FxRateUncheckedCreateInput = {
    currencyCode: string
    cbnRate: number
    parallelRate: number
    lastUpdated?: Date | string
    countries?: CountryUncheckedCreateNestedManyWithoutFxRatesInput
  }

  export type FxRateUpdateInput = {
    currencyCode?: StringFieldUpdateOperationsInput | string
    cbnRate?: FloatFieldUpdateOperationsInput | number
    parallelRate?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    countries?: CountryUpdateManyWithoutFxRatesNestedInput
  }

  export type FxRateUncheckedUpdateInput = {
    currencyCode?: StringFieldUpdateOperationsInput | string
    cbnRate?: FloatFieldUpdateOperationsInput | number
    parallelRate?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    countries?: CountryUncheckedUpdateManyWithoutFxRatesNestedInput
  }

  export type FxRateCreateManyInput = {
    currencyCode: string
    cbnRate: number
    parallelRate: number
    lastUpdated?: Date | string
  }

  export type FxRateUpdateManyMutationInput = {
    currencyCode?: StringFieldUpdateOperationsInput | string
    cbnRate?: FloatFieldUpdateOperationsInput | number
    parallelRate?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FxRateUncheckedUpdateManyInput = {
    currencyCode?: StringFieldUpdateOperationsInput | string
    cbnRate?: FloatFieldUpdateOperationsInput | number
    parallelRate?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTimelineCreateInput = {
    id?: string
    slug: string
    intakeDate: Date | string
    currentBalance: number
    targetAmount: number
    monthlyDeposit: number
    safeStartDate: Date | string
    cautionStartDate: Date | string
    riskyStartDate: Date | string
    currentStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTimelinesInput
    country: CountryCreateNestedOneWithoutTimelinesInput
    purpose: VisaPurposeCreateNestedOneWithoutTimelinesInput
  }

  export type UserTimelineUncheckedCreateInput = {
    id?: string
    userId: string
    countryId: string
    purposeId: string
    slug: string
    intakeDate: Date | string
    currentBalance: number
    targetAmount: number
    monthlyDeposit: number
    safeStartDate: Date | string
    cautionStartDate: Date | string
    riskyStartDate: Date | string
    currentStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTimelineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    intakeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentBalance?: FloatFieldUpdateOperationsInput | number
    targetAmount?: FloatFieldUpdateOperationsInput | number
    monthlyDeposit?: FloatFieldUpdateOperationsInput | number
    safeStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cautionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    riskyStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTimelinesNestedInput
    country?: CountryUpdateOneRequiredWithoutTimelinesNestedInput
    purpose?: VisaPurposeUpdateOneRequiredWithoutTimelinesNestedInput
  }

  export type UserTimelineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    purposeId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    intakeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentBalance?: FloatFieldUpdateOperationsInput | number
    targetAmount?: FloatFieldUpdateOperationsInput | number
    monthlyDeposit?: FloatFieldUpdateOperationsInput | number
    safeStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cautionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    riskyStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTimelineCreateManyInput = {
    id?: string
    userId: string
    countryId: string
    purposeId: string
    slug: string
    intakeDate: Date | string
    currentBalance: number
    targetAmount: number
    monthlyDeposit: number
    safeStartDate: Date | string
    cautionStartDate: Date | string
    riskyStartDate: Date | string
    currentStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTimelineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    intakeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentBalance?: FloatFieldUpdateOperationsInput | number
    targetAmount?: FloatFieldUpdateOperationsInput | number
    monthlyDeposit?: FloatFieldUpdateOperationsInput | number
    safeStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cautionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    riskyStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTimelineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    purposeId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    intakeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentBalance?: FloatFieldUpdateOperationsInput | number
    targetAmount?: FloatFieldUpdateOperationsInput | number
    monthlyDeposit?: FloatFieldUpdateOperationsInput | number
    safeStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cautionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    riskyStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type UserTimelineListRelationFilter = {
    every?: UserTimelineWhereInput
    some?: UserTimelineWhereInput
    none?: UserTimelineWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserTimelineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PofRuleListRelationFilter = {
    every?: PofRuleWhereInput
    some?: PofRuleWhereInput
    none?: PofRuleWhereInput
  }

  export type StudyIntakeListRelationFilter = {
    every?: StudyIntakeWhereInput
    some?: StudyIntakeWhereInput
    none?: StudyIntakeWhereInput
  }

  export type FxRateScalarRelationFilter = {
    is?: FxRateWhereInput
    isNot?: FxRateWhereInput
  }

  export type PofRuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudyIntakeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isoCode?: SortOrder
    currencyCode?: SortOrder
    flagEmoji?: SortOrder
    isActive?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isoCode?: SortOrder
    currencyCode?: SortOrder
    flagEmoji?: SortOrder
    isActive?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isoCode?: SortOrder
    currencyCode?: SortOrder
    flagEmoji?: SortOrder
    isActive?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type VisaPurposeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
  }

  export type VisaPurposeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
  }

  export type VisaPurposeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CountryScalarRelationFilter = {
    is?: CountryWhereInput
    isNot?: CountryWhereInput
  }

  export type VisaPurposeScalarRelationFilter = {
    is?: VisaPurposeWhereInput
    isNot?: VisaPurposeWhereInput
  }

  export type PofRuleCountryIdPurposeIdCompoundUniqueInput = {
    countryId: string
    purposeId: string
  }

  export type PofRuleCountOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
    purposeId?: SortOrder
    safeBufferMonths?: SortOrder
    cautionBufferMonths?: SortOrder
    riskyBufferMonths?: SortOrder
    minAmountForeign?: SortOrder
    requiresHistory?: SortOrder
    analysisText?: SortOrder
    nigerianSpecific?: SortOrder
    statementMonths?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PofRuleAvgOrderByAggregateInput = {
    safeBufferMonths?: SortOrder
    cautionBufferMonths?: SortOrder
    riskyBufferMonths?: SortOrder
    minAmountForeign?: SortOrder
    statementMonths?: SortOrder
  }

  export type PofRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
    purposeId?: SortOrder
    safeBufferMonths?: SortOrder
    cautionBufferMonths?: SortOrder
    riskyBufferMonths?: SortOrder
    minAmountForeign?: SortOrder
    requiresHistory?: SortOrder
    analysisText?: SortOrder
    nigerianSpecific?: SortOrder
    statementMonths?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PofRuleMinOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
    purposeId?: SortOrder
    safeBufferMonths?: SortOrder
    cautionBufferMonths?: SortOrder
    riskyBufferMonths?: SortOrder
    minAmountForeign?: SortOrder
    requiresHistory?: SortOrder
    analysisText?: SortOrder
    nigerianSpecific?: SortOrder
    statementMonths?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PofRuleSumOrderByAggregateInput = {
    safeBufferMonths?: SortOrder
    cautionBufferMonths?: SortOrder
    riskyBufferMonths?: SortOrder
    minAmountForeign?: SortOrder
    statementMonths?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type StudyIntakeCountryIdIntakeMonthCompoundUniqueInput = {
    countryId: string
    intakeMonth: number
  }

  export type StudyIntakeCountOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
    intakeMonth?: SortOrder
    intakeName?: SortOrder
    isMainIntake?: SortOrder
  }

  export type StudyIntakeAvgOrderByAggregateInput = {
    intakeMonth?: SortOrder
  }

  export type StudyIntakeMaxOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
    intakeMonth?: SortOrder
    intakeName?: SortOrder
    isMainIntake?: SortOrder
  }

  export type StudyIntakeMinOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
    intakeMonth?: SortOrder
    intakeName?: SortOrder
    isMainIntake?: SortOrder
  }

  export type StudyIntakeSumOrderByAggregateInput = {
    intakeMonth?: SortOrder
  }

  export type CountryListRelationFilter = {
    every?: CountryWhereInput
    some?: CountryWhereInput
    none?: CountryWhereInput
  }

  export type CountryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FxRateCountOrderByAggregateInput = {
    currencyCode?: SortOrder
    cbnRate?: SortOrder
    parallelRate?: SortOrder
    lastUpdated?: SortOrder
  }

  export type FxRateAvgOrderByAggregateInput = {
    cbnRate?: SortOrder
    parallelRate?: SortOrder
  }

  export type FxRateMaxOrderByAggregateInput = {
    currencyCode?: SortOrder
    cbnRate?: SortOrder
    parallelRate?: SortOrder
    lastUpdated?: SortOrder
  }

  export type FxRateMinOrderByAggregateInput = {
    currencyCode?: SortOrder
    cbnRate?: SortOrder
    parallelRate?: SortOrder
    lastUpdated?: SortOrder
  }

  export type FxRateSumOrderByAggregateInput = {
    cbnRate?: SortOrder
    parallelRate?: SortOrder
  }

  export type UserTimelineCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    countryId?: SortOrder
    purposeId?: SortOrder
    slug?: SortOrder
    intakeDate?: SortOrder
    currentBalance?: SortOrder
    targetAmount?: SortOrder
    monthlyDeposit?: SortOrder
    safeStartDate?: SortOrder
    cautionStartDate?: SortOrder
    riskyStartDate?: SortOrder
    currentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserTimelineAvgOrderByAggregateInput = {
    currentBalance?: SortOrder
    targetAmount?: SortOrder
    monthlyDeposit?: SortOrder
  }

  export type UserTimelineMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    countryId?: SortOrder
    purposeId?: SortOrder
    slug?: SortOrder
    intakeDate?: SortOrder
    currentBalance?: SortOrder
    targetAmount?: SortOrder
    monthlyDeposit?: SortOrder
    safeStartDate?: SortOrder
    cautionStartDate?: SortOrder
    riskyStartDate?: SortOrder
    currentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserTimelineMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    countryId?: SortOrder
    purposeId?: SortOrder
    slug?: SortOrder
    intakeDate?: SortOrder
    currentBalance?: SortOrder
    targetAmount?: SortOrder
    monthlyDeposit?: SortOrder
    safeStartDate?: SortOrder
    cautionStartDate?: SortOrder
    riskyStartDate?: SortOrder
    currentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserTimelineSumOrderByAggregateInput = {
    currentBalance?: SortOrder
    targetAmount?: SortOrder
    monthlyDeposit?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserTimelineCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTimelineCreateWithoutUserInput, UserTimelineUncheckedCreateWithoutUserInput> | UserTimelineCreateWithoutUserInput[] | UserTimelineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTimelineCreateOrConnectWithoutUserInput | UserTimelineCreateOrConnectWithoutUserInput[]
    createMany?: UserTimelineCreateManyUserInputEnvelope
    connect?: UserTimelineWhereUniqueInput | UserTimelineWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserTimelineUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTimelineCreateWithoutUserInput, UserTimelineUncheckedCreateWithoutUserInput> | UserTimelineCreateWithoutUserInput[] | UserTimelineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTimelineCreateOrConnectWithoutUserInput | UserTimelineCreateOrConnectWithoutUserInput[]
    createMany?: UserTimelineCreateManyUserInputEnvelope
    connect?: UserTimelineWhereUniqueInput | UserTimelineWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserTimelineUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTimelineCreateWithoutUserInput, UserTimelineUncheckedCreateWithoutUserInput> | UserTimelineCreateWithoutUserInput[] | UserTimelineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTimelineCreateOrConnectWithoutUserInput | UserTimelineCreateOrConnectWithoutUserInput[]
    upsert?: UserTimelineUpsertWithWhereUniqueWithoutUserInput | UserTimelineUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTimelineCreateManyUserInputEnvelope
    set?: UserTimelineWhereUniqueInput | UserTimelineWhereUniqueInput[]
    disconnect?: UserTimelineWhereUniqueInput | UserTimelineWhereUniqueInput[]
    delete?: UserTimelineWhereUniqueInput | UserTimelineWhereUniqueInput[]
    connect?: UserTimelineWhereUniqueInput | UserTimelineWhereUniqueInput[]
    update?: UserTimelineUpdateWithWhereUniqueWithoutUserInput | UserTimelineUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTimelineUpdateManyWithWhereWithoutUserInput | UserTimelineUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTimelineScalarWhereInput | UserTimelineScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserTimelineUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTimelineCreateWithoutUserInput, UserTimelineUncheckedCreateWithoutUserInput> | UserTimelineCreateWithoutUserInput[] | UserTimelineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTimelineCreateOrConnectWithoutUserInput | UserTimelineCreateOrConnectWithoutUserInput[]
    upsert?: UserTimelineUpsertWithWhereUniqueWithoutUserInput | UserTimelineUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTimelineCreateManyUserInputEnvelope
    set?: UserTimelineWhereUniqueInput | UserTimelineWhereUniqueInput[]
    disconnect?: UserTimelineWhereUniqueInput | UserTimelineWhereUniqueInput[]
    delete?: UserTimelineWhereUniqueInput | UserTimelineWhereUniqueInput[]
    connect?: UserTimelineWhereUniqueInput | UserTimelineWhereUniqueInput[]
    update?: UserTimelineUpdateWithWhereUniqueWithoutUserInput | UserTimelineUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTimelineUpdateManyWithWhereWithoutUserInput | UserTimelineUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTimelineScalarWhereInput | UserTimelineScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type PofRuleCreateNestedManyWithoutCountryInput = {
    create?: XOR<PofRuleCreateWithoutCountryInput, PofRuleUncheckedCreateWithoutCountryInput> | PofRuleCreateWithoutCountryInput[] | PofRuleUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: PofRuleCreateOrConnectWithoutCountryInput | PofRuleCreateOrConnectWithoutCountryInput[]
    createMany?: PofRuleCreateManyCountryInputEnvelope
    connect?: PofRuleWhereUniqueInput | PofRuleWhereUniqueInput[]
  }

  export type StudyIntakeCreateNestedManyWithoutCountryInput = {
    create?: XOR<StudyIntakeCreateWithoutCountryInput, StudyIntakeUncheckedCreateWithoutCountryInput> | StudyIntakeCreateWithoutCountryInput[] | StudyIntakeUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: StudyIntakeCreateOrConnectWithoutCountryInput | StudyIntakeCreateOrConnectWithoutCountryInput[]
    createMany?: StudyIntakeCreateManyCountryInputEnvelope
    connect?: StudyIntakeWhereUniqueInput | StudyIntakeWhereUniqueInput[]
  }

  export type FxRateCreateNestedOneWithoutCountriesInput = {
    create?: XOR<FxRateCreateWithoutCountriesInput, FxRateUncheckedCreateWithoutCountriesInput>
    connectOrCreate?: FxRateCreateOrConnectWithoutCountriesInput
    connect?: FxRateWhereUniqueInput
  }

  export type UserTimelineCreateNestedManyWithoutCountryInput = {
    create?: XOR<UserTimelineCreateWithoutCountryInput, UserTimelineUncheckedCreateWithoutCountryInput> | UserTimelineCreateWithoutCountryInput[] | UserTimelineUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: UserTimelineCreateOrConnectWithoutCountryInput | UserTimelineCreateOrConnectWithoutCountryInput[]
    createMany?: UserTimelineCreateManyCountryInputEnvelope
    connect?: UserTimelineWhereUniqueInput | UserTimelineWhereUniqueInput[]
  }

  export type PofRuleUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<PofRuleCreateWithoutCountryInput, PofRuleUncheckedCreateWithoutCountryInput> | PofRuleCreateWithoutCountryInput[] | PofRuleUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: PofRuleCreateOrConnectWithoutCountryInput | PofRuleCreateOrConnectWithoutCountryInput[]
    createMany?: PofRuleCreateManyCountryInputEnvelope
    connect?: PofRuleWhereUniqueInput | PofRuleWhereUniqueInput[]
  }

  export type StudyIntakeUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<StudyIntakeCreateWithoutCountryInput, StudyIntakeUncheckedCreateWithoutCountryInput> | StudyIntakeCreateWithoutCountryInput[] | StudyIntakeUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: StudyIntakeCreateOrConnectWithoutCountryInput | StudyIntakeCreateOrConnectWithoutCountryInput[]
    createMany?: StudyIntakeCreateManyCountryInputEnvelope
    connect?: StudyIntakeWhereUniqueInput | StudyIntakeWhereUniqueInput[]
  }

  export type UserTimelineUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<UserTimelineCreateWithoutCountryInput, UserTimelineUncheckedCreateWithoutCountryInput> | UserTimelineCreateWithoutCountryInput[] | UserTimelineUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: UserTimelineCreateOrConnectWithoutCountryInput | UserTimelineCreateOrConnectWithoutCountryInput[]
    createMany?: UserTimelineCreateManyCountryInputEnvelope
    connect?: UserTimelineWhereUniqueInput | UserTimelineWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PofRuleUpdateManyWithoutCountryNestedInput = {
    create?: XOR<PofRuleCreateWithoutCountryInput, PofRuleUncheckedCreateWithoutCountryInput> | PofRuleCreateWithoutCountryInput[] | PofRuleUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: PofRuleCreateOrConnectWithoutCountryInput | PofRuleCreateOrConnectWithoutCountryInput[]
    upsert?: PofRuleUpsertWithWhereUniqueWithoutCountryInput | PofRuleUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: PofRuleCreateManyCountryInputEnvelope
    set?: PofRuleWhereUniqueInput | PofRuleWhereUniqueInput[]
    disconnect?: PofRuleWhereUniqueInput | PofRuleWhereUniqueInput[]
    delete?: PofRuleWhereUniqueInput | PofRuleWhereUniqueInput[]
    connect?: PofRuleWhereUniqueInput | PofRuleWhereUniqueInput[]
    update?: PofRuleUpdateWithWhereUniqueWithoutCountryInput | PofRuleUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: PofRuleUpdateManyWithWhereWithoutCountryInput | PofRuleUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: PofRuleScalarWhereInput | PofRuleScalarWhereInput[]
  }

  export type StudyIntakeUpdateManyWithoutCountryNestedInput = {
    create?: XOR<StudyIntakeCreateWithoutCountryInput, StudyIntakeUncheckedCreateWithoutCountryInput> | StudyIntakeCreateWithoutCountryInput[] | StudyIntakeUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: StudyIntakeCreateOrConnectWithoutCountryInput | StudyIntakeCreateOrConnectWithoutCountryInput[]
    upsert?: StudyIntakeUpsertWithWhereUniqueWithoutCountryInput | StudyIntakeUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: StudyIntakeCreateManyCountryInputEnvelope
    set?: StudyIntakeWhereUniqueInput | StudyIntakeWhereUniqueInput[]
    disconnect?: StudyIntakeWhereUniqueInput | StudyIntakeWhereUniqueInput[]
    delete?: StudyIntakeWhereUniqueInput | StudyIntakeWhereUniqueInput[]
    connect?: StudyIntakeWhereUniqueInput | StudyIntakeWhereUniqueInput[]
    update?: StudyIntakeUpdateWithWhereUniqueWithoutCountryInput | StudyIntakeUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: StudyIntakeUpdateManyWithWhereWithoutCountryInput | StudyIntakeUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: StudyIntakeScalarWhereInput | StudyIntakeScalarWhereInput[]
  }

  export type FxRateUpdateOneRequiredWithoutCountriesNestedInput = {
    create?: XOR<FxRateCreateWithoutCountriesInput, FxRateUncheckedCreateWithoutCountriesInput>
    connectOrCreate?: FxRateCreateOrConnectWithoutCountriesInput
    upsert?: FxRateUpsertWithoutCountriesInput
    connect?: FxRateWhereUniqueInput
    update?: XOR<XOR<FxRateUpdateToOneWithWhereWithoutCountriesInput, FxRateUpdateWithoutCountriesInput>, FxRateUncheckedUpdateWithoutCountriesInput>
  }

  export type UserTimelineUpdateManyWithoutCountryNestedInput = {
    create?: XOR<UserTimelineCreateWithoutCountryInput, UserTimelineUncheckedCreateWithoutCountryInput> | UserTimelineCreateWithoutCountryInput[] | UserTimelineUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: UserTimelineCreateOrConnectWithoutCountryInput | UserTimelineCreateOrConnectWithoutCountryInput[]
    upsert?: UserTimelineUpsertWithWhereUniqueWithoutCountryInput | UserTimelineUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: UserTimelineCreateManyCountryInputEnvelope
    set?: UserTimelineWhereUniqueInput | UserTimelineWhereUniqueInput[]
    disconnect?: UserTimelineWhereUniqueInput | UserTimelineWhereUniqueInput[]
    delete?: UserTimelineWhereUniqueInput | UserTimelineWhereUniqueInput[]
    connect?: UserTimelineWhereUniqueInput | UserTimelineWhereUniqueInput[]
    update?: UserTimelineUpdateWithWhereUniqueWithoutCountryInput | UserTimelineUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: UserTimelineUpdateManyWithWhereWithoutCountryInput | UserTimelineUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: UserTimelineScalarWhereInput | UserTimelineScalarWhereInput[]
  }

  export type PofRuleUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<PofRuleCreateWithoutCountryInput, PofRuleUncheckedCreateWithoutCountryInput> | PofRuleCreateWithoutCountryInput[] | PofRuleUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: PofRuleCreateOrConnectWithoutCountryInput | PofRuleCreateOrConnectWithoutCountryInput[]
    upsert?: PofRuleUpsertWithWhereUniqueWithoutCountryInput | PofRuleUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: PofRuleCreateManyCountryInputEnvelope
    set?: PofRuleWhereUniqueInput | PofRuleWhereUniqueInput[]
    disconnect?: PofRuleWhereUniqueInput | PofRuleWhereUniqueInput[]
    delete?: PofRuleWhereUniqueInput | PofRuleWhereUniqueInput[]
    connect?: PofRuleWhereUniqueInput | PofRuleWhereUniqueInput[]
    update?: PofRuleUpdateWithWhereUniqueWithoutCountryInput | PofRuleUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: PofRuleUpdateManyWithWhereWithoutCountryInput | PofRuleUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: PofRuleScalarWhereInput | PofRuleScalarWhereInput[]
  }

  export type StudyIntakeUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<StudyIntakeCreateWithoutCountryInput, StudyIntakeUncheckedCreateWithoutCountryInput> | StudyIntakeCreateWithoutCountryInput[] | StudyIntakeUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: StudyIntakeCreateOrConnectWithoutCountryInput | StudyIntakeCreateOrConnectWithoutCountryInput[]
    upsert?: StudyIntakeUpsertWithWhereUniqueWithoutCountryInput | StudyIntakeUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: StudyIntakeCreateManyCountryInputEnvelope
    set?: StudyIntakeWhereUniqueInput | StudyIntakeWhereUniqueInput[]
    disconnect?: StudyIntakeWhereUniqueInput | StudyIntakeWhereUniqueInput[]
    delete?: StudyIntakeWhereUniqueInput | StudyIntakeWhereUniqueInput[]
    connect?: StudyIntakeWhereUniqueInput | StudyIntakeWhereUniqueInput[]
    update?: StudyIntakeUpdateWithWhereUniqueWithoutCountryInput | StudyIntakeUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: StudyIntakeUpdateManyWithWhereWithoutCountryInput | StudyIntakeUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: StudyIntakeScalarWhereInput | StudyIntakeScalarWhereInput[]
  }

  export type UserTimelineUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<UserTimelineCreateWithoutCountryInput, UserTimelineUncheckedCreateWithoutCountryInput> | UserTimelineCreateWithoutCountryInput[] | UserTimelineUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: UserTimelineCreateOrConnectWithoutCountryInput | UserTimelineCreateOrConnectWithoutCountryInput[]
    upsert?: UserTimelineUpsertWithWhereUniqueWithoutCountryInput | UserTimelineUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: UserTimelineCreateManyCountryInputEnvelope
    set?: UserTimelineWhereUniqueInput | UserTimelineWhereUniqueInput[]
    disconnect?: UserTimelineWhereUniqueInput | UserTimelineWhereUniqueInput[]
    delete?: UserTimelineWhereUniqueInput | UserTimelineWhereUniqueInput[]
    connect?: UserTimelineWhereUniqueInput | UserTimelineWhereUniqueInput[]
    update?: UserTimelineUpdateWithWhereUniqueWithoutCountryInput | UserTimelineUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: UserTimelineUpdateManyWithWhereWithoutCountryInput | UserTimelineUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: UserTimelineScalarWhereInput | UserTimelineScalarWhereInput[]
  }

  export type PofRuleCreateNestedManyWithoutPurposeInput = {
    create?: XOR<PofRuleCreateWithoutPurposeInput, PofRuleUncheckedCreateWithoutPurposeInput> | PofRuleCreateWithoutPurposeInput[] | PofRuleUncheckedCreateWithoutPurposeInput[]
    connectOrCreate?: PofRuleCreateOrConnectWithoutPurposeInput | PofRuleCreateOrConnectWithoutPurposeInput[]
    createMany?: PofRuleCreateManyPurposeInputEnvelope
    connect?: PofRuleWhereUniqueInput | PofRuleWhereUniqueInput[]
  }

  export type UserTimelineCreateNestedManyWithoutPurposeInput = {
    create?: XOR<UserTimelineCreateWithoutPurposeInput, UserTimelineUncheckedCreateWithoutPurposeInput> | UserTimelineCreateWithoutPurposeInput[] | UserTimelineUncheckedCreateWithoutPurposeInput[]
    connectOrCreate?: UserTimelineCreateOrConnectWithoutPurposeInput | UserTimelineCreateOrConnectWithoutPurposeInput[]
    createMany?: UserTimelineCreateManyPurposeInputEnvelope
    connect?: UserTimelineWhereUniqueInput | UserTimelineWhereUniqueInput[]
  }

  export type PofRuleUncheckedCreateNestedManyWithoutPurposeInput = {
    create?: XOR<PofRuleCreateWithoutPurposeInput, PofRuleUncheckedCreateWithoutPurposeInput> | PofRuleCreateWithoutPurposeInput[] | PofRuleUncheckedCreateWithoutPurposeInput[]
    connectOrCreate?: PofRuleCreateOrConnectWithoutPurposeInput | PofRuleCreateOrConnectWithoutPurposeInput[]
    createMany?: PofRuleCreateManyPurposeInputEnvelope
    connect?: PofRuleWhereUniqueInput | PofRuleWhereUniqueInput[]
  }

  export type UserTimelineUncheckedCreateNestedManyWithoutPurposeInput = {
    create?: XOR<UserTimelineCreateWithoutPurposeInput, UserTimelineUncheckedCreateWithoutPurposeInput> | UserTimelineCreateWithoutPurposeInput[] | UserTimelineUncheckedCreateWithoutPurposeInput[]
    connectOrCreate?: UserTimelineCreateOrConnectWithoutPurposeInput | UserTimelineCreateOrConnectWithoutPurposeInput[]
    createMany?: UserTimelineCreateManyPurposeInputEnvelope
    connect?: UserTimelineWhereUniqueInput | UserTimelineWhereUniqueInput[]
  }

  export type PofRuleUpdateManyWithoutPurposeNestedInput = {
    create?: XOR<PofRuleCreateWithoutPurposeInput, PofRuleUncheckedCreateWithoutPurposeInput> | PofRuleCreateWithoutPurposeInput[] | PofRuleUncheckedCreateWithoutPurposeInput[]
    connectOrCreate?: PofRuleCreateOrConnectWithoutPurposeInput | PofRuleCreateOrConnectWithoutPurposeInput[]
    upsert?: PofRuleUpsertWithWhereUniqueWithoutPurposeInput | PofRuleUpsertWithWhereUniqueWithoutPurposeInput[]
    createMany?: PofRuleCreateManyPurposeInputEnvelope
    set?: PofRuleWhereUniqueInput | PofRuleWhereUniqueInput[]
    disconnect?: PofRuleWhereUniqueInput | PofRuleWhereUniqueInput[]
    delete?: PofRuleWhereUniqueInput | PofRuleWhereUniqueInput[]
    connect?: PofRuleWhereUniqueInput | PofRuleWhereUniqueInput[]
    update?: PofRuleUpdateWithWhereUniqueWithoutPurposeInput | PofRuleUpdateWithWhereUniqueWithoutPurposeInput[]
    updateMany?: PofRuleUpdateManyWithWhereWithoutPurposeInput | PofRuleUpdateManyWithWhereWithoutPurposeInput[]
    deleteMany?: PofRuleScalarWhereInput | PofRuleScalarWhereInput[]
  }

  export type UserTimelineUpdateManyWithoutPurposeNestedInput = {
    create?: XOR<UserTimelineCreateWithoutPurposeInput, UserTimelineUncheckedCreateWithoutPurposeInput> | UserTimelineCreateWithoutPurposeInput[] | UserTimelineUncheckedCreateWithoutPurposeInput[]
    connectOrCreate?: UserTimelineCreateOrConnectWithoutPurposeInput | UserTimelineCreateOrConnectWithoutPurposeInput[]
    upsert?: UserTimelineUpsertWithWhereUniqueWithoutPurposeInput | UserTimelineUpsertWithWhereUniqueWithoutPurposeInput[]
    createMany?: UserTimelineCreateManyPurposeInputEnvelope
    set?: UserTimelineWhereUniqueInput | UserTimelineWhereUniqueInput[]
    disconnect?: UserTimelineWhereUniqueInput | UserTimelineWhereUniqueInput[]
    delete?: UserTimelineWhereUniqueInput | UserTimelineWhereUniqueInput[]
    connect?: UserTimelineWhereUniqueInput | UserTimelineWhereUniqueInput[]
    update?: UserTimelineUpdateWithWhereUniqueWithoutPurposeInput | UserTimelineUpdateWithWhereUniqueWithoutPurposeInput[]
    updateMany?: UserTimelineUpdateManyWithWhereWithoutPurposeInput | UserTimelineUpdateManyWithWhereWithoutPurposeInput[]
    deleteMany?: UserTimelineScalarWhereInput | UserTimelineScalarWhereInput[]
  }

  export type PofRuleUncheckedUpdateManyWithoutPurposeNestedInput = {
    create?: XOR<PofRuleCreateWithoutPurposeInput, PofRuleUncheckedCreateWithoutPurposeInput> | PofRuleCreateWithoutPurposeInput[] | PofRuleUncheckedCreateWithoutPurposeInput[]
    connectOrCreate?: PofRuleCreateOrConnectWithoutPurposeInput | PofRuleCreateOrConnectWithoutPurposeInput[]
    upsert?: PofRuleUpsertWithWhereUniqueWithoutPurposeInput | PofRuleUpsertWithWhereUniqueWithoutPurposeInput[]
    createMany?: PofRuleCreateManyPurposeInputEnvelope
    set?: PofRuleWhereUniqueInput | PofRuleWhereUniqueInput[]
    disconnect?: PofRuleWhereUniqueInput | PofRuleWhereUniqueInput[]
    delete?: PofRuleWhereUniqueInput | PofRuleWhereUniqueInput[]
    connect?: PofRuleWhereUniqueInput | PofRuleWhereUniqueInput[]
    update?: PofRuleUpdateWithWhereUniqueWithoutPurposeInput | PofRuleUpdateWithWhereUniqueWithoutPurposeInput[]
    updateMany?: PofRuleUpdateManyWithWhereWithoutPurposeInput | PofRuleUpdateManyWithWhereWithoutPurposeInput[]
    deleteMany?: PofRuleScalarWhereInput | PofRuleScalarWhereInput[]
  }

  export type UserTimelineUncheckedUpdateManyWithoutPurposeNestedInput = {
    create?: XOR<UserTimelineCreateWithoutPurposeInput, UserTimelineUncheckedCreateWithoutPurposeInput> | UserTimelineCreateWithoutPurposeInput[] | UserTimelineUncheckedCreateWithoutPurposeInput[]
    connectOrCreate?: UserTimelineCreateOrConnectWithoutPurposeInput | UserTimelineCreateOrConnectWithoutPurposeInput[]
    upsert?: UserTimelineUpsertWithWhereUniqueWithoutPurposeInput | UserTimelineUpsertWithWhereUniqueWithoutPurposeInput[]
    createMany?: UserTimelineCreateManyPurposeInputEnvelope
    set?: UserTimelineWhereUniqueInput | UserTimelineWhereUniqueInput[]
    disconnect?: UserTimelineWhereUniqueInput | UserTimelineWhereUniqueInput[]
    delete?: UserTimelineWhereUniqueInput | UserTimelineWhereUniqueInput[]
    connect?: UserTimelineWhereUniqueInput | UserTimelineWhereUniqueInput[]
    update?: UserTimelineUpdateWithWhereUniqueWithoutPurposeInput | UserTimelineUpdateWithWhereUniqueWithoutPurposeInput[]
    updateMany?: UserTimelineUpdateManyWithWhereWithoutPurposeInput | UserTimelineUpdateManyWithWhereWithoutPurposeInput[]
    deleteMany?: UserTimelineScalarWhereInput | UserTimelineScalarWhereInput[]
  }

  export type CountryCreateNestedOneWithoutPofRulesInput = {
    create?: XOR<CountryCreateWithoutPofRulesInput, CountryUncheckedCreateWithoutPofRulesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutPofRulesInput
    connect?: CountryWhereUniqueInput
  }

  export type VisaPurposeCreateNestedOneWithoutPofRulesInput = {
    create?: XOR<VisaPurposeCreateWithoutPofRulesInput, VisaPurposeUncheckedCreateWithoutPofRulesInput>
    connectOrCreate?: VisaPurposeCreateOrConnectWithoutPofRulesInput
    connect?: VisaPurposeWhereUniqueInput
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

  export type CountryUpdateOneRequiredWithoutPofRulesNestedInput = {
    create?: XOR<CountryCreateWithoutPofRulesInput, CountryUncheckedCreateWithoutPofRulesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutPofRulesInput
    upsert?: CountryUpsertWithoutPofRulesInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutPofRulesInput, CountryUpdateWithoutPofRulesInput>, CountryUncheckedUpdateWithoutPofRulesInput>
  }

  export type VisaPurposeUpdateOneRequiredWithoutPofRulesNestedInput = {
    create?: XOR<VisaPurposeCreateWithoutPofRulesInput, VisaPurposeUncheckedCreateWithoutPofRulesInput>
    connectOrCreate?: VisaPurposeCreateOrConnectWithoutPofRulesInput
    upsert?: VisaPurposeUpsertWithoutPofRulesInput
    connect?: VisaPurposeWhereUniqueInput
    update?: XOR<XOR<VisaPurposeUpdateToOneWithWhereWithoutPofRulesInput, VisaPurposeUpdateWithoutPofRulesInput>, VisaPurposeUncheckedUpdateWithoutPofRulesInput>
  }

  export type CountryCreateNestedOneWithoutStudyIntakeInput = {
    create?: XOR<CountryCreateWithoutStudyIntakeInput, CountryUncheckedCreateWithoutStudyIntakeInput>
    connectOrCreate?: CountryCreateOrConnectWithoutStudyIntakeInput
    connect?: CountryWhereUniqueInput
  }

  export type CountryUpdateOneRequiredWithoutStudyIntakeNestedInput = {
    create?: XOR<CountryCreateWithoutStudyIntakeInput, CountryUncheckedCreateWithoutStudyIntakeInput>
    connectOrCreate?: CountryCreateOrConnectWithoutStudyIntakeInput
    upsert?: CountryUpsertWithoutStudyIntakeInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutStudyIntakeInput, CountryUpdateWithoutStudyIntakeInput>, CountryUncheckedUpdateWithoutStudyIntakeInput>
  }

  export type CountryCreateNestedManyWithoutFxRatesInput = {
    create?: XOR<CountryCreateWithoutFxRatesInput, CountryUncheckedCreateWithoutFxRatesInput> | CountryCreateWithoutFxRatesInput[] | CountryUncheckedCreateWithoutFxRatesInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutFxRatesInput | CountryCreateOrConnectWithoutFxRatesInput[]
    createMany?: CountryCreateManyFxRatesInputEnvelope
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
  }

  export type CountryUncheckedCreateNestedManyWithoutFxRatesInput = {
    create?: XOR<CountryCreateWithoutFxRatesInput, CountryUncheckedCreateWithoutFxRatesInput> | CountryCreateWithoutFxRatesInput[] | CountryUncheckedCreateWithoutFxRatesInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutFxRatesInput | CountryCreateOrConnectWithoutFxRatesInput[]
    createMany?: CountryCreateManyFxRatesInputEnvelope
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
  }

  export type CountryUpdateManyWithoutFxRatesNestedInput = {
    create?: XOR<CountryCreateWithoutFxRatesInput, CountryUncheckedCreateWithoutFxRatesInput> | CountryCreateWithoutFxRatesInput[] | CountryUncheckedCreateWithoutFxRatesInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutFxRatesInput | CountryCreateOrConnectWithoutFxRatesInput[]
    upsert?: CountryUpsertWithWhereUniqueWithoutFxRatesInput | CountryUpsertWithWhereUniqueWithoutFxRatesInput[]
    createMany?: CountryCreateManyFxRatesInputEnvelope
    set?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    disconnect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    delete?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    update?: CountryUpdateWithWhereUniqueWithoutFxRatesInput | CountryUpdateWithWhereUniqueWithoutFxRatesInput[]
    updateMany?: CountryUpdateManyWithWhereWithoutFxRatesInput | CountryUpdateManyWithWhereWithoutFxRatesInput[]
    deleteMany?: CountryScalarWhereInput | CountryScalarWhereInput[]
  }

  export type CountryUncheckedUpdateManyWithoutFxRatesNestedInput = {
    create?: XOR<CountryCreateWithoutFxRatesInput, CountryUncheckedCreateWithoutFxRatesInput> | CountryCreateWithoutFxRatesInput[] | CountryUncheckedCreateWithoutFxRatesInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutFxRatesInput | CountryCreateOrConnectWithoutFxRatesInput[]
    upsert?: CountryUpsertWithWhereUniqueWithoutFxRatesInput | CountryUpsertWithWhereUniqueWithoutFxRatesInput[]
    createMany?: CountryCreateManyFxRatesInputEnvelope
    set?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    disconnect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    delete?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    update?: CountryUpdateWithWhereUniqueWithoutFxRatesInput | CountryUpdateWithWhereUniqueWithoutFxRatesInput[]
    updateMany?: CountryUpdateManyWithWhereWithoutFxRatesInput | CountryUpdateManyWithWhereWithoutFxRatesInput[]
    deleteMany?: CountryScalarWhereInput | CountryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTimelinesInput = {
    create?: XOR<UserCreateWithoutTimelinesInput, UserUncheckedCreateWithoutTimelinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimelinesInput
    connect?: UserWhereUniqueInput
  }

  export type CountryCreateNestedOneWithoutTimelinesInput = {
    create?: XOR<CountryCreateWithoutTimelinesInput, CountryUncheckedCreateWithoutTimelinesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutTimelinesInput
    connect?: CountryWhereUniqueInput
  }

  export type VisaPurposeCreateNestedOneWithoutTimelinesInput = {
    create?: XOR<VisaPurposeCreateWithoutTimelinesInput, VisaPurposeUncheckedCreateWithoutTimelinesInput>
    connectOrCreate?: VisaPurposeCreateOrConnectWithoutTimelinesInput
    connect?: VisaPurposeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTimelinesNestedInput = {
    create?: XOR<UserCreateWithoutTimelinesInput, UserUncheckedCreateWithoutTimelinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimelinesInput
    upsert?: UserUpsertWithoutTimelinesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTimelinesInput, UserUpdateWithoutTimelinesInput>, UserUncheckedUpdateWithoutTimelinesInput>
  }

  export type CountryUpdateOneRequiredWithoutTimelinesNestedInput = {
    create?: XOR<CountryCreateWithoutTimelinesInput, CountryUncheckedCreateWithoutTimelinesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutTimelinesInput
    upsert?: CountryUpsertWithoutTimelinesInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutTimelinesInput, CountryUpdateWithoutTimelinesInput>, CountryUncheckedUpdateWithoutTimelinesInput>
  }

  export type VisaPurposeUpdateOneRequiredWithoutTimelinesNestedInput = {
    create?: XOR<VisaPurposeCreateWithoutTimelinesInput, VisaPurposeUncheckedCreateWithoutTimelinesInput>
    connectOrCreate?: VisaPurposeCreateOrConnectWithoutTimelinesInput
    upsert?: VisaPurposeUpsertWithoutTimelinesInput
    connect?: VisaPurposeWhereUniqueInput
    update?: XOR<XOR<VisaPurposeUpdateToOneWithWhereWithoutTimelinesInput, VisaPurposeUpdateWithoutTimelinesInput>, VisaPurposeUncheckedUpdateWithoutTimelinesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserTimelineCreateWithoutUserInput = {
    id?: string
    slug: string
    intakeDate: Date | string
    currentBalance: number
    targetAmount: number
    monthlyDeposit: number
    safeStartDate: Date | string
    cautionStartDate: Date | string
    riskyStartDate: Date | string
    currentStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutTimelinesInput
    purpose: VisaPurposeCreateNestedOneWithoutTimelinesInput
  }

  export type UserTimelineUncheckedCreateWithoutUserInput = {
    id?: string
    countryId: string
    purposeId: string
    slug: string
    intakeDate: Date | string
    currentBalance: number
    targetAmount: number
    monthlyDeposit: number
    safeStartDate: Date | string
    cautionStartDate: Date | string
    riskyStartDate: Date | string
    currentStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTimelineCreateOrConnectWithoutUserInput = {
    where: UserTimelineWhereUniqueInput
    create: XOR<UserTimelineCreateWithoutUserInput, UserTimelineUncheckedCreateWithoutUserInput>
  }

  export type UserTimelineCreateManyUserInputEnvelope = {
    data: UserTimelineCreateManyUserInput | UserTimelineCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserTimelineUpsertWithWhereUniqueWithoutUserInput = {
    where: UserTimelineWhereUniqueInput
    update: XOR<UserTimelineUpdateWithoutUserInput, UserTimelineUncheckedUpdateWithoutUserInput>
    create: XOR<UserTimelineCreateWithoutUserInput, UserTimelineUncheckedCreateWithoutUserInput>
  }

  export type UserTimelineUpdateWithWhereUniqueWithoutUserInput = {
    where: UserTimelineWhereUniqueInput
    data: XOR<UserTimelineUpdateWithoutUserInput, UserTimelineUncheckedUpdateWithoutUserInput>
  }

  export type UserTimelineUpdateManyWithWhereWithoutUserInput = {
    where: UserTimelineScalarWhereInput
    data: XOR<UserTimelineUpdateManyMutationInput, UserTimelineUncheckedUpdateManyWithoutUserInput>
  }

  export type UserTimelineScalarWhereInput = {
    AND?: UserTimelineScalarWhereInput | UserTimelineScalarWhereInput[]
    OR?: UserTimelineScalarWhereInput[]
    NOT?: UserTimelineScalarWhereInput | UserTimelineScalarWhereInput[]
    id?: StringFilter<"UserTimeline"> | string
    userId?: StringFilter<"UserTimeline"> | string
    countryId?: StringFilter<"UserTimeline"> | string
    purposeId?: StringFilter<"UserTimeline"> | string
    slug?: StringFilter<"UserTimeline"> | string
    intakeDate?: DateTimeFilter<"UserTimeline"> | Date | string
    currentBalance?: FloatFilter<"UserTimeline"> | number
    targetAmount?: FloatFilter<"UserTimeline"> | number
    monthlyDeposit?: FloatFilter<"UserTimeline"> | number
    safeStartDate?: DateTimeFilter<"UserTimeline"> | Date | string
    cautionStartDate?: DateTimeFilter<"UserTimeline"> | Date | string
    riskyStartDate?: DateTimeFilter<"UserTimeline"> | Date | string
    currentStatus?: StringFilter<"UserTimeline"> | string
    createdAt?: DateTimeFilter<"UserTimeline"> | Date | string
    updatedAt?: DateTimeFilter<"UserTimeline"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    timelines?: UserTimelineCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    timelines?: UserTimelineUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    timelines?: UserTimelineUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    timelines?: UserTimelineUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    timelines?: UserTimelineCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    timelines?: UserTimelineUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    timelines?: UserTimelineUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    timelines?: UserTimelineUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PofRuleCreateWithoutCountryInput = {
    id?: string
    safeBufferMonths: number
    cautionBufferMonths: number
    riskyBufferMonths: number
    minAmountForeign: number
    requiresHistory?: boolean
    analysisText: string
    nigerianSpecific: string
    statementMonths?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    purpose: VisaPurposeCreateNestedOneWithoutPofRulesInput
  }

  export type PofRuleUncheckedCreateWithoutCountryInput = {
    id?: string
    purposeId: string
    safeBufferMonths: number
    cautionBufferMonths: number
    riskyBufferMonths: number
    minAmountForeign: number
    requiresHistory?: boolean
    analysisText: string
    nigerianSpecific: string
    statementMonths?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PofRuleCreateOrConnectWithoutCountryInput = {
    where: PofRuleWhereUniqueInput
    create: XOR<PofRuleCreateWithoutCountryInput, PofRuleUncheckedCreateWithoutCountryInput>
  }

  export type PofRuleCreateManyCountryInputEnvelope = {
    data: PofRuleCreateManyCountryInput | PofRuleCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type StudyIntakeCreateWithoutCountryInput = {
    id?: string
    intakeMonth: number
    intakeName: string
    isMainIntake?: boolean
  }

  export type StudyIntakeUncheckedCreateWithoutCountryInput = {
    id?: string
    intakeMonth: number
    intakeName: string
    isMainIntake?: boolean
  }

  export type StudyIntakeCreateOrConnectWithoutCountryInput = {
    where: StudyIntakeWhereUniqueInput
    create: XOR<StudyIntakeCreateWithoutCountryInput, StudyIntakeUncheckedCreateWithoutCountryInput>
  }

  export type StudyIntakeCreateManyCountryInputEnvelope = {
    data: StudyIntakeCreateManyCountryInput | StudyIntakeCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type FxRateCreateWithoutCountriesInput = {
    currencyCode: string
    cbnRate: number
    parallelRate: number
    lastUpdated?: Date | string
  }

  export type FxRateUncheckedCreateWithoutCountriesInput = {
    currencyCode: string
    cbnRate: number
    parallelRate: number
    lastUpdated?: Date | string
  }

  export type FxRateCreateOrConnectWithoutCountriesInput = {
    where: FxRateWhereUniqueInput
    create: XOR<FxRateCreateWithoutCountriesInput, FxRateUncheckedCreateWithoutCountriesInput>
  }

  export type UserTimelineCreateWithoutCountryInput = {
    id?: string
    slug: string
    intakeDate: Date | string
    currentBalance: number
    targetAmount: number
    monthlyDeposit: number
    safeStartDate: Date | string
    cautionStartDate: Date | string
    riskyStartDate: Date | string
    currentStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTimelinesInput
    purpose: VisaPurposeCreateNestedOneWithoutTimelinesInput
  }

  export type UserTimelineUncheckedCreateWithoutCountryInput = {
    id?: string
    userId: string
    purposeId: string
    slug: string
    intakeDate: Date | string
    currentBalance: number
    targetAmount: number
    monthlyDeposit: number
    safeStartDate: Date | string
    cautionStartDate: Date | string
    riskyStartDate: Date | string
    currentStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTimelineCreateOrConnectWithoutCountryInput = {
    where: UserTimelineWhereUniqueInput
    create: XOR<UserTimelineCreateWithoutCountryInput, UserTimelineUncheckedCreateWithoutCountryInput>
  }

  export type UserTimelineCreateManyCountryInputEnvelope = {
    data: UserTimelineCreateManyCountryInput | UserTimelineCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type PofRuleUpsertWithWhereUniqueWithoutCountryInput = {
    where: PofRuleWhereUniqueInput
    update: XOR<PofRuleUpdateWithoutCountryInput, PofRuleUncheckedUpdateWithoutCountryInput>
    create: XOR<PofRuleCreateWithoutCountryInput, PofRuleUncheckedCreateWithoutCountryInput>
  }

  export type PofRuleUpdateWithWhereUniqueWithoutCountryInput = {
    where: PofRuleWhereUniqueInput
    data: XOR<PofRuleUpdateWithoutCountryInput, PofRuleUncheckedUpdateWithoutCountryInput>
  }

  export type PofRuleUpdateManyWithWhereWithoutCountryInput = {
    where: PofRuleScalarWhereInput
    data: XOR<PofRuleUpdateManyMutationInput, PofRuleUncheckedUpdateManyWithoutCountryInput>
  }

  export type PofRuleScalarWhereInput = {
    AND?: PofRuleScalarWhereInput | PofRuleScalarWhereInput[]
    OR?: PofRuleScalarWhereInput[]
    NOT?: PofRuleScalarWhereInput | PofRuleScalarWhereInput[]
    id?: StringFilter<"PofRule"> | string
    countryId?: StringFilter<"PofRule"> | string
    purposeId?: StringFilter<"PofRule"> | string
    safeBufferMonths?: IntFilter<"PofRule"> | number
    cautionBufferMonths?: IntFilter<"PofRule"> | number
    riskyBufferMonths?: IntFilter<"PofRule"> | number
    minAmountForeign?: FloatFilter<"PofRule"> | number
    requiresHistory?: BoolFilter<"PofRule"> | boolean
    analysisText?: StringFilter<"PofRule"> | string
    nigerianSpecific?: StringFilter<"PofRule"> | string
    statementMonths?: IntFilter<"PofRule"> | number
    createdAt?: DateTimeFilter<"PofRule"> | Date | string
    updatedAt?: DateTimeFilter<"PofRule"> | Date | string
  }

  export type StudyIntakeUpsertWithWhereUniqueWithoutCountryInput = {
    where: StudyIntakeWhereUniqueInput
    update: XOR<StudyIntakeUpdateWithoutCountryInput, StudyIntakeUncheckedUpdateWithoutCountryInput>
    create: XOR<StudyIntakeCreateWithoutCountryInput, StudyIntakeUncheckedCreateWithoutCountryInput>
  }

  export type StudyIntakeUpdateWithWhereUniqueWithoutCountryInput = {
    where: StudyIntakeWhereUniqueInput
    data: XOR<StudyIntakeUpdateWithoutCountryInput, StudyIntakeUncheckedUpdateWithoutCountryInput>
  }

  export type StudyIntakeUpdateManyWithWhereWithoutCountryInput = {
    where: StudyIntakeScalarWhereInput
    data: XOR<StudyIntakeUpdateManyMutationInput, StudyIntakeUncheckedUpdateManyWithoutCountryInput>
  }

  export type StudyIntakeScalarWhereInput = {
    AND?: StudyIntakeScalarWhereInput | StudyIntakeScalarWhereInput[]
    OR?: StudyIntakeScalarWhereInput[]
    NOT?: StudyIntakeScalarWhereInput | StudyIntakeScalarWhereInput[]
    id?: StringFilter<"StudyIntake"> | string
    countryId?: StringFilter<"StudyIntake"> | string
    intakeMonth?: IntFilter<"StudyIntake"> | number
    intakeName?: StringFilter<"StudyIntake"> | string
    isMainIntake?: BoolFilter<"StudyIntake"> | boolean
  }

  export type FxRateUpsertWithoutCountriesInput = {
    update: XOR<FxRateUpdateWithoutCountriesInput, FxRateUncheckedUpdateWithoutCountriesInput>
    create: XOR<FxRateCreateWithoutCountriesInput, FxRateUncheckedCreateWithoutCountriesInput>
    where?: FxRateWhereInput
  }

  export type FxRateUpdateToOneWithWhereWithoutCountriesInput = {
    where?: FxRateWhereInput
    data: XOR<FxRateUpdateWithoutCountriesInput, FxRateUncheckedUpdateWithoutCountriesInput>
  }

  export type FxRateUpdateWithoutCountriesInput = {
    currencyCode?: StringFieldUpdateOperationsInput | string
    cbnRate?: FloatFieldUpdateOperationsInput | number
    parallelRate?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FxRateUncheckedUpdateWithoutCountriesInput = {
    currencyCode?: StringFieldUpdateOperationsInput | string
    cbnRate?: FloatFieldUpdateOperationsInput | number
    parallelRate?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTimelineUpsertWithWhereUniqueWithoutCountryInput = {
    where: UserTimelineWhereUniqueInput
    update: XOR<UserTimelineUpdateWithoutCountryInput, UserTimelineUncheckedUpdateWithoutCountryInput>
    create: XOR<UserTimelineCreateWithoutCountryInput, UserTimelineUncheckedCreateWithoutCountryInput>
  }

  export type UserTimelineUpdateWithWhereUniqueWithoutCountryInput = {
    where: UserTimelineWhereUniqueInput
    data: XOR<UserTimelineUpdateWithoutCountryInput, UserTimelineUncheckedUpdateWithoutCountryInput>
  }

  export type UserTimelineUpdateManyWithWhereWithoutCountryInput = {
    where: UserTimelineScalarWhereInput
    data: XOR<UserTimelineUpdateManyMutationInput, UserTimelineUncheckedUpdateManyWithoutCountryInput>
  }

  export type PofRuleCreateWithoutPurposeInput = {
    id?: string
    safeBufferMonths: number
    cautionBufferMonths: number
    riskyBufferMonths: number
    minAmountForeign: number
    requiresHistory?: boolean
    analysisText: string
    nigerianSpecific: string
    statementMonths?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutPofRulesInput
  }

  export type PofRuleUncheckedCreateWithoutPurposeInput = {
    id?: string
    countryId: string
    safeBufferMonths: number
    cautionBufferMonths: number
    riskyBufferMonths: number
    minAmountForeign: number
    requiresHistory?: boolean
    analysisText: string
    nigerianSpecific: string
    statementMonths?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PofRuleCreateOrConnectWithoutPurposeInput = {
    where: PofRuleWhereUniqueInput
    create: XOR<PofRuleCreateWithoutPurposeInput, PofRuleUncheckedCreateWithoutPurposeInput>
  }

  export type PofRuleCreateManyPurposeInputEnvelope = {
    data: PofRuleCreateManyPurposeInput | PofRuleCreateManyPurposeInput[]
    skipDuplicates?: boolean
  }

  export type UserTimelineCreateWithoutPurposeInput = {
    id?: string
    slug: string
    intakeDate: Date | string
    currentBalance: number
    targetAmount: number
    monthlyDeposit: number
    safeStartDate: Date | string
    cautionStartDate: Date | string
    riskyStartDate: Date | string
    currentStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTimelinesInput
    country: CountryCreateNestedOneWithoutTimelinesInput
  }

  export type UserTimelineUncheckedCreateWithoutPurposeInput = {
    id?: string
    userId: string
    countryId: string
    slug: string
    intakeDate: Date | string
    currentBalance: number
    targetAmount: number
    monthlyDeposit: number
    safeStartDate: Date | string
    cautionStartDate: Date | string
    riskyStartDate: Date | string
    currentStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTimelineCreateOrConnectWithoutPurposeInput = {
    where: UserTimelineWhereUniqueInput
    create: XOR<UserTimelineCreateWithoutPurposeInput, UserTimelineUncheckedCreateWithoutPurposeInput>
  }

  export type UserTimelineCreateManyPurposeInputEnvelope = {
    data: UserTimelineCreateManyPurposeInput | UserTimelineCreateManyPurposeInput[]
    skipDuplicates?: boolean
  }

  export type PofRuleUpsertWithWhereUniqueWithoutPurposeInput = {
    where: PofRuleWhereUniqueInput
    update: XOR<PofRuleUpdateWithoutPurposeInput, PofRuleUncheckedUpdateWithoutPurposeInput>
    create: XOR<PofRuleCreateWithoutPurposeInput, PofRuleUncheckedCreateWithoutPurposeInput>
  }

  export type PofRuleUpdateWithWhereUniqueWithoutPurposeInput = {
    where: PofRuleWhereUniqueInput
    data: XOR<PofRuleUpdateWithoutPurposeInput, PofRuleUncheckedUpdateWithoutPurposeInput>
  }

  export type PofRuleUpdateManyWithWhereWithoutPurposeInput = {
    where: PofRuleScalarWhereInput
    data: XOR<PofRuleUpdateManyMutationInput, PofRuleUncheckedUpdateManyWithoutPurposeInput>
  }

  export type UserTimelineUpsertWithWhereUniqueWithoutPurposeInput = {
    where: UserTimelineWhereUniqueInput
    update: XOR<UserTimelineUpdateWithoutPurposeInput, UserTimelineUncheckedUpdateWithoutPurposeInput>
    create: XOR<UserTimelineCreateWithoutPurposeInput, UserTimelineUncheckedCreateWithoutPurposeInput>
  }

  export type UserTimelineUpdateWithWhereUniqueWithoutPurposeInput = {
    where: UserTimelineWhereUniqueInput
    data: XOR<UserTimelineUpdateWithoutPurposeInput, UserTimelineUncheckedUpdateWithoutPurposeInput>
  }

  export type UserTimelineUpdateManyWithWhereWithoutPurposeInput = {
    where: UserTimelineScalarWhereInput
    data: XOR<UserTimelineUpdateManyMutationInput, UserTimelineUncheckedUpdateManyWithoutPurposeInput>
  }

  export type CountryCreateWithoutPofRulesInput = {
    id: string
    name: string
    isoCode: string
    flagEmoji: string
    isActive?: boolean
    studyIntake?: StudyIntakeCreateNestedManyWithoutCountryInput
    fxRates: FxRateCreateNestedOneWithoutCountriesInput
    timelines?: UserTimelineCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutPofRulesInput = {
    id: string
    name: string
    isoCode: string
    currencyCode: string
    flagEmoji: string
    isActive?: boolean
    studyIntake?: StudyIntakeUncheckedCreateNestedManyWithoutCountryInput
    timelines?: UserTimelineUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutPofRulesInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutPofRulesInput, CountryUncheckedCreateWithoutPofRulesInput>
  }

  export type VisaPurposeCreateWithoutPofRulesInput = {
    id: string
    name: string
    slug: string
    icon: string
    description?: string | null
    isActive?: boolean
    timelines?: UserTimelineCreateNestedManyWithoutPurposeInput
  }

  export type VisaPurposeUncheckedCreateWithoutPofRulesInput = {
    id: string
    name: string
    slug: string
    icon: string
    description?: string | null
    isActive?: boolean
    timelines?: UserTimelineUncheckedCreateNestedManyWithoutPurposeInput
  }

  export type VisaPurposeCreateOrConnectWithoutPofRulesInput = {
    where: VisaPurposeWhereUniqueInput
    create: XOR<VisaPurposeCreateWithoutPofRulesInput, VisaPurposeUncheckedCreateWithoutPofRulesInput>
  }

  export type CountryUpsertWithoutPofRulesInput = {
    update: XOR<CountryUpdateWithoutPofRulesInput, CountryUncheckedUpdateWithoutPofRulesInput>
    create: XOR<CountryCreateWithoutPofRulesInput, CountryUncheckedCreateWithoutPofRulesInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutPofRulesInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutPofRulesInput, CountryUncheckedUpdateWithoutPofRulesInput>
  }

  export type CountryUpdateWithoutPofRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
    flagEmoji?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    studyIntake?: StudyIntakeUpdateManyWithoutCountryNestedInput
    fxRates?: FxRateUpdateOneRequiredWithoutCountriesNestedInput
    timelines?: UserTimelineUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutPofRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    flagEmoji?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    studyIntake?: StudyIntakeUncheckedUpdateManyWithoutCountryNestedInput
    timelines?: UserTimelineUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type VisaPurposeUpsertWithoutPofRulesInput = {
    update: XOR<VisaPurposeUpdateWithoutPofRulesInput, VisaPurposeUncheckedUpdateWithoutPofRulesInput>
    create: XOR<VisaPurposeCreateWithoutPofRulesInput, VisaPurposeUncheckedCreateWithoutPofRulesInput>
    where?: VisaPurposeWhereInput
  }

  export type VisaPurposeUpdateToOneWithWhereWithoutPofRulesInput = {
    where?: VisaPurposeWhereInput
    data: XOR<VisaPurposeUpdateWithoutPofRulesInput, VisaPurposeUncheckedUpdateWithoutPofRulesInput>
  }

  export type VisaPurposeUpdateWithoutPofRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timelines?: UserTimelineUpdateManyWithoutPurposeNestedInput
  }

  export type VisaPurposeUncheckedUpdateWithoutPofRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timelines?: UserTimelineUncheckedUpdateManyWithoutPurposeNestedInput
  }

  export type CountryCreateWithoutStudyIntakeInput = {
    id: string
    name: string
    isoCode: string
    flagEmoji: string
    isActive?: boolean
    pofRules?: PofRuleCreateNestedManyWithoutCountryInput
    fxRates: FxRateCreateNestedOneWithoutCountriesInput
    timelines?: UserTimelineCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutStudyIntakeInput = {
    id: string
    name: string
    isoCode: string
    currencyCode: string
    flagEmoji: string
    isActive?: boolean
    pofRules?: PofRuleUncheckedCreateNestedManyWithoutCountryInput
    timelines?: UserTimelineUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutStudyIntakeInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutStudyIntakeInput, CountryUncheckedCreateWithoutStudyIntakeInput>
  }

  export type CountryUpsertWithoutStudyIntakeInput = {
    update: XOR<CountryUpdateWithoutStudyIntakeInput, CountryUncheckedUpdateWithoutStudyIntakeInput>
    create: XOR<CountryCreateWithoutStudyIntakeInput, CountryUncheckedCreateWithoutStudyIntakeInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutStudyIntakeInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutStudyIntakeInput, CountryUncheckedUpdateWithoutStudyIntakeInput>
  }

  export type CountryUpdateWithoutStudyIntakeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
    flagEmoji?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    pofRules?: PofRuleUpdateManyWithoutCountryNestedInput
    fxRates?: FxRateUpdateOneRequiredWithoutCountriesNestedInput
    timelines?: UserTimelineUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutStudyIntakeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    flagEmoji?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    pofRules?: PofRuleUncheckedUpdateManyWithoutCountryNestedInput
    timelines?: UserTimelineUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateWithoutFxRatesInput = {
    id: string
    name: string
    isoCode: string
    flagEmoji: string
    isActive?: boolean
    pofRules?: PofRuleCreateNestedManyWithoutCountryInput
    studyIntake?: StudyIntakeCreateNestedManyWithoutCountryInput
    timelines?: UserTimelineCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutFxRatesInput = {
    id: string
    name: string
    isoCode: string
    flagEmoji: string
    isActive?: boolean
    pofRules?: PofRuleUncheckedCreateNestedManyWithoutCountryInput
    studyIntake?: StudyIntakeUncheckedCreateNestedManyWithoutCountryInput
    timelines?: UserTimelineUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutFxRatesInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutFxRatesInput, CountryUncheckedCreateWithoutFxRatesInput>
  }

  export type CountryCreateManyFxRatesInputEnvelope = {
    data: CountryCreateManyFxRatesInput | CountryCreateManyFxRatesInput[]
    skipDuplicates?: boolean
  }

  export type CountryUpsertWithWhereUniqueWithoutFxRatesInput = {
    where: CountryWhereUniqueInput
    update: XOR<CountryUpdateWithoutFxRatesInput, CountryUncheckedUpdateWithoutFxRatesInput>
    create: XOR<CountryCreateWithoutFxRatesInput, CountryUncheckedCreateWithoutFxRatesInput>
  }

  export type CountryUpdateWithWhereUniqueWithoutFxRatesInput = {
    where: CountryWhereUniqueInput
    data: XOR<CountryUpdateWithoutFxRatesInput, CountryUncheckedUpdateWithoutFxRatesInput>
  }

  export type CountryUpdateManyWithWhereWithoutFxRatesInput = {
    where: CountryScalarWhereInput
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyWithoutFxRatesInput>
  }

  export type CountryScalarWhereInput = {
    AND?: CountryScalarWhereInput | CountryScalarWhereInput[]
    OR?: CountryScalarWhereInput[]
    NOT?: CountryScalarWhereInput | CountryScalarWhereInput[]
    id?: StringFilter<"Country"> | string
    name?: StringFilter<"Country"> | string
    isoCode?: StringFilter<"Country"> | string
    currencyCode?: StringFilter<"Country"> | string
    flagEmoji?: StringFilter<"Country"> | string
    isActive?: BoolFilter<"Country"> | boolean
  }

  export type UserCreateWithoutTimelinesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTimelinesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTimelinesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTimelinesInput, UserUncheckedCreateWithoutTimelinesInput>
  }

  export type CountryCreateWithoutTimelinesInput = {
    id: string
    name: string
    isoCode: string
    flagEmoji: string
    isActive?: boolean
    pofRules?: PofRuleCreateNestedManyWithoutCountryInput
    studyIntake?: StudyIntakeCreateNestedManyWithoutCountryInput
    fxRates: FxRateCreateNestedOneWithoutCountriesInput
  }

  export type CountryUncheckedCreateWithoutTimelinesInput = {
    id: string
    name: string
    isoCode: string
    currencyCode: string
    flagEmoji: string
    isActive?: boolean
    pofRules?: PofRuleUncheckedCreateNestedManyWithoutCountryInput
    studyIntake?: StudyIntakeUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutTimelinesInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutTimelinesInput, CountryUncheckedCreateWithoutTimelinesInput>
  }

  export type VisaPurposeCreateWithoutTimelinesInput = {
    id: string
    name: string
    slug: string
    icon: string
    description?: string | null
    isActive?: boolean
    pofRules?: PofRuleCreateNestedManyWithoutPurposeInput
  }

  export type VisaPurposeUncheckedCreateWithoutTimelinesInput = {
    id: string
    name: string
    slug: string
    icon: string
    description?: string | null
    isActive?: boolean
    pofRules?: PofRuleUncheckedCreateNestedManyWithoutPurposeInput
  }

  export type VisaPurposeCreateOrConnectWithoutTimelinesInput = {
    where: VisaPurposeWhereUniqueInput
    create: XOR<VisaPurposeCreateWithoutTimelinesInput, VisaPurposeUncheckedCreateWithoutTimelinesInput>
  }

  export type UserUpsertWithoutTimelinesInput = {
    update: XOR<UserUpdateWithoutTimelinesInput, UserUncheckedUpdateWithoutTimelinesInput>
    create: XOR<UserCreateWithoutTimelinesInput, UserUncheckedCreateWithoutTimelinesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTimelinesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTimelinesInput, UserUncheckedUpdateWithoutTimelinesInput>
  }

  export type UserUpdateWithoutTimelinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTimelinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CountryUpsertWithoutTimelinesInput = {
    update: XOR<CountryUpdateWithoutTimelinesInput, CountryUncheckedUpdateWithoutTimelinesInput>
    create: XOR<CountryCreateWithoutTimelinesInput, CountryUncheckedCreateWithoutTimelinesInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutTimelinesInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutTimelinesInput, CountryUncheckedUpdateWithoutTimelinesInput>
  }

  export type CountryUpdateWithoutTimelinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
    flagEmoji?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    pofRules?: PofRuleUpdateManyWithoutCountryNestedInput
    studyIntake?: StudyIntakeUpdateManyWithoutCountryNestedInput
    fxRates?: FxRateUpdateOneRequiredWithoutCountriesNestedInput
  }

  export type CountryUncheckedUpdateWithoutTimelinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    flagEmoji?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    pofRules?: PofRuleUncheckedUpdateManyWithoutCountryNestedInput
    studyIntake?: StudyIntakeUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type VisaPurposeUpsertWithoutTimelinesInput = {
    update: XOR<VisaPurposeUpdateWithoutTimelinesInput, VisaPurposeUncheckedUpdateWithoutTimelinesInput>
    create: XOR<VisaPurposeCreateWithoutTimelinesInput, VisaPurposeUncheckedCreateWithoutTimelinesInput>
    where?: VisaPurposeWhereInput
  }

  export type VisaPurposeUpdateToOneWithWhereWithoutTimelinesInput = {
    where?: VisaPurposeWhereInput
    data: XOR<VisaPurposeUpdateWithoutTimelinesInput, VisaPurposeUncheckedUpdateWithoutTimelinesInput>
  }

  export type VisaPurposeUpdateWithoutTimelinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    pofRules?: PofRuleUpdateManyWithoutPurposeNestedInput
  }

  export type VisaPurposeUncheckedUpdateWithoutTimelinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    pofRules?: PofRuleUncheckedUpdateManyWithoutPurposeNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type UserTimelineCreateManyUserInput = {
    id?: string
    countryId: string
    purposeId: string
    slug: string
    intakeDate: Date | string
    currentBalance: number
    targetAmount: number
    monthlyDeposit: number
    safeStartDate: Date | string
    cautionStartDate: Date | string
    riskyStartDate: Date | string
    currentStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTimelineUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    intakeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentBalance?: FloatFieldUpdateOperationsInput | number
    targetAmount?: FloatFieldUpdateOperationsInput | number
    monthlyDeposit?: FloatFieldUpdateOperationsInput | number
    safeStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cautionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    riskyStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutTimelinesNestedInput
    purpose?: VisaPurposeUpdateOneRequiredWithoutTimelinesNestedInput
  }

  export type UserTimelineUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    purposeId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    intakeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentBalance?: FloatFieldUpdateOperationsInput | number
    targetAmount?: FloatFieldUpdateOperationsInput | number
    monthlyDeposit?: FloatFieldUpdateOperationsInput | number
    safeStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cautionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    riskyStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTimelineUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    purposeId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    intakeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentBalance?: FloatFieldUpdateOperationsInput | number
    targetAmount?: FloatFieldUpdateOperationsInput | number
    monthlyDeposit?: FloatFieldUpdateOperationsInput | number
    safeStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cautionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    riskyStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PofRuleCreateManyCountryInput = {
    id?: string
    purposeId: string
    safeBufferMonths: number
    cautionBufferMonths: number
    riskyBufferMonths: number
    minAmountForeign: number
    requiresHistory?: boolean
    analysisText: string
    nigerianSpecific: string
    statementMonths?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudyIntakeCreateManyCountryInput = {
    id?: string
    intakeMonth: number
    intakeName: string
    isMainIntake?: boolean
  }

  export type UserTimelineCreateManyCountryInput = {
    id?: string
    userId: string
    purposeId: string
    slug: string
    intakeDate: Date | string
    currentBalance: number
    targetAmount: number
    monthlyDeposit: number
    safeStartDate: Date | string
    cautionStartDate: Date | string
    riskyStartDate: Date | string
    currentStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PofRuleUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    safeBufferMonths?: IntFieldUpdateOperationsInput | number
    cautionBufferMonths?: IntFieldUpdateOperationsInput | number
    riskyBufferMonths?: IntFieldUpdateOperationsInput | number
    minAmountForeign?: FloatFieldUpdateOperationsInput | number
    requiresHistory?: BoolFieldUpdateOperationsInput | boolean
    analysisText?: StringFieldUpdateOperationsInput | string
    nigerianSpecific?: StringFieldUpdateOperationsInput | string
    statementMonths?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purpose?: VisaPurposeUpdateOneRequiredWithoutPofRulesNestedInput
  }

  export type PofRuleUncheckedUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    purposeId?: StringFieldUpdateOperationsInput | string
    safeBufferMonths?: IntFieldUpdateOperationsInput | number
    cautionBufferMonths?: IntFieldUpdateOperationsInput | number
    riskyBufferMonths?: IntFieldUpdateOperationsInput | number
    minAmountForeign?: FloatFieldUpdateOperationsInput | number
    requiresHistory?: BoolFieldUpdateOperationsInput | boolean
    analysisText?: StringFieldUpdateOperationsInput | string
    nigerianSpecific?: StringFieldUpdateOperationsInput | string
    statementMonths?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PofRuleUncheckedUpdateManyWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    purposeId?: StringFieldUpdateOperationsInput | string
    safeBufferMonths?: IntFieldUpdateOperationsInput | number
    cautionBufferMonths?: IntFieldUpdateOperationsInput | number
    riskyBufferMonths?: IntFieldUpdateOperationsInput | number
    minAmountForeign?: FloatFieldUpdateOperationsInput | number
    requiresHistory?: BoolFieldUpdateOperationsInput | boolean
    analysisText?: StringFieldUpdateOperationsInput | string
    nigerianSpecific?: StringFieldUpdateOperationsInput | string
    statementMonths?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyIntakeUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    intakeMonth?: IntFieldUpdateOperationsInput | number
    intakeName?: StringFieldUpdateOperationsInput | string
    isMainIntake?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudyIntakeUncheckedUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    intakeMonth?: IntFieldUpdateOperationsInput | number
    intakeName?: StringFieldUpdateOperationsInput | string
    isMainIntake?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudyIntakeUncheckedUpdateManyWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    intakeMonth?: IntFieldUpdateOperationsInput | number
    intakeName?: StringFieldUpdateOperationsInput | string
    isMainIntake?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserTimelineUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    intakeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentBalance?: FloatFieldUpdateOperationsInput | number
    targetAmount?: FloatFieldUpdateOperationsInput | number
    monthlyDeposit?: FloatFieldUpdateOperationsInput | number
    safeStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cautionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    riskyStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTimelinesNestedInput
    purpose?: VisaPurposeUpdateOneRequiredWithoutTimelinesNestedInput
  }

  export type UserTimelineUncheckedUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    purposeId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    intakeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentBalance?: FloatFieldUpdateOperationsInput | number
    targetAmount?: FloatFieldUpdateOperationsInput | number
    monthlyDeposit?: FloatFieldUpdateOperationsInput | number
    safeStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cautionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    riskyStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTimelineUncheckedUpdateManyWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    purposeId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    intakeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentBalance?: FloatFieldUpdateOperationsInput | number
    targetAmount?: FloatFieldUpdateOperationsInput | number
    monthlyDeposit?: FloatFieldUpdateOperationsInput | number
    safeStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cautionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    riskyStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PofRuleCreateManyPurposeInput = {
    id?: string
    countryId: string
    safeBufferMonths: number
    cautionBufferMonths: number
    riskyBufferMonths: number
    minAmountForeign: number
    requiresHistory?: boolean
    analysisText: string
    nigerianSpecific: string
    statementMonths?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTimelineCreateManyPurposeInput = {
    id?: string
    userId: string
    countryId: string
    slug: string
    intakeDate: Date | string
    currentBalance: number
    targetAmount: number
    monthlyDeposit: number
    safeStartDate: Date | string
    cautionStartDate: Date | string
    riskyStartDate: Date | string
    currentStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PofRuleUpdateWithoutPurposeInput = {
    id?: StringFieldUpdateOperationsInput | string
    safeBufferMonths?: IntFieldUpdateOperationsInput | number
    cautionBufferMonths?: IntFieldUpdateOperationsInput | number
    riskyBufferMonths?: IntFieldUpdateOperationsInput | number
    minAmountForeign?: FloatFieldUpdateOperationsInput | number
    requiresHistory?: BoolFieldUpdateOperationsInput | boolean
    analysisText?: StringFieldUpdateOperationsInput | string
    nigerianSpecific?: StringFieldUpdateOperationsInput | string
    statementMonths?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutPofRulesNestedInput
  }

  export type PofRuleUncheckedUpdateWithoutPurposeInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    safeBufferMonths?: IntFieldUpdateOperationsInput | number
    cautionBufferMonths?: IntFieldUpdateOperationsInput | number
    riskyBufferMonths?: IntFieldUpdateOperationsInput | number
    minAmountForeign?: FloatFieldUpdateOperationsInput | number
    requiresHistory?: BoolFieldUpdateOperationsInput | boolean
    analysisText?: StringFieldUpdateOperationsInput | string
    nigerianSpecific?: StringFieldUpdateOperationsInput | string
    statementMonths?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PofRuleUncheckedUpdateManyWithoutPurposeInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    safeBufferMonths?: IntFieldUpdateOperationsInput | number
    cautionBufferMonths?: IntFieldUpdateOperationsInput | number
    riskyBufferMonths?: IntFieldUpdateOperationsInput | number
    minAmountForeign?: FloatFieldUpdateOperationsInput | number
    requiresHistory?: BoolFieldUpdateOperationsInput | boolean
    analysisText?: StringFieldUpdateOperationsInput | string
    nigerianSpecific?: StringFieldUpdateOperationsInput | string
    statementMonths?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTimelineUpdateWithoutPurposeInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    intakeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentBalance?: FloatFieldUpdateOperationsInput | number
    targetAmount?: FloatFieldUpdateOperationsInput | number
    monthlyDeposit?: FloatFieldUpdateOperationsInput | number
    safeStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cautionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    riskyStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTimelinesNestedInput
    country?: CountryUpdateOneRequiredWithoutTimelinesNestedInput
  }

  export type UserTimelineUncheckedUpdateWithoutPurposeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    intakeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentBalance?: FloatFieldUpdateOperationsInput | number
    targetAmount?: FloatFieldUpdateOperationsInput | number
    monthlyDeposit?: FloatFieldUpdateOperationsInput | number
    safeStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cautionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    riskyStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTimelineUncheckedUpdateManyWithoutPurposeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    intakeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentBalance?: FloatFieldUpdateOperationsInput | number
    targetAmount?: FloatFieldUpdateOperationsInput | number
    monthlyDeposit?: FloatFieldUpdateOperationsInput | number
    safeStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cautionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    riskyStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryCreateManyFxRatesInput = {
    id: string
    name: string
    isoCode: string
    flagEmoji: string
    isActive?: boolean
  }

  export type CountryUpdateWithoutFxRatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
    flagEmoji?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    pofRules?: PofRuleUpdateManyWithoutCountryNestedInput
    studyIntake?: StudyIntakeUpdateManyWithoutCountryNestedInput
    timelines?: UserTimelineUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutFxRatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
    flagEmoji?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    pofRules?: PofRuleUncheckedUpdateManyWithoutCountryNestedInput
    studyIntake?: StudyIntakeUncheckedUpdateManyWithoutCountryNestedInput
    timelines?: UserTimelineUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateManyWithoutFxRatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
    flagEmoji?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
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