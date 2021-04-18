import Session from "api/sessions/Session";

interface ISessionsResultViewProps {
  sessions: Session[];
  pageChanged: (value: number) => void;
  loading: LoadingStatus;
}

interface ISessionRowProps {
  session: Session;
}
