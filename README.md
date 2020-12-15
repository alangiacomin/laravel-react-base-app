## About

Base application using Laravel + React

Main dependencies:
* [Laravel](https://laravel.com/)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Voyager](https://voyager.devdojo.com/)

## Setup

Main project in new folder
```
composer create-project alangiacomin/laravel-react-base-app <folder>
php artisan migrate:fresh --seed
```

Admin user
```
php artisan voyager:admin admin@admin.com --create
```

Execute server
```
php -S localhost:8000 -t public
```

## License

This package is licensed under the [MIT license](LICENSE.md).
