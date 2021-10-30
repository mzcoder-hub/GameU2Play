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
} from "@coreui/react";

import { useDispatch, useSelector } from "react-redux";
import { listTournaments } from "src/redux/actions/tournamentActions";

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

  const tournamentList = useSelector((state) => state.tournamentList);
  const { loading, tournaments } = tournamentList;

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
    dispatch(listTournaments());
  }, [dispatch, currentPage, page]);

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
                  TournamentList
                  <small className="text-muted"> example</small>
                </div>
                <div className="text-right">
                  <CButton
                    color="primary"
                    onClick={(e) => history.push(`/category/add`)}
                  >
                    Add Posts
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
                          Edit
                        </CButton>
                        |
                        <CButton color="danger" size="sm" className="m-2">
                          Delete
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
