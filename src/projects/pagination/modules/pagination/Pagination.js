import React, { useEffect, useState, useRef } from "react";
import { Modal, Row, Col, Container, Button } from "react-bootstrap";
import ReactTable from "react-table";
import Alert from "@material-ui/lab/Alert";
import moment from "moment";
import "react-table/react-table.css";
import "./Pagination.scss";
import TablePagination from "@material-ui/core/TablePagination";

/**@method filterCaseInsensitive used to search case insensitive */
const filterCaseInsensitive = (filter, row) => {
  const id = filter.pivotId || filter.id;
  return row[id] !== undefined && row[id] !== null
    ? String(row && row[id].toLowerCase()).startsWith(
        filter && filter.value.toLowerCase()
      )
    : true;
};

const Pagination = (props) => {
  const { hits } = props;
  console.log(hits);
  const [showModal, setShowModal] = useState(false);

  const [selected, setSelected] = useState();

  const [apiPage, setApiPage] = useState(2);
  const apiPageRef = useRef(apiPage);
  apiPageRef.current = apiPage;

  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setApiPage(apiPageRef.current + 1);
      props.getTableData(apiPageRef.current);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  /**@method renderActionButton used to render show button */
  const renderActionButton = (row) => {
    return (
      <Row className="d-flex justify-content-center align-items-center">
        <Button
          onClick={() => {
            setShowModal(true);
            setSelected(row._original);
            console.log(row);
          }}
        >
          Show
        </Button>
      </Row>
    );
  };

  /**@method toggleModal used to show and hide modal */
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  /**@method renderDate used to show formated date */
  const renderDate = (row) => {
    let date = moment(row._original.created_at).format("DD-MM-YYYY HH:mm");
    return <p>{date}</p>;
  };

  /**@method renderModal used to show modal date */
  const renderModal = () => {
    return (
      <Modal
        show={showModal}
        onHide={() => toggleModal()}
        // className="modal"
        dialogClassName="modal-90w !important"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {selected && selected.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="show-grid">
              <Col>
                <div>
                  <pre>{JSON.stringify(selected && selected, null, 2)}</pre>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => toggleModal()}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  };

  /**@Object columns to render ui for table columns*/

  const columns = [
    {
      Header: "Title",
      accessor: "title",
      sortable: false,
      filterable: true,
      headerStyle: {
        justifyContent: "center",
      },
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      },
    },
    {
      Header: "URL",
      accessor: "url",
      sortable: false,
      filterable: true,
      headerStyle: {
        justifyContent: "center",
      },
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textOverflow: "ellipsis",
      },
    },
    {
      Header: "Author",
      accessor: "author",
      sortable: true,
      filterable: true,
      headerStyle: {
        justifyContent: "center",
      },
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },
    {
      Header: "Created Date",
      accessor: "created_at",
      filterable: false,
      sortable: true,
      headerStyle: {
        justifyContent: "center",
      },
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      Cell: ({ row }) => renderDate(row),
    },
    {
      Header: "Action",
      sortable: false,
      Cell: ({ row }) =>
        // return <Button onClick={setShowModal(true)}>Show</Button>;
        renderActionButton(row),
    },
  ];

  const paginationPageChange = (e) => {
    console.log(e);
  };

  const TablePaginationPageChange = (e) => {
    console.log(e);
  };

  const onChangeRowsPerPagePageChange = (e) => {
    console.log(e);
  };

  return (
    <div>
      <Alert severity="info">
        New Data will be added after every 10 second..!
      </Alert>
      <ReactTable
        data={hits}
        noDataText="No records found"
        columns={columns}
        // defaultPageSize={20}
        // minRows={10}
        showPagination={false}
        defaultFilterMethod={(filter, row) =>
          filterCaseInsensitive(filter, row)
        }
      />
      {/* <Pagination
        count={10}
        page={page}
        onChange={(e) => paginationPageChange(e)}
      /> */}
      {/* <TablePagination
        component="div"
        count={100}
        page={page}
        onChangePage={(e) => TablePaginationPageChange(e)}
        rowsPerPage={rowsPerPage}
        onChangeRowsPerPage={(e) => onChangeRowsPerPagePageChange(e)}
      /> */}
      {renderModal()}
    </div>
  );
};

export default Pagination;
