const sequelizePackage = require("sequelize");
const allConfig = require("../config/config");

const initUsersModel = require("./users");
const initDeckModel = require("./deck");
const initPlayerHandModel = require("./playerHand");
const initTablePlayerModel = require("./tablePlayer");
const initTableInfoModel = require("./tableInfo");
const initTransactionsModel = require("./transactions");
const initTablesModel = require("./tables");

const { Sequelize } = sequelizePackage;
const env = "development";
const config = allConfig[env];

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

db.Users = initUsersModel(sequelize, Sequelize.DataTypes);
db.DeckModel = initDeckModel(sequelize, Sequelize.DataTypes);
db.PlayerHandModel = initPlayerHandModel(sequelize, Sequelize.DataTypes);
db.TablePlayerModel = initTablePlayerModel(sequelize, Sequelize.DataTypes);
db.TableInfoModel = initTableInfoModel(sequelize, Sequelize.DataTypes);
db.TransactionsModel = initTransactionsModel(sequelize, Sequelize.DataTypes);
db.TablesModel = initTablesModel(sequelize, Sequelize.DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
