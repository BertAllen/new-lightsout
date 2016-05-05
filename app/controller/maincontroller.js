angular.module('LightsOut', []).controller('MainController', function () {
    var mc = this;
    // $scope.test = "angular works";
    mc.grid = [];



    mc.makegrid = function (g) {
        for (var x = g-1; x > -1; x--) {
            mc.grid[x] = [];
            // var colum = i
            for (var y = 0; y <= x; y++) {
                // var row = j
                mc.grid[x][y] = { row: x, col: y, lit: false, neighbors: [] };

            }
        }
        for (var a = g-1; a > -1; a--) {
            for (var b = 0; b <= a; b++){
                for (var c = -1; c < 2; c += 2){
                    if (a + c >= 0 && a + c < g) {
                        mc.grid[a][b].neighbors.push(mc.grid[a+c][b])
                    }
                    if (b + c >= 0 && b + c < g) {
                        mc.grid[a][b].neighbors.push(mc.grid[a][b+c])
                    }
                    if (a + c >= 0 && a + c < g && b + c >= 0 && b + c < g) {
                        mc.grid[a][b].neighbors.push(mc.grid[a+c][b+c])
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
    
});