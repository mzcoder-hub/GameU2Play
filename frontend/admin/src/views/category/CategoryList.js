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

import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { listPosts } from "src/redux/actions/postActions";
import { listCategorys } from "src/redux/actions/categoryActions";

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
    currentPage !== newPage && history.push(`/post/list?page=${newPage}`);
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
              <div className="text-left">
                CategoryList
                <small className="text-muted"> example</small>
              </div>
              <div className="text-right">
                <CButton
                  color="primary"
                  onClick={(e) => history.push(`/category/add`)}
                >
                  Add Posts
                </CButton>
              </div>
            </CCardHeader>
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
                        Edit
                      </CButton>
                      |
                      <CButton
                        color="danger"
                        size="sm"
                        className="m-2"
                        onClick={(e) => {
                          Swal.fire({
                            icon: "error",
                            title: "Peringatan!",
                            text: `Yakin akan menghapus category ini ?`,
                            showCancelButton: true,
                            confirmButtonText: `Hapus`,
                            cancelButtonText: `Batal`,
                            confirmButtonColor: "#E55353",
                          }).then((result) => {
                            /* Read more about isConfirmed, isDenied below */
                            if (result.isConfirmed) {
                              actionDelete(item.cat_id);
                            }
                          });
                        }}
                      >
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
    </>
  );
};

export default CategoryList;
