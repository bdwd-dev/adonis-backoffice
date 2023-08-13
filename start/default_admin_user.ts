import { RoleType } from 'App/Enums/Role'
import Role from 'App/Models/Role'
import Admin from 'App/Models/Admin'
import Env from '@ioc:Adonis/Core/Env'
import Application from '@ioc:Adonis/Core/Application'
/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/
Role.findByOrFail('name', RoleType.ADMIN).then(async (role) => {
  const admin = await Admin.first()

  if(!admin) {
    await Admin.create({
      username: Env.get('ADMIN_USERNAME'),
      lastname: Env.get('ADMIN_LASTNAME'),
      firstname: Env.get('ADMIN_FIRSTNAME'),
      phoneNumber: Env.get('ADMIN_PHONE_NUMBER'),
      email: Env.get('ADMIN_EMAIL'),
      password: Env.get('ADMIN_PASSWORD'),
      roleId: role.id
    })
  }

  if(Application.inDev) {
    console.log(`
    ************************
    ** DEAFAUT ADMIN USER **
    ************************
    * email: ${Env.get('ADMIN_EMAIL')}
    * password: ${Env.get('ADMIN_PASSWORD')} 
    ************************
    `)
  }
})
