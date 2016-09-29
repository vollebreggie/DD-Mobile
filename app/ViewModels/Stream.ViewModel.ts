import { User } from '../Model/User.Model';
import { Comment } from '../Model/Comment.Model';
import { Stream } from '../Model/Stream.Model';

export class StreamViewModel {

    constructor(
        public streams: Stream[],
        public comments: Comment[],
        public user: User,
        public date: Date) { }
        
}