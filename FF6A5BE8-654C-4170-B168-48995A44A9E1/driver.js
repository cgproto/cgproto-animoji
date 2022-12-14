function main(scene) {
  const mesh = scene.meshes[0]
  const baseMesh = {
    geometryType: 'triangles',
    indices: mesh.faces.flat(),
    indexBitDepth: 32,
    attributes: [
      {
        name: 'position',
        format: 'float3',
        data: mesh.vertices
      },
      {
        name: 'textureCoordinate',
        format: 'float2',
        data: mesh.texturecoords[0]
      }
    ]
  }
  const animMeshes = mesh.animMeshes.map(animMesh => animMesh.vertices)
  const animMeshNames = mesh.animMeshes.map(animMesh => animMesh.name.replace('blendShape2.', ''))
  const numAnimMesh = mesh.animMeshes.length
  return {
    destructuring: true,
    baseMesh,
    numVertex: mesh.vertices.length / 3,
    animMeshes,
    numAnimMesh,
    animMeshNames
  }
}
return main