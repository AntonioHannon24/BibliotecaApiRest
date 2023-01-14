import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Estoque from 'App/Models/Estoque';

export default class EstoquesController {

  public async store({request,response}:HttpContextContract){
    const body = request.body(); // pegando os valores do body
        const genero = await Estoque.create(body)
        response.status(201)
        return{
            message:"Produto cadastrado com sucesso!!",
            data: genero
        }
}    
public async index(){
    const genero = await Estoque.query()
    return{
        data:genero
    }
}

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
