const initTableInfoModel = (sequelize, DataTypes) => {
  return sequelize.define("tableInfo", {
    roundid: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    tableid: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "tables",
        key: "id",
      },
    },
    dealerPosition: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    flop1: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    flop2: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    flop3: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    turn: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    river: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: "TIMESTAMP",
      defaultValue: DataTypes.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
    updatedAt: {
      type: "TIMESTAMP",
      defaultValue: DataTypes.literal(
        "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
      ),
      allowNull: false,
    },
  });
};
module.exports = initTableInfoModel;
