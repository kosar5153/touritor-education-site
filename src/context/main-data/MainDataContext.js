import React, { useEffect, useState } from 'react'
import AllCourseContext from './allDataContext'

import { getAllCourse } from "../../services/course-server"
import {
    getAllNews,
    teachers
} from "../../services/news-services"
import { getAllTeachers } from '../../services/teachers'
import { getAllLessons } from '../../services/lesson-services'
import { getAllEmployes } from '../../services/employes-services'
import { getAllStudens } from '../../services/student-services'
import { getAllComments } from '../../services/comment-server'

const MainDataContext = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [forceCourse, setforceCourse] = useState(false)

    const [refresh, setRefresh] = useState(false)

    // courses
    const [allCourses, setAllCourses] = useState([])
    // news
    const [allNews, setAllNews] = useState([])
    // teachers
    const [teachers, setTeachers] = useState([])
    // lessons
    const [lessons, setLessons] = useState([])
    // employes
    const [employes, setEmployes] = useState([])
    // students
    const [students, setStudents] = useState()
    // students
    const [allComents, setAllComments] = useState()



    // courses
    const fetchAllCourses = async () => {

        try {
            let { data } = await getAllCourse()
            let coursesResult = data.result

            console.log('AllCourseContext', coursesResult)


            setAllCourses(coursesResult)
        } catch (err) {
            console.log(err)
        }

    }
    // news
    const fetchAllNews = async () => {
        try {
            let { data } = await getAllNews()
            let newsResult = data.result

            console.log('getAllNews', newsResult)
            setAllNews(newsResult)
        } catch (err) {
            console.log(err)
        }

    }
    // teachers
    const fetchAllTeachers = async () => {
        try {
            let { data } = await getAllTeachers()
            let newsResult = data.result

            console.log('teachers', newsResult)
            setTeachers(newsResult)
        } catch (err) {
            console.log(err)
        }

    }
    // lessons
    const fetchAlllessons = async () => {
        try {
            let { data } = await getAllLessons()
            let newsResult = data.result

            console.log('teachers', newsResult)
            setLessons(newsResult)
        } catch (err) {
            console.log(err)
        }

    }
    // Employes
    const fetchAllEmployes = async () => {
        try {
            let { data } = await getAllEmployes()
            let newsResult = data.result

            setEmployes(newsResult)
        } catch (err) {
            console.log(err)
        }

    }

    // Student
    const fetchAllStudent = async () => {
        try {
            let { data } = await getAllStudens()
            let newsResult = data.result

            setStudents(newsResult)
            console.log('setStudent', students)
            console.log('setStudentnewsResults', newsResult)

        } catch (err) {
            console.log(err)
        }

    }

    // Comment
    const fetchAllComments = async () => {
        try {
            let { data } = await getAllComments()
            let newsResult = data

            setAllComments(newsResult)
            console.log('getAllComments', newsResult)

        } catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        // courses
        fetchAllCourses()
        // news
        fetchAllNews()
        // teachers
        fetchAllTeachers()
        // lessons
        fetchAlllessons()
        //  Employes
        fetchAllEmployes()
        // Student
        fetchAllStudent()
        // comments
        fetchAllComments()
    }, [])

    useEffect(() => {
        // courses
        fetchAllCourses()

    }, [forceCourse])

    return (
        <AllCourseContext.Provider value={{
            isLoading, setIsLoading,
            refresh, setRefresh,
            allCourses, setAllCourses,
            allNews, setAllNews,
            teachers,
            setTeachers, setTeachers,
            lessons, setLessons,
            employes, setEmployes,
            students, setStudents,
            fetchAllNews, fetchAllComments,
            allComents, setAllComments,
            forceCourse, setforceCourse
        }}>
            {children}
        </AllCourseContext.Provider>
    )
}

export default MainDataContext