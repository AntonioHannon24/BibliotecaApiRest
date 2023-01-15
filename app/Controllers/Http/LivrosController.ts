import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Livro from 'App/Models/Livro';

export default class LivrosController {


    public async store({request,response}:HttpContextContract){
        const body = request.body(); // pegando os valores do body
            const livro = await Livro.create(body)
            response.status(201)
            return{
                message:"Livro cadastrado com sucesso!!",
                data: livro
            }
    }    
    public async index(){
        const livro = await Livro.query().preload('estoque')
        return{
            data:livro
        }
    }
    public async show({params}:HttpContextContract){
        const livro = await Livro.findOrFail(params.id)
        await livro.load('estoque')
    
        return{
            data:livro
        }
    }
    public async destroy({params}:HttpContextContract){   
        const livro = await Livro.findOrFail(params.id)
        await livro.delete()
        return{
            message:"Livro Deletado Com Sucesso!!",
            data:livro
        }
    }    
    public async update({params,request}:HttpContextContract){
        const body = request.body()
            const livro = await Livro.findOrFail(params.id)
                        
            livro.nome = body.nome
            livro.autor_id = body.autor_id
            livro.genero_id = body.genero_id

            await livro.save()
            return{
                message:"Livro Atualizado Com Sucesso!",
                data: livro
            }
    }
}
