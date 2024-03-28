import PropTypes from "prop-types";

const TagDetails = ({tags}) => {
    return (
        <div className="flex justify-start gap-6">
            {
                tags.map((tag,idx)=><button key={idx} className="btn text-[#23BE0A] bg-[#23BE0A0D] border-none rounded-3xl">#{tag}</button>)
            }
        </div>
    );
};

TagDetails.propTypes = {
    tags: PropTypes.array,
  };

export default TagDetails;