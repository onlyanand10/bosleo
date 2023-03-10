import React from "react";
import TableRow from "./TableRow";
import data from "./data.json";

const AllMoviesTable = () => {
  return (
    <>
      <div className="tableNew mx-w tableForSS border border-tableBoarder rounded-t-lg mt-8 ">
        <div className="tableHead p-4 px-7 flex justify-around rounded-t-lg bg-tableHeadBg ">
          <p className="font-medium text-sm text-black w-[23%] flex gap-4">
            Name{" "}
            <span>
              <svg
                width="12"
                height="16"
                viewBox="0 0 12 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6602 9.72266L6.59765 14.7852C6.43843 14.9423 6.22372 15.0304 6 15.0304C5.77628 15.0304 5.56156 14.9423 5.40234 14.7852L0.339843 9.72266C0.181334 9.56415 0.0922852 9.34916 0.0922852 9.125C0.0922852 8.90084 0.181334 8.68585 0.339843 8.52734C0.498351 8.36884 0.713334 8.27979 0.937499 8.27979C1.16166 8.27979 1.37665 8.36884 1.53515 8.52734L5.15625 12.1484V1.8125C5.15625 1.58872 5.24514 1.37411 5.40338 1.21588C5.56161 1.05764 5.77622 0.96875 6 0.96875C6.22377 0.96875 6.43838 1.05764 6.59662 1.21588C6.75485 1.37411 6.84375 1.58872 6.84375 1.8125V12.1484L10.4648 8.52734C10.6233 8.36884 10.8383 8.27979 11.0625 8.27979C11.2867 8.27979 11.5016 8.36884 11.6602 8.52734C11.8187 8.68585 11.9077 8.90084 11.9077 9.125C11.9077 9.34916 11.8187 9.56415 11.6602 9.72266Z"
                  fill="black"
                />
              </svg>
            </span>
          </p>
          <p className="font-medium text-sm text-black w-[20%]">Category</p>
          <p className="font-medium text-sm text-black w-[13%]">
            Popularity/Interest
          </p>
          <p className="font-medium text-sm text-black w-[11%]">Watchlists</p>
          <p className="font-medium text-sm text-black w-[11%]">Streams</p>
          <p className="font-medium text-sm text-black w-[11%]">Release Date</p>
          <p className="font-medium text-sm text-black w-[11%]"></p>
        </div>

        {data.map((x) => {
          return <TableRow {...x}></TableRow>;
        })}
      </div>
    </>
  );
};

export default AllMoviesTable;
