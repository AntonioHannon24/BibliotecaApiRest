import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Estoque extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public livro_id:number

  
  @column()
  public livro:number

  @column()
  public quantidade:number

  @column()
  public valor:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
