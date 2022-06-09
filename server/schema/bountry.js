const Sequelize = require('sequelize')
const sequelize = require('./db.js')
// const uuid = require('uuid')

const Model = Sequelize.Model;
class Bountry extends Model { }

Bountry.init({
    // id: {
    //     type: Sequelize.INTEGER,
    //     autoIncrement: true,
    //     primaryKey: true
    // },
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4, // id为空时，使用uuid自动生成主键
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    contract: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    startTime: {
        type: Sequelize.TIME,
        allowNull: false,
        field: 'start_time'
    },
    endTime: {
        type: Sequelize.TIME,
        allowNull: false,
        field: 'end_time'
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    requesting: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.fn('NOW'),
        field: 'created_at'
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.fn('NOW'),
        field: 'updated_at'
    },
    delFlag: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'del_flag',
        defaultValue: 0
    }
}, {
        sequelize,
        modelName: 'bountry',
        createdAt: false,
        updatedAt: false
    })

Bountry.sync().then(() => { console.log('== Table: Bountry init!') }); //初始化数据库，如果表不存在则自动创建

module.exports = Bountry