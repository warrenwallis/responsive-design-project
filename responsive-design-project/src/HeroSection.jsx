const HeroSection = () => {
    return (
        <div className="flex justify-center font-ubuntu">
            <div className="w-full max-w-6xl flex flex-col-reverse mx-16 justify-center sm:items-center md:flex-row">
                <div className="text-5xl md:mr-4">
                    Something {' '}
                    <span className="text-amber-500">Catchy</span> {' '}
                    And {' '}
                    <span className="text-red-500 block sm:inline-block">Technological</span>
                    <button className="border-4 border-violet-800 text-lg px-14 py-3 mt-8 block">
                        Learn More
                    </button>
                </div>
                <img className="mb-8 md:w-[450px]" src="https://static-task-assets.react-formula.com/963190.png" />
            </div>
        </div>
    );
};

export default HeroSection;