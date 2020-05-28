import { Context } from 'koa';
export declare type AccessMode = 'online' | 'offline';
export interface AuthConfig {
    secret: string;
    apiKey: string;
    myShopifyDomain?: string;
    accessMode?: 'online' | 'offline';
    afterAuth?(ctx: Context): void;
}
export interface OAuthStartOptions extends AuthConfig {
    redirectHost?: string;
    prefix?: string;
    scopes?: string[];
}
export interface NextFunction {
    (): any;
}
//# sourceMappingURL=types.d.ts.map