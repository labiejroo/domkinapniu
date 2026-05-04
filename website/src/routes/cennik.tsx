import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as P from './Cennik/parts';
import HeaderWrapper from "../components/HeaderWrapper/HeaderWrapper";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Button from '@mui/material/Button';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#242f25',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  price: string,
) {
  return { name, price };
}

const rows = [
  createData('5 maj - 31 maj', '350 zł'),
  createData('1 czerwiec - 3 czerwiec', '400 zł'),
  createData('4 czerwiec - 7 czerwiec', '450 zł'),
  createData('8 czerwiec - 26 czerwiec', '400 zł'),
  createData('27 czerwiec - 11 lipiec', '540 zł'),
  createData('12 lipiec - 16 sierpień', '590 zł'),
  createData('17 sierpień - 31 sierpień', '490 zł'),
  createData('1 wrzesień - 30 wrzesień', '360 zł'),
];

const Cennik = () => {
    return (
      <P.Wrapper>
        <HeaderWrapper title={'cennik'} />
          <P.TextBox>Poznaj nasz cennik 2026</P.TextBox>
          <P.TableWrapper>
            <TableContainer component={Paper}>
            <Table sx={{ 
              minWidth: 900,
              '@media (max-width: 768px)' : {
                minWidth: 300, 
              }
              }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Termin</StyledTableCell>
                  <StyledTableCell align="right">Cena domku/dzień</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.price}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </P.TableWrapper>
        <P.NoStyledLink to="/kontakt">
        <Button sx={{ 
          backgroundColor: '#c79d09',
          width: '200px',
          height: '37px',
          marginBottom: '20px',
          '&:hover' : {
            backgroundColor: '#242f25',
          }
        }}variant="contained">Rezerwuj pobyt<ArrowRightIcon /></Button>
        </P.NoStyledLink>
      </P.Wrapper>
    );
  }


export default Cennik;