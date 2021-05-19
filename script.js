'use strict';

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	remebrerMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			const a = prompt('Один из последних просмотренных фильмов?', ''),
				b = prompt('На сколько оцените его?', '');

			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
				this.movies[a] = b;
				console.log('done');
			} else {
				console.log('error');
				i--;
			}
		}
	},
	start: function () {
		while (this.count == '' || this.count == null || isNaN(this.count)) {
			this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},
	detectPersonalLevel: function () {
		if (this.count < 10) {
			console.log('Просмотрено довольно мало фильмов');
		} else if (this.count >= 10 && this.count < 30) {
			console.log('Вы классический зритель');
		} else if (this.count >= 30) {
			console.log('Вы киноман');
		} else {
			console.log('Произошла ошибка');
		}
	},

	showMyDB: function () {
		if (!this.privat) {
			console.log(this);
		}
	},

	writeYourGenres: function () {
		for (let i = 1; i < 2; i++) {
			let genres = prompt(
				`Введите ваши любимые жанры через запятую`
			).toLowerCase();
			if (genres == null || genres === '') {
				console.log('Введите корректные данные.');
				i--;
			} else {
				this.genres = genres.split(', ');
				this.genres.sort();
			}
		}

		this.genres.forEach((elem, idx) =>
			console.log(`Любимый жанр #${idx + 1} - это ${elem}`)
		);
	},

	toggleVisibleMyDB: function () {
		//this.privat = !this.privat;
		if (this.privat) {
			this.privat = false;
		} else {
			this.privat = true;
		}
	},
};
