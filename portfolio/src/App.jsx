import React from 'react';
import Nav from './nav';
import { TextField, TablePagination, Button } from '@mui/material';
import { useTable } from 'react-table';

function App() {
    return (
        <div className="App">
            <Nav></Nav>
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
        </div>
    );
}
function Section1() {
    return <div className="section1">
        <div className="content">

            <div className="name">Ahmed Shahriar</div>
            <div className="description">
                <span style={{ fontWeight: "300" }}> 7 years</span> in Software |
                <span style={{ fontWeight: "300" }}> 3 years</span> in Web Development |
                <span style={{ fontWeight: "300" }}> 34+</span> Solutions |
                <span style={{ fontWeight: "300" }}> 25+</span> Clients
            </div>

        </div>
    </div>;
}
function Section2() {
    return <div className="section2">
        <div className="content">
            <div className="heading">My Work</div>
            <div className="description">
                I'm a self-taught software developer, focusing on web and mobile development. Academics and  School wasn't really my thing,
                I've found my passion developing creative and innovative software through research and development.
                I've gained solid experience over the years working with various companies and businesses and developing all sorts of solutions.            </div>

        </div>
    </div>;
}

function Section3() {


    const columns = [
        {
            id: 'title',  // Add a unique ID for this column
            name: 'Title',
            selector: row => row.title,
        },
        {
            id: 'year',   // Add a unique ID for this column
            name: 'Year',
            selector: row => row.year,
        },
        {
            id: 'description',  // Add a unique ID for this column
            name: 'Description',
            selector: row => row.description,
        },
        {
            id: 'languages',  // Add a unique ID for this column
            name: 'Languages and Frameworks',
            selector: row => row.languages,
        },
        {
            id: 'type',   // Add a unique ID for this column
            name: 'Type',
            selector: row => row.type,
        },
    ];
    const data = [
        {
            title: 'Xen - AI',
            year: '2019',
            description: 'A Multi-Modal Voice Assistant with the ability to learn and answer to questions, and do tasks like opening applications, websites, and do keybaord shortcuts, all through voice commands and AI',
            languages: 'TensorFlow, DeepSpeech, Python',
            type: 'Desktop',

        },
        {
            title: 'Ghostbusters',
            year: '1984',
            description: 'A Multi-Modal Voice Assistant with the ability to learn and answer to questions, and do tasks like opening applications, websites, and do keybaord shortcuts, all through voice commands and AI',
            languages: 'TensorFlow, DeepSpeech, Python',
            type: 'Desktop',
        },
    ]
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    return (
        <div className="section3">
            <TextField label="Search" variant="outlined" fullWidth margin="normal" />

            <table {...getTableProps()} style={{ width: '100%' }}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={data.length || 0}
                page={0}
                rowsPerPage={5}
                onPageChange={() => {
                    // Handle page change logic here
                }}
                onRowsPerPageChange={() => {
                    // Handle rows per page change logic here
                }}
            />

            <Button variant="contained" color="primary" onClick={() => {
                // Handle Load More logic here
            }}>
                Load More
            </Button>
        </div>
    );
}


export default App;
