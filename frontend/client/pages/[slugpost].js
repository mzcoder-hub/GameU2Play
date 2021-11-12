import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import NewBerita from "../components/widget/NewBerita";
import Tombol from "../components/Tombol";

import NewestTournament from "../components/widget/NewestTournament";

import dayjs from "dayjs";
import discoveryCss from "../styles/discovery.module.css";
import ShareButton from "../components/ShareButton";
import RelatedContent from "../components/RelatedContent";
import CommentFormForum from "../components/forumComponent/CommentFormForum";
import axios from "axios";
import { getPostByIdUrl } from "../helpers/api";
const APP_NAME = process.env.APP_NAME;
const slugpost = (props) => {
  const { post, metahref, metatitle, metadescription, metaImages } = props;
  // console.log("ini data detail post", props);
  return (
    <Layout>
      <Meta url_location_href={metahref} title={metatitle} keywords={metatitle} description={metadescription} url_location_image={metaImages} />
      <Col md={12} style={{ height: 540, backgroundColor: "#000000" }}>
        <div className={discoveryCss.entryHeader}>
          <Container>
            <h1 className={discoveryCss.postTitle}>{post.post_title}</h1>
            <span>
              <img src="/avatar.jpg" alt="autor" style={{ borderRadius: "50%", marginRight: 10, maxHeight: "30px" }} />
              by <span style={{ fontWeight: "bold" }}>Julian</span> - {dayjs(post.created_at).format('DD MMMM YYYY')}

              {" "}
              <Tombol
                variant="warning"
                borderRadius="0px"
                backgroundColor="#F4B740"
                fontWeight="bold"
                color="#14142B"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/forum");
                }}
              >
                {post.category_title}
              </Tombol>
            </span>
          </Container>
        </div>
      </Col>
      <Col
        md={12}
        style={{ background: "#0C0C0C", padding: 50, color: "#FFFFFF" }}
      >
        <Row>
          <Col md={8}>
            <Row>
              <Col md={12} className="text-center" style={{ marginBottom: 10 }}>
                <img
                  src={post.primary_image}
                  alt="ads 728x90"
                  style={{ maxHeight: "250px", maxWidth: "auto", }}
                />
              </Col>
            </Row>
            <Container>
              <div className={discoveryCss.entryContent}>
                <p>{post.post_content}</p>
                <div className={discoveryCss.kategoryList}>
                  Kategori: <a href="">{post.category_title}</a>
                  {/* ,{" "}
                  <a href="">The International</a>, <a href="">T1 Esports</a> */}
                </div>
                <div className={discoveryCss.shareButton}>
                  Bagikan : <ShareButton />
                </div>
              </div>
              <div
                className={discoveryCss.RelatedContent}
                style={{ margin: 10, padding: 10 }}
              >
                <RelatedContent />
              </div>
              <div
                className={discoveryCss.commentSection}
                style={{ borderTop: "1px solid #d9dbe9" }}
              >
                <CommentFormForum />
              </div>
            </Container>
          </Col>
          <Col md={4}>
            <div>
              <NewestTournament />
              <NewBerita />
            </div>
          </Col>
        </Row>
      </Col>
    </Layout>
  );
};

export default slugpost;

export const getServerSideProps = async (context) => {
  const { req, query } = context;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const getPostById = await axios.get(getPostByIdUrl(query.slugpost), config);
  const href = req && req.headers && req.headers.host;
  return {
    props: {
      post: getPostById ? getPostById.data : null,
      metahref: href ? href + req.url : null,
      host: href ? href : null,
      metatitle: getPostById && getPostById.data ? APP_NAME + " - " + getPostById.data.post_title : APP_NAME,
      metadescription: getPostById && getPostById.data ? getPostById.data.post_content : "",
      metaImages: getPostById && getPostById.data ? href + getPostById.data.primary_image : ""
    },
  };
};
