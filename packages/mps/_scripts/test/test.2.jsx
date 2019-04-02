<view>
{array.map(item => (
	<view onTap={this.onTap}>
		<text>{item.name}</text>
	</view>
))}
</view>
