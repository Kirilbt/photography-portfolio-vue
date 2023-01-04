import { defineStore } from 'pinia'

import contentful from "contentful" // for SSR, SSG
import { createClient } from "contentful" // for dev

const spaceID = import.meta.env.VITE_CTF_SPACE_ID
const accToken = import.meta.env.VITE_CTF_ACCESS_TOKEN

export const useProjectsStore = defineStore('projects', {
  state: () => {
    return {
      spaceID: spaceID,
      accToken: accToken,
      projects: [],
      projectsLoading: true,
    }
  },
  actions: {
    async getAllProjects() {
      const createClientFunc =
        process.env.NODE_ENV === "development" ? createClient : contentful.createClient;
      const client = createClientFunc({
        space: this.spaceID,
        accessToken: this.accToken,
      })
      const response = await client.getEntries({
        // content_type: "projects",
        limit: 100,
      })
      if (response.items.length > 0) {
        this.projectsLoading = false
        this.projects = response.items;
      }
    }
  },
  // getters: {
  //   projects: (state) => state.projectList,
  // }
})
