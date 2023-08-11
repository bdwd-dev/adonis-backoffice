import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/dashboard', ({inertia}) => {
    return inertia.render('Admin/Dashboard')
  })

}).prefix('/admin')
