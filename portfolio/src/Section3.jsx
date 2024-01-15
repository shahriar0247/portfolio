import React from 'react';
import { useQuery } from 'react-query';
import { TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper } from '@mui/material';

const fetchData = async () => {
    // Simulate fetching data from an API
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
};

function Section3() {
    const { data, isLoading, isError } = useQuery('data', fetchData);

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

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading data</p>;

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
                        {/* Add TableHead cells based on your data */}
                    </TableHead>
                    <TableBody>
                        {paginatedData?.map((row) => (
                            <TableRow key={row.id}>
                                {/* Add TableCell components based on your data */}
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

export default Section3;
