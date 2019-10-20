export class Utility {

    public static readonly DEVELOPMENT = "development";

    static isDevelopment() {
        return process.env.NODE_ENV && process.env.NODE_ENV === Utility.DEVELOPMENT;
    }
}