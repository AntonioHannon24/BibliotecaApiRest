import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Usuario from 'App/Models/Usuario';

export default class UsuariosController {

  public async store({request,response}:HttpContextContract){
    const body = request.body(); // pegando os valores do body
        const usuario = await Usuario.create(body)
        response.status(201)
        return{
            message:"Usuário cadastrado com sucesso!!",
            data: usuario
        }
}

public async index(){
    const usuarios = await Usuario.query()
    return{
        data:usuarios
    }
}
public async show({params,bouncer}:HttpContextContract){
    const usuario = await Usuario.findOrFail(params.id)
    await bouncer.authorize('getEditRequests',params)

    return{
        data:usuario
    }

  

}

public async destroy({params,bouncer}:HttpContextContract){
    
    const usuario = await Usuario.findOrFail(params.id)
    await bouncer.authorize('getEditRequests',params)
    await usuario.delete()
    return{
        message:"Usuário Deletado Com Sucesso!!",
        data:usuario
    }
}

public async update({params,request,bouncer}:HttpContextContract){

    const body = request.body()

        const usuario = await Usuario.findOrFail(params.id)
        await bouncer.authorize('getEditRequests',params)
        usuario.email = body.email
        usuario.nome = body.nome
        usuario.role_id = body.role_id
        usuario.password = body.password
        await usuario.save()
        return{
            message:"Usuário Atualizado Com Sucesso!",
            data: usuario
        }

}
}
