export class MeService {
    constructor($firebase, $course) {
        'ngInject'

        this.$firebase = $firebase
        this.$course = $course
    }

    saveProfile(profile) {
        return this.$firebase.currentUser()
            .flatMap((currentUser) => this.$firebase.set(`user/${currentUser.uid}`, profile))
    }

    getProfile(callback) {
        return this.$firebase.currentUser()
            .filter((currentUser) => currentUser !== undefined)
            .flatMap((currentUser) => this.$firebase.onValue(`user/${currentUser.uid}`))
    }

    upload(file) {
        return this.$firebase.currentUser()
            .flatMap(({ uid }) => this.$firebase.upload(`user/${uid}/${Date.now()}`, file))
            .map((res) => res.downloadURL)
    }

    myOwnCourse () {
        return this.$firebase.currentUser()
            .flatMap(({uid}) => this.$course.ownCourses(uid))
    }

    applyCourse(id) {
        console.log('userId in applyCourse (me) = ' + userId)
        return this.$firebase.currentUser()
            .flatMap(({uid}) => this.$course.applyCourse(id, uid))
    }
}