import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CButton,
} from "@coreui/react";

import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "src/redux/actions/userActions";

const getBadge = (status) => {
  switch (status) {
    case "active":
      return "success";
    case "non":
      return "warning";
    default:
      return "primary";
  }
};
const getBadgeRole = (status) => {
  switch (status) {
    case "superadmin":
      return "danger";
    case "admin":
      return "warning";
    case "user":
      return "secondary";
    default:
      return "primary";
  }
};

const Users = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const queryPage = useLocation().search.match(/page=([0-9]+)/, "");
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);

  const pageChange = (newPage) => {
    currentPage !== newPage && history.push(`/post/list?page=${newPage}`);
  };

  const userList = useSelector((state) => state.userList);
  const { loading, users } = userList;

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
    dispatch(listUsers());
  }, [dispatch, currentPage, page]);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <CRow>
          <CCol xl={12}>
            <CCard>
              <CCardHeader>
                <div className="text-left">
                  TournamentList
                  <small className="text-muted"> example</small>
                </div>
                <div className="text-right">
                  {/* <CButton
                    color="primary"
                    onClick={(e) => history.push(`/users/add`)}
                  >
                    Add Posts
                  </CButton> */}
                </div>
              </CCardHeader>
              <CCardBody>
                <CDataTable
                  items={users}
                  fields={[
                    { key: "uid", _classes: "font-weight-bold" },
                    "first_name",
                    "email",
                    "phone_number",
                    "role",
                    "status",
                    "action",
                  ]}
                  hover
                  striped
                  itemsPerPage={5}
                  activePage={page}
                  clickableRows
                  // onRowClick={(item) => history.push(`/post/${item.id}`)}
                  scopedSlots={{
                    role: (item) => (
                      <td>
                        <CBadge color={getBadgeRole(item.role)}>
                          {item.role}
                        </CBadge>
                      </td>
                    ),
                    status: (item) => (
                      <td>
                        <CBadge color={getBadge(item.status)}>
                          {item.status}
                        </CBadge>
                      </td>
                    ),
                    action: (item) => (
                      <td>
                        <CButton
                          key={item.uid}
                          color="primary"
                          size="sm"
                          className="m-2"
                          onClick={(e) => {
                            history.push(`/users/edit/${item.uid}`);
                          }}
                        >
                          Edit
                        </CButton>
                        |
                        <CButton color="danger" size="sm" className="m-2">
                          Delete
                        </CButton>
                      </td>
                    ),
                  }}
                />
                <CPagination
                  activePage={page}
                  onActivePageChange={pageChange}
                  pages={5}
                  doubleArrows={false}
                  align="center"
                />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      )}
    </>
  );
};

export default Users;
