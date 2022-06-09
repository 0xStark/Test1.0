
const bountryService = require('../service/bountry-service')

exports.getBountries = async ctx => {
    console.log(ctx.request.body);
    let offset = ctx.request.body.offset?ctx.request.body.offset:0
    let limit = ctx.request.body.offset?ctx.request.body.limit:20
    const bountries = await bountryService.getBountries({offset,limit});
    ctx.body = { code: 2000, data:  bountries, msg: 'success'};
}