import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import ReactQuill from "react-quill";

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CRow,
} from "@coreui/react";

import { createCategory } from "src/redux/actions/categoryActions";

const AddCategory = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const createsCategory = useSelector((state) => state.createsCategory);
  const { success, error } = createsCategory;

  useEffect(() => {
    if (success) {
      history.push(`/category/list`);
    }
  }, [success, history]);

  const [categoryTitle, setcategoryTitle] = useState("");
  const [categorySlug, setcategorySlug] = useState("");
  const [categoryContent, setcategoryContent] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      dispatch(
        createCategory({
          cat_id: match.params.id,
          category_title: categoryTitle,
          slug: categorySlug,
          category_desc: categoryContent,
        })
      );
    } catch (error) {
      console.error(error);
      // setUploading(false)
    }
  };

  const handleChangeTitle = (e) => {
    setcategoryTitle(e.currentTarget.value);
    console.log(e.currentTarget.value);
  };
  const handleChangeSlug = (e) => {
    setcategorySlug(e.currentTarget.value);
  };
  const handleChangeContent = (e) => {
    setcategoryContent(e.currentTarget.value);
  };
  return (
    <>
      <CRow>
        <CCol xl={12}>
          <CCard>
            <CCardHeader>
              <div className="text-left">
                Add New Post
                <small className="text-muted"> example</small>
              </div>
            </CCardHeader>
            <CCardBody style={{ height: "auto" }}>
              <CForm>
                <CFormGroup>
                  <CLabel
                    htmlFor="title"
                    style={{ fontWeight: "bold", fontSize: 15 }}
                  >
                    Title
                  </CLabel>
                  <CInput
                    style={{ height: "calc(2em + 0.75rem + 2px)" }}
                    type="text"
                    id="title"
                    placeholder="Masukan Judul Artikel disini"
                    value={categoryTitle}
                    onChange={handleChangeTitle}
                  />
                </CFormGroup>
                <CFormGroup>
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
                    value={categorySlug}
                    onChange={handleChangeSlug}
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel
                    htmlFor="title"
                    style={{ fontWeight: "bold", fontSize: 15 }}
                  >
                    Description
                  </CLabel>
                  <CInput
                    style={{ height: "calc(2em + 0.75rem + 2px)" }}
                    type="text"
                    id="title"
                    placeholder="Masukan Description Categori disini"
                    value={categoryContent}
                    onChange={handleChangeContent}
                  />
                </CFormGroup>
                <div className="text-right">
                  <CButton
                    color="danger"
                    shape="square"
                    className="m-2"
                    size="lg"
                    onClick={(e) => submitHandler(e)}
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
                    Publish
                  </CButton>
                </div>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default AddCategory;
