export function parseEvent(props, obj) {
  if (!props) return

  const tapHandler =
    props.bindtap ||
    props.bindTap ||
    props.onTap ||
    props.ontap ||
    props.onclick ||
    props.onClick ||
    props.bindclick ||
    props.bindClick
  if (tapHandler) {
    let _x = null,
      _y = null

    obj.on('touchstart', evt => {
      _x = evt.stageX
      _y = evt.stageY
    })

    obj.on('touchend', evt => {
      if (_x !== null) {
        if (Math.abs(evt.stageX - _x) < 20 && Math.abs(evt.stageY - _y) < 20) {
          tapHandler(evt)
          _x = null
          _y = null
        }
      }
    })
  }
}
