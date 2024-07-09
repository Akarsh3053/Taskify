import moment from "moment";
import React from "react";
import { getInitials } from "../../utils";


const UserTable = ({ users }) => {
    const TableHeader = () => (
        <thead className='border-b border-gray-300 '>
            <tr className="text-center italic text-lg animate-bounce text-teal-500 font-bold">
                <th className="underline" colSpan={2}>Active users</th>
            </tr>
            <tr className='text-black  text-left'>
                <th className='py-2'>Full Name</th>
                <th className='py-2'>Created At</th>
            </tr>
        </thead>
    );

    const TableRow = ({ user }) => (
        <tr className='border-b border-gray-200  text-gray-600 hover:bg-gray-400/10'>
            <td className='py-2'>
                <div className='flex items-center gap-3'>
                    <div className='w-9 h-9 rounded-full text-white flex items-center justify-center text-sm bg-violet-700'>
                        <span className='text-center'>{getInitials(user?.name)}</span>
                    </div>

                    <div>
                        <p> {user.name}</p>
                        <span className='text-xs text-black'>{user?.role}</span>
                    </div>
                </div>
            </td>

            <td className='py-2 text-sm'>{moment(user?.createdAt).fromNow()}</td>
        </tr>
    );

    return (
        <div className='w-full md:w-1/3 bg-white h-fit px-2 md:px-6 py-4 shadow-md rounded'>
            <table className='w-full mb-5'>
                <TableHeader />
                <tbody>
                    {users?.map((user, index) => (
                        <TableRow key={index + user?._id} user={user} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable