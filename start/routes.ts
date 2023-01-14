/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(()=>{//Login e criação de novos usuários
  
  Route.post('login', async ({ auth, request, response }) => {
    const email = request.input('email')
    const password = request.input('password')
  
    try {
      const token = await auth.use('api').attempt(email, password)
      return token
    } catch {
      return response.unauthorized('Invalid credentials')
    }})

  Route.post('/usuarios',"UsuariosController.store") 

}).prefix('/api')


Route.group(()=>{// rotas para usuários autenticados

  
  Route.get("/usuarios","UsuariosController.index")
  Route.get("/usuarios/:id","UsuariosController.show")
  Route.delete("/usuarios/:id","UsuariosController.destroy")
  Route.patch("/usuarios/:id","UsuariosController.update")

  Route.resource("/autor","AutorsController").apiOnly()
  Route.resource("/genero","GenerosController").apiOnly()
  Route.resource("/livro","LivrosController").apiOnly()
  Route.resource("/estoque","EstoquesController").apiOnly()

  
}).prefix('/api').middleware('auth')


