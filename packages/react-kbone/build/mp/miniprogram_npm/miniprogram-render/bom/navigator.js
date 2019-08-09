class Navigator {
    constructor() {
        this.$_language = ''
        this.$_wxVersion = ''
        this.$_brand = '' // 手机品牌
        this.$_model = '' // 手机型号
        this.$_platform = ''
        this.$_system = '' // 操作系统版本

        this.$_userAgent = ''
    }

    /**
     * 重置实例
     */
    $$reset(info) {
        this.$_language = info.language
        this.$_wxVersion = info.version
        this.$_brand = info.brand
        this.$_model = info.model
        this.$_platform = info.platform
        this.$_system = info.system

        // 拼装 userAgent
        const appVersion = '5.0'
        const appleWebKitVersion = '602.3.12'
        let platformContext
        if (this.$_platform === 'ios') {
            // 拆分系统版本号
            let systemVersion = this.$_system.split(' ')
            if (systemVersion.length >= 2) {
                systemVersion = systemVersion[1].split('.').join('_')
            } else {
                systemVersion = ''
            }

            platformContext = `${this.$_brand}; CPU ${this.$_brand} OS ${systemVersion} like Mac OS X`
        } else if (this.$_platform === 'android') {
            platformContext = `Linux; ${this.$_system}; ${this.$_model}`
        } else {
            // 在开发者工具上，默认在 windows x64 上运行
            platformContext = 'Windows NT 6.1; win64; x64'
        }

        this.$_userAgent = `${this.appCodeName}/${appVersion} (${platformContext}) AppleWebKit/${appleWebKitVersion} (KHTML, like Gecko) Mobile MicroMessenger/${this.$_wxVersion} Language/${this.language}`
    }

    /**
     * 对外属性和方法
     */
    get userAgent() {
        return this.$_userAgent
    }

    get appCodeName() {
        return 'Mozilla'
    }

    get appName() {
        return 'Netscape'
    }

    get language() {
        return this.$_language
    }

    get languages() {
        return [this.$_language]
    }

    get platform() {
        return this.$_platform
    }

    get product() {
        return 'Gecko'
    }
}

module.exports = Navigator
