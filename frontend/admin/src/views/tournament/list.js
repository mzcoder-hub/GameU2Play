import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CButton,
  CSpinner,
} from "@coreui/react";

import { useDispatch, useSelector } from "react-redux";
import { listTournaments } from "src/redux/actions/tournamentActions";
import {
  button_title_addTournament,
  button_title_deleteTournament,
  button_title_editTournament,
  cancelButtonText,
  confirmButtonText,
  responseDeleteTournament_failed,
  responseDeleteTournament_success,
  textAlertDelete,
  titleAlertDelete,
  title_listTournament,
} from "./constan";
import Swal from "sweetalert2";
import { tournamentUrl } from "src/constant/api";
import fetchData from "src/helpers/fetch";

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};

const TournamentList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const queryPage = useLocation().search.match(/page=([0-9]+)/, "");
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);

  const pageChange = (newPage) => {
    currentPage !== newPage && history.push(`/tournament/list?page=${newPage}`);
  };

  const [load, setLoad] = useState(false);
  const tournamentList = useSelector((state) => state.tournamentList);
  const { loading, tournaments } = tournamentList;

  const actionDelete = async (id) => {
    await setLoad(true);
    fetchData({
      url: tournamentUrl + `/${id}`,
      method: "DELETE",
    })
      .then(async (res) => {
        await dispatch(listTournaments());
        await Swal.fire({
          icon: "success",
          title: "Success!",
          text: responseDeleteTournament_success,
        });
        await setLoad(false);
      })
      .catch(async (e) => {
        await Swal.fire({
          icon: "error",
          title: "Ooops...!",
          text: responseDeleteTournament_failed,
        });
        await setLoad(false);
      });
    await setLoad(false);
  };
  useEffect(() => {
    currentPage !== page && setPage(currentPage);
    dispatch(listTournaments());
  }, [dispatch, currentPage, page]);

  return (
    <>
      {loading || load ? (
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
        <CRow>
          <CCol xl={12}>
            <CCard>
              <CCardHeader>
                <div className="text-left">{title_listTournament}</div>
                <div className="text-right">
                  <CButton
                    color="primary"
                    onClick={(e) => history.push(`/tournament/add`)}
                  >
                    {button_title_addTournament}
                  </CButton>
                </div>
              </CCardHeader>
              <CCardBody>
                <CDataTable
                  items={tournaments}
                  fields={[
                    { key: "title", _classes: "font-weight-bold" },
                    "venue",
                    "prizepool",
                    "registration_start",
                    "registration_end",
                    "difficult",
                    "contact_person",
                    "action",
                  ]}
                  hover
                  striped
                  itemsPerPage={5}
                  activePage={page}
                  clickableRows
                  // onRowClick={(item) => history.push(`/post/${item.id}`)}
                  scopedSlots={{
                    status: (item) => (
                      <td>
                        <CBadge color={getBadge(item.status)}>
                          {item.status}
                        </CBadge>
                      </td>
                    ),
                    action: (item) => (
                      <td>
                        <CButton
                          key={item.tournament_id}
                          color="primary"
                          size="sm"
                          className="m-2"
                          onClick={(e) => {
                            history.push(
                              `/tournament/edit/${item.tournament_id}`
                            );
                          }}
                        >
                          {button_title_editTournament}
                        </CButton>
                        |
                        <CButton
                          color="danger"
                          size="sm"
                          className="m-2"
                          onClick={(e) => {
                            Swal.fire({
                              icon: "error",
                              title: titleAlertDelete,
                              text: textAlertDelete,
                              showCancelButton: true,
                              confirmButtonText: confirmButtonText,
                              cancelButtonText: cancelButtonText,
                              confirmButtonColor: "#E55353",
                            }).then((result) => {
                              /* Read more about isConfirmed, isDenied below */
                              if (result.isConfirmed) {
                                actionDelete(item.tournament_id);
                              }
                            });
                          }}
                        >
                          {button_title_deleteTournament}
                        </CButton>
                      </td>
                    ),
                  }}
                />
                <CPagination
                  activePage={page}
                  onActivePageChange={pageChange}
                  pages={5}
                  doubleArrows={false}
                  align="center"
                />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      )}
    </>
  );
};

export default TournamentList;
