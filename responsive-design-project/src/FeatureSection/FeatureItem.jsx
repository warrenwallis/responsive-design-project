const FeatureSection = (props) => {
    const { image, title, description } = props;

    return (
        <div className="w-80 m-4">
            <img className="w-28" src={image} />
            <div className="my-4 font-ubuntu text-2xl">{title}</div>
            <div className="text-base text-slate-500">{description}</div>
        </div>
    );
};

export default FeatureSection;