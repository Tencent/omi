
<view class="container log-list">
	{logs.map((log, index) => (
		<text class="log-item">{index + 1}. {log}</text>
	))}
</view>
