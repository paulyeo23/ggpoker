const initDeckModel = (sequelize, DataTypes) => {
  return sequelize.define("deck", {
    roundid: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "tableinfo",
        key: "roundid",
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
module.exports = initDeckModel;
