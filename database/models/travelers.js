const Sequelize = require('sequelize');
const db = require('../db');

export const Traveler = db.define('traveler', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  nationality: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  connectivity: {
    type: Sequelize.BOOLEAN
  },
  secondaryContactPhone: {
    type: Sequelize.STRING
  },
  secondaryContactName: {
    type: Sequelize.STRING
  },
  secondaryContactRelation: {
    type: Sequelize.STRING
  },
  requireInterpreter: {
    type: Sequelize.BOOLEAN
  },
  preferredLanguage: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.ENUM,
    values: ['transit', 'unconfirmed', 'detained', 'at risk', 'cleared'],
    defaultValue: 'transit'
  },
}, {
  classMethods: {
    setToAtRisk: function() {
      Traveler.update(
        { status: 'at risk' },
        { where: { status: 'unconfirmed' }, returning: true }
      )
      .spread((count, travelers) => travelers)
      .catch(err => console.error(err));
    },

  }
});

