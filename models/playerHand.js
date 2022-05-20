const initPlayerHandModel = (sequelize, DataTypes) => {
  return sequelize.define("playerHand", {
    handid: {
      allowNull: false,
      references: {
        model: "tablePlayer",
        key: "handid",
      },
      type: DataTypes.INTEGER,
    },
    card: {
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
module.exports = initPlayerHandModel;
