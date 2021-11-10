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
  CSpinner,
} from "@coreui/react";

import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { listCategorys } from "src/redux/actions/categoryActions";
import {
  button_tetle_addKategori,
  button_tetle_deleteKategori,
  button_tetle_editKategori,
  cancelButtonText,
  confirmButtonText,
  textAlertDelete,
  titleAlertDelete,
  title_listKategori,
} from "./constan";

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};

const CategoryList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const queryPage = useLocation().search.match(/page=([0-9]+)/, "");
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);

  const pageChange = (newPage) => {
    currentPage !== newPage && history.push(`/category/list?page=${newPage}`);
  };

  const allCategoryList = useSelector((state) => state.allCategoryList);
  const { loading, categorize } = allCategoryList;

  const actionDelete = (id) => {
    console.log("actionDelete", id);
  };
  useEffect(() => {
    currentPage !== page && setPage(currentPage);
    dispatch(listCategorys());
  }, [dispatch, currentPage, page]);

  return (
    <>
      <CRow>
        <CCol xl={12}>
          <CCard>
            <CCardHeader>
              <div className="text-left">{title_listKategori}</div>
              <div className="text-right">
                <CButton
                  color="primary"
                  onClick={(e) => history.push(`/category/add`)}
                >
                  {button_tetle_addKategori}
                </CButton>
              </div>
            </CCardHeader>{" "}
            {loading ? (
              <CSpinner
                className="d-flex mx-auto"
                style={{
                  width: "5rem",
                  height: "5rem",
                  borderWidth: "6px",
                }}
                color="info"
              />
            ) : (
              <CCardBody>
                <CDataTable
                  items={categorize}
                  fields={[
                    { key: "cat_id", _classes: "font-weight-bold" },
                    "category_title",
                    "slug",
                    "action",
                  ]}
                  hover
                  striped
                  itemsPerPage={5}
                  activePage={page}
                  clickableRows
                  // onRowClick={(item) => history.push(`/post/${item.id}`)}
                  scopedSlots={{
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
                          key={item.cat_id}
                          color="primary"
                          size="sm"
                          className="m-2"
                          onClick={(e) => {
                            history.push(`/category/edit/${item.cat_id}`);
                          }}
                        >
                          {button_tetle_editKategori}
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
                              confirmButtonColor: "#E55353",
                            }).then((result) => {
                              /* Read more about isConfirmed, isDenied below */
                              if (result.isConfirmed) {
                                actionDelete(item.cat_id);
                              }
                            });
                          }}
                        >
                          {button_tetle_deleteKategori}
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
            )}
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default CategoryList;
