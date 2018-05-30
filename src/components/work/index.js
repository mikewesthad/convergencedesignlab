import React from "react";
import Link from "gatsby-link";
import get from "lodash.get";
import CallToAction from "../call-to-action/";
import Loading from "../loading/";
import { fetchAcfProjects, fetchProjects, fetchTaxonomies } from "../../utils/fetch-wp";
import style from "./index.module.scss";

class Work extends React.Component {
  state = { projects: null };

  componentDidMount() {
    fetchProjects().then(json => this.setState({ projects: json }));
  }

  render() {
    const { projects } = this.state;

    let projectGrid = null;
    if (projects) {
      projectGrid = projects.map(project => {
        const { id, slug, acf } = project;
        return (
          <div key={`project-${id}`} className={style.projectContainer}>
            <Link className={style.projectLinkWrapper} to={`/work/${slug}/`}>
              <figure className={style.projectFigure}>
                <img className={style.projectImage} src={get(acf, "banner.image.sizes.medium")} />
                <figcaption className={style.projectCaption}>
                  <div>{get(acf, "heading.subtitle")}</div>
                </figcaption>
              </figure>
            </Link>
          </div>
        );
      });
    }

    return (
      <div>
        <div className="container">
          <div className={style.title}>Selected Work</div>
        </div>

        <div className="container">
          {projects ? (
            <div className={style.projectGrid}>{projectGrid}</div>
          ) : (
            <Loading height="65vh" />
          )}
        </div>

        <CallToAction alternateColor={true} />
      </div>
    );
  }
}

export default Work;