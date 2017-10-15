const knex = require("../connection/db")

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
