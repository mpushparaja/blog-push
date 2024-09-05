import { model, models, Schema } from "mongoose";
import { title } from "process";

const postSchema = new Schema({
    title: String,
    description: String,
    image: String,
    created_at: String
},
    { toJSON: { virtuals: true } }
);

postSchema.virtual('short_description').get(function () {
    return this.description?.substring(0, 150);
});

postSchema.virtual('created_at_formatted').get(function () {
    return changeDateFormat(this.created_at);
});

function changeDateFormat(date_str: any) {
    const date = new Date(date_str);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

const PostModel = models.Post || model('Post', postSchema);

export default PostModel;