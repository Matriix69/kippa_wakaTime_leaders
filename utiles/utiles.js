export const findUserFromState = (leaders, params, query) => {
    if (!leaders) return;
    const findUser = leaders.find(({ user }) => user.username === params || user.id === query);
    return findUser;
};

export const convertSeconds = (seconds) => {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    return hours > 0 ? hours + ' hrs ' + minutes + ' min' : minutes + ' min';
};

export const getPercentage = (num, max) => {
    return ((num / max) * 100).toFixed(2);
};

export const mockUserData = [
    {
        rank: 1,
        running_total: {
            daily_average: 61153,
            human_readable_daily_average: '16 hrs 59 mins',
            human_readable_total: '118 hrs 54 mins',
        },
        languages: [
            { name: 'PHP', total_seconds: 215907.786402 },
            { name: 'Vue.js', total_seconds: 81596.020431 },
        ],
        total_seconds: 428072.531868,
        user: {
            display_name: 'Anonymous User',
            email: null,
            human_readable_website: '',
            id: '6d1998ab-54ae-4acb-9077-58f7e7df53b7',
            is_email_public: false,
            is_hireable: false,
            location: null,
            photo: 'https://wakatime.com/photo/6d1998ab-54ae-4acb-9077-58f7e7df53b7',
            photo_public: true,
            username: null,
            website: '',
            city: {
                ascii_state: 'Valle del Cauca',
                country: 'Colombia',
            },
        },
    },
    {
        rank: 2,
        running_total: {
            daily_average: 61153,
            human_readable_daily_average: '16 hrs 59 mins',
            human_readable_total: '118 hrs 54 mins',
        },
        languages: [
            { name: 'PHP', total_seconds: 215907.786402 },
            { name: 'Vue.js', total_seconds: 81596.020431 },
        ],
        total_seconds: 428072.531868,
        user: {
            display_name: 'Anonymous User',
            email: null,
            human_readable_website: '',
            id: '6d1998ab-54ae-4acb-9077-68f7e7df53b7',
            is_email_public: false,
            is_hireable: false,
            location: null,
            photo: 'https://wakatime.com/photo/6d1998ab-54ae-4acb-9077-58f7e7df53b7',
            photo_public: true,
            username: null,
            website: '',
            city: {
                ascii_state: 'Valle del Cauca',
                country: 'Colombia',
            },
        },
    },
];
