import Omi from 'omi'

class UserList extends Omi.Component {
    constructor(data) {
        super(data)
    }

    install() {
        this.data.uin_info || (this.data.uin_info = [])
        this.data.uin_info.forEach(user => {
            this.prepareData(user)
        })
        this.done = false
    }

    prepareData(user){
        user.desc_d = user.desc.split("&nbsp;")[0]
        user.desc_t = user.desc.split("&nbsp;")[1]
        user.isBoy = user.sex === "男"
        user.qlogo = user.url.replace("http://", location.protocol + "//").replace(/&amp;/g, "&")
        if (user.profession_desc) {
            user.hasProfession_desc = true
        }
    }

    sendGift(uin, nick, qlogo) {
        if (this.done) return
        this.done = true
        mqq.dispatchEvent("_nearby_send_gift", {uin: uin, nick: nick, recv_avatar: qlogo})
        mqq.ui.popBack()
    }

    appendUsers (users) {
        users.uin_info && users.uin_info.forEach(user =>{
            this.prepareData(user)
            this.data.uin_info.push(user)
        })
        this.update()
    }

    render() {
        return `
<div class="user_list">
    {{#uin_info}}
    <div class="item" onclick="sendGift('{{uin}}','{{nick}}','{{qlogo}}')">
        <div class="qlogo">
            <img style="width: 70px;" src="{{qlogo}}" />
        </div>
        <div class="main b1 bb">
            <div class="nick">{{{nick}}}</div>
            <div class="icons">
                {{#isBoy}}<span class="boy_age"><img src="component/user_list/boy.png" alt="" /><span>{{age}}</span></span> {{/isBoy}}
               {{^isBoy}}<span class="girl_age"><img src="component/user_list/girl.png" alt="" /><span>{{age}}</span></span> {{/isBoy}}
             <!--   <span class="vip"><span>VIP</span></span>
                <span class="svip"></span>-->
                {{#hasProfession_desc}} <span class="profession"><span>{{profession_desc}}</span></span> {{/hasProfession_desc}}
            </div>
            <div class="action">{{{intro}}}</div>
        </div>
        <div class="distance_info">{{desc_d}} · {{desc_t}}</div>
    </div>
    {{/uin_info}}
    <div style="text-align:center;font-size:13px;line-height:30px;height:30px;"><span class="loading"></span> 加载中...</div>
</div>
`
    }

    style() {
        return `
.user_list {
}

.qlogo {
    overflow: hidden;
    width: 70px;
    height: 70px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    left: 12px;
}

.distance_info {
    position: absolute;
    top: 15px;
    right: 9px;
    color: #7B7B84;
    font-size: 10px;
}

.main {
    padding-top: 13px;
    height: 94px;
    margin-left: 94px;
}

.item {
    position: relative;
    height: 94px;
}

.nick {
    line-height: 25px;
    font-size: 18px;
    width: 60%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.icons {
    height: 18px;
    color: white;
    font-size: 10px;
}

.action {
    line-height: 24px;
    font-size: 14px;
    color: #7B7B84;
    width: 85%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.boy_age {
    display: inline-block;
    width: auto;
    padding-left: 3px;
    padding-right: 3px;
    height: 12px;
    line-height: 13px;
    letter-spacing: 0;
    background-color: #a1c8fa;
    text-align: center;
}

    .girl_age img, .boy_age img {
        width: 7px;
        margin-right: 2px;
    }

    .boy_age img {
        position: relative;
        top: 1px;
    }


.girl_age {
    display: inline-block;
    width: auto;
    padding-left: 3px;
    padding-right: 3px;
    height: 12px;
    line-height: 13px;
    background-color: #ffb4c8;
    text-align: center;
}




.profession {
    display: inline-block;
    width: auto;
    padding-left: 3px;
    padding-right: 3px;
    height: 12px;
    background-color: rgb(112, 211, 249);
    line-height: 13px;
    text-align: center;
}



.loading {
    background-image: url(component/user_list/loading.png); /* @meta {"sprite":{"skip":true}} */
    background-size: 20px 20px;
    width: 20px;
    height: 20px;
    -webkit-animation: spinner-12 1.6s step-start infinite;
    animation: spinner-12 1.6s step-start infinite;
    display:inline-block;
    position:relative;
    top:5px;

}
        `
    }
}

export default UserList