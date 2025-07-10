import type { ProocessItem } from "./model/use-process-list";

export const processApi = {
    async list() {
        return await fetch("api/processes")
        .then(response => response.json()) as Promise<ProocessItem[]>;
    },

    async create(name: string) {
        return await fetch("api/processes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name })
        });
    },

    delete: async (id: string) => {
        return await fetch(`api/processes/${id}`, {
            method: "DELETE"
        });
    }
}