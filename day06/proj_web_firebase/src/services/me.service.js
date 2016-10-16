export class MeService {
    constructor($firebase) {
        'ngInject'

        this.$firebase = $firebase
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

    upload (file) {
        return this.$firebase.currentUser()
            .flatMap((currentUser) => this.$firebase).upload(`user/${currentUser.uid}/${Date.now()}`, file)
            .map((res) => res.downloadURL)
    }
}