export interface Enrollment {
  id: number;
  studentName: string;
  program: string;
  active: boolean;
  createdAt: string;
}

export type CreateItemDto = Omit<Enrollment, 'id' | 'createdAt'>;

export type UpdateItemDto = Partial<CreateItemDto>;

export interface SingleResponse<T> {
  data: T;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

export interface ErrorResponse {
  error: string;
  message: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
}