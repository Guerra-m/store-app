import { useEffect, useState } from "react";
import { getCategories } from "../../../shared/api/categoria.api";
import type { CategoriaRead } from "../types/Categories";

export const useCategories = () => {
  const [categories, setCategories] = useState<CategoriaRead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const data = await getCategories();
      setCategories(data);
    } catch (err: any) {
      setError(err?.message || "Error cargando categorías");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    categories,
    loading,
    error,
    refetch: fetchCategories,
  };
};