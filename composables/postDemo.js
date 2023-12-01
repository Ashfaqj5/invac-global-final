import axios from "axios";

export const postDemo = async (data) => {
  try {
    const url = "https://api.sqordbot.com/api/post-vacdemo";
    const response = await axios({
      method: "post",
      url: url,
      data: data,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error occurred while making the POST request:", error);
    throw error;
  }
};
