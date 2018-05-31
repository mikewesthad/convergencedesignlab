import React from "react";
import Link from "gatsby-link";
import { fetchResourceBySlug } from "../../utils/fetch-wp";
import get from "lodash.get";
import { Redirect } from "react-router-dom";
import classNames from "classnames";
import CoverImage from "../cover-image/";
import RelatedWork from "../related-work/";
import CallToAction from "../call-to-action/";
import style from "./index.module.scss";
import image from "../../assets/images/publications/test-1.png";

const data = {
  id: 1,
  title: "Pudding pudding gummi bears chocolate brownie dessert candy",
  description:
    "Jelly-o macaroon gummi bears bonbon gummies topping topping oat cake. Chocolate bar marzipan biscuit tiramisu cookie lemon drops cotton candy. Sesame snaps donut sesame snaps pie jelly-o toffee. Cheesecake muffin toffee. Carrot cake dessert wafer candy canes macaroon cheesecake lollipop.",
  image
};

export default class Resource extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null, noValidData: false };
  }

  componentDidMount() {
    if (!this.state.data) {
      // TODO: fetch data from WP
      const path = this.props.location.pathname;
      const slug = path
        .substring(11) // Everything after the leading "/resources/"
        .replace("/", ""); // Remove trailing slash

      fetchResourceBySlug(slug).then(data => {
        if (data === null || !data.acf) this.setState({ noValidData: true });
        else this.setState({ data: data.acf });
      });
    }
  }

  render() {
    const { data, noValidData } = this.state;

    if (noValidData) return <Redirect to="/404" />;

    if (!data) {
      return <div style={{ minHeight: "1200px" }} />;
    }

    let narrative = get(data, "narrative"); // Defaults to false
    if (!narrative) narrative = [];

    const imageUrl = data.image;
    const imageTitle = data.title;
    const title = data.title;
    const date = "01/05/2015";
    const authors = ["Mindy Faber", "Margaret Conway"];
    const downloadUrl = "null";
    const description = data.description;

    return (
      <div>
        <CoverImage src={imageUrl} alt={imageTitle} />
        <div className="container">
          <div className="section">
            <div className={style.title}>{title}</div>
            <div className="row--space-between">
              <div className="col--sm-12 col--md-6">
                <div className={style.sectionTitle}>Overview</div>
                <div
                  className={style.sectionText}
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>
              <div className={classNames(style.meta, "col--sm-12 col--md-5")}>
                <div className={style.metaSection}>
                  <div className={style.sectionTitle}>Date</div>
                  <div className={style.date}>{date}</div>
                </div>
                <div className={style.metaSection}>
                  <div className={style.sectionTitle}>Authors</div>
                  <ul className={style.metaList}>
                    {authors.map(name => <li key={`author-${name}`}>{name}</li>)}
                  </ul>
                </div>
              </div>
            </div>
            <div className={style.download}>
              <Link to={downloadUrl}>Download PDF</Link>
            </div>
          </div>
        </div>

        <RelatedWork data={data} />

        <CallToAction title="Looking for a framework?" />
      </div>
    );
  }
}