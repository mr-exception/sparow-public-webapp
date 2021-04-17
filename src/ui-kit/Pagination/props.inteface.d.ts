interface IPaginationProps {
  pageChanged: (value: number) => void;
  current_page: number;
  total_page: number;
  loading: boolean;
}
