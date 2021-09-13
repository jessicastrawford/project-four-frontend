import axios from 'axios'
import { getToken } from './auth'

function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}


const baseUrl = '/api'

// AUTH REQUESTS

export function registerUser(formData) {
  return axios.post(`${baseUrl}/auth/register/`, formData)
}

export function loginUser(formData) {
  return axios.post(`${baseUrl}/auth/login/`, formData)
}

export function profileView() {
  return axios.get(`${baseUrl}/auth/profile/`, headers())
}

export function getSingleUser() {
  return axios.get(`${baseUrl}/auth/profile/`, headers())
}


export function editUser(userId, formData) {
  return axios.put(`${baseUrl}/auth/users/${userId}`, formData, headers())
}

// DESIGN REQUESTS

export function getAllDesigns(){
  return axios.get(`${baseUrl}/designs`)
}

export function getSingleDesign(designId) {
  return axios.get(`${baseUrl}/designs/${designId}`)
}

export function createADesign(formData) {
  return axios.post(`${baseUrl}/designs/`, formData, headers())
}


// COMMENTS

export function createAComment(designId, formData) {
  return axios.post(`${baseUrl}/designs/${designId}/comments/`, formData, headers())
}

// 
export function saveUnsaveDesign(designId) {
  return axios.post(`${baseUrl}/designs/${designId}/save/`, headers())
}