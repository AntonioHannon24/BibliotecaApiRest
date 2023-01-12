import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Livro from './Livro'

export default class Genero extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasMany(()=> Livro)
  public estabelecimentos:HasMany<typeof Livro>

  @column()
  public nome:string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
