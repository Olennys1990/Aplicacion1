import { Table } from "antd";
import { ColumnGroupType, ColumnType } from "antd/es/table";
import "../../styles/GeneralStyle.css";

interface DataTableProps<T> {
  columns: (ColumnGroupType<T> | ColumnType<T>)[];
  data: T[];
}
const TablaBase = <T,>({ columns, data }: DataTableProps<T>) => {
  const components = {
    header: {
      cell: (props: any) => (
        <th {...props} style={{ backgroundColor: "#e6f7ff", color: "#000" }}>
          {props.children}
        </th>
      ),
    },
  };
  return (
    <Table
      columns={columns}
      dataSource={data}
      components={components}
      showSorterTooltip={{ target: "sorter-icon" }}
      pagination={{
        pageSize: 2,
        showSizeChanger: true,
        pageSizeOptions: ["2", "4", "6"],
        hideOnSinglePage: true,
      }}
    />
  );
};
export default TablaBase;
