import { HiOutlineLocationMarker } from "react-icons/hi";


const HotJobCard = ({ job }) => {

    const { title, company, company_logo, requirements, description, location, salaryRange } = job;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <div className="flex gap-2 m-2">
                <figure>
                    <img className="w-16"
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h4 className="text-2xl">{company}</h4>
                    <p className="flex gap-3 items-center"><HiOutlineLocationMarker></HiOutlineLocationMarker>{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div>
                    {
                        requirements.map(skill => <p>{skill}</p>)
                    }
                </div>
                <div className="card-actions justify-end items-center">
                    <p>Salary: {salaryRange.min}-{salaryRange.max}{salaryRange.currency}</p>
                    <button className="btn btn-primary">Apply</button>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;