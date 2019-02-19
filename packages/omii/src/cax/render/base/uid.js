var UID = {}

UID._nextID = 0

UID.get = function () {
  return UID._nextID++
}

export default UID
