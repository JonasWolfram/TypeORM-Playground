import { createConnection } from "typeorm";
import { Client } from "./entities/Client";
import { Banker } from "./entities/Banker";
import { Transaction } from "./entities/Transaction";

const main = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "jonaswolfram",
      password: undefined,
      database: "typeorm-database",
      entities: [Client, Banker, Transaction],
      synchronize: true,
    });
    console.log(`success-> Connected to Postgres-Database`);
  } catch (error) {
    console.error(error);
    throw new Error("-> An Error has occured while connecting to Postgres");
  }
};
main();
