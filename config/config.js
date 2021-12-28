module.exports = {
  development: {
    username: process.env.UNAME,
    password: "",
    database: process.env.DB,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};
