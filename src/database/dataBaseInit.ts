import { DatabaseConnection } from "./databaseConnection";

var db = null;
export default class DatabaseInit {
  constructor() {
    db = DatabaseConnection.getConnection();
    db.exec([{ sql: "PRAGMA foreign_keys = ON;", args: [] }], false, () =>
      console.log("Foreign keys turned on")
    );
    this.InitDb();
  }
  private InitDb() {
    // var sql = [
    //   `DROP TABLE IF EXISTS animal;`,
    //   `DROP TABLE IF EXISTS cachorro;`,

    //   `create table if not exists animal (
    //         id integer primary key autoincrement,
    //         nome text,

    //         );`,

    //   `create table if not exists cachorro (
    //         id integer primary key autoincrement,
    //         nome text,
    //         animal_id int,
    //         foreign key (animal_id) references animal (id)
    //         );`,

    //   `insert into cachorro (nome) values('vira lata');`,
    //   `insert into cachorro (nome) values('salsicha');`,
    // ];

    db.transaction(
      (tx) => {
        tx.executeSql(`create table if not exists animal (
            id integer primary key autoincrement,
            nome text,
            )`);
      },
      (error) => {
        console.log("error call back : " + JSON.stringify(error));
        console.log(error);
      },
      () => {
        console.log("transaction complete call back ");
      }
    );
  }
}
