export type DireccionRead = {
  id: number;
  usuario_id: number;
  alias: string | null;
  linea1: string;
  linea2: string | null;
  ciudad: string;
  provincia: string | null;
  codigo_postal: string | null;
  es_principal: boolean;
  created_at: string;
  updated_at: string;
};

export type DireccionCreate = {
  alias?: string;
  linea1: string;
  linea2?: string;
  ciudad: string;
  provincia?: string;
  codigo_postal?: string;
  es_principal?: boolean;
};

export type DireccionUpdate = Partial<DireccionCreate>;
