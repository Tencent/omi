<view class="container">
	<view class="userinfo">
		{(!hasUserInfo && canIUse) ? (
			<button open-type="getUserInfo" bindgetuserinfo="getUserInfo">
				获取头像昵称
			</button>
		) : (
				<block>
					<image
						bindtap={this.bindViewTap}
						class="userinfo-avatar"
						src={userInfo.avatarUrl}
						mode="cover">
					</image>
					<text class="userinfo-nickname">{userInfo.nickName}</text>
				</block>
			)}
	</view>
	<view class="usermotto">
		<text class="user-motto">{motto}</text>
	</view>
	<cax-element id='svg-a'></cax-element>
</view>
