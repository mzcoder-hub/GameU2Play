import React, { useEffect, useState } from "react";

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
  CSpinner,
} from "@coreui/react";

import { useHistory } from "react-router-dom";
import { categorybyIdUrl } from "src/constant/api";
import Swal from "sweetalert2";
import {
  responseEditKategori_failed,
  responseEditKategori_success,
  responseGetKategori_failed,
  titleEditKategori,
} from "./constan";
import fetchData from "src/helpers/fetch";
const EditCategory = ({ match }) => {
  const history = useHistory();
  const [load, setLoad] = useState(false);

  const [data, setData] = useState({
    category_title: "",
    slug: "",
    category_desc: "",
  });
  const FormSchema = Yup.object().shape({
    category_title: Yup.string().required("Judul kategori tidak boleh kosong"),
    slug: Yup.string().required("Slug tidak boleh kosong"),
    category_desc: Yup.string().required("Deskripsi tidak boleh kosong"),
  });

  const formik = useFormik({
    initialValues: data,
    validationSchema: FormSchema,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      await setLoad(true);
      fetchData({
        url: categorybyIdUrl(match.params.id),
        method: "PATCH",
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
            text: responseEditKategori_success,
          });
          await setLoad(false);
        })
        .catch(async (e) => {
          console.log("e", e.response);
          await Swal.fire({
            icon: "error",
            title: "Ooops...!",
            text: responseEditKategori_failed,
          });
          await setLoad(false);
        });
      await setLoad(false);
    },
  });
  const getDataByID = async (id) => {
    await setLoad(true);
    fetchData({
      url: categorybyIdUrl(match.params.id),
      method: "GET",
    })
      .then(async (res) => {
        await setData({
          category_title: res.category_title,
          slug: res.slug,
          category_desc: res.category_desc,
        });
        await setLoad(false);
      })
      .catch(async (e) => {
        console.log("e", e.response);
        await Swal.fire({
          icon: "error",
          title: "Ooops...!",
          text: responseGetKategori_failed,
        });
        await setLoad(false);
      });
    await setLoad(false);
  };
  useEffect(() => {
    getDataByID(match.params.id);
  }, [match]);

  return (
    <>
      <CRow>
        <CCol xl={12}>
          <CCard>
            <CCardHeader>
              <div className="text-left">{titleEditKategori}</div>
            </CCardHeader>
            <CCardBody style={{ height: "auto" }}>
              {load ? (
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
