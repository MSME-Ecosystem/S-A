import mysql from "mysql2/promise";
let env = "dev";

export async function dbquery({ query, values = [] }) {
  const dbConnection = await mysql.createConnection({
    host:
      env == "dev" ? process.env.MYSQL_HOST_DEV : process.env.MYSQL_HOST_PROD,
    user:
      env == "dev" ? process.env.MYSQL_USER_DEV : process.env.MYSQL_USER_PROD,
    port:
      env == "dev" ? process.env.MYSQL_PORT_DEV : process.env.MYSQL_PORT_PROD,
    database:
      env == "dev"
        ? process.env.MYSQL_DATABASE_DEV
        : process.env.MYSQL_DATABASE_PROD,
    password:
      env == "dev"
        ? process.env.MYSQL_PASSWORD_DEV
        : process.env.MYSQL_PASSWORD_PROD,
  });

  const [result] = await dbConnection.execute(query, values);
  return result;
  /* try {
    const [rows, fields] = await dbConnection.execute(query, values);

    dbConnection.end();
    console.log(rows);
    return rows;
  } catch (error) {
    throw new Error("Server Error", error.message);
  } */
}
