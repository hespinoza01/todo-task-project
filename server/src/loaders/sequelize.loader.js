/**
 * sync sequelize models with database
 * @param {Sequelize} sequelizeInstance
 */
export default async function (sequelizeInstance) {
    if (!sequelizeInstance || !sequelizeInstance.sync) {
        return
    }

    sequelizeInstance.sync()

    return sequelizeInstance
}
