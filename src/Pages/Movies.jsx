import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import MovieItem from "../components/MovieItem";
import TablePagination from "@mui/material/TablePagination";

const Movies = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const url = `http://localhost:3001/movies?_page=${page+1}&_limit=${rowsPerPage}`;

  const { data, loading, error } = useFetch(url)
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage );
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An Error Occured, please come back later :(</div>;
  }

  console.log(data)

  return (
    <div className="container mx-auto py-6">
      <TablePagination
        component="div"
        count={1000}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <div className="grid grid-cols-4 gap-8 ">
        {data.map((movie) => {
          return <MovieItem key={movie.id} {...movie} />;
        })}
      </div>
    </div>
  );
};

export default Movies;
