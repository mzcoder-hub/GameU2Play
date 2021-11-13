import React, { useEffect, useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
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

import { useHistory } from "react-router-dom";
import { edittournamentUrl, listtournamentUrl } from "src/constant/api";
import { userInfoFromStorage } from "../category/constan";
import {
  responseEditTournament_failed,
  responseEditTournament_success,
  responseGetTournament_failed,
  titleEditTournament,
} from "./constan";
import Swal from "sweetalert2";
import fetchData from "src/helpers/fetch";
const EditTournament = ({ match }) => {
  const history = useHistory();

  const [load, setLoad] = useState(false);

  const userLogin = userInfoFromStorage;
  const initialValues = useState({
    title: "",
    organizer: "",
    description: "",
    venue: "",
    featured_image: "/images/sample/tourneysingle.svg",
    prizepool: "",
    rule_link: "",
    contact_person: "",
    registration_start: "",
    registration_end: "",
    start: "",
    end: "",
    difficult: "beginner",
    max_team: "",
  });
  const FormSchema = Yup.object().shape({
    title: Yup.string().required("Nama Tournament tidak boleh kosong"),
    organizer: Yup.string().required("organizer tidak boleh kosong"),
    description: Yup.string().required("description tidak boleh kosong"),
    // featured_image: Yup.string().required("featured image tidak boleh kosong"),
    venue: Yup.string().required("venue tidak boleh kosong"),
    prizepool: Yup.string().required("prizepool tidak boleh kosong"),
    rule_link: Yup.string().required("rule_link tidak boleh kosong"),
    contact_person: Yup.string().required("contact_person tidak boleh kosong"),
    registration_start: Yup.string().required(
      "registration_start tidak boleh kosong"
    ),
    registration_end: Yup.string().required(
      "registration_end tidak boleh kosong"
    ),
    start: Yup.string().required("start tidak boleh kosong"),
    end: Yup.string().required("end tidak boleh kosong"),
    difficult: Yup.string().required("difficult tidak boleh kosong"),
    max_team: Yup.string().required("max_team tidak boleh kosong"),
  });

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userLogin.token}`,
    },
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: FormSchema,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      await setLoad(true);
      const data = {
        title: values.title,
        description: values.description,
        venue: values.venue,
        prizepool: values.prizepool,
        rule_link: values.rule_link,
        contact_person: values.contact_person,
        registration_start: values.registration_start,
        registration_end: values.registration_end,
        start: values.start,
        end: values.end,
        difficult: values.difficult,
      };
      fetchData({
        url: edittournamentUrl(match.params.id),
        method: "PATCH",
        data,
      })
        .then(async (res) => {
          await history.push(`/tournament/list`);
          await Swal.fire({
            icon: "success",
            title: "Success!",
            text: responseEditTournament_success,
          });
        })
        .catch(async (error) => {
          console.error("error", error);
          await Swal.fire({
            icon: "error",
            title: "Ooops...!",
            text: responseEditTournament_failed,
          });
          await setLoad(false);
        });
      await setLoad(false);
    },
  });
  const getDataByID = async (id) => {
    await setLoad(true);
    fetchData({
      url: listtournamentUrl + `/${id}`,
      method: "GET",
    })
      .then(async (res) => {
        formik.setValues(res.data);
      })
      .catch(async (error) => {
        console.error("error", error);
        await Swal.fire({
          icon: "error",
          title: "Ooops...!",
          text: responseGetTournament_failed,
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
      {load ? (
        <></>
      ) : (
        <CRow>
          <CCol xl={12}>
            <CCard>
              <CCardHeader>
                <div className="text-left">{titleEditTournament}</div>
              </CCardHeader>
              <CCardBody style={{ height: "auto" }}>
                {load ? (
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
                        Nama Tournament
                      </CLabel>
                      <CInput
                        style={{ height: "calc(2em + 0.75rem + 2px)" }}
                        disabled={load}
                        id="title"
                        name="title"
                        placeholder="Masukan Nama Tournament disini"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                      />
                      {formik.errors.title && formik.touched.title && (
                        <small className="form-text text-danger login-error">
                          {formik.errors.title}
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
                        id="description"
                        name="description"
                        placeholder="Masukan Deskripsi Tournament disini"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                      />
                      {formik.errors.description &&
                        formik.touched.description && (
                          <small className="form-text text-danger login-error">
                            {formik.errors.description}
                          </small>
                        )}
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel
                        htmlFor="title"
                        style={{ fontWeight: "bold", fontSize: 15 }}
                      >
                        Organizer
                      </CLabel>
                      <CInput
                        style={{ height: "calc(2em + 0.75rem + 2px)" }}
                        disabled={load}
                        id="organizer"
                        name="organizer"
                        placeholder="Masukan organizer Tournament disini"
                        onChange={formik.handleChange}
                        value={formik.values.organizer}
                      />
                      {formik.errors.organizer && formik.touched.organizer && (
                        <small className="form-text text-danger login-error">
                          {formik.errors.organizer}
                        </small>
                      )}
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel
                        htmlFor="title"
                        style={{ fontWeight: "bold", fontSize: 15 }}
                      >
                        Venue
                      </CLabel>
                      <CInput
                        style={{ height: "calc(2em + 0.75rem + 2px)" }}
                        disabled={load}
                        id="venue"
                        name="venue"
                        placeholder="Masukan Venue Tournament disini"
                        onChange={formik.handleChange}
                        value={formik.values.venue}
                      />
                      {formik.errors.venue && formik.touched.venue && (
                        <small className="form-text text-danger login-error">
                          {formik.errors.venue}
                        </small>
                      )}
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel
                        htmlFor="title"
                        style={{ fontWeight: "bold", fontSize: 15 }}
                      >
                        PrizePool
                      </CLabel>
                      <CInput
                        style={{ height: "calc(2em + 0.75rem + 2px)" }}
                        disabled={load}
                        id="prizepool"
                        name="prizepool"
                        placeholder="Masukan Prizepool Tournament disini"
                        onChange={formik.handleChange}
                        value={formik.values.prizepool}
                      />
                      {formik.errors.prizepool && formik.touched.prizepool && (
                        <small className="form-text text-danger login-error">
                          {formik.errors.prizepool}
                        </small>
                      )}
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel
                        htmlFor="title"
                        style={{ fontWeight: "bold", fontSize: 15 }}
                      >
                        Rule Link
                      </CLabel>
                      <CInput
                        style={{ height: "calc(2em + 0.75rem + 2px)" }}
                        disabled={load}
                        id="rule_link"
                        name="rule_link"
                        placeholder="Masukan Rule Link Tournament disini"
                        onChange={formik.handleChange}
                        value={formik.values.rule_link}
                      />
                      {formik.errors.rule_link && formik.touched.rule_link && (
                        <small className="form-text text-danger login-error">
                          {formik.errors.rule_link}
                        </small>
                      )}
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel
                        htmlFor="title"
                        style={{ fontWeight: "bold", fontSize: 15 }}
                      >
                        Contact Person
                      </CLabel>
                      <CInput
                        style={{ height: "calc(2em + 0.75rem + 2px)" }}
                        disabled={load}
                        id="contact_person"
                        name="contact_person"
                        placeholder="Masukan Contact Person Tournament disini"
                        onChange={formik.handleChange}
                        value={formik.values.contact_person}
                      />
                      {formik.errors.contact_person &&
                        formik.touched.contact_person && (
                          <small className="form-text text-danger login-error">
                            {formik.errors.contact_person}
                          </small>
                        )}
                    </CFormGroup>
                    <CRow>
                      <CCol>
                        <CFormGroup>
                          <CLabel
                            htmlFor="title"
                            style={{ fontWeight: "bold", fontSize: 15 }}
                          >
                            Registration Start
                          </CLabel>
                          <CInput
                            style={{ height: "calc(2em + 0.75rem + 2px)" }}
                            disabled={load}
                            id="registration_start"
                            name="registration_start"
                            type="date"
                            onChange={formik.handleChange}
                            value={formik.values.registration_start}
                          />
                          {formik.errors.registration_start &&
                            formik.touched.registration_start && (
                              <small className="form-text text-danger login-error">
                                {formik.errors.registration_start}
                              </small>
                            )}
                        </CFormGroup>
                      </CCol>
                      <CCol>
                        {" "}
                        <CFormGroup>
                          <CLabel
                            htmlFor="title"
                            style={{ fontWeight: "bold", fontSize: 15 }}
                          >
                            Registration End
                          </CLabel>
                          <CInput
                            style={{ height: "calc(2em + 0.75rem + 2px)" }}
                            disabled={load}
                            id="registration_end"
                            name="registration_end"
                            type="date"
                            onChange={formik.handleChange}
                            value={formik.values.registration_end}
                          />
                          {formik.errors.registration_end &&
                            formik.touched.registration_end && (
                              <small className="form-text text-danger login-error">
                                {formik.errors.registration_end}
                              </small>
                            )}
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol>
                        <CFormGroup>
                          <CLabel
                            htmlFor="title"
                            style={{ fontWeight: "bold", fontSize: 15 }}
                          >
                            Tournament Start
                          </CLabel>
                          <CInput
                            style={{ height: "calc(2em + 0.75rem + 2px)" }}
                            disabled={load}
                            id="start"
                            name="start"
                            type="date"
                            onChange={formik.handleChange}
                            value={formik.values.start}
                          />
                          {formik.errors.start && formik.touched.start && (
                            <small className="form-text text-danger login-error">
                              {formik.errors.start}
                            </small>
                          )}
                        </CFormGroup>
                      </CCol>
                      <CCol>
                        {" "}
                        <CFormGroup>
                          <CLabel
                            htmlFor="title"
                            style={{ fontWeight: "bold", fontSize: 15 }}
                          >
                            Tournament End
                          </CLabel>
                          <CInput
                            style={{ height: "calc(2em + 0.75rem + 2px)" }}
                            disabled={load}
                            id="end"
                            name="end"
                            type="date"
                            onChange={formik.handleChange}
                            value={formik.values.end}
                          />
                          {formik.errors.end && formik.touched.end && (
                            <small className="form-text text-danger login-error">
                              {formik.errors.end}
                            </small>
                          )}
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol>
                        {" "}
                        <CFormGroup>
                          <CLabel
                            htmlFor="images"
                            style={{ fontWeight: "bold", fontSize: 15 }}
                          >
                            Difficult
                          </CLabel>
                          <CSelect
                            name="difficult"
                            disabled={load}
                            onChange={formik.handleChange}
                            value={formik.values.difficult}
                          >
                            <option key="1" value="newbie">
                              newbie
                            </option>
                            <option key="2" value="beginner">
                              beginner
                            </option>
                            <option key="3" value="intermediate">
                              intermediate
                            </option>
                          </CSelect>
                        </CFormGroup>
                      </CCol>
                      <CCol>
                        <CFormGroup>
                          <CLabel
                            htmlFor="title"
                            style={{ fontWeight: "bold", fontSize: 15 }}
                          >
                            Max Team
                          </CLabel>
                          <CInput
                            style={{ height: "calc(2em + 0.75rem + 2px)" }}
                            disabled={load}
                            type="number"
                            id="max_team"
                            name="max_team"
                            placeholder="Max team number"
                            onChange={formik.handleChange}
                            value={formik.values.max_team}
                          />
                          {formik.errors.max_team &&
                            formik.touched.max_team && (
                              <small className="form-text text-danger login-error">
                                {formik.errors.max_team}
                              </small>
                            )}
                        </CFormGroup>
                      </CCol>
                    </CRow>

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
                        onClick={(e) => history.push(`/tournament/list`)}
                      >
                        Cancel
                      </CButton>
                      <CButton
                        color="primary"
                        shape="square"
                        className="m-2"
                        size="lg"
                        type="submit"
                      >
                        Save
                      </CButton>
                    </div>
                  </CForm>
                )}
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      )}
    </>
  );
};

export default EditTournament;
