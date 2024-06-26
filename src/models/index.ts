import sequelize from '../config/database';
import Event from './event';

const syncDatabase = async () => {
    await sequelize.sync({ alter: true });
    console.log('Database synchronized');
};

export { sequelize, syncDatabase, Event };
