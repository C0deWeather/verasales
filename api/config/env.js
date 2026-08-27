const config = {
    port: Number(process.env.PORT),
    jwtSecret: process.env.JWT_SECRET
};

if (!config.port) {
    throw new Error("missing or invalid port number");
}

if (!config.jwtSecret) {
    throw new Error("missing JWT_SECRET");
} else if (typeof config.jwtSecret !== String) {
    throw new Error("secret must be a string");
} else if (config.jwtSecret.length < 32) {
    throw new Error("secret must be at least 32 char long");
}

export default config;

