export class ProfileController {
    constructor($me, $state, $scope) {
        'ngInject'

        this.$me = $me
        this.$state = $state
        this.$scope = $scope

        this.name = ''
        this.aboutMe = ''

        console.log('profile controller')

        $me.getProfile()
            .first()
            .subscribe((profile) => {
                console.log(profile)
                this.name = profile.name
                this.aboutMe = profile.aboutMe
            })
    }
}