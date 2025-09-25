import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchBar } from "./search-bar/search-bar";
import { SearchResults } from "./search-results/search-results";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, SearchBar, SearchResults],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  searchQuery: string = '';

  onSearch(query: string) {
    this.searchQuery = query;
  }
}
