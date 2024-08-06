import type { TurboModule } from "react-native";
export declare type NativeConfigureOptions = {
    dailyRolling: boolean;
    maximumFileSize: number;
    maximumNumberOfFiles: number;
    logsDirectory?: string;
};
export declare type SendByEmailOptions = {
    to?: string[];
    subject?: string;
    body?: string;
};
export interface Spec extends TurboModule {
    configure(options: NativeConfigureOptions): Promise<void>;
    write(level: number, msg: string): void;
    getLogFilePaths(): Promise<string[]>;
    deleteLogFiles(): Promise<void>;
    sendLogFilesByEmail(options: SendByEmailOptions): Promise<void>;
}
declare const _default: Spec;
export default _default;
