module.exports = ({ env }) => ({
	defaultConnection: "default",
	connections: {
		default: {
			connector: "bookshelf",
			settings:
				process.env.NODE_ENV === "production"
					? {
							client: "postgres",
							host: env("DATABASE_HOST"),
							port: env("DATABASE_PORT"),
							database: env("DATABASE_NAME"),
							username: env("DATABASE_USERNAME"),
							password: env("DATABASE_PASSWORD"),
							ssl: true,
					  }
					: {
							client: "sqlite",
							filename: env("DATABASE_FILENAME", ".tmp/data.db"),
					  },
			options: {
				useNullAsDefault: true,
			},
		},
	},
});
