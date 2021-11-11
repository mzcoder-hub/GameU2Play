import React, { useEffect, useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupText,
  CLabel,
  CRow,
  CSelect,
  CSpinner,
  CTextarea,
} from "@coreui/react";

import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getUsersByIdUrl, usersUrl } from "src/constant/api";
import fetchData from "src/helpers/fetch";
import {
  buttoncancelAddUsers,
  buttoncancelEditUsers,
  buttonsaveAddUsers,
  buttonsaveEditUsers,
  responseAddUsers_failed,
  responseAddUsers_success,
  responseEditUsers_failed,
  responseEditUsers_success,
  responseGetUsers_failed,
  titleAddUsers,
  titleEditUsers,
} from "./constan";
import Swal from "sweetalert2";
import CIcon from "@coreui/icons-react";
const EditPost = ({ match }) => {
  const history = useHistory();
  const [load, setLoad] = useState(false);
  let initialValues = {
    first_name: "",
    last_name: "",
    birth_date: "",
    gender: "",
    email: "",
    phone_number: "",
    address: "",
    role: "",
    status: "",
    password: "",
    password_confirmation: "",
  };
  const FormSchema = Yup.object().shape({
    first_name: Yup.string().required("first_name tidak boleh kosong"),
    last_name: Yup.string().required("last_name tidak boleh kosong"),
    birth_date: Yup.string().required("birth_date tidak boleh kosong"),
    gender: Yup.string().required("gender tidak boleh kosong"),
    email: Yup.string().required("email tidak boleh kosong"),
    phone_number: Yup.string().required("phone_number tidak boleh kosong").max(13, "Maximal 13 character"),
    address: Yup.string().required("address tidak boleh kosong"),
    role: Yup.string().required("role tidak boleh kosong"),
    status: Yup.string().required("status tidak boleh kosong"),
  });
  const FormSchemaAdd = Yup.object().shape({
    first_name: Yup.string().required("first_name tidak boleh kosong"),
    last_name: Yup.string().required("last_name tidak boleh kosong"),
    email: Yup.string().required("email tidak boleh kosong"),
    phone_number: Yup.string()
      .required("phone_number tidak boleh kosong")
      .max(13, "Maximal 13 character"),
    password: Yup.string()
      .required("password tidak boleh kosong")
      .min(6, "Minimal 6 character"),
    password_confirmation: Yup.string()
      .required("password confirmation tidak boleh kosong")
      .test(
        "check-pass",
        "Confirmation password tidak sama",
        (input) => input === formik.values.password
      ),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: match.params.id ? FormSchema : FormSchemaAdd,
    enableReinitialize: true,
    onSubmit: async (values) => {
      await setLoad(true);
      let dataValues = values;
      if (!match.params.id) {
        dataValues = {
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          phone_number: values.phone_number,
          password: values.password,
          confirm_password: values.password_confirmation,
        };
      }
      fetchData({
        url: match.params.id ? getUsersByIdUrl(match.params.id) : usersUrl,
        method: match.params.id ? "PATCH" : "POST",
        data: dataValues,
      })
        .then(async (res) => {
          console.log("res s", res);
          if (res.responsCode !== 400) {
            await history.push(`/users/list`);
            await Swal.fire({
              icon: "success",
              title: "success.!",
              text: match.params.id
                ? responseEditUsers_success
                : responseAddUsers_success,
            });
            await setLoad(false);
          } else {
            const errordata = res.message
              ? res.message
              : match.params.id
                ? responseEditUsers_failed
                : responseAddUsers_failed;
            await Swal.fire({
              icon: "error",
              title: "Ooops...!",
              text: errordata,
            });
          }
        })
        .catch(async (error) => {
          const resp = error.response;
          console.log("resp", resp);
          if (resp && resp.data && resp.data.message) {
            const message = JSON.parse(resp.data.message);
            const errordata =
              message && message.errors.length > 0
                ? message.errors[0]
                : match.params.id
                  ? responseEditUsers_failed
                  : responseAddUsers_failed;
            await Swal.fire({
              icon: "error",
              title: "Ooops...!",
              text: errordata.param + " " + errordata.msg,
            });
          } else {
            await Swal.fire({
              icon: "error",
              title: "Ooops...!",
              text: match.params.id
                ? responseEditUsers_failed
                : responseAddUsers_failed,
            });
          }
          await setLoad(false);
        });
      await setLoad(false);
    },
  });
  const getDataByID = async (id) => {
    await setLoad(true);
    fetchData({
      url: getUsersByIdUrl(id),
      method: "GET",
    })
      .then(async (res) => {
        if (res) {
          if (res && res.birth_date)
            res.birth_date = res.birth_date.slice(0, 10);
          delete res.joined_at;
          delete res.lastest_login;
          delete res.uid;
          delete res.verification_code;
          formik.setValues(res);
        }
        await setLoad(false);
      })
      .catch(async (error) => {
        console.log("error", error);
        await Swal.fire({
          icon: "error",
          title: "Ooops...!",
          text: responseGetUsers_failed,
        });
        await setLoad(false);
      });
    await setLoad(false);
  };

  const [showinput, setshowinput] = useState(false);
  function handlePasswordClick(e) {
    // e.preventDefault();
    if (showinput) {
      setshowinput(false);
    } else {
      setshowinput(true);
    }
  }
  const [showinput2, setshowinput2] = useState(false);
  function handlePasswordClick2(e) {
    // e.preventDefault();
    if (showinput2) {
      setshowinput2(false);
    } else {
      setshowinput2(true);
    }
  }
  // console.log("formik error", formik.errors);
  useEffect(() => {
    if (match.params.id) {
      getDataByID(match.params.id);
    }
  }, [match]);

  return (
    <>
      <CRow>
        <CCol xl={12}>
          <CCard>
            <CCardHeader>
              {match.params.id
                ? titleEditUsers + " - " + match.params.id
                : titleAddUsers}
            </CCardHeader>

            {load ? (
              <CSpinner
                className="d-flex mx-auto"
                style={{ width: "5rem", height: "5rem", borderWidth: "6px" }}
                color="info"
              />
            ) : (
              <CCardBody style={{ height: "auto" }}>
                <CForm onSubmit={formik.handleSubmit}>
                  <CRow>
                    <CCol md={6}>
                      <CFormGroup>
                        <CLabel
                          htmlFor="first_name"
                          style={{ fontWeight: "bold", fontSize: 15 }}
                        >
                          First name
                        </CLabel>
                        <CInput
                          style={{ height: "calc(2em + 0.75rem + 2px)" }}
                          disabled={load}
                          id="first_name"
                          name="first_name"
                          placeholder="Masukan first_name"
                          onChange={formik.handleChange}
                          value={formik.values.first_name}
                        />
                        {formik.errors.first_name &&
                          formik.touched.first_name && (
                            <small className="form-text text-danger login-error">
                              {formik.errors.first_name}
                            </small>
                          )}
                      </CFormGroup>
                    </CCol>
                    <CCol md={6}>
                      <CFormGroup>
                        <CLabel
                          htmlFor="last_name"
                          style={{ fontWeight: "bold", fontSize: 15 }}
                        >
                          Last name
                        </CLabel>
                        <CInput
                          style={{ height: "calc(2em + 0.75rem + 2px)" }}
                          disabled={load}
                          id="last_name"
                          name="last_name"
                          placeholder="Masukan last_name"
                          onChange={formik.handleChange}
                          value={formik.values.last_name}
                        />
                        {formik.errors.last_name &&
                          formik.touched.last_name && (
                            <small className="form-text text-danger login-error">
                              {formik.errors.last_name}
                            </small>
                          )}
                      </CFormGroup>
                    </CCol>

                    <CCol md={6}>
                      <CFormGroup>
                        <CLabel
                          htmlFor="last_name"
                          style={{ fontWeight: "bold", fontSize: 15 }}
                        >
                          Email
                        </CLabel>
                        <CInput
                          style={{ height: "calc(2em + 0.75rem + 2px)" }}
                          disabled={load}
                          id="email"
                          name="email"
                          // type="email"
                          placeholder="Masukan email"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                        />
                        {formik.errors.email && formik.touched.email && (
                          <small className="form-text text-danger login-error">
                            {formik.errors.email}
                          </small>
                        )}
                      </CFormGroup>
                    </CCol>
                    {match.params.id ? (
                      <>
                        <CCol md={6}>
                          <CFormGroup>
                            <CLabel
                              htmlFor="birth_date"
                              style={{ fontWeight: "bold", fontSize: 15 }}
                            >
                              birth_date
                            </CLabel>
                            <CInput
                              style={{ height: "calc(2em + 0.75rem + 2px)" }}
                              disabled={load}
                              id="birth_date"
                              name="birth_date"
                              type="date"
                              onChange={formik.handleChange}
                              value={formik.values.birth_date}
                            />
                            {formik.errors.birth_date &&
                              formik.touched.birth_date && (
                                <small className="form-text text-danger login-error">
                                  {formik.errors.birth_date}
                                </small>
                              )}
                          </CFormGroup>
                        </CCol>
                        <CCol md={6}>
                          <CFormGroup>
                            <CLabel
                              htmlFor="images"
                              style={{ fontWeight: "bold", fontSize: 15 }}
                            >
                              Gender
                            </CLabel>
                            <CSelect
                              onChange={formik.handleChange}
                              value={formik.values.gender}
                            >
                              <option key="0" value="">
                                Pilih Gender
                              </option>
                              <option key="1" value="L">
                                Laki-laki
                              </option>
                              <option key="2" value="P">
                                Perempuan
                              </option>
                            </CSelect>
                            {formik.errors.gender && formik.touched.gender && (
                              <small className="form-text text-danger login-error">
                                {formik.errors.gender}
                              </small>
                            )}
                          </CFormGroup>
                        </CCol>
                      </>
                    ) : null}
                    <CCol md={6}>
                      <CFormGroup>
                        <CLabel
                          htmlFor="last_name"
                          style={{ fontWeight: "bold", fontSize: 15 }}
                        >
                          Phonenumber
                        </CLabel>
                        <CInput
                          style={{ height: "calc(2em + 0.75rem + 2px)" }}
                          disabled={load}
                          id="phone_number"
                          name="phone_number"
                          // type="email"
                          placeholder="Masukan phone_number"
                          onChange={formik.handleChange}
                          value={formik.values.phone_number}
                        />
                        {formik.errors.phone_number &&
                          formik.touched.phone_number && (
                            <small className="form-text text-danger login-error">
                              {formik.errors.phone_number}
                            </small>
                          )}
                      </CFormGroup>
                    </CCol>

                    {match.params.id ? (
                      <>
                        <CCol md={12}>
                          <CFormGroup>
                            <CLabel
                              htmlFor="address"
                              style={{ fontWeight: "bold", fontSize: 15 }}
                            >
                              Address
                            </CLabel>
                            <CTextarea
                              name="address"
                              id="address"
                              onChange={formik.handleChange}
                              value={formik.values.address}
                              rows="3"
                              placeholder="Masukkan address"
                            />
                            {formik.errors.address &&
                              formik.touched.address && (
                                <small className="form-text text-danger login-error">
                                  {formik.errors.address}
                                </small>
                              )}
                          </CFormGroup>
                        </CCol>
                        <CCol md={6}>
                          <CFormGroup>
                            <CLabel
                              htmlFor="images"
                              style={{ fontWeight: "bold", fontSize: 15 }}
                            >
                              Role
                            </CLabel>
                            <CSelect
                              name="role"
                              onChange={formik.handleChange}
                              value={formik.values.role}
                            >
                              <option key="0" value="">
                                Pilih Role
                              </option>
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
                            {formik.errors.role && formik.touched.role && (
                              <small className="form-text text-danger login-error">
                                {formik.errors.role}
                              </small>
                            )}
                          </CFormGroup>
                        </CCol>

                        <CCol md={6}>
                          <CFormGroup>
                            <CLabel
                              htmlFor="images"
                              style={{ fontWeight: "bold", fontSize: 15 }}
                            >
                              Status
                            </CLabel>
                            <CSelect
                              name="status"
                              onChange={formik.handleChange}
                              value={formik.values.status}
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
                            {formik.errors.status && formik.touched.status && (
                              <small className="form-text text-danger login-error">
                                {formik.errors.status}
                              </small>
                            )}
                          </CFormGroup>
                        </CCol>
                      </>
                    ) : (
                      <>
                        <CCol md={6}>
                          <CFormGroup>
                            <CLabel
                              htmlFor="password"
                              style={{ fontWeight: "bold", fontSize: 15 }}
                            >
                              Password
                            </CLabel>

                            <CInputGroup>
                              <CInput
                                placeholder="Masukkan konfirmasi password"
                                autoComplete="password"
                                name="password"
                                onChange={formik.handleChange}
                                id="password"
                                type={showinput ? "text" : "password"}
                              />
                              <CInputGroupAppend>
                                <CInputGroupText onClick={handlePasswordClick}>
                                  <CIcon name="cil-lock-locked" />
                                </CInputGroupText>
                              </CInputGroupAppend>
                            </CInputGroup>
                            {formik.errors.password &&
                              formik.touched.password && (
                                <small className="form-text text-danger login-error">
                                  {formik.errors.password}
                                </small>
                              )}
                          </CFormGroup>
                        </CCol>
                        <CCol md={6}>
                          <CFormGroup>
                            <CLabel
                              htmlFor="password"
                              style={{ fontWeight: "bold", fontSize: 15 }}
                            >
                              Password Konfirmasi
                            </CLabel>

                            <CInputGroup>
                              <CInput
                                placeholder="Masukkan konfirmasi password"
                                autoComplete="current-password"
                                name="password_confirmation"
                                onChange={formik.handleChange}
                                id="password_confirmation"
                                type={showinput2 ? "text" : "password"}
                              />
                              <CInputGroupAppend>
                                <CInputGroupText>
                                  <CIcon
                                    name="cil-lock-locked"
                                    onClick={handlePasswordClick2}
                                  />
                                </CInputGroupText>
                              </CInputGroupAppend>
                            </CInputGroup>
                            {formik.errors.password_confirmation &&
                              formik.touched.password_confirmation && (
                                <small className="form-text text-danger login-error">
                                  {formik.errors.password_confirmation}
                                </small>
                              )}
                          </CFormGroup>
                        </CCol>
                      </>
                    )}
                  </CRow>
                  <div className="text-right">
                    <CButton
                      color="danger"
                      shape="square"
                      className="m-2"
                      size="lg"
                      onClick={(e) => history.push(`/users/list`)}
                    >
                      {match.params.id
                        ? buttoncancelEditUsers
                        : buttoncancelAddUsers}
                    </CButton>
                    <CButton
                      type="submit"
                      color="primary"
                      shape="square"
                      className="m-2"
                      size="lg"
                    >
                      {match.params.id
                        ? buttonsaveEditUsers
                        : buttonsaveAddUsers}
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            )}
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default EditPost;
