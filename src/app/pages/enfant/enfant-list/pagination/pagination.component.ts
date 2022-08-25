import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent{
  pagination = {
    length : 20, // RECUP enfants.lenght
    pageSize:8,
    pageSizeOptions: [2,4,6,8,10]
  }

  @Output("pagination") paginationEvent = new EventEmitter<PageEvent>()
  @Input("length")
  set Length(v: number) { this.pagination.length = v; console.log(v) }
  get Length(): number { return this.pagination.length; }

  changePage(pageEvent: PageEvent) {
    console.log(pageEvent);
    this.paginationEvent.emit(pageEvent);
  }
}
