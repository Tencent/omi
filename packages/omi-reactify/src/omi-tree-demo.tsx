import reactify from './index'
import 'omi'

const OmiTreeOmi = reactify<{ data: any[]; onNodeMove?: (e: any) => void }>('omi-tree')

export default OmiTreeOmi
