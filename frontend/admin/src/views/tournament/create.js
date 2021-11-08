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
import {
  createTournament,
  getTournamentById,
} from "src/redux/actions/tournamentActions";

const EditTournament = ({ match }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [tournamentTitle, settournamentTitle] = useState("");
  const [tournamentDescription, settournamentDescription] = useState("");
  const [tournamentOrganizer, settournamentOrganizer] = useState("");
  const [tournamentVenue, settournamentVenue] = useState("");
  const [tournamentPrizepool, settournamentPrizepool] = useState("");
  const [tournamentRuleLink, settournamentRuleLink] = useState("");
  const [tournamentContantPerson, settournamentContantPerson] = useState("");
  const [tournamentRegistrationStart, settournamentRegistrationStart] =
    useState("");
  const [tournamentRegistrationEnd, settournamentRegistrationEnd] =
    useState("");
  const [tournamentStart, settournamentStart] = useState("");
  const [tournamentEnd, settournamentEnd] = useState("");
  const [tournamentDifficult, settournamentDifficult] = useState("");
  const [tournamentMaxTeam, settournamentMaxTeam] = useState("");
  //   const [tournamentSlug, settournamentSlug] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      // console.log({
      //   title: tournamentTitle,
      //   organizer: tournamentOrganizer,
      //   description: tournamentDescription,
      //   featured_image: "/images/sample/tourneysingle.svg",
      //   venue: tournamentVenue,
      //   prizepool: tournamentPrizepool,
      //   rule_link: tournamentRuleLink,
      //   contact_person: tournamentContantPerson,
      //   registration_start: tournamentRegistrationStart,
      //   registration_end: tournamentRegistrationEnd,
      //   start: tournamentStart,
      //   end: tournamentEnd,
      //   difficult: tournamentDifficult,
      //   max_team: tournamentMaxTeam,
      // });
      dispatch(
        createTournament({
          title: tournamentTitle,
          organizer: tournamentOrganizer,
          description: tournamentDescription,
          featured_image: "/images/sample/tourneysingle.svg",
          venue: tournamentVenue,
          prizepool: tournamentPrizepool,
          rule_link: tournamentRuleLink,
          contact_person: tournamentContantPerson,
          registration_start: tournamentRegistrationStart,
          registration_end: tournamentRegistrationEnd,
          start: tournamentStart,
          end: tournamentEnd,
          difficult: tournamentDifficult,
          max_team: tournamentMaxTeam,
        })
      );
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
  const handleChangeTournamentOrganizer = (e) => {
    settournamentOrganizer(e.currentTarget.value);
  };
  const handleChangeTournamentVenue = (e) => {
    settournamentVenue(e.currentTarget.value);
  };
  const handleChangeTournamentPrizepool = (e) => {
    settournamentPrizepool(e.currentTarget.value);
  };
  const handleChangeTournamentRuleLink = (e) => {
    settournamentRuleLink(e.currentTarget.value);
  };
  const handleChangeTournamentDifficult = (e) => {
    settournamentDifficult(e.currentTarget.value);
  };
  const handleChangeTournamentMaxTeam = (e) => {
    settournamentMaxTeam(e.currentTarget.value);
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
      <CRow>
        <CCol xl={12}>
          <CCard>
            <CCardHeader>
              <div className="text-left">
                Create New Tournament
                <small className="text-muted">
                  {" "}
                  create new competitive for better env
                </small>
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
                    Organizer
                  </CLabel>
                  <CInput
                    style={{ height: "calc(2em + 0.75rem + 2px)" }}
                    type="text"
                    id="Prizepool"
                    placeholder="Masukan Prizepool Tournament disini"
                    value={tournamentOrganizer}
                    onChange={handleChangeTournamentOrganizer}
                  />
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
                    type="text"
                    id="Prizepool"
                    placeholder="Masukan Prizepool Tournament disini"
                    value={tournamentVenue}
                    onChange={handleChangeTournamentVenue}
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
                    id="Prizepool"
                    placeholder="Masukan Prizepool Tournament disini"
                    value={tournamentPrizepool}
                    onChange={handleChangeTournamentPrizepool}
                  />
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
                    type="text"
                    id="Prizepool"
                    placeholder="Masukan Prizepool Tournament disini"
                    value={tournamentRuleLink}
                    onChange={handleChangeTournamentRuleLink}
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
                    placeholder="Masukan Contact Person Tournament disini"
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
                        value={tournamentEnd}
                        onChange={handleChangeTournamentEnd}
                      />
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
                        value={tournamentDifficult}
                        onChange={handleChangeTournamentDifficult}
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
                        type="number"
                        id="max_team"
                        placeholder="Max team number"
                        value={tournamentMaxTeam}
                        onChange={handleChangeTournamentMaxTeam}
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
    </>
  );
};

export default EditTournament;
