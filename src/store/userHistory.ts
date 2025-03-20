import {create} from "zustand";
import {devtools, persist} from 'zustand/middleware';
import {userHistoryStore} from "../types/userHistory.types.ts";
import {convertTextToPDF} from "../api/pdfConvert.ts";
import { immer } from "zustand/middleware/immer";
import {fileToBase64} from "../services/fileToBase64.ts";


export const useHistoryStore = create<userHistoryStore>()(
  persist(
    devtools(
      immer((set) => ({
        data: null,
        history: [],
        loading: false,
        error: "",

        convertPDF: async (text) => {
          set({ loading: true });
          try {
            const pdfFile = await convertTextToPDF(text);

            if (pdfFile) {
              const base64 = await fileToBase64(pdfFile);
              set((state) => {
                state.history.unshift(base64);
                state.data = base64;
              });
            }
          } catch (error) {
            set({ error: (error as Error).message });
          } finally {
            set({ loading: false });
          }
        },

        selectHistoryItem: (pdfFile: File) => {
          set({ data: pdfFile });
        },
      }))
    ),
    {
      name: "userHistoryStore",
      partialize: (state) => ({ history: state.history }),
    }
  )
);




