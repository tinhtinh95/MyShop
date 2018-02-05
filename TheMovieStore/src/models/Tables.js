export const MovieSchema = {
    name: 'Movie',
    primaryKey: 'id',
    properties: {
        id: 'int',
        title: 'string',
        poster_path: 'string',
        release_date: 'string',
        vote_average: 'string',
        overview: 'string'
    }
};

export const UserInfoSchema = {
    name: 'User',
    primaryKey: 'id',
    properties: {
        id: 'int',
        username: 'string',
        email: 'string',
        doB: 'string',
        sex: 'string',
        avt: 'string'
    }
};

export const ReminderSchema = {
    name: 'Reminder',
    primaryKey: 'id',
    properties: {
         id: 'int',
        title: 'string',
        poster_path: 'string',
        release_date: 'string',
        vote_average: 'string',
        overview: 'string',
        reminderTime:'string'
    }
}