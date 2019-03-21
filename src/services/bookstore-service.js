export default class BookstoreService {

    data = [
        {
            id: 1,
            title: 'Book 1',
            author: 'Deni',
            text: 'Милые собачки бывают разных форм и размеров. ' +
                'Некоторые милые собачки милы за свои умилительные мордочки, ' +
                'другие за свои маленькие пропорции, а третьи даже за свои огромные размеры.' +
                'Милые собачки бывают разных форм и размеров.',
            likes: 17,
            image: 'https://elgarblog.files.wordpress.com/2014/01/education-books.jpg?w=540&h=359',
            time: '19:30',
            price: 250
        },
        {
            id: 2,
            title: 'Book 2',
            author: 'Mark Dogger',
            text: 'Милые собачки бывают разных форм и размеров. ' +
                'Некоторые милые собачки милы за свои умилительные мордочки, ' +
                'другие за свои маленькие пропорции, а третьи даже за свои огромные размеры.' +
                'Милые собачки бывают разных форм и размеров.',
            likes: 9,
            image: 'https://ashmagautam.files.wordpress.com/2013/11/mcj038257400001.jpg?w=614&h=614',
            time: '20:18',
            price: 320
        },
        {
            id: 3,
            title: 'Book 3',
            author: 'Andy',
            text: 'Милые собачки бывают разных форм и размеров. ' +
                'Некоторые милые собачки милы за свои умилительные мордочки, ' +
                'другие за свои маленькие пропорции, а третьи даже за свои огромные размеры.' +
                'Милые собачки бывают разных форм и размеров.',
            likes: 12,
            image: 'https://www.helperhelper.com/wp-content/uploads/2015/10/bigstock-Stack-Of-Books-70033240.jpg',
            time: new Date().getHours() + ':' + new Date().getMinutes(),
            price: 250
        }
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(Math.random() > 0.80) {
                    reject(new Error('Ошибка! Перезагрузите'))
                }
                else {
                    resolve(this.data)
                }

            }, 1000);
        });
    }
}