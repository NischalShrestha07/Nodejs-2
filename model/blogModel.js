module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define("blog", {
    // blog ko blogs vanera banxa hai phpAdmin ma
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    school: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true
    }



  });
  return Blog;
};