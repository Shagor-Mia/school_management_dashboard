"use client";

import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { lessonsData, role } from "../../../../lib/data";

type Lesson = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teachers",
    accessor: "teacher",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
    className: "hidden lg:table-cell",
  },
];

const LessonsListPage = () => {
  const renderRow = (item: Lesson) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-PurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>

      <td>
        <div className="flex items-center gap-2">
          <Link href={`/lists/lessons/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-Sky">
              <Image src="/edit.png" alt="View" width={16} height={16} />
            </button>
          </Link>

          {role === "admin" && (
            <Link href={`/lists/lessons/${item.id}`}>
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-Purple">
                <Image src="/delete.png" alt="Delete" width={16} height={16} />
              </button>
            </Link>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white rounded-md p-4 flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Lessons</h1>
        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-Yellow">
              <Image src={"/filter.png"} alt="" height={14} width={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-Yellow">
              <Image src={"/sort.png"} alt="" height={14} width={14} />
            </button>
            {role === "admin" && (
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-Yellow">
                <Image src={"/plus.png"} alt="" height={14} width={14} />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={lessonsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default LessonsListPage;
