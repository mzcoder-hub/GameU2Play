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
import { getTournamentById } from "src/redux/actions/tournamentActions";

const EditTournament = ({ match }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const tournamentDetail = useSelector((state) => state.tournamentDetail);
  const { loading, tournament } = tournamentDetail;

  useEffect(() => {
    dispatch(getTournamentById(match.params.id));
  }, [match, dispatch]);

  const [tournamentTitle, settournamentTitle] = useState(tournament.data.title);
  const [tournamentDescription, settournamentDescription] = useState(
    tournament.data.description
  );
  const [tournamentPrizepool, settournamentPrizepool] = useState(
    tournament.data.prizepool
  );
  const [tournamentContantPerson, settournamentContantPerson] = useState(
    tournament.data.contant_person
  );
  const [tournamentRegistrationStart, settournamentRegistrationStart] =
    useState(tournament.data.registration_start);
  const [tournamentRegistrationEnd, settournamentRegistrationEnd] = useState(
    tournament.data.registration_end
  );
  const [tournamentStart, settournamentStart] = useState(tournament.data.start);
  const [tournamentEnd, settournamentEnd] = useState(tournament.data.end);
  //   const [tournamentSlug, settournamentSlug] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      dispatch();
      // updateCategory({
      //   cat_id: match.params.id,
      //   category_title: categoryTitle,
      //   slug: categorySlug,
      //   category_desc: categoryContent,
      // })
    } catch (error) {
      console.error(error);
      // setUploading(false)
    }
  };
  const handleChangeTournamentTitle = (e) => {
    settournamentTitle(e.currentTarget.value);
  };
  const handleChangeTournamentDescription = (e) => {
    settournamentDescription(e.currentTarget.value);
  };
  const handleChangeTournamentPrizepool = (e) => {
    settournamentPrizepool(e.currentTarget.value);
  };
  const handleChangeTournamentContantPerson = (e) => {
    settournamentContantPerson(e.currentTarget.value);
  };
  const handleChangeTournamentRegistrationStart = (e) => {
    settournamentRegistrationStart(e.currentTarget.value);
  };
  const handleChangeTournamentRegistrationEnd = (e) => {
    settournamentRegistrationEnd(e.currentTarget.value);
  };
  const handleChangeTournamentStart = (e) => {
    settournamentStart(e.currentTarget.value);
  };
  const handleChangeTournamentEnd = (e) => {
    settournamentEnd(e.currentTarget.value);
  };
  //   const handleChangeTournamentSlug = (e) => {
  //     settournamentSlug(e.currentTarget.value);
  //   };
  return (
    <>
      {loading ? (
        <></>
      ) : (
        <CRow>
          <CCol xl={12}>
            <CCard>
              <CCardHeader>
                <div className="text-left">
                  Edit Tournament
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
                      Nama Tournament
                    </CLabel>
                    <CInput
                      style={{ height: "calc(2em + 0.75rem + 2px)" }}
                      type="text"
                      id="title"
                      placeholder="Masukan Nama Tournament disini"
                      value={tournamentTitle}
                      onChange={handleChangeTournamentTitle}
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
                      placeholder="Masukan Deskripsi Tournament disini"
                      value={tournamentDescription}
                      onChange={handleChangeTournamentDescription}
                    />
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
                      type="number"
                      id="title"
                      placeholder="Masukan Judul Artikel disini"
                      value={tournamentPrizepool}
                      onChange={handleChangeTournamentPrizepool}
                    />
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
                      type="text"
                      id="title"
                      placeholder="Masukan Judul Artikel disini"
                      value={tournamentContantPerson}
                      onChange={handleChangeTournamentContantPerson}
                    />
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
                          type="date"
                          id="title"
                          placeholder="Masukan Judul Artikel disini"
                          value={tournamentRegistrationStart}
                          onChange={handleChangeTournamentRegistrationStart}
                        />
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
                          type="date"
                          id="title"
                          placeholder="Masukan Judul Artikel disini"
                          value={tournamentRegistrationEnd}
                          onChange={handleChangeTournamentRegistrationEnd}
                        />
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
                          type="date"
                          id="title"
                          placeholder="Masukan Judul Artikel disini"
                          value={tournamentStart}
                          onChange={handleChangeTournamentStart}
                        />
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
                          type="date"
                          id="title"
                          placeholder="Masukan Judul Artikel disini"
                          value={tournamentEnd}
                          onChange={handleChangeTournamentEnd}
                        />
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
                      Save
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      )}
    </>
  );
};

export default EditTournament;
