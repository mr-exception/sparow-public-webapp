import Session from "api/sessions/Session";

interface ISessionsTableViewProps {
  sessions: Session[];
  current_page: number;
  pageChanged: (value: number) => void;
  page_count: number;
  loading: LoadingStatus;
}
