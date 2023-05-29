export const PROFIILE_PARAMS = [
    {
        columnTitle: "Full Name",
        key: "name",
        getValue: (profile) => `${profile.name.first} ${profile.name.last}`,
    },
    {
        columnTitle: "Gender",
        key: "gender",
        getValue: (profile) => profile.gender,
    },
    {
        columnTitle: "Age",
        key: "age",
        getValue: (profile) => profile.dob.age,
    },
    {
        columnTitle: "Phone",
        key: "phone",
        getValue: (profile) => profile.phone,
    },
    {
        columnTitle: "Cell",
        key: "cell",
        getValue: (profile) => profile.cell,
    },
    {
        columnTitle: "Email",
        key: "email",
        getValue: (profile) => profile.email,
    }
];

export const generateProfile = (profileResult) => {
    const profile = {};
    PROFIILE_PARAMS.forEach(({ key, getValue }) => {
        profile[key] = getValue(profileResult);
    });
    return profile;
};
