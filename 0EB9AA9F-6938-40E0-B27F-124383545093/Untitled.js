const { Matrix4 } = require("math3d")
let _m = new Matrix4()
let _v = new Matrix4()
let _p = new Matrix4()
function main(m, v, p, scale) {
  _m.fromArray(m)
  _v.fromArray(v)
  _p.fromArray(p)
  let mvp = new Matrix4()
  mvp.multiplyMatrices(_p, _v)
  mvp.multiply(_m)
  mvp.scale({ x: scale, y: scale, z: scale })
  return mvp.toArray()
}
return main