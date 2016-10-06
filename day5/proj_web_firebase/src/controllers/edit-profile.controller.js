export class EditProfileController {
    constructor($me, $state, $scope) {
        'ngInject'

        this.$me = $me
        this.$state = $state
        this.$scope = $scope

        this.name = ''
        this.aboutMe = ''

        // 1. Promise and callBack style
        // $me.getProfile((profile) => {
        //     this.name = profile.name
        //     this.aboutMe = profile.aboutMe
        // })

        // 2. rx style
        // const me$ = $me.getProfile()
        //             .subscribe((profile) => {
        //                 console.log(profile)
        //                 this.name = profile.name
        //                 this.aboutMe = profile.aboutMe
        //             })

        // $scope.$on('$destroy', () => {
        //     console.log('destroy')
        //     me$.unsubscribe()
        // })

        // 3. rx style once first value come then unsubscribe immediately
        $me.getProfile()
            .first()
            .subscribe((profile) => {
                console.log(profile)
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