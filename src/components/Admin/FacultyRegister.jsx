import React from 'react'
 
const FacultyRegister = () => {
  return (
    <section className="p-10 m-2 bg-gray-950 text-gray-50">
	<form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-950">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-semibold text-3xl">Faculty Register</p>
				{/* <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p> */}
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">First name</label>
					<input id="firstname" type="text" placeholder="First name" className="w-full  border border-spacing-1  rounded-md p-2 text-gray-50  dark:border-gray-100" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="lastname" className="text-sm">Last name</label>
					<input id="lastname" type="text" placeholder="Last name" className="w-full  border border-spacing-1 rounded-md p-2 text-gray-50  dark:border-gray-100" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-sm">Email</label>
					<input id="email" type="email" placeholder="Email" className="w-full  border border-spacing-1 rounded-md p-2 text-gray-50  dark:border-gray-100" />
				</div>
				<div className="col-span-full">
					<label htmlFor="address" className="text-sm">Address</label>
					<input id="address" type="text" placeholder="" className="w-full  border border-spacing-1 rounded-md p-2 text-gray-50  dark:border-gray-100" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="city" className="text-sm">City</label>
					<input id="city" type="text" placeholder="" className="w-full  border border-spacing-1 rounded-md p-2 text-gray-50  dark:border-gray-100" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="state" className="text-sm">State / Province</label>
					<input id="state" type="text" placeholder="" className="w-full  border border-spacing-1 rounded-md p-2 text-gray-50  dark:border-gray-100" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="zip" className="text-sm">ZIP / Postal</label>
					<input id="zip" type="text" placeholder="" className="w-full  border border-spacing-1  rounded-md p-2 text-gray-50  dark:border-gray-100" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<input id="profile" type="file" placeholder="" className="w-full  border border-spacing-0  rounded-md p-2 text-gray-50  dark:border-gray-100" />
				</div>
				<div className='col-span-full sm:col-span-4'>
					<button className='block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600 active:scale-90'>Register</button>
				</div>
				
			</div>
		</fieldset>
		
	</form>
</section>
  )
}

export default FacultyRegister