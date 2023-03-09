import api from "../axios";

// export const getPinDetail = async (payload) => {
//   try {
//     const response = await instance.get(`/pins/${payload}`);
//     console.log(response);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getPinDetailComment = async (payload) => {
  try {
    const response = await api.get(`pins/${payload}/comments`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getPinDetail = async (id) => {
  try {

    const response = await api.get(`/pins/${id}`,  {
    })

    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const switchDetail = async (payload) => {
  try {
    const response = await api.patch(`/pins/${payload.id}`, {
      title: payload.title,
      content: payload.content,
    },
    {
      headers: { "Content-Type": "multipart/form-data"}
    }
  );
    });

      console.log(response)
      return response
  } catch(error) {
      console.log(error)
    }
  }

  export const removeDetail = async(payload) => {
    try {
      await api.delete(`/pins/${payload.id}`);
    }
    catch(error) {
      console.log(error)
    }
  }

  export const likeSwitch = async (payload) => {
    try{
      await api.post(`/pins/${payload.id}/likes`, {      
      });
    }
    catch(error) {
      console.log(error)
    }
  };

  export const deleteLike = async (payload) => {
    try{
      await api.delete(`/pins/${payload.id}/likes`, {      
      });
    }
    catch(error) {
      console.log(error)
    }
  };

