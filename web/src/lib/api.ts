
export async function validateRepository(owner: string, repo: string): Promise<boolean> {
    try {
        const response = await fetch("/api/validate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ owner, repo }),
        });

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("Repository not found or private");
            }
            throw new Error("Validation failed");
        }

        return true;
    } catch (error) {
        throw error;
    }
}
