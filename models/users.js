const initUsersModel = (sequelize, DataTypes) => {
  return sequelize.define("users", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    username: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    password: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    accountValue: {
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

module.exports = initUsersModel;