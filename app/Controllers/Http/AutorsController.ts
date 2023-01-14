import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';

import Autor from "App/Models/Autor";

export default class AutorsController {

    public async store({request,response}:HttpContextContract){
        const body = request.body(); // pegando os valores do body
            const autor = await Autor.create(body)
            response.status(201)
            return{
                message:"Autor cadastrado com sucesso!!",
                data: autor
            }
    }    
    public async index(){
        const autor = await Autor.query()
        return{
            data:autor
        }
    }
    public async show({params}:HttpContextContract){
        const autor = await Autor.findOrFail(params.id)
        const quantidade = await Database.rawQuery("SELECT COUNT(*) from livros l WHERE autor_id = ?",params.id)
    
        return{
            data:(Object.assign({},autor.$attributes,quantidade['0']['0'])),
        }
    }
    public async destroy({params}:HttpContextContract){   
        const autor = await Autor.findOrFail(params.id)
        await autor.delete()
        return{
            message:"Autor Deletado Com Sucesso!!",
            data:autor
        }
    }    
    public async update({params,request}:HttpContextContract){
        const body = request.body()
            const autor = await Autor.findOrFail(params.id)
            autor.nome = body.nome
            await autor.save()
            return{
                message:"Autor Atualizado Com Sucesso!",
                data: autor
            }
    }
}
