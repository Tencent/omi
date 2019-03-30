<block>
    <view>
        <view bindtap="onTap" wx:for="{{array}}" wx:for-item="item" wx:for-index="_anonIdx"><text>{{item.name}}</text>
        </view>
    </view>
</block>