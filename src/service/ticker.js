const knex = require("../connection/db.js")

/**
 * Insert Ticker into db
 **/
async function insertTick(tick) {
    const count = await knex("posts").select().where({
        deleted: false,
    }).count('id')
    console.log("Array: " + count[0].count)
    return count[0].count
}



module.exports = {
    insertTick,
}
