export type ConfigurationType = ReturnType<typeof getSettings>;
declare const getSettings: () => {
    MONGO_DB: string;
    DB_NAME: string;
    JWT_ACCESS_SECRET: string;
    JWT_REFRESH_SECRET: string;
};
export default getSettings;
