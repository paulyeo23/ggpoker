const initTransactionsModel = (sequelize, DataTypes) => {
  return sequelize.define("transactions", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
    assets: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    liability: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    equity: {
      allowNull: false,
      primaryKey: true,
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

module.exports = initTransactionsModel;