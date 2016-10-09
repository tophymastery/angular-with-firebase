import { AuthController } from './auth.controller'
import { SignInController } from './signin.controller'
import { RegisterController } from './register.controller'
import { HomeController } from './home.controller'
import { ProfileController } from './profile.controller'
import { EditProfileController } from './edit-profile.controller'

export default [
    { name: 'AuthController', controller: AuthController },
    { name: 'SignInController', controller: SignInController},
    { name: 'RegisterController', controller: RegisterController},
    { name: 'HomeController', controller: HomeController},
    { name: 'ProfileController', controller: ProfileController},
    { name: 'EditProfileController', controller: EditProfileController}
]