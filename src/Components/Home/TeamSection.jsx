const TeamSection = () => {
    const team = [
        {
            name: "Subrota Roy",
            role: "Frontend Developer",
            img: "https://i.pravatar.cc/150?img=1",
        },
        {
            name: "Farhana Ahmed",
            role: "Backend Developer",
            img: "https://i.pravatar.cc/150?img=2",
        },
        {
            name: "Rakib Hasan",
            role: "Database Admin",
            img: "https://i.pravatar.cc/150?img=3",
        },
        {
            name: "Nadia Akter",
            role: "UI/UX Designer",
            img: "https://i.pravatar.cc/150?img=4",
        },
    ];

    return (
        <section className="py-12 bg-gray-50 text-gray-800">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                            />
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-sm text-gray-600">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
