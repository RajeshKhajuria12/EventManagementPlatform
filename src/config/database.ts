import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('event_db', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

export default sequelize;
