const initTablePlayerModel = (sequelize, DataTypes) => {
  return sequelize.define("tablePlayer", {
    handid: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    roundid: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "tableinfo",
        key: "roundid",
      },
    },
    userid: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
    deck: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    deckPosition: {
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
module.exports = initTablePlayerModel;
