import api from "./axios";

export const upload = async (payload) => {
    try {
        const response = await api.post("/pins/create",
            {
                title: payload.title,
                image: payload.image,
                content: payload.content
            },
            {
                headers: { "Content-Type": "multipart/form-data"}
            }
        )
        alert("업로드 성공");
        return response;
    } catch(error) {
        console.error(error);
        alert("업로드 실패");
        throw error;
    }

};