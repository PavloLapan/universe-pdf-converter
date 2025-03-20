
export type userHistoryState = {
  data: any;
  loading: boolean;
  error?: string | undefined;
  history?: File[] | []
};

export type userHistoryActions = {
  convertPDF: (data: any) => Promise<void>;
  selectHistoryItem: (data: File | undefined) => void
};

export type userHistoryStore = userHistoryState & userHistoryActions
