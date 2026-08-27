const config = {
	port: Number(process.env.PORT),
	jwtSecret: process.env.JWT_SECRET
};

if (!config.port) {
	throw new Error("PORT is required");
}

if (!config.jwtSecret) {
	throw new Error("JWT_SECRET is required");
}

export default config;

