export interface Alerte {
  id: number;
  message: string;
  nature: 'valide' | 'warning' | 'info';
}
