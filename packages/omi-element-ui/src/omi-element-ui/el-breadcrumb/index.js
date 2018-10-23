import { tag, WeElement } from 'omi'

@tag('el-breadcrumb', true)
class ElBreadcrumb extends WeElement {
    render(props, data) {
        return (
            <div class="el-breadcrumb" aria-label="Breadcrumb">
                <slot></slot>
            </div>
        )
      
    }
}
