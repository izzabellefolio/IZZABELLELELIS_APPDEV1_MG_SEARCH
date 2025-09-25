import { Component, Input } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

interface SearchItems {
  title: string;
  link: string;
  description: string;
}

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './search-results.html',
  styleUrl: './search-results.css'
})
export class SearchResults {
  @Input() query: string = '';
  items: SearchItems[] = [
    {
      title: 'Angular',
      link: 'https://angular.io',
      description: 'A platform for building mobile and desktop web applications.'
    },
    {
      title: 'React',
      link: 'https://reactjs.org',
      description: 'A JavaScript library for building user interfaces.'
    },
    {
      title: 'Vue',
      link: 'https://vuejs.org',
      description: 'The Progressive JavaScript Framework.'
    },
    {
      title: 'Python',
      link: 'https://www.python.org',
      description: 'A programming language that lets you work quickly and integrate systems more effectively.'
    },
    {
      title: 'JavaScript',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      description: 'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.'
    },
    {
      title: 'TypeScript',
      link: 'https://www.typescriptlang.org/',
      description: 'TypeScript is a strict syntactical superset of JavaScript and adds optional static typing to the language.'
    },
    {
      title: 'Django',
      link: 'https://www.djangoproject.com/',
      description: 'A high-level Python Web framework that encourages rapid development and clean, pragmatic design.'
    },
    {
      title: 'Flask',
      link: 'https://flask.palletsprojects.com/',
      description: 'A lightweight WSGI web application framework in Python.'
    },
    {
      title: 'Ruby on Rails',
      link: 'https://rubyonrails.org/',
      description: 'A server-side web application framework written in Ruby under the MIT License.'
    }
  ];
  get filteredItems(): SearchItems[] {
    if (!this.query) {
      return this.items;
    }
    return this.items.filter(item => item.title.toLowerCase().includes(this.query.toLowerCase()) || item.description.toLowerCase().includes(this.query.toLowerCase()));
  }
}
