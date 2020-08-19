import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
// 定义_init
initMixin(Vue)
/*
 * 定义 $set $delete $watch
 *
 */
stateMixin(Vue)
// $emit $on $once $off
eventsMixin(Vue)
// 定义_update $forceUpdate $destroyed
lifecycleMixin(Vue)
// 定义_render $nextTick
renderMixin(Vue)

export default Vue
