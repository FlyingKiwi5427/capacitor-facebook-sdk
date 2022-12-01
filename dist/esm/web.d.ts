import { WebPlugin } from '@capacitor/core';
import type { FacebookLoginPlugin, FacebookLoginResponse, FacebookCurrentAccessTokenResponse, FacebookConfiguration } from './definitions';
declare global {
    interface Window {
        fbAsyncInit: Function;
    }
}
export declare class FacebookLoginWeb extends WebPlugin implements FacebookLoginPlugin {
    constructor();
    initialize(options: Partial<FacebookConfiguration>): Promise<void>;
    private loadScript;
    logEvent(options: {
        eventName: string;
    }): Promise<void>;
    login(options: {
        permissions: string[];
    }): Promise<FacebookLoginResponse>;
    logout(): Promise<void>;
    reauthorize(): Promise<FacebookLoginResponse>;
    getCurrentAccessToken(): Promise<FacebookCurrentAccessTokenResponse>;
    getProfile<T extends object>(options: {
        fields: readonly string[];
    }): Promise<T>;
}
