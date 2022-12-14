#include <metal_stdlib>
using namespace metal;
struct Attribute
{
  float3 position [[attribute(0)]];
  float2 textureCoordinate [[attribute(1)]];
};
struct Varying
{
  float4 position [[position]];
  float2 textureCoordinate;
};
vertex Varying vertex_main(uint vertexId [[vertex_id]],
                           Attribute in [[stage_in]],
                           constant int &numVertex,
                           device const float3 *animMeshes,
                           constant int &numAnimMesh,
                           device const float *blendShapes,
                           constant float4x4 &mvp)
{
  float3 position = in.position;
  for (int i = 0; i < numAnimMesh; ++i)
  {
    position += (animMeshes[numVertex * i + vertexId] - in.position) * blendShapes[i];
  }
  return {
      mvp * float4(position, 1.0),
      in.textureCoordinate,
  };
}

fragment float4 fragment_main(Varying in [[stage_in]],
                              texture2d<float> tex)
{
  constexpr sampler texSampler(filter::linear);
  return tex.sample(texSampler, in.textureCoordinate);
}