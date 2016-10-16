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
                console.log(profile)
                this.name = profile.name
                this.aboutMe = profile.aboutMe
                this.photo = profile.photo
            })
    }

    save() {
        this.saving = true
        this.$me.saveProfile({
            name: this.name,
            aboutMe: this.aboutMe,
            photo: this.photo
        })
            .then(() => {
                this.saving = false
                this.$state.go('profile')
            })
    }

    selectedFile (file) {
        if (!file) return
        this.$me.upload(file.files[0])
            .subscribe((res) => {
                this.photo = res
            })
    }
}