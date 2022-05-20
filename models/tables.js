const initTablesModel = (sequelize, DataTypes) => {
  return sequelize.define("tables", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    maxPlayer: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    blinds: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    timeLimit: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    openClose: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
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

module.exports = initTablesModel;
