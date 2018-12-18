import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';

const columns = [
  {
    title: 'Product Name',
    dataIndex: 'productname',
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.productname.indexOf(value) === 0,
    sorter: (a, b) => a.productname.length - b.productname.length
  },
  {
    title: 'Product Id',
    dataIndex: 'productid'
    // defaultSortOrder: 'descend',
    // sorter: (a, b) => a.age - b.age
  },
  {
    title: 'Product Image',
    dataIndex: 'product image'
    // filters: [
    //   {
    //     text: 'London',
    //     value: 'London'
    //   },
    //   {
    //     text: 'New York',
    //     value: 'New York'
    //   }
    // ],
    // filterMultiple: false,
    // onFilter: (value, record) => record.address.indexOf(value) === 0,
    // sorter: (a, b) => a.address.length - b.address.length
  },
  {
    title: 'Edit',
    dataIndex: 'editproduct'
    // filters: [
    //   {
    //     text: 'London',
    //     value: 'London'
    //   },
    //   {
    //     text: 'New York',
    //     value: 'New York'
    //   }
    // ],
    // filterMultiple: false,
    // onFilter: (value, record) => record.address.indexOf(value) === 0,
    // sorter: (a, b) => a.address.length - b.address.length
  }
];

const data = [
  {
    key: '1',
    productname: 'AIS sunpower',
    productid: 3222,
    productimage: 'TBD',
    editproduct: <button>edit</button>
  },
  {
    key: '2',
    productname: 'Wiegel Indoc',
    productid: 2232,
    editproduct: <button>edit</button>
  },
  {
    key: '3',
    productname: 'Yokohama rubber',
    productid: 3432,
    editproduct: <button>edit</button>
  },
  {
    key: '4',
    productname: 'Ibem cleanser',
    productid: 1322,
    editproduct: <button>edit</button>
  }
];

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

const TableComponent = props => {
  return <Table columns={columns} dataSource={data} onChange={onChange} />;
};

export default TableComponent;
