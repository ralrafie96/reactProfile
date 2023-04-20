/* eslint-disable no-unused-vars */
declare namespace NodeJS {
    export interface ProcessEnv {
        REACT_APP_SERVICE_ID: string;
        REACT_APP_TEMPLATE_ID: string;
        REACT_APP_PUBLIC_KEY: string;
        REACT_APP_SECRET_PASS: string;
        NODE_ENV: "development" | "production" | "test";
        PORT?: string;
        PWD: string;
    }
}