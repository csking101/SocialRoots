"use client"
import { useEffect, useState } from "react"
import axios from "axios"

const MyComponent = () => {
  const [projects, setProjects] = useState([])

  const fetchData = async () => {
    const response = await axios.get(`/api/getProjects`)
    console.log("response", response.data["projects"])
    if (response.status === 200 || response.status === 201) {
      return response.data["projects"]
    }
  }

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await fetchData()
      if (data) {
        setProjects(data)
      }
    }
    fetchProjects()
  }, [])

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project.ProjectID}>{project.Project_Name}</li>
        ))}
      </ul>
    </div>
  )
}

export default MyComponent