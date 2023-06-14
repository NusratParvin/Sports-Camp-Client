import React from 'react';

const PopInstructorsCard = ({ instructors }) => {
    const { totalStudentsEnrolled, classCount ,photoURL,instructorName,email} = instructors
    console.log(totalStudentsEnrolled);
    return (
        <div>

			<div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-300 dark:bg-gray-100 dark:text-gray-800">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center object-cover  rounded-full dark:bg-gray-500" src={photoURL} />
				<div className="flex-1 my-4">
					<p className="text-xl font-semibold leading-snug">{instructorName}</p>
					<p>{email}</p>
				</div>
				<div className="flex items-center justify-center p-3 space-x-3 border-t-2">
					<p className=' pr-4 border-r border-gray-800/40 text-xs'><span>{totalStudentsEnrolled}</span><br />Enrolled</p>
					<p className=' pl-4 text-xs'><span>{classCount}</span><br />Classes</p>
					
				</div>
			</div>
	

        </div>
    );
};

export default PopInstructorsCard;