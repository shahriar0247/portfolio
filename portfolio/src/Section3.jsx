import React from 'react';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import { TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper } from '@mui/material';

function Section3() {
    const data = [
        {
            id: 1,
            title: 'Xen AI',
            year: '2019',
            description: 'A Multi-Modal Voice Assistant with the ability to learn and answer to questions, and do tasks like opening applications, websites, and do keybaord shortcuts, all through voice commands and AI',
            languages: 'TensorFlow, DeepSpeech, Python',

        },
        {
            id: 2,
            title: 'AlertBlast Mass Notification',
            year: '2021',
            description: 'AlertBlast allows you to engage in real-time, two-way communications with any size audience. With a simple interface that enables multiple channels — including SMS, voice, email, desktop, in-app notifications, paging, wallboards, IP phones, and more',
            languages: 'Python, Flask, React.js, html/css/js, etc.',

        },
        {
            id: 1,
            title: 'Xen AI',
            year: '2019',
            description: 'A Multi-Modal Voice Assistant with the ability to learn and answer to questions, and do tasks like opening applications, websites, and do keybaord shortcuts, all through voice commands and AI',
            languages: 'TensorFlow, DeepSpeech, Python',

        },
        {
            id: 1,
            title: 'Xen AI',
            year: '2019',
            description: 'A Multi-Modal Voice Assistant with the ability to learn and answer to questions, and do tasks like opening applications, websites, and do keybaord shortcuts, all through voice commands and AI',
            languages: 'TensorFlow, DeepSpeech, Python',

        },
    ]
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setPage(0);
    };

    const filteredData = data?.filter((item) =>
        Object.values(item).some((value) =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const sortedData = filteredData?.sort((a, b) =>
        // Implement your sorting logic here
        a.title.localeCompare(b.title)
    );

    const paginatedData = sortedData?.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

    return (
        <div className="section3">
            <TextField
                label="Search"
                variant="outlined"
                fullWidth
                margin="normal"
                value={searchTerm}
                onChange={handleSearch}
            />

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Year</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Technology</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedData?.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>
                                    {/* Apply styles to force a single line for the title */}
                                    <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        {row.title}
                                    </div>
                                </TableCell>
                                <TableCell>{row.year}</TableCell>
                                <TableCell>{row.description}</TableCell>
                                <TableCell>{row.languages}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={filteredData?.length || 0}
                page={page}
                rowsPerPage={rowsPerPage}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    );
}

// Wrap your root component with QueryClientProvider
const App = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Section3 />
        </QueryClientProvider>
    );
};

export default App;
