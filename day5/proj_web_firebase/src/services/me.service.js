export class MeService {
    constructor($firebase) {
        'ngInject'

        this.$firebase = $firebase
    }

    saveProfile(profile) {
        // const currentUser = this.$firebase.currentUser()
        // return this.$firebase.set(`user/${currentUser.uid}`, profile)

        // BehaviorSubject style
        const currentUser = this.$firebase.currentUser()
        return this.$firebase.set(`user/${currentUser.uid}`, profile)
    }

    getProfile(callback) {
        // const currentUser = this.$firebase.currentUser()

        // always sync with firebase
        // this.$firebase.onValue(`user/${currentUser.uid}`, callback)

        // get only once
        // this.$firebase.onceValue(`user/${currentUser.uid}`, callback)

        // rx style
        // return this.$firebase.onValue(`user/${currentUser.uid}`)

        // BehaviorSubject style
        return this.$firebase.currentUser
            .filter((currentUser) => currentUser !== undefined)
            .flatMap((currentUser) => this.$firebase.onValue(`user/${currentUser.uid}`))
    }
}