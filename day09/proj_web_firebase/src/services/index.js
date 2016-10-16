import { FirebaseService } from './firebase.service'
import { MeService } from './me.service'
import { UserService } from './user.service'
import { CourseService } from './course.service'

export default [
  { name: '$firebase', service: FirebaseService },
  { name: '$me', service: MeService },
  { name: '$user', service: UserService },
  { name: '$course', service: CourseService }
]
