import { AuthController } from './auth.controller'
import { SignInController } from './signin.controller'
import { RegisterController } from './register.controller'
import { LayoutController } from './layout.controller'

export default [
    { name: 'AuthController', controller: AuthController },
    { name: 'SignInController', controller: SignInController},
    { name: 'RegisterController', controller: RegisterController},
    { name: 'LayoutController', controller: LayoutController}
]