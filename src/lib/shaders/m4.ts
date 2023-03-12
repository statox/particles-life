const MatType = Float32Array;

/**
 * Computes a 4-by-4 orthographic projection matrix given the coordinates of the
 * planes defining the axis-aligned, box-shaped viewing volume.  The matrix
 * generated sends that box to the unit box.  Note that although left and right
 * are x coordinates and bottom and top are y coordinates, near and far
 * are not z coordinates, but rather they are distances along the negative
 * z-axis.  We assume a unit box extending from -1 to 1 in the x and y
 * dimensions and from -1 to 1 in the z dimension.
 * @param left The x coordinate of the left plane of the box.
 * @param right The x coordinate of the right plane of the box.
 * @param bottom The y coordinate of the bottom plane of the box.
 * @param top The y coordinate of the right plane of the box.
 * @param near The negative z coordinate of the near plane of the box.
 * @param far The negative z coordinate of the far plane of the box.
 * @return  dst or a new matrix if none provided
 * @memberOf module:webgl-3d-math
 */
export function orthographic(
    left: number,
    right: number,
    bottom: number,
    top: number,
    near: number,
    far: number
) {
    const dst = new MatType(16);

    dst[0] = 2 / (right - left);
    dst[1] = 0;
    dst[2] = 0;
    dst[3] = 0;
    dst[4] = 0;
    dst[5] = 2 / (top - bottom);
    dst[6] = 0;
    dst[7] = 0;
    dst[8] = 0;
    dst[9] = 0;
    dst[10] = 2 / (near - far);
    dst[11] = 0;
    dst[12] = (left + right) / (left - right);
    dst[13] = (bottom + top) / (bottom - top);
    dst[14] = (near + far) / (near - far);
    dst[15] = 1;

    return dst;
}
