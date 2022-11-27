import { useNavigate, useParams } from "react-router-dom";
import cityData from "../../../Data/cityData.json";
import tourData from "../../../Data/tourData.json";

import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import { Avatar, Typography } from "@mui/material";

import PropTypes from "prop-types";
import "./css/search.css";

export const Search = () => {
  const params = useParams();
  const searchText = params.searchText;

  return <SearchDetail text={searchText} />;
};

export const SearchDetail = ({ text }) => {
  const nevigate = useNavigate();

  const clickMethod = (url) => {
    nevigate(url);
  };
  const cityList = tourData.filter(
    (data) =>
      data.cityeng.includes(text) ||
      data.city.includes(text) ||
      data.name.includes(text) ||
      data.namecode.includes(text)
  );
  const rows = cityList;
  return (
    <div className="search-wrapper">
    <React.Fragment>
      <div className="search-01">
      <Typography variant="h6" sx={{ml:1}}>여행지 검색 결과</Typography>
      </div>
      <div className="search-table">
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>도시</TableCell>
            <TableCell>종류</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.namecode} onClick={() => clickMethod(`/CityDetail/Place/${row.namecode}`)} sx={{cursor:"pointer"}}>
              <TableCell>
                <Avatar
                  alt="image"
                  src={Array.isArray(row.image) ? row.image[0] : row.image}
                />
              </TableCell>
              <TableCell>{`${row.name} (${row.namecode.split("-")[1]})`}</TableCell>
              <TableCell>{`${row.city} (${row.cityeng})`}</TableCell>
              <TableCell>
                {Array.isArray(row.semitype) ? row.semitype[0] : row.semitype}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
      <div className="search-link">
      <Link color="primary" href="/TourGuide" sx={{ ml: 1, mt: 3 }}>
        여행지 더보기
      </Link>
      </div>
    </React.Fragment>
    </div>
  );
};
