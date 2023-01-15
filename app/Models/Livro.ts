import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Estoque from './Estoque'

export default class Livro extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasMany(()=> Estoque)
  public estoque:HasMany<typeof Estoque>

  @column()
  public nome:string

  @column()
  public autor_id:number

  @column()
  public genero_id:number


  @column()
  public quantidade:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
