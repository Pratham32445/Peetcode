import axios from "axios";

const BACKEND_URI = "http://localhost:3000";

export const fetchSubmissionResult = async (Id: string, status : string = "status") => {
  try {
    const { data } = await axios.post(
      `${BACKEND_URI}/api/problem/submit/result`,
      {
        Id,
        status,
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
