import { useEffect, useState } from "react";
import { processApi } from "../api";

export type ProocessItem = {
  id: string;
  name: string;
};

export function useProcessList() {
  const [processList, setProcessList] = useState<ProocessItem[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchList = async () => {
    setLoading(true);
    await processApi
      .list()
      .then(setProcessList)
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchList();
  }, []);

  const create = async (name: string) => {
    await processApi.create(name);
    fetchList();
  };

  const deleteProcess = async (id: string) => {
    await processApi.delete(id);
    fetchList();
  };

  const list = processList.map((item) => ({
    ...item,
    onDelete: () => deleteProcess(item.id),
  }));

  return {
    list,
    create,
    loading,
  };
}
