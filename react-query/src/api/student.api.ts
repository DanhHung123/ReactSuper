import { Student, Students } from 'types/student.type'
import http from 'utils/htpp'

export const getStudents = (page: number, limit: number) => {
  return http.get<Students>('students', {
    params: {
      _page: page,
      _limit: limit
    }
  })
}

export const addStudent = (student: Omit<Student, 'id'>) => {
  return http.post<Student>('students', student)
}

export const getStudent = (id: number | string) => {
  return http.get<Student>(`students/${id}`)
}

export const updateStudent = (id: string | number, student: Student) => {
  return http.put<Student>(`students/${id}`, student)
}

export const deleteStudent = (id: string | number) => {
  return http.delete<{}>(`students/${id}`)
}
