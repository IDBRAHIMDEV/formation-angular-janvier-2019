import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent {

  @Input('like') like = 0;
  @Input('dislike') disLike = 0;

  @Output('changeVoteLike') changeVoteLike = new EventEmitter();

  @Output('changeVoteDislike') changeVoteDislike = new EventEmitter();

  constructor() { }

  addLike() {
    this.like++;
    this.changeVoteLike.emit(this.like)
  }

  addDisLike() {
    this.disLike++;
    this.changeVoteDislike.emit(this.disLike)
  }

}
