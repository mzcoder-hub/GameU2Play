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
import { listPosts } from "src/redux/actions/postActions";
import { button_title_addPost, button_title_deletePost, button_title_editPost, cancelButtonText, confirmButtonText, textAlertDelete, titleAlertDelete, title_listPost } from "./constan";
import Swal from "sweetalert2";

// const getBadge = (status) => {
//   switch (status) {
//     case "Active":
//       return "success";
//     case "Inactive":
//       return "secondary";
//     case "Pending":
//       return "warning";
//     case "Banned":
//       return "danger";
//     default:
//       return "primary";
//   }
// };

const PostList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const queryPage = useLocation().search.match(/page=([0-9]+)/, "");
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);

  const pageChange = (newPage) => {
    currentPage !== newPage && history.push(`/post/list?page=${newPage}`);
  };

  const allPostList = useSelector((state) => state.allPostList);
  const { loading, posts } = allPostList;

  const actionDelete = async (id) => {
    console.log("actionDelete id = ", id)
    // await setLoad(true); 
    // await setLoad(false); 
  };
  useEffect(() => {
    currentPage !== page && setPage(currentPage);
    dispatch(listPosts());
  }, [dispatch, currentPage, page]);

  const getBadge = (status) => {
    switch (status) {
      case "published":
        return "success";
      case "draft":
        return "secondary";
      case "deleted":
        return "danger";
      default:
        return "primary";
    }
  };
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
                  {title_listPost}
                </div>
                <div className="text-right">
                  <CButton
                    color="primary"
                    onClick={(e) => history.push(`/post/add`)}
                  >
                    {button_title_addPost}
                  </CButton>
                </div>
              </CCardHeader>
              <CCardBody>
                <CDataTable
                  items={posts}
                  fields={[
                    { key: "post_id", _classes: "font-weight-bold" },
                    "post_title",
                    "slug",
                    "uid",
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
                          key={item.post_id}
                          color="primary"
                          size="sm"
                          className="m-2"
                          onClick={(e) => {
                            history.push(`/post/edit/${item.post_id}`);
                          }}
                        >
                          {button_title_editPost}
                        </CButton>
                        |
                        <CButton color="danger" size="sm" className="m-2"
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
                                actionDelete(item.post_id);
                              }
                            });
                          }}>
                          {button_title_deletePost}
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

export default PostList;
