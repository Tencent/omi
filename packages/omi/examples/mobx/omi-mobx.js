import { observable, autorun } from "mobx"
import { options } from "../../src/omi"

/*!
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

/*
 * @see https://developers.google.com/web/updates/2015/08/using-requestidlecallback
 */
window.requestIdleCallback = window.requestIdleCallback ||
    function (cb) {
        return setTimeout(function () {
            var start = Date.now()
            cb({
                didTimeout: false,
                timeRemaining: function () {
                    return Math.max(0, 50 - (Date.now() - start))
                }
            })
        }, 1)
    }

window.cancelIdleCallback = window.cancelIdleCallback ||
    function (id) {
        clearTimeout(id)
    }


options.afterInstall = function (ele) {
    if (ele.constructor.observe) {
        oba(ele.data, ele)
    }
}

let idleId = null
const updateList = []

function oba(data, ele) {
    const o = observable(data)

    autorun(() => {
        JSON.stringify(o)
        if (ele._isInstalled) {
            updateList.push(ele)
            cancelIdleCallback(idleId)
            idleId = requestIdleCallback(backgroundTask)

        }
    })

    ele.data = o
}

function backgroundTask(deadline) {
    while (deadline.timeRemaining() > 0 && updateList.length > 0) {
        updateList.shift().update()
    }

    if (updateList.length > 0) {
        idleId = requestIdleCallback(backgroundTask);
    }
}

function observe(target) {
    target.observe = true
}

export {
    observe
}

export default {
    observe
}