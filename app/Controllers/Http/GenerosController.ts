import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import Genero from 'App/Models/Genero';


export default class GenerosController {

    public async store({request,response}:HttpContextContract){
        const body = request.body(); // pegando os valores do body
            const genero = await Genero.create(body)
            response.status(201)
            return{
                message:"Genero cadastrado com sucesso!!",
                data: genero
            }
    }    
    public async index(){
        const genero = await Genero.query()
        return{
            data:genero
        }
    }
    public async show({params}:HttpContextContract){
        const genero = await Genero.findOrFail(params.id)  
        const quantidade = await Database.rawQuery("SELECT COUNT(*) from livros l WHERE genero_id = ?",params.id)

        return{
            data:(Object.assign({},genero.$attributes,quantidade['0']['0'])),
        }
    }
    public async destroy({params}:HttpContextContract){   
        const genero = await Genero.findOrFail(params.id)
        await genero.delete()
        return{
            message:"Genero Deletado Com Sucesso!!",
            data:genero
        }
    }    
    public async update({params,request}:HttpContextContract){
        const body = request.body()
            const genero = await Genero.findOrFail(params.id)
            genero.nome = body.nome
            await genero.save()
            return{
                message:"Genero Atualizado Com Sucesso!",
                data: genero
            }
    }
}
