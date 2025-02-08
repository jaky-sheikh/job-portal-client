import { useLoaderData } from "react-router-dom";


const JobDetails = () => {

    const { title, company, deadline } = useLoaderData();


    return (
        <div className="m-10">
            <h2 className="text-2xl text-purple-400">Job Details for {title}</h2>
            <p>Apply for {company}</p>
            <p>Deadline {deadline}</p>
            <button className="btn btn-primary">Apply Now</button>
        </div>
    );
};

export default JobDetails;