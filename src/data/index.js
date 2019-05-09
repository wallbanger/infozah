export const enumTypes = {
    ImportanceValue: [
        { id: 1, title: 'Важливо' },
        { id: 2, title: 'Нормально' },
        { id: 3, title: 'Дуже важливо' },
    ],
    JobPositionValue: [
        { id: 1, title: 'Аграрний сектор' },
        { id: 2, title: 'Тракторист', parentId: 1 },
        { id: 7, title: 'Проджект менеджер', parentId: 6 },
        { id: 5, title: 'Програміст', parentId: 4 },
        { id: 8, title: 'Офіс менеджер', parentId: 6 },
        { id: 3, title: 'Фермер', parentId: 1 },
        { id: 4, title: 'IT' },
        { id: 6, title: 'Менеджмент', parentId: 4 },
    ],
};

export const schema = {
    code: 'Person',
    attributes: [
        {
            title: 'Ім\'я',
            code: 'firstName',
            fieldType: 'TextInput',
            validation: {
                required: true,
            },
        },
        {
            title: 'Прізвище',
            code: 'lastName',
            fieldType: 'TextInput',
            validation: {
                required: true,
            },
        },
        {
            title: 'Вік',
            fieldType: 'NumberInput',
            code: 'age',
            type: 'int',
        },
        {
            title: 'Email',
            code: 'email',
            fieldType: 'TextInput',
            validation: {
                email: true,
            },
        },
        {
            title: 'Важливість',
            code: 'importance',
            type: 'enum',
            fieldType: 'SelectList',
            enumType: 'ImportanceValue',
        },
        {
            title: 'Посада',
            code: 'jobPosition',
            type: 'enum',
            enumType: 'JobPositionValue',
            fieldType: 'SelectList',
        },
        {
            title: 'Дата виходу на роботу',
            code: 'startJobAt',
            type: 'date',
            fieldType: 'DatePicker',
        },
        {
            title: 'Телефон',
            code: 'phone',
            multiple: true,
            fieldType: 'NumberInput',
            validation: {
                pattern: '^\\+38 \\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}$',
            },
        },
    ],
};
