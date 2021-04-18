import Session from "api/sessions/Session";

interface ISessionsTableViewProps {
  sessions: Session[];
  pageChanged: (value: number) => void;
  loading: LoadingStatus;
}
