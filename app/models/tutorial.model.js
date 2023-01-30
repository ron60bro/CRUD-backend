module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      }
    });
  
    return Tutorial;
  };