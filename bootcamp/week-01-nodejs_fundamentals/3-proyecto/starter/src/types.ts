// ============================================
// TIPOS — Adapta estas interfaces a tu dominio
// ============================================
// Renombra 'Item' al recurso de tu dominio asignado.
// Ejemplo: Book, Medicine, Member, Dish, Room...

// TODO: Renombrar 'Item' al recurso de tu dominio asignado
// Mi dominio: Universidad (students, programs, courses, enrollments)
// Recurso elegido: Enrollment (inscripción), conecta estudiante + programa + curso
export interface Enrollment {
  id: string;
  studentName: string;
  studentEmail: string;
  program: string; // categoría -> usado con --category
  course: string;
  tuitionFee: number; // price
  active: boolean;
  enrollmentDate: string;
}

// TODO: Agregar campos específicos de tu dominio
// Ejemplo para Biblioteca:
// export interface Book {
//   id: string;
//   title: string;
//   author: string;
//   genre: string;
//   year: number;
//   available: boolean;
// }

// Resumen que el procesador debe calcular
export interface EnrollmentSummary {
  total: number;
  active: number;
  inactive: number;
  averagePrice: number;
  mostExpensive: Enrollment;
  cheapest: Enrollment;
  categories: string[];
}

// Reporte final que se escribirá en output/report.json
export interface Report {
  generatedAt: string;
  appliedFilter: string | null;
  summary: EnrollmentSummary;
  items: Enrollment[];
}
