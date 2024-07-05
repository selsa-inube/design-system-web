import { useState } from "react";

import {
  Col,
  Colgroup,
  Pagination,
  Table,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@inubekit/table";

interface IDataItem {
  [key: string]: {
    value: React.ReactNode;
    type?: "text" | "toggle" | "icon" | "custom";
    checked?: boolean;
    onToggle?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: (e: React.MouseEvent) => void;
  };
}

interface TableProps {
  headers: { label: string; key: string; action?: boolean }[];
  data: IDataItem[];
  pageLength?: number;
  caption?: string;
}

const CustomTable = (props: TableProps) => {
  const { headers, data, pageLength = 3 } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / pageLength);

  const firstEntryInPage = (currentPage - 1) * pageLength;
  const lastEntryInPage = Math.min(firstEntryInPage + pageLength, data.length);

  const getPageEntries = () => data.slice(firstEntryInPage, lastEntryInPage);

  const goToFirstPage = () => setCurrentPage(1);
  const goToEndPage = () => setCurrentPage(totalPages);
  const nextPage = () =>
    currentPage !== totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  return (
    <Table>
      <Colgroup>
        {headers.map((_header, index) => (
          <Col key={index} span={1} />
        ))}
      </Colgroup>
      <Thead>
        <Tr border="bottom">
          {headers.map((header, index) => (
            <Th key={index} action={header.action} align="center">
              {header.label}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {getPageEntries().map((row, rowIndex) => (
          <Tr key={rowIndex} border="bottom">
            {headers.map((header, colIndex) => {
              const cellData = row[header.key];
              return (
                <Td
                  key={colIndex}
                  type={cellData?.type || "text"}
                  checked={cellData?.checked}
                  align="center"
                  onToggle={
                    cellData?.type === "toggle"
                      ? (e) => cellData.onToggle && cellData.onToggle(e)
                      : undefined
                  }
                  onClick={
                    cellData?.type === "icon" || cellData?.type === "custom"
                      ? (e) => cellData.onClick && cellData.onClick(e)
                      : undefined
                  }
                >
                  {cellData?.value}
                </Td>
              );
            })}
          </Tr>
        ))}
      </Tbody>
      <Tfoot>
        <Tr border="bottom">
          <Td colSpan={headers.length} type="custom" align="center">
            <Pagination
              firstEntryInPage={firstEntryInPage}
              lastEntryInPage={lastEntryInPage}
              totalRecords={data.length}
              handleStartPage={goToFirstPage}
              handlePrevPage={prevPage}
              handleNextPage={nextPage}
              handleEndPage={goToEndPage}
            />
          </Td>
        </Tr>
      </Tfoot>
    </Table>
  );
};

export { CustomTable };
export type { TableProps };
