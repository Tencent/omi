import arcToBezier from  './arc2bezier.js'
import parser from './svg-path-parser.js'
import { sort, sortCurves } from './sort.js'

let pasition = {}
pasition.parser = parser

pasition.lerpCurve = function (pathA, pathB, t) {

    return pasition.lerpPoints(pathA[0], pathA[1], pathB[0], pathB[1], t)
        .concat(pasition.lerpPoints(pathA[2], pathA[3], pathB[2], pathB[3], t))
        .concat(pasition.lerpPoints(pathA[4], pathA[5], pathB[4], pathB[5], t))
        .concat(pasition.lerpPoints(pathA[6], pathA[7], pathB[6], pathB[7], t))

}


pasition.lerpPoints = function (x1, y1, x2, y2, t) {
    return [x1 + (x2 - x1) * t, y1 + (y2 - y1) * t]
}

pasition.q2b = function (x1, y1, x2, y2, x3, y3) {
    return [x1, y1, (x1 + 2 * x2) / 3, (y1 + 2 * y2) / 3, (x3 + 2 * x2 )/ 3, (y3 + 2 * y2) / 3, x3, y3]
}

pasition.path2shapes = function (path) {
    //https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths
    //M = moveto
    //L = lineto
    //H = horizontal lineto
    //V = vertical lineto
    //C = curveto
    //S = smooth curveto
    //Q = quadratic Belzier curve
    //T = smooth quadratic Belzier curveto
    //A = elliptical Arc
    //Z = closepath
    //以上所有命令均允许小写字母。大写表示绝对定位，小写表示相对定位(从上一个点开始)。
    let cmds = pasition.parser(path),
        preX = 0,
        preY = 0,
        j = 0,
        len = cmds.length,
        shapes = [],
        current = null,
        closeX,
        closeY,
        preCX,
        preCY,
        sLen,
        curves,
        lastCurve


    for (; j < len; j++) {
        let item = cmds[j]
        let action = item[0]
        let preItem = cmds[j - 1]

        switch (action) {
            case 'm':
                sLen = shapes.length
                shapes[sLen] = []
                current = shapes[sLen]
                preX = preX+item[1]
                preY = preY+item[2]
                break
            case 'M':

                sLen = shapes.length
                shapes[sLen] = []
                current = shapes[sLen]
                preX = item[1]
                preY = item[2]
                break

            case 'l':
                current.push([preX, preY, preX, preY, preX, preY, preX+item[1],preY+item[2]])
                preX += item[1]
                preY += item[2]
                break

            case 'L':

                current.push([preX, preY, item[1], item[2], item[1], item[2], item[1], item[2]])
                preX = item[1]
                preY = item[2]

                break

            case 'h':

                current.push([preX, preY, preX, preY, preX, preY,  preX + item[1], preY])
                preX += item[1]
                break


            case 'H':
                current.push([preX, preY, item[1], preY, item[1], preY, item[1], preY])
                preX = item[1]
                break

            case 'v':
                current.push([preX, preY, preX, preY, preX, preY, preX,  preY + item[1]])
                preY += item[1]
                break

            case 'V':
                current.push([preX, preY, preX, item[1], preX, item[1], preX, item[1]])
                preY = item[1]
                break


            case 'C':

                current.push([preX, preY, item[1], item[2], item[3], item[4], item[5], item[6]])
                preX = item[5]
                preY = item[6]
                break
            case 'S':
                if(preItem[0] ==='C'||preItem[0] ==='c'){
                    current.push([preX, preY, preX + preItem[5] - preItem[3], preY +  preItem[6] - preItem[4], item[1], item[2], item[3], item[4]])
                }else if(preItem[0] ==='S'||preItem[0] ==='s'){
                    current.push([preX, preY, preX+  preItem[3] - preItem[1] ,preY+ preItem[4] - preItem[2], item[1], item[2], item[3], item[4]])

                }
                preX = item[3]
                preY = item[4]
                break

            case 'c':
                current.push([preX, preY, preX + item[1], preY + item[2], preX + item[3], preY + item[4], preX + item[5], preY + item[6]])
                preX = preX + item[5]
                preY = preY + item[6]
                break
            case 's':
                if(preItem[0] ==='C'||preItem[0] ==='c'){

                    current.push([preX, preY, preX+  preItem[5] - preItem[3] ,preY+ preItem[6] - preItem[4],preX+ item[1],preY+ item[2], preX+item[3],preY+ item[4]])

                }else if(preItem[0] ==='S'||preItem[0] ==='s' ){
                    current.push([preX, preY, preX+  preItem[3] - preItem[1] ,preY+ preItem[4] - preItem[2],preX+ item[1],preY+ item[2], preX+item[3],preY+ item[4]])
                }

                preX = preX+item[3]
                preY = preY+item[4]

                break
            case 'a':
                curves = arcToBezier({
                    rx: item[1],
                    ry:  item[2],
                    px: preX,
                    py: preY,
                    xAxisRotation:  item[3],
                    largeArcFlag:  item[4],
                    sweepFlag:  item[5],
                    cx:  preX+item[6],
                    cy:  preX+item[7]
                })
                lastCurve = curves[curves.length-1]


                curves.forEach((curve,index)=>{
                    if(index === 0) {
                        current.push([preX,preY,curve.x1,curve.y1,curve.x2,curve.y2,curve.x,curve.y])
                    }else{
                        current.push([curves[index-1].x,curves[index-1].y,curve.x1,curve.y1,curve.x2,curve.y2,curve.x,curve.y])
                    }
                })

                preX = lastCurve.x
                preY = lastCurve.y

                break

            case 'A':

                curves = arcToBezier({
                    rx: item[1],
                    ry:  item[2],
                    px: preX,
                    py: preY,
                    xAxisRotation:  item[3],
                    largeArcFlag:  item[4],
                    sweepFlag:  item[5],
                    cx:  item[6],
                    cy:  item[7]
                })
                lastCurve = curves[curves.length-1]


                curves.forEach((curve,index)=>{
                    if(index === 0) {
                        current.push([preX,preY,curve.x1,curve.y1,curve.x2,curve.y2,curve.x,curve.y])
                    }else{
                        current.push([curves[index-1].x,curves[index-1].y,curve.x1,curve.y1,curve.x2,curve.y2,curve.x,curve.y])
                    }
                })

                preX = lastCurve.x
                preY = lastCurve.y

                break
            case 'Q':
                current.push(pasition.q2b(preX,preY, item[1], item[2], item[3], item[4]))
                preX = item[3]
                preY = item[4]

                break
            case 'q':
                current.push(pasition.q2b(preX,preY,preX+item[1], preY+item[2],item[3]+preX,item[4]+preY))
                preX += item[3]
                preY += item[4]
                break

            case 'T':

                if(preItem[0] ==='Q'|| preItem[0] ==='q') {
                    preCX = preX + preItem[3] - preItem[1]
                    preCY = preY + preItem[4] - preItem[2]
                    current.push(pasition.q2b(preX, preY, preCX, preCY, item[1], item[2]))


                }else if(preItem[0] ==='T'|| preItem[0] ==='t' ) {
                    current.push(pasition.q2b(preX, preY, preX + preX - preCX, preY + preY - preCY, item[1], item[2]))
                    preCX = preX + preX - preCX
                    preCY = preY + preY - preCY
                }

                preX = item[1]
                preY = item[2]
                break


            case 't':
                if(preItem[0] ==='Q'|| preItem[0] ==='q') {
                    preCX = preX + preItem[3] - preItem[1]
                    preCY = preY + preItem[4] - preItem[2]
                    current.push(pasition.q2b(preX, preY, preCX, preCY,preX+ item[1],preY+ item[2]))


                }else if(preItem[0] ==='T'|| preItem[0] ==='t' ) {
                    current.push(pasition.q2b(preX, preY, preX + preX - preCX, preY + preY - preCY, preX+item[1], preY+item[2]))
                    preCX = preX + preX - preCX
                    preCY = preY + preY - preCY
                }

                preX += item[1]
                preY += item[2]
                break

            case 'Z':
                closeX = current[0][0]
                closeY = current[0][1]
                current.push([preX, preY, closeX, closeY, closeX, closeY, closeX, closeY])
                break
            case 'z':
                closeX = current[0][0]
                closeY = current[0][1]
                current.push([preX, preY, closeX, closeY, closeX, closeY, closeX, closeY])
                break
        }
    }

    return shapes

}


pasition._upCurves = function (curves, count) {
    let i = 0,
        index = 0,
        len = curves.length
    for (; i < count; i++) {
        curves.push(curves[index].slice(0))
        index++
        if(index > len-1) {
            index -= len
        }
    }
}

function split(x1, y1, x2, y2, x3, y3, x4, y4, t) {
    return {
        left: _split(x1, y1, x2, y2, x3, y3, x4, y4, t),
        right: _split(x4, y4, x3, y3, x2, y2, x1, y1, 1 - t, true)
    }
}

function _split(x1, y1, x2, y2, x3, y3, x4, y4, t, reverse) {


    let x12 = (x2 - x1) * t + x1
    let y12 = (y2 - y1) * t + y1

    let x23 = (x3 - x2) * t + x2
    let y23 = (y3 - y2) * t + y2

    let x34 = (x4 - x3) * t + x3
    let y34 = (y4 - y3) * t + y3

    let x123 = (x23 - x12) * t + x12
    let y123 = (y23 - y12) * t + y12

    let x234 = (x34 - x23) * t + x23
    let y234 = (y34 - y23) * t + y23

    let x1234 = (x234 - x123) * t + x123
    let y1234 = (y234 - y123) * t + y123

    if(reverse) {
        return [x1234, y1234, x123, y123, x12, y12, x1, y1]
    }
    return [x1, y1, x12, y12, x123, y123, x1234, y1234]
}

pasition._splitCurves = function (curves, count) {
    let i = 0,
        index = 0

    for (; i < count; i++) {
       let curve =  curves[index]
       let cs = split(curve[0],curve[1],curve[2],curve[3],curve[4],curve[5],curve[6],curve[7],0.5)
        curves.splice(index,1)
        curves.splice(index,0,cs.left,cs.right)

        index+=2
        if(index >= curves.length-1) {
            index = 0
        }
    }
}

pasition._upShapes = function (shapes, count) {

    for (let i = 0; i < count; i++) {
        let shape = shapes[shapes.length - 1]
        let newShape = []

        shape.forEach(function (curve) {
            newShape.push(curve.slice(0))
        })
        shapes.push(newShape)
    }
}

pasition._subShapes= function (shapes, count) {
    for (let i = 0; i < count; i++) {
        let shape = shapes[shapes.length - 1]
        let newShape = []
        let x = shape[0][0],
            y = shape[0][1]
        shape.forEach(function () {
            newShape.push([x, y, x, y, x, y, x, y])
        })

        shapes.push(newShape)
    }
}

pasition.lerp = function (pathA, pathB, t) {
    return pasition._lerp( pasition.path2shapes(pathA), pasition.path2shapes(pathB), t)
}

pasition.MIM_CURVES_COUNT = 100

pasition._preprocessing = function(pathA, pathB) {

    let lenA = pathA.length,
        lenB = pathB.length,
        clonePathA = JSON.parse(JSON.stringify(pathA)),
        clonePathB = JSON.parse(JSON.stringify(pathB))

    if (lenA > lenB) {
        pasition._subShapes(clonePathB, lenA - lenB)
    } else if (lenA < lenB) {
        pasition._upShapes(clonePathA, lenB - lenA)
    }

    clonePathA = sort(clonePathA, clonePathB)

    clonePathA.forEach(function (curves, index) {

        let lenA = curves.length,
            lenB = clonePathB[index].length

        if (lenA > lenB) {
            if (lenA < pasition.MIM_CURVES_COUNT) {
                pasition._splitCurves(curves, pasition.MIM_CURVES_COUNT - lenA)
                pasition._splitCurves(clonePathB[index], pasition.MIM_CURVES_COUNT - lenB)
            } else {
                pasition._splitCurves(clonePathB[index], lenA - lenB)
            }
        } else if (lenA < lenB) {
            if (lenB < pasition.MIM_CURVES_COUNT) {
                pasition._splitCurves(curves, pasition.MIM_CURVES_COUNT - lenA)
                pasition._splitCurves(clonePathB[index], pasition.MIM_CURVES_COUNT - lenB)
            } else {
                pasition._splitCurves(curves, lenB - lenA)
            }
        }


    })


    clonePathA.forEach(function (curves, index) {
        clonePathA[index] = sortCurves(curves, clonePathB[index])
    })

    return [clonePathA, clonePathB]

}

pasition._lerp = function (pathA, pathB, t) {


    let shapes = []
    pathA.forEach(function (curves, index) {
        let newCurves = []
        curves.forEach(function (curve, curveIndex) {
            newCurves.push(pasition.lerpCurve(curve, pathB[index][curveIndex], t))
        })
        shapes.push(newCurves)
    })
    return shapes
}


pasition.animate = function (option) {
    let pathA = pasition.path2shapes(option.from)
    let pathB = pasition.path2shapes(option.to)
    let pathArr  = pasition._preprocessing(pathA,pathB)

    let beginTime = new Date(),
        end = option.end || function () {
            },
        progress = option.progress || function () {
            },
        begin = option.begin || function () {
            },
        easing = option.easing || function (v) {
                return v
            },
        tickId = null,
        outShape = null,
        time = option.time

    begin(pathA)

    let tick = function () {
        let dt = new Date() - beginTime
        if (dt >= time) {
            outShape = pathB
            progress(outShape, 1)
            end(outShape)
            cancelAnimationFrame(tickId)
            return
        }
        let percent = easing(dt / time)
        outShape = pasition._lerp(pathArr[0], pathArr[1], percent)
        progress(outShape, percent)
        tickId = requestAnimationFrame(tick)

    }
    tick()
}

export default pasition
