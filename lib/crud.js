// CRUD.js
import mysql from "mysql2/promise";

let env = "dev";

export async function insertRecord(table, data) {
  dbConnection.execute("INSERT INTO `users`(`id`, `role`, `name`, `username`, `email`, `password`, `TimeStamp`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]','[value-7]')");

  try {
    // await dbConnection.beginTransaction();
    // Insert logic using dbConnection object
    await dbConnection.execute("INSERT INTO `users`(`id`, `role`, `name`, `username`, `email`, `password`, `TimeStamp`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]','[value-7]')");
    // await dbConnection.commit();
    return true;
  } catch (error) {    
    throw new Error("Something Happened", error.message);
  }
}

export async function updateRecord(table, data, id ) {

  console.log("table",table)
  console.log("data",data)
  console.log("id",id)
  const dbConnection = await getDbConnection();
  await dbConnection.execute(`UPDATE ${table} SET ?  WHERE id = ?`, [
    table,
    data,
    id,
  ]);
  // dbConnection.commit();
  return true;
  // try {
  //   // dbConnection.beginTransaction();
  //   // Update logic using dbConnection object
  //   await dbConnection.execute("UPDATE ? SET ?  WHERE id = ?", [
  //     table,
  //     data,
  //     id,
  //   ]);
  //   // dbConnection.commit();
  //   return true;
  // } catch (error) {
  //   dbConnection.rollback();
  //   throw new Error("Something Happened", error.message);
  // }
}

export async function deleteRecord({ table, id }) {
  const dbConnection = await getDbConnection();
  try {
    await dbConnection.beginTransaction();
    // Delete logic using dbConnection object
    await dbConnection.execute("DELETE FROM ?? WHERE id = ?", [table, id]);
    await dbConnection.commit();
    return true;
  } catch (error) {
    await dbConnection.rollback();
    throw new Error("Something Happened", error.message);
  }
}

export async function getRecordById({ table, id }) {
  const dbConnection = await getDbConnection();
  try {
    const [rows] = await dbConnection.execute("SELECT * FROM ?? WHERE id = ?", [
      table,
      id,
    ]);
    return rows[0];
  } catch (error) {
    throw new Error("Something Happened", error.message);
  }
}

export async function getAllRecords({ table }) {
  const dbConnection = await getDbConnection();
  try {
    const [rows] = await dbConnection.execute("SELECT * FROM ??", [table]);
    return rows;
  } catch (error) {
    throw new Error("Something Happened", error.message);
  }
}

async function dbConnection() {
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
  return dbConnection;
}
