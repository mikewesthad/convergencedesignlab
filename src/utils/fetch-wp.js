// https://github.com/airesvsg/acf-to-rest-api
// https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-wordpress

const baseUrl = process.env.API_URL;
const projectEndpoint = `${baseUrl}/wp/v2/projects`;
const acfProjectEndpoint = `${baseUrl}/acf/v3/projects`;
const resourcesEndpoint = `${baseUrl}/wp/v2/resources`;
const partnersEndpoint = `${baseUrl}/wp/v2/partners`;
const projectTagsEndpoint = `${baseUrl}/wp/v2/project_tags`;

export function fetchJson(url) {
  return fetch(url).then(res => res.json());
}

export function fetchProjects() {
  return fetchJson(projectEndpoint);
}

export function fetchResources() {
  return fetchJson(resourcesEndpoint);
}

export function fetchAcfProjects() {
  return fetchJson(acfProjectEndpoint);
}

export function fetchProjectAcfById(id) {
  return fetchJson(`${acfProjectEndpoint}/${id}`);
}

export function fetchTaxonomies() {
  return Promise.all([fetchJson(partnersEndpoint), fetchJson(projectTagsEndpoint)]).then(
    ([partnersJson, projectsJson]) => {
      const projectTags = projectsJson.reduce((obj, { id, count, name }) => {
        obj[name] = { id, count };
        return obj;
      }, {});
      const partnerTags = partnersJson.reduce((obj, { id, count, name }) => {
        obj[name] = { id, count };
        return obj;
      }, {});
      return { projectTags, partnerTags };
    }
  );
}

export function fetchProjectBySlug(slug) {
  return fetchJson(`${projectEndpoint}?slug=${slug}`).then(
    array => (array.length === 0 ? null : array[0])
  );
}

export function fetchResourceBySlug(slug) {
  return fetchJson(`${resourcesEndpoint}?slug=${slug}`).then(
    array => (array.length === 0 ? null : array[0])
  );
}