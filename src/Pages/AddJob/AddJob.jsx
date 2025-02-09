import Swal from "sweetalert2";


const AddJob = () => {

    const handleAddJob = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        // console.log(formData.entries())
        const initialData = Object.fromEntries(formData.entries());
        // console.log(initialData);
        const { min, max, currency, ...newJob } = initialData;
        newJob.salaryRange = { min, max, currency }
        newJob.requirements = newJob.requirements.split('\n')
        newJob.responsibilities = newJob.responsibilities.split('\n')
        console.log(newJob)

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Job has been added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // navigate('/myApplications')
                }
            })

    }

    return (
        <div>
            <h2>Post a new job</h2>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleAddJob} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <input type="text" name="title" placeholder="Job Title" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Location</span>
                        </label>
                        <input type="text" name="location" placeholder="Job Location" className="input input-bordered" required />
                        {/* <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label> */}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Type</span>
                        </label>
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Pick a job type</option>
                            <option>Full-time</option>
                            <option>Part-time</option>
                            <option>Intern</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Category</span>
                        </label>
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Pick a job category</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Finance</option>
                            <option>Teaching</option>
                        </select>
                    </div>
                    {/* salary range */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Salary range</span>
                            </label>
                            <input type="text" name="min" placeholder="Min" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="text" name="max" placeholder="Max" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Currency</span>
                            </label>
                            <select name="currency" className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>INR</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered" name="description" placeholder="Job Description" required></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company Name</span>
                        </label>
                        <input type="text" name="company" placeholder="Company name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Requirements</span>
                        </label>
                        <textarea className="textarea textarea-bordered" name="requirements" placeholder="Put each requirements in a new line" required></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Responsibility</span>
                        </label>
                        <textarea className="textarea textarea-bordered" name="responsibilities" placeholder="Put each responsibility in a new line" required></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Application Deadline</span>
                        </label>
                        <input type="date" name="applicationDeadline" placeholder="Application Deadline" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">HR Name</span>
                        </label>
                        <input type="text" name="hr_name" placeholder="HR Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">HR Email</span>
                        </label>
                        <input type="text" name="hr_email" placeholder="HR Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company Logo URL</span>
                        </label>
                        <input type="text" name="company_logo" placeholder="Company Logo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJob;