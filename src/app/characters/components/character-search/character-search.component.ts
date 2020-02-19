import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.scss']
})
export class CharacterSearchComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      search: new FormControl(null, [Validators.required, Validators.pattern('^[1-9]\\d*$')])
    });
  }

  findCharacter() {
    const id = this.searchForm.value.search;
    this.router.navigate(['detail', id], { relativeTo: this.route });
  }

}
