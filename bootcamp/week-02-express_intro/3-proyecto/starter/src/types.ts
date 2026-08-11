// ============================================
// TYPES: Dominio Universidad — Enrollment
// ============================================

export interface Item {
  id: number;
  studentName: string;
  studentEmail: string;
  program: string;      // Programa académico, ej. "Ingeniería de Software"
  course: string;        // Curso específico dentro del programa
  tuitionFee: number;    // Valor de la matrícula
  active: boolean;       // Si la inscripción está activa
}

export type CreateItemDto = Omit<Item, 'id'>;
export type UpdateItemDto = Partial<CreateItemDto>;