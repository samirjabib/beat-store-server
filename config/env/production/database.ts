const { parse } = require("pg-connection-string");
const config = parse(process.env.DATABASE_URL);


module.exports = ({ env }) => {
  const { host, port, database, user, password  } = parse(env("DATABASE_URL"));
  
  return {
    connection: {
      client: 'postgres',
      connection: {
        host,
        port,
        database,
        user,
        password,
        ssl: { rejectUnauthorized: false },
      },
      debug: false,
    },
  }
};
