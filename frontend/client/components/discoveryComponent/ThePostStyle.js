import { Col, Row } from "react-bootstrap";

import discoveryCss from "../../styles/discovery.module.css";

import { useRouter } from "next/router";

const ThePostStyle = ({
  dataPost = [],
  headerTagLine = undefined,
  icon = undefined,
  color = undefined,
}) => {
  console.log("dataPost", dataPost);
  //   categories_id: "00002,00001"
  // created_at: "2021-11-12T00:16:41.000Z"
  // post_content: "This is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first post"
  // post_id: "00001"
  // post_title: "This is the third post"
  // primary_image: "/images/posts/post-1.png"
  // slug: "this-is-the-seconds-post"
  // status: "published"
  // uid: "0000000001"
  const router = useRouter();
  return (
    <Col xl={12}>
      <Row>
        <Col md={12} className={discoveryCss.firstPageDiscoverySection}>
          <Row style={{ margin: 25 }}>
            <Col md={12}>
              <h3 className={discoveryCss.firstPageDiscoverySectionHeadText}>
                {headerTagLine}
              </h3>
            </Col>
            {dataPost.length > 0 ? (
              <Col
                md={12}
                className={discoveryCss.firstPageDiscoverySectionPost}
              >
                <Row>
                  {dataPost.length > 0 ? (
                    <Col md={4} style={{ padding: 0 }}>
                      <a onClick={() => router.push("/" + dataPost[0].slug)}>
                        <div
                          style={{
                            background: `url('${dataPost[0].primary_image}') no-repeat`,
                            backgroundSize: "100%",
                            height: 500,
                          }}
                        >
                          <div
                            className={
                              discoveryCss.firstPageDiscoverySectionPostDesc
                            }
                          >
                            <h2>{dataPost[0].post_title}</h2>
                            <p>
                              {dataPost[0].post_content.substring(170, 0) +
                                " ..."}
                            </p>
                            <span>Read More ....</span>
                          </div>
                        </div>
                      </a>
                    </Col>
                  ) : null}
                  <Col md={4} style={{ padding: 0 }}>
                    <Row>
                      {dataPost.length > 1 ? (
                        <Col md={12}>
                          <a
                            onClick={() => router.push("/" + dataPost[1].slug)}
                          >
                            <div
                              style={{
                                background: `url('${dataPost[1].primary_image}') no-repeat`,
                                backgroundSize: "100%",
                                height: 250,
                              }}
                            >
                              <div
                                className={
                                  discoveryCss.firstPageDiscoverySectionPostDesc
                                }
                              >
                                <h2>{dataPost[1].post_title}</h2>
                                <p>
                                  {dataPost[1].post_content.substring(170, 0) +
                                    " ..."}
                                </p>
                                <span>Read More ....</span>
                              </div>
                            </div>
                          </a>
                        </Col>
                      ) : null}
                      {dataPost.length > 2 ? (
                        <Col md={12}>
                          <a
                            onClick={() => router.push("/" + dataPost[2].slug)}
                          >
                            <div
                              style={{
                                background: `url('${dataPost[2].primary_image}') no-repeat`,
                                backgroundSize: "100%",
                                height: 250,
                              }}
                            >
                              <div
                                className={
                                  discoveryCss.firstPageDiscoverySectionPostDesc
                                }
                              >
                                <h2>{dataPost[2].post_title}</h2>
                                <p>
                                  {dataPost[2].post_content.substring(170, 0) +
                                    " ..."}
                                </p>
                                <span>Read More ....</span>
                              </div>
                            </div>
                          </a>
                        </Col>
                      ) : null}
                    </Row>
                  </Col>

                  {dataPost.length > 3 ? (
                    <Col md={4} style={{ padding: 0 }}>
                      <a onClick={() => router.push("/" + dataPost[3].slug)}>
                        <div
                          style={{
                            background: `url('${dataPost[3].primary_image}') no-repeat`,
                            backgroundSize: "100%",
                            height: 500,
                          }}
                        >
                          <div
                            className={
                              discoveryCss.firstPageDiscoverySectionPostDesc
                            }
                          >
                            <h2>{dataPost[3].post_title}</h2>
                            <p>
                              {dataPost[3].post_content.substring(170, 0) +
                                " ..."}
                            </p>
                            <span>Read More ....</span>
                          </div>
                        </div>
                      </a>
                    </Col>
                  ) : null}
                </Row>
              </Col>
            ) : (
              <Col md={12} style={{ textAlign: "center" }}>
                <h6>Data tidak ditemukan</h6>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

ThePostStyle.defaultProps = {
  headerTagLine: "",
  icon: "",
  color: "",
};
export default ThePostStyle;
