export const Router = () => {
    const push = (event) => {
        // Отменяем действие по умолчанию, которое должно произойти по клику на ссылку
        event.preventDefault();

        const {
            target: { id },
        } = event;
        const url = event.target.getAttribute('href');

        const heading = document.getElementById('heading');
        // Изменяем заголовок страницы <title></title>
        document.title = id;
        // Меняем URL страницы
        window.history.pushState({ id }, '', url);
        heading.innerHTML = id;
    };

    const links = [
        {
            path: '/',
            id: 'Home',
        },
        {
            path: '/catalog',
            id: 'Catalog',
        },
        {
            path: '/profile',
            id: 'Profile',
        },
    ];

    return (
        <div>
            {links.map((link) => (
                <a
                    key={link.id}
                    href={link.path}
                    id={link.id}
                    onClick={(e) => push(e)}
                >
                    {link.id}
                </a>
            ))}
        </div>
    );
};
