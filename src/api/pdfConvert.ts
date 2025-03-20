import axios from "axios";
import { API_URL } from "./apiDictionary.ts";
import { CONVERT_API } from "../../env.ts";
import { v4 as uuidV4 } from "uuid";

export const convertTextToPDF = async (text: string): Promise<File | null> => {
  try {
    const response = await axios.post(
      `${API_URL.mainUrl}?apiKey=${CONVERT_API}`,
      { text },
      { responseType: "blob" }
    );

    return new File([response.data], `${uuidV4()}.pdf`, { type: "application/pdf" });
  } catch (error) {
    console.error("Error converting text to PDF", error);
    return null;
  }
};
