angular.module('LightsOut', []).controller('MainController', function () {
    var mc = this;
    mc.makegrid = function (g) {
        if (g < 0) {
            g = g * -1;
        } else if (g = 0) {
            return;
        }
        mc.grid = [];
        for (var x = 0; x < g; x++) {
            mc.grid[x] = [];
            for (var y = (g - x - 1); y >= 0; y--) {
                mc.grid[x][y] = { row: x, col: y, lit: false, neighbors: [] };
            }
        }
        for (var a = 0; a < mc.grid.length; a++) {
            for (var b = 0; b < mc.grid[a].length; b++) {
                for (var c = -1; c < 2; c += 2) {
                    if (a + c >= 0 && a + c < g) {
                        if (mc.grid[a + c][b]) {
                            mc.grid[a][b].neighbors.push(mc.grid[a + c][b])
                        }
                    }
                    if (b + c >= 0 && b + c < g) {
                        if (mc.grid[a][b + c]) {
                            mc.grid[a][b].neighbors.push(mc.grid[a][b + c])
                        }
                    }
                    if (a + c >= 0 && a + c < g && b + (c * -1) >= 0 && b + (c * -1) < g) {
                        if (mc.grid[a + c][b + (c * -1)]) {
                            mc.grid[a][b].neighbors.push(mc.grid[a + c][b + (c * -1)])
                        }
                    }
                }
            }
        }
    }
    mc.activate = function (cell) {
        cell.lit = !cell.lit;
        cell.neighbors.forEach(function (nab) {
            nab.lit = !nab.lit;
        })
    }
    mc.randgrid = function () {
        mc.grid.forEach(function (row) {
            row.forEach(function (cell) {
                var flipper = Math.random();
                if (flipper > .5) {
                    cell.lit = true;
                } else {
                    cell.lit = false;
                }
            })
        })
    }
});