import { TableRow, TableCell } from '@mui/material'
import { FC } from 'react'
import { headCells, HeadCell } from './TableHeader.data'
import { StyledTableHead } from './TableHeader.styled'

const TableHeader: FC = () => {
  return (
    <StyledTableHead>
      <TableRow>
        {headCells.map((headCell: HeadCell) => (
          <TableCell key={headCell.id}>{headCell.label}</TableCell>
        ))}
      </TableRow>
    </StyledTableHead>
  )
}

export default TableHeader
