import "./Pagination.css";
import PaginationMUI from "@mui/material/Pagination";
import { useRecoilState, useRecoilValue } from "recoil";
import { filteredJobsLength, pageState } from "../../atoms/page";

const Pagination = () => {
  const [{ currPage, limit }, setCurrPage] = useRecoilState(pageState);
  const length = useRecoilValue(filteredJobsLength);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrPage((prevState) => {
      return {
        ...prevState,
        currPage: value,
      };
    });
  };
  return (
    <>
      <PaginationMUI
        variant="outlined"
        color="primary"
        count={Math.ceil(length / limit)}
        page={currPage}
        onChange={handleChange}
        sx={{ display: "flex", justifyContent: "flex-end", marginTop: `4rem` }}
      />
    </>
  );
};

export default Pagination;
