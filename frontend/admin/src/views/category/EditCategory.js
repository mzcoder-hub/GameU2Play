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
  CInput,
  CLabel,
  CRow,
  CSelect,
} from "@coreui/react";

import { createPost, getPostById } from "src/redux/actions/postActions";
import {
  createCategory,
  getCategoryById,
  updateCategory,
} from "src/redux/actions/categoryActions";

const EditCategory = ({ match }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const detailedCategory = useSelector((state) => state.detailedCategory);
  const { loading, category } = detailedCategory;

  useEffect(() => {
    dispatch(getCategoryById(match.params.id));
  }, [match, dispatch]);

  const [categoryTitle, setcategoryTitle] = useState(category.category_title);
  const [categorySlug, setcategorySlug] = useState(category.slug);
  const [categoryContent, setcategoryContent] = useState(
    category.category_desc
  );

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      dispatch(
        updateCategory({
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

export default EditCategory;
