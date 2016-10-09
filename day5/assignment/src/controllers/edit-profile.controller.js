export class EditProfileController {
    constructor($me, $state, $scope) {
        'ngInject'

        this.$me = $me
        this.$state = $state
        this.$scope = $scope

        this.name = ''
        this.aboutMe = ''

        $me.getProfile()
            .first()
            .subscribe((profile) => {
                console.log('uid is: ' + profile.uid)
                this.name = profile.name
                this.aboutMe = profile.aboutMe
            })
    }

    save() {
        this.saving = true
        this.$me.saveProfile({
            name: this.name,
            aboutMe: this.aboutMe
        })
            .then(() => {
                this.saving = false
                this.$state.go('profile')
            })
    }
}