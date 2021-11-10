import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ReactQuill from "react-quill";

import { useFormik } from "formik";
import * as Yup from "yup";
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
  CSpinner,
} from "@coreui/react";

import { createPost, getPostById } from "src/redux/actions/postActions";
import {
  createCategory,
  getCategoryById,
  updateCategory,
} from "src/redux/actions/categoryActions";

import { useHistory } from "react-router-dom";
const EditCategory = ({ match }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const detailedCategory = useSelector((state) => state.detailedCategory);
  const { loading, category } = detailedCategory;

  const [load, setLoad] = useState(false);

  const [data, setData] = useState({
    category_title: "",
    slug: "",
    category_desc: "",
  });
  let initialValues = {
    category_title: "",
    slug: "",
    category_desc: "",
  };
  const FormSchema = Yup.object().shape({
    category_title: Yup.string().required("Judul kategori tidak boleh kosong"),
    slug: Yup.string().required("Slug tidak boleh kosong"),
    category_desc: Yup.string().required("Deskripsi tidak boleh kosong"),
  });

  const formik = useFormik({
    initialValues: data || initialValues,
    validationSchema: FormSchema,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      await setLoad(true);
      console.log("values", values);
      // try {
      //   dispatch(
      //     updateCategory({
      //       cat_id: match.params.id,
      //       category_title: categoryTitle,
      //       slug: categorySlug,
      //       category_desc: categoryContent,
      //     })
      //   );
      //   await setLoad(false)

      // } catch (error) {
      //   console.error(error);
      //   // setUploading(false)
      // }

      await setLoad(false);
    },
  });
  useEffect(() => {
    // console.log("state", category);
    dispatch(getCategoryById(match.params.id));
    console.log("state detailedCategory", detailedCategory);
    console.log("state userLogin", userLogin);
  }, [match, dispatch]);

  return (
    <>
      <CRow>
        <CCol xl={12}>
          <CCard>
            <CCardHeader>
              <div className="text-left">Edit category</div>
            </CCardHeader>
            <CCardBody style={{ height: "auto" }}>
              {load && !category ? (
                <CSpinner
                  className="d-flex mx-auto"
                  style={{ width: "5rem", height: "5rem", borderWidth: "6px" }}
                  color="info"
                />
              ) : (
                <CForm onSubmit={formik.handleSubmit}>
                  <CFormGroup>
                    <CLabel
                      htmlFor="title"
                      style={{ fontWeight: "bold", fontSize: 15 }}
                    >
                      Title
                    </CLabel>
                    <CInput
                      style={{ height: "calc(2em + 0.75rem + 2px)" }}
                      disabled={load}
                      id="category_title"
                      name="category_title"
                      placeholder="Masukan Judul Artikel disini"
                      onChange={formik.handleChange}
                      value={formik.values.category_title}
                    />
                    {formik.errors.category_title &&
                      formik.touched.category_title && (
                        <small className="form-text text-danger login-error">
                          {formik.errors.category_title}
                        </small>
                      )}
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
                      disabled={load}
                      id="slug"
                      name="slug"
                      placeholder="example-slug-here"
                      onChange={formik.handleChange}
                      value={formik.values.slug}
                    />
                    {formik.errors.slug && formik.touched.slug && (
                      <small className="form-text text-danger login-error">
                        {formik.errors.slug}
                      </small>
                    )}
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
                      disabled={load}
                      id="category_desc"
                      name="category_desc"
                      placeholder="Masukan Description Categori disini"
                      onChange={formik.handleChange}
                      value={formik.values.category_desc}
                    />
                    {formik.errors.category_desc &&
                      formik.touched.category_desc && (
                        <small className="form-text text-danger login-error">
                          {formik.errors.category_desc}
                        </small>
                      )}
                  </CFormGroup>
                  <div className="text-right">
                    <CButton
                      color="danger"
                      shape="square"
                      className="m-2"
                      size="lg"
                      onClick={(e) => history.push(`/category/list`)}
                    >
                      Cancel
                    </CButton>
                    <CButton
                      type="submit"
                      color="primary"
                      shape="square"
                      className="m-2"
                      size="lg"
                    >
                      Publish
                    </CButton>
                  </div>
                </CForm>
              )}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default EditCategory;
