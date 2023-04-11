# CellsMap

The CellMap is a custom data structure vaguely inspired by QuadTrees

They allow to store the position of several cells and efficiently retrieve
the cells in the neighborhood of one of them.

## Constraints

-   Inserting a cell should be O(1)
-   Changing the position of a cell should be O(1)
-   This structure works is the screen width and height are both multiples of the max attraction radius. The screen doesn't need to be a square as long as both dimensions are multiples of the radius.

## Principle

The screen is divided in a fixed number of squares of the same size.
Each cell will be assigned to the square containing its screen coordinates.

The size of each square is the maximum attraction distance which is the greatest distance
allowing particles to interact between each other. If they are further appart than this
distance we don't need to evaluate their attraction as it will be 0

To make sure that we consider all the neighbors of a given cell we need to retrieve
the cells which are in the same square and the ones whih are in the adjacent squares.
This way we are sure to evaluate all the cells in the attraction radius while still minimizing
the total number of cells to evaluate.

This implies that we want to have at least a 3x3 grid to make the operation standard on any size
of grid and attraction distance.

In our simulation the cells are moving on a thoroidal wraped plan, which means that the
cells at the top of the plan can interact with the cells at the bottom of the plan.
This means that for the squares on the border of the grid we need to check the squares on the
other side of the grid.

## Implemtation details

The cellsMap has several properties:

-   `squares: Set<number>[][]`: This is the 2 dimentional grid representing the different portions of the screen. The squares only need to hold the id of each cells. For efficient lookup we use a `Set` to store these id.
-   `squareByCellId: Map<number, Coordinates>`: Keys are the cells id, values are the coordinate of the cell's square in `squares`

## Operations

`insert(cell: Cell)`

-   If the cell ID is already present in `squareByCellId` throw an error
-   Otherwise
    -   Compute the coordinates of the square based on the cells coordinate, the screen size, and the attraction distance
    -   Add the id of the cell in the right square of `squares`
    -   Add the id of the cell to `squareByCellId` with the square coordinates

`updateCell(cell: Cell)`

-   If the cell is not in `squareByCellId` throw an error.
-   Otherwise
    -   Remove the cell from its square in `squares`
    -   Compute the coordinates of the new square based on the cells coordinate, the screen size, and the attraction distance
    -   Add the cell id to the new square
    -   Update the value in `squareByCellId`

`getNeighbors(cell: Cell)`

-   If the cell is not in `squareByCellId` throw an error.
-   Otherwise
    -   Return the list of cell ids in the same square as the cells and in the 8 adjacent squares
