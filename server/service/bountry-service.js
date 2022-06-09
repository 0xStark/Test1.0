const Bountry = require('../schema/bountry')

exports.getBountryById = async (id) => {
    let obj = await Bountry.findByPk(id)
    return obj
}
exports.getBountries = async ({offset,limit}) => {
    let list = await Bountry.findAll({ where: { del_flag: 0 },offset,limit });
    return list
}