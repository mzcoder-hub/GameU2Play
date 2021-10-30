import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ReactQuill from "react-quill";

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CLabel,
  CRow,
  CSelect,
} from "@coreui/react";

import { getUserDetails } from "src/redux/actions/userActions";

const EditPost = ({ match, history }) => {
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, user } = userDetails;

  const [stateStatus, setStateStatus] = useState("");
  const [stateRole, setStateRole] = useState("");

  useEffect(() => {
    dispatch(getUserDetails(match.params.id));
    setStateStatus(user.status);
    setStateRole(user.role);
  }, [match, dispatch, user.role, user.status]);

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      dispatch();
      // updateCategory({
      //   cat_id: match.params.id,
      //   category_title: categoryTitle,
      //   slug: categorySlug,
      //   category_desc: categoryContent,
      // })
    } catch (error) {
      console.error(error);
      // setUploading(false)
    }
  };
  // const handleChangeTournamentTitle = (e) => {
  //   settournamentTitle(e.currentTarget.value);
  // };

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
                  Update user {user.uid}
                  <small className="text-muted"> example</small>
                </div>
              </CCardHeader>
              <CCardBody style={{ height: "auto" }}>
                <CForm>
                  <CFormGroup>
                    <CLabel
                      htmlFor="images"
                      style={{ fontWeight: "bold", fontSize: 15 }}
                    >
                      Role
                    </CLabel>
                    <CSelect
                      value={stateRole}
                      onChange={(e) => setStateRole(e.target.value)}
                    >
                      <option key="1" value="admin">
                        Admin
                      </option>
                      <option key="2" value="superadmin">
                        Super Admin
                      </option>
                      <option key="3" value="user">
                        user
                      </option>
                    </CSelect>
                  </CFormGroup>
                  <CFormGroup>
                    <CLabel
                      htmlFor="images"
                      style={{ fontWeight: "bold", fontSize: 15 }}
                    >
                      Status
                    </CLabel>
                    <CSelect
                      value={stateStatus}
                      onChange={(e) => setStateStatus(e.target.value)}
                    >
                      <option key="1" value="active">
                        Active
                      </option>
                      <option key="2" value="non">
                        Non Active
                      </option>
                      <option key="3" value="banned">
                        Banned
                      </option>
                    </CSelect>
                  </CFormGroup>
                  {/* <CFormGroup>
                  <CLabel
                    htmlFor="slug"
                    style={{ fontWeight: "bold", fontSize: 15 }}
                  >
                    Slug
                  </CLabel>
                  <CInput
                    style={{ height: "calc(2em + 0.75rem + 2px)" }}
                    type="text"
                    id="slug"
                    placeholder="example-slug-here"
                    value={tournamentSlug}
                    onChange={handleChangeTournamentSlug}
                  />
                </CFormGroup> */}
                  <div className="text-right">
                    <CButton
                      color="danger"
                      shape="square"
                      className="m-2"
                      size="lg"
                      onClick={(e) => history.push("/users/list")}
                    >
                      Cancel
                    </CButton>
                    <CButton
                      color="primary"
                      shape="square"
                      className="m-2"
                      size="lg"
                      onClick={(e) => submitHandler(e)}
                    >
                      Save
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      )}
    </>
  );
};

export default EditPost;
