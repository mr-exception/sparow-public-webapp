interface IPaginationProps {
  pageChanged: (value: number) => void;
  current_page: number;
  page_count: number;
  loading: boolean;
}
