import React, { useState } from "react";
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

import { createPost } from "src/redux/actions/postActions";
import axios from "axios";
import { baseUrl } from "src/constant/api";

const PostList = () => {
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

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [postTitle, setpostTitle] = useState("");
  const [primaryImage, setPrimaryImage] = useState("");
  const [postContent, setpostContent] = useState("");
  const [uid, setuid] = useState(userInfo.uid);
  const [postCategory, setpostCategory] = useState("");
  const [postSlug, setpostSlug] = useState("");

  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      dispatch(
        createPost({
          post_title: postTitle,
          post_content: postContent,
          uid: uid,
          cat_id: postCategory,
          slug: postSlug,
        })
      );
    } catch (error) {
      console.error(error);
      // setUploading(false)
    }
  };

  const uploadFileHandler = async (e) => {
    console.log("uploadFileHandler", e)
    const formData = new FormData();
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      formData.append("image", readerEvent.target.result);
    };

    // console.log(file);
    // console.log(formData);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(baseUrl +
        "/api/v1/uploads/primary",
        formData,
        config
      );
      console.log("upload data", data)
      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
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
                    value={postTitle}
                    onChange={(e) => setpostTitle(e.target.value)}
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
                    value={postSlug}
                    onChange={(e) => setpostSlug(e.target.value)}
                  />
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
                    value={image}
                    onChange={uploadFileHandler}
                  />
                  {uploading && (
                    <div className="spinner-border text-primary" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  )}
                </CFormGroup>
                <CFormGroup>
                  <ReactQuill
                    theme="snow"
                    id="content"
                    modules={toolbarOptions}
                    value={postContent}
                    onChange={(e) => setpostContent(e)}
                  />
                </CFormGroup>
                <CRow>
                  <CCol md={4}>
                    <CFormGroup>
                      <CLabel
                        htmlFor="images"
                        style={{ fontWeight: "bold", fontSize: 15 }}
                      >
                        Category
                      </CLabel>
                      <CSelect
                        value={postCategory}
                        onChange={(e) => setpostCategory(e.target.value)}
                      >
                        <option key="1" value="0001">
                          Select 1
                        </option>
                        <option key="2" value="0002">
                          Select 2
                        </option>
                        <option key="3" value="0001">
                          Select 3
                        </option>
                      </CSelect>
                    </CFormGroup>
                  </CCol>
                </CRow>
                <div className="text-right">
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

export default PostList;
