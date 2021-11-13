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
import {
  button_title_addUsers,
  button_title_deleteUsers,
  button_title_editUsers,
  cancelButtonText,
  confirmButtonColor,
  confirmButtonText,
  responseDeleteUsers_failed,
  responseDeleteUsers_success,
  textAlertDelete,
  titleAlertDelete,
  title_listUsers,
} from "./constan";
import { getUsersByIdUrl } from "src/constant/api";
import Swal from "sweetalert2";
import fetchData from "src/helpers/fetch";

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
    currentPage !== newPage && history.push(`/users/list?page=${newPage}`);
  };

  const userList = useSelector((state) => state.userList);
  const { loading, users } = userList;

  const [load, setLoad] = useState(false);
  const actionDelete = async (id) => {
    await setLoad(true);

    fetchData({
      url: getUsersByIdUrl(id),
      method: "DELETE",
    })
      .then(async (res) => {
        if (currentPage !== page) await setPage(currentPage);
        await dispatch(listUsers());
        await Swal.fire({
          icon: "success",
          title: "Success!",
          text: responseDeleteUsers_success,
        });
      })
      .catch((error) => {
        console.log("getDataByID error", error);
        Swal.fire({
          icon: "error",
          title: "Ooops...!",
          text: responseDeleteUsers_failed,
        });
      });
    await setLoad(false);
  };
  useEffect(() => {
    currentPage !== page && setPage(currentPage);
    dispatch(listUsers());
  }, [dispatch, currentPage, page]);

  return (
    <>
      {loading || load ? (
        <></>
      ) : (
        <CRow>
          <CCol xl={12}>
            <CCard>
              <CCardHeader>
                <div className="text-left">{title_listUsers}</div>
                <div className="text-right">
                  <CButton
                    color="primary"
                    onClick={(e) => history.push(`/users/add`)}
                  >
                    {button_title_addUsers}
                  </CButton>
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
                          {button_title_editUsers}
                        </CButton>
                        |
                        <CButton
                          color="danger"
                          size="sm"
                          className="m-2"
                          onClick={(e) => {
                            Swal.fire({
                              icon: "error",
                              title: titleAlertDelete,
                              text: textAlertDelete,
                              showCancelButton: true,
                              confirmButtonText: confirmButtonText,
                              cancelButtonText: cancelButtonText,
                              confirmButtonColor: confirmButtonColor,
                            }).then((result) => {
                              /* Read more about isConfirmed, isDenied below */
                              if (result.isConfirmed) {
                                actionDelete(item.uid);
                              }
                            });
                          }}
                        >
                          {button_title_deleteUsers}
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
