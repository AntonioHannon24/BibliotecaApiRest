import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Estoque from 'App/Models/Estoque';

export default class EstoquesController {
 
  public async decrementEstoque({params}){
    
    const estoque = await Estoque.findOrFail(params.id)
    const quantidade = estoque.$attributes.quantidade
    if(quantidade != 0){
      estoque.quantidade--;
      await estoque.save();
      return{
        message:"Venda efetuada com sucesso!!"
      }
    }else{
      return{
        message:"Você não tem estoque desse produto para efetuar a venda!!"
      }
    }
    
  }
  public async update({params,request}:HttpContextContract){
    const body = request.body()
        const estoque = await Estoque.findOrFail(params.id)
                    
        estoque.quantidade = body.quantidade
        estoque.valor= body.valor

        await estoque.save()
        return{
            message:"Informações de estoque atualizadas com sucesso!!",
            data: estoque
        }
}
}
