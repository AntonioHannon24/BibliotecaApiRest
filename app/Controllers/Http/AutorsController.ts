import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

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
    
        return{
            data:autor
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
