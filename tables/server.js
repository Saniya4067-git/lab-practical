const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {

    res.send(`
    
    <html>
    <head>
        <title>Student Tables</title>

        <style>

            body{
                font-family: Arial, sans-serif;
                background-color: #f0f8ff;
                margin: 40px;
            }

            h1{
                text-align: center;
                color: darkblue;
            }

            .container{
                display: flex;
                justify-content: space-around;
                margin-top: 40px;
            }

            table{
                border-collapse: collapse;
                width: 300px;
                box-shadow: 2px 2px 10px gray;
            }

            th{
                background-color: darkblue;
                color: white;
                padding: 12px;
            }

            td{
                padding: 10px;
                text-align: center;
                background-color: white;
            }

            tr:nth-child(even){
                background-color: #dfefff;
            }

            table, th, td{
                border: 2px solid black;
            }

            .table1{
                background-color: #ffe6e6;
            }

            .table2{
                background-color: #e6ffe6;
            }

        </style>

    </head>

    <body>

        <h1>Student Information</h1>

        <div class="container">

            <!-- Table 1 -->

            <table class="table1">

                <tr>
                    <th>Student Name</th>
                    <th>Result</th>
                </tr>

                <tr>
                    <td>Amit</td>
                    <td>Pass</td>
                </tr>

                <tr>
                    <td>Neha</td>
                    <td>Fail</td>
                </tr>

                <tr>
                    <td>Rahul</td>
                    <td>Pass</td>
                </tr>

            </table>

            <!-- Table 2 -->

            <table class="table2">

                <tr>
                    <th>Student Name</th>
                    <th>CGPA</th>
                </tr>

                <tr>
                    <td>Amit</td>
                    <td>8.5</td>
                </tr>

                <tr>
                    <td>Neha</td>
                    <td>6.2</td>
                </tr>

                <tr>
                    <td>Rahul</td>
                    <td>9.1</td>
                </tr>

            </table>

        </div>

    </body>
    </html>

    `);

});

app.listen(PORT, () => {
    console.log("Server running at http://localhost:" + PORT);
});