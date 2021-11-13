import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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

import { useFormik } from "formik";
import * as Yup from "yup";
import {
  responseAddKategori_failed,
  responseAddKategori_success,
  titleAddKategori,
} from "./constan";
import Swal from "sweetalert2";
import { categoryUrl } from "src/constant/api";
import fetchData from "src/helpers/fetch";
const AddCategory = () => {
  const history = useHistory();

  const [load, setLoad] = useState(false);
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
    initialValues: initialValues,
    validationSchema: FormSchema,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      await setLoad(true);
      fetchData({
        url: categoryUrl,
        method: "POST",
        data: {
          category_title: values.category_title,
          slug: values.slug,
          category_desc: values.category_desc,
        },
      })
        .then(async (res) => {
          await history.push(`/category/list`);
          await Swal.fire({
            icon: "success",
            title: "Success!",
            text: responseAddKategori_success,
          });
          await setLoad(false);
        })
        .catch(async (e) => {
          console.log("e", e.response);
          await Swal.fire({
            icon: "error",
            title: "Ooops...!",
            text: responseAddKategori_failed,
          });
          await setLoad(false);
        });
      await setLoad(false);
    },
  });

  return (
    <>
      <CRow>
        <CCol xl={12}>
          <CCard>
            <CCardHeader>
              <div className="text-left">{titleAddKategori}</div>
            </CCardHeader>
            <CCardBody style={{ height: "auto" }}>
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
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default AddCategory;
