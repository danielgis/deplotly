// // import { Plotly } from '/plotly.js-dist';
// import { Plotly } from './node_modules/plotly.js-dist/plotly.js';

// let TESTER = document.getElementById('tester');

// Plotly.plot(TESTER, [{
//     x: [1, 2, 3, 4, 5],
//     y: [1, 2, 4, 8, 16]
// }], {
//     margin: { t: 0 }
// }, { showSendToCloud: true });

// /* Current Plotly.js version */
// console.log(Plotly.BUILD);
// // console.log(Plotly)

// var data = [{
//     x: [1, 2, 3, 4, 5],
//     y: [1, 2, 4, 8, 16]
// }];
// var layout = {
//     title: 'Basic Plot',
//     xaxis: {
//         title: 'x Axis'
//     },
//     yaxis: {
//         title: 'y Axis'
//     }
// };
// Plotly.newPlot('tester', data, layout);

// Create PAIRPLOT


d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/iris-data.csv', function (err, rows) {

    function unpack(rows, key) {
        return rows.map(function (row) { return row[key.replace('.', ' ')]; });
    }

    colors = []
    for (i = 0; i < unpack(rows, 'class').length; i++) {
        if (unpack(rows, 'class')[i] == "Iris-setosa") {
            colors.push(0)
        } else if (unpack(rows, 'class')[i] == "Iris-versicolor") {
            colors.push(0.5)
        } else if (unpack(rows, 'class')[i] == "Iris-virginica") {
            colors.push(1)
        }
    }

    var pl_colorscale = [
        [0.0, '#19d3f3'],
        [0.333, '#19d3f3'],
        [0.333, '#e763fa'],
        [0.666, '#e763fa'],
        [0.666, '#636efa'],
        [1, '#636efa']
    ]

    var axis = () => ({
        showline: false,
        zeroline: false,
        gridcolor: '#ffff',
        ticklen: 4
    })

    var data = [{
        type: 'splom',
        dimensions: [
            { label: 'sepal length', values: unpack(rows, 'sepal length') },
            { label: 'sepal width', values: unpack(rows, 'sepal width') },
            { label: 'petal length', values: unpack(rows, 'petal length') },
            { label: 'petal width', values: unpack(rows, 'petal width') }
        ],
        text: unpack(rows, 'class'),
        marker: {
            color: colors,
            colorscale: pl_colorscale,
            size: 7,
            line: {
                color: 'white',
                width: 0.5
            }
        }
    }]

    var layout = {
        title: 'TEST DE PAIRPLOT CON PLOTLY',
        height: 600,
        width: 600,
        autosize: false,
        hovermode: 'closest',
        dragmode: 'select',
        plot_bgcolor: 'rgba(240,240,240, 0.95)',
        xaxis: axis(),
        yaxis: axis(),
        xaxis2: axis(),
        xaxis3: axis(),
        xaxis4: axis(),
        yaxis2: axis(),
        yaxis3: axis(),
        yaxis4: axis()
    }

    Plotly.react('tester', data, layout)

});