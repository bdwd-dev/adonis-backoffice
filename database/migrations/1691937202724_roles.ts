import { QueryClientContract } from '@ioc:Adonis/Lucid/Database'
import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { RoleType } from 'App/Enums/Role'

export default class extends BaseSchema {
  protected tableName = 'roles'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 50).notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })

    this.defer(async () => {
      await this.db.table(this.tableName).multiInsert([
        { name: RoleType.ADMIN },
        { name: RoleType.USER }
      ])
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
