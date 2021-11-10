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
} from "./constan";
import { userInfoFromStorage } from "src/constant/local";
import { listCategorys } from "src/redux/actions/categoryActions";

import Select from "react-select";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { getPostByIdUrl, PostUrl, uploadImageSingle } from "src/constant/api";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
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
    value_cat_id: null,
  };
  const FormSchema = Yup.object().shape({
    post_title: Yup.string().required("post_title tidak boleh kosong"),
    post_content: Yup.string().required("post_content tidak boleh kosong"),
    cat_id: Yup.string().required("cat_id tidak boleh kosong"),
    // primary_image: Yup.string().required("primary_image tidak boleh kosong"),
    slug: Yup.string().required("slug tidak boleh kosong"),
  });

  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: FormSchema,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      await setLoad(true);
      values.uid = userLogin.uid;
      values.primary_image = image ? image : "";
      delete values.value_cat_id;
      console.log("values", values);
      // post data
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userLogin.token}`,
          },
        };
        const { data } = await axios.post(PostUrl, values, config);
        if (data) {
          await Swal.fire({
            icon: "success",
            title: "Success!",
            text: responseEditPost_success,
          });
        } else {
          await Swal.fire({
            icon: "error",
            title: "Ooops...!",
            text: responseEditPost_failed,
          });
        }
        await setLoad(false);
      } catch (error) {
        console.error("error", error);
        await Swal.fire({
          icon: "error",
          title: "Ooops...!",
          text: responseEditPost_failed,
        });
        await setLoad(false);
      }
      await setLoad(false);
    },
  });
  const uploadFileHandler = async (e) => {
    console.log("uploadFileHandler", e);
    const formData = new FormData();
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      formData.append("image", readerEvent.target.result);
    };

    console.log("e.target", e.target.files[0]);
    console.log("e.target reader", reader);
    console.log(formData);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(uploadImageSingle, formData, config);
      console.log("upload data", data);
      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };
  const allCategoryList = useSelector((state) => state.allCategoryList);
  const { loading, categorize } = allCategoryList;

  const getDataByID = async (id) => {
    await setLoad(true);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userLogin.token}`,
        },
      };
      const { data } = await axios.get(getPostByIdUrl(id), config);

      if (data) {
        console.log("data", data);
        // response data
        // created_at: "2021-10-26T14:53:46.000Z"
        // post_id: 20
        // uid: 1
        // status: "draft"
        // cat_id: 1
        // post_content: 
        // post_title: 
        // primary_image: ""
        // slug: "this-is-the-seconds-post"

        // jika data relasi aktegori ada save di values value_cat_id agar otomatis terselect kategorinya
        formik.setValues(data);
      } else {
        await Swal.fire({
          icon: "error",
          title: "Ooops...!",
          text: responseGetPost_failed,
        });
      }
      await setLoad(false);
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "Ooops...!",
        text: responseGetPost_failed,
      });
      console.log("getDataByID error", error);
      await setLoad(false);
    }
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
                          className="basic-single"
                          classNamePrefix="select"
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
                            formik.setFieldValue("cat_id", val.cat_id);
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
