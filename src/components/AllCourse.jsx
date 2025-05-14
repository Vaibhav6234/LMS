import React from 'react'

const AllCourse = () => {
  return (
    <div className="max-w-xs rounded-md shadow-md bg-gray-950 dark:text-gray-50">
	<img src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="object-cover object-center w-full rounded-t-md h-[150px] dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
			<p className="text-gray-400 ">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md active:scale-90  bg-violet-600 text-gray-50">Download</button>
	</div> 
</div>
  )
}

export default AllCourse