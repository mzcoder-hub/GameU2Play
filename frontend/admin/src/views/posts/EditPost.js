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
  CSpinner,
} from "@coreui/react";

import {
  buttonSavedEdit,
  cancelButtonText,
  placeholderSelectKategori,
  responseEditPost_failed,
  responseEditPost_success,
  responseGetPost_failed,
  titleEditPost,
  uploadImagefailed,
} from "./constan";
import { userInfoFromStorage } from "src/constant/local";
import { listCategorys } from "src/redux/actions/categoryActions";

import Select from "react-select";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  getPostByIdUrl,
  getPostByIdUrl2,
  uploadImageSingle,
} from "src/constant/api";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import fetchData from "src/helpers/fetch";
const PostList = ({ match }) => {
  const history = useHistory();
  var toolbarOptions = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
      ["link", "image"],

      ["clean"],
    ],
  };

  const dispatch = useDispatch();

  const userLogin = userInfoFromStorage;

  const [load, setLoad] = useState(false);
  let initialValues = {
    post_title: "",
    post_content: "",
    cat_id: "",
    // primary_image: "",
    slug: "",
    status: "",
    value_cat_id: null,
  };
  const FormSchema = Yup.object().shape({
    post_title: Yup.string().required("post_title tidak boleh kosong"),
    post_content: Yup.string().required("post_content tidak boleh kosong"),
    cat_id: Yup.string().required("cat_id tidak boleh kosong"),
    // primary_image: Yup.string().required("primary_image tidak boleh kosong"),
    slug: Yup.string().required("slug tidak boleh kosong"),
    status: Yup.string().required("status tidak boleh kosong"),
  });

  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: FormSchema,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      await setLoad(true);
      let categories_id = "";
      const Arr_cat_id = values.Arr_cat_id;
      // console.log("Arr_cat_id", Arr_cat_id);
      Arr_cat_id.map((data, idx) => {
        if (idx === 0) categories_id = data.cat_id;
        else categories_id = categories_id + "," + data.cat_id;
        return data;
      });
      const dataItem = {
        post_title: values.post_title,
        post_content: values.post_content,
        uid: userLogin.uid,
        categories_id: categories_id,
        primary_image: image ? image : values.primary_image,
        slug: values.slug,
        status: values.status,
      };
      console.log("data", dataItem);
      fetchData({
        url: getPostByIdUrl(match.params.id),
        method: "PATCH",
        data: dataItem,
      })
        .then(async (res) => {
          await history.push(`/post/list`);
          await Swal.fire({
            icon: "success",
            title: "Success!",
            text: responseEditPost_success,
          });
          await setLoad(false);
        })
        .catch(async (e) => {
          console.log("e", e.response);
          await Swal.fire({
            icon: "error",
            title: "Ooops...!",
            text: responseEditPost_failed,
          });
          await setLoad(false);
        });
      await setLoad(false);
    },
  });
  const uploadFileHandler = async (e) => {
    console.log("uploadFileHandler", e);
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    if (e.target.files[0]) {
      await setUploading(true);
      try {
        const upload = await fetchData({
          url: uploadImageSingle,
          method: "POST",
          isForm: true,
          data: formData,
        });
        await setImage(upload);
        await setUploading(false);
      } catch (error) {
        console.error(error);
        await Swal.fire({
          icon: "error",
          title: "Ooops...!",
          text: uploadImagefailed,
        });
        await setUploading(false);
      }
    }
  };
  const allCategoryList = useSelector((state) => state.allCategoryList);
  const { loading, categorize } = allCategoryList;

  const getDataByID = async (id) => {
    await setLoad(true);
    fetchData({
      url: getPostByIdUrl2(match.params.id),
      method: "GET",
    })
      .then(async (res) => {
        formik.setValues(res);
        await history.push(`/post/list`);
        await Swal.fire({
          icon: "success",
          title: "Success!",
          text: responseEditPost_success,
        });
        await setLoad(false);
      })
      .catch(async (e) => {
        console.log("e", e.response);
        await Swal.fire({
          icon: "error",
          title: "Ooops...!",
          text: responseGetPost_failed,
        });
        await setLoad(false);
      });
    await setLoad(false);
  };
  useEffect(() => {
    if (match.params.id) {
      getDataByID(match.params.id);
    }
    dispatch(listCategorys());
  }, [match, dispatch]);

  return (
    <>
      <CRow>
        <CCol xl={12}>
          <CCard>
            <CCardHeader>
              <div className="text-left">{titleEditPost}</div>
            </CCardHeader>
            <CCardBody style={{ height: "auto" }}>
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
                      id="post_title"
                      name="post_title"
                      placeholder="Masukan Judul Artikel disini"
                      onChange={formik.handleChange}
                      value={formik.values.post_title}
                    />
                    {formik.errors.post_title && formik.touched.post_title && (
                      <small className="form-text text-danger login-error">
                        {formik.errors.post_title}
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
                      placeholder="example-slug-disini"
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
                      htmlFor="images"
                      style={{ fontWeight: "bold", fontSize: 15 }}
                    >
                      Featured Image
                    </CLabel>
                    <CInput
                      style={{ height: "calc(2em + 0.75rem + 2px)" }}
                      accept="*"
                      type="file"
                      id="images"
                      loading={uploading || load}
                      placeholder="Choose Featured Images"
                      // value={image}
                      onChange={uploadFileHandler}
                    />
                    {uploading && (
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    )}
                  </CFormGroup>
                  <CFormGroup>
                    <CLabel
                      htmlFor="images"
                      style={{ fontWeight: "bold", fontSize: 15 }}
                    >
                      Content
                    </CLabel>
                    <ReactQuill
                      theme="snow"
                      id="content"
                      name="post_content"
                      modules={toolbarOptions}
                      onChange={(e) => formik.setFieldValue("post_content", e)}
                      value={formik.values.post_content}
                    />
                    {formik.errors.post_content &&
                      formik.touched.post_content && (
                        <small className="form-text text-danger login-error">
                          {formik.errors.post_content}
                        </small>
                      )}
                  </CFormGroup>
                  <CRow>
                    <CCol md={12}>
                      <CFormGroup>
                        <CLabel
                          htmlFor="images"
                          style={{ fontWeight: "bold", fontSize: 15 }}
                        >
                          Category
                        </CLabel>
                        <Select
                          className="basic-multi-select"
                          classNamePrefix="select"
                          isMulti
                          isDisabled={loading}
                          isLoading={loading}
                          name="cat_id"
                          id="cat_id"
                          placeholder={placeholderSelectKategori}
                          options={categorize || []}
                          getOptionLabel={(item) => item.category_title}
                          getOptionValue={(item) => item.cat_id}
                          value={formik.values.value_cat_id}
                          onChange={(val) => {
                            formik.setFieldValue("value_cat_id", val);
                            formik.setFieldValue("cat_id", JSON.stringify(val));
                          }}
                        />
                        {formik.errors.cat_id && formik.touched.cat_id && (
                          <div className="text-danger text-md">
                            {formik.errors.cat_id}
                          </div>
                        )}
                      </CFormGroup>
                    </CCol>
                  </CRow>
                  <CFormGroup>
                    <CLabel
                      htmlFor="status"
                      style={{ fontWeight: "bold", fontSize: 15 }}
                    >
                      status
                    </CLabel>
                    <CSelect
                      name="status"
                      onChange={formik.handleChange}
                      value={formik.values.status}
                    >
                      <option key="0" value="">
                        Pilih status
                      </option>
                      <option key="1" value="draft">
                        Draft
                      </option>
                      <option key="2" value="published">
                        Published
                      </option>
                      <option key="3" value="deleted">
                        Deleted
                      </option>
                    </CSelect>
                    {formik.errors.status && formik.touched.status && (
                      <small className="form-text text-danger login-error">
                        {formik.errors.status}
                      </small>
                    )}
                  </CFormGroup>
                  <div className="text-right">
                    <CButton
                      color="danger"
                      shape="square"
                      className="m-2"
                      size="lg"
                      onClick={(e) => history.push(`/post/list`)}
                    >
                      {cancelButtonText}
                    </CButton>
                    <CButton
                      color="primary"
                      shape="square"
                      className="m-2"
                      size="lg"
                      type="submit"
                    >
                      {buttonSavedEdit}
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

export default PostList;
