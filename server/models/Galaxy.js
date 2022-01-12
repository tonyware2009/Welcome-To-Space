import mongoose from "mongoose"
const Schema = mongoose.Schema


export const GalaxySchema = new Schema({

  name: { type: String, required: true },
  galaxyId: {
    type: Schema.Types.ObjectId, required: true
  },
  imgUrl: { type: String, required: true, default: 'https://placehold.it/300x300' },

  creatorId: { type: Schema.Types.ObjectId, required: true }

},
  { timestamps: true, toJSON: { virtuals: true } })


GalaxySchema.virtual('creator', {

  localField: 'creatorId',

  foreignField: '_id',

  ref: 'profile',

  justOne: true

})