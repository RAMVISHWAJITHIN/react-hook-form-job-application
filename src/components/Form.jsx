import { useForm } from "react-hook-form"

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    console.log(data)
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Job Application Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
          <label className="block font-medium">First Name</label>
          <input {...register("FirstName", { required: "First name is required", minLength: { value: 4, message: "Minimum length is 4" }, maxLength: 20 })} className="w-full p-2 border rounded" />
          {errors.FirstName && <p className="text-red-500 text-sm">{errors.FirstName.message}</p>}
        </div>

        <div>
          <label className="block font-medium">Middle Name</label>
          <input {...register("Midname")} className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block font-medium">Last Name</label>
          <input {...register("Lastname", { required: "Last name is required" })} className="w-full p-2 border rounded" />
          {errors.Lastname && <p className="text-red-500 text-sm">{errors.Lastname.message}</p>}
        </div>

        <div>
          <label className="block font-medium">Email Address</label>
          <input type="email" {...register("Email", { required: "Email is required" })} className="w-full p-2 border rounded" />
          {errors.Email && <p className="text-red-500 text-sm">{errors.Email.message}</p>}
        </div>

        <div>
          <label className="block font-medium">Phone Number</label>
          <input type="tel" {...register("Phone", { required: "Phone number is required" })} className="w-full p-2 border rounded" />
          {errors.Phone && <p className="text-red-500 text-sm">{errors.Phone.message}</p>}
        </div>

        <div>
          <label className="block font-medium">Street Address</label>
          <input {...register("Street", { required: "Street is required" })} className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block font-medium">City</label>
          <input {...register("City", { required: "City is required" })} className="w-full p-2 border rounded" />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block font-medium">State</label>
            <input {...register("State", { required: "State is required" })} className="w-full p-2 border rounded" />
          </div>
          <div className="flex-1">
            <label className="block font-medium">Country</label>
            <input {...register("Country", { required: "Country is required" })} className="w-full p-2 border rounded" />
          </div>
        </div>

        <div>
          <label className="block font-medium">Job Role</label>
          <select {...register("Role", { required: "Role is required" })} className="w-full p-2 border rounded">
            <option value="">Select a position</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Fullstack Developer">Fullstack Developer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Resume Link (Google Drive, etc.)</label>
          <input type="url" {...register("ResumeLink", { required: "Resume link is required" })} placeholder="https://..." className="w-full p-2 border rounded" />
        </div>

        <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  )
}

export default Form;
