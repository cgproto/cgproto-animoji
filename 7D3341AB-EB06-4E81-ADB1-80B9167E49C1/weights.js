function main(animMeshNames, blendShapes) {
  return animMeshNames.map(name => {
    name = name.replace('_L', 'Left').replace('_R', 'Right')
    let weight = blendShapes[name]
    if (weight === undefined) {
      console.error(name)
      return 0
    }
    return weight
  })
}
return main